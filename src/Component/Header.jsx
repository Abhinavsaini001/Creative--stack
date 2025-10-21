// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiBriefcase,
  FiSend,
  FiTrendingUp,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu-container") &&
        !event.target.closest(".menu-toggle-button")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Disable scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 shadow-lg border-b border-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold text-white tracking-wide"
          >
            STACK <span className="text-blue-400">ADDA ✨</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12 text-white text-lg font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Career", path: "/career" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white text-3xl cursor-pointer focus:outline-none menu-toggle-button"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fadeIn">
          <div className="mobile-menu-container fixed top-28 right-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-2xl p-6 w-72 animate-slideIn">
            <ul className="flex flex-col space-y-3">
              {[
                { name: "Home", icon: <FiHome />, path: "/" },
                { name: "Portfolio", icon: <FiBriefcase />, path: "/portfolio" },
                { name: "Career", icon: <FiTrendingUp />, path: "/career" },
                { name: "Contact", icon: <FiSend />, path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className="flex items-center px-4 py-3 text-white hover:bg-blue-400/20 hover:text-blue-400 rounded-lg transition-all duration-200 group"
                  >
                    <span className="mr-3 text-xl">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-gray-400 text-xs text-center mt-6">
              Navigate through our site
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
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
