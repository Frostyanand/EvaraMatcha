import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const FEATURES = [
  { 
    label: "Ceremonial\nGrade Matcha",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37" strokeLinecap="round" />
        <path d="M17 8c-2-3-5.5-4-8.5-2.5S3 10 5 13s5.5 4 8.5 2.5" strokeLinecap="round" />
        <path d="M12 2v20" strokeDasharray="2 3" opacity="0.4" />
      </svg>
    )
  },
  { 
    label: "Small Batch\nPreparation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3" strokeLinecap="round" opacity="0.5" />
      </svg>
    )
  },
  { 
    label: "Weekend\nDesserts",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 14l9-5 9 5v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" strokeLinecap="round" />
        <path d="M3 14h18" strokeLinecap="round" opacity="0.5"/>
        <path d="M12 9V5" strokeLinecap="round" />
        <circle cx="12" cy="4" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  { 
    label: "Thoughtful\nExperience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M5 15h14" strokeLinecap="round" />
        <path d="M6 15c0 3 2.7 5 6 5s6-2 6-5" strokeLinecap="round" />
        <path d="M8 11c0-2 1.8-4 4-4s4 2 4 4" strokeLinecap="round" />
        <path d="M10 7V4M14 7V4" strokeLinecap="round" strokeDasharray="1 2" opacity="0.4" />
      </svg>
    )
  },
];

export default function Philosophy() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="philosophy-grid">
          
          {/* Image (Now on left) */}
          <ScrollReveal direction="left" delay={100}>
            <div className="philosophy-image">
              <Image
                src="/images/story-matcha.png"
                alt="Matcha preparation — whisking ceremonial grade matcha"
                width={500}
                height={650}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </div>
          </ScrollReveal>

          {/* Text content (Now on right) */}
          <div>
            <ScrollReveal>
              <span className="section-label">OUR STORY</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="section-heading">
                The Art of <em>Matcha</em>.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="section-desc" style={{ marginBottom: "1.5rem" }}>
                At Evara Matcha, every bowl tells a story of discipline,
                patience and purity. We source ceremonial-grade matcha,
                stone-ground it in small batches and serve it with intention.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                The result is a drink that is pure in flavor, rich in
                tradition, and served in a space designed for slow, mindful
                mornings.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="philosophy-features">
                {FEATURES.map((feature, index) => (
                  <div key={index} className="philosophy-feature-item">
                    <div className="philosophy-feature-icon">
                      {feature.icon}
                    </div>
                    <div className="philosophy-feature-label">
                      {feature.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={500}>
              <div style={{ marginTop: "3rem" }}>
                <a href="#" className="btn-text">
                  Learn More About Us <span className="arrow">→</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
