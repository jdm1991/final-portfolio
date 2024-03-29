import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border-2 border-blue-500 border-opacity-20 p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Front-end Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-10">
              {/* Replace with your front-end technology icons and text */}
              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
                    alt="HTML"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  HTML
                </span>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4 1-auto">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
                    alt="CSS"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">CSS</span>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
                    alt="JavaScript"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  JavaScript
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
                    alt="React"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  React.js
                </span>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                    alt="Next"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  Next.js
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/303360/nodejs-logo.svg"
                    alt="Node"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  Node.js
                </span>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/374118/tailwind.svg"
                    alt="Tailwind"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  TailwindCSS
                </span>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://icons.veryicon.com/png/o/application/skills-section/bootstrap-2.png"
                    alt="Bootstrap"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  Bootstrap
                </span>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/354521/vitejs.svg"
                    alt="vite"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  ViteJS
                </span>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
                    alt="vscode"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  VS Code
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border-2 border-blue-500 border-opacity-20 p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Back-end Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-10">
              {/* Replace with your back-end technology icons and text */}
              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/303360/nodejs-logo.svg"
                    alt="Node"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  Node.js
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
                    alt="JavaScript"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  Express.js
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://p7.hiclipart.com/preview/396/90/545/postgresql-database-logo-computer-icons-replication-software-developer.jpg"
                    alt="Postgres"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  PostgreSQL
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    alt="Git"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">Git</span>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/354210/prisma.svg"
                    alt="Prisma"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  Prisma
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                    alt="MySQL"
                    width={48}
                    height={48}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  MySQL
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-12 h-12 mr-4">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.pngfind.com/pngs/m/68-684650_test-frameworks-jasmine-js-logo-png-transparent-png.png"
                    alt="Jasmine"
                    width={48}
                    height={49}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800">
                  Jasmine
                </span>
              </div>
              {/* Add more back-end technologies */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
