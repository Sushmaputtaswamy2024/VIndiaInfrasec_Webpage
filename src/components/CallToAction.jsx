import "./CallToAction.css";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

export default function CallToAction() {
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [showToast, setShowToast] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzdujBYV0nsdcvMsD2iiFVnP4Tax7pMgAv7xzhL1eXjf3UABypAH2tZZl4pxbNCZHlT/exec";

  const isValidPhone = (num) => /^[0-9]{6,14}$/.test(num);

  const handleSubmit = async () => {
    if (!isValidPhone(phone)) return;

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ phone: `${countryCode}${phone}` }),
      });

      setShowToast(true);
      setPhone("");

      setTimeout(() => setShowToast(false), 2500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="cta">
      <h2>
        Got an Interesting Project?
        <br />
        <span>Let’s Connect.</span>
      </h2>

      <div className="cta-input-wrapper">
        <FaPhoneAlt className="cta-icon" />

        {/* COUNTRY SELECTOR */}
        <select
          className="country-select"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+61">+61</option>
          <option value="+971">+971</option>
        </select>

        {/* PHONE INPUT */}
        <input
          className={`cta-input ${
            phone ? (isValidPhone(phone) ? "valid" : "invalid") : ""
          }`}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your number is the first brick of your project."
        />
      </div>

      {/* SUBMIT */}
      <button
        className="cta-btn"
        disabled={!isValidPhone(phone)}
        onClick={handleSubmit}
      >
        Submit
      </button>

      {/* SUCCESS TOAST */}
      {showToast && <div className="toast">Number Submitted Successfully! 🎉</div>}
    </section>
  );
}
