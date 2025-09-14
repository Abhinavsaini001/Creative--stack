import React from "react";
import { FaMobileAlt, FaLaptopCode, FaCogs, FaPencilRuler } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const features = [
  {
    icon: <FaMobileAlt className="text-3xl text-purple-600" />,
    title: "Mobile App Development",
    desc: "iOS, Android, Hybrid",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-purple-600" />,
    title: "Website Development",
    desc: "Responsive, E-commerce, Business, Portfolio",
  },
  {
    icon: <FaCogs className="text-3xl text-purple-600" />,
    title: "Software Solutions",
    desc: "ERP, CRM, Custom Business Apps",
  },
  {
    icon: <FaPencilRuler className="text-3xl text-purple-600" />,
    title: "UI/UX Design",
    desc: "Modern, Creative & User-Friendly Interfaces",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white text-center relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">Our Features</h2>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white shadow-[0_0_60px_-15px_rgba(123,97,255,0.4)] hover:shadow-[0_0_80px_-10px_rgba(123,97,255,0.6)] transition duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 mb-6">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6">{feature.desc}</p>

            {/* Arrow Button */}
            <button className="mt-auto w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md hover:scale-110 transition">
              <FiArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
