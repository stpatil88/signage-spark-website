
import { useState } from "react";
import { Service } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Shield, Car, TrendingUp, Home, Briefcase } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const services: Service[] = [
  {
    id: "lic-advisory",
    title: "LIC Advisory",
    description: "Expert guidance on life insurance policies to protect you and your loved ones.",
    icon: "Shield",
    features: [
      "Term plans, Endowment, Investment plans",
      "Personalized policy matching",
      "Claim settlement assistance",
      "Regular policy record maintenance"
    ]
  },
  {
    id: "vehicle-insurance",
    title: "Vehicle Insurance",
    description: "Comprehensive vehicle insurance solutions for all your automotive needs.",
    icon: "Car",
    features: [
      "Third-party and Comprehensive coverage",
      "Add-ons: Zero Depreciation, Engine Cover, Roadside Assistance",
      "Private and Commercial vehicle insurance",
      "Quick claim processing"
    ]
  },
  {
    id: "mutual-fund",
    title: "Mutual Fund Advisory",
    description: "Strategic investment planning to help you achieve your financial goals.",
    icon: "TrendingUp",
    features: [
      "Risk assessment and portfolio planning",
      "Regular fund performance reviews",
      "Goal-oriented investment strategies",
      "Diversified investment approach"
    ]
  },
  {
    id: "home-loans",
    title: "Home Loans",
    description: "Simplified home loan process to help you own your dream home faster.",
    icon: "Home",
    features: [
      "Eligibility assessment and calculation",
      "Multiple bank tie-ups for better rates",
      "Complete paperwork guidance",
      "Loan disbursement assistance"
    ]
  },
  {
    id: "all-services",
    title: "All Financial Services",
    description: "One-stop solution for all your financial planning and insurance needs.",
    icon: "Briefcase",
    features: [
      "Comprehensive financial planning",
      "Regular portfolio reviews",
      "Tax planning assistance",
      "Retirement planning"
    ]
  }
];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Shield": return <Shield className="h-10 w-10" />;
    case "Car": return <Car className="h-10 w-10" />;
    case "TrendingUp": return <TrendingUp className="h-10 w-10" />;
    case "Home": return <Home className="h-10 w-10" />;
    case "Briefcase": return <Briefcase className="h-10 w-10" />;
    default: return <Briefcase className="h-10 w-10" />;
  }
};

const ServiceCard = ({ service }: { service: Service }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className={`bg-royal-gray/20 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 cursor-pointer h-full
            ${isHovered ? 'shadow-neon-lg transform scale-105' : 'shadow-md'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`rounded-full bg-royal-gray/30 p-3 inline-block mb-4 text-royal-cyan
            transition-all duration-300 ${isHovered ? 'text-royal-cyan-glow' : 'text-royal-cyan'}`}>
            {getIconComponent(service.icon)}
          </div>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-royal-white/70">{service.description}</p>
          <div className="mt-4 inline-block text-royal-cyan font-semibold">
            Learn More
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-royal-gray/90 backdrop-blur-xl border-royal-cyan">
        <div className="p-2">
          <h2 className="text-2xl font-bold mb-4 text-royal-cyan">{service.title}</h2>
          <p className="mb-6 text-royal-white/90">{service.description}</p>
          
          <h3 className="text-lg font-semibold text-royal-white mb-3">Key Features:</h3>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-royal-cyan mr-2">•</span>
                <span className="text-royal-white/80">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 pt-4 border-t border-royal-gray/30">
            <Button 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full bg-royal-cyan text-royal-black hover:bg-royal-cyan/80"
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const ServicesSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-royal-gray/30 to-royal-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-royal-cyan">Services</span></h2>
          <p className="text-royal-white/70 max-w-2xl mx-auto">
            We offer a comprehensive range of financial services to help you achieve your goals 
            and secure your financial future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={scrollToContact}
            className="bg-royal-cyan text-royal-black hover:bg-royal-cyan/80 text-lg px-8 py-6"
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
