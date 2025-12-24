import React, { useEffect, useRef, useMemo } from "react";
import completedProjects from "../utils/completedProjects";
import projectImages from "../utils/projectImages";
import "./ProjectGallery.marquee.css";

/* Shuffle */
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/* Insert text randomly every N items */
const injectTextRandomly = (images, label) => {
  const result = [];
  images.forEach((img, i) => {
    result.push({ type: "img", src: img });
    if (i % 4 === 2) {
      result.push({ type: "text", label });
    }
  });
  return result;
};

export default function ProjectGallery() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const topRow = useMemo(
    () =>
      injectTextRandomly(
        shuffle(completedProjects).concat(shuffle(completedProjects)),
        "Completed Projects"
      ),
    []
  );

  const bottomRow = useMemo(
    () =>
      injectTextRandomly(
        shuffle(projectImages).concat(shuffle(projectImages)),
        "Designs"
      ),
    []
  );

  useEffect(() => {
    const startMarquee = (row, speed, direction) => {
      let x = 0;

      const move = () => {
        if (!row) return;

        const width = row.scrollWidth / 2;
        if (!width) return requestAnimationFrame(move);

        x += direction === "left" ? -speed : speed;

        if (direction === "left" && x <= -width) x += width;
        if (direction === "right" && x >= 0) x -= width;

        row.style.transform = `translate3d(${x}px,0,0)`;
        requestAnimationFrame(move);
      };

      move();
    };

    // 🔥 Faster speeds
    startMarquee(row1Ref.current, 0.75, "left");
    startMarquee(row2Ref.current, 1.1, "right");
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Project Gallery</h2>

      <div className="marquee-wrapper">
        {/* TOP ROW */}
        <div className="marquee-row" ref={row1Ref}>
          {topRow.map((item, i) =>
            item.type === "img" ? (
              <img
                key={`top-img-${i}`}
                src={item.src}
                alt="Completed project"
                loading="lazy"
              />
            ) : (
              <div key={`top-text-${i}`} className="marquee-text-card center-text">
                <span>{item.label}</span>
              </div>
            )
          )}
        </div>

        {/* BOTTOM ROW */}
        <div className="marquee-row reverse" ref={row2Ref}>
          {bottomRow.map((item, i) =>
            item.type === "img" ? (
              <img
                key={`bot-img-${i}`}
                src={item.src}
                alt="Design gallery"
                loading="lazy"
              />
            ) : (
              <div key={`bot-text-${i}`} className="marquee-text-card inline-text">
                <span>{item.label}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
