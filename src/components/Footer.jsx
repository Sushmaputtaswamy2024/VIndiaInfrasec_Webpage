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

  // ================================
  // LOCATION DATA (SEO IMPROVED)
  // ================================
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

  // Auto-switching state carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/8592921212"
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        {/* COLUMN 1 — BRAND + SOCIAL */}
        <div className="col">
          <h2 className="footer-logo">VIndia Infrasec</h2>

          <p className="footer-desc">
            Delivering excellence in Construction, Interior Design & Structural
            Engineering across South India.
          </p>

          {/* Social Icons */}
          <nav className="footer-social" aria-label="Social Media Links">
            <a href="#" title="Google Business"><FaGoogle /></a>
            <a href="#" title="YouTube"><FaYoutube /></a>
            <a href="#" title="Instagram"><FaInstagram /></a>
            <a href="#" title="LinkedIn"><FaLinkedin /></a>
          </nav>
        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <nav className="col" aria-label="Footer Navigation">
          <ul className="footer-links">
            <li><a href="/" title="Home">Home</a></li>
            <li><a href="/about" title="About Us">About Us</a></li>
            <li><a href="/services" title="Services">Services</a></li>
            <li><a href="/projects" title="Projects">Projects</a></li>
            <li><a href="/careers" title="Careers">Careers</a></li>
            <li><a href="/contact" title="Contact">Contact</a></li>
          </ul>
        </nav>

        {/* COLUMN 3 — ANIMATED MAP CAROUSEL */}
        <div className="col footer-right">
          <div className="map-glass">
            {states.map((state, i) => (
              <div
                key={i}
                className={`state-box ${index === i ? "active" : ""}`}
                aria-hidden={index !== i}
              >
                <h3 className="state-title">{state.title}</h3>

                <div className="district-container">
                  {state.districts.map((district, idx) => (
                    <div className="district-card" key={idx}>
                      <h4 className="district-name">{district}</h4>

                      {/* Lazy loaded ONLY for active state */}
                      {index === i && (
                        <iframe
                          src={state.maps[idx]}
                          loading="lazy"
                          title={`${district} map`}
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

      {/* GOOGLE LOCAL BUSINESS SCHEMA */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "VIndia Infrasec",
          image: "https://your-website.com/logo.png",
          url: "https://your-website.com",
          telephone: "+918592921212",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
          sameAs: [
            "https://www.instagram.com/",
            "https://www.linkedin.com/",
            "https://www.youtube.com/",
          ],
        })}
      </script>
    </>
  );
}
