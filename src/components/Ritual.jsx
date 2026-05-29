import ScrollReveal from "@/components/ScrollReveal";

const STEPS = [
  {
    number: "01",
    label: "SOURCED",
    desc: "Finest leaves, ethically sourced from Japan",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37" strokeLinecap="round" />
        <path d="M17 8c-2-3-5.5-4-8.5-2.5S3 10 5 13s5.5 4 8.5 2.5" strokeLinecap="round" />
        <path d="M12 2v20" strokeDasharray="2 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "STONE GROUND",
    desc: "Slow ground to preserve nutrients & flavor",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4v3M12 17v3M4 12h3M17 12h3" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "WHISKED",
    desc: "Hand whisked in the perfect ceremony",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 3v6c0 3 2 5 4 5s4-2 4-5V3" strokeLinecap="round" />
        <path d="M6 3h12" strokeLinecap="round" />
        <path d="M10 14v4c0 1.5 1 2.5 2 2.5s2-1 2-2.5v-4" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "SERVED",
    desc: "Mindfully served for a moment of pause",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 15h14" strokeLinecap="round" />
        <path d="M6 15c0 3 2.7 5 6 5s6-2 6-5" strokeLinecap="round" />
        <path d="M8 11c0-2 1.8-4 4-4s4 2 4 4" strokeLinecap="round" />
        <path d="M10 7V4M14 7V4" strokeLinecap="round" strokeDasharray="1 2" opacity="0.4" />
      </svg>
    ),
  },
];

export default function Ritual() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="ritual-grid">
          {/* Left: Title block */}
          <div>
            <ScrollReveal>
              <span className="section-label">THE RITUAL</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="section-heading" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                From Leaf
                <br />
                To Ritual
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="section-desc" style={{ marginBottom: "2rem" }}>
                Every step matters.
                <br />
                Every detail, intentional.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <a href="#" className="btn-text">
                Our Process <span className="arrow">→</span>
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Steps */}
          <div className="ritual-steps">
            {STEPS.map((step, index) => (
              <ScrollReveal key={index} delay={200 + index * 150}>
                <div className="ritual-step">
                  <div className="ritual-step-icon" style={{ color: "var(--matcha-light)" }}>
                    {step.icon}
                  </div>
                  <div className="ritual-step-number">{step.number}</div>
                  <div className="ritual-step-label">{step.label}</div>
                  <p className="ritual-step-desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
