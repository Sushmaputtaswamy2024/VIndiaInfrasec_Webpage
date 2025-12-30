import React, { useState, useEffect, useRef, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import backgroundVideo from "/Background.mp4";
import "./Hero.css";

export default function Hero() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Lazy load video for better performance
  useEffect(() => {
    const id = requestIdleCallback(() => setShowVideo(true));
    return () => cancelIdleCallback(id);
  }, []);

  // Responsive mobile detection with debouncing
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Debounced resize handler for better performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 150);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Callback handlers for type animation
  const handleFirstLineComplete = useCallback(() => {
    setShowSecondLine(true);
  }, []);

  const handleSecondLineComplete = useCallback(() => {
    setShowSubtext(true);
  }, []);

  return (
    <section className="hero" role="banner">
      {/* SEO H1 */}
      <h1 className="sr-only">
        VIndia Infrasec – Construction, Interior, Architectural & Structural Design
      </h1>

      {/* Background Video */}
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
          animate={{ scale: isMobile ? 1 : 1.08 }}
          transition={{ duration: 8, ease: "easeOut" }}
          aria-label="Background video"
        />
      )}

      {/* Overlay */}
      <div className="video-overlay" aria-hidden="true" />

      {/* Text Content */}
      <div className="hero-overlay">
        <div className="hero-typed-container">
          {/* LINE 1 */}
          <TypeAnimation
            sequence={[
              "You Dream It.",
              600,
              handleFirstLineComplete,
            ]}
            speed={50}
            repeat={0}
            className="hero-typed-line1"
            style={{ caretColor: "transparent" }}
          />

          {/* LINE 2 — FORCED NEW LINE */}
          {showSecondLine && (
            <TypeAnimation
              sequence={[
                "We Build It.",
                600,
                handleSecondLineComplete,
              ]}
              speed={50}
              repeat={0}
              className="hero-typed-line2"
              style={{ caretColor: "transparent", display: "block" }}
            />
          )}

          {/* SUBTEXT */}
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
