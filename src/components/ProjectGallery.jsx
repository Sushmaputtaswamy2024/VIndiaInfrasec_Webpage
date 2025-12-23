import React, { useEffect, useRef, useMemo } from "react";
import completedProjects from "../utils/completedProjects";
import projectImages from "../utils/projectImages";
import "./ProjectGallery.marquee.css";

/* Fisher–Yates shuffle (pure, safe) */
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default function ProjectGallery() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  /* 🔒 Shuffle ONCE per load (prevents order reset on re-render) */
  const topImages = useMemo(() => shuffle(completedProjects), []);
  const bottomImages = useMemo(() => shuffle(projectImages), []);

  useEffect(() => {
    const startMarquee = (row, speed, direction) => {
      let x = 0;

      const move = () => {
        if (!row) return;

        const width = row.scrollWidth / 2;

        // wait until images are fully measured
        if (!width) {
          requestAnimationFrame(move);
          return;
        }

        x += direction === "left" ? -speed : speed;

        // seamless looping
        if (direction === "left" && x <= -width) x += width;
        if (direction === "right" && x >= 0) x -= width;

        row.style.transform = `translate3d(${x}px, 0, 0)`;
        requestAnimationFrame(move);
      };

      requestAnimationFrame(move);
    };

    const isMobile = window.innerWidth < 768;

    startMarquee(row1Ref.current, isMobile ? 0.25 : 0.45, "left");
    startMarquee(row2Ref.current, isMobile ? 0.4 : 0.7, "right");
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Project Gallery</h2>

      <div className="marquee-wrapper">
        {/* 🔹 TOP ROW — COMPLETED PROJECTS */}
        <div className="marquee-row" ref={row1Ref}>
          {[...topImages, ...topImages].map((img, i) => (
            <img
              key={`completed-${i}`}
              src={img}
              alt="Completed project"
              loading="lazy"
              draggable="false"
            />
          ))}
        </div>

        {/* 🔹 BOTTOM ROW — GALLERY */}
        <div className="marquee-row reverse" ref={row2Ref}>
          {[...bottomImages, ...bottomImages].map((img, i) => (
            <img
              key={`gallery-${i}`}
              src={img}
              alt="Gallery project"
              loading="lazy"
              draggable="false"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
