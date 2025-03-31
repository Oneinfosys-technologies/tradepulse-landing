
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, AlertCircle, Activity, BellRing } from 'lucide-react';

// Sample data
const stockData = [
  { name: '9:30', AAPL: 151.2, MSFT: 289.5, AMZN: 138.2, volume: 1200 },
  { name: '10:00', AAPL: 152.3, MSFT: 290.1, AMZN: 138.7, volume: 1400 },
  { name: '10:30', AAPL: 152.1, MSFT: 290.7, AMZN: 139.3, volume: 1100 },
  { name: '11:00', AAPL: 153.2, MSFT: 291.2, AMZN: 140.0, volume: 1500 },
  { name: '11:30', AAPL: 153.5, MSFT: 291.3, AMZN: 140.5, volume: 1700 },
  { name: '12:00', AAPL: 153.7, MSFT: 290.8, AMZN: 140.3, volume: 1300 },
  { name: '12:30', AAPL: 154.2, MSFT: 291.0, AMZN: 140.8, volume: 1400 },
  { name: '1:00', AAPL: 155.0, MSFT: 292.1, AMZN: 141.2, volume: 1600 },
  { name: '1:30', AAPL: 155.6, MSFT: 292.6, AMZN: 141.5, volume: 1800 },
  { name: '2:00', AAPL: 156.1, MSFT: 293.0, AMZN: 142.0, volume: 2000 },
  { name: '2:30', AAPL: 156.3, MSFT: 292.8, AMZN: 142.3, volume: 1900 },
  { name: '3:00', AAPL: 156.8, MSFT: 293.5, AMZN: 142.6, volume: 2100 },
  { name: '3:30', AAPL: 157.2, MSFT: 294.0, AMZN: 143.0, volume: 2300 },
  { name: '4:00', AAPL: 157.5, MSFT: 294.2, AMZN: 143.2, volume: 2200 },
];

const watchlistStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: 157.50, change: 2.3 },
  { symbol: 'MSFT', name: 'Microsoft Corp.', price: 294.20, change: 1.7 },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 143.20, change: 3.6 },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 126.80, change: 0.8 },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: 318.25, change: 1.2 },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.65, change: 4.8 },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 439.20, change: -0.5 },
];

const alertsData = [
  { 
    id: 1, 
    symbol: 'TSLA', 
    message: 'Volume spike detected, 126% above 30-day average', 
    type: 'volume',
    time: '14:32:10' 
  },
  { 
    id: 2, 
    symbol: 'AMZN', 
    message: 'Large block trade: 2.4M shares at $143.15', 
    type: 'block',
    time: '13:45:22' 
  },
  { 
    id: 3, 
    symbol: 'NVDA', 
    message: 'Unusual options activity: $450 calls, 10k volume', 
    type: 'options',
    time: '13:12:55' 
  },
  { 
    id: 4, 
    symbol: 'AAPL', 
    message: 'Moving above 200-day moving average', 
    type: 'technical',
    time: '11:28:06' 
  },
];

