import "./Footer.css";
import {
  FaGoogle,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
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

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % states.length),
      4500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a href="https://wa.me/8592921212" className="whatsapp-float">
        <FaWhatsapp />
      </a>

      <footer className="footer">

        {/* SOCIAL ICONS + BRAND TEXT SIDE-BY-SIDE */}
        <div className="col social-col">

          {/* Vertical Social Icons */}
          <nav className="footer-social-left">
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </nav>

          {/* Logo + Description beside icons */}
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

        {/* MAP CAROUSEL */}
        <div className="col footer-right">
          <div className="map-glass">
            {states.map((state, i) => (
              <div
                key={i}
                className={`state-box ${index === i ? "active" : ""}`}
              >
                <h3 className="state-title">{state.title}</h3>

                <div className="district-container">
                  {state.districts.map((district, idx) => (
                    <div className="district-card" key={idx}>
                      <h4 className="district-name">{district}</h4>
                      {index === i && (
                        <iframe
                          src={state.maps[idx]}
                          loading="lazy"
                          className="map-frame"
                        ></iframe>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

      </footer>
    </>
  );
}
