import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo.png";


gsap.registerPlugin(ScrollTrigger);

export default function LogoHeader({ triggerRef }) {
  const logoContainerRef = useRef(null);
  const logoImageRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const logo = logoContainerRef.current;
    const image = logoImageRef.current;
    const bar = barRef.current;
    const trigger = triggerRef?.current;

    if (!trigger) return; // safety

    const isMobile = window.innerWidth < 600;
    const startWidth = isMobile ? 140 : 260;
    const endWidth = isMobile ? 80 : 120;

    gsap.set(image, { width: startWidth });
    gsap.set(logo, { left: "100%", xPercent: -100 });

    gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "bottom top",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    })
      .fromTo(bar, { height: 0, opacity: 0 }, { height: 80, opacity: 1 }, 0)
      .to(logo, { left: "50%", xPercent: -50 }, 0)
      .to(image, { width: endWidth }, 0);

  }, [triggerRef]);

  return (
    <>
      {/* WHITE BAR */}
      <div
        ref={barRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: 0,
          opacity: 0,
          background: "#fff",
          zIndex: 2000,
          pointerEvents: "none",
        }}
      />

      {/* LOGO */}
      <div
        ref={logoContainerRef}
        style={{
          position: "fixed",
          top: "12px",
          zIndex: 3000,
        }}
      >
        <img
          ref={logoImageRef}
          src={logo}
          alt="Logo"
          style={{ width: "260px" }}
        />
      </div>
    </>
  );
}
