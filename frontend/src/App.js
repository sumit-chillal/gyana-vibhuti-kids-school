import "@/App.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AcademicsSection from "@/components/AcademicsSection";
import CampusLife from "@/components/CampusLife";
import FacilitiesSection from "@/components/FacilitiesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

function App() {
  return (
    <LanguageProvider>
      <div className="App" data-testid="app-root">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <AcademicsSection />
        <CampusLife />
        <FacilitiesSection />
        <GallerySection />
        <ContactSection />
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}

export default App;
