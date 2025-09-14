import React from "react";
import Bitmap from "../../assets/bitmap.png"; // adjust path based on your folder structure

const ContactForm = () => {
  return (
    <section
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${Bitmap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-20"></div>

      {/* Contact Form Box */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-20">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <select className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                <option>Select Subject</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Feedback</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="button"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>

      {/* Location Pin (Right side) */}
      <div className="absolute right-[30%] top-1/2 transform -translate-y-1/2 z-20">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-lg">
          📍
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
