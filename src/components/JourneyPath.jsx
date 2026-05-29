"use client";

import { useEffect, useRef } from "react";

export default function JourneyPath() {
  const wrapperRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !fillRef.current) return;
      
      const rect = wrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the track we've scrolled past
      const scrollStart = rect.top + windowHeight * 0.3; // Start filling when top is 30% down the screen
      const scrollEnd = rect.bottom - windowHeight * 0.3; // Finish filling before bottom hits bottom
      
      const scrollRange = scrollEnd - scrollStart;
      if (scrollRange <= 0) return;
      
      const currentScroll = windowHeight - scrollStart;
      const progress = Math.max(0, Math.min(1, currentScroll / scrollRange));
      
      fillRef.current.style.height = `${progress * 100}%`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="journey-progress-wrapper" ref={wrapperRef}>
      <div className="journey-progress-fill" ref={fillRef}></div>
    </div>
  );
}
