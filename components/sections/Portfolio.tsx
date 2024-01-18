import React from "react";

const Portfolio = () => {
  // Sample project data
  const projects = [
    {
      title: "Oxyport Full featured ecommerce website",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
    {
      title: "Full Featured Ecommerce website(PERN)",
      tags: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
    {
      title: "Online Coursing Website",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
    {
      title: "Medical",
      tags: ["React.js", "Tailwind CSS"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
    {
      title: "Elearning website",
      tags: ["React.js", "MUI", "Node.js"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
    {
      title: "Invoice Management System",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
  ];

  return (
    <section id="portfolio" className="py-12 bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">
          Portfolio
        </h2>
        <p className="mb-8 text-center text-gray-400">
          Explore some highlights from my portfolio. Here&apos;s a glimpse into
          my work over the past few years.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden bg-gray-800 rounded-md shadow-md"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full transition-all duration-500 h-80 hover:scale-110"
                />
              </div>

              <div className="p-6">
                {/* Project Title */}
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-sm text-white bg-gray-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
