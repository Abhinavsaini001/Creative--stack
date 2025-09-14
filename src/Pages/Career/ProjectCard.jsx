import React from "react";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project1.png";
import project6 from "../../assets/project2.png";

const ProjectCard = () => {
  const projects = [
    {
      image: project1,
      title: "Open The Door For A Spacious Living",
      tags: ["Landing Page", "UI & UX"],
    },
    {
      image: project2,
      title: "Sharing Energy, Ideas, and Space",
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
    {
      image: project5,
      title: "Open The Door For A Spacious Living",
      tags: ["Landing Page", "UI & UX"],
    },
    {
      image: project6,
      title: "Sharing Energy, Ideas, and Space",
      tags: ["Landing Page", "UI & UX"],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-8xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="mb-10 text-center md:text-left">
          <p className="uppercase text-sm text-gray-500">selected projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Discover my skills and creativity in action, with just one click.
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition w-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-sm border border-blue-500 text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-3 text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
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
