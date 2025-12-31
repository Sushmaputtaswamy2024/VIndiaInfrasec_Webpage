import {
  FaGoogle,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
  FaChevronDown,
  FaFacebookF,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [index, setIndex] = useState(0);
  const [openSections, setOpenSections] = useState({});

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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const toggleFM = (i) => {
    setOpenSections((prev) => ({
      ...prev,
      [i]: !prev[i],
    }));
  };

  const googleLink =
    "https://www.google.com/search?q=vindia+infrasec&oq=vindia+infrasec&sourceid=chrome&ie=UTF-8";

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

      {/* DESKTOP FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-row">

            <div className="footer-left-one">
              <div className="footer-social-vertical">
                <a href={googleLink} target="_blank" rel="noopener noreferrer">
                  <FaGoogle />
                </a>

                <a
                  href="https://youtube.com/@vindia_infrasec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>

                <a
                  href="https://www.instagram.com/vindia_infrasec?igsh=MTRwejBkOGd6cmhmMQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>

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
                  Delivering excellence in Construction, Interior Design &
                  Structural Engineering across South India.
                </p>
              </div>
            </div>

            <div className="footer-center-one">
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about.html">About Us</a></li>
                <li><a href="/careers/we-work.html">Careers</a></li>
                <li><a href="/services.html">Services</a></li>
                <li><a href="/projects.html">Projects</a></li>
                <li><a href="/contact.html">Contact</a></li>
              </ul>
            </div>

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

      {/* MOBILE FOOTER */}
      <div className="footer-mobile">
        <div className="fm-brand">
          <h2>VIndia Infrasec</h2>
          <p>
            Delivering excellence in Construction, Interior Design &
            Structural Engineering across South India.
          </p>
          <a href="/about.html">Know More →</a>
        </div>

        <div
          className={`fm-section ${openSections[1] ? "active" : ""}`}
          onClick={() => toggleFM(1)}
        >
          <div className="fm-header">
            Quick Links <FaChevronDown />
          </div>
          <div className={`fm-content ${openSections[1] ? "open" : ""}`}>
            <a href="/">Home</a>
            <a href="/services.html">Services</a>
            <a href="/projects.html">Projects</a>
            <a href="/careers/we-work.html">Careers</a>
            <a href="/contact.html">Contact</a>
          </div>
        </div>

        <div className="fm-social">
          <a href={googleLink} target="_blank" rel="noopener noreferrer">
            <FaGoogle />
          </a>
          <a
            href="https://youtube.com/@vindia_infrasec"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/vindia_infrasec?igsh=MTRwejBkOGd6cmhmMQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/vindiainfrasec"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/vindia-infrasec/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}
