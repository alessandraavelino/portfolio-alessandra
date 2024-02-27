"use client"

import React, { useState} from "react";
import MenuMobile from "./HeaderMobile";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="text-white w-full bg-gray-700 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
          <a className="flex title-font items-center font-bold text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-purple-600 rounded-full hidden md:block"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Alessandra</span>
          </a>
          <nav className="md:ml-auto flex-wrap items-center text-base font-semibold justify-center hidden md:block">
            <a href="#home" className="mr-5 hover:text-purple-600 cursor-pointer">Home</a>
            <a href="#experiences" className="mr-5 hover:text-purple-600 cursor-pointer">Experiences</a>
            <a href="#education" className="mr-5 hover:text-purple-600 cursor-pointer">Education</a>
            <a href="#skills" className="mr-5 hover:text-purple-600 cursor-pointer">Skills</a>
            <a href="#projects" className="mr-5 hover:text-purple-600 cursor-pointer">Projects</a>
          </nav>
          <a href="#contact" className=" items-center font-bold bg-purple-600 border-0 py-1 px-3 focus:outline-none cursor-pointer hover:bg-purple-800 rounded text-base mt-4 md:mt-0 hidden md:block">
            Contact me
            
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
