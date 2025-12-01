import { useEffect } from "react";
import { setSEO } from "./utils/seo";

import ProjectGallery from "./components/ProjectGallery";
import OverlappingCards from "./components/Service/OverlappingCards";
import Home from "./components/Home";
import ScrollVideo from "./components/ScrollVideo";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

// =============================
//  Shuffle images
// =============================
function shuffleImages(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// =============================
//  Import images + ALT TEXT
// =============================
const imageModules = import.meta.glob(
  "./components/Gallery/*.{jpg,png,jpeg,webp}",
  { eager: true }
);

let images = Object.values(imageModules).map((img, index) => ({
  src: img.default || img,
  alt: `Project gallery image ${index + 1} – VIndia Infrasec`,
}));

images = shuffleImages(images);

function App() {
  // =============================
  //  Page-Level SEO
  // =============================
  useEffect(() => {
    setSEO({
      title: "VIndia Infrasec Pvt Ltd | Construction, Interiors & structural Solutions",
      description:
        "VIndia Infrasec delivers high-quality construction, interior design and advanced structural solutions across South India.",
      keywords:
        "construction company, interior design, building contractors, Kerala builders, Karnataka construction, Tamil Nadu interiors",
      image: "/thumbnail.jpg",
      url: "https://your-domain.com",
    });
  }, []);

  return (
    <>
      {/* =============================
          SITE HEADER
      ============================== */}
      <header role="banner">
        <Home />
      </header>

      {/* =============================
          MAIN CONTENT
      ============================== */}
      <main role="main">
        <section aria-labelledby="intro-video">
          <h2 id="intro-video" className="visually-hidden">
          </h2>
          <ScrollVideo />
        </section>

        <section aria-labelledby="services-heading">
          <h2 id="services-heading" className="visually-hidden">
          </h2>
          <OverlappingCards />
        </section>

        <section aria-labelledby="project-gallery-heading">
          <h2 id="project-gallery-heading" className="visually-hidden">
          </h2>
          <ProjectGallery images={images} />
        </section>

        <section aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="visually-hidden">
          </h2>
          <Testimonials />
        </section>

        <section aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="visually-hidden">
          </h2>
          <CallToAction />
        </section>
      </main>

      {/* =============================
          SITE FOOTER
      ============================== */}
      <footer role="contentinfo">
        <Footer />
      </footer>
    </>
  );
}

export default App;