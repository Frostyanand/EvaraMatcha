import ScrollReveal from "@/components/ScrollReveal";
import JourneyPath from "@/components/JourneyPath";

const JOURNEY_NODES = [
  {
    number: "01",
    title: "The Pour",
    desc: "Each cup begins with intention — ceremonial-grade matcha, measured precisely. The powder meets water at the perfect temperature.",
    videoLabel: "Matcha Preparation",
  },
  {
    number: "02",
    title: "The Whisk",
    desc: "Whisked to order using a traditional chasen. The motion is meditative — fast, precise, creating a velvety crema. Never rushed, never pre-made.",
    videoLabel: "Traditional Whisking",
  },
  {
    number: "03",
    title: "The Serve",
    desc: "Presented with care in handmade ceramics. Every cup is an experience, not just a drink. A moment of pause in your day.",
    videoLabel: "The Final Presentation",
  },
];

export default function Journey() {
  return (
    <section className="section journey-section">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">THE JOURNEY</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="section-heading" style={{ marginBottom: "5rem" }}>
            How We <em>Craft</em> Your Cup
          </h2>
        </ScrollReveal>

        <div className="journey-nodes">
          {/* SVG Squiggle Path (desktop only) */}
          <JourneyPath />

          {JOURNEY_NODES.map((node, index) => (
            <ScrollReveal key={index} delay={200}>
              <div className="journey-node">
                {/* Video Container */}
                <div className="journey-video-container" data-cursor>
                  <div className="journey-video-placeholder">
                    <div className="journey-play-btn">
                      <div className="journey-play-icon" />
                    </div>
                    <span className="journey-video-label">
                      {node.videoLabel}
                    </span>
                  </div>
                  {/* Actual video element ready for src */}
                  {/* <video preload="none" playsInline muted loop>
                    <source src={`/videos/${node.number}.mp4`} type="video/mp4" />
                  </video> */}
                </div>

                {/* Text */}
                <div className="journey-text">
                  <span className="journey-step-number">{node.number}</span>
                  <h3 className="journey-step-title">{node.title}</h3>
                  <p className="journey-step-desc">{node.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
