import { useState } from "react";
import "./construction.css";

export default function Construction() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="construction-page">
      
      {/* ☰ MENU BUTTON */}
      <div className="hamburger" onClick={() => setMenu(!menu)}>
        ☰
      </div>

      {/* LEFT SLIDE MENU */}
      <div className={`side-menu ${menu ? "open" : ""}`}>
        <p>Construction</p>
        <p>Interior Design</p>
        <p>Architectural Design</p>
        <p>Blog</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="construction-content">

        {/* TITLE */}
        <h1 className="construction-title">Construction</h1>

        {/* VIDEO SECTION */}
        <div className="video-section">
          <video controls>
            <source src="/construction.mp4" type="video/mp4" />
          </video>
        </div>

        {/* IMAGE + TEXT SECTION */}
        <div className="image-text-section">
          <div className="left-image">
            {/* ✅ PUBLIC IMAGE PATH (NO IMPORT) */}
            <img src="/building.jpg" alt="Construction Work" />
          </div>

          <div className="right-text">
            <h2>How We Work</h2>
            <p>
              From planning to structured execution, we ensure that every
              building rises with precision, safety, and timeless quality.
              Our construction process balances speed, strength, and smart
              material usage.
            </p>
            <p>
              Our expert supervision guarantees accuracy in estimation,
              design compliance, and timely handover of projects.
            </p>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="form-section">
          <h2>Book a Meeting</h2>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Your Message"></textarea>

          <button>Block a Meeting</button>
        </div>

        {/* ONE LINE FOOTER */}
        <div className="single-footer">
          Vindia Infrasec
        </div>

      </div>
    </div>
  );
}
