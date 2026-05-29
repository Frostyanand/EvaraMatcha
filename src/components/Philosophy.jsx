import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const FEATURES = [
  { 
    label: "Ceremonial\nGrade Matcha",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    )
  },
  { 
    label: "Small Batch\nPreparation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    )
  },
  { 
    label: "Weekend\nDesserts",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    )
  },
  { 
    label: "Thoughtful\nExperience",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
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
