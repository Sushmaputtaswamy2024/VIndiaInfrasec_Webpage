import { useEffect, useRef, useState } from "react";
import "./Architectural.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Architectural() {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [played, setPlayed] = useState(false);

  // detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // desktop: play video when visible
  useEffect(() => {
    if (isMobile) return;
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
          video.classList.add("visible");
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isMobile]);

  // mobile tap-to-play
  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play();
    video.classList.add("visible");
    setPlayed(true);
  };

  return (
    <div className="architecture-page">
      {/* Sidebar */}
      <Sidebar />

      <main className="page-content">
        {/* ================= TITLE ================= */}
        <section className="arch-hero">
          <h1>Architectural Design</h1>
          <p className="arch-subtitle">Design • Consulting • Building</p>
        </section>

        {/* ================= IMAGE AFTER TITLE ================= */}
        <section className="arch-title-image">
          <img
            src="/architectural/2.3.webp"
            alt="Architectural exterior"
          />
        </section>

        {/* ================= INTRO ================= */}
        <section className="arch-intro">
          <p>
            Our world is evolving rapidly. Architecture must respond with
            thoughtful design that balances aesthetics, functionality,
            sustainability, and cost.
          </p>
        </section>

        {/* ================= EXPERT ================= */}
        <section className="arch-expert">
          <h2>Get Architectural Design Expert Advice for Your Home or Property</h2>

          <div className="arch-expert-grid">
            <img src="/architectural/2.2.webp" alt="Architect consultation" />
            <div>
              <p>
                Our in-house architects bring over 15 years of experience in
                premium residential and commercial projects.
              </p>
              <p>
                From concept to execution guidance, we help you make confident,
                informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONSULTATION ================= */}
        <section className="arch-consultation">
          <h2>
            Get advice quickly and easily without committing to full architectural
            fees
          </h2>

          <div className="consultation-grid">
            <div className="consult-card">
              <img src="/architectural/2.4.webp" alt="Online consultation" />
              <h3>Online Design Consultation</h3>
            </div>

            <div className="consult-card">
              <img src="/architectural/2.5.webp" alt="Planning" />
              <h3>Planning & Concepts</h3>
            </div>

            <div className="consult-card">
              <img src="/architectural/1.webp" alt="Execution" />
              <h3>Execution Guidance</h3>
            </div>
          </div>
        </section>

        {/* ================= ENTRANCE (VIDEO) ================= */}
        <section className="arch-entrance">
          <div className="entrance-media">
            <video
              ref={videoRef}
              className={`entrance-video ${played ? "visible" : ""}`}
              src="/architectural/architectural.mp4"
              muted
              loop
              playsInline
              poster="/architectural/1.webp"
            />

            {isMobile && !played && (
              <button className="play-overlay" onClick={handlePlay}>
                ▶
              </button>
            )}
          </div>
        </section>

        {/* ================= START PROJECT ================= */}
        <section className="arch-start">
          <h2>Start a Project</h2>

          <form className="arch-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone" required />
            <input type="text" placeholder="Project Location" />
            <textarea placeholder="Tell us about your project" rows="4" />
            <button type="submit">Book a Consultation</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
