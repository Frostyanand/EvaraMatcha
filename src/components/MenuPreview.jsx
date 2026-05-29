"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Carousel from "@/components/Carousel";

const CAROUSEL_IMAGES = [
  { src: "/images/hero-matcha.png", name: "Ceremonial Matcha" },
  { src: "/images/drink-iced.png", name: "Iced Matcha Latte" },
  { src: "/images/story-matcha.png", name: "Matcha Preparation" },
  { src: "/images/drink-mango.png", name: "Mango Matcha" },
  { src: "/images/cafe-interior.png", name: "Our Space" },
];

const MENU_ITEMS = [
  {
    name: "Ceremonial Matcha",
    desc: "Pure, smooth, stone-ground from the finest leaves.",
    icon: "bowl",
  },
  {
    name: "Mango Matcha Latte",
    desc: "Sweet mango meets earthy matcha. Refreshing.",
    icon: "glass",
  },
  {
    name: "Iced Matcha Latte",
    desc: "Refreshing, balanced, perfectly chilled.",
    icon: "glass",
  },
  {
    name: "Matcha Espresso Fusion",
    desc: "Bold espresso, creamy matcha. Perfect harmony.",
    icon: "cup",
  },
  {
    name: "Specialty Coffee",
    desc: "Hand-brewed with precision and care.",
    icon: "cup",
  },
];

function DrinkIcon({ type }) {
  switch (type) {
    case "bowl":
      return <div className="drink-icon-bowl" />;
    case "glass":
      return <div className="drink-icon-glass" />;
    case "cup":
      return <div className="drink-icon-cup" />;
    default:
      return <div className="drink-icon-spiral" />;
  }
}

export default function MenuPreview() {
  return (
    <section id="menu" className="section">
      <div className="container">
        {/* Header */}
        <div className="menu-header">
          <div>
            <ScrollReveal>
              <span className="section-label">OUR SIGNATURES</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="section-heading">Signature Creations</h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <a href="#" className="btn-text">
              View Full Menu <span className="arrow">→</span>
            </a>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <ScrollReveal delay={200}>
          <Carousel
            items={CAROUSEL_IMAGES}
            renderItem={(item, index) => (
              <>
                <Image
                  src={item.src}
                  alt={item.name}
                  fill
                  sizes="280px"
                  style={{ objectFit: "cover" }}
                />
                <div className="carousel-item-overlay">{item.name}</div>
              </>
            )}
          />
        </ScrollReveal>

        {/* Menu Cards Grid */}
        <div className="menu-cards-grid" style={{ marginTop: "3rem" }}>
          {MENU_ITEMS.map((item, index) => (
            <ScrollReveal key={index} delay={150 + index * 100}>
              <div className="menu-card card-glow">
                <div className="menu-card-icon">
                  <DrinkIcon type={item.icon} />
                </div>
                <h3 className="menu-card-name">{item.name}</h3>
                <p className="menu-card-desc">{item.desc}</p>
                <button className="menu-card-action" aria-label={`Add ${item.name}`}>
                  +
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
