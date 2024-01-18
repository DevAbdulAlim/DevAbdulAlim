import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/img/code1.json";

const Header = () => {
  return (
    <header
      id="header"
      className="flex items-center justify-center py-20 text-white bg-gray-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center ">
          <img
            src="https://block.codescandy.com/assets/images/perosnal-portfolio/personal-profile-img.jpg"
            alt="Your Name"
            className="object-cover mb-6 rounded-full w-30 h-30"
          />

          <div className="mb-6 text-center">
            <h1 className="mb-5 text-4xl font-bold font-poppins">
              Hi there, my name is
            </h1>
            <h2 className="text-5xl font-extrabold font-poppins">Abdul Alim</h2>
          </div>

          <p className="max-w-2xl mb-8 text-lg text-center font-poppins">
            I am a full stack web developer with over five years of experience
            developing and maintaining web apps. I have experience with both
            front-end and back-end technologies, as well as some knowledge of
            DevOps.
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="flex-grow hidden lg:flex">
          <Lottie
            animationData={animationData}
            loop={true}
            autoPlay={true}
            className="w-full rounded-2xl h-96"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
