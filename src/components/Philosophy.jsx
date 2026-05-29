import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const FEATURES = [
  { icon: "🍵", label: "Ceremonial Grade Matcha" },
  { icon: "✦", label: "Small Batch Preparation" },
  { icon: "🍰", label: "Weekend Desserts" },
  { icon: "❋", label: "Thoughtful Experience" },
];

export default function Philosophy() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="philosophy-grid">
          {/* Text content */}
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
                  <div key={index} className="philosophy-feature-pill">
                    <span className="pill-icon">{feature.icon}</span>
                    {feature.label}
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={500}>
              <div style={{ marginTop: "2rem" }}>
                <a href="#" className="btn-text">
                  Learn More About Us <span className="arrow">→</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal direction="right" delay={200}>
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
        </div>
      </div>
    </section>
  );
}
