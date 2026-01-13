import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./Construction.css";

export default function Construction() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 🔁 Scroll animations
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const reveal = () => {
      elements.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight - 120 && r.bottom > 120) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", reveal, { passive: true });
    reveal();

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  // ================= WHATSAPP SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hello Construction Team,

I am interested in construction services.

Name: ${name || "Not provided"}
Phone: ${phone || "Not provided"}
Email: ${email || "Not provided"}
Project Details:
${message || "Interested in construction services"}
`;

    const whatsappURL = `https://wa.me/918592921212?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="construction-page">
      {/* ✅ COMMON SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="content-wrapper">
        <h1 className="main-title fade-in">Construction</h1>

        <div className="video-section fade-in">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={(e) => {
              e.currentTarget.muted = true;
              e.currentTarget.play().catch(() => {});
            }}
          >
            <source
              src="/construction/construction.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <h2 className="section-header fade-in">How to Get Started</h2>

        <div className="steps-container">
          {[
            ["1.webp", "Schedule a Meeting", "Meet our experts to discuss your project."],
            ["2.webp", "Study it Carefully", "We analyze your needs and prepare plans."],
            ["3.webp", "Begin Design", "We create concepts and drawings."],
            ["4.webp", "Pre-Construction", "Approvals and budgeting."],
            ["5.webp", "Construction", "Execution and supervision."],
            ["6.webp", "Handover", "Final delivery and finishing."]
          ].map(([img, title, desc], i) => (
            <div
              key={i}
              className={`step-row fade-in ${i % 2 !== 0 ? "reverse" : ""}`}
            >
              <img
                src={`/construction/${img}`}
                alt={title}
                className="step-img"
                loading="lazy"
              />
              <div className="step-text">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FORM ================= */}
        <form className="form-box fade-in" onSubmit={handleSubmit}>
          <h2>Book a Meeting</h2>

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Contact Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            rows="4"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">
            Contact Construction Team
          </button>
        </form>

        {/* ✅ FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
