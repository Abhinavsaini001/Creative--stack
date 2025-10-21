// src/components/PortfolioHero.jsx
import React from "react";

const PortfolioHero = ({scrollToForm}) => {
  return (
    <section className="bg-white text-black py-24 text-center">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-5xl md:text-4xl font-extrabold mb-6">
          My Portfolio
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          A showcase of my work in <span className="font-semibold">UI/UX Design, Web Development,</span>  
          and <span className="font-semibold">Creative Projects</span>.  
          Explore the journey of transforming ideas into impactful digital experiences.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
          onClick={scrollToForm}
          className="bg-[#3B82F6] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
