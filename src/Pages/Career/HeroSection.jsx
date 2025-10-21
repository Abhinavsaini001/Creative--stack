// src/components/HeroSection.jsx
import React from "react";

const HeroSection = ({ scrollToForm }) => {
  return (
    <section className="bg-white w-full py-20 px-6 md:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-4xl font-bold text-black mb-6">
          Careers & Build Digital Solutions with Us
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
          Join our IT company and gain real-world experience in software
          development, UI/UX design, digital marketing, and more.  
          Work on live projects, learn from industry experts, and build skills
          that make you future-ready.
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={scrollToForm}
            className="bg-[#3B82F6] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
