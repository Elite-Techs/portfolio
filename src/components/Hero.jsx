import React from 'react';
import { ChevronDown } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import HeroImage from '../assets/hero-image.jpeg';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-black text-white py-20 px-6 text-center"
    >
      <div className="container mx-auto max-w-4xl flex flex-col items-center">
        {/* Profile Image on Top */}
        <img
          src={HeroImage}
          alt="Prince Richard"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-2xl mb-6 hover:scale-105 transition-transform duration-300"
        />

        {/* Animated Intro Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Hello, I’m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Prince Richard
          </span>
        </h1>

        {/* Animated Cyber Roles */}
        <div className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-6 h-10">
          <Typewriter
            options={{
              strings: [
                'Cybersecurity & SOC Analyst',
                'Cloud Security Enthusiats',
                'Security Automation Engineer',
                'AI for Threat Detection',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* Paragraph */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mb-10">
          I specialize in securing enterprise environments through real-time SOC monitoring, threat intelligence, cloud security, and automated incident response using Python and AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/prince-richard-"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
          >
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
              Connect on LinkedIn
            </button>
          </a>
          <a
            href="public/Prince_Richard_Updated_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
          >
            <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300">
              View My Resume 
            </button>
          </a>
        </div>

        {/* Scroll Down Arrow */}
        <a href="#about" aria-label="Scroll to About Section">
          <ChevronDown className="animate-bounce text-green-400" size={36} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
