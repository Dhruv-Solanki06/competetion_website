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

          {/* Spiritual Guidance & Partners Section */}
          <Section id="who-is-involved" className="bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">Spiritual Guidance & Partners</h2>
                <p className="text-xl text-orange-700">Under divine guidance with academic excellence</p>
              </div>
              
              {/* Spiritual Guide */}
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 mb-8 border border-orange-200 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🙏</div>
                  <h3 className="text-2xl font-bold text-orange-800 mb-3">Under the Blessed Guidance of</h3>
                  <h4 className="text-xl font-semibold text-orange-700 mb-2">
                    His Holiness Jainacharya Yugbhushan Suri Ji
                  </h4>
                  <p className="text-orange-600 text-sm">79th Successor of Tirthankar Shri Mahavir Swami</p>
                </div>
                <p className="text-orange-700 leading-relaxed text-center max-w-3xl mx-auto">
                  The spiritual cornerstone of the Vasudhaiva Kutumbakam movement, providing divine wisdom and 
                  philosophical guidance that bridges ancient teachings with contemporary understanding.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-md">
                  <div className="text-4xl mb-4">🏫</div>
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Lead Organizer</h3>
                  <h4 className="text-lg font-semibold text-orange-700 mb-3">Hiranandani Foundation School</h4>
                  <p className="text-orange-600 leading-relaxed text-sm">
                    Pioneering educational institution committed to fostering innovative thinking and cultural 
                    preservation among students, leading the initiative to bring ancient wisdom into modern education.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-md">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Academic Partner</h3>
                  <h4 className="text-lg font-semibold text-orange-700 mb-3">Tata Institute of Social Sciences (TISS)</h4>
                  <p className="text-orange-600 leading-relaxed text-sm">
                    Premier institution providing academic rigor and research excellence to the initiative, 
                    ensuring scholarly depth in the exploration of Vasudhaiva Kutumbakam principles.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-md">
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Concept Partner</h3>
                  <h4 className="text-lg font-semibold text-orange-700 mb-3">Jyot Initiative</h4>
                  <p className="text-orange-600 leading-relaxed text-sm">
                    The visionary force behind spreading the eternal light of wisdom, dedicated to cultural 
                    preservation and the global propagation of Vasudhaiva Kutumbakam principles.
                  </p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-md">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Knowledge Partners</h3>
                  <h4 className="text-lg font-semibold text-orange-700 mb-3">Research Institutes & Universities</h4>
                  <p className="text-orange-600 leading-relaxed text-sm">
                    Including Vivekananda International Foundation and partner universities providing research 
                    support and scholarly validation to the initiative.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Recognition & Opportunities Section */}
          <Section id="prizes-opportunities" className="bg-gradient-to-br from-orange-50 to-red-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">Recognition & Opportunities</h2>
                <p className="text-xl text-orange-700">Honoring creativity and spreading wisdom</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 border border-orange-300 text-center shadow-lg">
                  <div className="text-5xl mb-6">🏆</div>
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Grand Champions</h3>
                  <div className="bg-white/60 rounded-lg p-4 mb-4">
                    <p className="text-2xl font-bold text-orange-700 mb-2">₹1,00,000</p>
                    <p className="text-orange-600 text-sm">Cash Recognition</p>
                  </div>
                  <ul className="text-orange-700 text-sm space-y-2 text-left">
                    <li>• Featured at VK 4.0 Conclave, Mumbai</li>
                    <li>• Scholarship opportunities</li>
                    <li>• Mentorship with spiritual leaders</li>
                    <li>• National media coverage</li>
                    <li>• Certificate of Excellence</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 border border-orange-300 text-center shadow-lg">
                  <div className="text-5xl mb-6">🥈</div>
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Category Winners</h3>
                  <div className="bg-white/60 rounded-lg p-4 mb-4">
                    <p className="text-2xl font-bold text-orange-700 mb-2">₹50,000</p>
                    <p className="text-orange-600 text-sm">Cash Recognition</p>
                  </div>
                  <ul className="text-orange-700 text-sm space-y-2 text-left">
                    <li>• Participation in VK 4.0 Conclave</li>
                    <li>• Industry connections</li>
                    <li>• Cultural publication features</li>
                    <li>• Networking opportunities</li>
                    <li>• Merit certificate</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-8 border border-orange-300 text-center shadow-lg">
                  <div className="text-5xl mb-6">🌟</div>
                  <h3 className="text-xl font-bold text-orange-800 mb-4">All Participants</h3>
                  <div className="bg-white/60 rounded-lg p-4 mb-4">
                    <p className="text-lg font-bold text-orange-700 mb-2">Cultural Recognition</p>
                    <p className="text-orange-600 text-sm">Lifetime Achievement</p>
                  </div>
                  <ul className="text-orange-700 text-sm space-y-2 text-left">
                    <li>• Certificate of Participation</li>
                    <li>• Access to spiritual workshops</li>
                    <li>• Cultural networking platform</li>
                    <li>• Digital portfolio inclusion</li>
                    <li>• Community recognition</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-lg">
                <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">VK 4.0 Conclave - January 2026, Mumbai</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🎭</div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Cultural Showcase</h4>
                      <p className="text-orange-700 text-sm">Present your work to spiritual leaders, academicians, and cultural enthusiasts from across the nation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🧘</div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Spiritual Discourse</h4>
                      <p className="text-orange-700 text-sm">Participate in philosophical discussions and spiritual guidance sessions with renowned Acharyas.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🤝</div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Community Building</h4>
                      <p className="text-orange-700 text-sm">Connect with like-minded individuals working towards global harmony and cultural preservation.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">📚</div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">Knowledge Exchange</h4>
                      <p className="text-orange-700 text-sm">Access workshops, seminars, and interactive sessions on ancient wisdom and modern applications.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Expression Categories Section */}
          <Section id="competition-list" className="bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">Expression Categories</h2>
                <p className="text-xl text-orange-700">Choose your sacred medium of expression</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {[
                  {
                    icon: '🎵',
                    title: 'Devotional Music & Songs',
                    description: 'Original compositions or adaptations expressing the essence of global unity through devotional music',
                    themes: ['Bhajans and Kirtans', 'Fusion with traditional ragas', 'Modern interpretations', 'Multi-lingual expressions'],
                    color: 'from-orange-200 to-yellow-200'
                  },
                  {
                    icon: '📿',
                    title: 'Spiritual Poetry & Verses',
                    description: 'Poetic expressions inspired by ancient scriptures, reflecting the wisdom of Vasudhaiva Kutumbakam',
                    themes: ['Sanskrit slokas interpretation', 'Contemporary spiritual poetry', 'Scriptural adaptations', 'Philosophical reflections'],
                    color: 'from-red-200 to-orange-200'
                  },
                  {
                    icon: '🎭',
                    title: 'Digital Storytelling',
                    description: 'Creative videos and reels using modern technology to narrate timeless wisdom from ancient texts',
                    themes: ['Animated stories from epics', 'Modern-day applications', 'AI-assisted narratives', 'Cultural preservation'],
                    color: 'from-yellow-200 to-orange-200'
                  },
                  {
                    icon: '💫',
                    title: 'Wisdom in Words',
                    description: 'Powerful punchlines and taglines that communicate profound ancient teachings to modern audiences',
                    themes: ['Inspirational quotes', 'Social media content', 'Motivational messages', 'Cultural slogans'],
                    color: 'from-orange-200 to-red-200'
                  },
                  {
                    icon: '📚',
                    title: 'Sacred Storytelling',
                    description: 'Narratives from Jain, Hindu, and Buddhist traditions that exemplify the principle of global family',
                    themes: ['Epic retellings', 'Folklore adaptations', 'Moral stories', 'Philosophical tales'],
                    color: 'from-pink-200 to-orange-200'
                  }
                ].map((category, index) => (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-orange-200 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-orange-800 mb-3">{category.title}</h4>
                    <p className="text-orange-700 text-sm leading-relaxed mb-4">{category.description}</p>
                    <div className="space-y-1">
                      {category.themes.map((theme, i) => (
                        <div key={i} className="flex items-center text-orange-600 text-xs">
                          <span className="w-1 h-1 bg-orange-400 rounded-full mr-2"></span>
                          {theme}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Registration CTA */}
                <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-xl p-6 flex flex-col items-center justify-center text-center text-white shadow-lg">
                  <span className="text-4xl mb-4">🕉️</span>
                  <h4 className="text-xl font-bold mb-2">Begin Your Sacred Journey</h4>
                  <p className="text-white/90 text-sm mb-4 max-w-xs">
                    Join thousands of students in expressing the divine wisdom of Vasudhaiva Kutumbakam
                  </p>
                  <button
                    onClick={handleRegisterClick}
                    className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-md"
                  >
                    Register Now
                  </button>
                </div>
              </div>

              {/* Competition Sub-themes */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-lg">
                <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">Sacred Sub-Themes for Inspiration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Ancient Joint Family Principles as Global Guarantees',
                    'Harmony Between Modern Lifestyle and Ancient Thought',
                    'Stories from Indian Scriptures (Jain, Hindu, Buddhist)',
                    'Relevance of Vasudhaiva Kutumbakam in the 21st Century',
                    'Ancient Wisdom as Key to Free, Fair and Just World Order',
                    'Spiritual Solutions to Contemporary Global Challenges'
                  ].map((theme, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-200"
                    >
                      <div className="flex items-start">
                        <div className="bg-orange-300 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs mr-3 flex-shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <p className="text-orange-800 text-sm leading-relaxed">{theme}</p>
                      </div>
                    </div>
                  ))}
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
                  <div className="max-w-none">
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
                </div>

                {/* VK Movement */}
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-10 border border-orange-200 shadow-lg">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">🌍</div>
                    <h3 className="text-3xl font-bold text-orange-800 mb-4">Vasudhaiva Kutumbakam Movement</h3>
                    <p className="text-lg text-orange-700 italic">"The World is One Family"</p>
                  <<div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-10 border border-orange-200 shadow-lg">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">🌍</div>
                    <h3 className="text-3xl font-bold text-orange-800 mb-4">
                      Vasudhaiva Kutumbakam Movement
                    </h3>
                    <p className="text-lg text-orange-700 italic">
                      "The World is One Family"
                    </p>
                  </div>
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

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-md">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">🎯</div>
                      <h3 className="text-2xl font-bold text-orange-800">Sacred Mission</h3>
                    </div>
                    <p className="text-orange-700 leading-relaxed text-center mb-6">
                      To educate and inspire the younger generation about the timeless principles of 
                      Vasudhaiva Kutumbakam, enabling them to become ambassadors of peace and cultural 
                      harmony in an increasingly connected world.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-orange-600 text-sm">
                        <span className="text-orange-400 mr-3">🌟</span>
                        Cultural preservation through creative expression
                      </div>
                      <div className="flex items-center text-orange-600 text-sm">
                        <span className="text-orange-400 mr-3">🌟</span>
                        Bridge ancient wisdom with contemporary challenges
                      </div>
                      <div className="flex items-center text-orange-600 text-sm">
                        <span className="text-orange-400 mr-3">🌟</span>
                        Foster global consciousness among youth
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-orange-200 shadow-md">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">✨</div>
                      <h3 className="text-2xl font-bold text-orange-800">Divine Vision</h3>
                    </div>
                    <p className="text-orange-700 leading-relaxed text-center mb-6">
                      To establish a world where the sacred principles of universal brotherhood guide 
                      international relations, where diversity is celebrated as strength, and where 
                      ancient spiritual wisdom illuminates the path to collective prosperity.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-orange-600 text-sm">
                        <span className="text-orange-400 mr-3">🌟</span>
                        Global adoption of Vasudhaiva Kutumbakam principles
                      </div>
                      <div className="flex items-center text-orange-600 text-sm">
                        <span className="text-orange-400 mr-3">🌟</span>
                        Interfaith harmony and cultural understanding
                      </div>
                      <div className="flex items-center text-orange-600 text-sm">
                        <span className="text-orange-400 mr-3">🌟</span>
                        Sustainable peace through spiritual unity
                      </div>
                    </div>
                  </div>
                </div>

                {/* Impact & Legacy */}
                <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-2xl p-8 border border-orange-200 shadow-lg">
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">🏛️</div>
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">Legacy of Previous Conclaves</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="bg-white/60 rounded-xl p-4 border border-orange-200">
                        <h4 className="text-lg font-bold text-orange-800 mb-2">VK 1.0 - 2021</h4>
                        <p className="text-orange-700 text-sm">Foundation laying - Digital awakening during pandemic</p>
                        <p className="text-orange-600 text-xs mt-2">500+ participants across 15 states</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/60 rounded-xl p-4 border border-orange-200">
                        <h4 className="text-lg font-bold text-orange-800 mb-2">VK 2.0 - 2022</h4>
                        <p className="text-orange-700 text-sm">Expansion phase - National recognition</p>
                        <p className="text-orange-600 text-xs mt-2">1,200+ participants, media coverage</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/60 rounded-xl p-4 border border-orange-200">
                        <h4 className="text-lg font-bold text-orange-800 mb-2">VK 3.0 - 2024</h4>
                        <p className="text-orange-700 text-sm">Consolidation - International attention</p>
                        <p className="text-orange-600 text-xs mt-2">2,500+ participants, global partnerships</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-orange-700 text-center leading-relaxed">
                    Each conclave has witnessed growing participation and deeper engagement with the sacred 
                    principles of Vasudhaiva Kutumbakam, creating a network of young ambassadors committed 
                    to global harmony and cultural preservation.
                  </p>
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
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <button
                        onClick={handleRegisterClick}
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2"
                      >
                        <span>Begin Your Sacred Expression</span>
                        <span>🕉️</span>
                      </button>
                      <div className="text-orange-600 text-sm">
                        <p>Registration closes: March 31, 2025</p>
                        <p>Submissions due: April 30, 2025</p>
                      </div>
                    </div>
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