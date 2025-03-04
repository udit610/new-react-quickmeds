import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg className="h-8 w-8 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <h1 className="text-2xl font-bold text-green-600">QuickMeds</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-green-500">Home</a></li>
            <li><a href="#how-it-works" className="text-gray-600 hover:text-green-500">How It Works</a></li>
            <li><a href="#features" className="text-gray-600 hover:text-green-500">Features</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-green-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;