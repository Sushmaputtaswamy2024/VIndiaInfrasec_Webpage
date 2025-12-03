import React from "react";
import { images } from "../utils/projectImages";
import "./ProjectGallery.marquee.css";

export default function ProjectGallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">Our Project Gallery</h2>

      {/* ROW 1 */}
      <div className="marquee">
        <div className="marquee-content">
          {images.concat(images).map((img, i) => (
            <img key={`row1-${i}`} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>

      {/* ROW 2 */}
      <div className="marquee reverse">
        <div className="marquee-content">
          {images.concat(images).map((img, i) => (
            <img key={`row2-${i}`} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
