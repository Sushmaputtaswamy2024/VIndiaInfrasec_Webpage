import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollVideo.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const text = textRef.current;

    // Initial state
    gsap.set(wrapper, { width: "350px", borderRadius: "40px" });
    gsap.set(text, { opacity: 1, y: 0 });

    // Scroll animation
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1.2,
      },
    })
      .to(wrapper, {
        width: "100vw",
        borderRadius: "0px",
        duration: 1,
        ease: "none",
      })
      .to(
        text,
        {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      );
  }, []);

  return (
    <section
      className="scroll-video-section"
      ref={sectionRef}
      aria-label="Intro video section"
      role="region"
    >
      <div className="video-expand-wrapper" ref={wrapperRef}>
        
        <p className="button-text" ref={textRef}>
          Let’s Get Started
        </p>

        {/* FIXED PATH */}
        <video
          src="/intro.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="scroll-video"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
