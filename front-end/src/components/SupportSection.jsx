import React, { useState } from 'react';
import backgroundImage from '../assets/blaah.png';
import { CalendarIcon } from '@heroicons/react/24/outline';

export function SupportForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    supportType: '',
    timeframe: '',
    description: ''
  });

  const supportTypes = ['PREVENTIVE', 'SUPPORTIVE', 'TREATMENT', 'TRAINING'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCalendarClick = () => {
    const input = document.getElementById('timeframe-input');
    input.showPicker();
  };

  return (
    <div
      className="w-full bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Text Content - Transparent over image */}
        <div className="text-white max-w-lg flex flex-col justify-center items-start min-h-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Be Part of the Change
          </h2>
          <p className="text-lg md:text-xl drop-shadow-md">
            We believe in solutions built hand-in-hand with communities.
          </p>
        </div>

        {/* Right Form - White box */}
        <div className="bg-white text-[#1D204B] p-8 rounded-xl shadow-2xl w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">
              Get Involved
            </h3>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              required
            />

            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Community/Organization Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <select
              name="supportType"
              value={formData.supportType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-900"
              required
            >
              <option value="" disabled>What kind of support do you need?</option>
              {supportTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <div className="relative">
              <input
                id="timeframe-input"
                type="datetime-local"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#41B4E7] focus:border-[#41B4E7] text-gray-900 pr-10 placeholder-gray-500"
                required
                placeholder="Preferred timeframe"
                onFocus={(e) => e.target.showPicker()}
              />
              <button
                type="button"
                onClick={handleCalendarClick}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label="Open calendar"
              >
                <CalendarIcon className="h-5 w-5" />
              </button>
            </div>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Briefly describe your needs"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#1D204B] text-white py-3 px-6 rounded-md hover:bg-[#3191c6] transition-colors text-lg font-medium"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
