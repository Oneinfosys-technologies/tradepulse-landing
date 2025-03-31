
import React from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LiveStockView from '@/components/LiveStockView';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <LiveStockView />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
