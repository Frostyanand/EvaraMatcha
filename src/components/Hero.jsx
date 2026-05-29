"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className={`hero ${ready ? "hero--ready" : ""}`}>

      {/* ── Video layer ── */}
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          id="hero-video"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Overlays ── */}
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      {/* ── Centered Content ── */}
      <div className="hero-center">

        <p className="hero-eyebrow">日本の抹茶体験</p>

        <h1 className="hero-headline">
          <span className="hero-line hero-line-1">Where Matcha</span>
          <span className="hero-line hero-line-2">Becomes Ceremony.</span>
        </h1>

        <span className="hero-rule" aria-hidden="true" />

        <p className="hero-sub">Ceremonial matcha &middot; Specialty coffee &middot; Handcrafted desserts</p>

        <a href="#visit" className="hero-cta-btn" id="hero-reserve-btn">
          Discover the Experience
        </a>

      </div>

      {/* ── Bottom subtle branding ── */}
      <div className="hero-bottom-strip">
        <span>JP Nagar, Bangalore</span>
        <span className="hero-bottom-dot">&middot;</span>
        <span>Open Daily 11 AM – 8 PM</span>
      </div>

    </section>
  );
}
