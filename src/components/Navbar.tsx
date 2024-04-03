"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-6 sticky top-0 z-50 border-b border-gray-200 h-16vh">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link href="/" legacyBehavior>
          <div className="flex items-center relative h-12 w-12 ml-4 md:ml-8">
            <Image
              src="/logo.png"
              alt="Logo"
              fill={true}
              className="object-contain"
              style={{
                objectPosition: "center",
                transform: "scale(3.0)",
              }}
            />
          </div>
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
              <Link href="#About" legacyBehavior>
                <a className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0">
                  &lt;About /&gt;
                </a>
              </Link>
            </li>
            <li>
              <Link href="#Experience" legacyBehavior>
                <a className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0">
                  &lt;Experience /&gt;
                </a>
              </Link>
            </li>
            <li>
              <Link href="#Projects" legacyBehavior>
                <a className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0">
                  &lt;Projects /&gt;
                </a>
              </Link>
            </li>
            <li>
              <Link href="#Contact" legacyBehavior>
                <a className="block text-gray-700 hover:text-gray-900 py-2 lg:py-0">
                  &lt;Contact /&gt;
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
