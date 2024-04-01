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
            <div className="grid grid-cols-3 gap-8 justify-items-center">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
                    alt="HTML"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  HTML
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png"
                    alt="CSS"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  CSS
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
                    alt="JavaScript"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  JavaScript
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
                    alt="React"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  React.js
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                    alt="Next"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  Next.js
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png"
                    alt="VsCode"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  VS Code
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/374118/tailwind.svg"
                    alt="Tailwind"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  TailwindCSS
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://icons.veryicon.com/png/o/application/skills-section/bootstrap-2.png"
                    alt="Bootstrap"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  Bootstrap
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-16 h-16">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/354521/vitejs.svg"
                    alt="vite"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  ViteJS
                </span>
              </div>
            </div>
          </div>
          {/* Back end Tech Stack */}
          <div className="bg-white rounded-lg border-2 border-blue-500 border-opacity-20 p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Back-end Tech Stack
            </h3>
            <div className="grid grid-cols-3 gap-8 justify-items-center">
              <div className="flex flex-col items-center group">
                <div className="w-[58px] h-[58px]">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/303360/nodejs-logo.svg"
                    alt="Node"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  Node.js
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-[58px] h-[58px]">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png"
                    alt="JavaScript"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  Express.js
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-[58px] h-[58px]">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://p7.hiclipart.com/preview/396/90/545/postgresql-database-logo-computer-icons-replication-software-developer.jpg"
                    alt="Postgres"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  PostgreSQL
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-[58px] h-[58px]">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    alt="Git"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  Git
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-[58px] h-[58px]">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/354210/prisma.svg"
                    alt="Prisma"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  Prisma
                </span>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-[58px] h-[58px]">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                    alt="MySQL"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  MySQL
                </span>
              </div>

              <div className="flex flex-col items-center group col-start-2">
                <div className="w-[58px] h-[58px]">
                  <Image
                    className="transition duration-500 ease-in-out group-hover:animate-spin-once"
                    src="https://www.pngfind.com/pngs/m/68-684650_test-frameworks-jasmine-js-logo-png-transparent-png.png"
                    alt="Jasmine"
                    width={58}
                    height={58}
                  />
                </div>
                <span className="text-xl font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition duration-500 mt-2">
                  Jasmine
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
