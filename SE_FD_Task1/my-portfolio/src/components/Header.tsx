import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
      ${isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-gray-900'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-200"
          >
            <User className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Akhila's Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  relative px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out
                  ${isActiveLink(item.path)
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                  }
                  after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 
                  after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 
                  after:transform after:scale-x-0 after:transition-transform after:duration-200
                  hover:after:scale-x-100
                  ${isActiveLink(item.path) ? 'after:scale-x-100' : ''}
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 
                         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 
                         focus:ring-offset-gray-900 transition-all duration-200"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          md:hidden transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 backdrop-blur-sm rounded-lg mt-2 mb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  block px-4 py-3 text-base font-medium rounded-md transition-all duration-200
                  ${isActiveLink(item.path)
                    ? 'text-blue-400 bg-gray-700/50'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/30'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;