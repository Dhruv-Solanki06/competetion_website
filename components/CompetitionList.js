// components/CompetitionList.js
import Link from 'next/link';
import { competitions } from '../data/competitions';

export default function CompetitionList() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
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
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full floating-element"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-bl from-amber-200/40 to-transparent rounded-full floating-element" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-tr from-orange-300/20 to-transparent rounded-full floating-element" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-tl from-amber-300/30 to-transparent rounded-full floating-element" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
            <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
          </div>
          
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="competition-gradient">Active Competitions</span>
          </h2>
          
          <p className="font-crimson text-xl text-orange-700/80 max-w-2xl mx-auto leading-relaxed">
            Join our sacred weekly challenges and express your creativity through the universal language of art and innovation
          </p>
          
          {/* Weekly Competition Badge */}
          <div className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-orange-200/50 shadow-lg">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="font-inter font-semibold text-orange-700">Weekly Challenges • New Problems Every Monday</span>
            <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Enhanced Competition Cards */}
        <div className="space-y-8">
          {competitions.map((competition, index) => (
            <div
              key={competition.id}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-orange-100/50 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Card Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full transform translate-x-20 -translate-y-20 group-hover:scale-110 transition-transform duration-700"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row">
                {/* Enhanced Left Side - Competition Info */}
                <div className="flex-1 p-8 md:p-10">
                  <div className="flex items-start mb-8">
                    {/* Competition Icon with Enhancement */}
                    <div className="relative mr-8">
                      <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg">
                        {competition.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-2xl blur-xl scale-125 group-hover:scale-150 transition-transform duration-500"></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center flex-wrap gap-4 mb-4">
                        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-orange-800 transition-colors duration-300">
                          {competition.title}
                        </h3>
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full shadow-sm">
                          <span className="font-inter text-sm font-bold text-orange-700">#{competition.id}</span>
                        </div>
                      </div>
                      
                      <p className="font-inter text-gray-700 text-lg leading-relaxed mb-6 max-w-2xl">
                        {competition.description}
                      </p>
                      
                      {/* Weekly Challenge Info */}
                      <div className="flex flex-wrap items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-orange-600">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-inter font-medium text-orange-700 block">Weekly Format</span>
                            <span className="font-inter text-orange-600">7 days per challenge</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-red-600">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-inter font-medium text-red-700 block">Current Deadline</span>
                            <span className="font-inter text-red-600">{competition.deadline || 'Ongoing'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Right Side - Action Button */}
                <div className="lg:w-72 p-8 md:p-10 bg-gradient-to-br from-orange-50/50 to-amber-50/50 flex items-center justify-center border-l border-orange-100/50">
                  <div className="w-full space-y-4">
                    <Link href={`/competitions/${competition.id}`} className="block w-full">
                      <button className="w-full group/btn relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-700 hover:via-amber-700 hover:to-orange-800 text-white font-inter font-semibold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                        {/* Button Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                        
                        <div className="relative flex items-center justify-center gap-3">
                          <span className="text-lg">View Details</span>
                          <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                    </Link>
                    
                    {/* Quick Stats */}
                    <div className="flex justify-center gap-4 text-xs text-orange-600">
                      <div className="text-center">
                        <div className="font-inter font-bold text-orange-700">Week 2</div>
                        <div className="font-inter">Current</div>
                      </div>
                      <div className="w-px bg-orange-200"></div>
                      <div className="text-center">
                        <div className="font-inter font-bold text-orange-700">5 Days</div>
                        <div className="font-inter">Remaining</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16">
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-2xl border border-orange-100/50 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/30 via-transparent to-amber-50/30"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Begin Your Sacred Journey?
              </h3>
              
              <p className="font-crimson text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of enlightened creators expressing unity through art. Choose your weekly challenge and illuminate the world with your creativity.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/register" className="group/cta relative overflow-hidden">
                  <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-inter font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-700"></div>
                    <span className="relative flex items-center gap-2">
                      Begin Your Expression
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
                
                <Link href="/about" className="group/cta">
                  <button className="bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-orange-200 hover:border-orange-300 text-orange-700 font-inter font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <span className="flex items-center gap-2">
                      Learn More About VK
                      <svg className="w-5 h-5 transform group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
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