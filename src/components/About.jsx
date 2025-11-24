import "./About.css";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [current, setCurrent] = useState(0);
  const [employees, setEmployees] = useState(0);

  const lines = [
    "VIndia Infrasec started its operations with a small villa project in the year 2010. VIndia Infrasec has defied all odds to be recognized as a spearheading force of engineering construction in South India.",
    "VIndia Infrasec is built on the principles of excellence and integrity. We work at the highest ethical standards and ensure the quality of our projects. It started its operations in the form of a partnership firm in the year 2010 and got incorporated as a Private Ltd Company in 2020.",
    "VIndia Infrasec is headquartered in Bangalore.Today the company has a strategic presence in locations across South India.We are differentiated by the quality of our people.We align our capabilities to the objectives of our customers to convert their dreams into reality."
  ];

  useEffect(() => {
    const element = aboutRef.current;

    // Reset text lines before each animation
    const resetLines = () => {
      gsap.set(".about-line", { opacity: 0, y: 20 });
    };

    // Reset counters before each animation
    const resetCounters = () => {
      setYears(0);
      setProjects(0);
      setCurrent(0);
      setEmployees(0);
    };

    // Smooth counter animation
    const startCounters = () => {
      const animate = (setter, finalVal, duration) => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: finalVal,
          duration,
          ease: "power3.out",
          onUpdate: () => setter(Math.floor(obj.val)),
        });
      };

      animate(setYears, 15, 2.5);
      animate(setProjects, 684, 3.5);
      animate(setCurrent, 24, 2.0);
      animate(setEmployees, 234, 2.8);
    };

    // Line-by-line text animation
    const animateLines = () => {
      gsap.to(".about-line", {
        opacity: 1,
        y: 0,
        stagger: 0.35,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    ScrollTrigger.create({
      trigger: element,
      start: "top 75%",   // when About starts to come nicely into view
      end: "bottom 60%",
      onEnter: () => {
        resetLines();
        resetCounters();
        animateLines();

        // 🔥 tiny delay before counters start
        gsap.delayedCall(0.6, startCounters);
      },
      onEnterBack: () => {
        resetLines();
        resetCounters();
        animateLines();

        // 🔥 also delay when scrolling back up into view
        gsap.delayedCall(0.6, startCounters);
      },
      once: false, // run every time we view the section
    });
  }, []);

  return (
    <section className="about-section" ref={aboutRef}>
      <h1>
        VIndia <span>Infrasec</span>
      </h1>

      <div className="about-text">
        {lines.map((text, i) => (
          <p key={i} className="about-line">
            {text}
          </p>
        ))}
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h2>{years}+</h2>
          <p>Years of Experience</p>
        </div>

        <div className="stat-box">
          <h2>{projects}+</h2>
          <p>Completed Projects</p>
        </div>

        <div className="stat-box">
          <h2>{current}+</h2>
          <p>Current Projects</p>
        </div>

        <div className="stat-box">
          <h2>{employees}+</h2>
          <p>Employees</p>
        </div>
      </div>
    </section>
  );
}

export default About;
