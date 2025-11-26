import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [index, setIndex] = useState(0);

  const states = [
    {
      title: "Kerala",
      locations: [
        { name: "Kochi", link: "https://www.google.com/maps/place/Kochi" },
        { name: "Trivandrum", link: "https://www.google.com/maps/place/Thiruvananthapuram" },
        { name: "Kannur", link: "https://www.google.com/maps/place/Kannur" }
      ]
    },
    {
      title: "Tamil Nadu",
      locations: [
        { name: "Coimbatore", link: "https://www.google.com/maps/place/Coimbatore" },
        { name: "Chennai", link: "https://www.google.com/maps/place/Chennai" },
        { name: "Madurai", link: "https://www.google.com/maps/place/Madurai" }
      ]
    },
    {
      title: "Karnataka",
      locations: [
        { name: "Mysore", link: "https://www.google.com/maps/place/Mysuru" },
        { name: "Bengaluru", link: "https://www.google.com/maps/place/Bengaluru" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % states.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [states.length]);

  return (
    <footer className="footer">
      {states.map((state, i) => (
        <div key={i} className={state-box ${index === i ? "active" : ""}}>
          <h2 className="state-title">{state.title}</h2>

          <div className="locations">
            {state.locations.map((loc, idx) => (
              <a
                key={idx}
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="location-link"
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;