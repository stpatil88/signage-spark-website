
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const galleryImages = [
  {
    src: "/lovable-uploads/b063bc5b-080c-4300-838e-8fe28ad235fd.png",
    alt: "Bhishma Developers sign board",
    category: "3D LED"
  },
  {
    src: "/lovable-uploads/da65d93f-28f5-4682-b655-b91ddb2f5061.png",
    alt: "Hotel Hira Palace sign board - night view",
    category: "2D LED"
  },
  {
    src: "/lovable-uploads/0f91a9b1-dc75-432f-83f7-2a5224f5fbd2.png",
    alt: "Hotel Hira Palace sign board - day view",
    category: "2D LED"
  },
  {
    src: "/lovable-uploads/670dd18e-8c0b-45f2-99f5-bc73f28b2cad.png",
    alt: "Deepak Medical sign board",
    category: "3D LED"
  },
  {
    src: "/lovable-uploads/c0f87594-4788-4c47-b01a-dc19e1608275.png",
    alt: "Royal Signage logo",
    category: "Branding"
  },
];

const GallerySection = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "2D LED", "3D LED", "Branding"];
  
  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="section-padding bg-royal-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-royal-cyan">Gallery</span></h2>
          <p className="text-royal-white/70 max-w-2xl mx-auto">
            Explore our portfolio of custom signage solutions we've created for businesses across Kolhapur.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === category 
                    ? "bg-royal-cyan text-royal-black"
                    : "bg-royal-gray/20 text-royal-white hover:bg-royal-gray/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="overflow-hidden rounded-lg cursor-pointer group hover-scale">
                  <div className="relative aspect-square">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <span className="text-royal-cyan text-sm font-semibold">{image.category}</span>
                        <p className="text-royal-white text-lg">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] bg-royal-gray/90 backdrop-blur-xl border-royal-cyan p-2">
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-royal-black/70 backdrop-blur-sm p-4 rounded-b-lg">
                    <p className="text-royal-white text-lg">{image.alt}</p>
                    <span className="text-royal-cyan text-sm">{image.category}</span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
