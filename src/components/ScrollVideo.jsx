import { motion, useInView, useAnimation, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import "./ScrollVideo.css";
import introVideo from "/intro.mp4";


function ScrollVideo() {
  const ref = useRef(null);

  // Detect if section is in view
  const isInView = useInView(ref, { amount: 0.4 });

  // Video & Text animation controls
  const videoControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Smooth expand
      videoControls.start({
        width: "100vw",
        borderRadius: "0px",
        transition: {
          duration: 1.6,
          ease: [0.16, 1, 0.3, 1]
        }
      });

      // Soft fade & slight move
      textControls.start({
        opacity: 0.7,
        y: -10,
        transition: { duration: 1 }
      });
    } else {
      // Smooth shrink
      videoControls.start({
        width: "500px",
        borderRadius: "40px",
        transition: {
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1]
        }
      });

      textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      });
    }
  }, [isInView]);

  return (
    <section className="scroll-video-section" ref={ref}>

      <motion.div
        className="video-expand-wrapper"
        animate={videoControls}
      >
        <motion.div className="button-text" animate={textControls}>
          Let’s Get Started
        </motion.div>

        <motion.video
          src={introVideo}
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

export default ScrollVideo;
