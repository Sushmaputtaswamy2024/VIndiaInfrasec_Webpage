import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import ShortService from "./ShortService";
import About from "../About";
import img from "/images/building1.webp";

gsap.registerPlugin(ScrollTrigger);

// =============================
// SERVICE DATA (SEO-friendly)
// =============================
const services = [
  {
    img,
    heading: "Construction",
    subcontent1: "Develop",
    subcontent2: "Supervision",
    subcontent3: "Estimate",
    description:
      "High-quality construction services with expert supervision, accurate estimation, and timely project delivery.",
  },
  {
    img,
    heading: "Interior Design",
    subcontent1: "Plan",
    subcontent2: "Execute",
    subcontent3: "Deliver",
    description:
      "Modern and functional interior design solutions crafted to enhance residential and commercial spaces.",
  },
  {
    img,
    heading: "Architectural Design",
    subcontent1: "Concept",
    subcontent2: "Planning",
    subcontent3: "Execution",
    description:
      "Creative architectural designs combining aesthetics, functionality, and intelligent space planning.",
  },
];

export default function OverlappingCards() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray(".card-wrapper");

      wrappers.forEach((wrapper, index) => {
        const card = wrapper.querySelector(".service-card");

        if (index === wrappers.length - 1) {
          gsap.set(card, { opacity: 1, scale: 1 });
          return;
        }

        gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false,
          },
        }).to(card, {
          opacity: 0,
          scale: 0.92,
          ease: "none",
        });
      });

      gsap.utils.toArray(".service-card img").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 1 },
          {
            scale: 1.18,
            ease: "none",
            scrollTrigger: {
              trigger: image.closest(".card-wrapper"),
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ABOUT SECTION */}
      <section className="empty-section">
        <About />
      </section>

      {/* SEO Heading */}
      <h2 className="sr-only">
        Construction, Interior Design and Architectural Services in India
      </h2>

      {/* SERVICE CARDS */}
      <div
        className="cards-container"
        role="list"
        aria-label="Construction, Interior Design and Architectural Services"
      >
        {services.map((service, index) => (
          <div className="card-wrapper" key={index} role="listitem">
            <div className="service-card">
              <ShortService {...service} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
