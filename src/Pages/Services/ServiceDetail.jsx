import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "./servicesData";
import { Helmet } from "react-helmet-async";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find((item) => item.id === id);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <Link to="/" className="text-purple-600 underline">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Stack Adda</title>
        <meta name="description" content={service.shortDesc} />
      </Helmet>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-3xl shadow-lg w-full object-cover h-[350px]"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4 text-gray-900">{service.title}</h1>
          <p className="text-gray-700 mb-8">{service.longDesc}</p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900">Key Features:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
