import React from 'react'
import Image from 'next/image'
import profile from '../../../public/assets/profile.svg'

function Hero() {
  return (
    <div>
        <section className="bg-gray-700 body-font" id="home">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src={profile} />
            <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Alessandra Avelino</h1>
            <p className="mb-8 text-2xl leading-relaxed text-purple-600">Web Developer & Software Engineer</p>
            <div className="flex justify-center">
                <a href="#projects" className="inline-flex text-white bg-purple-600 border-0 py-2 px-6 font-bold focus:outline-none hover:bg-purple-800 rounded text-lg cursor-pointer">View Projects</a>
                <a href="https://drive.usercontent.google.com/u/0/uc?id=1gHbmYK933H7tY8D25bhhLljNTBCaitC4&export=download" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Download CV</a>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Hero