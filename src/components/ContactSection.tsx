
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative section-padding">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/20"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Get in Touch – 24/7 Support</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our team of market experts is ready to answer your questions and help you get the most out of Be.fund.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-befund-blue/20 to-befund-purple/20 opacity-20 blur-xl"></div>
            
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-white/70">Your Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-white/5 border-white/10 focus-visible:ring-befund-blue"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-white/70">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-white/5 border-white/10 focus-visible:ring-befund-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-white/70">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  className="bg-white/5 border-white/10 focus-visible:ring-befund-blue"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-white/70">Your Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us what you need..." 
                  className="min-h-[150px] bg-white/5 border-white/10 focus-visible:ring-befund-blue"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-befund-blue to-befund-purple hover:opacity-90">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-befund-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Email Us</div>
                    <a href="mailto:support@befund.com" className="text-white hover:text-befund-blue transition-colors">
                      support@befund.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-befund-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Call Us</div>
                    <a href="tel:+18005551234" className="text-white hover:text-befund-blue transition-colors">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <MessageSquare className="h-5 w-5 text-befund-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Live Chat</div>
                    <div className="text-white">Available 24/7 on our platform</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-befund-blue" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70 mb-1">Visit Us</div>
                    <div className="text-white">350 Fifth Avenue, New York, NY 10118</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-befund-blue/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-befund-purple/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-xl font-bold mb-6 relative">Our Location</h3>
              <div className="relative h-[240px] rounded-lg overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-befund-darker to-black flex items-center justify-center">
                  {/* Placeholder for a map or office image */}
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-befund-blue/50 mx-auto mb-3" />
                    <div className="text-white/70">350 Fifth Avenue, New York, NY 10118</div>
                    <div className="text-white/50 text-sm mt-2">Empire State Building, 21st Floor</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-sm text-white/70 mb-2">Business Hours</div>
                <div className="text-white">Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                <div className="text-white/60 text-sm">Support available 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
