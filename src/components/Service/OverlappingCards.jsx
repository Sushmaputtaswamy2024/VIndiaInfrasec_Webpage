import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OverlappingCards.css";

import img1 from "/images/building1.webp";
import img2 from "/images/building2.webp";
import img3 from "/images/architecture.webp";
import ServiceBadge from "../ServiceBadge";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    img: img1,
    heading: "Construction",
    description:
      "High-quality construction services with expert supervision, accurate estimation, and timely project delivery.",
    tags: ["Develop", "Supervision", "Estimate"],
  },
  {
    img: img2,
    heading: "Interior Design",
    description:
      "Modern and functional interior design solutions crafted to enhance residential and commercial spaces.",
    tags: ["Plan", "Design", "Deliver"],
  },
  {
    img: img3,
    heading: "Architectural Design",
    description:
      "Creative architectural designs combining aesthetics, functionality, and intelligent space planning.",
    tags: ["Concept", "Planning", "Execution"],
  },
];

export default function OverlappingCards() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");

      // INITIAL STATE (HEIGHT-SAFE)
      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: i + 1,
          y: i === 0 ? 0 : window.innerHeight, // 🔥 safer than "100vh"
          scale: 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,

          // 🔥 refresh when layout changes
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return;

        tl.to(cards[i - 1], { scale: 0.92, ease: "none" }, i - 1);
        tl.to(card, { y: 0, ease: "none" }, i - 1);
      });

      // 🔥 wait for images before calculating
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="cards-container">
      {services.map((s, i) => (
        <div className="service-card" data-theme={i} key={i}>
          <ServiceBadge />
          <img src={s.img} alt={s.heading} loading="lazy" />
          <div className="content">
            <h2>{s.heading}</h2>
            <p>{s.description}</p>
            <div className="tags">
              {s.tags.map((t, idx) => (
                <span key={idx} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
