// components/CompetitionList.js
import Link from 'next/link';
import { competitions } from '../data/competitions';

export default function CompetitionList() {
  return (
    <section className="w-full relative">
      {/* Custom Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-crimson { font-family: 'Crimson Text', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .competition-gradient {
          background: linear-gradient(135deg, #FF8C00, #D2691E, #CC5500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .compact-container {
          contain: layout style;
        }
      `}</style>

      <div className="compact-container p-0">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
            <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
          </div>
          
          <h2 className="font-playfair text-3xl font-bold mb-3 leading-tight">
            <span className="competition-gradient">Active Competitions</span>
          </h2>
          
          <p className="font-crimson text-sm text-orange-700/80 max-w-md mx-auto leading-relaxed">
            Join our sacred weekly challenges and express your creativity through the universal language of art and innovation
          </p>
          
          {/* Compact Weekly Badge */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200/50 shadow-md">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="font-inter font-medium text-orange-700 text-xs">Weekly Challenges • New Problems Every Monday</span>
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Compact Competition Cards */}
        <div className="space-y-6">
          {competitions.map((competition, index) => (
            <div
              key={competition.id}
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-amber-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-6">
                {/* Competition Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl filter drop-shadow-md">
                    {competition.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-playfair text-xl font-bold text-gray-900 group-hover:text-orange-800 transition-colors duration-300">
                        {competition.title}
                      </h3>
                      <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full">
                        <span className="font-inter text-xs font-bold text-orange-700">#{competition.id}</span>
                      </div>
                    </div>
                    
                    <p className="font-inter text-gray-700 text-sm leading-relaxed mb-3">
                      {competition.description}
                    </p>
                    
                    {/* Compact Challenge Info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs mb-4">
                      <div className="flex items-center gap-1 text-orange-600">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-inter font-medium">Weekly Format: 7 days per challenge</span>
                      </div>
                      
                      <div className="flex items-center gap-1 text-red-600">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                        </svg>
                        <span className="font-inter font-medium">Deadline: {competition.deadline || 'Ongoing'}</span>
                      </div>
                    </div>

                    {/* Prize Information */}
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-3 mb-4 border border-yellow-200/50">
                      <h4 className="font-playfair font-semibold text-orange-800 text-sm mb-2">Competition Prizes</h4>
                      <div className="flex justify-between items-center text-xs">
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">1</span>
                          </div>
                          <span className="font-inter font-medium text-yellow-700">₹8,000</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">2</span>
                          </div>
                          <span className="font-inter font-medium text-gray-700">₹5,000</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-4 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">3</span>
                          </div>
                          <span className="font-inter font-medium text-amber-700">₹3,000</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Section */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Link href={`/competitions/${competition.id}`}>
                          <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-inter font-semibold py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] text-sm">
                            <div className="flex items-center gap-2">
                              <span>View Details</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </button>
                        </Link>
                        
                        {/* Quick Stats */}
                        <div className="flex items-center gap-2 text-xs">
                          <div className="bg-orange-100 rounded-lg px-2 py-1">
                            <span className="font-inter font-bold text-orange-700">Week 2</span>
                          </div>
                          <div className="bg-amber-100 rounded-lg px-2 py-1">
                            <span className="font-inter font-bold text-amber-700">5 Days Left</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Submissions Count */}
                      <div className="flex items-center gap-1 text-gray-600">
                        <span className="text-lg">👥</span>
                        <span className="font-inter text-sm font-medium">221 submitted</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Call to Action */}
        <div className="mt-8">
          <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100/50 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl mb-4 shadow-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                Ready to Begin Your Sacred Journey?
              </h3>
              
              <p className="font-crimson text-sm text-gray-700 mb-4 leading-relaxed">
                Join thousands of enlightened creators expressing unity through art.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/register">
                  <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-inter font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm">
                    <span className="flex items-center gap-2">
                      Begin Your Expression
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
                
                <Link href="/about">
                  <button className="bg-white/80 backdrop-blur-sm hover:bg-white border border-orange-200 hover:border-orange-300 text-orange-700 font-inter font-semibold px-6 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-sm">
                    Learn More About VK
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}