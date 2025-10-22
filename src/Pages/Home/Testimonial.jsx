import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Mehta",
    img: "https://images.unsplash.com/photo-1618568949779-895d81686151?w=500&auto=format&fit=crop&q=60",
    text: "Their team helped us design and develop a flawless mobile app for our business. The UI is clean, responsive, and the backend integration works perfectly. Highly professional and quick delivery!",
  },
  {
    name: "Priya Sharma",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60",
    text: "We hired them for our company website redesign. The new interface looks modern, loads super fast, and our leads have increased significantly since launch. Absolutely loved the creative approach!",
  },
  {
    name: "Rahul Verma",
    img: "https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d?w=500&auto=format&fit=crop&q=60",
    text: "Their digital team built a custom web dashboard for us that simplified our data management process. The experience was smooth, and communication was clear throughout the project.",
  },
  {
    name: "Elena Dsouza",
    img: "https://images.unsplash.com/photo-1656221010175-bcfeadcb6017?w=500&auto=format&fit=crop&q=60",
    text: "We collaborated with them for our eCommerce app, and the results were beyond expectations. From design to deployment, everything was seamless and on time. Great support after launch too!",
  },
  {
    name: "Vikram Patel",
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328f0e4b?w=500&auto=format&fit=crop&q=60",
    text: "Their team delivered a fully functional CRM system that improved our workflow efficiency. The design is intuitive, and performance is excellent across devices. Definitely recommend them for IT solutions.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Section */}
        <div className="md:w-1/3 w-full text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            What <br className="hidden sm:block" /> Our Clients Say
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            We’ve worked with amazing clients on web, app, and digital transformation projects. 
            Here’s what they have to say about partnering with us.
          </p>
        </div>

        {/* Right Section (scrolling cards) */}
        <div className="md:w-2/3 w-full relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[260px] sm:w-[320px] md:w-[360px] lg:w-[380px] bg-white shadow-lg rounded-2xl p-5 border border-gray-100"
              >
                <span className="text-3xl text-pink-500 font-serif">"</span>
                <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed line-clamp-4">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {t.name}
                    </h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
