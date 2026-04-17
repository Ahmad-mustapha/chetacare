import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white py-6 border-b border-gray-100 sticky top-0 z-[100]">
      <div className="container-wide flex items-center justify-between">
        <Link to="/" className="w-[154px] h-[28px]">
          <img src="/src/assets/chetacarelogo.png" alt="logo" className='w-full h-full object-contain' />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-brand-green transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/get-started"
            className="hidden lg:block bg-[#1A7A4A] text-white px-6 py-3 lg:px-[28px] lg:py-[14px] xl:px-8 xl:py-4 rounded-lg font-semibold hover:bg-green-800 transition-all shadow-sm"
          >
            Get Started
          </Link>

          {/* Hamburger Menu Icon */}
          <button
            className="lg:hidden p-2 text-gray-600 focus:outline-none relative z-[101]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out z-[99] lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[20px] text-gray-800 hover:text-brand-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <Link
              to="/get-started"
              className="block w-full text-center bg-[#1A7A4A] text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition-all shadow-lg"
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
