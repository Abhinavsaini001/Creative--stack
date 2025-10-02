import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // ✅ Navigation hook
import heroImg from "../../assets/hero-bg.webp";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      {/* Countdown Card */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl shadow-lg z-20 flex flex-col items-center gap-2">
        <div className="text-lg font-semibold text-blue-300">
          🚀 New Internship Batch Starts on <span className="text-white">10th October!</span>
        </div>
        <div className="text-base font-medium text-orange-300">
          🎉 <span className="text-white">30% OFF</span> – Offer ends in:{" "}
          <span className="font-bold text-pink-400">
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
          </span>
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 mt-28">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Custom Software & Web Solutions – Built Just for You
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          We design websites, apps & SEO solutions tailored for your business. Also offering real-world internships for students.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* ✅ Contact Page Route */}
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium transition"
          >
            Get Your Project Started
          </button>

          {/* ✅ Career Page Route */}
          <button
            onClick={() => navigate("/career")}
            className="px-6 py-3 bg-transparent border border-blue-400 hover:bg-blue-500 hover:text-white rounded-full text-blue-400 font-medium transition"
          >
            Apply for Internship
          </button>
        </div>
      </div>

      {/* Bottom Shape */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[100px]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <polygon points="0,120 1200,0 1200,120" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
