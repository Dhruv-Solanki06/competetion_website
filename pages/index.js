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
        <div className="bg-white shadow-2xl rounded-3xl p-10 w-full relative border border-gray-100">
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