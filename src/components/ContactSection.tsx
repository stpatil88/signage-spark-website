
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendToTelegram } from "@/utils/telegramApi";
import { FormData } from "@/types/types";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  Loader2
} from "lucide-react";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const success = await sendToTelegram(data);
      
      if (success) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly by phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-royal-black relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-royal-cyan/10 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-royal-cyan">Us</span>
          </h2>
          <p className="text-royal-white/70 max-w-2xl mx-auto">
            Ready to secure your financial future? Get in touch with us today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="bg-royal-gray/20 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-royal-white">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-royal-gray/30 p-3 rounded-full text-royal-cyan">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-royal-white mb-1">Phone</h4>
                  <p className="text-royal-white/70">
                    <a href="tel:+919172636333" className="hover:text-royal-cyan transition-colors">
                      +91 9172636333
                    </a>
                    <br />
                    <a href="tel:+919922476066" className="hover:text-royal-cyan transition-colors">
                      +91 9922476066
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-royal-gray/30 p-3 rounded-full text-royal-cyan">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-royal-white mb-1">Email</h4>
                  <p className="text-royal-white/70">
                    <a href="mailto:deepakgarje.financial@gmail.com" className="hover:text-royal-cyan transition-colors">
                      deepakgarje.financial@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-royal-gray/30 p-3 rounded-full text-royal-cyan">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-royal-white mb-1">Location</h4>
                  <p className="text-royal-white/70">
                    Kopargaon<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="mt-8 rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15051.515888900186!2d74.47244723183104!3d19.88251930000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc587a7c456661%3A0xe87bf29e3a1f5ab7!2sKopargaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1712930204032!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Deepak Financial Services Location"
              ></iframe>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-royal-gray/20 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-royal-white">Book an Appointment</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-royal-white">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="bg-royal-gray/30 border-royal-gray/50 text-royal-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-royal-white">Phone</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your phone number" 
                            {...field} 
                            className="bg-royal-gray/30 border-royal-gray/50 text-royal-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-royal-white">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            {...field} 
                            className="bg-royal-gray/30 border-royal-gray/50 text-royal-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-royal-white">Service Required</FormLabel>
                      <FormControl>
                        <select 
                          {...field} 
                          className="w-full px-3 py-2 bg-royal-gray/30 border border-royal-gray/50 rounded-md text-royal-white"
                        >
                          <option value="" disabled>Select a service</option>
                          <option value="LIC Advisory">LIC Advisory</option>
                          <option value="Vehicle Insurance">Vehicle Insurance</option>
                          <option value="Mutual Fund Advisory">Mutual Fund Advisory</option>
                          <option value="Home Loans">Home Loans</option>
                          <option value="All Financial Services">All Financial Services</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-royal-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your financial goals or preferred appointment time" 
                          {...field} 
                          className="bg-royal-gray/30 border-royal-gray/50 text-royal-white resize-none min-h-[120px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-royal-cyan text-royal-black hover:bg-royal-cyan/80"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
