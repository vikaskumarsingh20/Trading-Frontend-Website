import React from 'react'

function HowItsWork() {
  return (
    <section className="bg-white py-20 px-4">
      {/* Main container */}
      <div className="max-w-6xl mx-auto">
        
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 tracking-wider">
            HOW IT WORKS
          </h2>
        </div>
        
        {/* Steps grid - responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start relative">
          
          {/* Step 1 - Sign Up */}
          <div className="text-center relative">
            {/* Step number circle */}
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <span className="text-white text-3xl font-bold">1</span>
            </div>
            
            {/* Step content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Sign Up
            </h3>
            <p className="text-gray-600 text-base max-w-xs mx-auto leading-relaxed">
              Register with email or mobile and set up 2FA.
            </p>
            
            {/* Connecting dotted line - hidden on mobile */}
            <div className="hidden md:block absolute top-8 left-full w-full">
              <div className="border-t-2 border-dashed border-gray-400 w-3/4"></div>
            </div>
          </div>
          
          {/* Step 2 - Link Broker */}
          <div className="text-center relative">
            {/* Step number circle */}
            <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <span className="text-white text-3xl font-bold">2</span>
            </div>
            
            {/* Step content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Link Broker
            </h3>
            <p className="text-gray-600 text-base max-w-xs mx-auto leading-relaxed">
              Connect your trading account using secure OTP.
            </p>
            
            {/* Connecting dotted line - hidden on mobile */}
            <div className="hidden md:block absolute top-8 left-full w-full">
              <div className="border-t-2 border-dashed border-gray-400 w-3/4"></div>
            </div>
          </div>
          
          {/* Step 3 - Start Algo */}
          <div className="text-center">
            {/* Step number circle */}
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <span className="text-white text-3xl font-bold">3</span>
            </div>
            
            {/* Step content */}
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Start Algo
            </h3>
            <p className="text-gray-600 text-base max-w-xs mx-auto leading-relaxed">
              Click Start to begin auto-trading via Bulyticks.
            </p>
          </div>
          
          {/* Mobile connecting lines - vertical dotted lines between steps */}
          <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 h-32">
            <div className="border-l-2 border-dashed border-gray-400 h-full"></div>
          </div>
          <div className="md:hidden absolute top-72 left-1/2 transform -translate-x-1/2 h-32">
            <div className="border-l-2 border-dashed border-gray-400 h-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItsWork
