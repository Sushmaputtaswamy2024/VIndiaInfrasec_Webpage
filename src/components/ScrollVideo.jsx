import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollVideo.css";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const text = textRef.current;
    const video = videoRef.current;

    if (!wrapper || !text || !video) return;

    /* iOS SAFARI VIDEO UNLOCK */
    video.muted = true;
    video.setAttribute("playsinline", "");
    video.play().catch(() => {});

    // Initial state
    gsap.set(wrapper, {
      width: "350px",
      borderRadius: "40px",
      force3D: true,
    });

    gsap.set(text, {
      opacity: 1,
      y: 0,
      force3D: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom top",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    tl.to(wrapper, {
      width: "100vw",
      borderRadius: "0px",
      duration: 1,
      ease: "none",
    }).to(
      text,
      {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power1.out",
      },
      "<"
    );

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
    };
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

        <video
          ref={videoRef}
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
