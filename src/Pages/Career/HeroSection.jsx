import React from "react";
import heroImg from "../../assets/hero.png"; // apni image path ke hisaab se change karo

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">
            Great <span className="text-purple-600">Product</span> is <br />
            <span className="text-gray-900">built by great </span>
            <span className="text-purple-600">teams</span>
          </h1>
          <p className="text-gray-600 max-w-lg">
            We help build and manage a team of world-class developers
            to bring your vision to life.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition">
            Let’s get started!
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src={heroImg}
            alt="Team working illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
