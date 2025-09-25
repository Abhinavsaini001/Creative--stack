import React from "react";
import { FaMobileAlt, FaLaptopCode, FaCogs, FaPencilRuler } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    icon: <FaMobileAlt className="text-3xl text-purple-600" />,
    title: "Mobile App Development",
    desc: "We create responsive websites, e-commerce platforms, and iOS/Android apps tailored to your business needs.",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-purple-600" />,
    title: "Software & Business Solutions",
    desc: "From custom software to scalable business apps, we deliver secure and high-performance solutions for startups & enterprises.",
  },
  {
    icon: <FaCogs className="text-3xl text-purple-600" />,
    title: "UI/UX & Creative Design",
    desc: "Modern, user-friendly designs that improve customer experience, drive engagement, and boost conversions.",
  },
  {
    icon: <FaPencilRuler className="text-3xl text-purple-600" />,
    title: "SEO & Digital Growth",
    desc: "Enhance your online presence with SEO, SEM, and digital marketing strategies designed to increase visibility and sales.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50 text-center relative">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900">Our Services</h2>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-white shadow-[0_0_60px_-15px_rgba(123,97,255,0.4)] hover:shadow-[0_0_80px_-10px_rgba(123,97,255,0.6)] transition duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 mb-6">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6">{service.desc}</p>

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

export default Services;
