import React from 'react'
import logo from '../../assets/logo.png'

function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-300 px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10">

        <img
          src={logo}
          alt="Company logo"
          className="h-14 w-auto"
        />

    
        <p className="text-center max-w-xl leading-relaxed">
          Smarter trading starts here — powered by data, logic, and trust.
        </p>

        <nav className="w-full">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center text-sm font-medium">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Payment &amp; Refund Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms &amp; Conditions</a></li>
          </ul>
        </nav>

       
        <div className="flex space-x-6 text-xl">
          {/* eslint-disable-next-line */}
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <i className="fa-brands fa-twitter"></i>
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        
        <p className="text-xs text-gray-400">
          © 2025 Bullytics | All rights reserved.
        </p>

        <p className="text-xs">
          Made with <span className="text-red-500">❤️</span> in India
        </p>
      </div>
    </footer>
  )
}

export default Footer
