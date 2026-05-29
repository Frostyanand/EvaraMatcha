"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const EDITORIAL_MENU = [
  {
    num: "01",
    name: "CEREMONIAL MATCHA",
    desc: "Pure, smooth, stone-ground from the finest leaves.",
    img: "/images/menu_01.png"
  },
  {
    num: "02",
    name: "MANGO MATCHA LATTE",
    desc: "Sweet mango meets earthy matcha. Refreshing.",
    img: "/images/menu_02.png"
  },
  {
    num: "03",
    name: "ICED MATCHA LATTE",
    desc: "Refreshing, balanced, perfectly chilled.",
    img: "/images/menu_03.png"
  },
  {
    num: "04",
    name: "MATCHA ESPRESSO FUSION",
    desc: "Bold espresso, creamy matcha. Perfect harmony.",
    img: "/images/menu_04.png"
  },
  {
    num: "05",
    name: "MATCHA TONIC",
    desc: "Uplifting, effervescent, and delicately green.",
    img: "/images/drink-iced.png" // Re-using asset due to generation limits
  },
  {
    num: "06",
    name: "MATCHA HOT CHOCOLATE",
    desc: "Velvety, rich, with a touch of ceremonial matcha.",
    img: "/images/menu_04.png" // Re-using asset due to generation limits
  },
];

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Central stem */}
      <line x1="12" y1="22" x2="12" y2="2" />
      {/* Symmetrical leaves branching out */}
      <path d="M12 2c-1.2 2-1.2 4 0 5.5 1.2-1.5 1.2-3.5 0-5.5z" fill="currentColor" />
      <path d="M12 7.5c-2.5-0.5-4.5 1-5 2.5 1.5 0.5 3.5-0.5 5-2.5z" fill="currentColor" />
      <path d="M12 7.5c2.5-0.5 4.5 1 5 2.5-1.5 0.5-3.5-0.5-5-2.5z" fill="currentColor" />
      <path d="M12 13.5c-3-0.5-5 1.5-5.5 3.5 2 0.5 4.5-1 5.5-3.5z" fill="currentColor" />
      <path d="M12 13.5c3-0.5 5 1.5 5.5 3.5-2 0.5-4.5-1-5.5-3.5z" fill="currentColor" />
    </svg>
  );
}

export default function MenuPreview() {
  return (
    <section id="menu" className="section editorial-section">
      <div className="container" style={{ maxWidth: "1400px" }}>
        
        {/* Editorial Header */}
        <div className="editorial-header">
          <ScrollReveal>
            <div className="editorial-eyebrow">
              <span className="editorial-line"></span>
              <span className="editorial-eyebrow-text">OUR OFFERINGS</span>
              <span className="editorial-line"></span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="editorial-heading">
              Crafted with Intention.<br/>
              <em>Inspired by Tradition.</em>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="editorial-subheading">
              Each cup is a ritual — made with the finest Japanese matcha,<br/>crafted slowly, served mindfully.
            </p>
          </ScrollReveal>
        </div>

        {/* Editorial Grid Container with Dividers */}
        <div className="editorial-grid-container">
          <div className="editorial-grid-divider editorial-grid-divider-1"></div>
          <div className="editorial-grid-divider editorial-grid-divider-2"></div>
          
          <div className="editorial-grid">
            {EDITORIAL_MENU.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="editorial-card">
                  <div className="editorial-card-image">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 110px, 140px"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                  
                  <div className="editorial-card-content">
                    <div className="editorial-num-row">
                      <span className="editorial-num">{item.num}</span>
                      <span className="editorial-num-line"></span>
                      <div className="editorial-num-icon"><LeafIcon /></div>
                    </div>
                    <h3 className="editorial-card-title">{item.name}</h3>
                    <p className="editorial-card-desc">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
