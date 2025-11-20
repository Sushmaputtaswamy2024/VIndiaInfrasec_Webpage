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

    const startCounters = () => {
      const animate = (setter, final, speed) => {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          setter(count);
          if (count >= final) clearInterval(interval);
        }, speed);
      };

      setYears(0);
      setProjects(0);
      setCurrent(0);
      setEmployees(0);

      animate(setYears, 15, 50);
      animate(setProjects, 684, 2);
      animate(setCurrent, 24, 40);
      animate(setEmployees, 234, 10);
    };

    // Line animations
    const animateLines = () => {
      gsap.utils.toArray(".about-line").forEach((line, i) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power2.out",
          }
        );
      });
    };

    // ScrollTrigger to call animation every time visible
    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        startCounters();
        animateLines();
      },
      onEnterBack: () => {
        startCounters();
        animateLines();
      }
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
