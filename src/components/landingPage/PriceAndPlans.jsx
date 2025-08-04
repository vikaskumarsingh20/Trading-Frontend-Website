import React from 'react'

function PriceAndPlans() {
  return (
    <section className="bg-slate-800 py-16 px-4">
      {/* Main container */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            PRICING & PLANS
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From real-time alerts to fully automated executions — explore two powerful ways to elevate your trading game.
          </p>
        </div>
        
        {/* Pricing cards grid - responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Free Trial Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            {/* Plan header */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Free Trial</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">₹0</span>
                <div className="ml-2 text-sm text-gray-600">
                  <div>per editor/month</div>
                  <div>billed yearly as ₹0</div>
                </div>
              </div>
            </div>
            
            {/* Features list */}
            <ul className="space-y-3 mb-8">
              <li className="text-gray-600">30h Fast generations</li>
              <li className="text-gray-600">Unlimited Relaxed generations</li>
              <li className="text-gray-600">General commercial terms</li>
              <li className="text-gray-600">Access to member gallery</li>
            </ul>
            
            {/* CTA Button */}
            <button className="w-full py-3 px-6 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              Current Plan
            </button>
          </div>
          
          {/* Standard Plan Card - Featured */}
          <div className="bg-gradient-to-r from-[#005C89] to-[#012F46] rounded-3xl p-8 shadow-xl relative transform lg:scale-105">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            {/* Plan header */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">Standard Plan</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-white">₹24</span>
                <div className="ml-2 text-sm text-teal-100">
                  <div>per editor/month</div>
                  <div>billed yearly as ₹288</div>
                </div>
              </div>
            </div>
            
            {/* Features list with checkmarks */}
            <ul className="space-y-3 mb-8">
              <li className="text-white flex items-center">
                <svg className="w-5 h-5 text-teal-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                15h Fast generations
              </li>
              <li className="text-white flex items-center">
                <svg className="w-5 h-5 text-teal-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Unlimited Relaxed generations
              </li>
              <li className="text-white flex items-center">
                <svg className="w-5 h-5 text-teal-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                General commercial terms
              </li>
              <li className="text-white flex items-center">
                <svg className="w-5 h-5 text-teal-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Access to member gallery
              </li>
              <li className="text-white flex items-center">
                <svg className="w-5 h-5 text-teal-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Optional credit top ups
              </li>
              <li className="text-white flex items-center">
                <svg className="w-5 h-5 text-teal-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                3 concurrent fast jobs
              </li>
              <li className="text-white flex items-center">
                <svg className="w-5 h-5 text-teal-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Access to member gallery
              </li>
              <li className="text-white flex items-center">
                <svg className="w-5 h-5 text-teal-200 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Optional credit top ups
              </li>
            </ul>
            
            {/* CTA Button */}
            <button className="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors">
              Choose Plan
            </button>
          </div>
          
          {/* Pro Plan Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            {/* Plan header */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Pro Plan</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">₹48</span>
                <div className="ml-2 text-sm text-gray-600">
                  <div>per editor/month</div>
                  <div>billed yearly as ₹576</div>
                </div>
              </div>
            </div>
            
            {/* Features list */}
            <ul className="space-y-3 mb-8">
              <li className="text-gray-600">30h Fast generations</li>
              <li className="text-gray-600">Unlimited Relaxed generations</li>
              <li className="text-gray-600">General commercial terms</li>
              <li className="text-gray-600">Access to member gallery</li>
              <li className="text-gray-600">Optional credit top ups</li>
            </ul>
            
            {/* CTA Button */}
            <button className="w-full py-3 px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceAndPlans
