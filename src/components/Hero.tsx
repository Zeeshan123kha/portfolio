import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between h-full container mx-auto px-6 lg:px-12 mt-6">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-blue-900">
            Hi, I'm <span className="text-blue-500">Zeeshan</span>
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-600">
            A Passionate Web Developer
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl">
            I specialize in creating dynamic, beautiful, and user-friendly web experiences.
            Let’s build something amazing together.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              View My Projects
            </a>
            <a
              href="/app/cv/cv.png"
              download="Zeeshan_CV"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/zeeshan-photos.png.png"
            alt="Zeeshan"
            className="w-2/3 lg:w-3/4 max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;


