import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Helper function to get active/inactive styles
  const getLinkClass = (path) => {
    const baseClass = "font-medium px-3 py-2 rounded-lg transition-all duration-300";
    if (isActive(path)) {
      return `${baseClass} text-white bg-[#E85B2C] shadow-md`;
    }
    return `${baseClass} text-[#1E3A5F] hover:text-[#E85B2C] hover:bg-[#E85B2C]/10`;
  };

  return (
    <nav className="bg-white fixed w-full top-0 z-50 shadow-sm font-sans" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
      {/* Top Strip */}
      <div className="bg-[#1E3A5F] text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-end items-center px-4 space-x-6" style={{ paddingLeft: '40px' }}>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span>+91 9265147602</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>jainova.lifesciences@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4" style={{ paddingLeft: '40px' }}>
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center rounded-lg px-2 py-1"
            onClick={() => handleNavClick('/')}
            style={{ borderRadius: '8px' }}
          >
            <img
              style={{ transform: 'scale(2)' }}
              src="/images/logo.jpeg"
              alt="Jainova Lifesciences Logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/"
                className={getLinkClass('/')}
                onClick={() => handleNavClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={getLinkClass('/about')}
                onClick={() => handleNavClick('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={getLinkClass('/products')}
                onClick={() => handleNavClick('/products')}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={getLinkClass('/blog')}
                onClick={() => handleNavClick('/blog')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={getLinkClass('/contact')}
                onClick={() => handleNavClick('/contact')}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
          >
            <span className={`w-6 h-0.5 bg-[#1E3A5F] transition-all duration-300 absolute ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
            <span className={`w-6 h-0.5 bg-[#1E3A5F] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-[#1E3A5F] transition-all duration-300 absolute ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <ul className="flex flex-col space-y-2 pt-4 pb-2">
            <li>
              <Link
                to="/"
                className={`block ${getLinkClass('/')}`}
                onClick={() => handleNavClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block ${getLinkClass('/about')}`}
                onClick={() => handleNavClick('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`block ${getLinkClass('/products')}`}
                onClick={() => handleNavClick('/products')}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`block ${getLinkClass('/blog')}`}
                onClick={() => handleNavClick('/blog')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block ${getLinkClass('/contact')}`}
                onClick={() => handleNavClick('/contact')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 