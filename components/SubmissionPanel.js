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
    alert('🎉 Submission successful! Your entry has been received and will be reviewed by our panel of judges. Check your email for confirmation details.');
    
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
    <div className="lg:col-span-1">
      <div className="sticky top-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Submit Entry
          </h3>
          <p className="text-gray-600 text-sm">Ready to participate? Submit your entry below.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Submission Type Toggle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Submission Method *
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, submissionType: 'link' }))}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  formData.submissionType === 'link'
                    ? 'bg-blue-100 text-blue-700 border-blue-300'
                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                Link/URL
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, submissionType: 'file' }))}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  formData.submissionType === 'file'
                    ? 'bg-blue-100 text-blue-700 border-blue-300'
                    : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
              >
                File Upload
              </button>
            </div>
          </div>

          {/* Conditional Submission Field */}
          {formData.submissionType === 'link' ? (
            <div>
              <label htmlFor="submissionLink" className="block text-sm font-medium text-gray-700 mb-2">
                Submission Link *
              </label>
              <input
                type="url"
                id="submissionLink"
                name="submissionLink"
                value={formData.submissionLink}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.submissionLink ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="https://your-submission-link.com"
              />
              {errors.submissionLink && <p className="mt-1 text-sm text-red-600">{errors.submissionLink}</p>}
            </div>
          ) : (
            <div>
              <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-2">
                Upload File *
              </label>
              <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                errors.file ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
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
                  <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div className="text-sm text-gray-600">
                    {formData.file ? (
                      <span className="font-medium text-green-600">{formData.file.name}</span>
                    ) : (
                      <>
                        <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
                      </>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">MP4, MOV, ZIP up to 50MB</p>
                </label>
              </div>
              {errors.file && <p className="mt-1 text-sm text-red-600">{errors.file}</p>}
            </div>
          )}

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
              placeholder="Tell us about your submission approach, tools used, or any additional context..."
            />
            <p className="text-xs text-gray-500 mt-1">{formData.description.length}/500 characters</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] active:scale-[0.98]'
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

        {/* Help Section */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Need Help?</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Check submission guidelines above</p>
            <p>• Join our Discord for support</p>
            <p>• Email: support@competition.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}