import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Workflow from "./components/Workflow";

function App() {
  return (
    <>
      <Navbar />
      <div className='px-6 mx-auto max-w-7xl'>
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App;
