import { useState } from "react";

export default function MainPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const competitions = [
    {
      id: 'song',
      title: 'Song Competition',
      subtitle: 'Original/Adapted Musical Expression',
      description: 'Create musical expressions of the idea of global family through original or adapted songs.',
      icon: '🎵',
      color: 'from-pink-500 to-rose-600',
      deadline: 'March 15, 2025'
    },
    {
      id: 'poetry',
      title: 'Poetry Competition',
      subtitle: 'Verses Inspired by Ancient Scriptures',
      description: 'Write verses inspired by ancient scriptures or philosophical ideas that resonate today.',
      icon: '📝',
      color: 'from-purple-500 to-indigo-600',
      deadline: 'March 20, 2025'
    },
    {
      id: 'ai-reels',
      title: 'AI Reels Competition',
      subtitle: 'Technology Meets Ancient Stories',
      description: 'Create short creative videos using technology to narrate ancient stories with modern impact.',
      icon: '🎬',
      color: 'from-blue-500 to-cyan-600',
      deadline: 'March 25, 2025'
    },
    {
      id: 'punchlines',
      title: 'Punchlines/Taglines',
      subtitle: 'Impactful Modern Expressions',
      description: 'Create crisp, impactful expressions that communicate ancient wisdom for modern audiences.',
      icon: '💭',
      color: 'from-green-500 to-emerald-600',
      deadline: 'March 30, 2025'
    },
    {
      id: 'storytelling',
      title: 'Storytelling Competition',
      subtitle: 'Narratives from Epics & Folklore',
      description: 'Write narratives drawing from epics, folklore, or lived experiences reflecting Vasudhaiva Kutumbakam.',
      icon: '📚',
      color: 'from-amber-500 to-orange-600',
      deadline: 'April 5, 2025'
    }
  ];

  const announcements = [
    {
      id: 1,
      title: 'Competition Portal Now Live!',
      content: 'All five competitions are now open for submissions. Choose your category and start creating!',
      date: 'Today',
      type: 'important'
    },
    {
      id: 2,
      title: 'Theme Guidelines Released',
      content: 'Detailed guidelines for "Vasudhaiva Kutumbakam: Ancient Wisdom for a Shared Future" are now available.',
      date: 'Yesterday',
      type: 'info'
    },
    {
      id: 3,
      title: 'Judging Panel Announced',
      content: 'Renowned academicians, artists, and thinkers will evaluate submissions. Meet our esteemed judges!',
      date: '2 days ago',
      type: 'info'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-indigo-600">VK Competitions</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                My Submissions
              </button>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                S
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'dashboard'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('guidelines')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'guidelines'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Guidelines
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'resources'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Resources
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Notice Board - Left Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-xl mr-2">📢</span>
                  Notice Board
                </h2>
              </div>
              <div className="p-4 space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="border-l-4 border-indigo-500 pl-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                          {announcement.title}
                        </h3>
                        <p className="text-xs text-gray-600 mb-2">
                          {announcement.content}
                        </p>
                        <span className="text-xs text-gray-400">{announcement.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Embedded Google Doc placeholder */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <span className="text-2xl mb-2 block">📄</span>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Live Updates</h3>
                    <p className="text-xs text-gray-500 mb-3">
                      Real-time announcements from organizers
                    </p>
                    <div className="bg-white rounded border p-3 text-xs text-gray-600">
                      <p className="text-center text-gray-400">
                        Google Doc will be embedded here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competitions Grid - Center & Right */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Vasudhaiva Kutumbakam: Ancient Wisdom for a Shared Future
              </h1>
              <p className="text-gray-600">
                Choose your competition category and showcase how ancient wisdom provides solutions for modern challenges.
              </p>
            </div>

            {/* Competition Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitions.map((competition) => (
                <div
                  key={competition.id}
                  className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
                >
                  <div className={`h-24 bg-gradient-to-r ${competition.color} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                    <span className="text-4xl">{competition.icon}</span>
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {competition.title}
                    </h3>
                    <p className="text-sm text-indigo-600 font-medium mb-3">
                      {competition.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {competition.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>Deadline: {competition.deadline}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                        View Details
                      </button>
                      <button className="flex-1 border border-indigo-600 text-indigo-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-colors">
                        Submit Entry
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Quick Actions Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-4xl mb-4">📋</span>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Access guidelines, FAQs, and submission templates
                </p>
                <button className="bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                  View Resources
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">5</div>
                <div className="text-sm text-gray-600">Competition Categories</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
                <div className="text-sm text-gray-600">Creative Possibilities</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">Jan 2026</div>
                <div className="text-sm text-gray-600">Showcase at VK 4.0 Conclave</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}