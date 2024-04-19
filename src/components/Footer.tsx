import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <div className="flex justify-center mb-4 md:mb-0">
              <div className="relative h-10 w-10 dark:shadow-[0_0_20px_10px_#3b82f6] transition-all duration-300">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  fill={true}
                  className="object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <Link href="#Home" legacyBehavior>
              <a className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 dark:shadow-[0_0_20px_5px_#3b82f6] px-2 py-1 rounded-md transition-all duration-300">
                &lt;Home /&gt;
              </a>
            </Link>
            <Link href="#About" legacyBehavior>
              <a className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 dark:shadow-[0_0_20px_5px_#3b82f6] px-2 py-1 rounded-md transition-all duration-300">
                &lt;About /&gt;
              </a>
            </Link>
            <Link href="#Projects" legacyBehavior>
              <a className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 dark:shadow-[0_0_20px_5px_#3b82f6] px-2 py-1 rounded-md transition-all duration-300">
                &lt;Projects /&gt;
              </a>
            </Link>
            <Link href="#Contact" legacyBehavior>
              <a className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 dark:shadow-[0_0_20px_5px_#3b82f6] px-2 py-1 rounded-md transition-all duration-300">
                &lt;Contact /&gt;
              </a>
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://github.com/your-github-profile">
              <FaGithub className="text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 dark:shadow-[0_0_20px_5px_#3b82f6] rounded-full p-1 transition-all duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/your-linkedin-profile">
              <FaLinkedin className="text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 dark:shadow-[0_0_20px_5px_#3b82f6] rounded-full p-1 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Jack Miller. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
