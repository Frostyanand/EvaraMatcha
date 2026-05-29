"use client";

import { useEffect, useRef } from "react";

export default function JourneyPath() {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;

    // Get path total length
    const pathLength = path.getTotalLength();

    // Set initial state: invisible
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const handleScroll = () => {
      const svgRect = svg.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on how much of the SVG container is scrolled through
      const scrollStart = svgRect.top + windowHeight * 0.3;
      const scrollEnd = svgRect.bottom - windowHeight * 0.3;
      const scrollRange = scrollEnd - scrollStart;

      if (scrollRange <= 0) return;

      const currentScroll = windowHeight - svgRect.top;
      const progress = Math.max(0, Math.min(1, (currentScroll - windowHeight * 0.3) / scrollRange));

      // Draw path
      path.style.strokeDashoffset = pathLength * (1 - progress);

      // Activate markers based on progress
      markersRef.current.forEach((marker, index) => {
        if (!marker) return;
        const markerThreshold = (index + 1) / (markersRef.current.length + 1);
        if (progress >= markerThreshold) {
          marker.classList.add("is-active");
        } else {
          marker.classList.remove("is-active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <svg
      ref={svgRef}
      className="journey-path-svg"
      viewBox="0 0 100 900"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="pathGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Squiggle path connecting the three nodes */}
      <path
        ref={pathRef}
        className="journey-squiggle"
        d="M 65 80 C 65 150, 35 200, 35 280 C 35 360, 65 400, 65 480 C 65 560, 35 600, 35 680 C 35 730, 50 780, 65 820"
        vectorEffect="non-scaling-stroke"
      />

      {/* Node markers */}
      <circle
        ref={(el) => (markersRef.current[0] = el)}
        className="journey-node-marker"
        cx="65"
        cy="80"
        r="5"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        ref={(el) => (markersRef.current[1] = el)}
        className="journey-node-marker"
        cx="35"
        cy="480"
        r="5"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        ref={(el) => (markersRef.current[2] = el)}
        className="journey-node-marker"
        cx="65"
        cy="820"
        r="5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
