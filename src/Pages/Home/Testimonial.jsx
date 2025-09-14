import React from "react";
import { Star } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Graham Griffiths",
      role: "Twitor",
      message:
        "Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Alan Martí",
      role: "Meta Inc.",
      message:
        "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Richardo Kann",
      role: "Photogram",
      message:
        "Provide your business with a variety of digital solutions to promote your product or service online.",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
    },
  ];

  return (
    <section className="bg-[#fdf8f6] py-12 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-10">
        <p className="text-sm text-[#000000] uppercase mb-2">Testimonials</p>
        <h2 className="text-3xl font-bold text-black">
          What My Clients Are Saying
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
          >
            {/* Stars */}
            <div className="flex space-x-1 mb-4 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
            </div>

            {/* Message */}
            <p className="text-black text-sm mb-6">{testimonial.message}</p>

            {/* Profile */}
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-black">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8">
        <button className="bg-[#3B82F6] text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition">
          See All
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
