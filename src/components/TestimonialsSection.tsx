
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  location: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Be.fund's dark pool tool spotted GME before the squeeze. The institutional-grade data is a game-changer for retail traders.",
      name: "Michael R.",
      position: "Day Trader",
      location: "NYC",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "Backtesting saved me $120k in bad trades. The alerts are incredibly accurate, and the community has transformed my approach to the market.",
      name: "Sarah T.",
      position: "Swing Trader",
      location: "TX",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "The institutional flow data gave me confidence to hold through volatility. Now I trade with conviction backed by real data.",
      name: "Jason K.",
      position: "Options Trader",
      location: "CA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const brokerages = [
    "TD Ameritrade", "Interactive Brokers", "E*TRADE", "Charles Schwab", "Robinhood", "Webull"
  ];
  
  return (
    <section id="testimonials" className="relative section-padding">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/20"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Trusted by 50,000+ Traders</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Hear what our community of traders has to say about how Be.fund has transformed their approach to the markets.
          </p>
        </div>
        
        <div className="glass-card rounded-xl p-6 md:p-10 mb-16 relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-befund-blue/20 to-befund-purple/20 opacity-20 blur-xl"></div>
          <div className="absolute top-10 left-10 text-white/10 pointer-events-none">
            <Quote size={120} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
            <div className="relative z-10">
              <div className="mb-6">
                <Quote className="h-10 w-10 text-befund-blue mb-4" />
                <p className="text-xl text-white/90 leading-relaxed italic">
                  {testimonials[activeIndex].quote}
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20" 
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-white/70">
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].location}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === index ? 'bg-befund-blue w-6' : 'bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-card rounded-lg p-6 bg-white/5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white/70">Live Trading Activity</span>
                  </div>
                  <div className="flex space-x-1">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full bg-white/5 border-white/10"
                      onClick={prevTestimonial}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 rounded-full bg-white/5 border-white/10"
                      onClick={nextTestimonial}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4 max-h-64 overflow-y-auto scrollbar-hide">
                  {[...Array(5)].map((_, index) => (
                    <div 
                      key={index} 
                      className="flex p-3 rounded-lg bg-black/20 border border-white/5"
                    >
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">
                              {["AAPL", "MSFT", "TSLA", "NVDA", "AMZN"][index]}
                            </span>
                            <Badge variant="outline" className="text-xs bg-white/5 border-white/20">
                              {["Buy", "Sell", "Buy", "Option", "Buy"][index]}
                            </Badge>
                          </div>
                          <span className="text-xs text-white/60">
                            {["2m ago", "5m ago", "10m ago", "18m ago", "24m ago"][index]}
                          </span>
                        </div>
                        <div className="text-sm text-white/80">
                          {[
                            "Added to long position at $168.42", 
                            "Took profits at +12.5% gain", 
                            "New position based on unusual options flow", 
                            "Bought $500 calls expiring 06/16", 
                            "Swing trade based on technical breakout"
                          ][index]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="text-sm text-white/70 mb-3">Community Stats</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold">82%</div>
                      <div className="text-xs text-white/60">Win Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">$42M</div>
                      <div className="text-xs text-white/60">Vol. Today</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold">1,240</div>
                      <div className="text-xs text-white/60">Active Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="mb-6 text-lg font-medium text-white/90">Integrated with all major brokerages</div>
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            {brokerages.map((broker, index) => (
              <div key={index} className="text-white/80 text-lg font-bold">
                {broker}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
