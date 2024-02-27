import React from "react";
import Image from "next/image";
import working from '../../../public/assets/working.svg';
import { FaCookie, FaCar } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { TbLetterR } from "react-icons/tb";

function Experiences() {
  return (
    <div>
      <section className="text-gray-600 body-font" id="experiences">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-600">Experiences</h1>
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-0">
                <TbLetterR />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold title-font text-lg text-gray-900 mb-1 tracking-wider">
                    2024.1 - Reconhecer o Padrão (Tech Lead)
                  </h2>
                  <p className="leading-relaxed">
                    Development and maintenance of the digital magazine website using WordPress
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-0">
                <FaCar />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold title-font text-lg text-gray-900 mb-1 tracking-wider">
                    2023.10 - Império Brasil Proteção Veicular (Freelancer)
                  </h2>
                  <p className="leading-relaxed">
                    Handling automation in the billing process, website development and creation of artwork for social networks
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-0">
                <IoCode />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold title-font text-lg text-gray-900 mb-1 tracking-wider">
                    2022.9 - Landix Sistemas (Internship)
                  </h2>
                  <p className="leading-relaxed">
                  I worked on the migration of a legacy system to the cloud (AWS), using the most modern web technologies. Furthermore, all work was based on the agile Scrum methodology
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-0">
                <FaCookie />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-semibold title-font text-lg text-gray-900 mb-1 tracking-wider">
                    2020.8 - Indústria Alimentícia 3 de Maio (Young Apprentice)
                  </h2>
                  <p className="leading-relaxed">
                    I worked in production, handling
                    food and cashier sector. Furthermore, I acquired great skills and
                    skills that the market expects, such as proactivity, self-confidence and leadership.
                  </p>
                </div>
              </div>
            </div>
            <Image className="w-300 h-300 lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={working} alt="step" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experiences;
