# Evara Matcha

A premium, interactive landing page for Evara Matcha — a matcha-led café in JP Nagar, Bangalore, where Japanese tradition meets modern indulgence.

## Overview

This project is a high-end, luxury web experience built with **Next.js 16 (App Router)**. It moves away from standard template designs and embraces an "Apple-style" storytelling narrative arc. The page is designed to feel contemplative, moody, and meticulously crafted, drawing inspiration from Japanese tea ceremonies and Scandinavian design studios.

### Key Features & Technical Highlights

*   **Custom Design System (Vanilla CSS):** A robust, dark-luxury design system built entirely from scratch in `globals.css` using HSL tokens. No Tailwind CSS. Features deep, near-black backgrounds (`#0D0F0B`) with subtle matcha green undertones and gold accents.
*   **Signature Dust Dissolve Animation:** A high-performance, scroll-driven particle dissolve effect built using HTML5 Canvas, `requestAnimationFrame`, and CSS `mask-image`. As sections scroll out of the top of the viewport, they disintegrate into thousands of animated particles, reassembling when scrolled back down.
*   **Interactive SVG Journey Path:** The "How We Craft Your Cup" section features an off-centered, alternating video layout connected by a hand-drawn SVG squiggle path that organically draws itself as the user scrolls, using the `stroke-dashoffset` technique.
*   **Fluid Typography:** Utilizes `next/font` for optimal loading of three distinct font families without layout shifts:
    *   **Display:** Cormorant Garamond (Elegant, serif for headlines)
    *   **Body:** DM Sans (Clean, modern sans-serif for UI and paragraphs)
    *   **Accents:** Cinzel (Uppercase, letter-spaced for section labels and logos)
*   **Cinematic Ambiance:** Includes a continuous full-viewport film grain overlay (`feTurbulence` SVG filter) and a custom, lerp-smoothed green cursor that interacts with links and buttons.
*   **Scroll Reveal System:** A reusable `<ScrollReveal>` component leveraging `IntersectionObserver` to choreograph staggered fade-and-slide-up entrances for content as it enters the viewport.

## Getting Started

First, install the dependencies (if you haven't already):

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `src/app/`
    *   `globals.css`: The core design system and all keyframe animations.
    *   `layout.js`: Global layout, font loading, metadata, and persistent elements (Navbar, Cursor, Grain).
    *   `page.js`: The main orchestration file, composing the story from individual section components.
*   `src/components/`
    *   **Core UI:** `Navbar.jsx`, `Footer.jsx`, `Carousel.jsx`, `CustomCursor.jsx`, `GrainOverlay.jsx`, `ScrollReveal.jsx`, `DustDissolve.jsx`, `JourneyPath.jsx`.
    *   **Sections:** `Hero.jsx`, `Philosophy.jsx`, `MenuPreview.jsx`, `Ritual.jsx`, `Journey.jsx`, `Space.jsx`, `WeekendSpecials.jsx`, `Testimonials.jsx`.
*   `public/images/`: Contains generated premium mock photography to match the dark aesthetic.
*   `public/videos/`: Placeholder directory for future café preparation videos (`.mp4`).

## Performance Considerations

*   **Reduced Motion:** The CSS and JavaScript animations (like the Dust Dissolve and Custom Cursor) respect the user's OS-level `prefers-reduced-motion` settings.
*   **Mobile Optimization:** Complex interactions like the canvas particle dissolve, SVG scroll-drawing, and custom cursor gracefully disable or simplify on touch devices and smaller screens to ensure smooth performance.
*   **Object Pooling:** The canvas particle system reuses a fixed array of particle objects to prevent garbage collection stutter during scroll.

## Built With

*   [Next.js](https://nextjs.org/)
*   React 19
*   Vanilla CSS
*   HTML5 Canvas & SVGs
