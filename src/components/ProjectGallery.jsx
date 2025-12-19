import React, { useEffect, useRef } from "react";
import projectImages from "../utils/projectImages";
import "./ProjectGallery.marquee.css";

/* Fisher–Yates shuffle */
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default function ProjectGallery() {
  const row1 = useRef(null);
  const row2 = useRef(null);

  useEffect(() => {
    const animate = (row, speed, direction = "left") => {
      let x = 0;
      const width = row.scrollWidth / 2;

      const move = () => {
        x += direction === "left" ? -speed : speed;

        if (direction === "left" && -x >= width) x += width;
        if (direction === "right" && x >= 0) x -= width;

        row.style.transform = `translateX(${x}px)`;
        requestAnimationFrame(move);
      };

      move();
    };

    animate(row1.current, 0.45, "left");
    animate(row2.current, 0.7, "right");
  }, []);

  /* 🔥 IMPORTANT PART */
  const row1Images = shuffle(projectImages);
  const row2Images = shuffle(projectImages);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Project Gallery</h2>

      <div className="marquee-wrapper">
        {/* TOP ROW */}
        <div className="marquee-row" ref={row1}>
          {[...row1Images, ...row1Images].map((img, i) => (
            <img key={`r1-${i}`} src={img} alt="project" loading="lazy" />
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="marquee-row reverse" ref={row2}>
          {[...row2Images, ...row2Images].map((img, i) => (
            <img key={`r2-${i}`} src={img} alt="project" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
