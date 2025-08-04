import React from 'react'
import logo from '../../assets/logo.png' 

function Navbar() {
  return (
    // Main container with grid layout and responsive design
    <nav className=" bg-white fixed top-0 w-full border-b border-gray-300 px-3 py-5 z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 items-center gap-4">
        
        {/* Logo section - takes 2 columns on large screens, 3 on mobile */}
        <div className="col-span-3 lg:col-span-2">
          <img 
            src={logo} 
            alt="Logo" 
            className=""
          />
        </div>

        {/* Navigation links - hidden on mobile, visible on large screens */}
        <div className="hidden lg:flex lg:col-span-6 justify-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Pricing
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            Services
          </a>
        </div>

        {/* Mobile menu button - only visible on small screens */}
        <div className="lg:hidden col-span-6 flex justify-center">
          <button className="text-gray-700 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Login/Register buttons - responsive sizing */}
        <div className="col-span-3 lg:col-span-4 flex justify-end space-x-2 lg:space-x-4">
          {/* Login button with teal background matching the image */}
          <button className="bg-gradient-to-r from-[#005C89] to-[#012F46] text-white px-12 py-2 rounded-md font-medium transition-colors text-sm lg:text-base">
            Login
          </button>
          {/* Register button with white background and border */}
          <button className="bg-white hover:bg-gray-50 text-gray-700 px-12 py-2 rounded-md font-medium border border-gray-300 transition-colors text-sm lg:text-base">
            Register
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
