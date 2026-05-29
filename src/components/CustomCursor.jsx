"use client";

import { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const isHovering = useRef(false);

  const lerp = useCallback((start, end, factor) => {
    return start + (end - start) * factor;
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Don't run on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor]")
      ) {
        isHovering.current = true;
        dot.classList.add("is-hovering");
        ring.classList.add("is-hovering");
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor]")
      ) {
        isHovering.current = false;
        dot.classList.remove("is-hovering");
        ring.classList.remove("is-hovering");
      }
    };

    const handleMouseLeave = () => {
      dot.classList.add("is-hidden");
      ring.classList.add("is-hidden");
    };

    const handleMouseEnter = () => {
      dot.classList.remove("is-hidden");
      ring.classList.remove("is-hidden");
    };

    const animate = () => {
      // Dot follows mouse directly (fast)
      dotPos.current.x = lerp(dotPos.current.x, targetPos.current.x, 0.35);
      dotPos.current.y = lerp(dotPos.current.y, targetPos.current.y, 0.35);

      // Ring follows with 120ms lag (slower lerp)
      ringPos.current.x = lerp(ringPos.current.x, targetPos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, targetPos.current.y, 0.12);

      dot.style.transform = `translate(${dotPos.current.x - (isHovering.current ? 6 : 4)}px, ${dotPos.current.y - (isHovering.current ? 6 : 4)}px)`;
      ring.style.transform = `translate(${ringPos.current.x - (isHovering.current ? 26 : 18)}px, ${ringPos.current.y - (isHovering.current ? 26 : 18)}px)`;

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

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
