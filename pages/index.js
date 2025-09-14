import { useState, useEffect } from 'react';
import Link from "next/link";
import jyotimage from '../public/jyot_logo.webp';
import Image from 'next/image';
import backgroundImage from "@/public/map.jpg";
import { useRouter } from 'next/router';
import NotificationBanner from '../components/NotificationBanner';


export default function Home() {
  const [activeSection, setActiveSection] = useState('what-is-competition');
  const [showRegister, setShowRegister] = useState(false);
  const router = useRouter();

  const handleRegisterClick = () => {
    // setShowRegister(true);
    router.push("/register")
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
              Registration
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
                Begin your Journey
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
              <Image src={jyotimage} alt="Jyot Logo" className="h-10 w-10" />
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
      <section className="relative z-[1] min-h-screen flex items-center overflow-hidden py-8">
        {/* /* Background Image with Overlay */}
          <div className="absolute z-[2] inset-0">
            <Image
              src={backgroundImage}
              alt="VK Competition Hero"
              fill
              priority
              className="object-cover object-center brightness-55 contrast-180"
              sizes="100vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 via-orange-800/65 to-red-800/75"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          {/* Content */}
        <div className="relative z-[3] w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white space-y-8">
              
              {/* Decorative Element */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-2 border-orange-300/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-orange-200/50 flex items-center justify-center">
                      <div className="w-3 h-3 bg-gradient-to-br from-orange-200 to-red-300 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  {/* Radiating lines */}
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-px h-8 bg-gradient-to-t from-orange-200/60 to-transparent"
                      style={{
                        transform: `rotate(${i * 45}deg)`,
                        transformOrigin: 'center 48px',
                        top: '50%',
                        left: '50%',
                        marginLeft: '-0.5px',
                        marginTop: '-48px'
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <div className="inline-flex items-center mb-6">
                  <div className="h-px w-12 bg-orange-400/60"></div>
                  <div className="mx-4 w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span className="text-orange-200 text-sm font-light tracking-[0.2em] uppercase">
                  Global Celebration of Unity through Creative Expression
                  </span>
                  <div className="mx-4 w-1 h-1 bg-orange-400 rounded-full"></div>
                  <div className="h-px w-12 bg-orange-400/60"></div>
                </div>
                
                <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span class="block text-white/95 mb-2 ">VASUDHAIVA KUTUMBAKAM
                  </span>
                  <span></span>
                </h1>
                
                <p className="text-xl md:text-2xl text-orange-100/90 font-light max-w-3xl mx-auto leading-relaxed mt-8">
                  The World is One Family — Unite hearts across borders through the universal language of art
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <button
                  onClick={handleRegisterClick}
                  className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 text-lg"
                >
                  <span className="mr-2">Begin your journey</span>
                  <svg className="inline w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                
                <button
                  onClick={() => scrollToSection('what-is-competition')}
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
                >
                  <span className="mr-2">Explore Competition</span>
                  <svg className="inline w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
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
                title: "Technological Creativity",
                description: "Harnessing AI to amplify human imagination and storytelling",
                icon: "🤖"
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

          {/* Single Prize Pool Banner */}
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl shadow-2xl p-10 text-center text-white">
            <h3 className="text-5xl md:text-6xl font-extrabold mb-4">
              Prize Pool of ₹3,00,000
            </h3>
            <p className="text-lg opacity-90">
              And other exciting opportunities to showcase your work on global platforms 
            </p>
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
              { category: "AI Reel Making", icon: "🎬", description: "Craft 1-3 minutes stories using AI tools that bring global unity and creativity to life." },
              { category: "Lextoons", icon: "🖋️", description: "Turn words into witty AI-generated cartoons that highlight values and social issues." },
              { category: "Political Toons", icon: "🏛️", description: "Use satire and AI artistry to creatively capture political ideas and principles." },
              { category: "Creative Expression", icon: "✨", description: "An open category for unique AI-driven 5-7 pagees script aligned with Vasudhaiva Kutumbakam." }              
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
      <section id="about-jyot" className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Jyot Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/85 via-orange-800/80 to-red-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div>
                <div className="inline-flex items-center mb-4">
                  <div className="h-px w-8 bg-orange-400"></div>
                  <div className="mx-3 w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span className="text-orange-300 text-sm font-light tracking-widest uppercase">
                    Inspired by
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
                  <span className="text-white">Jyot</span>
                </h2>
                
                <p className="text-orange-100 text-lg md:text-xl font-light leading-relaxed mb-6">
                  <em className="text-orange-200">Jyot</em> — meaning light — guides humanity 
                  toward realizing we are one universal family.
                </p>
              </div>
              
              {/* Mission Statement */}
              <div className="space-y-4">
                <p className="text-white/90 font-light leading-relaxed">
                Founded in 2009, Jyot is dedicated to transforming learning into meaningful action. We design programs that mix scientific temper with spiritual insight so that knowledge becomes usable, ethical, and empowering. Guided by <strong>H.H. Spiritual Sovereign Jainacharya Yugbhushansuriji Maharaja</strong>, whose work spans scripture, science and civic thought, Jyot brings together young innovators and experienced mentors to run workshops, publications, and community initiatives.
                </p>
                
                
                <p className="text-white/90 font-light leading-relaxed">
                  We invite artists worldwide to embody 
                  <span className="text-orange-200 italic font-normal mx-1">
                    Vasudhaiva Kutumbakam
                  </span> 
                  — The World is One Family.
                </p>
              </div>
              
              {/* CTA */}
              <div className="pt-4">
                <a
                  href="https://jyot.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <span className="font-light">Discover More</span>
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

            </div>
            
            {/* Right Visual Element */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Outer ring */}
                <div className="w-48 h-48 rounded-full border border-orange-300/30 flex items-center justify-center">
                  {/* Middle ring */}
                  <div className="w-32 h-32 rounded-full border border-orange-200/40 flex items-center justify-center">
                    {/* Inner ring */}
                    <div className="w-16 h-16 rounded-full border border-orange-100/50 flex items-center justify-center">
                      {/* Center light */}
                      <div className="w-4 h-4 bg-gradient-to-br from-orange-200 to-red-300 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
                
                {/* Radiating lines */}
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-px h-16 bg-gradient-to-t from-orange-200/60 to-transparent"
                    style={{
                      transform: `rotate(${i * 30}deg)`,
                      transformOrigin: 'center 96px',
                      top: '50%',
                      left: '50%',
                      marginLeft: '-0.5px',
                      marginTop: '-96px'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Quote - Mobile Optimized */}
          <div className="absolute bottom-6 left-4 right-4 text-center lg:bottom-8 lg:left-8 lg:right-8">
            <p className="text-orange-100/80 text-sm md:text-base font-light italic">
              In diversity we find strength, in unity we discover light
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="text-3xl font-bold mb-2">VK Competition</div>
            <p className="text-red-200">Uniting the world through creative expression</p>
          </div>
          
          <div className="border-t border-red-700 pt-8">
            <p className="text-red-200">
              © 2024 Host Organization. All rights reserved. | 
              <span className="ml-2">वसुधैव कुटुम्बकम् - The World is One Family</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}