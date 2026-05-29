"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  const lerp = useCallback((start, end, factor) => {
    return start + (end - start) * factor;
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Don't run on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor]")
      ) {
        cursor.classList.add("is-hovering");
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor]")
      ) {
        cursor.classList.remove("is-hovering");
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.add("is-hidden");
    };

    const handleMouseEnter = () => {
      cursor.classList.remove("is-hidden");
    };

    const animate = () => {
      posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.15);
      posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.15);

      cursor.style.left = `${posRef.current.x}px`;
      cursor.style.top = `${posRef.current.y}px`;

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [lerp]);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
