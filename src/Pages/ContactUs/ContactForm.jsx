import React, { useState } from "react";
import Bitmap from "../../assets/bitmap.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // simulate sending
    setTimeout(() => {
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

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
      <div className="absolute inset-0 bg-opacity-20"></div>

      {/* Contact Form Box */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-20">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                <option value="">Select Subject</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Feedback</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
            </div>

            {/* Button with Loader */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition flex items-center justify-center gap-2 ${
                isSubmitting ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                "SUBMIT NOW"
              )}
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
