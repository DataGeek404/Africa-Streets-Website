import React, { useState } from 'react';
import landscapeImage from '../assets/Rectangle 39.png';
import mpesaLogo from '../assets/image 1.png';
import paypalLogo from '../assets/paypal.png';
import stripeLogo from '../assets/image.png';

export function DonationSection({ hideImage = false, className = "" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    paymentMethod: ''
  });

  const paymentMethods = [
    { 
      name: 'MPESA', 
      logo: mpesaLogo,
      redirectUrl: 'https://mpesa.payment-gateway.com' 
    },
    { 
      name: 'PayPal', 
      logo: paypalLogo,
      redirectUrl: 'https://www.paypal.com/payment' 
    },
    { 
      name: 'Stripe', 
      logo: stripeLogo,
      redirectUrl: 'https://stripe.com/payments' 
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodClick = (method) => {
    setFormData(prev => ({ ...prev, paymentMethod: method.name }));
    window.open(method.redirectUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Optionally redirect if form is submitted
    if (formData.paymentMethod) {
      const method = paymentMethods.find(m => m.name === formData.paymentMethod);
      if (method) {
        window.open(method.redirectUrl, '_blank');
      }
    }
  };

  return (
    <div className="relative w-full">
      {/* Top Image - Only shown if hideImage is false */}
      {!hideImage && (
        <div className="w-full h-[40vh] md:h-[550px] -mt-1">
          <img 
            src={landscapeImage} 
            alt="Community landscape" 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content Section */}
      <div className={`w-full bg-white py-16 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#41B4E7]">
                Support Us
              </h2>
              <p className="text-lg text-gray-700 max-w-lg">
                Your contribution, big or small, goes directly to supporting mental health and substance use programs in underserved communities.
                Help us run mobile clinics, offer psychosocial support, train local health workers, and reach those most in need.
              </p>
            </div>

            {/* Right Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#41B4E7] focus:border-[#41B4E7] placeholder-gray-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Community/Organization Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#41B4E7] focus:border-[#41B4E7] placeholder-gray-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#41B4E7] focus:border-[#41B4E7] placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#41B4E7] focus:border-[#41B4E7] placeholder-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-gray-700 mb-3">Select a payment method</p>
                  <div className="grid grid-cols-3 gap-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.name}
                        onClick={() => handlePaymentMethodClick(method)}
                        className={`border rounded-md p-3 flex items-center justify-center cursor-pointer transition-all
                          ${formData.paymentMethod === method.name 
                            ? 'border-[#41B4E7] bg-blue-50 shadow-md' 
                            : 'border-gray-300 hover:border-gray-400 hover:shadow-sm'
                          }`}
                      >
                        <div className="w-full h-full flex items-center justify-center p-1">
                          <img 
                            src={method.logo} 
                            alt={method.name} 
                            className="w-full h-auto max-h-16 object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1D204B] text-white py-3 px-6 rounded-md hover:bg-[#3191c6] transition-colors font-medium text-lg"
                >
                  Support
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}