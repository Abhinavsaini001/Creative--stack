import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Emma Davis",
    role: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    description:
      "Emma crafts beautiful and user-friendly interfaces, ensuring every interaction feels effortless.",
  },
  {
    name: "James Miller",
    role: "Frontend Developer",
    img: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww",
    description:
      "James builds smooth, responsive, and scalable web experiences with React and Tailwind.",
  },
  {
    name: "Sophia Brown",
    role: "Backend Developer",
    img: "https://images.unsplash.com/photo-1586351012965-861624544334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Sophia ensures our backend systems are fast, reliable, and secure using modern technologies.",
  },
  {
    name: "Liam Johnson",
    role: "SEO Specialist",
    img: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmx8ZW58MHx8MHx8fDA%3D",
    description:
      "Liam helps our content shine online by optimizing visibility and engagement through SEO.",
  },
];

const TeamSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4">
      {/* Left Content */}
      <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Welcome our talented team
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">
          These individuals are the heart and soul of our products.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all text-sm sm:text-base">
          Join our team
        </button>
      </div>

      {/* Right Cards Section */}
      <div className="w-full md:w-2/3">
        {/* Mobile: Stack vertically */}
        <div className="flex md:hidden flex-col gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden cursor-pointer w-full"
              onClick={() => setActive(active === index ? null : index)}
              whileTap={{ scale: 0.98 }}
            >
              {/* Team Image */}
              <div className="relative h-64 sm:h-80 w-full">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out"
                />

                {/* Overlay for inactive cards */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                    active === index ? "opacity-0" : "opacity-30"
                  }`}
                ></div>

                {/* Name overlay always visible on mobile */}
                {active !== index && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="font-semibold text-white text-lg">
                      {member.name}
                    </h3>
                    <p className="text-sm text-green-200">{member.role}</p>
                  </div>
                )}
              </div>

              {/* Active Card - Glassmorphism */}
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-lg"
                >
                  <h3 className="font-semibold text-white text-lg drop-shadow-sm">
                    {member.name}
                  </h3>
                  <p className="text-sm text-green-200">{member.role}</p>
                  <p className="text-gray-100 text-sm mt-2">
                    {member.description}
                  </p>
                  <div className="flex justify-end mt-3">
                    <Linkedin className="w-5 h-5 text-green-200 hover:text-green-400 cursor-pointer transition-transform hover:scale-110" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop: Original horizontal expanding layout */}
        <div className="hidden md:flex justify-center gap-4 md:gap-5 flex-wrap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                active === index ? "w-64" : "w-40"
              }`}
              onMouseEnter={() => setActive(index)}
              whileHover={{ scale: 1.03 }}
            >
              {/* Team Image */}
              <div className="relative h-96 w-full">
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
                />

                {/* Softer black overlay for inactive cards */}
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                    active === index ? "opacity-0" : "opacity-30"
                  }`}
                ></div>
              </div>

              {/* Active Card - Glassmorphism */}
              {active === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-lg"
                >
                  <h3 className="font-semibold text-white text-lg drop-shadow-sm">
                    {member.name}
                  </h3>
                  <p className="text-sm text-green-200">{member.role}</p>
                  <p className="text-gray-100 text-sm mt-2">
                    {member.description}
                  </p>
                  <div className="flex justify-end mt-3">
                    <Linkedin className="w-5 h-5 text-green-200 hover:text-green-400 cursor-pointer transition-transform hover:scale-110" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;