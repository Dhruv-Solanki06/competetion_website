// components/CompetitionDetails.js
export default function CompetitionDetails({ competition }) {
  return (
    <div className="lg:col-span-1">
      {/* Custom Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-crimson { font-family: 'Crimson Text', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .competition-title {
          background: linear-gradient(135deg, #FF8C00, #D2691E, #CC5500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 4px rgba(210, 105, 30, 0.1);
        }
        
        .elegant-prose p {
          text-align: justify;
          hyphens: auto;
        }
        
        .section-number {
          background: linear-gradient(135deg, #FF8C00, #D2691E);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="space-y-10">
        {/* Enhanced Competition Header */}
        <div className={`relative overflow-hidden bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 rounded-2xl p-10 text-white shadow-2xl`}>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="flex items-start mb-6">
              <div className="text-5xl mr-6 filter drop-shadow-lg">{competition.icon}</div>
              <div className="flex-1">
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white/20 text-white/90 backdrop-blur-sm border border-white/30">
                    Competition #{competition.id}
                  </span>
                </div>
                <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
                  {competition.title}
                </h1>
                <p className="font-crimson text-white/90 text-xl leading-relaxed mb-6 max-w-2xl">
                  {competition.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-6 border-t border-white/20">
              <div className="flex items-center text-white/90">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-inter text-sm text-white/70 block">Submission Deadline</span>
                  <span className="font-inter font-semibold text-lg">{competition.deadline}</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="font-inter text-sm text-white/70 mb-1">Status</div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="font-inter font-medium text-white">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Competition Sections */}
        {competition.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-100/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-200"
          >
            {/* Section Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-amber-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 p-8 md:p-10">
              {/* Enhanced Section Header */}
              <div className="flex items-start mb-8">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 border-2 border-orange-200 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <span className="section-number font-playfair font-bold text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                    {section.title}
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-20 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-full"></div>
                    <div className="h-1 w-8 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full opacity-60"></div>
                    <div className="h-1 w-4 bg-orange-200 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Content */}
              <div className="elegant-prose max-w-none">
                {section.content.split('\n').map((paragraph, idx) => {
                  // Handle bullet points with elegant styling
                  if (paragraph.trim().startsWith('•')) {
                    return (
                      <div key={idx} className="flex items-start my-4 group/item">
                        <div className="flex-shrink-0 mt-2 mr-4">
                          <div className="w-2 h-2 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full shadow-sm group-hover/item:shadow-md transition-shadow duration-200"></div>
                        </div>
                        <p className="font-inter text-gray-700 leading-relaxed text-lg">
                          {paragraph.trim().substring(1).trim()}
                        </p>
                      </div>
                    );
                  }
                  
                  // Handle bold headers with elegant typography
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split('**');
                    return (
                      <p key={idx} className="font-inter text-gray-700 leading-relaxed mb-6 text-lg">
                        {parts.map((part, partIdx) => 
                          partIdx % 2 === 1 ? (
                            <span key={partIdx} className="font-playfair font-semibold text-xl text-orange-800 tracking-wide">
                              {part}
                            </span>
                          ) : (
                            <span key={partIdx}>{part}</span>
                          )
                        )}
                      </p>
                    );
                  }
                  
                  // Handle regular paragraphs with elegant styling
                  if (paragraph.trim()) {
                    return (
                      <p key={idx} className="font-inter text-gray-700 leading-relaxed mb-6 text-lg tracking-wide">
                        {paragraph}
                      </p>
                    );
                  }
                  
                  return null;
                })}
              </div>
              
              {/* Enhanced Section Progress */}
              <div className="mt-10 pt-6 border-t border-orange-100">
                <div className="flex items-center justify-between">
                  <span className="font-inter text-sm font-medium text-orange-600">
                    Section {index + 1} of {competition.sections.length}
                  </span>
                  <div className="flex items-center space-x-2">
                    {competition.sections.map((_, idx) => (
                      <div
                        key={idx}
                        className={`
                          w-3 h-3 rounded-full transition-all duration-300 
                          ${idx <= index 
                            ? 'bg-gradient-to-br from-orange-500 to-amber-500 shadow-sm' 
                            : 'bg-orange-200 hover:bg-orange-300'
                          }
                        `}
                      />
                    ))}
                    <div className="ml-3 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        
        {/* Enhanced Completion Indicator */}
        <div className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-10 text-center border border-emerald-200/50 shadow-lg">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-200/30 to-transparent rounded-full"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-3">
              Congratulations! You&apos;ve reached the end
            </h3>
            <p className="font-inter text-gray-600 text-lg leading-relaxed max-w-md mx-auto mb-6">
              You&apos;ve reviewed all competition details. Ready to showcase your creativity and join the sacred expression?
            </p>
            <div className="flex items-center justify-center gap-2 text-emerald-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="font-inter font-medium">Use the submission panel on the right</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}