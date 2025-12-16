import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OverlappingCards.css";

import img1 from "/images/building1.webp";
import img2 from "/images/building2.webp";
import img3 from "/images/architecture.webp";

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
      const wrappers = gsap.utils.toArray(".card-wrapper");

      wrappers.forEach((wrapper, index) => {
        const card = wrapper.querySelector(".service-card");

        // Do NOT pin last card
        if (index === wrappers.length - 1) return;

        gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom top",
            scrub: 0.9,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        }).to(card, {
          scale: 0.94,
          opacity: 0,
          ease: "none",
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="cards-container">
      {services.map((s, i) => (
        <div className="card-wrapper" key={i}>
          <div className="service-card" data-theme={i}>
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
        </div>
      ))}
    </section>
  );
}
