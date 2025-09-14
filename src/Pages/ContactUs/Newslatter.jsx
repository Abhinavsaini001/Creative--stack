import React from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Decorative blur background */}
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png')] opacity-10" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
            Stay Updated With Our Newsletter ✨
          </h2>
          <p className="text-indigo-100 mt-4 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Get the latest investor updates, financial results, and important
            announcements delivered straight to your inbox.
          </p>
        </div>

        {/* Right Input */}
        <form className="w-full md:w-auto max-w-md bg-white rounded-full shadow-lg flex items-center overflow-hidden">
          <span className="pl-4 text-indigo-600">
            <Mail size={22} />
          </span>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-r-full hover:bg-indigo-700 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
