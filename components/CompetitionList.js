export default function CompetitionList({ competitions }) {
  return (
    <section id="competitions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Competitions</h2>
        
        <div className="grid grid-cols-1 gap-6">
          {competitions.map((competition) => (
            <div 
              key={competition.id} 
              className="bg-white/80 backdrop-blur-sm border border-gray-100 shadow-md rounded-2xl overflow-hidden 
                       hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 rounded-xl p-4 ${competition.color} shadow-sm`}>
                    {competition.icon}
                  </div>
                  <div className="ml-5">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold text-gray-900">{competition.title}</h3>
                      <span className="ml-3 px-2.5 py-0.5 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                        New
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{competition.description}</p>
                  </div>
                </div>
                
                <div className="mt-6 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500">
                      <svg className="h-5 w-5 mr-2 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Deadline: {competition.deadline || 'Ongoing'}</span>
                    </div>
                    <a 
                      href="#" 
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg 
                               text-white bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 
                               shadow-sm transition-colors duration-300"
                    >
                      View Details
                      <svg className="ml-2 -mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}