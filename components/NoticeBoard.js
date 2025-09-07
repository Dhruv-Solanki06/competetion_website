export default function NoticeBoard({ announcements }) {
  return (
    <section id="announcements">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Announcements & Updates</h2>
      
      <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl overflow-hidden border border-gray-100">
        <div className="divide-y divide-gray-100">
          {announcements.map((announcement) => (
            <div 
              key={announcement.id} 
              className="p-6 hover:bg-gradient-to-r hover:from-red-50 hover:to-amber-50 transition-all duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {announcement.type === 'important' ? (
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-red-100 shadow-sm">
                      <svg className="h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-amber-100 shadow-sm">
                      <svg className="h-5 w-5 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  )}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">{announcement.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{announcement.content}</p>
                  <p className="mt-2 text-xs text-gray-500">{announcement.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="mt-6 bg-gradient-to-r from-red-50 to-amber-50 p-5 rounded-2xl shadow-md">
        <h3 className="font-bold text-gray-900 mb-3">Quick Links</h3>
        <div className="space-y-2">
          <a href="#" className="flex items-center text-sm text-gray-700 hover:text-red-600 transition-colors">
            <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Competition Guidelines
          </a>
          <a href="#" className="flex items-center text-sm text-gray-700 hover:text-red-600 transition-colors">
            <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Submission Requirements
          </a>
          <a href="#" className="flex items-center text-sm text-gray-700 hover:text-red-600 transition-colors">
            <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Judging Criteria
          </a>
        </div>
      </div>
    </section>
  );
}