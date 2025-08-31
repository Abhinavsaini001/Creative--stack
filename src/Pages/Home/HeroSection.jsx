import React from "react";
import heroImg from "../../assets/hero-bg.png"; // apna image path yaha daalo

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
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
          Custom Software & Web Solutions in Any Language – Built Just for You
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          We design professional websites & apps tailored to your business.
          Also offering paid internships for future tech leaders.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium transition">
            Get Your Project Started
          </button>
          <button className="px-6 py-3 bg-transparent border border-blue-400 hover:bg-blue-500 hover:text-white rounded-full text-blue-400 font-medium transition">
            Apply for Internship
          </button>
        </div>
      </div>

      {/* Bottom Triangle Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.74,158,28,
            70.36-6.3,136.33-37.73,206-42,73.89-4.5,
            147.41,20.38,220,36,62.26,13.54,125.73,18.21,
            188,8,63.22-10.46,127.52-36.06,190-29,
            43.52,4.85,84.24,22.88,127,29,
            59.18,8.39,113.64-12.14,171-22V0Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
