import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Ritual() {
  return (
    <section className="ritual-full-section">
      {/* Background Image */}
      <div className="ritual-full-bg">
        <Image
          src="/progress_stepper.png"
          alt="The Ritual Process"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Dark overlay gradient to ensure text readability */}
        <div className="ritual-overlay-gradient"></div>
      </div>

      <div className="container ritual-overlay-container">
        {/* Top Left: Title */}
        <div className="ritual-top-text">
          <ScrollReveal delay={100}>
            <h2 className="section-heading" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", marginBottom: 0 }}>
              From Leaf To Ritual
            </h2>
          </ScrollReveal>
        </div>

        {/* Bottom Right: Desc */}
        <div className="ritual-bottom-text">
          <ScrollReveal delay={200}>
            <p className="ritual-small-desc" style={{ marginBottom: 0 }}>
              Every step matters.
              <br />
              Every detail, intentional.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
