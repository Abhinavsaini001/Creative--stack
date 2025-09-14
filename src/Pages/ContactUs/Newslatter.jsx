import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-indigo-600 w-full py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Subscribe to our Newsletter
          </h2>
          <p className="text-indigo-100 mt-3 max-w-lg">
            Subscribe for Updates: Stay informed about the latest investor
            updates, financial results, and announcements by subscribing to our
            newsletter.
          </p>
        </div>

        {/* Right Input */}
        <form className="flex w-full md:w-auto max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-l-full focus:outline-none text-gray-800"
          />
          <button
            type="submit"
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-r-full hover:bg-gray-100 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
