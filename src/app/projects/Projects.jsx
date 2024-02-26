import React from "react";
import Image from "next/image";
import projeto1 from '../../../public/assets/projeto1.svg'
import projeto2 from '../../../public/assets/projeto2.svg'
import projeto3 from '../../../public/assets/projeto3.svg'

function Projects() {
  return (
    <div>
      <section className="text-gray-600 body-font">
      <div className="flex flex-col text-center w-full">
            <h1 className="text-4xl font-bold title-font text-purple-600">
              My Projects 
            </h1>
        </div>
        
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image className="lg:h-480 md:h-360 w-full object-cover object-center" src={projeto1} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    LANDING PAGE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Império Pet
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-purple-600 inline-flex items-center md:mb-2 lg:mb-0"  href="https://imperiopet.vercel.app/" target="_blank">
                      View project
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image className="lg:h-480 md:h-360 w-full object-cover object-center" src={projeto2} alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    SYSTEM
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    AgendaYOU
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-purple-600 inline-flex items-center md:mb-2 lg:mb-0" href="https://agendayou.netlify.app/#/login" target="_blank">
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image className="lg:h-480 md:h-360 w-full object-cover object-center" src={projeto3}alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    WEBSITE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Casulo Cordel
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-purple-600 inline-flex items-center md:mb-2 lg:mb-0" href="https://alessandraavelino.github.io/casulo_cordel/#" target="_blank">
                      View Project
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
