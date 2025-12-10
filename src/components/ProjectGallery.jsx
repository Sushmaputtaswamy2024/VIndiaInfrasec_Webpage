import React, { useEffect, useRef } from "react";
import projectImages from "../utils/projectImages";
import "./ProjectGallery.marquee.css";

export default function ProjectGallery() {
  const row1 = useRef(null);
  const row2 = useRef(null);

  useEffect(() => {
    console.log("Loaded Images:", projectImages);

    const animate = (row, speed) => {
      let x = 0;
      const move = () => {
        x -= speed;
        row.style.transform = `translateX(${x}px)`;
        if (Math.abs(x) >= row.scrollWidth / 2) {
          x = 0;
        }
        requestAnimationFrame(move);
      };
      move();
    };

    animate(row1.current, 0.5);
    animate(row2.current, 0.8);
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Project Gallery</h2>

      <div className="marquee-wrapper">
        <div className="marquee-row" ref={row1}>
          {[...projectImages, ...projectImages].map((img, i) => (
            <img key={i} src={img} alt="project" />
          ))}
        </div>

        <div className="marquee-row reverse" ref={row2}>
          {[...projectImages, ...projectImages].map((img, i) => (
            <img key={i} src={img} alt="project" />
          ))}
        </div>
      </div>
    </section>
  );
}
