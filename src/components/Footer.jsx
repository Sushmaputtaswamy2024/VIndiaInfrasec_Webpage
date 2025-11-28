import "./Footer.css";
import {
  FaGoogle,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const [index, setIndex] = useState(0);

  const states = [
    {
      title: "Kerala",
      districts: ["Kochi", "Trivandrum", "Kannur"],
      maps: [
        "https://www.google.com/maps?q=Kochi,Kerala&output=embed",
        "https://www.google.com/maps?q=Trivandrum,Kerala&output=embed",
        "https://www.google.com/maps?q=Kannur,Kerala&output=embed",
      ],
    },
    {
      title: "Karnataka",
      districts: ["Mysore", "Bengaluru"],
      maps: [
        "https://www.google.com/maps?q=Mysore,Karnataka&output=embed",
        "https://www.google.com/maps?q=Bengaluru,Karnataka&output=embed",
      ],
    },
    {
      title: "Tamil Nadu",
      districts: ["Coimbatore", "Chennai", "Madurai"],
      maps: [
        "https://www.google.com/maps?q=Coimbatore,Tamil+Nadu&output=embed",
        "https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed",
        "https://www.google.com/maps?q=Madurai,Tamil+Nadu&output=embed",
      ],
    },
  ];

  /* AUTO-SLIDE STATES */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* STOP ICONS FROM OVERLAPPING THE FOOTER */
  useEffect(() => {
    const footer = document.querySelector(".footer");
    const iconLeft = document.querySelector(".icon-left");
    const iconRight = document.querySelector(".icon-right");

    function adjustIcons() {
      const footerTop = footer.getBoundingClientRect().top;
      const winHeight = window.innerHeight;

      if (footerTop < winHeight - 120) {
        iconLeft.classList.add("icons-stop");
        iconRight.classList.add("icons-stop");
      } else {
        iconLeft.classList.remove("icons-stop");
        iconRight.classList.remove("icons-stop");
      }
    }

    window.addEventListener("scroll", adjustIcons);
    return () => window.removeEventListener("scroll", adjustIcons);
  }, []);

  return (
    <>

      {/* FIXED ICONS ABOVE FOOTER */}
      <div className="icons-above-footer">
        <a href="tel:+918592921212" className="icon-left">
          <FaPhoneAlt />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=918592921212"
          className="icon-right"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* FOOTER */}
      <footer className="footer">

        {/* SOCIAL + BRAND */}
        <div className="social-col">
          <div className="footer-social-left">
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>

          <div className="footer-brand">
            <h2 className="footer-logo">VIndia Infrasec</h2>
            <p className="footer-desc">
              Delivering excellence in Construction, Interior Design & Structural
              Engineering across South India.
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="col">
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT NUMBERS */}
        <div className="col contact-col">
          <h3 className="contact-title">Call Us</h3>
          <ul className="contact-list">
            <li>+91 85929 11212</li>
            <li>+91 85929 21212</li>
            <li>+91 85929 31212</li>
            <li>+91 85929 41212</li>
            <li>+91 85929 51212</li>
            <li>+91 85929 61212</li>
          </ul>
        </div>

        {/* MAPS */}
        <div className="col col-maps">
          <h3 className="state-title">{states[index].title}</h3>

          <div className="district-row">
            {states[index].districts.map((district, i) => (
              <div className="district-card" key={i}>
                <h4 className="district-name">{district}</h4>

                <div className="map-wrapper">
                  <span className="map-icon">📍</span>
                  <iframe
                    src={states[index].maps[i]}
                    loading="lazy"
                    title={`${district} map`}
                    className="map-frame"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

      </footer>
    </>
  );
}
