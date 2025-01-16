import React from 'react';
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-16 py-6 bg-accent text-center text-white">
      <p>&copy; 2024 Zeeshan. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-4">
        <Link
          href="https://github.com/Zeeshan123kha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/zeeshan-khanna-1a0579224/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300"
          aria-label="LinkedIn"
        >
          <BsLinkedin size={24} />
        </Link>
      </div>
      <p className="mt-6">Powered by Next.js</p>
    </footer>
  );
};

export default Footer;

