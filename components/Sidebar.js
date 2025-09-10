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
    <>
      {/* Enhanced Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .nav-gradient {
          background: linear-gradient(135deg, #FF8C00, #D2691E, #CC5500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .nav-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(210, 105, 30, 0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .nav-shimmer:hover::before {
          left: 100%;
        }
      `}</style>

      <div className="lg:col-span-1">
        <div className="sticky top-8 bg-white/95 backdrop-blur-md rounded-2xl border border-orange-100/50 shadow-xl p-6 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full"></div>
          
          <div className="relative z-10">
            {/* Enhanced Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold nav-gradient">
                  Navigation
                </h3>
              </div>
              <p className="font-inter text-orange-700/70 text-sm ml-11">Explore competition sections</p>
            </div>
            
            {/* Enhanced Navigation */}
            <nav className="space-y-3">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`nav-shimmer w-full text-left p-4 rounded-xl font-inter font-medium transition-all duration-300 group relative ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-orange-100/80 to-amber-100/80 text-orange-800 border-l-4 border-orange-500 shadow-md transform translate-x-1' 
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-orange-50/60 hover:to-amber-50/60 hover:text-orange-700 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center">
                    {/* Enhanced indicator */}
                    <div className="flex items-center justify-center w-6 h-6 rounded-lg mr-4 transition-all duration-300 flex-shrink-0">
                      {activeSection === section.id ? (
                        <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full shadow-sm animate-pulse"></div>
                      ) : (
                        <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-orange-400 group-hover:w-3 group-hover:h-3 transition-all duration-300"></div>
                      )}
                    </div>
                    
                    {/* Section number */}
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center mr-3 text-xs font-bold transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-orange-100 group-hover:text-orange-600'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Section title */}
                    <span className="truncate text-sm leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                      {section.title}
                    </span>
                    
                    {/* Active indicator arrow */}
                    {activeSection === section.id && (
                      <svg className="w-4 h-4 ml-auto text-orange-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                  
                  {/* Hover effect indicator */}
                  <div className={`absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    activeSection === section.id ? 'opacity-0' : ''
                  }`}>
                    <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </nav>
            
            {/* Enhanced Footer */}
            <div className="mt-6 pt-6 border-t border-orange-100/50">
              <div className="flex items-center justify-center gap-2 text-xs text-orange-600/70 font-inter font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                <span>Click to navigate sections</span>
              </div>
              
              {/* Progress indicator */}
              <div className="mt-4">
                <div className="flex justify-between text-xs font-inter font-medium text-orange-700 mb-2">
                  <span>Progress</span>
                  <span>{sections.findIndex(s => s.id === activeSection) + 1} of {sections.length}</span>
                </div>
                <div className="w-full bg-orange-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}