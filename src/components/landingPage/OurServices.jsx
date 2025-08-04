import React from 'react'
import trade01 from '../../assets/trade01.png' 
import trade02 from '../../assets/algoTrade.png' 
import trade03 from '../../assets/strategyTrade.png'
function OurServices() {
  return (
    <section className="bg-[rgba(30,40,51,1)] py-16 px-4">
      {/* Main container with max width and centering */}
      <div className="max-w-7xl mx-auto">
        
        {/* Header section with centered content */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            OUR SERVICES
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From real-time alerts to fully automated executions — explore two powerful ways to elevate your trading game.
          </p>
        </div>
        
        {/* Services grid - responsive layout with 3 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Trade Signal Card */}
          <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-slate-500 transition-colors">
            {/* Icon container with white background */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <img 
                src={trade01}
                alt="Trade Signal Icon"
                className="w-8 h-8"
              />
            </div>
            
            {/* Card content */}
            <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-4">
              Trade Signal
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Get real-time AI alerts to help you trade smarter and faster. Customize filters based on your strategy and stay updated with instant mobile notifications.
            </p>
          </div>
          
          {/* Algo Trades Card */}
          <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-slate-500 transition-colors">
            {/* Icon container with white background */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <img 
                src={trade02}
                alt="Algo Trades Icon"
                className="w-8 h-8"
              />
            </div>
            
            {/* Card content */}
            <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-4">
              Algo Trades
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Automate your strategies with broker integration and 24/7 execution. Just connect your broker and let the system handle your trades in real-time.
            </p>
          </div>
          
          {/* Strategy Marketplace Card */}
          <div className="bg-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-slate-500 transition-colors md:col-span-2 lg:col-span-1">
            {/* Icon container with white background */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
              <img 
                src={trade03}
                alt="Strategy Marketplace Icon"
                className="w-8 h-8"
              />
            </div>
            
            {/* Card content */}
            <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-4">
              Strategy Marketplace
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Discover and deploy ready-made strategies built by expert traders. All strategies are tested, verified, and can be launched with a single click.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
