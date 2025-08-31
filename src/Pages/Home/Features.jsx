import React from "react";
import { FaMobileAlt, FaLaptopCode, FaCogs, FaPencilRuler } from "react-icons/fa";

const features = [
  {
    icon: <FaMobileAlt className="text-4xl text-blue-500" />,
    title: "Mobile App Development",
    desc: "iOS, Android & Hybrid",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-blue-500" />,
    title: "Website Development",
    desc: "Responsive, E-commerce, Business",
  },
  {
    icon: <FaCogs className="text-4xl text-blue-500" />,
    title: "Software Solutions",
    desc: "ERP, CRM, Custom Applications",
  },
  {
    icon: <FaPencilRuler className="text-4xl text-blue-500" />,
    title: "UI/UX Design",
    desc: "Modern, Creative & User-friendly",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Features</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-white"
          >
            <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
