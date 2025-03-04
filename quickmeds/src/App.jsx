// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features'; 
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  // Dark mode state management
  const [darkMode, setDarkMode] = useState(() => {
    // Default to dark mode for modern look
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return true; // Default to dark mode
  });

  useEffect(() => {
    // Update class on document root
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      {/* Subtle noise texture overlay */}
      <div className="fixed inset-0 bg-noise opacity-5 dark:opacity-10 pointer-events-none z-0"></div>
      
      {/* Light theme gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50 opacity-50 pointer-events-none z-0 dark:opacity-0 transition-opacity duration-500"></div>
      
      {/* Dark theme gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark-bg via-dark-bg-alt to-dark-bg opacity-0 dark:opacity-100 pointer-events-none z-0 transition-opacity duration-500"></div>
      
      {/* Accent glow effects */}
      <div className="fixed top-0 left-1/4 w-1/3 h-1/3 bg-brand-primary opacity-0 dark:opacity-5 blur-3xl rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-0 right-1/4 w-1/4 h-1/4 bg-brand-tertiary opacity-0 dark:opacity-5 blur-3xl rounded-full pointer-events-none z-0"></div>
      
      {/* Main content */}
      <div className="relative z-1 flex flex-col min-h-screen">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Hero />
          <Features />
          <HowItWorks />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;