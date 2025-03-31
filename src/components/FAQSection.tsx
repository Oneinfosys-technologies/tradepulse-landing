
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How real-time is your data?",
      answer: "Our Pro and Institutional plans offer millisecond latency via Polygon.io and direct exchange feeds. Free accounts have a 15-minute delay on most data points."
    },
    {
      question: "Do you support options trading?",
      answer: "Yes, we offer full options chain data with Greek visualizations, unusual options activity alerts, and options flow analysis on our Pro and Institutional plans."
    },
    {
      question: "Can I export my data?",
      answer: "Absolutely. All plans allow CSV/Excel exports of your data. Pro plans include API access for specific endpoints, while Institutional plans get full API access for automated trading systems."
    },
    {
      question: "What technical indicators do you offer?",
      answer: "We provide 50+ technical indicators on Pro plans and 100+ on Institutional plans, including proprietary indicators developed by our quant team. Free accounts get access to 5 basic indicators."
    },
    {
      question: "How does the backtesting feature work?",
      answer: "Our backtesting suite allows you to test strategies against historical data with adjustable parameters. Pro users can backtest against 10 years of data, while Institutional users get 20+ years with advanced risk metrics and Monte Carlo simulations."
    },
    {
      question: "Do you offer dark pool data?",
      answer: "Yes, Pro accounts receive basic dark pool data showing significant off-exchange transactions. Institutional accounts get full access to dark pool prints, block trades, and institutional order flow indicators."
    },
    {
      question: "Can I use Be.fund on multiple devices?",
      answer: "Yes, all plans allow unlimited devices. Your account syncs seamlessly between web, desktop, and mobile applications."
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "Free users get community forum support. Pro users receive email support with 24-hour response times. Institutional clients get 24/7 priority support with dedicated account managers."
    },
  ];

  return (
    <section id="faq" className="relative section-padding">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/20"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Answers at Lightning Speed</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Get quick answers to the most common questions about our platform.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-lg px-6 border-none overflow-hidden transition-all hover:bg-white/5"
              >
                <AccordionTrigger className="text-left py-5 text-lg font-medium no-underline hover:no-underline group">
                  {faq.question}
                  <div className="glass-card h-8 w-8 rounded-full flex items-center justify-center transition-transform group-data-[state=open]:rotate-180">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 6.5H11M6 1.5V11.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-data-[state=open]:hidden"/>
                      <path d="M1 6.5H11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-5 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 glass-card p-6 rounded-lg text-center">
            <p className="text-white/80 mb-4">
              Still have questions? Our expert team is ready to help.
            </p>
            <div className="inline-flex space-x-4">
              <a href="#contact" className="text-befund-blue hover:underline">
                Contact Us
              </a>
              <span className="text-white/40">|</span>
              <a href="#" className="text-befund-blue hover:underline">
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
