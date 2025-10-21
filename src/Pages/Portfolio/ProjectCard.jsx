import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
// import project5 from "../../assets/project5.png";
// import project6 from "../../assets/project6.png";

const ProjectCard = () => {
  const projects = [
    {
      image: project1,
      title: "E-Commerce Store – Shopify",
      description:
        "A custom Shopify storefront designed for a fashion brand, featuring optimized product pages, secure checkout, and SEO-friendly structure.",
      tags: ["Shopify", "E-Commerce", "SEO"],
    },
    {
      image: project2,
      title: "Personal Portfolio – React.js",
      description:
        "A fast, modern React portfolio with dynamic routing, smooth animations, and a CMS integration for easy content updates.",
      tags: ["React", "UI/UX", "Frontend"],
    },
    {
      image: project3,
      title: "Mobile Banking App – Flutter",
      description:
        "A cross-platform Flutter app offering real-time payments, biometric authentication, and a seamless user interface.",
      tags: ["Flutter", "Mobile App", "UI/UX"],
    },
    {
      image: project4,
      title: "Food Delivery App – React Native",
      description:
        "React Native app for food delivery with live tracking, push notifications, and smooth animations for better UX.",
      tags: ["React Native", "Mobile App", "UI/UX"],
    },
    {
      image: project1,
      title: "Corporate Website – WordPress",
      description:
        "Fully customized WordPress site with Elementor, optimized for performance, responsive design, and SEO ranking.",
      tags: ["WordPress", "SEO", "CMS"],
    },
    {
      image: project2,
      title: "Digital Marketing Dashboard – React + Node",
      description:
        "A web app built for tracking marketing KPIs and SEO analytics in real-time using React and Node.js backend.",
      tags: ["React", "Node.js", "Analytics"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="uppercase text-sm text-blue-600 font-semibold">
            Selected Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            A Glimpse Into Our Work & Expertise
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From web to mobile, design to SEO — explore how we turn ideas into
            digital experiences that perform.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs border border-blue-500 text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button
                  onClick={() => window.location.href = "/portfolio"}
                  className="mt-4 text-blue-600 text-sm font-medium hover:underline flex items-center gap-1"
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
