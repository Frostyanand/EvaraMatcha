import ScrollReveal from "@/components/ScrollReveal";

const REVIEWS = [
  {
    text: "The matcha here is unlike anything else. Pure, smooth and so refined.",
    name: "Prateek S.",
    stars: 5,
  },
  {
    text: "The ambiance, the drinks, the desserts — everything feels so intentional.",
    name: "Meera N.",
    stars: 5,
  },
  {
    text: "My weekend ritual place. Always leaves me refreshed.",
    name: "Ananya K.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">WORDS FROM OUR GUESTS</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="section-heading" style={{ marginBottom: "3rem" }}>
            What They Say
          </h2>
        </ScrollReveal>

        <div className="testimonials-grid">
          {REVIEWS.map((review, index) => (
            <ScrollReveal key={index} delay={200 + index * 100}>
              <div className="testimonial-card">
                <div className="testimonial-quote-mark">&ldquo;</div>
                <p className="testimonial-text">{review.text}</p>
                <div className="testimonial-author">
                  <span className="testimonial-name">{review.name}</span>
                  <span className="testimonial-stars">
                    {Array.from({ length: review.stars }, (_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
