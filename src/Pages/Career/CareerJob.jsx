import React, { useState } from "react";

const CareerJob = ({scrollToForm}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Design", "Development", "Marketing", "Admin"];

  const jobs = [
    {
      title: "Frontend Developer Intern",
      category: "Development",
      location: "Gurugram, Haryana",
      type: "Paid Internship",
      description:
        "Work on modern React.js projects, assist in building UI components, and learn best coding practices.",
    },
    {
      title: "UI/UX Designer Intern",
      category: "Design",
      location: "Remote",
      type: "Paid Internship",
      description:
        "Assist in creating wireframes and mockups, learn Figma design workflows, and support design team.",
    },
    {
      title: "Digital Marketing Intern",
      category: "Marketing",
      location: "Delhi NCR",
      type: "Paid Internship",
      description:
        "Support SEO, social media campaigns, and learn digital marketing tools while working on real projects.",
    },
  ];

  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
    <section className="bg-[#fdf8f6] py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black">Open Positions</h2>
        <p className="text-gray-700 mt-2">
          Discover exciting internship opportunities and join our growing team.
        </p>

        {/* Categories */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 border rounded-md ${
                selectedCategory === cat
                  ? "bg-[#3B82F6] text-white"
                  : "border-[#3B82F6] text-black hover:bg-blue-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Jobs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-black">
                  {job.title}
                </h3>
                <span className="inline-block mt-2 text-sm bg-blue-100 text-[#3B82F6] px-3 py-1 rounded-full">
                  {job.category}
                </span>
                <p className="mt-4 text-gray-700">{job.description}</p>
              </div>
              <div className="mt-6">
                <p className="flex items-center text-gray-600 text-sm">
                  📍 {job.location}
                </p>
                <p className="flex items-center text-gray-600 text-sm">
                  ⏰ {job.type}
                </p>
                <button
                onClick={scrollToForm}
                className="mt-4 w-full bg-[#3B82F6] text-white py-2 rounded-lg hover:bg-blue-600">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerJob;
