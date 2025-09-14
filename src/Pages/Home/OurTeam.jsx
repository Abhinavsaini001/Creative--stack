import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const teamMembers = [
  {
    name: "Azah Anyeni",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Roelof Bekkenenks",
    role: "React Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Leonardo Oliveira",
    role: "Illustrator",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Izabella Tabakova",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm text-orange-500 uppercase mb-2">Our Team</p>
            <h2 className="text-3xl font-bold">Team of Designers and Developers</h2>
          </div>
          <div className="space-x-3">
            <button className="w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors">
              <FiArrowLeft />
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-200 transition-colors">
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
