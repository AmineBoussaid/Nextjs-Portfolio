'use client';

import { useEffect } from 'react';
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TypewriterComponent from 'typewriter-effect';

export default function Home() {
  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);
      
      // Check if it's a mobile device
      const isMobile = window.innerWidth < 768;
      const isSmall = window.innerWidth < 640;
      
      await tsParticles.load({
        id: "tsparticles",
        options: {
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            color: {
              value: "#FF7A18",
            },
            links: {
              color: "#FF7A18",
              distance: isSmall ? 110 : isMobile ? 120 : 150,
              enable: true,
              opacity: isSmall ? 0.4 : isMobile ? 0.4 : 0.5,
              width: isSmall ? 1.5 : isMobile ? 1.8 : 2.5,
            },
            move: {
              enable: true,
              speed: isMobile ? 0.5 : 1,
            },
            number: {
              value: isSmall ? 40 : isMobile ? 50 : 80,
            },
            opacity: {
              value: isMobile ? 0.2 : 0.3,
            },
            size: {
              value: isSmall ? { min: 1, max: 2 } : isMobile ? { min: 1.5, max: 3 } : { min: 2, max: 4 },
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: !isMobile,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: isMobile ? 2 : 4,
              },
              repulse: {
                distance: isMobile ? 100 : 200,
                duration: 0.4,
              },
            },
          },
        },
      });
    };

    initParticles();
  }, []);

  return (
    <section id="home" className="relative w-screen h-screen overflow-hidden">
      <div id="tsparticles" className="absolute inset-0" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center z-10 animate-fadeIn px-4">
          <h3 className="text-xl md:text-2xl mb-4 animate-slideDown text-orange-200 drop-shadow-lg">
            Hello, I&apos;m
          </h3>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-slideUp bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-600 to-orange-800 drop-shadow-lg">
            Amine Boussaid
          </h1>
          <div className="text-xl md:text-2xl mb-8 animate-slideDown text-orange-100 h-20">
            <TypewriterComponent
              options={{
                strings: [
                  'Full Stack Developer',
                  'AI & Data Scientist',
                  'Problem Solver',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center animate-fadeIn delay-500">
            <a 
              href="/profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 inline-flex justify-center items-center bg-transparent backdrop-blur-sm border-2 border-orange-500 rounded-full text-orange-100 px-8 py-3.5 font-medium hover:bg-orange-500/20 hover:border-orange-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-orange-500/25 relative overflow-hidden group text-base md:text-lg"
            >
              <span className="relative z-10">Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-800/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a 
              href="#about" 
              className="w-48 inline-flex justify-center items-center rounded-full bg-gradient-to-r from-orange-600 to-orange-800 px-8 py-3.5 font-medium hover:from-orange-700 hover:to-orange-900 text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-orange-600/50 relative overflow-hidden group text-base md:text-lg"
            >
              <span className="relative z-10">About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-6 animate-fadeIn delay-700">
            <a 
              href="https://github.com/amineboussaid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-900/30 hover:bg-orange-700/40 text-orange-200 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-300 shadow-md"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/amine-boussaid/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-900/30 hover:bg-orange-700/40 text-orange-200 hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-300 shadow-md"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
