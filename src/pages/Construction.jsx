import { useState, useEffect } from "react";
import "./construction.css";

export default function Construction() {
  const [menu, setMenu] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    function reveal() {
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    }
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const validPhone = (p) => {
    const digits = p.replace(/\D/g, "");
    return digits.length >= 7;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Name is required.");
      return;
    }

    if (!phone.trim() || !validPhone(phone)) {
      alert("A valid contact number is required.");
      return;
    }

    const number = "918592921212";

    const parts = [];
    parts.push("Hello, I'm interested in Construction services.");
    parts.push(`Name: ${name}`);
    parts.push(`Contact: ${phone}`);
    if (email) parts.push(`Email: ${email}`);
    if (message) parts.push(`Message: ${message}`);
    parts.push("Please contact me to schedule a meeting.");

    const text = encodeURIComponent(parts.join(" | "));
    const url = `https://wa.me/${number}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="construction-page">

      <div className="hamburger" onClick={() => setMenu(!menu)}>☰</div>

      <aside className={`side-menu ${menu ? "open" : ""}`}>
        <p>Construction</p>
        <p>Interior Design</p>
        <p>Structural Design</p>
        <p>Blog</p>
      </aside>

      <div className="content-wrapper">

        <h1 className="main-title fade-in">Construction</h1>

        <div className="video-section fade-in video-fade">
          <video autoPlay muted playsInline loop>
            <source src="/construction/construction.mp4" type="video/mp4" />
          </video>
        </div>

        <h2 className="section-header fade-in">How to Get Started</h2>

        <div className="steps-container">
          {[
            { img: "1.webp", t: "Schedule a Meeting", p: "Meet our experts to discuss your project." },
            { img: "2.webp", t: "Study it Carefully", p: "We analyze your needs and prepare accurate plans." },
            { img: "3.webp", t: "Begin Design", p: "We create concepts, drawings, and space planning." },
            { img: "4.webp", t: "Pre-Construction", p: "Approvals, budgeting, and materials planning." },
            { img: "5.webp", t: "Construction", p: "Execution, supervision, and quality assurance." },
            { img: "6.webp", t: "Handover", p: "Final finishing and smooth project delivery." }
          ].map((s, i) => (
            <div key={i} className={`step-row fade-in ${i % 2 ? "reverse" : ""}`}>
              <img src={`/construction/${s.img}`} className="step-img" alt={s.t} />
              <div className="step-text">
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="form-box fade-in" onSubmit={handleSubmit}>
          <h2>Book a Meeting</h2>

          <input
            type="text"
            placeholder="Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Contact Number *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
          />

          <button type="submit">Contact Construction Team</button>
        </form>

        <footer className="footer">Vindia Infrasec</footer>

      </div>
    </div>
  );
}
