import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import ShortService from "./ShortService";
import img from "./images/building1.jpg";
import About from "../About";

const construction = {
  img: img,
  subcontent1: "Develop",
  subcontent2: "SuperVision",
  subcontent3: "Estimate",
  discription:
    "We develop custom websites that stand out to international standards, ensuring quality and performance. Using the latest technologies, we create websites that are both visually appealing and highly functional. Bring your online presence with our customised development.",
  heading: "Construction",
};

gsap.registerPlugin(ScrollTrigger);

const OverlappingCards = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrappers = document.querySelectorAll(".card-wrapper");

      wrappers.forEach((wrapper, index) => {
        const card = wrapper.querySelector(".card");

        if (index === wrappers.length - 1) {
          gsap.set(card, { opacity: 1, scale: 1 });
        } else {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                pinSpacing: false,
              },
            })
            .set(card, { opacity: 1, scale: 1 })
            .to(card, { opacity: 0, scale: 0.6, ease: "none" }, 0.01);
        }
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
        <div className="card-wrapper">
          <div className="card">
            <ShortService {...construction} />
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <ShortService {...construction} />
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <ShortService {...construction} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlappingCards;
