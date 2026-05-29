"use client";

import { useEffect, useRef } from "react";

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.originX = x;
    this.y = y;
    this.originY = y;
    this.color = color;
    this.size = Math.random() * 2.5 + 0.5;
    this.velocityX = (Math.random() - 0.5) * 3;
    this.velocityY = -(Math.random() * 2 + 0.5);
    this.alpha = 1;
    this.life = 1;
    this.active = false;
  }

  activate(progress) {
    this.active = true;
    this.life = 1 - progress;
    this.alpha = 1 - progress;
    this.x = this.originX + (this.velocityX * progress * 60);
    this.y = this.originY + (this.velocityY * progress * 40);
  }

  deactivate() {
    this.active = false;
    this.x = this.originX;
    this.y = this.originY;
    this.alpha = 1;
    this.life = 1;
  }

  draw(ctx) {
    if (!this.active || this.alpha <= 0) return;
    ctx.globalAlpha = this.alpha * 0.6;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

export default function DustDissolve({ children, particleColor = "#4A6741" }) {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const rafRef = useRef(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    // Don't run on mobile / reduced motion
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 768
    ) {
      return;
    }

    const ctx = canvas.getContext("2d");

    const colors = [
      particleColor,
      "#3a5731",
      "#2a3d24",
      "#1A1F14",
      "#9A9488",
    ];

    const initParticles = () => {
      if (isInitializedRef.current) return;
      isInitializedRef.current = true;

      const rect = wrapper.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      const particles = [];
      const particleCount = Math.min(1500, Math.floor(rect.width * 0.8));

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * rect.width;
        // Particles concentrated at the top where dissolution happens
        const y = Math.random() * 120;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
      }

      particlesRef.current = particles;
    };

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the section has scrolled past the top
      // Effect zone: when section top is between 15% and -15% of viewport
      const topProgress = -rect.top / (windowHeight * 0.4);
      const progress = Math.max(0, Math.min(1, topProgress));

      if (progress > 0 && !isInitializedRef.current) {
        initParticles();
      }

      // Apply mask to the content (dissolve from top)
      if (progress > 0 && progress < 1) {
        const maskPercent = progress * 15; // dissolve top 15%
        wrapper.style.maskImage = `linear-gradient(to bottom, transparent ${maskPercent}%, black ${maskPercent + 5}%)`;
        wrapper.style.webkitMaskImage = `linear-gradient(to bottom, transparent ${maskPercent}%, black ${maskPercent + 5}%)`;
      } else if (progress <= 0) {
        wrapper.style.maskImage = "none";
        wrapper.style.webkitMaskImage = "none";
      }

      // Update particles
      particlesRef.current.forEach((particle) => {
        if (progress > 0.05) {
          particle.activate(progress);
        } else {
          particle.deactivate();
        }
      });
    };

    const render = () => {
      if (!ctx || !canvas.width) {
        rafRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.draw(ctx);
      });

      rafRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    rafRef.current = requestAnimationFrame(render);
    handleScroll();

    const handleResize = () => {
      isInitializedRef.current = false;
      const rect = wrapper.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [particleColor]);

  return (
    <div ref={wrapperRef} className="dust-dissolve-wrapper">
      <canvas ref={canvasRef} className="dust-dissolve-canvas" />
      {children}
    </div>
  );
}
