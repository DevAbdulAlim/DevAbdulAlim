import Lottie from "lottie-react";
import React from "react";
import animationData from "../../public/img/about.json";

const About = () => {
  return (
    <section id="about" className="py-16 text-white bg-gray-900">
      <div className="container flex flex-col items-center mx-auto md:flex-row">
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2 md:pr-8">
          {/* Lottie Animation */}

          <Lottie
            animationData={animationData}
            loop={true}
            autoPlay={true}
            className="w-full h-full rounded-md"
          />
        </div>

        {/* Right Column - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 text-4xl font-bold">About Me</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Hi, I'm Abdul Alim, with over five years of experience in building
            and maintaining web applications. I enjoy turning complex problems
            into simple, beautiful, and intuitive solutions. My main focus is on
            building web applications using cutting-edge technologies.
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            I've had the opportunity to work with well-known companies and
            diverse teams, including Teletalk Bangladesh Ltd. This journey has
            equipped me with a deep understanding of the industry, driving my
            passion for delivering high-quality and innovative web experiences.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            With a strong foundation in computer science and hands-on experience
            in software development, I am constantly seeking to expand my
            knowledge and stay up-to-date with industry trends.
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
