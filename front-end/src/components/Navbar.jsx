// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import weblogo from '../assets/image4.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* This spacer div creates space for the fixed navbar so content doesn't get hidden behind it */}
      <div className="h-24 md:h-20"></div>
      
      <div className="fixed w-full top-0 left-0 z-50 px-4 pt-5">
        <div className="max-w-screen-xl mx-auto">
          {/* Main Nav Container - Added rounded-full and shadow for pill shape */}
          <nav className="w-full px-8 py-3 bg-gradient-to-r from-[#1D204B] to-[#41B4E7] text-white flex justify-between items-center rounded-full shadow-lg">
            {/* Logo - with left padding */}
            <div className="flex items-center gap-2 pl-4">
              <img src={weblogo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-8 text-sm font-medium">
                <li><Link to="/about" className="text-white hover:opacity-80 transition">About Us</Link></li>
                <li><Link to="/themes" className="text-white hover:opacity-80 transition">Themes</Link></li>
                <li><Link to="/approach" className="text-white hover:opacity-80 transition">Approach</Link></li>
                <li><Link to="/events" className="text-white hover:opacity-80 transition">Events</Link></li>
                <li><Link to="/join" className="text-white hover:opacity-80 transition">Join Us</Link></li>
              </ul>
            </div>

            {/* Support Us Button - with right padding */}
            <div className="hidden md:block pr-4">
              <Link 
                to="/support" 
                className="px-6 py-2 bg-[#1D204B] text-white font-medium rounded-full border-2 border-white hover:bg-[#2a2e6b] transition"
              >
                Support Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu - Now appears below the pill-shaped nav */}
          {isMenuOpen && (
            <div className="md:hidden bg-gradient-to-b from-[#1D204B] to-[#41B4E7] px-8 py-4 mt-2 rounded-lg shadow-lg">
              <ul className="flex flex-col space-y-4 text-sm font-medium">
                <li><Link to="/about" className="text-white block py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/themes" className="text-white block py-2" onClick={() => setIsMenuOpen(false)}>Themes</Link></li>
                <li><Link to="/approach" className="text-white block py-2" onClick={() => setIsMenuOpen(false)}>Approach</Link></li>
                <li><Link to="/events" className="text-white block py-2" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
                <li><Link to="/join" className="text-white block py-2" onClick={() => setIsMenuOpen(false)}>Join Us</Link></li>
                <li>
                  <Link 
                    to="/support" 
                    className="block w-full text-center px-6 py-2 bg-[#1D204B] text-white font-medium rounded-full border-2 border-white mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Support Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}