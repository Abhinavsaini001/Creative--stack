// src/components/ContactHero.jsx
import React from "react";

const ContactHero = ({scrollToForm}) => {
  return (
    <section className="bg-white text-black py-24 text-center">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-extrabold mb-6">
          Get in Touch
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Have questions or want to collaborate with us?  
          Our team is here to help you with internships, projects, and IT solutions.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
          onClick={scrollToForm}
          className="bg-[#3B82F6] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
