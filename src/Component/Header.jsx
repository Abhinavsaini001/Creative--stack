// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 shadow-lg border-b border-black/30">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white tracking-wide">
          CREATIVE <span className="text-blue-400">STACK</span>
        </Link>

        {/* Links */}
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

        {/* Mobile Menu (Optional) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
