"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-6 sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link legacyBehavior href="/">
          <a className="text-gray-900 font-bold text-3xl">Jack Miller</a>
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-900 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.828 4.829z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 absolute lg:static top-full left-0 right-0 bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
        >
          <ul className="lg:flex lg:space-x-8 text-xl">
            <li>
              <Link legacyBehavior href="#about">
                <a className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0">
                  {`<About />`}
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#experience">
                <a className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0">
                  {`<Experience />`}
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#projects">
                <a className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0">
                  {`<Projects />`}
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="#contact">
                <a className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0">
                  {`<Contact />`}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
