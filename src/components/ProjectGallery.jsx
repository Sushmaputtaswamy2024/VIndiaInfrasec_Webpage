import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./ProjectGallery.css";

// Auto import images (FIXED PATH)
const images = Object.values(
  import.meta.glob("./Gallery/*.{jpg,jpeg,png,webp}", { eager: true })
).map((i) => i.default || i);

export default function ProjectGallery() {
  const row1 = useRef(null);
  const row2 = useRef(null);

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
    <section className="pg-section">
      <h1 className="pg-heading">Our Project Gallery</h1>

      {/* Row 1 */}
      <div className="pg-track" ref={row1}>
        <div className="pg-row">
          {images.map((src, i) => (
            <div className="pg-card" key={"r1-" + i}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        <div className="pg-row">
          {images.map((src, i) => (
            <div className="pg-card" key={"r1c-" + i}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="pg-track reverse" ref={row2}>
        <div className="pg-row">
          {images.map((src, i) => (
            <div className="pg-card" key={"r2-" + i}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>

        <div className="pg-row">
          {images.map((src, i) => (
            <div className="pg-card" key={"r2c-" + i}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
