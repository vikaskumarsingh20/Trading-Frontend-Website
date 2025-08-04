import React from 'react'
import vdo from '../../assets/vdo.png' // Adjust the path as necessary

function Trades() {
  return (
    <div className="min-h-screen bg-gray-50 py-40 px-5">
      {/* Main container with responsive grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-12 items-center">
        
        {/* Left content section - takes full width on mobile, 6 columns on large screens */}
        <div className="lg:col-span-6 text-center lg:text-left">
          
          {/* Main heading with responsive text sizing */}
          <h1 className="text-3xl md:text-2xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Built to Help You Trade Better, Faster, and Smarter with Real-Time{' '}
            <span className="text-blue-900">Trades</span>
          </h1>
          
          {/* Description paragraph */}
          <p className="text-lg md:text-2xl text-gray-600 mb-8 lg:w-full text-center text-center">
            Welcome to Bulyticks – your AI-powered trading companion delivering reliable trade signals and seamless automation through one secure dashboard.
          </p>
          
          {/* CTA Buttons with responsive spacing */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-[#005C89] to-[#012F46] hover:bg-teal-800 text-white px-12 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg">
              Start Free Trial
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold text-lg border-2 border-gray-300 transition-colors">
              Contact Us
            </button>
          </div>
          
          {/* Statistics section with responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 text-center border-1 rounded-lg p-4">
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">100,000+ Signals Processed</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">2,500+ Traders Onboard</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
              <span className="text-gray-700 font-medium">99.9% Uptime</span>
            </div>
          </div>
        </div>
        
        {/* Right video section - takes full width on mobile, 6 columns on large screens */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden ">
            {/* Video element with controls and autoplay */}
            <img
              className="w-full h-auto  object-cover"
              src={vdo}
              alt="Trading Dashboard Preview"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trades
