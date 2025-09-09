export default function NoticeBoard({ announcements }) {
  return (
    <section id="announcements" className="relative">
      {/* Custom Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-crimson { font-family: 'Crimson Text', serif; }
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
      `}</style>

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-amber-50/30 rounded-2xl opacity-60"></div>

      {/* Enhanced Header */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold notice-gradient">
            Announcements & Updates
          </h2>
        </div>
        <p className="font-inter text-orange-700/70 text-sm ml-11">Stay informed about weekly challenges and important updates</p>
      </div>
      
      {/* Enhanced Announcements Container */}
      <div className="relative bg-white/90 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden border border-orange-100/50 mb-6">
        {/* Container Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 via-transparent to-amber-50/20"></div>
        
        <div className="relative z-10 divide-y divide-orange-100/50">
          {announcements.map((announcement, index) => (
            <div 
              key={announcement.id} 
              className="announcement-shimmer group p-6 hover:bg-gradient-to-r hover:from-orange-50/50 hover:to-amber-50/50 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start gap-4">
                {/* Enhanced Icon */}
                <div className="flex-shrink-0">
                  {announcement.type === 'important' ? (
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      {/* Pulse effect for important announcements */}
                      <div className="absolute inset-0 w-12 h-12 bg-red-400 rounded-xl animate-ping opacity-20"></div>
                    </div>
                  ) : announcement.type === 'event' ? (
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Enhanced Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-playfair text-xl font-bold text-gray-900 group-hover:text-orange-800 transition-colors duration-300">
                      {announcement.title}
                    </h3>
                    {announcement.type === 'important' && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold border border-red-200">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        Urgent
                      </span>
                    )}
                  </div>
                  
                  <p className="font-inter text-gray-700 text-base leading-relaxed mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {announcement.content}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-orange-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-inter text-sm font-medium">{announcement.date}</span>
                    </div>
                    
                    {/* New indicator for weekly challenges */}
                    {announcement.type === 'challenge' && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        Weekly Challenge
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Hover Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2">
                  <svg className="w-5 h-5 text-orange-400 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Quick Links */}
      <div className="relative bg-gradient-to-br from-orange-50/80 via-white/90 to-amber-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-orange-100/50 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-md">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="font-playfair text-xl font-bold text-orange-800">Quick Links</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Competition Guidelines', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { title: 'Submission Requirements', icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' },
              { title: 'Judging Criteria', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' }
            ].map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="group flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm hover:bg-white border border-orange-100/50 hover:border-orange-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="w-10 h-10 bg-orange-100 group-hover:bg-orange-200 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-inter font-medium text-gray-700 group-hover:text-orange-700 transition-colors duration-300 text-sm">
                    {link.title}
                  </span>
                </div>
                <svg className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}