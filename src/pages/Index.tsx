
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = "Deepak Financial Services - Your Financial Growth Partner";
    
    // Preload important images for better user experience
    const preloadImages = [
      "/lovable-uploads/c0f87594-4788-4c47-b01a-dc19e1608275.png", // Logo
      "/lovable-uploads/a25f3d13-4397-4151-bab4-6e9b8e32cdfd.png", // Hero image
      "/lovable-uploads/e5efc5f0-9332-482a-84d2-c082c0018a28.png", // Featured image
      "/lovable-uploads/2fb663b9-fd62-4402-91e6-6d00cef1119f.png"  // Featured image
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-royal-black text-royal-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
