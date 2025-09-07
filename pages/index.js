import { useState, useEffect } from 'react';
import Link from "next/link";


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
    });
  
    const handleInputChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };
  
    const handleSubmit = () => {
      if (!formData.name || !formData.email || !formData.phone || !formData.institution) {
        alert("Please fill all fields!");
        return;
      }
      console.log("Form submitted:", formData);
      alert("Registration successful! ✅\nThank you for joining the VK Competition!");
      setShowRegister(false);
      setFormData({ name: "", email: "", phone: "", institution: "" });
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
  

    const handleInputChange = (field, value) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
      if (!formData.name || !formData.email || !formData.competition) {
        alert("Please fill all fields!");
        return;
      }
      console.log("Form submitted:", formData);
      alert("Registration successful! ✅\nThank you for joining the VK Competition!");
      setShowRegister(false);
      setFormData({ name: "", email: "", competition: "" });
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

  return (
    <div className="min-h-screen bg-white">
      

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg">
                <div className="text-white font-bold text-sm">VK</div>
              </div>
              <div>
                <div className="text-gray-900 text-xl font-bold">VK Competitions 2025</div>
                <div className="text-xs text-gray-500 font-medium">VASUDHAIVA KUTUMBAKAM</div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">ABOUT</a>
              <a href="#categories" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">CATEGORIES</a>
              <a href="#guidelines" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">GUIDELINES</a>
              <a href="#prizes" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">PRIZES</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium text-sm transition-colors">CONTACT</a>
            </nav>

            <Link href="/register">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                REGISTER NOW
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            {/* Sanskrit Header */}
            <div className="mb-8">
              <div className="inline-block border-t-2 border-b-2 border-red-600 py-3 px-6 mb-6">
                <p className="text-2xl font-bold text-red-700">॥ सर्वेषां हिते आत्मकः हितेषु ॥</p>
              </div>
            </div>
            
            {/* Main Title */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-black text-red-700 mb-4 tracking-tight">
                VASUDHAIVA
              </h1>
              <h1 className="text-6xl md:text-8xl font-black text-red-700 mb-6 tracking-tight">
                KUTUMBAKAM
              </h1>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-4xl md:text-6xl font-black text-amber-600">KI OAR</div>
                <div className="bg-amber-600 text-white px-6 py-3 rounded-full">
                  <span className="text-3xl md:text-5xl font-black">4.0</span>
                </div>
              </div>
              <p className="text-xl text-amber-700 font-semibold mb-2">SANKRAMAN KAAL</p>
              <p className="text-lg text-gray-600 font-medium">JANUARY 2026</p>
            </div>

            {/* Subtitle */}
            <div className="mb-12">
              <p className="text-2xl text-blue-700 font-bold mb-3">वसुधैव कुटुम्बकम्</p>
              <p className="text-xl text-gray-700 font-medium">{'"The World is One Family"'}</p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Sacred Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
                Jyot is thrilled to unveil the <strong>4th edition</strong> of its flagship conclave series, Vasudhaiva Kutumbakam ki Oar, 
                which is set to take place in <strong>January 2026</strong>, spanning a week in the bustling financial capital of Mumbai. 
                We also envision an immersive and interactive exhibition that showcases the confluence of ancient Indian wisdom and 
                modern global perspectives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                Building on the remarkable successes of our previous three conclaves, this edition promises a grander scale, broader 
                reach, and deeper impact. The theme for this edition of the conclave is <strong>Sankraman Kaal</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Competition Highlights</h2>
            <p className="text-xl text-gray-600">Explore the pillars of our global family movement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 h-full border border-red-200 group-hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl text-white">📿</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ancient Wisdom</h3>
                <p className="text-gray-700 leading-relaxed">
                  Rooted in timeless teachings from Jain, Hindu, and Buddhist scriptures, offering solutions 
                  for contemporary global challenges through spiritual understanding.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 h-full border border-amber-200 group-hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl text-white">🎨</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Creative Expression</h3>
                <p className="text-gray-700 leading-relaxed">
                  Multiple artistic mediums to express the profound concept of global family through songs, 
                  poetry, stories, and visual arts in diverse categories.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-full border border-green-200 group-hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl text-white">🌿</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Promoting harmony between modern lifestyle and ancient thought, fostering peace, 
                  tolerance, and global responsibility for sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-jyot" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Jyot & VK Movement</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The eternal flame of wisdom lighting the path to global harmony through ancient teachings and modern applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Jyot Initiative */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <div className="text-3xl text-white">🪔</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Jyot - The Eternal Flame</h3>
                <p className="text-amber-700 italic font-medium">{'"Ignite the light within"'}</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Jyot represents the sacred flame of knowledge that has been burning since time immemorial, 
                  carrying the wisdom of our ancestors forward to illuminate the path for future generations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through cultural preservation, spiritual education, and universal brotherhood promotion, 
                  Jyot creates a world guided by Vasudhaiva Kutumbakam principles.
                </p>
              </div>
            </div>

            {/* VK Movement */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg">
                  <div className="text-3xl text-white">🌍</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Vasudhaiva Kutumbakam Movement</h3>
                <p className="text-red-700 italic font-medium">{'"The World is One Family"'}</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  A renaissance of ancient Indian wisdom, establishing a world order based on the profound 
                  teaching that all humanity constitutes one universal family.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Rooted in Maha Upanishad&apos;s wisdom, addressing contemporary challenges through 
                  compassion, unity, and shared responsibility for our collective future.
                </p>
              </div>
            </div>
          </div>

          {/* Stats/Impact */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-red-600 mb-2">4th</div>
              <div className="text-sm text-gray-600 font-medium">Edition</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-amber-600 mb-2">2026</div>
              <div className="text-sm text-gray-600 font-medium">January</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-600 mb-2">∞</div>
              <div className="text-sm text-gray-600 font-medium">Global Impact</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-blue-600 mb-2">1</div>
              <div className="text-sm text-gray-600 font-medium">World Family</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-4xl">🙏</div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Join the Sacred Journey</h2>
            <p className="text-xl text-red-100 leading-relaxed mb-8">
              Become part of a movement that transcends individual achievements to contribute to humanity&apos;s 
              collective spiritual evolution. Your creative expression can bridge ancient wisdom with modern understanding.
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={handleRegisterClick}
              className="bg-white text-red-600 hover:bg-gray-100 px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              BEGIN YOUR SACRED EXPRESSION
            </button>
            <p className="text-red-200 text-sm">Registration opens soon • Limited spots available</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center">
                  <div className="text-white font-bold text-sm">VK</div>
                </div>
                <div>
                  <div className="text-white text-lg font-bold">Vasudhaiva Kutumbakam</div>
                  <div className="text-gray-400 text-sm">Ki Oar 4.0</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Under the blessed guidance of H.H. Jainacharya Yugbhushan Suri Ji
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white text-sm transition-colors">About</a></li>
                <li><a href="#categories" className="text-gray-300 hover:text-white text-sm transition-colors">Categories</a></li>
                <li><a href="#guidelines" className="text-gray-300 hover:text-white text-sm transition-colors">Guidelines</a></li>
                <li><a href="#prizes" className="text-gray-300 hover:text-white text-sm transition-colors">Prizes</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">vkcompetition@jyotinitiative.org</p>
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-sm">
              © 2025 Vasudhaiva Kutumbakam Ki Oar 4.0 | A Jyot Initiative | वसुधैव कुटुम्बकम् - The World is One Family
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};