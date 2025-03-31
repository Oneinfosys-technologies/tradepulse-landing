
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'backdrop-blur-lg bg-black/50 py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gradient-blue">Be.fund</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a>
          <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-befund-blue text-befund-blue hover:bg-befund-blue hover:text-white">
            Log In
          </Button>
          <Button className="bg-gradient-to-r from-befund-blue to-befund-purple hover:opacity-90">
            Get Started Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card mt-3 mx-4 rounded-lg overflow-hidden">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#features" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#testimonials" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="w-full border-befund-blue text-befund-blue hover:bg-befund-blue hover:text-white">
                Log In
              </Button>
              <Button className="w-full bg-gradient-to-r from-befund-blue to-befund-purple hover:opacity-90">
                Get Started Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
