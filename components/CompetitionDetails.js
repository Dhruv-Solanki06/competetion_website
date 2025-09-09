// components/CompetitionDetails.js
export default function CompetitionDetails({ competition }) {
  return (
    <div className="lg:col-span-1">
      <div className="space-y-8">
        {/* Competition Header */}
        <div className={`bg-gradient-to-r ${competition.color} rounded-xl p-8 text-white`}>
          <div className="flex items-start mb-4">
            <div className="text-4xl mr-4">{competition.icon}</div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-3">{competition.title}</h1>
              <p className="text-white/90 text-lg leading-relaxed mb-4">{competition.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div className="flex items-center text-white/80">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Deadline: {competition.deadline}</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-medium">Competition #{competition.id}</span>
            </div>
          </div>
        </div>

        {/* Competition Sections */}
        {competition.sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-8">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-semibold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {section.title}
                  </h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>
              </div>
              
              <div className="prose prose-gray max-w-none">
                {section.content.split('\n').map((paragraph, idx) => {
                  // Handle bullet points
                  if (paragraph.trim().startsWith('•')) {
                    return (
                      <div key={idx} className="flex items-start my-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{paragraph.trim().substring(1).trim()}</p>
                      </div>
                    );
                  }
                  
                  // Handle bold headers (text between **)
                  if (paragraph.includes('**')) {
                    const parts = paragraph.split('**');
                    return (
                      <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                        {parts.map((part, partIdx) => 
                          partIdx % 2 === 1 ? (
                            <span key={partIdx} className="font-semibold text-gray-900">{part}</span>
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
                      <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  }
                  
                  return null;
                })}
              </div>
              
              {/* Section Progress Indicator */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Section {index + 1} of {competition.sections.length}</span>
                  <div className="flex space-x-1">
                    {competition.sections.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${
                          idx <= index ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        
        {/* End of Content Indicator */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">You've reached the end!</h3>
          <p className="text-gray-600">Ready to submit your entry? Use the submission panel on the right.</p>
        </div>
      </div>
    </div>
  );
} 