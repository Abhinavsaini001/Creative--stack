import React from "react";
import heroImg from "../../assets/hero-bg.webp"; // apna image path yaha daalo

const HeroSection = () => {
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Custom Software & Web Solutions – Built Just for You
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          We design websites, apps & SEO solutions tailored for your business. Also offering real-world internships for students.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium transition">
            Get Your Project Started
          </button>
          <button
            onClick={() => {
              const formSection = document.getElementById("apply-form");
              formSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-transparent border border-blue-400 hover:bg-blue-500 hover:text-white rounded-full text-blue-400 font-medium transition"
          >
            Apply for Internship
          </button>
        </div>
      </div>

      {/* Bottom Triangle Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <polygon points="0,120 1200,0 1200,120" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
