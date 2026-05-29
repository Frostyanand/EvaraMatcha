"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = ["HOME", "MENU", "EXPERIENCE", "ABOUT", "VISIT"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setLoaded(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link
          href="#home"
          className={`nav-logo ${loaded ? "is-visible" : ""}`}
        >
          EVARAMATCHA
        </Link>

        <nav className="nav-right">
          <ul className="nav-links">
            {navItems.map((item, i) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${loaded ? "is-visible" : ""}`}
                  style={{ transitionDelay: loaded ? `${i * 60}ms` : "0ms" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className={`nav-cta ${loaded ? "is-visible" : ""}`}
            style={{ transitionDelay: loaded ? `${navItems.length * 60}ms` : "0ms" }}
          >
            RESERVE A TABLE
          </Link>
        </nav>

        <button className="nav-hamburger" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
