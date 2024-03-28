import React from "react";
import Link from "next/link";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="p-8 rounded-lg relative">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 blur-xl opacity-10"></div>
          <div className="relative z-10 bg-white rounded-lg border-2 border-blue-500 border-opacity-20 p-6">
            <p className="text-center mb-4">Get in touch today</p>
            <h1 className="text-5xl font-bold text-center mb-12">Contact Me</h1>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
              {/* Email Button */}
              <Link href="mailto:your-email@example.com">
                <button className="flex items-center space-x-4 px-8 py-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                  <FaEnvelope className="text-2xl" />
                  <span className="text-xl font-semibold">
                    Send me an email
                  </span>
                </button>
              </Link>

              {/* LinkedIn Button */}
              <Link href="https://www.linkedin.com/in/your-linkedin-profile">
                <button className="flex items-center space-x-4 px-8 py-4 bg-gradient-to-br from-[#0077B5] to-[#0A66C2] text-white rounded-full shadow-lg hover:from-[#0A66C2] hover:to-[#0077B5] transition-all duration-300">
                  <FaLinkedin className="text-2xl" />
                  <span className="text-xl font-semibold">
                    Connect on LinkedIn
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
