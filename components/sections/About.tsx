// About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto flex items-center">
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <img
            src="your-profile-image.jpg"
            alt="Your Name"
            className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0"
          />
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            Hi, I'm [Your Name], a passionate and creative developer. I enjoy
            turning complex problems into simple, beautiful, and intuitive
            solutions. My main focus is on building web applications using
            cutting-edge technologies.
          </p>
          <p className="text-lg mb-6">
            With a strong foundation in computer science and hands-on experience
            in software development, I am constantly seeking to expand my
            knowledge and stay up-to-date with industry trends.
          </p>
          <p className="text-lg mb-6">
            My goal is to create software that not only meets the needs of users
            but also brings a positive impact to the world. Let's build
            something amazing together!
          </p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            <span className="text-gray-500">•</span>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline"
            >
              GitHub
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
