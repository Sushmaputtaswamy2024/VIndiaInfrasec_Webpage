import "./Footer.css";
import {
  FaGoogle,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [index, setIndex] = useState(0);

  const states = [
    {
      title: "Kerala",
      districts: ["Kochi", "Trivandrum", "Kannur"],
      maps: [
        "https://www.google.com/maps?q=Kochi,Kerala&output=embed",
        "https://www.google.com/maps?q=Trivandrum,Kerala&output=embed",
        "https://www.google.com/maps?q=VIndia+Arcade,+CP+XI+433+B,+P+O+Alavil,+Kannur,+Kerala+670008&output=embed",
      ],
    },
    {
      title: "Karnataka",
      districts: ["Mysuru", "Bengaluru"],
      maps: [
        "https://www.google.com/maps?q=No:03,+First+Floor,+Gokulam+Main+Road,+Jayalakshmipuram,+Mysuru+City+-+570+012,+Mysore,+Karnataka+570012&output=embed",
        "https://www.google.com/maps?q=Brigade+Arcade,+E104,+Brigade+Metropolis,+Mahadevapura,+Bengaluru,+Karnataka+560048&output=embed",
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
    {
      title: "Puducherry",
      districts: ["Pondicherry"],
      maps: [
        "https://www.google.com/maps?q=VIndia+Infrasec,+Near+SURYA+PLYWOODS+%26+DOORS,+SREE+KAMATCHI+AMMAN+KOIL+STREET,+ANNASALAI,+Pondicherry,+Puducherry+605001&output=embed",
      ],
    },
  ];

  // Rotate maps every 3 sec
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Mobile accordion
  const toggleFM = (i) => {
    const el = document.querySelector(`.fm${i}`);
    if (el) el.classList.toggle("open");
  };

  return (
    <>
      {/* Floating Icons */}
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

      {/* DESKTOP FOOTER – EXACT COPY OF projects.html */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-row">

            {/* LEFT — Social + Brand (28%) */}
            <div className="footer-left-one">
              <div className="footer-social-vertical">
                <a href="#"><FaGoogle /></a>
                <a href="https://youtube.com/@vindia_infrasec" target="_blank"><FaYoutube /></a>
                <a href="#"><FaInstagram /></a>
                <a
                  href="https://www.linkedin.com/company/vindia-infrasec/posts/?feedView=all"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>

              <div className="footer-brand">
                <h2 className="footer-logo">VIndia Infrasec</h2>
                <p className="footer-desc">
                  Delivering excellence in Construction, Interior Design & Structural Engineering
                  across South India.
                </p>
              </div>
            </div>

            {/* CENTER — Quick Links (18%) */}
            <div className="footer-center-one">
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about.html">About Us</a></li>
                <li><a href="/careers/we-work.html">Careers</a></li>
                <li><a href="/services.html">Services</a></li>
                <li><a href="/projects.html">Projects</a></li>
                {/* <li><a href="/blog/blog.html">Blog</a></li> */}
                <li><a href="/contact.html">Contact</a></li>
              </ul>
            </div>

            {/* RIGHT — Call Numbers (16%) */}
            <div className="footer-right-call">
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

            {/* RIGHT — Rotating Maps (33%) */}
            <div className="footer-right-maps">
              <h3 className="state-title">{states[index].title}</h3>

              <div className="district-row">
                {states[index].districts.map((district, i) => {
                  const src = states[index].maps[i] || states[index].maps[0];
                  const link = src.replace("&output=embed", "");

                  return (
                    <div className="district-card" key={district}>
                      <h4 className="district-name">{district}</h4>
                      <iframe
                        src={src}
                        className="map-frame"
                        loading="lazy"
                        title={district}
                      />
                      <a
                        className="district-location"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Location
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* MOBILE FOOTER — EXACT COPY OF projects.html */}
      <div className="footer-mobile">
        <div className="fm-brand">
          <h2>VIndia Infrasec</h2>
          <p>Delivering excellence in Construction, Interior Design & Structural Engineering across South India.</p>
          <a href="/about.html">Know More →</a>
        </div>

        <div className="fm-section" onClick={() => toggleFM(1)}>
          <div className="fm-header">
            Quick Links <i className="fas fa-chevron-down"></i>
          </div>
          <div className="fm-content fm1">
            <a href="/">Home</a>
            <a href="/services.html">Services</a>
            <a href="/projects.html">Projects</a>
            {/* <a href="/blog/blog.html">Blog</a> */}
            <a href="/contact.html">Contact</a>
          </div>
        </div>

        <div className="fm-section" onClick={() => toggleFM(2)}>
          <div className="fm-header">
            Contact <i className="fas fa-chevron-down"></i>
          </div>
          <div className="fm-content fm2">
            <p><a href="tel:+918592961212">+91 85929 61212</a></p>
            <p><a href="tel:+918592921212">+91 85929 21212</a></p>
            <p><a href="mailto:info@vindiainfrasec.com">info@vindiainfrasec.com</a></p>
          </div>
        </div>

        <div className="fm-section" onClick={() => toggleFM(3)}>
          <div className="fm-header">
            Locations <i className="fas fa-chevron-down"></i>
          </div>
          <div className="fm-content fm3">
            <a href="https://www.google.com/maps?q=Mysuru" target="_blank">Mysuru</a>
            <a href="https://www.google.com/maps?q=Bengaluru" target="_blank">Bengaluru</a>
            <a href="https://www.google.com/maps?q=Kannur" target="_blank">Kannur</a>
            <a href="https://www.google.com/maps?q=Pondicherry" target="_blank">Pondicherry</a>
          </div>
        </div>

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
