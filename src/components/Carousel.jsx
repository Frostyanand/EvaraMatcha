"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function Carousel({ items, renderItem, className = "" }) {
  const [activeIndex, setActiveIndex] = useState(Math.floor((items?.length || 0) / 2));
  const isHoveredRef = useRef(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items?.length]);

  useEffect(() => {
    if (!items || items.length <= 1) return;

    const interval = setInterval(() => {
      if (!isHoveredRef.current) {
        nextSlide();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [items?.length, nextSlide]);

  if (!items || items.length === 0) return null;

  return (
    <div 
      className={`carousel-3d-wrapper ${className}`}
      onMouseEnter={() => (isHoveredRef.current = true)}
      onMouseLeave={() => (isHoveredRef.current = false)}
    >
      <div className="carousel-3d-container">
        {items.map((item, index) => {
          let offset = index - activeIndex;
          
          // Wrap around logic for infinite loop effect
          const half = Math.floor(items.length / 2);
          if (offset > half) offset -= items.length;
          if (offset < -half) offset += items.length;

          const absOffset = Math.abs(offset);
          const isActive = offset === 0;

          // Calculate transforms based on offset
          // translateX percentage relative to item width
          const translateX = offset * 65; 
          const scale = 1 - absOffset * 0.15;
          const zIndex = 10 - absOffset;
          const blur = absOffset * 3;
          const opacity = absOffset > 2 ? 0 : 1; // Hide items beyond 2 steps away (so 5 items visible total: -2, -1, 0, 1, 2)

          return (
            <div
              key={index}
              className={`carousel-3d-item ${isActive ? "active" : ""}`}
              style={{
                transform: `translateX(calc(-50% + ${translateX}%)) scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
                filter: `blur(${blur}px)`,
                pointerEvents: isActive ? "auto" : "none",
                cursor: isActive ? "default" : "pointer"
              }}
              onClick={() => {
                if (!isActive) setActiveIndex(index);
              }}
            >
              {renderItem ? renderItem(item, index) : null}
            </div>
          );
        })}
      </div>
      
      {/* Navigation dots */}
      {items.length > 1 && (
        <div className="carousel-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
