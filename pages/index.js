import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('what-is-competition');

  const handleRegisterClick = () => {
    console.log("Navigate to registration page");
    alert("In Next.js, this will redirect to the registration page");
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'what-is-competition',
        'who-is-involved', 
        'prizes-opportunities',
        'competition-list',
        'about-jyot'
      ];
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'what-is-competition', label: 'What is VK Competition', icon: '🪷' },
    { id: 'who-is-involved', label: 'Spiritual Guidance & Partners', icon: '🙏' },
    { id: 'prizes-opportunities', label: 'Recognition & Opportunities', icon: '🏆' },
    { id: 'competition-list', label: 'Expression Categories', icon: '🎨' },
    { id: 'about-jyot', label: 'About Jyot & VK Movement', icon: '🕉️' }
  ];

  const Section = ({ id, children, className = "" }) => (
    <section 
      id={id} 
      className={`min-h-screen flex items-center justify-center p-8 ${className}`}
    >
      {children}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-yellow-50 to-orange-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🪷</div>
            <div className="text-orange-800 text-xl font-bold">
              VK Competitions 2025
            </div>
          </div>
          <button
            onClick={handleRegisterClick}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
          >
            Register Now 🚀
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex pt-20">
        {/* Sidebar Navigation */}
        <nav className="fixed left-0 top-20 h-screen w-80 bg-white/80 backdrop-blur-sm border-r border-orange-200 p-6 overflow-y-auto shadow-lg">
          <div className="mb-8 text-center">
            <div className="text-4xl mb-3">🕉️</div>
            <h2 className="text-lg font-semibold text-orange-800 mb-2">Vasudhaiva Kutumbakam</h2>
            <p className="text-sm text-orange-600">वसुधैव कुटुम्बकम्</p>
          </div>
          
          <div className="space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 group border ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 shadow-md border-orange-300'
                    : 'text-orange-700 hover:bg-orange-50 hover:text-orange-800 border-orange-100 hover:border-orange-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium text-sm leading-tight">{item.label}</span>
                </div>
              </button>
            ))}
          </div>
          
          {/* Sidebar Footer */}
          <div className="mt-12 p-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg border border-orange-200">
            <div className="text-center mb-3">
              <div className="text-2xl mb-2">🙏</div>
              <p className="text-orange-800 text-xs font-medium">Under the guidance of</p>
              <p className="text-orange-700 text-xs">H.H. Jainacharya Yugbhushan Suri Ji</p>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="ml-80 flex-1">
          {/* What is VK Competition Section */}
          <Section id="what-is-competition" className="bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block p-6 rounded-full bg-gradient-to-r from-orange-200 to-yellow-200 mb-8">
                  <span className="text-6xl">🌍</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-orange-800 mb-6 leading-tight">
                  Vasudhaiva Kutumbakam
                  <span className="block text-4xl md:text-5xl text-orange-600 mt-2">Ki Oar 4.0</span>
                </h1>
                <div className="mb-8">
                  <p className="text-2xl text-orange-700 mb-2 font-semibold">वसुधैव कुटुम्बकम्</p>
                  <p className="text-lg text-orange-600">"The World is One Family"</p>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">Our Sacred Mission</h3>
                <p className="text-lg text-orange-700 leading-relaxed text-center mb-6">
                  An initiative to educate, preserve, and propagate Bharat's traditional, social, and cultural construct 
                  of Vasudhaiva Kutumbakam as the most balanced way of social living. By extrapolating these rich ideals 
                  at a global level, we endeavor to foster a world order that is free, fair, and just.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/70 rounded-xl p-6 border border-orange-200 text-center shadow-md">
                  <div className="text-4xl mb-4">📿</div>
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">Ancient Wisdom</h4>
                  <p className="text-orange-700 text-sm leading-relaxed">
                    Rooted in timeless teachings from Jain, Hindu, and Buddhist scriptures, 
                    offering solutions for contemporary global challenges.
                  </p>
                </div>
                <div className="bg-white/70 rounded-xl p-6 border border-orange-200 text-center shadow-md">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">Creative Expression</h4>
                  <p className="text-orange-700 text-sm leading-relaxed">
                    Multiple artistic mediums to express the profound concept of 
                    global family through songs, poetry, stories, and visual arts.
                  </p>
                </div>
                <div className="bg-white/70 rounded-xl p-6 border border-orange-200 text-center shadow-md">
                  <div className="text-4xl mb-4">🌿</div>
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">Harmonious Living</h4>
                  <p className="text-orange-700 text-sm leading-relaxed">
                    Promoting harmony between modern lifestyle and ancient thought, 
                    fostering peace, tolerance, and global responsibility.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6 border border-orange-200 inline-block">
                  <p className="text-orange-800 font-medium mb-2">National Student Competition</p>
                  <p className="text-orange-700 text-sm">Open to college students across Bharat</p>
                </div>
              </div>
            </div>
          </Section>

          {/* About Jyot & VK Movement Section */}
          <Section id="about-jyot" className="bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">About Jyot & VK Movement</h2>
                <p className="text-xl text-orange-700">The eternal flame of wisdom lighting the path to global harmony</p>
              </div>

              <div className="space-y-10">
                {/* Jyot Initiative */}
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-3xl p-10 border border-orange-200 shadow-lg">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">🪔</div>
                    <h3 className="text-3xl font-bold text-orange-800 mb-4">Jyot - The Eternal Flame</h3>
                    <p className="text-lg text-orange-700 italic">"Ignite the light within"</p>
                  </div>
                  <p className="text-orange-700 leading-relaxed text-lg mb-6 text-center">
                    Jyot represents the sacred flame of knowledge that has been burning since time immemorial, 
                    carrying the wisdom of our ancestors forward to illuminate the path for future generations. 
                    This initiative serves as a beacon of hope, connecting ancient spiritual teachings with contemporary understanding.
                  </p>
                  <p className="text-orange-600 leading-relaxed text-center">
                    Through cultural preservation, spiritual education, and the promotion of universal brotherhood, 
                    Jyot endeavors to create a world where the principles of Vasudhaiva Kutumbakam guide humanity 
                    towards peace, prosperity, and spiritual fulfillment.
                  </p>
                </div>

                {/* VK Movement */}
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-10 border border-orange-200 shadow-lg">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">🌍</div>
                    <h3 className="text-3xl font-bold text-orange-800 mb-4">Vasudhaiva Kutumbakam Movement</h3>
                    <p className="text-lg text-orange-700 italic">"The World is One Family"</p>
                  </div>
                  <p className="text-orange-700 leading-relaxed text-lg mb-6 text-center">
                    The Vasudhaiva Kutumbakam movement represents a renaissance of ancient Indian wisdom, 
                    seeking to establish a world order based on the profound teaching that all of humanity 
                    constitutes one universal family. This movement transcends political boundaries and 
                    religious divisions to promote global harmony through spiritual understanding.
                  </p>
                  <p className="text-orange-600 leading-relaxed text-center mb-8">
                    Rooted in the Maha Upanishad's timeless wisdom, this initiative addresses contemporary 
                    global challenges through the lens of ancient philosophy, offering solutions based on 
                    compassion, unity, and shared responsibility for our collective future.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-white/60 rounded-2xl p-6 border border-orange-200">
                        <div className="text-3xl mb-3">🌸</div>
                        <h4 className="text-lg font-bold text-orange-800 mb-2">Cultural Renaissance</h4>
                        <p className="text-orange-700 text-sm">Reviving and preserving India's spiritual heritage for global benefit</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/60 rounded-2xl p-6 border border-orange-200">
                        <div className="text-3xl mb-3">🤝</div>
                        <h4 className="text-lg font-bold text-orange-800 mb-2">Global Unity</h4>
                        <p className="text-orange-700 text-sm">Fostering brotherhood across nations through shared spiritual values</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/60 rounded-2xl p-6 border border-orange-200">
                        <div className="text-3xl mb-3">🕊️</div>
                        <h4 className="text-lg font-bold text-orange-800 mb-2">World Peace</h4>
                        <p className="text-orange-700 text-sm">Creating sustainable peace through ancient wisdom and modern application</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Call to Action */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-orange-100 via-yellow-100 to-orange-100 rounded-2xl p-10 border-2 border-orange-300 shadow-xl">
                    <div className="text-5xl mb-6">🙏</div>
                    <h3 className="text-3xl font-bold text-orange-800 mb-6">Join the Sacred Journey</h3>
                    <p className="text-xl text-orange-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                      Become part of a movement that transcends individual achievements to contribute 
                      to humanity's collective spiritual evolution. Your creative expression can be 
                      the bridge that connects ancient wisdom with modern understanding.
                    </p>
                    <button
                      onClick={handleRegisterClick}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      Begin Your Sacred Expression 🕉️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </main>
      </div>

      {/* Footer */}
      <footer className="ml-80 bg-gradient-to-r from-orange-800 to-red-800 text-white">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">🪷</div>
              <h3 className="text-xl font-bold mb-4">Spiritual Guidance</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Under the blessed guidance of H.H. Jainacharya Yugbhushan Suri Ji, 
                79th Successor of Tirthankar Shri Mahavir Swami
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-4">Sacred Connect</h3>
              <p className="text-orange-100 text-sm">
                vkcompetition@jyotinitiative.org
              </p>
              <p className="text-orange-100 text-sm">
                +91 98765 43210
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-4">Follow the Movement</h3>
              <div className="flex justify-center space-x-4">
                <div className="bg-orange-700 p-2 rounded-lg">📱</div>
                <div className="bg-orange-700 p-2 rounded-lg">💻</div>
                <div className="bg-orange-700 p-2 rounded-lg">📺</div>
              </div>
            </div>
          </div>
          <div className="border-t border-orange-600 mt-8 pt-8 text-center">
            <p className="text-orange-200 text-sm">
              © 2025 Vasudhaiva Kutumbakam Ki Oar 4.0 | A Jyot Initiative | 
              <span className="font-semibold"> वसुधैव कुटुम्बकम् - The World is One Family</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}