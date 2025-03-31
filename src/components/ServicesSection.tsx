
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { Check, X, ChevronRight } from 'lucide-react';

interface PricingFeature {
  name: string;
  free: boolean | string;
  pro: boolean | string;
  institutional: boolean | string;
}

const ServicesSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
  const pricingFeatures: PricingFeature[] = [
    { name: 'Real-time Market Data', free: '15-min delay', pro: true, institutional: true },
    { name: 'Basic Stock Screener', free: true, pro: true, institutional: true },
    { name: 'Watchlists', free: '3 max', pro: 'Unlimited', institutional: 'Unlimited' },
    { name: 'Technical Indicators', free: '5 basic', pro: '50+ advanced', institutional: '100+ custom' },
    { name: 'Pre/Post Market Data', free: false, pro: true, institutional: true },
    { name: 'Options Flow', free: false, pro: true, institutional: true },
    { name: 'Dark Pool Prints', free: false, pro: 'Basic', institutional: 'Full Access' },
    { name: 'Historical Data', free: '1 year', pro: '10 years', institutional: '20+ years' },
    { name: 'Backtesting Suite', free: false, pro: 'Basic', institutional: 'Advanced' },
    { name: 'API Access', free: false, pro: false, institutional: true },
    { name: 'Priority Support', free: false, pro: 'Email', institutional: '24/7 Priority' },
    { name: 'Discord Community', free: 'Read Only', pro: true, institutional: 'VIP Access' },
  ];
  
  return (
    <section id="services" className="relative section-padding">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/20"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Tiered Access for Every Trader</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            From beginners to professionals, we offer flexible plans that scale with your trading journey.
          </p>
          
          <div className="mt-8 inline-flex p-1 rounded-lg bg-white/5 border border-white/10">
            <button
              className={`px-4 py-2 text-sm rounded-md transition-all ${
                billingCycle === 'monthly' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-md transition-all ${
                billingCycle === 'annual' ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual <span className="text-befund-green text-xs">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <p className="text-white/70 mb-4">Essential tools to get started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-white/60 ml-2">forever</span>
              </div>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-0">
                Sign Up Free
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  {feature.free === true ? (
                    <Check className="h-5 w-5 text-befund-green mt-0.5 mr-3 shrink-0" />
                  ) : feature.free === false ? (
                    <X className="h-5 w-5 text-gray-500 mt-0.5 mr-3 shrink-0" />
                  ) : (
                    <Check className="h-5 w-5 text-befund-green mt-0.5 mr-3 shrink-0" />
                  )}
                  <div>
                    <span className="text-sm text-white/80">{feature.name}</span>
                    {typeof feature.free === 'string' && (
                      <div className="text-xs text-white/60">{feature.free}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="glass-card rounded-xl p-6 hover:scale-[1.03] transition-transform duration-300 relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-befund-blue to-befund-purple opacity-20 blur-lg"></div>
            <div className="absolute top-0 right-0 -mr-2 -mt-2">
              <Badge className="bg-gradient-to-r from-befund-blue to-befund-purple border-0">
                Popular
              </Badge>
            </div>
            <div className="relative mb-6">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-white/70 mb-4">Advanced tools for active traders</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${billingCycle === 'monthly' ? '29' : '19'}</span>
                <span className="text-white/60 ml-2">per month</span>
                {billingCycle === 'annual' && (
                  <span className="text-xs ml-2 text-befund-green">billed annually</span>
                )}
              </div>
              <Button className="w-full bg-gradient-to-r from-befund-blue to-befund-purple hover:opacity-90 border-0">
                Start 7-Day Free Trial
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="text-center text-xs text-white/60 mt-2">No credit card required</div>
            </div>
            
            <div className="space-y-4">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  {feature.pro === true ? (
                    <Check className="h-5 w-5 text-befund-green mt-0.5 mr-3 shrink-0" />
                  ) : feature.pro === false ? (
                    <X className="h-5 w-5 text-gray-500 mt-0.5 mr-3 shrink-0" />
                  ) : (
                    <Check className="h-5 w-5 text-befund-green mt-0.5 mr-3 shrink-0" />
                  )}
                  <div>
                    <span className="text-sm text-white/80">{feature.name}</span>
                    {typeof feature.pro === 'string' && (
                      <div className="text-xs text-white/60">{feature.pro}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Institutional Plan */}
          <div className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Institutional</h3>
              <p className="text-white/70 mb-4">Professional-grade trading suite</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${billingCycle === 'monthly' ? '499' : '399'}</span>
                <span className="text-white/60 ml-2">per month</span>
                {billingCycle === 'annual' && (
                  <span className="text-xs ml-2 text-befund-green">billed annually</span>
                )}
              </div>
              <Button variant="outline" className="w-full border-befund-blue text-befund-blue hover:bg-befund-blue hover:text-white">
                Contact Sales
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  {feature.institutional === true ? (
                    <Check className="h-5 w-5 text-befund-green mt-0.5 mr-3 shrink-0" />
                  ) : feature.institutional === false ? (
                    <X className="h-5 w-5 text-gray-500 mt-0.5 mr-3 shrink-0" />
                  ) : (
                    <Check className="h-5 w-5 text-befund-green mt-0.5 mr-3 shrink-0" />
                  )}
                  <div>
                    <span className="text-sm text-white/80">{feature.name}</span>
                    {typeof feature.institutional === 'string' && (
                      <div className="text-xs text-white/60">{feature.institutional}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            All plans include access to our basic market data, community features, and educational resources. 
            Upgrade or downgrade anytime as your trading needs evolve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="bg-white/5 border-white/20">
              No Lock-in Contracts
            </Badge>
            <Badge variant="outline" className="bg-white/5 border-white/20">
              Cancel Anytime
            </Badge>
            <Badge variant="outline" className="bg-white/5 border-white/20">
              Free Data API
            </Badge>
            <Badge variant="outline" className="bg-white/5 border-white/20">
              Unlimited Devices
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
