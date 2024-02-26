import React from "react";
import Image from "next/image";
import working from '../../../public/assets/working.svg';


function Experiences() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-600">Experiences</h1>
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
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
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
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
