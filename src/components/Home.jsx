import Hero from "./Hero";
import LogoHeader from "./LogoHeader";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);

  return (
    <>
      <section ref={heroRef}>
        <Hero />
      </section>

      <LogoHeader triggerRef={heroRef} />
    </>
  );
}
