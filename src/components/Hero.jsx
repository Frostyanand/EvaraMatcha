"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    // Staggered entrance animation for hero elements
    const elements = contentRef.current?.querySelectorAll("[data-hero-animate]");
    if (!elements) return;

    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`;

      // Trigger after a brief delay for page load
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100);
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid" ref={contentRef}>
        {/* Left: Content */}
        <div className="hero-content">
          <span className="hero-tag" data-hero-animate>
            JAPANESE HERITAGE. MODERN INDULGENCE.
          </span>

          <h1 className="hero-heading" data-hero-animate>
            Crafted Slowly.
            <br />
            Savored Deeply.
          </h1>

          <p className="hero-sub" data-hero-animate>
            A matcha-led café where Japanese tradition meets contemporary
            indulgence. Ceremonial-grade matcha, specialty coffee, and
            weekend desserts.
          </p>

          <div className="hero-actions" data-hero-animate>
            <a href="#menu" className="btn btn-primary">
              Explore Menu <span className="arrow">→</span>
            </a>
            <a href="#visit" className="btn btn-outline">
              Visit Café <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-image-wrapper" data-hero-animate>
          <div className="hero-image">
            <Image
              src="/images/hero-matcha.png"
              alt="Ceremonial matcha being whisked in a dark ceramic bowl"
              width={520}
              height={620}
              priority
              style={{ objectFit: "cover", borderRadius: "24px", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll text (left edge, rotated) */}
      <span className="hero-scroll-text">SCROLL TO EXPLORE</span>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="line"></div>
      </div>
    </section>
  );
}
