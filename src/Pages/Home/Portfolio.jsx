import React from "react";
import { useNavigate } from "react-router-dom";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      image: project1,
      title: "Shopify E-Commerce Store – Urban Threads",
      tags: ["Shopify", "E-Commerce", "UI/UX", "SEO"],
    },
    {
      image: project2,
      title: "Corporate Website – GrowthEdge Consulting",
      tags: ["WordPress", "SEO", "UI/UX"],
    },
    {
      image: project3,
      title: "React Web App – TaskFlow Dashboard",
      tags: ["React", "Web App", "API Integration"],
    },
    {
      image: project4,
      title: "Mobile App – FitTrack Wellness",
      tags: ["Flutter", "App Design", "UI/UX"],
    },
    {
      image: project2,
      title: "Cross-Platform App – FoodieGo Delivery",
      tags: ["React Native", "Mobile App", "Firebase"],
    },
    {
      image: project1,
      title: "Creative Portfolio – Visual Studio Agency",
      tags: ["Next.js", "SEO", "Animations"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-5">
            Our Work Speaks for Itself
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From e-commerce stores to mobile apps and SEO-focused websites —
            our portfolio showcases our expertise across Shopify, WordPress,
            React, Flutter, and React Native.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-sm border border-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  <button className="px-4 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition">
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ View Collection Button (Navigate to Portfolio Page) */}
        <div className="text-center mt-14">
          <button
            onClick={() => navigate("/portfolio")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            View Collection →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
