import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import ShortService from "./ShortService";
import About from "../About";
import img from "./images/building1.jpg";

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
      "Premium quality construction services with expert supervision, accurate estimation, and on-time delivery."
  },
  {
    img,
    heading: "Interior Design",
    subcontent1: "Plan",
    subcontent2: "Execute",
    subcontent3: "Deliver",
    description:
      "Modern interior solutions combining aesthetics and functionality for homes and commercial spaces."
  },
  {
    img,
    heading: "Structural Design",
    subcontent1: "Analysis",
    subcontent2: "Engineering",
    subcontent3: "Validation",
    description:
      "Reliable structural engineering ensuring safety, durability, and compliance with standards."
  }
];

export default function OverlappingCards() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray(".card-wrapper");

      // Overlap Animations
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

      // Smooth Image Zoom
      gsap.utils.toArray(".service-card img").forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1 },
          {
            scale: 1.18,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".card-wrapper"),
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

      {/* =============================
          ABOUT SECTION (No changes)
      ============================== */}
      <section className="empty-section">
        <About />
      </section>

      {/* =============================
          SEO Heading (HIDDEN)
      ============================== */}
      <h2 className="sr-only">
        Our Services – Construction, Interior Design & Structural Design
      </h2>

      {/* =============================
          SERVICE CARDS
      ============================== */}
      <div
        className="cards-container"
        role="list"
        aria-label="Construction, Interior Design and Structural Design Services"
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
