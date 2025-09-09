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

  // Custom icons as SVG components
  const TimelineIcon = ({ status, index }) => {
    const iconProps = "w-3.5 h-3.5 text-white";
    
    if (status === 'completed') {
      return (
        <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      );
    } else if (status === 'current') {
      return (
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      );
    } else {
      return (
        <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
      );
    }
  };

  return (
    <section id="timeline" className="h-full">
      <div className="h-full flex flex-col">
        {/* Compact header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-lg font-bold text-orange-600">Competition Timeline</h2>
          </div>
          <p className="text-xs text-orange-600/70 font-medium">Track your journey through our sacred competition</p>
        </div>
        
        <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-orange-100/50 shadow-sm">
          {/* Compact timeline line */}
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-orange-400 to-gray-300 rounded-full"></div>
            
            {/* Compact timeline events */}
            <div className="space-y-3">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className="relative flex items-start group"
                >
                  {/* Compact timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className={`
                        w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-md transition-all duration-200 group-hover:scale-110
                        ${event.status === 'completed' 
                          ? 'bg-gradient-to-br from-emerald-500 to-green-600' 
                          : event.status === 'current' 
                          ? 'bg-gradient-to-br from-orange-500 to-amber-600' 
                          : 'bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-orange-400 group-hover:to-amber-500'
                        }
                      `}
                    >
                      <TimelineIcon status={event.status} index={event.id} />
                    </div>
                    
                    {/* Compact ripple effect for current phase */}
                    {event.status === 'current' && (
                      <div className="absolute inset-0 w-6 h-6 rounded-full bg-orange-400 animate-ping opacity-20"></div>
                    )}
                  </div>
                  
                  {/* Compact timeline content */}
                  <div className="ml-3 flex-1 min-w-0">
                    <div className={`
                      bg-white/80 backdrop-blur-sm p-3 rounded-lg border transition-all duration-200 group-hover:shadow-md
                      ${event.status === 'current' 
                        ? 'border-orange-200 bg-orange-50/50' 
                        : event.status === 'completed'
                        ? 'border-emerald-200 bg-emerald-50/30'
                        : 'border-gray-200 group-hover:border-orange-200'
                      }
                    `}>
                      {/* Status indicator line */}
                      <div className={`
                        absolute left-0 top-0 bottom-0 w-1 rounded-r
                        ${event.status === 'completed' 
                          ? 'bg-emerald-400' 
                          : event.status === 'current' 
                          ? 'bg-orange-400' 
                          : 'bg-gray-300'
                        }
                      `}></div>
                      
                      <h3 className="text-sm font-bold text-gray-900 mb-1 truncate group-hover:text-orange-800 transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-xs text-gray-600 mb-2">{event.date}</p>
                      
                      {/* Compact status badges */}
                      {event.status === 'completed' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          Completed
                        </span>
                      )}
                      {event.status === 'current' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                          Current Phase
                        </span>
                      )}
                      {event.status === 'upcoming' && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 group-hover:bg-orange-50 group-hover:text-orange-700 transition-all">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-orange-400 transition-colors"></div>
                          Upcoming
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Compact progress indicator */}
          <div className="mt-4 pt-3 border-t border-orange-100">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-gray-600 font-medium">Progress</span>
              <span className="text-orange-600 font-semibold">2 of 5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-orange-500 h-1.5 rounded-full transition-all duration-1000" style={{width: '33%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}