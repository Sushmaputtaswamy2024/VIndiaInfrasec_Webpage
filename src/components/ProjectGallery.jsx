import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./ProjectGallery.css";

// ========================================
// AUTO IMPORT IMAGES WITH SEO ALT TEXT
// ========================================
const images = Object.values(
  import.meta.glob("./Gallery/*.{jpg,jpeg,png,webp}", { eager: true })
).map((img, index) => ({
  src: img.default || img,
  alt: `VIndia Infrasec completed project image ${index + 1}`,
}));

export default function ProjectGallery() {
  const row1 = useRef(null);
  const row2 = useRef(null);

  // ========================================
  // GSAP MARQUEE ANIMATION
  // ========================================
  useEffect(() => {
    gsap.to(row1.current, {
      xPercent: -50,
      duration: 25,
      ease: "linear",
      repeat: -1,
    });

    gsap.to(row2.current, {
      xPercent: 50,
      duration: 25,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section
      className="pg-section"
      aria-labelledby="project-gallery-title"
      role="region"
    >
      {/* 🔹 Hidden SEO description */}
      <p className="sr-only">
        Explore completed construction, interior, architectural and structural projects 
        delivered by VIndia Infrasec across South India.
      </p>

      {/* 🔹 Correct SEO heading level */}
      <h2 id="project-gallery-title" className="pg-heading">
        Our Project Gallery
      </h2>

      {/* ========================================
          FIRST IMAGE ROW
      ======================================== */}
      <div
        className="pg-track"
        ref={row1}
        aria-label="Scrolling row of construction project images"
        role="list"
      >
        {[...Array(2)].map((_, repeatIndex) => (
          <div className="pg-row" key={repeatIndex}>
            {images.map((img, i) => (
              <figure
                className="pg-card"
                role="listitem"
                key={`row1-${repeatIndex}-${i}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="sr-only">{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>

      {/* ========================================
          SECOND IMAGE ROW
      ======================================== */}
      <div
        className="pg-track reverse"
        ref={row2}
        aria-label="Scrolling row of interior and structural design images"
        role="list"
      >
        {[...Array(2)].map((_, repeatIndex) => (
          <div className="pg-row" key={repeatIndex}>
            {images.map((img, i) => (
              <figure
                className="pg-card"
                role="listitem"
                key={`row2-${repeatIndex}-${i}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="sr-only">{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
