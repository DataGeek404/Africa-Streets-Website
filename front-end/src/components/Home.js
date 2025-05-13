import React from 'react';
import Header from "../components/Header.js";

export default function HomePage() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'white' }}>
      <div className="max-w-md w-full space-y-8">
        <Header
          heading="Welcome to your account"
          paragraph="Manage your account and payments"
        />
        {/* Add your home page content here */}
        <div className="mt-6">
          <p className="text-center text-gray-700">You are successfully logged in!</p>
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => {
                sessionStorage.clear();
                window.location.href = "/login";
              }}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}