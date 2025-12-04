import "./Footer.css";
import { Link } from "react-router-dom";
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

  // Auto Slide States
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = () => {
    document.querySelector(".footer-dropdown").classList.toggle("show");
  };

  return (
    <>
      {/* FLOATING ICONS */}
      <div className="floating-icons">
        <a href="tel:+918592921212" className="call-icon">
          <FaPhoneAlt />
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=918592921212"
          className="whatsapp-icon"
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
            <a
              href="https://youtube.com/@vindia_infrasec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a href="#"><FaInstagram /></a>
            <a
              href="https://www.linkedin.com/company/vindia-infrasec/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="footer-brand">
            <h2 className="footer-logo">VIndia Infrasec</h2>
            <p className="footer-desc">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
              Delivering excellence in Construction, Interior Design & Structural Engineering
              across South India.
=======
              Delivering excellence in Construction, Interior Design &
              Structural Engineering across South India.
>>>>>>> Stashed changes
=======
              Delivering excellence in Construction, Interior Design &
              Structural Engineering across South India.
>>>>>>> Stashed changes
=======
              Delivering excellence in Construction, Interior Design &
              Structural Engineering across South India.
>>>>>>> Stashed changes
=======
              Delivering excellence in Construction, Interior Design &
              Structural Engineering across South India.
>>>>>>> Stashed changes
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="col">
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About Us</a></li>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
            {/* CAREER DROPDOWN */}
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
            <li className="footer-dropdown">
              <button className="footer-dropbtn" onClick={toggleDropdown}>
                Career ▾
              </button>

              <ul className="footer-submenu">
                <li><a href="/careers/we-work.html">We Work</a></li>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                {/* <li><a href="/careers/openings.html">Open Positions</a></li>
                <li><a href="/careers/submit-cv.html">Submit Your CV</a></li> */}
=======
                <li><a href="/careers/openings.html">Open Positions</a></li>
                <li><a href="/careers/submit-cv.html">Submit Your CV</a></li>
>>>>>>> Stashed changes
=======
                <li><a href="/careers/openings.html">Open Positions</a></li>
                <li><a href="/careers/submit-cv.html">Submit Your CV</a></li>
>>>>>>> Stashed changes
=======
                <li><a href="/careers/openings.html">Open Positions</a></li>
                <li><a href="/careers/submit-cv.html">Submit Your CV</a></li>
>>>>>>> Stashed changes
=======
                <li><a href="/careers/openings.html">Open Positions</a></li>
                <li><a href="/careers/submit-cv.html">Submit Your CV</a></li>
>>>>>>> Stashed changes
              </ul>
            </li>

            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT */}
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

                {/* ONLY SHOW “LOCATION” */}
                <a
                  className="district-location"
                  href={states[index].maps[i].replace("&output=embed", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Location
                </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
