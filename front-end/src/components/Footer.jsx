import React from 'react';
import logo from '../assets/image4.png';
import instagram from '../assets/image15.png';
import bird from '../assets/Group 7.png';

export function Footer() {
  const handleCopyEmail = () => {
    const email = 'info@streettherapymedicine.africa';
    navigator.clipboard.writeText(email).then(() => {
      alert('Email address copied to clipboard!');
    });
  };

  return (
    <footer className="bg-[#1D204B] text-white relative pt-24 pb-10">
      {/* Decorative Bird */}
      <img
        src={bird}
        alt="Bird"
        className="absolute bottom-0 left-0 w-44 opacity-20 pointer-events-none"
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between relative z-10 gap-10 md:gap-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Africa Street Therapy Medicine" className="h-20" />
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-white h-24" />

        {/* Contact and Community */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
          {/* Contact Us */}
          <div className="flex flex-col justify-center h-full cursor-pointer" onClick={handleCopyEmail}>
            <h4 className="font-semibold text-xl mb-1">Contact Us</h4>
            <p className="text-base underline hover:text-white">
              info@streettherapymedicine.africa
            </p>
          </div>

          {/* Join Community */}
          <div className="flex items-center justify-center md:justify-start gap-3 h-full">
            <h4 className="font-semibold text-xl text-center md:text-left">
              Join the<br />Community
            </h4>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" className="w-8 h-8 hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="flex justify-center mt-12">
        <div className="w-full max-w-4xl border-t border-white/30"></div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-sm text-center text-white/70 mt-5 px-6">
        <p>
          2025 &nbsp; | &nbsp; All copyright reserved &nbsp; | &nbsp;
          <a href="#" className="underline hover:text-white">Policies</a> &nbsp; | &nbsp;
          <a href="#" className="underline hover:text-white">Delivery Policy</a>
        </p>
      </div>
    </footer>
  );
}
