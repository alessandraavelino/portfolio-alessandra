"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // Certifique-se de importar corretamente a biblioteca de imagem que você está utilizando

const HeaderMobile = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden z-10 bg-gray-700 py-2">
      <button
        onClick={toggleMenu}
        className="absolute ml-1 top-3 left-10 m-4 border-2 rounded p-2  text-white"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>

        )}
      </button>
      {isOpen && (
        <div className="absolute top-0 pb-10 left-0 w-full bg-gray-700 shadow-md">
          <button onClick={toggleMenu} className="absolute top-3 left-10 m-4 border-2 rounded p-2  text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="container mx-auto flex flex-col pl-10 items-center">
          <a className="flex title-font items-center font-bold text-white mb-4 md:mb-0">
            
            <span className="text-xl pt-10">Alessandra </span>
          </a>
            <nav className={`font-semibold flex flex-col items-center text-base justify-center ${isOpen ? '' : 'hidden'}`}>
            <a href="#home" className="mr-5 hover:text-purple-600 cursor-pointer">Home</a>
            <a href="#experiences" className="mr-5 hover:text-purple-600 cursor-pointer">Experiences</a>
            <a href="#education" className="mr-5 hover:text-purple-600 cursor-pointer">Education</a>
            <a href="#skills" className="mr-5 hover:text-purple-600 cursor-pointer">Skills</a>
            <a href="#projects" className="mr-5 hover:text-purple-600 cursor-pointer">Projects</a>
            </nav>
            <a href="#contact" className=" items-center font-bold bg-purple-600 border-0 py-1 px-3 focus:outline-none cursor-pointer hover:bg-purple-800 rounded text-base mt-4 md:mt-0 ">
            Contact me
            
          </a>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;