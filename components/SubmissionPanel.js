// components/SubmissionPanel.js
import { useState } from 'react';

export default function SubmissionPanel({ competitionId }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    submissionType: 'link',
    submissionLink: '',
    file: null,
    description: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'file') {
      setFormData(prev => ({ ...prev, file: files[0] || null }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (formData.submissionType === 'link') {
      if (!formData.submissionLink.trim()) {
        newErrors.submissionLink = 'Submission link is required';
      } else if (!/^https?:\/\/.+/.test(formData.submissionLink)) {
        newErrors.submissionLink = 'Please enter a valid URL';
      }
    } else if (formData.submissionType === 'file' && !formData.file) {
      newErrors.file = 'Please select a file to upload';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Submission Data:', {
      competitionId,
      ...formData,
      submittedAt: new Date().toISOString()
    });
    
    // Show success alert
    alert('Submission successful! Your entry has been received and will be reviewed by our panel of judges. Check your email for confirmation details.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      submissionType: 'link',
      submissionLink: '',
      file: null,
      description: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Enhanced Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .submission-gradient {
          background: linear-gradient(135deg, #FF8C00, #D2691E, #CC5500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .submit-shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .submit-shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.8s ease;
        }
        
        .submit-shimmer:hover::before {
          left: 100%;
        }
      `}</style>

      <div className="lg:col-span-1 text-black">
        <div className="sticky top-8 bg-white/95 backdrop-blur-md rounded-2xl border border-orange-100/50 shadow-xl p-6 overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full"></div>
          
          <div className="relative z-10">
            {/* Enhanced Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-bold submission-gradient">
                  Submit Entry
                </h3>
              </div>
              <p className="font-inter text-orange-700/70 text-sm ml-11">Ready to participate? Submit your entry below.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-orange-800 mb-2 font-inter">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 font-inter text-sm backdrop-blur-sm ${
                    errors.name ? 'border-red-400 bg-red-50/50' : 'border-orange-200/50 bg-white/80 hover:border-orange-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-600 font-inter">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-orange-800 mb-2 font-inter">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 font-inter text-sm backdrop-blur-sm ${
                    errors.email ? 'border-red-400 bg-red-50/50' : 'border-orange-200/50 bg-white/80 hover:border-orange-300'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600 font-inter">{errors.email}</p>}
              </div>

              {/* Submission Type Toggle */}
              <div>
                <label className="block text-sm font-semibold text-orange-800 mb-3 font-inter">
                  Submission Method *
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-orange-50/80 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, submissionType: 'link' }))}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-inter ${
                      formData.submissionType === 'link'
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md transform scale-[1.02]'
                        : 'text-orange-700 hover:bg-orange-100/50'
                    }`}
                  >
                    Link/URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, submissionType: 'file' }))}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-inter ${
                      formData.submissionType === 'file'
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md transform scale-[1.02]'
                        : 'text-orange-700 hover:bg-orange-100/50'
                    }`}
                  >
                    File Upload
                  </button>
                </div>
              </div>

              {/* Conditional Submission Field */}
              {formData.submissionType === 'link' ? (
                <div>
                  <label htmlFor="submissionLink" className="block text-sm font-semibold text-orange-800 mb-2 font-inter">
                    Submission Link *
                  </label>
                  <input
                    type="url"
                    id="submissionLink"
                    name="submissionLink"
                    value={formData.submissionLink}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 font-inter text-sm backdrop-blur-sm ${
                      errors.submissionLink ? 'border-red-400 bg-red-50/50' : 'border-orange-200/50 bg-white/80 hover:border-orange-300'
                    }`}
                    placeholder="https://your-submission-link.com"
                  />
                  {errors.submissionLink && <p className="mt-1 text-xs text-red-600 font-inter">{errors.submissionLink}</p>}
                </div>
              ) : (
                <div>
                  <label htmlFor="file" className="block text-sm font-semibold text-orange-800 mb-2 font-inter">
                    Upload File *
                  </label>
                  <div className={`border-2 border-dashed rounded-xl p-4 text-center transition-all duration-300 backdrop-blur-sm ${
                    errors.file ? 'border-red-300 bg-red-50/50' : 'border-orange-300/50 bg-orange-50/30 hover:border-orange-400 hover:bg-orange-50/50'
                  }`}>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleInputChange}
                      className="hidden"
                      accept=".mp4,.mov,.avi,.zip,.pdf"
                    />
                    <label htmlFor="file" className="cursor-pointer">
                      <svg className="w-6 h-6 text-orange-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <div className="text-sm text-orange-700 font-inter">
                        {formData.file ? (
                          <span className="font-semibold text-green-600">{formData.file.name}</span>
                        ) : (
                          <>
                            <span className="font-semibold text-orange-600">Click to upload</span> or drag and drop
                          </>
                        )}
                      </div>
                      <p className="text-xs text-orange-600/70 mt-1 font-inter">MP4, MOV, ZIP up to 50MB</p>
                    </label>
                  </div>
                  {errors.file && <p className="mt-1 text-xs text-red-600 font-inter">{errors.file}</p>}
                </div>
              )}

              {/* Description Field */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-orange-800 mb-2 font-inter">
                  Description (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-orange-200/50 bg-white/80 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none font-inter text-sm backdrop-blur-sm hover:border-orange-300"
                  placeholder="Tell us about your submission approach, tools used, or any additional context..."
                />
                <p className="text-xs text-orange-600/70 mt-1 font-inter">{formData.description.length}/500 characters</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-shimmer w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 font-inter relative overflow-hidden ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 hover:from-orange-700 hover:via-amber-700 hover:to-orange-800 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  'Submit Entry'
                )}
              </button>
            </form>

            {/* Enhanced Help Section */}
            {/* <div className="mt-6 pt-4 border-t border-orange-100/50">
              <h4 className="text-sm font-semibold text-orange-800 mb-3 font-playfair">Need Help?</h4>
              <div className="space-y-2 text-xs text-orange-700/80 font-inter">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span>Check submission guidelines above</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span>Join our Discord for support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <span>Email: support@jyot.in</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}