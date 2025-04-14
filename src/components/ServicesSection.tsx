import { useState } from "react";
import { Service } from "@/types/types";
import { Button } from "@/components/ui/button";
import { Lightbulb, Layers, Scissors, Sun, Home, Cog, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const services: Service[] = [
  {
    id: "2d-led",
    title: "2D LED Sign Boards",
    description: "Eye-catching 2D LED signage with bright illumination for maximum visibility day and night.",
    icon: "Lightbulb",
    images: [
      "/lovable-uploads/da65d93f-28f5-4682-b655-b91ddb2f5061.png",
      "/lovable-uploads/0f91a9b1-dc75-432f-83f7-2a5224f5fbd2.png",
      "/lovable-uploads/cdfdc032-4a79-4fec-bd0b-58704916b985.png",
      "/lovable-uploads/b5dcb4a9-f178-4e5c-b7c1-a4c3fa36f24f.png"
    ]
  },
  {
    id: "3d-led",
    title: "3D LED Sign Boards",
    description: "Premium three-dimensional signage with LED lighting for a stunning visual effect.",
    icon: "Layers",
    images: [
      "/lovable-uploads/670dd18e-8c0b-45f2-99f5-bc73f28b2cad.png",
      "/lovable-uploads/b063bc5b-080c-4300-838e-8fe28ad235fd.png",
      "/lovable-uploads/e5efc5f0-9332-482a-84d2-c082c0018a28.png",
      "/lovable-uploads/1e58b324-8a95-46d4-9659-791790d1cdb8.png",
      "/lovable-uploads/2fb663b9-fd62-4402-91e6-6d00cef1119f.png"
    ]
  },
  {
    id: "intercutting",
    title: "Intercutting LED Boards",
    description: "Precision-cut LED designs that create depth and dimension for your brand.",
    icon: "Scissors",
    images: [
      "/lovable-uploads/670dd18e-8c0b-45f2-99f5-bc73f28b2cad.png",
      "/lovable-uploads/0f91a9b1-dc75-432f-83f7-2a5224f5fbd2.png",
      "/lovable-uploads/5d0cd306-b84e-4e3d-a461-6803ecf8ce5f.png"
    ]
  },
  {
    id: "sun-boards",
    title: "Sun Boards",
    description: "Durable, weather-resistant sign boards perfect for outdoor advertising.",
    icon: "Sun",
    images: [
      "/lovable-uploads/b063bc5b-080c-4300-838e-8fe28ad235fd.png",
      "/lovable-uploads/cdfdc032-4a79-4fec-bd0b-58704916b985.png"
    ]
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description: "Custom interior signage solutions to enhance your business space.",
    icon: "Home",
    images: [
      "/lovable-uploads/0f91a9b1-dc75-432f-83f7-2a5224f5fbd2.png"
    ]
  },
  {
    id: "cnc-router",
    title: "CNC Router Cutting",
    description: "Precision CNC router cutting for intricate designs and patterns.",
    icon: "Cog",
    images: [
      "/lovable-uploads/b063bc5b-080c-4300-838e-8fe28ad235fd.png"
    ]
  },
  {
    id: "laser-cutting",
    title: "Laser Cutting",
    description: "High-precision laser cutting for detailed and fine signage work.",
    icon: "Zap",
    images: [
      "/lovable-uploads/670dd18e-8c0b-45f2-99f5-bc73f28b2cad.png"
    ]
  }
];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "Lightbulb": return <Lightbulb className="h-10 w-10" />;
    case "Layers": return <Layers className="h-10 w-10" />;
    case "Scissors": return <Scissors className="h-10 w-10" />;
    case "Sun": return <Sun className="h-10 w-10" />;
    case "Home": return <Home className="h-10 w-10" />;
    case "Cog": return <Cog className="h-10 w-10" />;
    case "Zap": return <Zap className="h-10 w-10" />;
    default: return <Lightbulb className="h-10 w-10" />;
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
            View Gallery
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-royal-gray/90 backdrop-blur-xl border-royal-cyan">
        <div className="p-2">
          <h2 className="text-2xl font-bold mb-6 text-royal-cyan">{service.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.images.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-video">
                <img 
                  src={img}
                  alt={`${service.title} example ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-royal-white/90">{service.description}</p>
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
    <section id="services" className="section-padding bg-gradient-to-b from-royal-black to-royal-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-royal-cyan">Services</span></h2>
          <p className="text-royal-white/70 max-w-2xl mx-auto">
            We offer a wide range of signage solutions to help your business stand out.
            From LED sign boards to precision cutting, we've got you covered.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
