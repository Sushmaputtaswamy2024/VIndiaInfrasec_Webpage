import Hero from "./Hero";
import LogoHeader from "./LogoHeader";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      id="home"
      className="home-section"
      aria-label="VIndia Infrasec hero section"
      role="banner"               /* SEO: identifies the main hero area */
    >
      {/* HERO SECTION — primary H1 should be inside Hero.jsx */}
      <Hero />

      {/* Sticky / Animated Logo Header */}
      <LogoHeader triggerRef={heroRef} />
    </section>
  );
}
