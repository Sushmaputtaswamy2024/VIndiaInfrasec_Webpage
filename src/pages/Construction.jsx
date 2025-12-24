import { useState, useEffect } from "react";
import Footer from "./Footer";
import "./construction.css";

export default function Construction() {
  const [menu, setMenu] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 🔁 Repeat animation on scroll (up & down)
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const reveal = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120 && rect.bottom > 120) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  const validPhone = (p) => p.replace(/\D/g, "").length >= 7;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return alert("Name is required.");
    if (!phone.trim() || !validPhone(phone))
      return alert("Valid contact number required.");

    const number = "918592921212";

    const text = encodeURIComponent(
      [
        "Hello, I'm interested in Construction services.",
        `Name: ${name}`,
        `Contact: ${phone}`,
        email && `Email: ${email}`,
        message && `Message: ${message}`,
        "Please contact me to schedule a meeting.",
      ]
        .filter(Boolean)
        .join(" | ")
    );

    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  return (
    <div className="construction-page">

      {/* ☰ Hamburger */}
      <div className="hamburger" onClick={() => setMenu(!menu)}>☰</div>

      {/* Sidebar */}
      <aside className={`side-menu ${menu ? "open" : ""}`}>
        <p>Construction</p>
        <p>Interior Design</p>
        <p>Structural Design</p>
        <p>Blog</p>
      </aside>

      {/* Main Content */}
      <div className="content-wrapper">

        <h1 className="main-title fade-in">Construction</h1>

        <div className="video-section fade-in">
          <video autoPlay muted loop playsInline>
            <source
              src="/construction/construction.mp4"
              type="video/mp4"
            />
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
              <img
                src={`/construction/${s.img}`}
                className="step-img"
                alt={s.t}
              />
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
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">Contact Construction Team</button>
        </form>

      </div>

      {/* ✅ Reusable Footer */}
      <Footer />

    </div>
  );
}
