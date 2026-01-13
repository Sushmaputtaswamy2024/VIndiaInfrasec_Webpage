import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import "./OverlappingCards.css";
import ServiceBadge from "../ServiceBadge";

gsap.registerPlugin(ScrollTrigger);

// =============================
// SERVICE DATA (CLEAN & SAFE)
// =============================
const services = [
  {
    heading: "Construction",
    description:
      "High-quality construction services with expert supervision, accurate estimation, and timely project delivery.",
    tags: ["Develop", "Supervision", "Estimate"],
    img: "/images/building1.webp",
    route: "/construction",
  },
  {
    heading: "Interior Design",
    description:
      "Modern and functional interior design solutions crafted to enhance residential and commercial spaces.",
    tags: ["Plan", "Design", "Deliver"],
    img: "/images/building2.webp",
    route: "/interior",
  },
  {
    heading: "Architectural Design",
    description:
      "Creative architectural designs combining aesthetics, functionality, and intelligent space planning.",
    tags: ["Concept", "Planning", "Execution"],
    img: "/images/architecture.webp",
    route: "/architecture",
  },
];

export default function OverlappingCards() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    /* 🔑 iOS SAFARI SCROLL NORMALIZATION */
    ScrollTrigger.normalizeScroll(true);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");

      // Initial state (UNCHANGED)
      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: i + 1,
          y: i === 0 ? 0 : window.innerHeight,
          scale: 1,
          force3D: true,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          scrub: true,
          pin: true,

          /* 🔑 REQUIRED FOR iOS SAFARI */
          pinType: "fixed",

          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(cards[i - 1], { scale: 0.92, ease: "none" }, i - 1);
        tl.to(card, { y: 0, ease: "none" }, i - 1);
      });

      /* 🔑 iOS needs explicit refresh */
      ScrollTrigger.refresh();
    }, containerRef);

    /* 🔑 Refresh again after full load (iOS fix) */
    window.addEventListener("load", ScrollTrigger.refresh);

    return () => {
      window.removeEventListener("load", ScrollTrigger.refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="cards-container">
      {services.map((s, i) => (
        <div
          key={i}
          className="service-card"
          data-theme={i}
          role="button"
          tabIndex={0}
          onClick={() => navigate(s.route)}
          onKeyDown={(e) => e.key === "Enter" && navigate(s.route)}
          style={{ cursor: "pointer" }}
        >
          <ServiceBadge />

          {s.img && (
            <img
              src={s.img}
              alt={s.heading}
              loading="lazy"
            />
          )}

          <div className="content">
            <h2>{s.heading}</h2>
            <p>{s.description}</p>

            <div className="tags">
              {s.tags.map((tag, idx) => (
                <span key={idx} className="pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
