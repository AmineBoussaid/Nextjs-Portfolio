import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section className="w-full text-center py-20 px-4 sm:px-6 lg:px-8 bg-black" id="about">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg font-bold text-orange-400">My Introduction</h3>
        <h2 className="text-4xl font-bold text-orange-700 mt-2">About Me</h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Container */}
          <div className="flex justify-center">
              <Image
                src="/images/profile.jpeg"
                className="relative rounded-full h-80 w-80 object-cover shadow-2xl shadow-orange-500/20"
                alt="Amine Boussaid - Full Stack & AI Developer"
                width={320}
                height={320}
                priority
              />
          </div>

          {/* Content Container */}
          <div className="space-y-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 border-l-orange-700 border-l-4 p-5 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <i className="fas fa-award text-orange-700 text-2xl mb-3"></i>
                <h3 className="font-bold text-lg">Experience</h3>
                <span className="text-orange-300">1 Year</span>
              </div>

              <div className="bg-gray-800/50 border-l-orange-700 border-l-4 p-5 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <i className="fas fa-briefcase text-orange-700 text-2xl mb-3"></i>
                <h3 className="font-bold text-lg">Projects</h3>
                <span className="text-orange-300">10+ Done</span>
              </div>

              <div className="bg-gray-800/50 border-l-orange-700 border-l-4 p-5 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <i className="fas fa-headset text-orange-700 text-2xl mb-3"></i>
                <h3 className="font-bold text-lg">Support</h3>
                <span className="text-orange-300">24/7 Online</span>
              </div>
            </div>  

            {/* Description */}
            <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-l-orange-700">
              <p className="text-left text-base sm:text-lg leading-relaxed">
                Full Stack <span className="text-orange-400">Web & Mobile Developer</span> with a strong interest in <span className="text-orange-400">Cloud</span>, <span className="text-orange-400">DevOps</span>, and <span className="text-orange-400">Artificial Intelligence</span>, experienced in building innovative, high-performance solutions with a focus on modern software architecture.
              </p>
            </div>

            {/* Contact Button */}
            <div className="text-center pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-orange-700 rounded-lg hover:bg-orange-600 transition-all duration-300 group"
              >
                Let&apos;s Build Something Intelligent
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
