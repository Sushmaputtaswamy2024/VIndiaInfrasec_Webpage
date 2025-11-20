import ProjectGallery from "./components/ProjectGallery";
import OverlappingCards from "./components/Service/OverlappingCards";
import Home from "./components/Home";
import ScrollVideo from "./components/ScrollVideo";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

// Shuffle images
function shuffleImages(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Import images from Gallery folder
const imageModules = import.meta.glob(
  "./components/Gallery/*.{jpg,png,jpeg,webp}",
  { eager: true }
);

// Extract URLs
let images = Object.values(imageModules).map(
  (img) => img.default || img
);

// Shuffle
images = shuffleImages(images);

console.log("Loaded Images:", images);

function App() {
  return (
    <>
      <Home />
      <ScrollVideo />
      <OverlappingCards />

      <ProjectGallery images={images} />

      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
