export default function NoticeBoard({ announcements }) {
  // Enhanced announcements with winner announcement
  const enhancedAnnouncements = [
    {
      id: 1,
      type: 'important',
      title: 'Registration Deadline Extended',
      content: 'The registration deadline for all competitions has been extended by one week.',
      date: 'October 15, 2023',
    },
    {
      id: 2,
      type: 'winner',
      title: 'Week 1 AI Challenge Winners!',
      content: 'Congratulations to our first week winners! We will be contacting winners shortly regarding prize distribution.',
      date: 'October 12, 2023',
    },
    {
      id: 3,
      type: 'normal',
      title: 'New AI Challenge Added',
      content: 'We have added a new AI challenge to the competition lineup.',
      date: 'October 10, 2023',
    },
  ];

  return (
    <section id="announcements" className="relative p-4">
      {/* Custom Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .notice-gradient {
          background: linear-gradient(135deg, #FF8C00, #D2691E, #CC5500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .announcement-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .announcement-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 140, 0, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .announcement-shimmer:hover::before {
          left: 100%;
        }

        .winner-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>

      {/* Compact Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <h2 className="font-playfair text-lg font-bold notice-gradient">
            Announcements & Updates
          </h2>
        </div>
        <p className="font-inter text-orange-700/70 text-xs ml-8">Weekly challenges & important updates</p>
      </div>
      
      {/* Sleek Announcements Container */}
      <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-xl overflow-hidden border border-orange-100/50 mb-4">
        <div className="divide-y divide-orange-100/30">
          {enhancedAnnouncements.map((announcement, index) => (
            <div 
              key={announcement.id} 
              className="announcement-shimmer group p-4 hover:bg-gradient-to-r hover:from-orange-50/40 hover:to-amber-50/40 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                {/* Compact Enhanced Icons */}
                <div className="flex-shrink-0 mt-0.5">
                  {announcement.type === 'important' ? (
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 w-8 h-8 bg-red-400 rounded-lg animate-ping opacity-20"></div>
                    </div>
                  ) : announcement.type === 'winner' ? (
                    <div className="relative">
                      <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md winner-sparkle">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l5.5 7.5L16 3m-2.5 14.5L16 21l-5.5-7.5L5 21l2.5-3.5z" />
                        </svg>
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Sleek Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-playfair text-sm font-bold text-gray-900 group-hover:text-orange-800 transition-colors duration-300 leading-snug">
                      {announcement.title}
                    </h3>
                    {announcement.type === 'important' && (
                      <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium border border-red-200 flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                        Urgent
                      </span>
                    )}
                    {announcement.type === 'winner' && (
                      <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium border border-yellow-200 flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full winner-sparkle"></div>
                        Winner
                      </span>
                    )}
                  </div>
                  
                  <p className="font-inter text-gray-700 text-xs leading-relaxed mb-2 group-hover:text-gray-800 transition-colors duration-300">
                    {announcement.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-orange-600">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-inter text-xs font-medium">{announcement.date}</span>
                    </div>
                    
                    {announcement.type === 'winner' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Completed
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Subtle Hover Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-orange-400 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Quick Links */}
      <div className="bg-gradient-to-br from-orange-50/90 via-white/95 to-amber-50/90 backdrop-blur-sm p-4 rounded-xl shadow-md border border-orange-100/50 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-200/15 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-amber-200/15 to-transparent rounded-full"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-sm">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="font-playfair text-sm font-bold text-orange-800">Quick Links</h3>
          </div>
          
          <div className="space-y-2">
            {[
              { title: 'Competition Guidelines', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { title: 'Submission Requirements', icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' },
              { title: 'Judging Criteria', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
              { title: 'Winner Gallery', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' }
            ].map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="group flex items-center gap-2 p-2.5 bg-white/90 backdrop-blur-sm hover:bg-white border border-orange-100/50 hover:border-orange-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.01]"
              >
                <div className="w-6 h-6 bg-orange-100 group-hover:bg-orange-200 rounded-md flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                </div>
                <span className="font-inter font-medium text-gray-700 group-hover:text-orange-700 transition-colors duration-300 text-xs flex-1 leading-tight">
                  {link.title}
                </span>
                <svg className="w-3 h-3 text-orange-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
          
          {/* Weekly Stats Card */}
          <div className="mt-4 p-3 bg-gradient-to-r from-orange-100/80 to-amber-100/80 rounded-lg border border-orange-200/50">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-playfair text-xs font-bold text-orange-800">This Week</h4>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-inter text-xs text-green-700 font-medium">Active</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center">
                <div className="font-inter font-bold text-orange-700">234</div>
                <div className="font-inter text-orange-600">Submissions</div>
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