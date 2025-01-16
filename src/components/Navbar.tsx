import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">Zeeshan</div>
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#projects">Projects</a></li>
          <li className="menuLink"><a href="#skills">Skills</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
          <li className="menuLink">
            <a
              href="/cv.png" 
              download="Zeeshan_CV" 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Download CV
            </a>
          </li>
        </ul>
        <AiOutlineMenu className="md:hidden" size={30} />
      </div>
    </div>
  );
}

export default Navbar;
