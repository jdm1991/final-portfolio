"use client";

/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";


export default function Hero() {
  return (
    <div className="mt-20">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12 lg:mr-24 xl:mr-44 rounded-2xl">
            <Image
              src="/jackpicpng.png"
              alt="jackpic"
              width={350}
              height={300}
              className="icon transition-transform duration-300 hover:scale-110 rounded-full"
              onClick={() =>
                (window.location.href = "https://github.com/jdm1991")
              }
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Hello. I'm Jack,
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#182b3a] to-[#20a4f3]">
              A Full Stack Web Developer
            </h3>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
              <button className="font-normal text-base font-poppins transition-all duration-300 w-full sm:w-40 h-14 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-105 hover:text-gray-400 hover:shadow-gray-400/50 hover:shadow-silver-500 hover:text-silver-300">
                Download CV
              </button>
              <button className="font-normal text-base font-poppins transition-all duration-300 w-full sm:w-40 h-14 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-105 hover:text-gray-400 hover:shadow-gray-400/50 hover:shadow-silver-500 hover:text-silver-300">
                Contact
              </button>
            </div>
            <div className="flex mt-8 gap-4 justify-center sm:justify-start">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={54}
                height={54}
                className="icon transition-transform duration-300 hover:scale-110"
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/your-profile")
                }
              />
              <Image
                src="/github.png"
                alt="Github"
                width={54}
                height={54}
                className="icon transition-transform duration-300 hover:scale-110"
                onClick={() =>
                  (window.location.href = "https://github.com/jdm1991")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
