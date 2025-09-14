import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "OPEN THE DOOR FOR A SPACIOUS LIVING",
      tags: ["Landing Page", "UI & UX"],
    },
    {
      image: project2,
      title: "Sharing Energy, Ideas, and Space.",
      tags: ["Landing Page", "UI & UX"],
    },
    {
      image: project3,
      title: "Go where You feel most Alive",
      tags: ["Landing Page", "UI & UX"],
    },
    {
      image: project3,
      title: "Go where You feel most Alive",
      tags: ["Landing Page", "UI & UX"],
    },
    {
      image: project3,
      title: "Go where You feel most Alive",
      tags: ["Landing Page", "UI & UX"],
    },
    {
      image: project4,
      title: "Space Ready For Work",
      tags: ["Landing Page", "UI & UX"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Our Work Speaks for Itself
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                {/* Tags + View Project */}
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

        {/* View Collection Button */}
        <div className="text-center mt-14">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md hover:opacity-90 transition">
            View collection →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
