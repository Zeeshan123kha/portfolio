import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="container pt-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-medium">Zeeshan</div>
        <ul className="gap-10 lg:gap-16 hidden md:flex">
          <li className="menuLink"><Link href="#hero">Home</Link></li>
          <li className="menuLink"><Link href="#about">About</Link></li>
          <li className="menuLink"><Link href="#projects">Projects</Link></li>
          <li className="menuLink"><Link href="#skills">Skills</Link></li>
          <li className="menuLink"><Link href="#contact">Contact</Link></li>
          <li className="menuLink">
            <Link
              href="/cv.png" 
              download="Zeeshan_CV" 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Download CV
            </Link>
          </li>
        </ul>
        <AiOutlineMenu className="md:hidden" size={30} />
      </div>
    </div>
  );
}

export default Navbar;
