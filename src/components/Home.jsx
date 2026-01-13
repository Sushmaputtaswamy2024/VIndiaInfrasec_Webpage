import Hero from "./Hero";
import LogoHeader from "./LogoHeader";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const heroRef = useRef(null);

  // ✅ iOS Safari fix: ensure ref is ready before LogoHeader
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="home-section"
      aria-label="VIndia Infrasec hero section"
      role="banner"
      style={{
        minHeight: "100svh",          // ✅ iOS viewport fix
        WebkitOverflowScrolling: "touch",
      }}
    >
      {/* HERO SECTION */}
      <Hero />

      {/* Render LogoHeader ONLY after mount (Safari-safe) */}
      {mounted && <LogoHeader triggerRef={heroRef} />}
    </section>
  );
}
