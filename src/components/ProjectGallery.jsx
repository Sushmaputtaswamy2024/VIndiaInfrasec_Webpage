import React, { useEffect, useRef, useMemo } from "react";
import completedProjects from "../utils/completedProjects";
import projectImages from "../utils/projectImages";
import "./ProjectGallery.marquee.css";

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const injectTextSparsely = (images, label, count = 2) => {
  const result = images.map((img) => ({ type: "img", src: img }));

  const used = new Set();
  while (used.size < count && result.length > 4) {
    used.add(Math.floor(Math.random() * result.length));
  }

  [...used].forEach((i) => {
    result.splice(i, 0, { type: "text", label });
  });

  return result;
};

export default function ProjectGallery() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const rafIds = useRef([]);

  const topRow = useMemo(
    () =>
      injectTextSparsely(
        shuffle(completedProjects).concat(shuffle(completedProjects)),
        "Completed Projects",
        2
      ),
    []
  );

  const bottomRow = useMemo(
    () =>
      injectTextSparsely(
        shuffle(projectImages).concat(shuffle(projectImages)),
        "Designs",
        2
      ),
    []
  );

  useEffect(() => {
    const startMarquee = (row, speed, direction) => {
      if (!row) return;

      let x = 0;
      let rafId;

      const animate = () => {
        const totalWidth = row.scrollWidth;
        const width = totalWidth > 0 ? totalWidth / 2 : 0;

        if (width > 0) {
          x += direction === "left" ? -speed : speed;

          if (direction === "left" && x <= -width) x += width;
          if (direction === "right" && x >= 0) x -= width;

          row.style.transform = `translate3d(${x}px,0,0)`;
        }

        rafId = requestAnimationFrame(animate);
      };

      rafId = requestAnimationFrame(animate);
      rafIds.current.push(rafId);
    };

    startMarquee(row1Ref.current, 0.75, "left");
    startMarquee(row2Ref.current, 1.1, "right");

    return () => {
      rafIds.current.forEach(cancelAnimationFrame);
      rafIds.current = [];
    };
  }, []);

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our Project Gallery</h2>

      <div className="marquee-wrapper">
        <div className="marquee-row" ref={row1Ref}>
          {topRow.map((item, i) =>
            item.type === "img" ? (
              <img
                key={`top-img-${i}`}
                src={item.src}
                alt="Completed project"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div
                key={`top-text-${i}`}
                className="marquee-text-card center-text"
              >
                <span>{item.label}</span>
              </div>
            )
          )}
        </div>

        <div className="marquee-row reverse" ref={row2Ref}>
          {bottomRow.map((item, i) =>
            item.type === "img" ? (
              <img
                key={`bot-img-${i}`}
                src={item.src}
                alt="Design gallery"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div
                key={`bot-text-${i}`}
                className="marquee-text-card inline-text"
              >
                <span>{item.label}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
