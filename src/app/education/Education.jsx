import React from 'react'
import Image from 'next/image';
import graduation from '../../../public/assets/graduation.svg';

function Education() {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-600">Education</h1>
      <Image alt="feature" className="object-cover object-center h-full w-full" src={graduation} />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Estácio - Postgraduate in Software Engineering</h2>
          <p className="leading-relaxed text-base">Software architecture, software quality, project management, requirements engineering and software security. They also explore emerging areas such as cloud computing, DevOps, and specific aspects of research such as machine learning applied to software development.</p>
          
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
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