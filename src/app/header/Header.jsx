import React from "react";

function Header() {
  return (
    <div>
      <header className="text-white fixed top-0 w-full bg-gray-700 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font items-center font-bold text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-purple-600 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Alessandra | Portfólio</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base font-semibold justify-center">
            <a className="mr-5 hover:text-purple-600 cursor-pointer">Home</a>
            <a className="mr-5 hover:text-purple-600 cursor-pointer">Experiences</a>
            <a className="mr-5 hover:text-purple-600 cursor-pointer">Education</a>
            <a className="mr-5 hover:text-purple-600 cursor-pointer">Skills</a>
          </nav>
          <button className="inline-flex items-center font-bold bg-purple-600 border-0 py-1 px-3 focus:outline-none hover:bg-purple-800 rounded text-base mt-4 md:mt-0">
            My Projects
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
