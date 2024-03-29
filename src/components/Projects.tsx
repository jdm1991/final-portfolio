import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="bg-white min-h-[70vh] py-20">
      <div className="container mx-auto px-4 md:px-8 rounded-lg border-2 border-blue-500 border-opacity-20 p-6">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="bg-white grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative h-48">
                <Image
                  src="/LandRover.jpg"
                  alt="LandRover"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Land Rover Defender Dealership
                </h3>
                <p className="text-gray-600 mb-4">
                  Created as a passion project, this Full Stack development
                  encapsulated the use of Next.js, Node.js, Tailwind & Prisma.
                  The result being a fully interactive and responsive website,
                  that encapsulates the essentials of any car dealership.
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <Link href="/project1">
                <button className="font-normal text-base font-poppins transition-all duration-300 w-32 h-12 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-110 hover:text-gray-400 hover:shadow-gray-400/50">
                  Live Demo
                </button>
              </Link>
              <Link href="https://github.com/jdm1991/individual-project">
                <button className="font-normal text-base font-poppins transition-all duration-300 w-32 h-12 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-110 hover:text-gray-400 hover:shadow-gray-400/50">
                  GitHub
                </button>
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative h-48">
                <Image
                  src="/Express.jpg"
                  alt="ExpressWebDesigns"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Express Web Designs
                </h3>
                <p className="text-gray-600 mb-4">
                  Express Web Designs came into existence as a way to showcase a
                  website that is centred on crafting responsive, sleek and
                  modern websites for its customers. Constructed using React.js,
                  Node.js, and Tailwind CSS, it is fully operational and
                  responsive.
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <Link href="https://expresswebdesign.netlify.app/">
                <button className="font-normal text-base font-poppins transition-all duration-300 w-32 h-12 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-110 hover:text-gray-400 hover:shadow-gray-400/50">
                  Live Demo
                </button>
              </Link>
              <Link href="https://github.com/jdm1991/ExpressWebDesigns">
                <button className="font-normal text-base font-poppins transition-all duration-300 w-32 h-12 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-110 hover:text-gray-400 hover:shadow-gray-400/50">
                  GitHub
                </button>
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg overflow-hidden flex flex-col justify-between">
            <div>
              <div className="relative h-48">
                <Image
                  src="/project3.jpg"
                  alt="Project 3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  BookBank Book Store
                </h3>
                <p className="text-gray-600 mb-4">
                  BookBank was created to showcase a different type of website,
                  notably an interactive e-commerce store that allows people to
                  search books by genre, as well as by name. Constructed using
                  Next.js, Prisma, Node.js and Tailwind, BookBank has been a
                  complex task, yet immensely satisfying.
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-4">
              <Link href="/project3">
                <button className="font-normal text-base font-poppins transition-all duration-300 w-32 h-12 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-110 hover:text-gray-400 hover:shadow-gray-400/50">
                  Live Demo
                </button>
              </Link>
              <Link href="/github/project3">
                <button className="font-normal text-base font-poppins transition-all duration-300 w-32 h-12 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-110 hover:text-gray-400 hover:shadow-gray-400/50">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
