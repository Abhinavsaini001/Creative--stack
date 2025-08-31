import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side - Contact Info */}
        <div className="bg-blue-600 text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
            <p className="text-gray-200">Say something to start a live chat!</p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span> +1 012 3456 789
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📧</span> demo@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📍</span> 132 Dartmouth Street Boston, MA 02156 USA
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-gray-200 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-gray-200 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 hover:bg-gray-200 transition">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600 mb-6">Any question or remarks? Just write us a message!</p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-3 rounded-lg focus:outline-blue-500" />
              <input type="text" placeholder="Last Name" className="border p-3 rounded-lg focus:outline-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="Email" className="border p-3 rounded-lg focus:outline-blue-500" />
              <input type="tel" placeholder="+1 012 3456 789" className="border p-3 rounded-lg focus:outline-blue-500" />
            </div>
            <select className="w-full border p-3 rounded-lg focus:outline-blue-500">
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Sales</option>
              <option>Feedback</option>
            </select>
            <textarea placeholder="Write your message..." className="w-full border p-3 rounded-lg focus:outline-blue-500 h-28"></textarea>
            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
