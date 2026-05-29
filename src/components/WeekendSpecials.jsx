import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const DESSERTS = [
  {
    name: "Strawberry Matcha Brownie",
    desc: "Rich, fudgy brownie infused with matcha and topped with strawberry glaze.",
    image: "/images/hero-matcha.png",
  },
  {
    name: "Matcha Cheesecake",
    desc: "Creamy cheesecake with a vibrant matcha layer and buttery biscuit base.",
    image: "/images/story-matcha.png",
  },
  {
    name: "Matcha Tiramisu",
    desc: "Classic Italian dessert reimagined with layers of matcha cream and espresso.",
    image: "/images/hero-matcha.png",
  },
];

export default function WeekendSpecials() {
  return (
    <section className="section">
      <div className="container">
        <ScrollReveal>
          <div className="weekend-wrapper">
            <ScrollReveal>
              <span className="section-label">WEEKEND SPECIALS</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="section-heading">
                Indulge in Something <em>Sweet</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="section-desc">
                Made with matcha. Made with love. Available Saturdays &amp;
                Sundays only.
              </p>
            </ScrollReveal>

            <div className="weekend-cards">
              {DESSERTS.map((dessert, index) => (
                <ScrollReveal key={index} delay={250 + index * 100}>
                  <div className="weekend-card">
                    <div className="weekend-card-image">
                      <Image
                        src={dessert.image}
                        alt={dessert.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="weekend-card-content">
                      <h3 className="weekend-card-name">{dessert.name}</h3>
                      <p className="weekend-card-desc">{dessert.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={500}>
              <div style={{ marginTop: "2rem" }}>
                <a href="#" className="btn-text">
                  View Dessert Menu <span className="arrow">→</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
