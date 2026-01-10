import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";
import ScrollVideo from "./components/ScrollVideo";
import About from "./components/About";
import OverlappingCards from "./components/Service/OverlappingCards";
import ProjectGallery from "./components/ProjectGallery";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import Construction from "./pages/Construction";
import Interior from "./pages/Interior";
import Architectural from "./pages/Architectural";

import projectImages from "./utils/projectImages";

function App() {
  return (
    <>
      {/* 🔝 ALWAYS START PAGE FROM TOP */}
      <ScrollToTop />

      <Routes>
        {/* 🏠 HOME PAGE */}
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
              <Footer />
            </>
          }
        />

        {/*  OTHER PAGES */}
        <Route path="/construction" element={<Construction />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/architecture" element={<Architectural />} />

        {/* 🔐 FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
