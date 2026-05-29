"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="#home" className="nav-logo">
          EVARAMATCHA
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <Link href="#home">Home</Link>
            </li>
            <li>
              <Link href="#menu">Menu</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#visit">Visit</Link>
            </li>
            <li>
              <Link href="#" className="nav-cta">
                Reserve a Table
              </Link>
            </li>
          </ul>
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
