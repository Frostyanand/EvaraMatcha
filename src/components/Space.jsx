"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const GALLERY_IMAGES = [
  { src: "/images/space-barista.png", alt: "Barista preparing matcha", class: "gallery-large" },
  { src: "/images/space-corner.png", alt: "Cozy corner", class: "gallery-small" },
  { src: "/images/story-matcha.png", alt: "Matcha preparation", class: "gallery-tall" },
  { src: "/images/drink-iced.png", alt: "Iced Matcha Latte", class: "gallery-small" },
  { src: "/images/cafe-interior.png", alt: "Cafe interior", class: "gallery-wide" },
  { src: "/images/space-table.png", alt: "Table view", class: "gallery-small" },
  { src: "/images/space-seating.png", alt: "People sitting", class: "gallery-tall" },
  { src: "/images/hero-matcha.png", alt: "Matcha bowl", class: "gallery-large" },
  { src: "/images/drink-mango.png", alt: "Mango matcha", class: "gallery-small" },
  { src: "/images/space-details.png", alt: "Ceramic cups", class: "gallery-small" },
  { src: "/images/cafe-interior.png", alt: "Cafe vibe", class: "gallery-wide" },
  { src: "/images/space-corner.png", alt: "Dark ambiance", class: "gallery-wide" },
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
              View Full Gallery <span className="arrow">→</span>
            </a>
          </ScrollReveal>
        </div>

        {/* Asymmetric Gallery Grid */}
        <ScrollReveal delay={300}>
          <div className="gallery-grid">
            {GALLERY_IMAGES.map((img, index) => (
              <div key={index} className={`gallery-item ${img.class}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
