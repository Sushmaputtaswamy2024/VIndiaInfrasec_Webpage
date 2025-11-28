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

<<<<<<< Updated upstream
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % states.length),
      4500
    );
=======
  // Auto-change every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, 3000);
>>>>>>> Stashed changes
    return () => clearInterval(interval);
  }, []);

  return (
    <>
<<<<<<< Updated upstream
      {/* WhatsApp Button */}
      <a href="https://wa.me/8592921212" className="whatsapp-float">
=======
      {/* WhatsApp Floating */}
      <a
        href="https://api.whatsapp.com/send/?phone=918592921212"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
>>>>>>> Stashed changes
        <FaWhatsapp />
      </a>

      <footer className="footer">
<<<<<<< Updated upstream

        {/* SOCIAL ICONS + BRAND TEXT SIDE-BY-SIDE */}
        <div className="col social-col">

          {/* Vertical Social Icons */}
          <nav className="footer-social-left">
=======
        {/* LEFT COLUMN */}
        <div className="col">
          <h2 className="footer-logo">VIndia Infrasec</h2>
          <p className="footer-desc">
            Delivering excellence in Construction, Interior Design & Structural
            Engineering across South India.
          </p>

          <div className="footer-social">
>>>>>>> Stashed changes
            <a href="#"><FaGoogle /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
<<<<<<< Updated upstream
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
=======
          </div>
        </div>

        {/* MIDDLE COLUMN */}
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
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

=======
        {/* RIGHT — MAPS SIDE-BY-SIDE */}
        <div className="col col-maps">
          <h3 className="state-title">{states[index].title}</h3>

          <div className="district-row">
            {states[index].districts.map((district, i) => (
              <div className="district-card" key={i}>
                <h4 className="district-name">{district}</h4>

                <iframe
                  src={states[index].maps[i]}
                  loading="lazy"
                  title={`${district} map`}
                  className="map-frame"
                ></iframe>
>>>>>>> Stashed changes
              </div>
            ))}
          </div>
        </div>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
      </footer>
    </>
  );
}
