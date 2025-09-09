// components/SidebarNav.js
import { useState, useEffect } from 'react';

export default function SidebarNav({ sections }) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -70% 0%',
        threshold: 0.1,
      }
    );

    // Observe all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Navigation
        </h3>
        
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-700 group ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500 shadow-sm'
                  : 'text-gray-600 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-200 ${
                  activeSection === section.id 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300 group-hover:bg-blue-400'
                }`} />
                <span className="truncate">{section.title}</span>
              </div>
            </button>
          ))}
        </nav>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Click to navigate
          </div>
        </div>
      </div>
    </div>
  );
}