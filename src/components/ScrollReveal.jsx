"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.15,
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if specified
            if (delay > 0) {
              setTimeout(() => {
                entry.target.classList.add("is-revealed");
              }, delay);
            } else {
              entry.target.classList.add("is-revealed");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      data-reveal={direction}
      className={className}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
