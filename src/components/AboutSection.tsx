
import { User, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-royal-black to-royal-gray/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-royal-cyan">Us</span>
          </h2>
          <p className="text-royal-white/70 max-w-2xl mx-auto">
            Your trusted financial partner in Kopargaon for all your insurance and investment needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">Deepak Garje</h3>
            <p className="text-royal-white/80 mb-6">
              With over 10 years of experience in financial advisory, Deepak Garje is a licensed LIC agent and 
              a channel partner of AngelOne Broking Firm specializing in creating personalized financial strategies 
              for clients across Kopargaon and surrounding areas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 bg-royal-gray/30 p-3 rounded-full text-royal-cyan">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-royal-cyan mb-1">Personalized Approach</h4>
                  <p className="text-royal-white/70">
                    Crafts custom financial strategies based on your unique needs and goals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-royal-gray/30 p-3 rounded-full text-royal-cyan">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-royal-cyan mb-1">Certified Expert</h4>
                  <p className="text-royal-white/70">
                    Licensed LIC agent and AngelOne channel partner with proper certifications.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-royal-gray/30 p-3 rounded-full text-royal-cyan">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-royal-cyan mb-1">Continuous Monitoring</h4>
                  <p className="text-royal-white/70">
                    Reviews and adjusts client portfolios based on changing market conditions and personal goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-royal-cyan shadow-neon">
              <img 
                src="/lovable-uploads/a25f3d13-4397-4151-bab4-6e9b8e32cdfd.png" 
                alt="Deepak Garje - Financial Advisor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
