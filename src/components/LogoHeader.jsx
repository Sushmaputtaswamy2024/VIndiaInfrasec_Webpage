import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "/logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function LogoHeader({ triggerRef }) {
  const logoContainerRef = useRef(null);
  const logoImageRef = useRef(null);
  const barRef = useRef(null);

  useLayoutEffect(() => {
    const logoEl = logoContainerRef.current;
    const imageEl = logoImageRef.current;
    const barEl = barRef.current;
    const trigger = triggerRef?.current;

    if (!logoEl || !imageEl || !barEl || !trigger) return;

    const isMobile = window.innerWidth < 600;
    const startWidth = isMobile ? 140 : 260;
    const endWidth = isMobile ? 80 : 120;

    gsap.set(imageEl, {
      width: startWidth,
      force3D: true,
    });

    gsap.set(logoEl, {
      left: "100%",
      xPercent: -100,
      force3D: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: "bottom top",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    tl.fromTo(
      barEl,
      { height: 0, opacity: 0 },
      { height: 80, opacity: 1 },
      0
    )
      .to(
        logoEl,
        { left: "50%", xPercent: -50 },
        0
      )
      .to(
        imageEl,
        { width: endWidth },
        0
      );

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
    };
  }, [triggerRef]);

  return (
    <>
      <div
        ref={barRef}
        aria-hidden="true"
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
          transform: "translateZ(0)",
        }}
      />

      <div
        ref={logoContainerRef}
        role="banner"
        aria-label="Company logo"
        style={{
          position: "fixed",
          top: "12px",
          zIndex: 3000,
          transform: "translateZ(0)",
        }}
      >
        <img
          ref={logoImageRef}
          src={logo}
          alt="VIndia Infrasec logo"
          loading="eager"
          decoding="async"
          style={{ width: "260px", display: "block" }}
        />
      </div>
    </>
  );
}
