"use client";

import { useEffect, useRef } from "react";
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
  const videosRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(e => console.log("Video play interrupted:", e));
          } else {
            video.pause();
          }
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -25% 0px", // Triggers when the video is within the middle 50% of the viewport
        threshold: 0
      }
    );

    videosRef.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videosRef.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

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
          {/* Timeline center line */}
          <JourneyPath />

          {JOURNEY_NODES.map((node, index) => (
            <ScrollReveal key={index} delay={200}>
              <div className={`journey-node ${index % 2 !== 0 ? 'is-reversed' : ''}`}>
                {/* Video Container */}
                <div className="journey-video-container" data-cursor>
                  <div className="journey-video-placeholder" style={{ zIndex: 1 }}>
                    <div className="journey-play-btn">
                      <div className="journey-play-icon" />
                    </div>
                    <span className="journey-video-label">
                      {node.videoLabel}
                    </span>
                  </div>
                  <video 
                    ref={el => videosRef.current[index] = el}
                    autoPlay={true}
                    playsInline={true}
                    muted={true}
                    loop={true}
                    src="/videos/flower.mp4"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 10 }}
                  />
                </div>

                {/* Text */}
                <div className="journey-text">
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
