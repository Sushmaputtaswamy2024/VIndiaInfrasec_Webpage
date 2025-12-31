import React, { useState, useEffect, useRef, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import backgroundVideo from "/Background.mp4";
import "./Hero.css";

export default function Hero() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  // Lazy load video
  useEffect(() => {
    const id = requestIdleCallback(() => setShowVideo(true));
    return () => cancelIdleCallback(id);
  }, []);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();

    let t;
    const resize = () => {
      clearTimeout(t);
      t = setTimeout(check, 150);
    };

    window.addEventListener("resize", resize, { passive: true });
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleFirstLineComplete = useCallback(() => {
    setShowSecondLine(true);
  }, []);

  const handleSecondLineComplete = useCallback(() => {
    setShowSubtext(true);
  }, []);

  return (
    <section className="hero" role="banner">
      <h1 className="sr-only">
        VIndia Infrasec – Construction, Interior, Architectural & Structural Design
      </h1>

      {showVideo && (
        <motion.video
          ref={videoRef}
          className="hero-video-bg"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          initial={{ scale: 1 }}
          animate={{ scale: isMobile ? 1.08 : 1.1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
      )}

      <div className="video-overlay" />

      <div className="hero-overlay">
        <div className="hero-typed-container">
          <TypeAnimation
            sequence={["You Dream It.", 600, handleFirstLineComplete]}
            speed={50}
            repeat={0}
            className="hero-typed-line1"
            style={{ caretColor: "transparent" }}
          />

          {showSecondLine && (
            <TypeAnimation
              sequence={["We Build It.", 600, handleSecondLineComplete]}
              speed={50}
              repeat={0}
              className="hero-typed-line2"
              style={{ caretColor: "transparent", display: "block" }}
            />
          )}

          {showSubtext && (
            <motion.p
              className="hero-typed-subtext"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              Crafting solutions with passion and precision.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
