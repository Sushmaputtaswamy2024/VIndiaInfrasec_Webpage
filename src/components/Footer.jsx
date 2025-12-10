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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mobile Dropdown Toggle
  const toggleFM = (i) => {
    const section = document.querySelector(`.fm${i}`);
    section.classList.toggle("open");
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

      {/* DESKTOP FOOTER */}
      <footer className="footer">

        {/* SOCIAL + BRAND */}
        <div className="social-col">
          <div className="footer-social-left">
            <a href="#"><FaGoogle /></a>
            <a href="https://youtube.com/@vindia_infrasec" target="_blank"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/vindia-infrasec/" target="_blank"><FaLinkedin /></a>
          </div>

          <div className="footer-brand">
            <h2 className="footer-logo">VIndia Infrasec</h2>
            <p className="footer-desc">
              Delivering excellence in Construction, Interior Design & Structural Engineering
              across South India.
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="col">
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About Us</a></li>
            <li><a href="/services.html">Services</a></li>
            <li><a href="/projects.html">Projects</a></li>
            <li><a href="/blog/blog.html">Blog</a></li>
            <li><a href="/careers/we-work.html">Careers</a></li>
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

        {/* MAPS SECTION */}
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
                    className="map-frame"
                  ></iframe>
                </div>

                <a
                  className="district-location"
                  href={states[index].maps[i].replace("&output=embed", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                >Location</a>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* MOBILE FOOTER */}
      <div className="footer-mobile">
        <div className="fm-brand">
          <h2>VIndia Infrasec</h2>
          <p>Delivering excellence in Construction & Interior Engineering.</p>
          <a href="/about.html">Know More →</a>
        </div>

        {/* QUICK LINKS */}
        <div className="fm-section" onClick={() => toggleFM(1)}>
          <div className="fm-header">Quick Links <i className="fas fa-chevron-down"></i></div>
          <div className="fm-content fm1">
            <a href="/">Home</a>
            <a href="/services.html">Services</a>
            <a href="/projects.html">Projects</a>
            <a href="/blog/blog.html">Blog</a>
            <a href="/contact.html">Contact</a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="fm-section" onClick={() => toggleFM(2)}>
          <div className="fm-header">Contact <i className="fas fa-chevron-down"></i></div>
          <div className="fm-content fm2">
            <p>+91 85929 61212</p>
            <p>+91 85929 21212</p>
            <p>info@vindiainfrasec.com</p>
          </div>
        </div>

        {/* LOCATIONS (Full clickable maps) */}
        <div className="fm-section" onClick={() => toggleFM(3)}>
          <div className="fm-header">Locations <i className="fas fa-chevron-down"></i></div>
          <div className="fm-content fm3">

            <a href="https://www.google.com/maps/search/?api=1&query=VIndia+Infrasec,+No:03,+First+Floor,+Gokulam+Main+Road,+Jayalakshmipuram,+Mysuru+City+-+570012,+Karnataka" target="_blank">Mysuru </a>

            <a href="https://www.google.com/maps/search/?api=1&query=VIndia+Infrasec,+Brigade+Arcade,+E104,+Brigade+Metropolis,+Mahadevapura,+Bengaluru,+Karnataka+560048" target="_blank">Bengaluru</a>

            <a href="https://www.google.com/maps/search/?api=1&query=VIndia+Infrasec,+VIndia+Arcade,+CP+XI+433+B,+P+O+Alavil,+Kannur,+Kerala+670008" target="_blank">Kannur</a>

            <a href="https://www.google.com/maps/search/?api=1&query=VIndia+Infrasec,+Near+SURYA+PLYWOODS+%26+DOORS,+SREE+KAMATCHI+AMMAN+KOIL+STREET,+ANNASALAI,+Pondicherry,+Puducherry+605001" target="_blank">Pondicherry</a>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="fm-social">
          <a href="#"><FaGoogle /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="https://youtube.com/@vindia_infrasec"><FaYoutube /></a>
        </div>
      </div>
    </>
  );
}
