"use client";

import { useState } from "react";
import Image from "next/image";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Signature Strawberry Matcha",
    category: "signature",
    price: "$7.50",
    description: "Layered ceremonial Uji matcha poured over organic milk and fresh house-made strawberry purée.",
    rating: "4.9",
    image: "/signature.png"
  },
  {
    id: 2,
    name: "Ceremonial Hot Matcha",
    category: "hot",
    price: "$6.00",
    description: "Whisked traditional Japanese stone-ground green tea served at perfect temperature with oat milk option.",
    rating: "4.8",
    image: "/hero.png"
  },
  {
    id: 3,
    name: "Matcha Crepe Cake",
    category: "pastries",
    price: "$8.50",
    description: "Twenty layers of delicate paper-thin green tea crepes and smooth fresh vanilla cream.",
    rating: "4.9",
    image: "/signature.png"
  },
  {
    id: 4,
    name: "Iced Coconut Matcha",
    category: "iced",
    price: "$7.00",
    description: "Uji matcha layered over pure organic coconut water and ice. Clean, crisp, and hydrating.",
    rating: "4.7",
    image: "/signature.png"
  },
  {
    id: 5,
    name: "Premium Matcha Croissant",
    category: "pastries",
    price: "$5.50",
    description: "Flaky double-baked croissant filled with rich matcha pastry cream and dusted with green tea powder.",
    rating: "4.8",
    image: "/hero.png"
  },
  {
    id: 6,
    name: "Classic Hojicha Latte",
    category: "signature",
    price: "$6.50",
    description: "Slow-roasted green tea offering a unique nutty, smoky caramel flavor profile with milk.",
    rating: "4.6",
    image: "/hero.png"
  }
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMenu = activeFilter === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeFilter);

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-content animate-fade-in">
            <span className="hero-tag">Traditional Meets Modern</span>
            <h1>
              Elevate Your Day With Premium <span>Matcha</span>
            </h1>
            <p className="hero-desc">
              Experience the exquisite art of pure stone-ground Uji matcha, crafted lovingly into modern signature sips and decadent pastries. Located in the heart of the city's greenest lounge.
            </p>
            <div className="hero-actions">
              <a href="#menu" className="btn btn-primary">Explore Menu</a>
              <a href="#about" className="btn btn-secondary">Our Story</a>
            </div>
          </div>
          <div className="hero-image-wrapper animate-fade-in delay-200">
            <div className="hero-circle-bg"></div>
            <Image
              className="hero-img animate-float"
              src="/hero.png"
              alt="Premium Matcha Latte"
              width={450}
              height={450}
              priority
            />
            <div className="floating-card animate-float delay-300">
              <div className="floating-card-icon">🍃</div>
              <div className="floating-card-text">
                <h4>100% Ceremonial</h4>
                <p>Sourced from Uji, Kyoto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container exp-section">
          <div className="exp-img-gallery">
            <div className="exp-img-item">
              <Image src="/signature.png" alt="Layered Drink" width={240} height={320} style={{ objectFit: "cover" }} />
            </div>
            <div className="exp-img-item">
              <Image src="/hero.png" alt="Hot Drink" width={240} height={320} style={{ objectFit: "cover" }} />
            </div>
          </div>
          <div className="exp-content">
            <span className="section-subtitle">Our Philosophy</span>
            <h2>Mindful Moments, Whisked With Love</h2>
            <p>
              At Evara Matcha, we believe tea is more than a beverage; it is a ritual of calmness. Every single leaf is shade-grown for 30 days before harvest in Uji, Japan, maximizing chlorophyll and producing that brilliant vibrant green color.
            </p>
            <p>
              We stone-grind our tea to ensure the preservation of delicate flavor notes and antioxidants, creating a velvety beverage that boosts your energy without the coffee crash.
            </p>
            <div className="exp-stats">
              <div className="stat-item">
                <h3>30d</h3>
                <p>Shade Grown</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Organic Uji Matcha</p>
              </div>
              <div className="stat-item">
                <h3>0g</h3>
                <p>Refined Sugars</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="section" style={{ backgroundColor: "rgba(13, 46, 30, 0.02)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Choose Evara</span>
            <h2 className="section-title">The Matcha Experience</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">🌱</div>
              <h3>Artisanal Sourcing</h3>
              <p>Directly imported from single-estate tea farms in Kyoto, ensuring full traceability and fair-trade standards.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">✨</div>
              <h3>Zen Atmosphere</h3>
              <p>Designed with natural woods, soothing plants, and soft atmospheric soundscapes for mindful relaxation.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">🍯</div>
              <h3>Natural Sweeteners</h3>
              <p>We sweeten our creations exclusively using organic maple syrup, agave, or fresh fruit purées.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Specially Curated</span>
            <h2 className="section-title">Signature Menu</h2>
          </div>

          <div className="menu-filter">
            {["all", "signature", "iced", "hot", "pastries"].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredMenu.map((item) => (
              <div key={item.id} className="menu-card animate-fade-in">
                <div className="menu-card-img">
                  <span className="menu-card-tag">{item.category}</span>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={item.id <= 3}
                  />
                </div>
                <div className="menu-card-content">
                  <div className="menu-card-header">
                    <h3 className="menu-card-title">{item.name}</h3>
                    <span className="menu-card-price">{item.price}</span>
                  </div>
                  <p className="menu-card-desc">{item.description}</p>
                  <div className="menu-card-footer">
                    <div className="menu-card-rating">
                      <span>★</span> {item.rating}
                    </div>
                    <button className="order-btn" onClick={() => alert(`Enjoyed adding 1 ${item.name} to order!`)}>
                      Order Now &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div className="footer-info">
            <h3>EVARA MATCHA</h3>
            <p>Your urban sanctuary for artisanal green tea elixirs, specialty desserts, and mindful morning rituals.</p>
            <div className="social-links">
              <a href="#" className="social-link">IG</a>
              <a href="#" className="social-link">FB</a>
              <a href="#" className="social-link">TW</a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#menu">Signature Menu</a></li>
              <li><a href="#experience">Lounge Experience</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Opening Hours</h4>
            <ul className="footer-links" style={{ opacity: 0.75 }}>
              <li>Monday - Friday: 7am - 8pm</li>
              <li>Saturday - Sunday: 8am - 9pm</li>
              <li>Public Holidays: 9am - 6pm</li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <span>📍</span>
              <span>452 Matcha Lane, Kyoto District</span>
            </div>
            <div className="footer-contact-item">
              <span>📞</span>
              <span>+1 (555) 782-9900</span>
            </div>
            <div className="footer-contact-item">
              <span>✉️</span>
              <span>hello@evaramatcha.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Evara Matcha. Made with love for premium wellness.</p>
        </div>
      </footer>
    </main>
  );
}
