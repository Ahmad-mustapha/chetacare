import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook to track the current URL path

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#FFFFFF] h-[72px] lg:h-[89px] sticky top-0 z-[100] shadow-[0px_2px_4px_rgba(145,145,145,0.25)] flex items-center">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between pl-[16px] pr-[12px] lg:py-[18px] lg:px-[100px]">
        
        {/* Logo */}
        <Link to="/" className="w-[148px] h-[28px] lg:w-[210px] lg:h-[40px] z-[101]">
          <img src="/assets/Full-Logo-Transparent.png" alt="Chetacare" className="w-full h-full object-contain" />
        </Link>

        {/* Desktop Links - Dynamic highlight added */}
        <div className="hidden lg:flex items-center gap-[40px] font-normal text-[16px]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors leading-[24px] ${
                  isActive ? 'text-[#1A7A4A] font-medium' : 'text-[#282828] hover:text-[#1A7A4A]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center">
          
          {/* Desktop Get Started Button */}
          <Link
            to="/contact"
            className="hidden lg:flex bg-[#1A7A4A] text-[#FFFFFF] w-[153px] h-[53px] rounded-[12px] font-bold text-[18px] hover:bg-green-800 transition-all items-center justify-center"
          >
            Get Started
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden flex items-center justify-center w-[40px] h-[40px] rounded-[8px] border-[2px] border-[#344054] text-[#344054] z-[101] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[24px] h-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`fixed inset-0 top-[72px] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div 
          className={`absolute top-0 left-0 w-full bg-[#FFFFFF] border-b border-[#EAECF0] flex flex-col transition-transform duration-300 ease-in-out origin-top ${
            isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col py-[24px] w-full">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center px-[16px] py-[12px] w-full hover:bg-gray-50 active:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={`text-[16px] leading-[24px] transition-colors ${
                    isActive ? 'text-[#1A7A4A] font-bold' : 'text-[#101828] font-semibold'
                  }`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Get Started Button for Mobile */}
          <div className="flex flex-col items-center px-[16px] pb-[48px] w-full">
            <Link
              to="/contact"
              className="bg-[#1A7A4A] text-[#FFFFFF] w-full flex justify-center items-center rounded-[12px] px-[32px] py-[16px] font-bold text-[18px] hover:bg-green-800 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;