const LiveStockView: React.FC = () => {
  const [activeStock, setActiveStock] = useState('AAPL');
  
  return (
    <section id="live-stock" className="relative section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Real-Time Market Pulse</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Monitor live US stock prices, volume spikes, and unusual options activity with our institutional-grade terminal.
          </p>
        </div>
        
        <div className="glass-card rounded-xl p-6 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-befund-blue/20 to-befund-purple/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-befund-purple/20 to-befund-green/20 rounded-full blur-3xl"></div>
          
          <Tabs defaultValue="charts" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <TabsList className="bg-black/30 mb-4 md:mb-0">
                <TabsTrigger value="charts" className="data-[state=active]:bg-white/10">
                  <Activity className="mr-2 h-4 w-4" />
                  Charts
                </TabsTrigger>
                <TabsTrigger value="watchlist" className="data-[state=active]:bg-white/10">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Watchlist
                </TabsTrigger>
                <TabsTrigger value="alerts" className="data-[state=active]:bg-white/10">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Alerts
                </TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="bg-befund-green/10 text-befund-green border-befund-green/30">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
                  Market Open
                </Badge>
                <Badge variant="outline" className="bg-white/5 border-white/20">
                  <BellRing className="mr-2 h-3 w-3" />
                  Alerts: 4
                </Badge>
              </div>
            </div>
            
            <TabsContent value="charts" className="mt-0">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                  <Card className="bg-black/30 border-white/10">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle>
                          {activeStock} <span className="text-sm font-normal text-white/60">
                            {activeStock === 'AAPL' ? 'Apple Inc.' : activeStock === 'MSFT' ? 'Microsoft Corp.' : 'Amazon.com Inc.'}
                          </span>
                        </CardTitle>
                        <div className="flex items-center space-x-3">
                          <div className={`text-sm ${activeStock === 'NVDA' ? 'text-befund-red' : 'text-befund-green'}`}>
                            ${activeStock === 'AAPL' ? '157.50' : activeStock === 'MSFT' ? '294.20' : '143.20'} 
                            <span className="ml-1">
                              {activeStock === 'NVDA' ? '-0.5%' : activeStock === 'AAPL' ? '+2.3%' : activeStock === 'MSFT' ? '+1.7%' : '+3.6%'}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            {['1D', '1W', '1M', '3M', 'YTD'].map(period => (
                              <div 
                                key={period} 
                                className={`text-xs px-2 py-1 rounded cursor-pointer ${period === '1D' ? 'bg-white/10' : 'text-white/60 hover:text-white'}`}
                              >
                                {period}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={stockData}
                            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
                          >
                            <defs>
                              <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={activeStock === 'NVDA' ? '#E53E3E' : '#3182CE'} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={activeStock === 'NVDA' ? '#E53E3E' : '#3182CE'} stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <XAxis 
                              dataKey="name" 
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
                            />
                            <YAxis 
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
                              domain={['dataMin - 1', 'dataMax + 1']}
                            />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '4px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                              }}
                              itemStyle={{ color: '#fff' }}
                              labelStyle={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            />
                            <Area 
                              type="monotone" 
                              dataKey={activeStock} 
                              stroke={activeStock === 'NVDA' ? '#E53E3E' : '#3182CE'} 
                              fillOpacity={1}
                              fill="url(#colorStock)" 
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      
                      <div className="h-[100px] w-full mt-4">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={stockData}>
                            <XAxis 
                              dataKey="name" 
                              axisLine={false}
                              tickLine={false}
                              tick={{ fill: 'rgba(255, 255, 255, 0.4)', fontSize: 10 }}
                            />
                            <Tooltip
                              contentStyle={{ 
                                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '4px'
                              }}
                              cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                              labelStyle={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            />
                            <Bar 
                              dataKey="volume" 
                              fill="rgba(49, 130, 206, 0.2)" 
                              radius={[2, 2, 0, 0]} 
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:col-span-1">
                  <Card className="bg-black/30 border-white/10 h-full">
                    <CardHeader>
                      <CardTitle className="text-base">Select Stock</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2">
                      <div className="space-y-1">
                        {watchlistStocks.slice(0, 5).map((stock) => (
                          <div 
                            key={stock.symbol}
                            className={`flex justify-between items-center p-2 rounded cursor-pointer hover:bg-white/5 transition-colors ${activeStock === stock.symbol ? 'bg-white/10' : ''}`}
                            onClick={() => setActiveStock(stock.symbol)}
                          >
                            <div className="flex items-center">
                              <div className={`w-2 h-8 rounded-sm mr-2 ${stock.change >= 0 ? 'bg-befund-green' : 'bg-befund-red'}`}></div>
                              <div>
                                <div className="font-medium">{stock.symbol}</div>
                                <div className="text-xs text-white/60">{stock.name}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium">${stock.price.toFixed(2)}</div>
                              <div className={`text-xs ${stock.change >= 0 ? 'text-befund-green' : 'text-befund-red'}`}>
                                {stock.change >= 0 ? '+' : ''}{stock.change}%
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <CardTitle className="text-base mb-3">Market Insights</CardTitle>
                        <div className="space-y-3">
                          <div className="glass-card p-3 rounded-lg">
                            <div className="text-xs text-white/60 mb-1">S&P 500</div>
                            <div className="flex justify-between items-center">
                              <div className="font-medium">4,782.21</div>
                              <div className="text-xs text-befund-green">+0.86%</div>
                            </div>
                          </div>
                          <div className="glass-card p-3 rounded-lg">
                            <div className="text-xs text-white/60 mb-1">Nasdaq</div>
                            <div className="flex justify-between items-center">
                              <div className="font-medium">16,742.39</div>
                              <div className="text-xs text-befund-green">+1.12%</div>
                            </div>
                          </div>
                          <div className="glass-card p-3 rounded-lg">
                            <div className="text-xs text-white/60 mb-1">VIX</div>
                            <div className="flex justify-between items-center">
                              <div className="font-medium">14.32</div>
                              <div className="text-xs text-befund-red">-3.42%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="watchlist" className="mt-0">
              <Card className="bg-black/30 border-white/10">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Your Watchlist</CardTitle>
                    <Badge variant="outline" className="bg-white/5 border-white/20">
                      7 Symbols
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {watchlistStocks.map((stock) => (
                      <div 
                        key={stock.symbol}
                        className="glass-card rounded-lg p-4 hover:bg-white/5 transition-all cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="text-lg font-medium">{stock.symbol}</div>
                            <div className="text-sm text-white/60">{stock.name}</div>
                          </div>
                          <div className={`text-sm font-medium px-2 py-1 rounded ${stock.change >= 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                            {stock.change >= 0 ? '+' : ''}{stock.change}%
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xl font-semibold">${stock.price.toFixed(2)}</div>
                          <div className="flex space-x-1">
                            <div className="w-14 h-10">
                              <ResponsiveContainer width="100%" height="100%">
                                <AreaChart
                                  data={stockData.slice(-7)}
                                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                                >
                                  <Area 
                                    type="monotone" 
                                    dataKey={stock.symbol} 
                                    stroke={stock.change >= 0 ? "#38A169" : "#E53E3E"} 
                                    fill={stock.change >= 0 ? "rgba(56, 161, 105, 0.1)" : "rgba(229, 62, 62, 0.1)"} 
                                  />
                                </AreaChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="alerts" className="mt-0">
              <Card className="bg-black/30 border-white/10">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>AI-Powered Alerts</CardTitle>
                    <Badge variant="outline" className="bg-white/5 border-white/20">
                      <BellRing className="mr-2 h-3 w-3" />
                      4 New Alerts
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alertsData.map((alert) => (
                      <div 
                        key={alert.id}
                        className="glass-card rounded-lg p-4 hover:bg-white/5 transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-full 
                            ${alert.type === 'volume' ? 'bg-green-500/10' : 
                              alert.type === 'block' ? 'bg-blue-500/10' : 
                              alert.type === 'options' ? 'bg-purple-500/10' : 'bg-yellow-500/10'}`}
                          >
                            <AlertCircle className={`h-5 w-5 
                              ${alert.type === 'volume' ? 'text-green-400' : 
                                alert.type === 'block' ? 'text-blue-400' : 
                                alert.type === 'options' ? 'text-purple-400' : 'text-yellow-400'}`} 
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <span className="font-medium text-lg">{alert.symbol}</span>
                              <span className="text-xs text-white/60">{alert.time}</span>
                            </div>
                            <p className="text-sm text-white/80 mb-2">{alert.message}</p>
                            <div className="flex justify-between items-center">
                              <Badge variant="outline" className="text-xs bg-white/5 border-white/20">
                                {alert.type === 'volume' ? 'Volume Alert' : 
                                  alert.type === 'block' ? 'Block Trade' : 
                                  alert.type === 'options' ? 'Options Activity' : 'Technical Signal'}
                              </Badge>
                              <div className="text-xs text-befund-blue hover:underline cursor-pointer">
                                View Details
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default LiveStockView;
