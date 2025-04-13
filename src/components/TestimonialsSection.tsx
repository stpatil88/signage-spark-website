
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial } from "@/types/types";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Bhishma Developers",
    service: "3D LED Sign Boards",
    quote: "Royal Signage delivered an exceptional 3D sign that perfectly represents our brand. The quality and attention to detail is outstanding."
  },
  {
    id: "2",
    name: "Hotel Hira Palace",
    service: "2D LED Sign Boards",
    quote: "The LED signage transformed our hotel's visibility at night. Customers now easily spot us from a distance. Great work by the Royal Signage team!"
  },
  {
    id: "3",
    name: "Deepak Medical",
    service: "LED Sign Boards",
    quote: "Excellent craftsmanship and professional service. Our pharmacy sign board looks modern and attracts more customers. Highly recommended!"
  },
  {
    id: "4",
    name: "Hotel Sangam",
    service: "3D LED Sign Boards",
    quote: "The team at Royal Signage understood our requirements perfectly and delivered a stunning sign board that has become a landmark in our area."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-royal-gray/30 to-royal-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Quote size={200} className="text-royal-cyan" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Quote size={150} className="text-royal-cyan rotate-180" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-royal-cyan">Testimonials</span>
          </h2>
          <p className="text-royal-white/70 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with Royal Signage.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial slider */}
            <div className="overflow-hidden">
              <div 
                className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                <div className="flex">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id} 
                      className="min-w-full px-4"
                    >
                      <div className="bg-royal-gray/20 backdrop-blur-sm rounded-xl p-8 relative">
                        <Quote className="text-royal-cyan/20 absolute top-4 left-4" size={40} />
                        <div className="text-center">
                          <p className="text-royal-white/90 text-lg md:text-xl italic mb-6 relative z-10">
                            "{testimonial.quote}"
                          </p>
                          <div className="mt-4">
                            <h4 className="text-royal-cyan font-bold text-xl">{testimonial.name}</h4>
                            <p className="text-royal-white/70">{testimonial.service}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={goToPrevious}
              className="absolute top-1/2 -left-4 -translate-y-1/2 bg-royal-gray/30 backdrop-blur-sm rounded-full p-2 text-royal-white hover:text-royal-cyan hover:bg-royal-gray/50 transition-all duration-300 hidden md:block"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={goToNext}
              className="absolute top-1/2 -right-4 -translate-y-1/2 bg-royal-gray/30 backdrop-blur-sm rounded-full p-2 text-royal-white hover:text-royal-cyan hover:bg-royal-gray/50 transition-all duration-300 hidden md:block"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-royal-cyan w-6' 
                    : 'bg-royal-gray/50 hover:bg-royal-gray/70'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
