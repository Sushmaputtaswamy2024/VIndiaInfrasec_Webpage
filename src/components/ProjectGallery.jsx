// ProjectGallery.jsx
import React, { useEffect, useState } from "react";
import "./ProjectGallery.marquee.css";
import { images } from "../utils/projectImages";

export default function ProjectGallery() {
  const [ready, setReady] = useState(false);

  // ✅ Wait for all images to load (works even with lazy load removed)
  useEffect(() => {
    const imgs = Array.from(document.querySelectorAll(".pg-card img"));

    Promise.all(
      imgs.map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) return resolve();
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    ).then(() => {
      setReady(true);
    });
  }, []);

  return (
    <section className="pg-section" aria-labelledby="project-gallery-title">
      <h2 id="project-gallery-title" className="pg-heading">
        Our Project Gallery
      </h2>

      {/* ROW 1 — Fast, scroll LEFT */}
      <div className={`marquee ${ready ? "start" : ""}`}>
        <div className="marquee__inner marquee__inner--fast">
          <div className="marquee__group">
            {images.map((img, i) => (
              <figure className="pg-card" key={`r1-${i}`}>
                <img src={img.src} alt={img.alt} />
              </figure>
            ))}
          </div>

          {/* Duplicate group for infinite scroll */}
          <div className="marquee__group">
            {images.map((img, i) => (
              <figure className="pg-card" key={`r1-copy-${i}`}>
                <img src={img.src} alt={img.alt} />
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* ROW 2 — Slow, scroll RIGHT */}
      <div className={`marquee ${ready ? "start" : ""}`}>
        <div className="marquee__inner marquee__inner--slow marquee__inner--reverse">
          <div className="marquee__group">
            {images.map((img, i) => (
              <figure className="pg-card" key={`r2-${i}`}>
                <img src={img.src} alt={img.alt} />
              </figure>
            ))}
          </div>

          {/* Duplicate group for infinite scroll */}
          <div className="marquee__group">
            {images.map((img, i) => (
              <figure className="pg-card" key={`r2-copy-${i}`}>
                <img src={img.src} alt={img.alt} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
