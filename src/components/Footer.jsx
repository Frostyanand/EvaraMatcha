import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer id="visit" className="footer">
      <div className="container">
        {/* Top: Info + Monogram */}
        <div className="footer-top">
          <ScrollReveal>
            <div className="footer-brand">
              <h3>Evara Matcha</h3>
              <div className="footer-location">
                <span>📍</span>
                <span>JP Nagar, Bangalore</span>
              </div>
              <div className="footer-hours-mini">
                <span>Weekdays — 11:00 AM – 8:00 PM</span>
                <span>Weekends — 11:00 AM – 10:00 PM</span>
                <span className="closed-note">Closed on Mondays</span>
              </div>
              <a
                href="https://maps.app.goo.gl/oaxyhc7JNyJCmikm77g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Get Directions <span className="arrow">→</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="footer-monogram">
              <div className="footer-monogram-text">
                EVARA
                <br />
                MATCHA
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Statement */}
        <div className="footer-statement">
          <ScrollReveal>
            <h2>Pause. Sip. Experience Matcha.</h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p>
              Visit Evara Matcha and discover a slower way to enjoy coffee,
              matcha and desserts.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <a href="#" className="btn btn-primary">
              Plan Your Visit <span className="arrow">→</span>
            </a>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} EVARAMATCHA</span>
          <ul className="footer-bottom-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#visit">Visit</a></li>
          </ul>
          <a
            href="https://instagram.com/evaramatcha"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            @evaramatcha
          </a>
        </div>
      </div>
    </footer>
  );
}
