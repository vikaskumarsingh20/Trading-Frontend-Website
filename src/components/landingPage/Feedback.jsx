import React from 'react'

function Feedback() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      {/* Main container with centered content */}
      <div className="max-w-2xl mx-auto">
        
        {/* Header section */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Got questions, feedback, or looking for a custom trading solution?{' '}
            <span className="font-semibold text-gray-900">We'd love to hear from you.</span>
          </p>
        </div>
        
        {/* Contact form */}
        <form className="space-y-6">
          {/* Form grid container - responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name field */}
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-gray-700 placeholder-gray-500"
              />
            </div>
            
            {/* Email field */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-gray-700 placeholder-gray-500"
              />
            </div>
          </div>
          
          {/* Subject field - full width */}
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-gray-700 placeholder-gray-500"
            />
          </div>
          
          {/* Message field - full width */}
          <div>
            <textarea
              rows={6}
              placeholder="Enter your message here"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors text-gray-700 placeholder-gray-500 resize-vertical"
            ></textarea>
          </div>
          
          {/* File attachment section */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span className="text-gray-600 font-medium">Add attachments</span>
            </div>
            <p className="text-sm text-gray-500">
              Only accepts .pdf, .docx, .png, .jpg and up to 5 MB
            </p>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.docx,.png,.jpg,.jpeg"
              multiple
            />
          </div>
          
          {/* Action buttons - responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Cancel button */}
            <button
              type="button"
              className="px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-colors"
            >
              Cancel
            </button>
            
            {/* Send message button */}
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-[#005C89] to-[#012F46] hover:bg-teal-800 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Feedback
