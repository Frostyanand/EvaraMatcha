"use client";

import Image from "next/image";
import Carousel from "./Carousel";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    alt: "Coffee cafe interior"
  },
  {
    src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    alt: "Latte art in a cup"
  },
  {
    src: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop",
    alt: "Bakery and pastries"
  },
  {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    alt: "People enjoying coffee"
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    alt: "Matcha drink"
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    alt: "Coffee beans"
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    alt: "Freshly brewed coffee"
  }
];

export default function Gallery() {
  return (
    <section className="section" style={{ overflow: "hidden" }}>
      <div className="container" style={{ textAlign: "center", marginBottom: "4rem" }}>
        <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
          Atmosphere
        </h2>
        <p className="section-desc" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Immerse yourself in the warm and inviting ambiance of our cafe.
        </p>
      </div>

      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", position: "relative", padding: "0 2rem" }}>
        <Carousel 
          items={galleryImages}
          renderItem={(item) => (
            <div style={{ 
              position: "relative", 
              width: "100%", 
              height: "400px", 
              borderRadius: "16px", 
              overflow: "hidden", 
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)" 
            }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          )}
        />
      </div>
    </section>
  );
}
