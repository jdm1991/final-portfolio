import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <div className="flex justify-center mb-4 md:mb-0">
              <div className="relative h-10 w-10">
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
              <a className="text-gray-600 hover:text-gray-800">
                &lt;Home /&gt;
              </a>
            </Link>
            <Link href="#About" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800">
                &lt;About /&gt;
              </a>
            </Link>
            <Link href="#Projects" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800">
                &lt;Projects /&gt;
              </a>
            </Link>
            <Link href="#Contact" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-800">
                &lt;Contact /&gt;
              </a>
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://github.com/your-github-profile">
              <FaGithub className="text-2xl text-gray-600 hover:text-gray-800 transition-colors duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/your-linkedin-profile">
              <FaLinkedin className="text-2xl text-gray-600 hover:text-gray-800 transition-colors duration-300" />
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Jack Miller. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
