import React, { useState, useEffect } from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-2 backdrop-blur-lg bg-white/70 dark:bg-dark-bg/80 shadow-lg dark:shadow-dark-accent/5' 
        : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative w-10 h-10 mr-3">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-tertiary rounded-full opacity-80 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-tertiary rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <svg className="relative h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary bg-clip-text text-transparent">
              QuickMeds
            </h1>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 mr-4 rounded-full hover:bg-gray-100 dark:hover:bg-dark-card/80 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-dark-card/80 transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-card/80 transition-colors relative group"
                aria-label="Toggle dark mode"
              >
                <div className="absolute inset-0 rounded-full bg-brand-primary/10 dark:bg-brand-primary/20 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
                {darkMode ? (
                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              <ul className="flex space-x-6">
                {['Home', 'How It Works', 'Features', 'Contact'].map((item, index) => (
                  <li key={item}>
                    <a 
                      href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="relative px-2 py-1 font-medium text-gray-700 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors group"
                    >
                      <span>{item}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-tertiary group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 dark:bg-dark-card/95 backdrop-blur-lg shadow-lg animate-slide-up border-t border-gray-100 dark:border-dark-border">
          <nav className="container mx-auto py-4 px-6">
            <ul className="space-y-4">
              {['Home', 'How It Works', 'Features', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'Home' ? '#' : `#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="block text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-brand-primary transition-colors font-medium py-2 border-b border-gray-100 dark:border-dark-border/30"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;