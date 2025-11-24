import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import ShortService from "./ShortService";
import img from "./images/building1.jpg";
import About from "../About";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    img,
    heading: "Construction",
    subcontent1: "Develop",
    subcontent2: "SuperVision",
    subcontent3: "Estimate",
    description:
      "We develop custom websites that stand out to international standards, ensuring quality and performance."
  },
  {
    img,
    heading: "Interiors",
    subcontent1: "Plan",
    subcontent2: "Quality",
    subcontent3: "Deliver",
    description:
      "Elegant and functional interiors with a focus on comfort, aesthetics, and practicality."
  },
  {
    img,
    heading: "Security",
    subcontent1: "Secure",
    subcontent2: "Monitor",
    subcontent3: "Automate",
    description:
      "Advanced automation and surveillance systems for modern infrastructure."
  }
];

const OverlappingCards = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrappers = gsap.utils.toArray(".card-wrapper");

      // 1️⃣ Pin + Fade + Shrink (Urban Hub style)
      wrappers.forEach((wrapper, index) => {
        const card = wrapper.querySelector(".service-card");

        if (!card) return;

        // Last card stays normal
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
            pinSpacing: false
          }
        })
        .to(card, {
          opacity: 0,
          scale: 0.92,
          ease: "none"
        }, 0);
      });


      // 2️⃣ Scroll-Zoom (Zoom in when scrolling down, zoom out when scrolling up)
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
              scrub: 1.2,  // Smooth zoom in & out
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>

      <section className="empty-section">
        <About />
      </section>

      <div className="cards-container">
        {services.map((item, index) => (
          <div className="card-wrapper" key={index}>
            <div className="service-card">
              <ShortService {...item} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default OverlappingCards;
