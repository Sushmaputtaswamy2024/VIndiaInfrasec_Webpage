import { Routes, Route } from "react-router-dom";

import ProjectGallery from "./components/ProjectGallery";
import OverlappingCards from "./components/Service/OverlappingCards";
import Home from "./components/Home";
import ScrollVideo from "./components/ScrollVideo";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import Construction from "./pages/Construction";
import projectImages from "./utils/projectImages";
import About from "./components/About";

// Shuffle images
function shuffleImages(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Import images
const imageModules = import.meta.glob(
  "./components/Gallery/*.{webp}",
  { eager: true }
);

// Extract URLs
let images = Object.values(imageModules).map(
  (img) => img.default || img
);

// Shuffle
images = shuffleImages(images);

function App() {
  return (
    <>
<<<<<<< Updated upstream
      <Home />
      <ScrollVideo />
      <About/>
      <OverlappingCards />
=======
      <Routes>
>>>>>>> Stashed changes

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <ScrollVideo />
              <OverlappingCards />

              <ProjectGallery images={projectImages} />
              <Testimonials />
              <CallToAction />
              <Footer />
            </>
          }
        />

        {/* CONSTRUCTION PAGE */}
        <Route path="/construction" element={<Construction />} />

      </Routes>
    </>
  );
}

export default App;
