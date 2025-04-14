
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial } from "@/types/types";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Patil",
    service: "LIC Advisory",
    quote: "Deepak made the LIC policy selection process very straightforward. He explained all the options clearly and helped me choose the right plan for my family's needs."
  },
  {
    id: "2",
    name: "Sneha Joshi",
    service: "Vehicle Insurance",
    quote: "When I had an accident, the claim process was incredibly smooth thanks to Deepak's assistance. Quick resolution and complete coverage as promised!"
  },
  {
    id: "3",
    name: "Amit Sharma",
    service: "Mutual Fund Advisory",
    quote: "The investment strategy Deepak created for me has consistently outperformed my expectations. His regular portfolio reviews keep my investments on track."
  },
  {
    id: "4",
    name: "Priya Deshmukh",
    service: "Home Loans",
    quote: "Getting a home loan seemed like a daunting process until I consulted with Deepak. He helped me secure a great interest rate and handled all the paperwork."
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
    <section id="testimonials" className="section-padding bg-gradient-to-b from-royal-black to-royal-gray/30 relative overflow-hidden">
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
            Hear what our clients have to say about their experience working with Deepak Financial Services.
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
