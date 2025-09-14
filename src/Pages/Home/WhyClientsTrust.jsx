import React from "react";
import { CheckCircle, Users, Package, Award } from "lucide-react";

const features = [
  {
    icon: <Package className="w-8 h-8 text-purple-600" />,
    title: "Huge collection",
    description:
      "A collection of 890 unique Nerkos built to go beyond the digital space.",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
    title: "High quality",
    description:
      "The Nerkos collection includes dozens of rare costumes and colorways of artists.",
  },
  {
    icon: <Award className="w-8 h-8 text-purple-600" />,
    title: "Top resource",
    description:
      "Tasty design resources made with care for each pixel. NFTs and game resources.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: "Big community",
    description:
      "Be part of a community of Nerko owners and create user generated items.",
  },
];

const WhyClientsTrust = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Why Clients Trust Us
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-white"
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyClientsTrust;
