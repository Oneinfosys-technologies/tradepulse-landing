
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, TrendingUp, LineChart, BarChart3 } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gradient">
              Trade Smarter, Not Harder – Real-Time US Market Mastery
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              Be.fund delivers institutional-grade tools for retail traders. Track, analyze, and dominate the US stock market like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-base bg-gradient-to-r from-befund-blue to-befund-purple hover:opacity-90 px-8 py-6">
                Get Started Free
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="text-base border-white/20 bg-white/5 hover:bg-white/10 px-8 py-6">
                Explore Premium
              </Button>
            </div>
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                <span className="text-sm text-white/70">50,000+ Active Traders</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 animate-pulse"></div>
                <span className="text-sm text-white/70">Real-time Data</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative glass-card rounded-xl p-1 shadow-2xl mx-auto max-w-md">
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-befund-blue to-befund-purple rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-befund-purple to-befund-green rounded-full opacity-30 blur-xl"></div>
              
              <div className="bg-befund-darker rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="font-semibold text-white">NASDAQ Terminal</div>
                    <div className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">LIVE</div>
                  </div>
                  <div className="flex space-x-2">
                    <TrendingUp size={18} className="text-befund-green" />
                    <LineChart size={18} className="text-befund-blue" />
                    <BarChart3 size={18} className="text-befund-purple" />
                  </div>
                </div>
                
                <div className="mb-4 py-6">
                  <div className="h-[240px] relative overflow-hidden rounded-md bg-gradient-to-b from-befund-dark to-black">
                    {/* Mock Stock Chart */}
                    <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                      <path
                        d="M0,100 C20,120 40,80 60,90 C80,100 100,140 120,130 C140,120 160,60 180,70 C200,80 220,160 240,150 C260,140 280,40 300,50 C320,60 340,120 360,110 C380,100 400,80 400,70"
                        fill="none"
                        stroke="#3182CE"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,130 C20,140 40,110 60,120 C80,130 100,170 120,160 C140,150 160,90 180,100 C200,110 220,190 240,180 C260,170 280,70 300,80 C320,90 340,150 360,140 C380,130 400,110 400,100"
                        fill="none"
                        stroke="#9F7AEA"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                      />
                      
                      {/* Price Markers */}
                      <circle cx="360" cy="110" r="4" fill="#3182CE" />
                      <circle cx="400" cy="70" r="4" fill="#3182CE" />
                      
                      {/* Volume Bars */}
                      <rect x="300" y="180" width="10" height="20" fill="#3182CE20" />
                      <rect x="320" y="180" width="10" height="15" fill="#3182CE20" />
                      <rect x="340" y="180" width="10" height="30" fill="#3182CE20" />
                      <rect x="360" y="180" width="10" height="40" fill="#3182CE20" />
                      <rect x="380" y="180" width="10" height="25" fill="#3182CE20" />
                    </svg>
                    
                    {/* Price Labels */}
                    <div className="absolute top-2 right-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                      $156.78 <span className="text-green-400">+4.32%</span>
                    </div>
                    
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-befund-darker to-transparent opacity-20"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="glass-card rounded-md p-2">
                    <div className="text-white/60 mb-1">Market Cap</div>
                    <div className="text-white font-medium">$2.58T</div>
                  </div>
                  <div className="glass-card rounded-md p-2">
                    <div className="text-white/60 mb-1">Volume</div>
                    <div className="text-white font-medium">52.4M</div>
                  </div>
                  <div className="glass-card rounded-md p-2">
                    <div className="text-white/60 mb-1">P/E Ratio</div>
                    <div className="text-white font-medium">28.34</div>
                  </div>
                  <div className="glass-card rounded-md p-2">
                    <div className="text-white/60 mb-1">Options Flow</div>
                    <div className="text-befund-green font-medium">+$12.3M</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 glass-card p-3 rounded-lg shadow-lg animate-float hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-befund-green"></div>
                <span className="text-xs text-white">TSLA +8.3%</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-10 glass-card p-3 rounded-lg shadow-lg animate-float animation-delay-1000 hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-befund-red"></div>
                <span className="text-xs text-white">NVDA unusual options activity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
