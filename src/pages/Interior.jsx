import "./interior.css";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Interior() {
  return (
    <div className="interior-page">
      {/* ================= SIDEBAR ================= */}
      <Sidebar />

      {/* ================= PAGE HEADING ================= */}
      <section className="page-heading">
        <h1>Interior</h1>
      </section>

      {/* ================= SLIDER ================= */}
      <section className="interior-slider">
        <div className="slider-track">
          <img src="/interior/slide1.webp" alt="" />
          <img src="/interior/slide2.webp" alt="" />
          <img src="/interior/slide3.webp" alt="" />
          <img src="/interior/slide1.webp" alt="" />
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
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

      {/* ================= TEXT ================= */}
      <section className="text-block">
        <p>
          Interior design involves creating functional, aesthetically pleasing indoor spaces,
          considering color, lighting, materials and furniture layout.
        </p>
        <p>We design spaces that reflect your lifestyle, not just your budget.</p>
      </section>

      {/* ================= SINGLE LINE ================= */}
      <p className="single-line">
        Living spaces & much more to transform your home!
      </p>

      {/* ================= VIDEO ================= */}
      <section className="video-section">
        <video src="/interior/interior.mp4" autoPlay muted loop playsInline />
      </section>

      {/* ================= JOURNEY ================= */}
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

      {/* ================= START PROJECT ================= */}
      <section className="start-project">
        <h2>Start a Project</h2>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Book a Meeting</button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
