import React, { useState } from "react";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application Submitted Successfully!");
  };

  return (
    <section className="bg-[#fdf8f6] py-12 px-6">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold text-black">Didn't Find a Match?</h2>
        <p className="text-gray-700">
          Send us your resume and we'll keep you in mind for future opportunities.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h3 className="text-xl font-semibold text-black mb-6">Send Us Your Resume</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                required
              />
            </div>
          </div>

          {/* Phone & Role */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Role Interested In *
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                required
              >
                <option value="">Select a role</option>
                <option value="Frontend Developer Intern">Frontend Developer Intern</option>
                <option value="UI/UX Designer Intern">UI/UX Designer Intern</option>
                <option value="Digital Marketing Intern">Digital Marketing Intern</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about yourself, your experience, and why you'd like to join..."
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
            ></textarea>
          </div>

          {/* Upload Resume */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Upload Resume
            </label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full text-black"
              accept=".pdf,.doc,.docx"
              required
            />
            <p className="text-gray-500 text-sm mt-1">
              Accepted formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-[#3B82F6] text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Application
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplyForm;
