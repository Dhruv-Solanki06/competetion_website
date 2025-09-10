export default function Timeline() {
  const timelineEvents = [
    {
      id: 1,
      title: 'Competition Launch',
      date: 'February 15, 2025',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Week 1 Challenge',
      date: 'March 1 - March 8, 2025',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Week 2 Challenge',
      date: 'March 8 - March 15, 2025',
      status: 'current'
    },
    {
      id: 4,
      title: 'Week 3 Challenge',
      date: 'March 15 - March 22, 2025',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Final Results',
      date: 'April 5, 2025',
      status: 'upcoming'
    }
  ];

  // Custom icons as SVG components
  const TimelineIcon = ({ status, index }) => {
    const iconProps = "w-3 h-3 text-white";
    
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
      // Different icons for different upcoming phases
      const upcomingIcons = {
        4: (
          <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        5: (
          <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        )
      };
      return upcomingIcons[index] || <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>;
    }
  };

  return (
    <section id="timeline" className="h-full p-4">
      {/* Custom Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .timeline-gradient {
          background: linear-gradient(135deg, #FF8C00, #D2691E, #CC5500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="h-full flex flex-col">
        {/* Enhanced header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-playfair text-lg font-bold timeline-gradient">
              Competition Timeline
            </h2>
          </div>
          <p className="font-inter text-orange-700/70 text-xs ml-8">Weekly challenges • 7 days per round</p>
        </div>
        
        <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-orange-100/50 shadow-lg">
          {/* Enhanced timeline line */}
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-orange-400 via-amber-400 to-gray-300 rounded-full"></div>
            
            {/* Enhanced timeline events */}
            <div className="space-y-4">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.id} 
                  className="relative flex items-start group"
                >
                  {/* Enhanced timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div 
                      className={`
                        w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110
                        ${event.status === 'completed' 
                          ? 'bg-gradient-to-br from-emerald-500 to-green-600 shadow-emerald-200' 
                          : event.status === 'current' 
                          ? 'bg-gradient-to-br from-orange-500 to-amber-600 shadow-orange-200 animate-pulse' 
                          : 'bg-gradient-to-br from-gray-400 to-gray-500 shadow-gray-200 group-hover:from-orange-400 group-hover:to-amber-500'
                        }
                      `}
                    >
                      <TimelineIcon status={event.status} index={event.id} />
                    </div>
                    
                    {/* Enhanced ripple effect for current phase */}
                    {event.status === 'current' && (
                      <>
                        <div className="absolute inset-0 w-6 h-6 rounded-full bg-orange-400 animate-ping opacity-20"></div>
                        <div className="absolute inset-0 w-6 h-6 rounded-full bg-amber-300 animate-ping opacity-10" style={{animationDelay: '0.5s'}}></div>
                      </>
                    )}
                  </div>
                  
                  {/* Enhanced timeline content */}
                  <div className="ml-3 flex-1 min-w-0">
                    <div className={`
                      relative bg-white/90 backdrop-blur-sm p-3 rounded-xl border transition-all duration-300 group-hover:shadow-md group-hover:transform group-hover:translate-x-1
                      ${event.status === 'current' 
                        ? 'border-orange-200 bg-orange-50/50 ring-1 ring-orange-100' 
                        : event.status === 'completed'
                        ? 'border-emerald-200 bg-emerald-50/30 group-hover:shadow-emerald-100'
                        : 'border-gray-200 group-hover:border-orange-200 group-hover:shadow-orange-50'
                      }
                    `}>
                      {/* Enhanced status indicator line */}
                      <div className={`
                        absolute left-0 top-0 bottom-0 w-1 rounded-r-full
                        ${event.status === 'completed' 
                          ? 'bg-gradient-to-b from-emerald-400 to-green-500' 
                          : event.status === 'current' 
                          ? 'bg-gradient-to-b from-orange-400 to-amber-500' 
                          : 'bg-gradient-to-b from-gray-300 to-gray-400'
                        }
                      `}></div>
                      
                      <h3 className="font-playfair text-sm font-bold text-gray-900 mb-1 group-hover:text-orange-800 transition-colors leading-tight">
                        {event.title}
                      </h3>
                      
                      <p className="font-inter text-xs text-gray-600 mb-2 leading-relaxed">{event.date}</p>
                      
                      {/* Enhanced status badges */}
                      {event.status === 'completed' && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border border-emerald-200">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                          Completed
                        </span>
                      )}
                      {event.status === 'current' && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border border-orange-200">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          Current Phase
                        </span>
                      )}
                      {event.status === 'upcoming' && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-100 to-slate-100 text-gray-600 border border-gray-200 group-hover:from-orange-50 group-hover:to-amber-50 group-hover:text-orange-700 group-hover:border-orange-200 transition-all">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Upcoming
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced progress indicator */}
          <div className="mt-6 pt-4 border-t border-orange-100">
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-inter text-gray-600 font-medium">Progress</span>
              <span className="font-inter text-orange-600 font-semibold">Week 2 of 5</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
              <div className="bg-gradient-to-r from-emerald-500 via-orange-500 to-amber-500 h-2 rounded-full transition-all duration-1000 ease-out shadow-sm" style={{width: '40%'}}></div>
            </div>
            <div className="flex justify-between text-xs mt-2 text-gray-500">
              <span className="font-inter">Started</span>
              <span className="font-inter">Week 2</span>
              <span className="font-inter">Final</span>
            </div>
          </div>

          {/* Weekly Challenge Stats */}
          <div className="mt-4 p-3 bg-gradient-to-r from-orange-50/80 to-amber-50/80 rounded-xl border border-orange-100/50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-playfair text-xs font-bold text-orange-800">Current Week Stats</h4>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="font-inter text-xs text-orange-700 font-medium">Live</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <div className="font-inter font-bold text-orange-700">AI Video</div>
                <div className="font-inter text-orange-600">234 entries</div>
              </div>
              <div className="text-center">
                <div className="font-inter font-bold text-orange-700">Lextoons</div>
                <div className="font-inter text-orange-600">187 entries</div>
              </div>
              <div className="text-center">
                <div className="font-inter font-bold text-orange-700">5 Days</div>
                <div className="font-inter text-orange-600">Remaining</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}