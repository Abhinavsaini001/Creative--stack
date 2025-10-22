// src/components/ContactLink.jsx
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactLink = () => {
  return (
    <div className="bg-[#FAF0EB] py-12 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4 rounded-lg overflow-hidden border border-white/40">
        
        {/* Phone */}
        <div className="flex flex-col items-center justify-center p-6 border-r border-white/40 last:border-none">
          <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <p className="uppercase text-sm tracking-widest text-red-400 mb-1">
            Phone
          </p>
          <p className="text-gray-800">+91 8077073053</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center justify-center p-6 border-r border-white/40 last:border-none">
          <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <p className="uppercase text-sm tracking-widest text-red-400 mb-1">
            Email
          </p>
          <p className="text-gray-800">stackadda@gmail.com</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center justify-center p-6">
          <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center mb-3">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <p className="uppercase text-sm tracking-widest text-red-400 mb-1">
            Address
          </p>
          <p className="text-gray-800 text-center">
            StackAdda , No 123, 2nd Floor, 70th Cross, 5th Block, Rajaji Nagara, Bengaluru, Karnataka 560010
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactLink;
