import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ScrollVideo from "./components/ScrollVideo";
import About from "./components/About";
import OverlappingCards from "./components/Service/OverlappingCards";
import ProjectGallery from "./components/ProjectGallery";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

import Construction from "./pages/Construction";
import Interior from "./pages/Interior";
import Architectural from "./pages/Architectural";
import projectImages from "./utils/projectImages";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <ScrollVideo />
              <About />
              <OverlappingCards />
              <ProjectGallery images={projectImages} />
              <Testimonials />
              <CallToAction />
            </>
          }
        />

        <Route path="/construction" element={<Construction />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/architecture" element={<Architectural />} />
      </Routes>

      {/* ✅ GLOBAL FOOTER */}
      <Footer />
    </>
  );
}

export default App;
