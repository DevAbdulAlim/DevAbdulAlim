import React from "react";
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 text-white bg-gray-900">
      <div className="flex flex-col items-center mx-auto max-w-7xl">
        {/* Social Links */}
        <div className="mb-6">
          <h2 className="mb-4 text-3xl font-bold">Connect with Me</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-blue-500"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-gray-400"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://youtube.com/your-youtube"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-red-600"
            >
              <FaYoutube size={28} />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-blue-400"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>

        {/* Existing Footer Content */}
        <div>
          <p className="text-sm">
            &copy; 2024 Abdul Alim | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
