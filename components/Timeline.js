export default function Timeline() {
  const timelineEvents = [
    {
      id: 1,
      title: 'Registration Opens',
      date: 'February 15, 2025',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Submission Period',
      date: 'March 1 - April 15, 2025',
      status: 'current'
    },
    {
      id: 3,
      title: 'Judging Period',
      date: 'April 16 - May 1, 2025',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Results Announcement',
      date: 'Sept 19, 2025',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Award Ceremony',
      date: 'June 1, 2025',
      status: 'upcoming'
    }
  ];

  return (
    <section id="timeline">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Competition Timeline</h2>
        
        <div className="relative bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 border border-gray-100">
          {/* Timeline line */}
          <div className="absolute top-6 left-9 bottom-6 w-1 bg-gradient-to-b from-red-200 via-amber-200 to-gray-200 rounded-full"></div>
          
          {/* Timeline events */}
          <div className="space-y-6">
            {timelineEvents.map((event) => (
              <div key={event.id} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-9 -ml-3">
                  <div 
                    className={`h-7 w-7 rounded-full border-2 border-white flex items-center justify-center shadow-md ${event.status === 'completed' ? 'bg-gradient-to-r from-red-500 to-amber-500' : event.status === 'current' ? 'bg-gradient-to-r from-amber-400 to-amber-500 animate-pulse' : 'bg-gray-200'}`}
                  >
                    {event.status === 'completed' && (
                      <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Timeline content */}
                <div className="ml-20">
                  <div className={`bg-white p-5 rounded-xl shadow-sm border ${event.status === 'current' ? 'border-amber-200 shadow-md' : 'border-gray-100'} hover:shadow-md transition-shadow duration-300`}>
                    <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{event.date}</p>
                    {event.status === 'current' && (
                      <span className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        Current Phase
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
      </div>
    </section>
  );
}