import React from 'react'
import Image from 'next/image';
import graduation from '../../../public/assets/graduation.svg';
import { FaBookOpen } from "react-icons/fa";

function Education() {
  return (
    <div>
        <section className="text-gray-600 body-font" id="education">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-purple-600">Education</h1>
      <Image alt="feature" className="object-cover object-center h-full w-full" src={graduation} />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-600 mb-5">
        <FaBookOpen />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Estácio - Postgraduate in Software Engineering</h2>
          <p className="leading-relaxed text-base">Software architecture, software quality, project management, requirements engineering and software security. They also explore emerging areas such as cloud computing, DevOps, and specific aspects of research such as machine learning applied to software development.</p>
          
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-purple-600 mb-5">
          <FaBookOpen />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">IFPB - Graduation in Systems for Internet</h2>
          <p className="leading-relaxed text-base">Skills to create interactive applications and websites, working with programming languages such as HTML, CSS, JavaScript and web frameworks. Furthermore, we manage databases, integrate systems and guarantee the functionality and security of applications.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Education