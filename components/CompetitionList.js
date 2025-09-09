// components/CompetitionList.js
import Link from 'next/link';
import { competitions } from '../data/competitions';

export default function CompetitionList() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Active Competitions
          </h2>
        </div>

        {/* Vertically Stacked Competition Cards */}
        <div className="space-y-8">
          {competitions.map((competition) => (
            <div
              key={competition.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left side - Competition Info */}
                <div className="flex-1 p-8">
                  <div className="flex items-start mb-6">
                    <div className="text-5xl mr-6">{competition.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h3 className="text-2xl font-bold text-gray-900 mr-4">
                          {competition.title}
                        </h3>
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-600">
                          #{competition.id}
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {competition.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500">
                      <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">Deadline: {competition.deadline || 'Ongoing'}</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Action Button */}
                <div className="lg:w-64 p-8 bg-gray-50 flex items-center justify-center">
                  <Link href={`/competitions/${competition.id}`} className="w-full">
                    <button className={`w-full inline-flex items-center justify-center px-6 py-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r ${competition.color} hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]`}>
                      <span className="mr-2">View Details</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Compete?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of creators using AI to push the boundaries of creativity. 
              Select a competition above and start your journey today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
              <Link href="/about" className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}