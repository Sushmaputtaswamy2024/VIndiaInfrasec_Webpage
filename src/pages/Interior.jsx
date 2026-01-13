import { useState, useEffect } from "react";
import "./interior.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Interior() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  /* 🔑 iOS SAFARI VIDEO PREP */
  useEffect(() => {
    const video = document.querySelector(".video-section video");
    if (video) {
      video.muted = true;
      video.setAttribute("playsinline", "");
      video.play().catch(() => {});
    }
  }, []);

  // ================= WHATSAPP SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage =
`Hello Interior Design Team,

I am interested in interior design services.

Name: ${name || "Not provided"}
Phone: ${phone || "Not provided"}
Email: ${email || "Not provided"}
Project Details:
${message || "Interested in interior design services"}
`;

    const whatsappURL = `https://wa.me/918592921212?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="interior-page">
      <Sidebar />

      <section className="page-heading">
        <h1>Interior</h1>
      </section>

      <section className="interior-slider">
        <div className="slider-track">
          <img src="/interior/slide1.webp" alt="" />
          <img src="/interior/slide2.webp" alt="" />
          <img src="/interior/slide3.webp" alt="" />
          <img src="/interior/slide1.webp" alt="" />
        </div>
      </section>

      <section className="offer-section">
        <h2>What We Offer</h2>
        <p className="offer-sub">
          We offer a complete spectrum of home interior design solutions tailored to your needs.
        </p>

        <div className="offer-grid">
          <div className="kitchen">
            <img src="/interior/kitchen.webp" alt="Modular Kitchens" />
            <span>Modular Kitchens</span>
          </div>

          <div className="false-ceiling">
            <img src="/interior/false.webp" alt="False Ceilings" />
            <span>False Ceilings</span>
          </div>

          <div className="bathroom">
            <img src="/interior/Bathroom.webp" alt="Bathroom Designs" />
            <span>Bathroom Designs</span>
          </div>

          <div className="storage">
            <img src="/interior/storage.webp" alt="Storage Solutions" />
            <span>Storage Solutions & Wardrobes</span>
          </div>

          <div className="foyer">
            <img src="/interior/foyers.webp" alt="Foyers" />
            <span>Foyers</span>
          </div>

          <div className="pooja">
            <img src="/interior/pooja.webp" alt="Pooja Units" />
            <span>Pooja Units</span>
          </div>

          <div className="outdoor">
            <img src="/interior/balcony.webp" alt="Outdoor / Balcony Spaces" />
            <span>Outdoor / Balcony Spaces</span>
          </div>
        </div>
      </section>

      <section className="text-block">
        <p>
          Interior design involves creating functional, aesthetically pleasing indoor spaces,
          considering color, lighting, materials and furniture layout.
        </p>
        <p>We design spaces that reflect your lifestyle, not just your budget.</p>
      </section>

      <p className="single-line">
        Living spaces & much more to transform your home!
      </p>

      <section className="video-section">
        <video
          src="/interior/interior.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </section>

      <section className="journey-section">
        <h2>Our Home Interior Design Journey</h2>

        <div className="journey-steps">
          <div className="circle">Design Consultation</div>
          <div className="circle">Furniture Selection</div>
          <div className="circle">Project Delivery</div>
          <div className="circle">Creative Execution</div>
          <div className="circle">Handover</div>
        </div>
      </section>

      <section className="start-project">
        <h2>Start a Project</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">Book a Meeting</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
