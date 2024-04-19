"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="bg-white dark:bg-gray-900 min-h-screen pt-20 pb-12 sm:pb-20 md:pb-24"
      style={{ height: "calc(100vh - 16vh)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Hello. I'm Jack,
            </h1>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 sm:mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#182b3a] to-[#20a4f3] dark:from-[#ffffff] dark:to-[#a3a3a3]">
              A Full Stack Web Developer
            </h3>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
              <Link href="/JackMillerResume.pdf" download>
                <button className="font-normal text-base font-poppins transition-all duration-300 w-full sm:w-40 h-14 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-105 hover:text-gray-400 hover:shadow-gray-400/50 hover:shadow-silver-500 hover:text-silver-300 dark:from-gray-800 dark:to-blue-900">
                  Download CV
                </button>
              </Link>
              <Link href="#Contact" passHref>
                <button className="font-normal text-base font-poppins transition-all duration-300 w-full sm:w-40 h-14 rounded-full text-white bg-gradient-to-br from-black to-[#04619f] hover:bg-opacity-90 hover:scale-105 hover:text-gray-400 hover:shadow-gray-400/50 hover:shadow-silver-500 hover:text-silver-300 dark:from-gray-800 dark:to-blue-900">
                  Contact
                </button>
              </Link>
            </div>
            <div className="flex mt-8 gap-4 justify-center sm:justify-start">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={54}
                height={54}
                className="icon transition-transform duration-300 hover:scale-110 dark:shadow-[0_0_20px_5px_#3b82f6] rounded-full"
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/jack-miller-495798281/")
                }
              />
              <Image
                src="/github.png"
                alt="Github"
                width={54}
                height={54}
                className="icon transition-transform duration-300 hover:scale-110 dark:shadow-[0_0_20px_5px_#3b82f6] rounded-full"
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
