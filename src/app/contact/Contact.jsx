import React from "react";

function Contact() {
  return (
    <div>
      <section class="text-white body-font relative bg-gray-700" id="contact">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-4xl font-bold title-font mb-4 text-white">
              Contact Me
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                I am available to talk about technologies and open to new opportunities
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-opacity-50 rounded border border-purple-600 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-opacity-50 rounded border border-purple-600 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-opacity-50 rounded border border-purple-600 focus:border-purple-600 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-purple-600 border-0 py-2 px-8 focus:outline-none hover:bg-purple-800 rounded text-lg">
                  Send Message
                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a class="text-white">alessandraavelino21@gmail.com</a>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
