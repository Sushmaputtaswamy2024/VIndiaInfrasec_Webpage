import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import backgroundVideo from "../assets/backgroundVideo/Background.mp4";
import "./Hero.css";

export default function Hero() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  return (
    <section className="hero">

      {/* Background video */}
      <motion.video
        className="hero-video-bg"
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle dim overlay */}
      <motion.div
        className="video-overlay"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Typed Content */}
      <div className="hero-overlay">
        <div className="hero-typed-container">

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
              style={{ caretColor: "transparent" }}
            />
          </motion.div>

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
                style={{ caretColor: "transparent" }}
              />
            </motion.div>
          )}

          {showSubtext && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="hero-typed-subtext"
            >
              Crafting solutions with passion and precision.
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
