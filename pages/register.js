import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import backgroundImage from "@/public/map.jpg";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Hook this up with backend / Google Sheets / Firebase
    console.log("Form submitted:", form);
    alert("Registration successful! ✅");
    // Redirect to main dashboard after successful registration
    router.push("/main");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Half - Vasudhaiva Kutumbakam Information */}
      <div className="w-1/2 relative bg-gradient-to-br from-red-900 via-yellow-200 to-red-900 overflow-hidden hidden sm:block">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="VK Background"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 via-orange-800/80 to-red-800/90"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center p-12">
          <div className="max-w-lg text-center text-white space-y-8">
            
            {/* Decorative Element */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border border-orange-300/40 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-orange-200/50 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-br from-orange-200 to-red-300 rounded-full"></div>
                  </div>
                </div>
                {/* Radiating lines */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-px h-6 bg-gradient-to-t from-orange-200/60 to-transparent"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                      transformOrigin: 'center 40px',
                      top: '50%',
                      left: '50%',
                      marginLeft: '-0.5px',
                      marginTop: '-40px'
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center mb-4">
                  <div className="h-px w-8 bg-orange-400/60"></div>
                  <div className="mx-3 w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span className="text-orange-200 text-xs tracking-[0.2em] uppercase font-light">
                    Global Celebration of Unity through Creative Expression
                  </span>
                  <div className="mx-3 w-1 h-1 bg-orange-400 rounded-full"></div>
                  <div className="h-px w-8 bg-orange-400/60"></div>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-4">
                  <span className="block text-white/95 mb-2">Vasudhaiva</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-red-200 to-orange-300">
                    Kutumbakam
                  </span>
                </h1>
                
                <p className="text-lg text-orange-100/90 font-light leading-relaxed">
                  The World is One Family
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4 text-left">
                <p className="text-white/90 text-sm leading-relaxed">
                  Join a global movement celebrating unity through creative expression. 
                  Express the sacred truth that connects all humanity as one universal family.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-100 text-sm">Global artistic community</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-100 text-sm">Multiple expression categories</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-100 text-sm">Prizes & recognition</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-100 text-sm">Unity through diversity</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-6 border-t border-orange-300/20">
                <p className="text-orange-200/80 text-sm italic font-light">
                  In diversity we find strength, in unity we discover light
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Half - Registration Form */}
      <div className="w-1/2 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 flex items-center justify-center p-8 w-full sm:max-w-md mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full border border-red-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <div className="text-white font-bold text-lg">VK</div>
            </div>
            <h2 className="text-3xl font-bold text-red-700 mb-2">
              Join the Movement
            </h2>
            <p className="text-gray-600">Begin your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border-2 border-red-200 rounded-xl p-4 focus:outline-none focus:border-red-500 transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border-2 border-red-200 rounded-xl p-4 focus:outline-none focus:border-red-500 transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border-2 border-red-200 rounded-xl p-4 focus:outline-none focus:border-red-500 transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Institution */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Institution / College
              </label>
              <input
                type="text"
                name="institution"
                placeholder="Enter your institution name"
                value={form.institution}
                onChange={handleChange}
                required
                className="w-full border-2 border-red-200 rounded-xl p-4 focus:outline-none focus:border-red-500 transition-colors text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
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
          </form>
        </div>
      </div>
    </div>
  );
}
