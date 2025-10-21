import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 md:px-20">
      {/* Logo Section */}
      <div className="text-center text-2xl font-bold mb-10">Stack Adda✨</div>

      <hr className="border-gray-700 mb-10" />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Reach Us */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Reach us</h3>
          <div className="flex items-start">
            <span className="mr-3">📞</span>
            <p>+91 8077073053</p>
          </div>
          <div className="flex items-start">
            <span className="mr-3">✉️</span>
            <p>stackadda@gmail.com</p>
          </div>
          <div className="flex items-start">
            <span className="mr-3">📍</span>
            <p>StackAdda , No 123, 2nd Floor, 70th Cross, 5th Block, Rajaji Nagara, Bengaluru, Karnataka 560010</p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Services</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Techlabz Keybox</a></li>
            <li><a href="#" className="hover:underline">Downloads</a></li>
            <li><a href="#" className="hover:underline">Forum</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="bg-[#1F1F1F] p-5 rounded-md">
          <h3 className="font-semibold text-lg mb-4">Join Our Newsletter</h3>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full p-2 rounded text-black mb-3 text-sm"
          />
          <button className="bg-white text-black w-full py-2 rounded font-semibold text-sm">
            Subscribe
          </button>
          <p className="text-xs text-gray-400 mt-3">
            * Will send you weekly updates for your better tool management.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
