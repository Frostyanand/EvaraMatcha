import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer id="visit" className="footer">
      <div className="container">
        {/* Top: Info + Monogram */}
        <div className="footer-top">
          <ScrollReveal>
            <div className="footer-contact">
              <h3 className="footer-title">Evara Matcha</h3>
              
              <div className="footer-location" style={{ marginBottom: "2rem" }}>
                <span style={{ color: "#E94E77" }}>📍</span>
                <span>JP Nagar, Bangalore</span>
              </div>
              
              <div className="footer-hours">
                <div className="footer-hour-row">
                  <span>Weekdays</span>
                  <span>11:00 AM – 8:00 PM</span>
                </div>
                <div className="footer-hour-row">
                  <span>Weekends</span>
                  <span>11:00 AM – 10:00 PM</span>
                </div>
                <div className="footer-hour-row">
                  <span className="closed-note" style={{ fontStyle: "italic", color: "var(--gold)", fontSize: "0.85rem", marginTop: "0.5rem" }}>Closed on Mondays</span>
                </div>
              </div>
              
              <div style={{ marginTop: "2rem" }}>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="footer-monogram-container">
              <div className="footer-monogram-huge">
                EVARA<br />MATCHA
              </div>
              <div style={{ textAlign: "right", marginTop: "0.5rem", paddingRight: "0.5rem" }}>
                <a
                  href="https://maps.app.goo.gl/oaxyhc7JNyJCmikm77g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: "var(--gold)", 
                    fontSize: "0.85rem", 
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontStyle: "italic",
                    transition: "opacity 0.3s ease"
                  }}
                >
                  Get Directions <span>→</span>
                </a>
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
          <span className="footer-address" style={{ maxWidth: '60%', lineHeight: '1.6' }}>
            25, junction of 6th E main and, Chunchgatta Main Rd, Gaurav Nagar, JP Nagar 7th Phase, Bengaluru, Karnataka 560078
          </span>
          <div className="footer-socials" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <a href="#" className="footer-social" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.3-4H14V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="footer-social" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
