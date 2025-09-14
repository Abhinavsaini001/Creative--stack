// src/components/InternshipSection.jsx
import React from "react";
import { FaPaintBrush, FaCode, FaServer, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";

const InternshipSection = () => {
  const internships = [
    {
      icon: <FaPaintBrush size={28} />,
      title: "UI/UX Design",
      description:
        "Learn to create modern and user-friendly interfaces with design tools and usability principles.",
    },
    {
      icon: <FaCode size={28} />,
      title: "Frontend Development",
      description:
        "Work with HTML, CSS, JavaScript, and React to build interactive web applications.",
    },
    {
      icon: <FaServer size={28} />,
      title: "Backend Development",
      description:
        "Get hands-on with databases, APIs, and server-side programming for scalable systems.",
    },
    {
      icon: <FaBrain size={28} />,
      title: "AI / ML",
      description:
        "Explore artificial intelligence and machine learning models for real-world applications.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-black mb-4">
          Why Join Our Internship?
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          We provide internships in various domains to help you kickstart your career in the IT industry.
        </p>

        {/* Internship Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
              }}
              className="bg-gray-50 p-8 rounded-2xl shadow-md text-center transition duration-300"
            >
              <div className="flex justify-center items-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#3B82F6] text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
