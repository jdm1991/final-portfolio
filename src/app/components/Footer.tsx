import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <Link href="/">Jack Miller</Link>
          </div>
          {/* Navigation */}
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <Link legacyBehavior href="#Home">
                  <a className="text-gray-600 hover:text-gray-800">
                    {`<Home />`}
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#about">
                  <a className="text-gray-600 hover:text-gray-800">
                    {`<About />`}
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#projects">
                  <a className="text-gray-600 hover:text-gray-800">
                    {`<Projects />`}
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="#contact">
                  <a className="text-gray-600 hover:text-gray-800">
                    {`<Contact />`}
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Social Icons */}
          <div className="flex space-x-4">
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
