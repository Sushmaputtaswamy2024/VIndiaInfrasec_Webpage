import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import backgroundVideo from "../assets/backgroundVideo/Background.mp4";
import "./Hero.css";

export default function Hero() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  return (
    <section
      className="hero"
      role="banner"
      aria-label="Hero section showing company introduction"
    >
      {/* 🔹 Main SEO Heading (invisible to user, visible to Google) */}
      <h1 className="sr-only">
        VIndia Infrasec – Construction, Interior, Architectural & Structural Design Experts
      </h1>

      {/* Background video */}
      <motion.video
        className="hero-video-bg"
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        Background video not supported.
      </motion.video>

      {/* Overlay for readability */}
      <motion.div
        className="video-overlay"
        initial={{ opacity: 0.45 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Typed Text */}
      <div className="hero-overlay">
        <div className="hero-typed-container">

          {/* Line 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <TypeAnimation
              sequence={[
                "You Dream It.",
                500,
                () => setShowSecondLine(true),
              ]}
              speed={50}
              repeat={0}
              className="hero-typed-line1"
              aria-label="You dream it."
              style={{ caretColor: "transparent" }}
            />
          </motion.div>

          {/* Line 2 */}
          {showSecondLine && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <TypeAnimation
                sequence={[
                  "We Build It.",
                  500,
                  () => setShowSubtext(true),
                ]}
                speed={50}
                repeat={0}
                className="hero-typed-line2"
                aria-label="We build it."
                style={{ caretColor: "transparent" }}
              />
            </motion.div>
          )}

          {/* Subtext */}
          {showSubtext && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="hero-typed-subtext"
            >
              Crafting solutions with passion and precision.
            </motion.p>
          )}

        </div>
      </div>
    </section>
  );
}
