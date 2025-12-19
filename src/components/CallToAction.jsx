import "./CallToAction.css";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

/* ✅ Country-wise phone number rules */
const COUNTRY_RULES = {
  "+91": 10,   // India
  "+1": 10,    // USA / Canada
  "+44": 10,   // UK
  "+61": 9,    // Australia
  "+971": 9,   // UAE
};

export default function CallToAction() {
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzdujBYV0nsdcvMsD2iiFVnP4Tax7pMgAv7xzhL1eXjf3UABypAH2tZZl4pxbNCZHlT/exec";

  /* ✅ Validation based on selected country */
  const isValidPhone = (num, code) => {
    const length = COUNTRY_RULES[code];
    return length
      ? new RegExp(`^[0-9]{${length}}$`).test(num)
      : false;
  };

  const handleSubmit = async () => {
    if (!isValidPhone(phone, countryCode) || loading) return;

    setLoading(true);

    try {
      await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: `${countryCode}${phone}`,
        }),
      });

      setShowToast(true);
      setPhone("");

      setTimeout(() => setShowToast(false), 2500);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const expectedDigits = COUNTRY_RULES[countryCode];

  return (
    <section className="cta">
      <h2>
        Got an Interesting Project?
        <br />
        <span>Let’s Connect.</span>
      </h2>

      <div className="cta-input-wrapper">
        <FaPhoneAlt className="cta-icon" />

        {/* COUNTRY CODE */}
        <select
          className="country-select"
          value={countryCode}
          onChange={(e) => {
            setCountryCode(e.target.value);
            setPhone(""); // reset phone on country change
          }}
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
            phone
              ? isValidPhone(phone, countryCode)
                ? "valid"
                : "invalid"
              : ""
          }`}
          type="tel"
          inputMode="numeric"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value.replace(/\D/g, ""))
          }
          placeholder={`Enter ${expectedDigits}-digit mobile number`}
        />
      </div>

      {/* SUBMIT */}
      <button
        className="cta-btn"
        disabled={!isValidPhone(phone, countryCode) || loading}
        onClick={handleSubmit}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {/* SUCCESS TOAST */}
      {showToast && (
        <div className="toast">Number Submitted Successfully! 🎉</div>
      )}
    </section>
  );
}
