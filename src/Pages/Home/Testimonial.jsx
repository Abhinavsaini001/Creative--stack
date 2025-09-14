import React from "react";
import { Star } from "lucide-react"; // for star icons

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text and Stats */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We Make your <br /> Business Bright
          </h2>
          <div className="w-16 h-1 bg-orange-500 my-4"></div>
          <p className="text-gray-500 mb-10">
            Offending belonging promotion provision an be oh consulted
            ourselves it. Blessing welcomed ladyship she met humoured sir
            breeding her. Six curiosity day assurance bed necessary.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-bold text-gray-900">1500+</p>
              <p className="text-gray-500 text-sm">Projects Done</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">2000+</p>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">3000+</p>
              <p className="text-gray-500 text-sm">Cup of Coffee</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">1890</p>
              <p className="text-gray-500 text-sm">Projects in Queue</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image with Testimonial */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" // replace with your own image
            alt="Happy Customer"
            className="rounded-lg shadow-lg"
          />

          {/* Testimonial Card */}
          <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 flex items-start space-x-3 w-72">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Linda"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-gray-700 text-sm mb-2">
                Blessing welcomed ladyship she met humoured sir breeding her.
              </p>
              <div className="flex items-center space-x-1 text-orange-500">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Linda, Project Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
