"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Carousel from "@/components/Carousel";

const GALLERY_IMAGES = [
  { src: "/images/hero-matcha.png", alt: "Café interior — warm ambient lighting" },
  { src: "/images/story-matcha.png", alt: "Matcha preparation station" },
  { src: "/images/hero-matcha.png", alt: "Cozy seating corner" },
  { src: "/images/story-matcha.png", alt: "Tea ceremony setup" },
  { src: "/images/hero-matcha.png", alt: "Bar area with matcha tools" },
];

export default function Space() {
  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Header */}
        <div className="space-header">
          <div>
            <ScrollReveal>
              <span className="section-label">EXPERIENCE EVARA</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="section-heading">A Space to Slow Down</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="section-desc">
                Step inside and leave the rush behind.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <a href="#" className="btn-text">
              View Gallery <span className="arrow">→</span>
            </a>
          </ScrollReveal>
        </div>

        {/* Gallery Carousel */}
        <ScrollReveal delay={300}>
          <Carousel
            items={GALLERY_IMAGES}
            renderItem={(item) => (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="280px"
                style={{ objectFit: "cover" }}
              />
            )}
          />
        </ScrollReveal>

        {/* Hours + Map */}
        <div className="space-info-grid">
          <ScrollReveal delay={200}>
            <div>
              <h3 style={{ marginBottom: "1.5rem", fontFamily: "var(--font-display)" }}>
                Visit Us
              </h3>
              <div className="hours-table">
                <div className="hours-row">
                  <span className="hours-day">Weekdays</span>
                  <span className="hours-time">11:00 AM – 8:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Weekends</span>
                  <span className="hours-time">11:00 AM – 10:00 PM</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Monday</span>
                  <span className="hours-closed">Closed</span>
                </div>
              </div>
              <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)" }}>
                <span>📍</span>
                <span>JP Nagar, Bangalore</span>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <a
                  href="https://maps.app.goo.gl/oaxyhc7JNyJCmikm77g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: "0.5rem" }}
                >
                  Get Directions <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={300}>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.953!2d77.585!3d12.907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzI1LjIiTiA3N8KwMzUnMDYuMCJF!5e0!3m2!1sen!2sin!4v1"
                title="Evara Matcha — JP Nagar, Bangalore"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
