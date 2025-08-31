// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          FIGMA <span className="text-blue-400">LAND</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-white text-lg">
          <li className="cursor-pointer hover:text-blue-400 transition">Home</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Career</li>
          <li className="cursor-pointer hover:text-blue-400 transition">Contact</li>
        </ul>

        {/* Mobile Menu (Optional) */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
