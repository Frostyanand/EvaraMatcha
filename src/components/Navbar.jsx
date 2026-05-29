"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <Link href="#home" className="logo-link">
          <Image
            src="/logo.png"
            alt="Evara Matcha Logo"
            width={42}
            height={42}
            priority
          />
          <span>EVARA MATCHA</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#about">Our Story</Link></li>
            <li><Link href="#menu">Menu</Link></li>
            <li><Link href="#experience">Experience</Link></li>
            <li><Link href="#contact" className="nav-cta">Reserve a Table</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
