import React from "react";
import { FaHeadset, FaDollarSign, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const features = [
  {
    icon: <FaHeadset className="text-3xl text-white" />,
    title: "24/7 Support",
  },
  {
    icon: <FaDollarSign className="text-3xl text-white" />,
    title: "Affordable Pricing",
  },
  {
    icon: <FaUsers className="text-3xl text-white" />,
    title: "User-friendly Interface",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-white" />,
    title: "Secure and Reliable",
  },
  {
    icon: <FaRocket className="text-3xl text-white" />,
    title: "Fast Delivery",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Why We're Different
      </h2>

      {/* Features Layout */}
      <div className="flex justify-center items-center flex-wrap gap-12 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col items-center cursor-pointer animate-bounce-slow"
          >
            {/* Circle with icon */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 shadow-lg hover:scale-110 transition-transform duration-500">
              {feature.icon}
            </div>
            {/* Text below circle */}
            <h3 className="mt-4 text-gray-800 font-semibold text-center">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
