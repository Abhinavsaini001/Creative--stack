// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
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
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 shadow-lg border-b border-black/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white tracking-wide">
            CREATIVE <span className="text-blue-400">STACK ✨</span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 text-white text-lg">
            <li>
              <Link
                to="/"
                className="cursor-pointer hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="cursor-pointer hover:text-blue-400 transition"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="cursor-pointer hover:text-blue-400 transition"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="cursor-pointer hover:text-blue-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl cursor-pointer focus:outline-none mobile-menu-container relative z-60"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Card Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fadeIn">
          {/* Card Menu */}
          <div className="mobile-menu-container fixed top-24 right-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl p-6 w-72 animate-slideIn">
            {/* Menu Header */}
            <div className="text-white text-sm font-semibold mb-4 pb-3 border-b border-gray-800">
              MENU
            </div>
            
            {/* Menu Links */}
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="flex items-center px-4 py-3 text-white hover:bg-blue-400/20 hover:text-blue-400 rounded-lg transition-all duration-200 group"
                >
                  <span className="mr-3 text-xl">🏠</span>
                  <span className="font-medium">Home</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={closeMenu}
                  className="flex items-center px-4 py-3 text-white hover:bg-blue-400/20 hover:text-blue-400 rounded-lg transition-all duration-200 group"
                >
                  <span className="mr-3 text-xl">💼</span>
                  <span className="font-medium">Portfolio</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  onClick={closeMenu}
                  className="flex items-center px-4 py-3 text-white hover:bg-blue-400/20 hover:text-blue-400 rounded-lg transition-all duration-200 group"
                >
                  <span className="mr-3 text-xl">🚀</span>
                  <span className="font-medium">Career</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center px-4 py-3 text-white hover:bg-blue-400/20 hover:text-blue-400 rounded-lg transition-all duration-200 group"
                >
                  <span className="mr-3 text-xl">📧</span>
                  <span className="font-medium">Contact</span>
                  <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            </ul>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-gray-400 text-xs text-center">
                Navigate through our site
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Add these styles to your global CSS or create a style tag */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;