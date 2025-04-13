
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-royal-black border-t border-royal-gray/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              <span className="text-royal-white">royal</span>{" "}
              <span className="text-royal-cyan">signage</span>
            </h2>
            <p className="text-royal-white/70 italic mt-1">glow your brand here...</p>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="#" 
              className="text-royal-white/60 hover:text-royal-cyan transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="#" 
              className="text-royal-white/60 hover:text-royal-cyan transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              className="text-royal-white/60 hover:text-royal-cyan transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="mailto:royaldigital653@gmail.com" 
              className="text-royal-white/60 hover:text-royal-cyan transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:+919172636333" 
              className="text-royal-white/60 hover:text-royal-cyan transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={24} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-royal-white/70">
            <button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-royal-cyan transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-royal-cyan transition-colors duration-300"
            >
              Gallery
            </button>
            <button 
              onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-royal-cyan transition-colors duration-300"
            >
              Testimonials
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-royal-cyan transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          <div className="text-royal-white/50 text-sm">
            <p>© {currentYear} Royal Signage. All rights reserved.</p>
            <p className="mt-1">Muddal Titta, Kolhapur, Maharashtra, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
