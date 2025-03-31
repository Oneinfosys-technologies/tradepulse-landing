
import React from 'react';
import { Motion, Activity, Database, MessageSquare, AlertCircle, LineChart, BarChart3, BellRing, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  return (
    <Card className="glass-card border-none bg-transparent overflow-hidden hover:scale-[1.02] hover:z-10 transition-all duration-300 group">
      <div className={`absolute -inset-1 ${color} opacity-20 blur-lg group-hover:opacity-30 transition-opacity`}></div>
      <div className="relative glass-card h-full p-6">
        <div className={`mb-6 flex items-center justify-center ${color} p-3 rounded-full w-14 h-14 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </Card>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <BellRing className="h-7 w-7 text-white" />,
      title: 'AI-Powered Alerts',
      description: 'Get SMS/Discord alerts for breakout stocks before they move, with precise entry and exit points.',
      color: 'bg-gradient-to-r from-befund-blue to-befund-purple'
    },
    {
      icon: <Activity className="h-7 w-7 text-white" />,
      title: 'Dark Pool Analytics',
      description: 'Spot institutional order flow with our OTC trade scanner, revealing the moves big players are making.',
      color: 'bg-gradient-to-r from-befund-purple to-befund-blue'
    },
    {
      icon: <LineChart className="h-7 w-7 text-white" />,
      title: 'Backtesting Suite',
      description: 'Test strategies against 20+ years of market data with advanced risk metrics and optimization tools.',
      color: 'bg-gradient-to-r from-befund-green to-befund-blue'
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-white" />,
      title: 'Social Sentiment',
      description: 'Real-time Reddit, Twitter, and SEC filing analysis to detect market-moving news and sentiment shifts.',
      color: 'bg-gradient-to-r from-befund-blue to-befund-green'
    },
    {
      icon: <BarChart3 className="h-7 w-7 text-white" />,
      title: 'Options Flow',
      description: 'Track unusual options activity, with alerts for large block trades and significant open interest changes.',
      color: 'bg-gradient-to-r from-befund-purple to-befund-green'
    },
    {
      icon: <Database className="h-7 w-7 text-white" />,
      title: 'Historical Data',
      description: 'Access tick-by-tick historical data going back decades for comprehensive market analysis.',
      color: 'bg-gradient-to-r from-befund-green to-befund-purple'
    },
    {
      icon: <AlertCircle className="h-7 w-7 text-white" />,
      title: 'Risk Management',
      description: 'Advanced portfolio risk metrics, correlation analysis, and position sizing recommendations.',
      color: 'bg-gradient-to-r from-befund-blue to-befund-green'
    },
    {
      icon: <Zap className="h-7 w-7 text-white" />,
      title: 'API Integration',
      description: 'Connect directly to your brokerage with our secure API, enabling automated trading and strategy execution.',
      color: 'bg-gradient-to-r from-befund-green to-befund-blue'
    }
  ];

  return (
    <section id="features" className="relative section-padding">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/20"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Tools That Give You the Edge</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Institutional-grade analytics and insights that were previously only available to Wall Street professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
