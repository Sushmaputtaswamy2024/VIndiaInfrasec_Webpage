import "./CallToAction.css";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

export default function CallToAction() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  const scriptURL = "https://script.google.com/macros/s/AKfycbzdujBYV0nsdcvMsD2iiFVnP4Tax7pMgAv7xzhL1eXjf3UABypAH2tZZl4pxbNCZHlT/exec"

  // Validate Indian phone numbers
  const isValidPhone = (num) => {
    const pattern = /^[6-9]\d{9}$/;
    return pattern.test(num);
  };

  const handleSubmit = async () => {
    if (!isValidPhone(phone)) return;

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ phone }),
      });

      setShowToast(true);
      setPhone("");

      setTimeout(() => setShowToast(false), 2500);
    } catch (error) {
      setStatus("Error submitting number.");
    }
  };

  return (
    <section className="cta">
      <h2>
        Got an Interesting Project?<br />
        <span>Let’s Connect.</span>
      </h2>

      <div className="cta-input-wrapper">
        <FaPhoneAlt className="cta-icon" />

        <input
          className={`cta-input ${phone && (isValidPhone(phone) ? "valid" : "invalid")}`}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your number is the first brick of your project."
        />
      </div>

      <button
        className="cta-btn"
        disabled={!isValidPhone(phone)}
        onClick={handleSubmit}
      >
        Submit
      </button>

      {/* SUCCESS TOAST */}
      {showToast && (
        <div className="toast">
          Number Submitted Successfully! 🎉
        </div>
      )}
    </section>
  );
}
