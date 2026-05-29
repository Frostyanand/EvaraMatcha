"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function Carousel({ items, renderItem, className = "" }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const isHoveredRef = useRef(false);

  const itemCount = items?.length || 0;

  const updateActiveIndex = useCallback(() => {
    const container = containerRef.current;
    if (!container || !container.children.length) return;

    const scrollLeft = container.scrollLeft;
    const itemWidth = container.children[0].offsetWidth + 20; // gap
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.min(index, itemCount - 1));
  }, [itemCount]);

  const scrollToIndex = useCallback(
    (index) => {
      const container = containerRef.current;
      if (!container || !container.children.length) return;

      const itemWidth = container.children[0].offsetWidth + 20;
      container.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    },
    []
  );

  // Auto-play
  useEffect(() => {
    if (itemCount <= 1) return;

    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        if (isHoveredRef.current) return;

        setActiveIndex((prev) => {
          const next = (prev + 1) % itemCount;
          scrollToIndex(next);
          return next;
        });
      }, 4000);
    };

    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, [itemCount, scrollToIndex]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={`carousel-wrapper ${className}`}>
      <div
        ref={containerRef}
        className="carousel-container"
        onScroll={updateActiveIndex}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {renderItem ? renderItem(item, index) : null}
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      {itemCount > 1 && (
        <div className="carousel-dots">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                scrollToIndex(index);
                setActiveIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
