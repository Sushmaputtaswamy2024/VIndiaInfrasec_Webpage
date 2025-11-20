import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./ScrollVideo.css";

export default function ScrollVideo() {
  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.4, once: false });

  return (
    <section className="scroll-video-section" ref={ref}>
      <motion.div
        className="video-expand-wrapper"
        animate={{
          width: isInView ? "100%" : "350px",   // 🔥 smaller initial size
          borderRadius: isInView ? "0px" : "40px",
        }}
        transition={{
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          className="button-text"
          animate={{
            opacity: isInView ? 0.8 : 1,
            y: isInView ? -10 : 0,
          }}
          transition={{ duration: 0.8 }}
        >
          Let’s Get Started
        </motion.div>

        <video
          src="/VIndiaInfrasec_Webpage/intro.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="scroll-video"
        />
      </motion.div>
    </section>
  );
}
