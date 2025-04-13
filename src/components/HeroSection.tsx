
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal-black/80 to-royal-black z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/c0f87594-4788-4c47-b01a-dc19e1608275.png")'
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8 animate-float">
            <img 
              src="/lovable-uploads/a25f3d13-4397-4151-bab4-6e9b8e32cdfd.png" 
              alt="Royal Signage Logo" 
              className="w-72 md:w-96"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
            <span className="text-royal-white">royal</span>{" "}
            <span className="glow-text">signage</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light italic text-royal-white/90 mb-8">
            glow your brand here...
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => scrollToSection("services")}
              className="bg-royal-cyan text-royal-black hover:bg-royal-cyan/80 text-lg px-8 py-6"
            >
              View Services
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              className="border-royal-cyan text-royal-cyan hover:bg-royal-cyan/10 text-lg px-8 py-6"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button 
          onClick={() => scrollToSection("services")}
          className="text-royal-white/80 hover:text-royal-cyan transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
