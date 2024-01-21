import Lottie from "lottie-react";
import React from "react";
import animationData from "../../public/img/about.json";
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="px-3 py-16 text-white bg-gray-900">
      <div className="flex flex-col items-center mx-auto max-w-7xl md:flex-row">
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
            Hi, I&apos;m Abdul Alim, with over five years of experience in
            building and maintaining web applications. I enjoy turning complex
            problems into simple, beautiful, and intuitive solutions. My main
            focus is on building web applications using cutting-edge
            technologies.
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            I&apos;ve had the opportunity to work with well-known companies and
            diverse teams, including Teletalk Bangladesh Ltd. This journey has
            equipped me with a deep understanding of the industry, driving my
            passion for delivering high-quality and innovative web experiences.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            With a strong foundation in computer science and hands-on experience
            in software development, I am constantly seeking to expand my
            knowledge and stay up-to-date with industry trends.
          </p>
          <div className="flex flex-wrap items-center mt-4 space-x-4">
            <div className="flex items-center">
              <FaLinkedin className="text-xl text-blue-500" />
              <span className="ml-2 text-gray-500 hover:underline">
                LinkedIn
              </span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center">
              <FaGithub className="text-xl text-gray-500" />
              <span className="ml-2 text-gray-500 hover:underline">GitHub</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center">
              <FaTwitter className="text-xl text-blue-500" />
              <span className="ml-2 text-gray-500 hover:underline">
                Twitter
              </span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center">
              <FaDev className="text-xl text-gray-500" />
              <span className="ml-2 text-gray-500 hover:underline">DEV.to</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
