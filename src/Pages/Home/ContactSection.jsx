import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Form */}
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition">
              Send Message
            </button>
          </div>

          {/* Right World Map */}
          <div className="relative">
            {/* Map image (transparent dots style) */}
            <img
              src="https://i.ibb.co/0j1Zq3j/world-map.png"
              alt="World map"
              className="w-full object-contain"
            />

            {/* Flags with labels */}
            <div className="absolute top-16 left-10 bg-white px-3 py-2 rounded-xl shadow text-sm font-medium flex items-center space-x-2">
              <span className="text-xl">🇩🇪</span>
              <span>Germany</span>
            </div>

            <div className="absolute top-20 right-24 bg-white px-3 py-2 rounded-xl shadow text-sm font-medium flex items-center space-x-2">
              <span className="text-xl">🇦🇺</span>
              <span>Australia</span>
            </div>

            <div className="absolute bottom-20 left-24 bg-white px-3 py-2 rounded-xl shadow text-sm font-medium flex items-center space-x-2">
              <span className="text-xl">🇧🇷</span>
              <span>Brazil</span>
            </div>

            <div className="absolute top-36 left-1/2 bg-white px-3 py-2 rounded-xl shadow text-sm font-medium flex items-center space-x-2">
              <span className="text-xl">🇵🇰</span>
              <span>Pakistan</span>
            </div>

            <div className="absolute bottom-16 right-16 bg-white px-3 py-2 rounded-xl shadow text-sm font-medium flex items-center space-x-2">
              <span className="text-xl">🇨🇦</span>
              <span>Canada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
