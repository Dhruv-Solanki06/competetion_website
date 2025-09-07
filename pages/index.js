import { useState, useEffect } from 'react';
import Link from "next/link";
import jyotimage from '../public/jyot_logo.webp';

export default function Home() {
  const [activeSection, setActiveSection] = useState('what-is-competition');
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
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

  // Registration Component
  const Register = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      institution: "",
      competition: ""
    });
  
    const handleInputChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };
  
    const handleSubmit = () => {
      if (!formData.name || !formData.email || !formData.phone || !formData.institution || !formData.competition) {
        alert("Please fill all fields!");
        return;
      }
      console.log("Form submitted:", formData);
      alert("Registration successful! ✅\nThank you for joining the VK Competition!");
      setShowRegister(false);
      setFormData({ name: "", email: "", phone: "", institution: "", competition: "" });
    };
  
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50 backdrop-blur-sm">
        <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full relative border border-gray-100">
          <button
            onClick={() => setShowRegister(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-3xl font-light transition-colors"
          >
            ×
          </button>
          
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <div className="text-white font-bold text-lg">VK</div>
            </div>
            <h1 className="text-3xl font-bold text-red-700 mb-2">
              Sacred Expression Registration
            </h1>
            <p className="text-gray-600">Join the global family movement</p>
          </div>
  
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full border-2 border-red-200 rounded-xl p-4 focus:outline-none focus:border-red-500 transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>
  
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full border-2 border-red-200 rounded-xl p-4 focus:outline-none focus:border-red-500 transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>
  
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full border-2 border-red-200 rounded-xl p-4 focus:outline-none focus:border-red-500 transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>
  
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Institution / College</label>
              <input
                type="text"
                placeholder="Enter your institution or college name"
                value={formData.institution}
                onChange={(e) => handleInputChange('institution', e.target.value)}
                className="w-full border-2 border-red-200 rounded-xl p-4 focus:outline-none focus:border-red-500 transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Competition Category</label>
              <select
                value={formData.competition}
                onChange={(e) => handleInputChange('competition', e.target.value)}
                className="w-full border-2 border-red-200 rounded-xl p-4 focus:outline-none focus:border-red-500 transition-colors text-gray-700 bg-white"
              >
                <option value="">Choose your expression medium</option>
                <option value="poetry">Poetry & Literature</option>
                <option value="music">Music & Songs</option>
                <option value="visual-arts">Visual Arts & Painting</option>
                <option value="storytelling">Storytelling & Narrative</option>
                <option value="digital-media">Digital Media & Film</option>
                <option value="photography">Photography</option>
                <option value="dance">Dance & Performance</option>
              </select>
            </div>
  
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Begin Sacred Expression Journey
              </button>
            </div>
  
            <div className="text-center">
              <p className="text-xs text-gray-500">
                By registering, you agree to honor the principles of Vasudhaiva Kutumbakam
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Return statement for the main component
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {showRegister && <Register />}
      
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow-sm z-40 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={jyotimage} alt="Jyot Logo" className="h-10 w-10" />
              <div className="text-2xl font-bold text-red-700">VK Competition</div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'what-is-competition', label: 'Competition' },
                { id: 'who-is-involved', label: 'Participants' },
                { id: 'prizes-opportunities', label: 'Prizes' },
                { id: 'competition-list', label: 'Categories' },
                { id: 'about-jyot', label: 'About' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={handleRegisterClick}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Register Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 mb-4">
              Vasudhaiva Kutumbakam
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              The World is One Family - Express the universal bond through your sacred art
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleRegisterClick}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Begin Your Sacred Expression
            </button>
            <button
              onClick={() => scrollToSection('what-is-competition')}
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* What is Competition Section */}
      <section id="what-is-competition" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
              What is the VK Competition?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              A global celebration of unity through creative expression, where artists from every corner of the world 
              come together to showcase the beautiful principle that The World is One Family.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Unity",
                description: "Connecting hearts across borders through the universal language of art",
                icon: "🌍"
              },
              {
                title: "Sacred Expression",
                description: "Honoring the divine connection that binds all humanity together",
                icon: "🎨"
              },
              {
                title: "Cultural Celebration",
                description: "Embracing diversity while celebrating our shared human experience",
                icon: "🎭"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-red-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-red-700 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is Involved Section */}
      <section id="who-is-involved" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
              Who Can Participate?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              The VK Competition welcomes all souls who believe in the power of unity and wish to express 
              the sacred bond that connects humanity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { category: "Students", description: "Young minds shaping tomorrow", icon: "🎓" },
              { category: "Artists", description: "Creative souls expressing truth", icon: "🎨" },
              { category: "Writers", description: "Wordsmiths weaving wisdom", icon: "✍️" },
              { category: "Everyone", description: "All hearts that beat as one", icon: "❤️" }
            ].map((participant, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 text-center border border-red-200">
                <div className="text-3xl mb-3">{participant.icon}</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">{participant.category}</h3>
                <p className="text-gray-600 text-sm">{participant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes-opportunities" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
              Prizes & Recognition
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Beyond material rewards, gain recognition as an ambassador of global unity and universal love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { place: "1st Prize", amount: "₹50,000", description: "Grand Champion of Unity", color: "from-yellow-400 to-yellow-600" },
              { place: "2nd Prize", amount: "₹30,000", description: "Excellence in Expression", color: "from-gray-300 to-gray-500" },
              { place: "3rd Prize", amount: "₹20,000", description: "Outstanding Participation", color: "from-orange-400 to-orange-600" }
            ].map((prize, index) => (
              <div key={index} className={`bg-gradient-to-br ${prize.color} rounded-2xl p-8 text-center text-white shadow-xl`}>
                <h3 className="text-2xl font-bold mb-2">{prize.place}</h3>
                <div className="text-4xl font-bold mb-2">{prize.amount}</div>
                <p className="text-lg opacity-90">{prize.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Categories Section */}
      <section id="competition-list" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
              Expression Categories
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Choose your medium to express the sacred truth of universal brotherhood.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Poetry & Literature", icon: "📝", description: "Words that unite hearts" },
              { category: "Music & Songs", icon: "🎵", description: "Melodies of universal love" },
              { category: "Visual Arts & Painting", icon: "🎨", description: "Colors of global harmony" },
              { category: "Storytelling & Narrative", icon: "📚", description: "Tales of shared humanity" },
              { category: "Digital Media & Film", icon: "🎬", description: "Visual stories of unity" },
              { category: "Photography", icon: "📸", description: "Capturing moments of connection" },
              { category: "Dance & Performance", icon: "💃", description: "Movement expressing oneness" }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-red-100 hover:border-red-300">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">{category.category}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <button 
                  onClick={handleRegisterClick}
                  className="text-red-600 hover:text-red-800 font-medium text-sm"
                >
                  Register for this category →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Jyot Section */}
      <section id="about-jyot" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
              About Jyot
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Jyot - meaning light - is our beacon guiding humanity toward the realization that 
              despite our differences, we are all part of one universal family.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-red-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/3">
                <img src={jyotimage} alt="Jyot Logo" className="w-48 h-48 mx-auto rounded-full shadow-lg" />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-3xl font-bold text-red-700 mb-6">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To illuminate the path toward global unity through the power of creative expression. 
                  We believe that art transcends all boundaries - cultural, linguistic, religious, and geographical.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Through the VK Competition, we invite artists worldwide to be ambassadors of the ancient 
                  wisdom: Vasudhaiva Kutumbakam - The World is One Family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-3xl font-bold mb-2">VK Competition</div>
            <p className="text-red-200">Uniting the world through sacred expression</p>
          </div>
          
          <div className="border-t border-red-700 pt-8">
            <p className="text-red-200">
              © 2024 Jyot Organization. All rights reserved. | 
              <span className="ml-2">वसुधैव कुटुम्बकम् - The World is One Family</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}