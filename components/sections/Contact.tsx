// Contact.js
import React from "react";
import { Button } from "../ui/button";
import { BiMailSend, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 text-white bg-gray-800">
      <div className="flex items-center justify-center mx-auto max-w-7xl">
        {/* Left Column - Form */}
        <div className="w-full mb-8 md:w-1/2 md:mb-0 md:pr-8">
          <h2 className="mb-6 text-3xl font-semibold text-center">
            Contact Me
          </h2>
          <p className="mb-8 text-lg text-center">
            Feel free to reach out if you have any questions or opportunities.
          </p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 text-white bg-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 text-white bg-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 text-white bg-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <Button type="submit" variant="ghost">
              Send Message
            </Button>
          </form>
        </div>

        {/* Right Column - Contact Info */}
        <div className="w-full md:w-1/2">
          <h3 className="mb-4 text-2xl font-semibold text-center">
            Contact Information
          </h3>
          <div className="flex flex-col items-center justify-center space-y-6">
            <div>
              <div className="flex items-center mb-4">
                <span className="mr-4">
                  <BiMailSend size={30} color="#F59E0B" />
                </span>
                <div>
                  <p className="mb-1 text-lg font-semibold text-gray-300">
                    Email:
                  </p>
                  <p className="text-lg text-gray-300">
                    your.email@example.com
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-4">
                  <BiPhone size={30} color="#10B981" />
                </span>
                <div>
                  <p className="mb-1 text-lg font-semibold text-gray-300">
                    Phone:
                  </p>
                  <p className="text-lg text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-4">
                  <BiMap size={30} color="#3B82F6" />
                </span>
                <div>
                  <p className="mb-1 text-lg font-semibold text-gray-300">
                    Location:
                  </p>
                  <p className="text-lg text-gray-300">City, Country</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {/* Social Media Icons */}
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                >
                  <FaInstagram size={30} />
                </a>
                {/* Add more social media links and icons as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
