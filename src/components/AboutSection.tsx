
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Activity, Database, Zap, Rocket } from 'lucide-react';

const AboutSection: React.FC = () => {
  const milestones = [
    { year: '2021', title: 'Inception', description: 'Founded by ex-Quants and fintech engineers.' },
    { year: '2022', title: 'First Release', description: 'Launched beta with 10,000 users.' },
    { year: '2023', title: 'Expansion', description: 'Added dark pool analytics & options flow.' },
    { year: '2024', title: 'Enterprise', description: 'Institutional client partnerships.' }
  ];

  return (
    <section id="about" className="relative section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Wall Street Tech, Made Accessible</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Be.fund bridges the gap between hedge fund tools and retail traders. Founded by ex-Quants and fintech engineers, we democratize high-frequency insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Card className="glass-card border-none bg-transparent overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-befund-blue to-befund-purple opacity-20 blur-lg"></div>
            <div className="relative glass-card h-full p-6 flex flex-col">
              <div className="mb-6 flex items-center justify-center bg-gradient-to-r from-befund-blue to-befund-purple p-3 rounded-full w-14 h-14">
                <LineChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Supremacy</h3>
              <p className="text-white/70 mb-5">
                Access to institutional-grade data feeds with millisecond latency. From level II market depth to dark pool prints.
              </p>
              <div className="mt-auto glass-card p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">Data Points</span>
                  <span className="text-sm text-white">1B+ daily</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card border-none bg-transparent overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-befund-green to-befund-blue opacity-20 blur-lg"></div>
            <div className="relative glass-card h-full p-6 flex flex-col">
              <div className="mb-6 flex items-center justify-center bg-gradient-to-r from-befund-green to-befund-blue p-3 rounded-full w-14 h-14">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered Insights</h3>
              <p className="text-white/70 mb-5">
                Our proprietary algorithms scan millions of data points to identify potential market-moving events before they happen.
              </p>
              <div className="mt-auto glass-card p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">Accuracy Rate</span>
                  <span className="text-sm text-white">83.4%</span>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card border-none bg-transparent overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-befund-purple to-befund-green opacity-20 blur-lg"></div>
            <div className="relative glass-card h-full p-6 flex flex-col">
              <div className="mb-6 flex items-center justify-center bg-gradient-to-r from-befund-purple to-befund-green p-3 rounded-full w-14 h-14">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trading Community</h3>
              <p className="text-white/70 mb-5">
                Join thousands of like-minded traders sharing strategies, insights, and real-time trade ideas in our premium Discord.
              </p>
              <div className="mt-auto glass-card p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/60">Active Members</span>
                  <span className="text-sm text-white">50,000+</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="relative mb-20">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex mb-20 last:mb-0 ${
                index % 2 === 0 ? 'flex-row md:pr-1/2' : 'flex-row-reverse md:pl-1/2'
              }`}
            >
              <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0 md:right-1/2 md:left-auto' : 'left-0'} md:translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 z-10`}>
                {index === 0 ? (
                  <Rocket className="h-4 w-4 text-befund-purple" />
                ) : index === milestones.length - 1 ? (
                  <Zap className="h-4 w-4 text-befund-blue" />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-befund-green"></div>
                )}
              </div>
              
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="glass-card inline-block p-4 rounded-lg">
                  <span className="text-sm text-befund-blue">{milestone.year}</span>
                  <h4 className="text-xl font-bold mb-2 text-white">{milestone.title}</h4>
                  <p className="text-white/70">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-card rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient-blue mb-2">50,000+</div>
              <div className="text-white/70">Active Traders</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient-blue mb-2">8,500+</div>
              <div className="text-white/70">Tracked Symbols</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient-blue mb-2">1 Billion+</div>
              <div className="text-white/70">Daily Data Points</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient-blue mb-2">24/7</div>
              <div className="text-white/70">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
