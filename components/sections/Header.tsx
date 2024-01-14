import React from "react";

const Header = () => {
  return (
    <header id="header" className="py-56 text-white bg-gray-900">
      <div className="container flex flex-col items-center mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold">Hi there, my name is</h1>
          <h2 className="text-5xl font-extrabold">Lee Robinson</h2>
        </div>

        <p className="max-w-2xl mb-8 text-lg text-center">
          I'm the VP of Developer Experience at Vercel where my team helps
          developers build a faster web. I'm an advisor and investor in early
          stage startups.
        </p>

        {/* Image */}
        <img
          src="https://block.codescandy.com/assets/images/perosnal-portfolio/personal-profile-img.jpg" // Replace with the actual image URL
          alt="Lee Robinson"
          className="object-cover w-40 h-40 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
