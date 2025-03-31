
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Twitter, Globe, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-befund-darker py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-white/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-befund-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-befund-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold text-gradient-blue inline-block">Be.fund</a>
            </div>
            <p className="text-white/70 mb-6">
              Institutional-grade trading tools for retail traders. Get the edge you need in today's competitive markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">API Docs</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Market Insights</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Community</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-white/70 mb-4">Get the latest updates on market trends and platform features.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Your email address" 
                className="bg-white/5 border-white/10 focus-visible:ring-befund-blue"
              />
              <Button className="bg-gradient-to-r from-befund-blue to-befund-purple hover:opacity-90 whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">SEC Compliance</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="bg-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 Be.fund – Not financial advice. Past performance ≠ future results.
          </div>
          
          <div className="relative w-full md:w-auto overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex space-x-6">
              <span className="text-white/60 text-sm">AAPL +2.3%</span>
              <span className="text-white/60 text-sm">MSFT +1.7%</span>
              <span className="text-white/60 text-sm">AMZN +3.6%</span>
              <span className="text-white/60 text-sm">TSLA +4.8%</span>
              <span className="text-white/60 text-sm">NVDA -0.5%</span>
              <span className="text-white/60 text-sm">SPY +0.86%</span>
              <span className="text-white/60 text-sm">QQQ +1.12%</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
