// components/CompetitionDetails.js
export default function CompetitionDetails({ competition }) {
  return (
    <div className="lg:col-span-1">
      {/* Custom Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .competition-title {
          background: linear-gradient(135deg, #FF8C00, #D2691E, #CC5500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .section-number {
          background: linear-gradient(135deg, #FF8C00, #D2691E);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .compact-prose p {
          text-align: left;
          line-height: 1.5;
        }
      `}</style>

      <div className="space-y-6">
        {/* Compact Competition Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 rounded-xl p-6 text-white shadow-lg">
          {/* Subtle decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
          
          <div className="relative z-10">
            <div className="flex items-start mb-4">
              <div className="text-3xl mr-4 filter drop-shadow-md">{competition.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="mb-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-white/20 text-white/90 backdrop-blur-sm">
                    Competition #{competition.id}
                  </span>
                </div>
                <h1 className="font-playfair text-2xl md:text-3xl font-bold mb-2 leading-tight">
                  {competition.title}
                </h1>
                <p className="font-inter text-white/90 text-sm leading-relaxed mb-4">
                  {competition.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <div className="flex items-center text-white/90">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-2 backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-inter text-xs text-white/70 block">Deadline</span>
                  <span className="font-inter font-semibold text-sm">{competition.deadline}</span>
                </div>
              </div>
              
              <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="font-inter font-medium text-white text-sm">Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Competition Sections */}
        {competition.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="group relative bg-white/95 backdrop-blur-sm rounded-xl border border-orange-100/50 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Subtle hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-amber-50/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10 p-6">
              {/* Compact Section Header */}
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200 rounded-lg flex items-center justify-center shadow-sm">
                    <span className="section-number font-playfair font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {section.title}
                  </h2>
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                    <div className="h-0.5 w-6 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full opacity-60"></div>
                    <div className="h-0.5 w-3 bg-orange-200 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Compact Content */}
              <div className="compact-prose">
                {section.content.split('\n').map((paragraph, idx) => {
                  // Handle bullet points
                  if (paragraph.trim().startsWith('•')) {
                    return (
                      <div key={idx} className="flex items-start my-2">
                        <div className="flex-shrink-0 mt-1.5 mr-3">
                          <div className="w-1.5 h-1.5 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full"></div>
                        </div>
                        <p className="font-inter text-gray-700 leading-relaxed text-sm">
                          {paragraph.trim().substring(1).trim()}
                        </p>
                      </div>
                    );
                  }
                  
                  // Handle bold headers
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split('**');
                    return (
                      <p key={idx} className="font-inter text-gray-700 leading-relaxed mb-3 text-sm">
                        {parts.map((part, partIdx) => 
                          partIdx % 2 === 1 ? (
                            <span key={partIdx} className="font-playfair font-semibold text-base text-orange-800">
                              {part}
                            </span>
                          ) : (
                            <span key={partIdx}>{part}</span>
                          )
                        )}
                      </p>
                    );
                  }
                  
                  // Handle regular paragraphs
                  if (paragraph.trim()) {
                    return (
                      <p key={idx} className="font-inter text-gray-700 leading-relaxed mb-3 text-sm">
                        {paragraph}
                      </p>
                    );
                  }
                  
                  return null;
                })}
              </div>
              
              {/* Compact Section Progress */}
              <div className="mt-6 pt-3 border-t border-orange-100">
                <div className="flex items-center justify-between">
                  <span className="font-inter text-xs font-medium text-orange-600">
                    Section {index + 1} of {competition.sections.length}
                  </span>
                  <div className="flex items-center space-x-1">
                    {competition.sections.map((_, idx) => (
                      <div
                        key={idx}
                        className={`
                          w-2 h-2 rounded-full transition-all duration-300 
                          ${idx <= index 
                            ? 'bg-gradient-to-br from-orange-500 to-amber-500' 
                            : 'bg-orange-200'
                          }
                        `}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        
        {/* Compact Completion Indicator */}
        <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 text-center border border-emerald-200/50 shadow-md">
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-emerald-200/20 to-transparent rounded-full"></div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-playfair text-lg font-bold text-gray-900 mb-2">
              You&apos;ve reached the end!
            </h3>
            <p className="font-inter text-gray-600 text-sm leading-relaxed mb-4">
              Ready to showcase your creativity? Use the submission panel on the right.
            </p>
            <div className="flex items-center justify-center gap-1 text-emerald-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="font-inter font-medium text-xs">Ready to submit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}