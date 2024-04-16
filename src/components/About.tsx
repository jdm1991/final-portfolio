"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white py-20 mt-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-stretch justify-between">
          <div className="md:w-1/3 md:order-last mt-8">
            <Image
              src="/Jack.jpg"
              alt="Jack"
              width={300}
              height={300}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <div className="p-8 rounded-lg relative h-full">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 blur-xl opacity-10"></div>
              <div className="relative z-10 bg-white rounded-lg border-2 border-blue-500 border-opacity-20 p-6 h-full">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  About Me
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-6">
                  I am a passionate Full Stack Web Developer with extensive
                  experience in building robust and scalable web applications. I
                  specialize in React, Node.js, and various frontend and backend
                  technologies.
                </p>
                <p className="text-lg md:text-xl text-gray-600 mb-10">
                  With a strong background in the I.T sector and a good
                  understanding of software engineering principles, I strive to
                  create efficient, maintainable, and user-friendly solutions
                  that meet the highest industry standards.
                </p>
                <div className="hidden xl:flex justify-between items-center mb-4">
                  <div className="flex xl:flex-row">
                    <div className="bg-white border border-black rounded-md p-2 mr-20 flex items-center w-48 xl:block hidden">
                      <Image
                        src="/education.png"
                        alt="Education Icon"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600">
                        Proficient in both front and back-end development.
                      </span>
                    </div>
                    <div className="bg-white border border-black rounded-md p-2 flex items-center w-48 xl:block hidden">
                      <Image
                        src="/availability.png"
                        alt="Availability Icon"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600">
                        Available on a full, part-time or contracting basis.
                      </span>
                    </div>
                  </div>
                  <Link href="/JackMillerResume.pdf" download>
                    <button className="font-normal text-base font-poppins transition-all duration-300 w-full sm:w-40 h-14 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-105 hover:text-gray-400 hover:shadow-gray-400/50 hover:shadow-silver-500 hover:text-silver-300">
                      Download CV
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
