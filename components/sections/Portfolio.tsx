import React from "react";

const Portfolio = () => {
  // Sample project data
  const projects = [
    {
      title: "JAMstack & Headless Web Development Agency",
      tags: ["Web Development", "JAMstack", "Headless", "Agency"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
    {
      title: "Figma Bootstrap",
      tags: ["Design", "Figma", "Bootstrap"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
    {
      title: "Figma Bootstrap",
      tags: ["Design", "Figma", "Bootstrap"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
    {
      title: "Figma Bootstrap",
      tags: ["Design", "Figma", "Bootstrap"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
    {
      title: "Figma Bootstrap",
      tags: ["Design", "Figma", "Bootstrap"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
    {
      title: "Figma Bootstrap",
      tags: ["Design", "Figma", "Bootstrap"],
      image:
        "https://block.codescandy.com/assets/images/perosnal-portfolio/personal-portfolio-img-2.jpg", // Replace with the actual image URL
    },
  ];

  return (
    <section className="py-12 bg-gray-950">
      <div className="container mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">
          Portfolio
        </h2>
        <p className="mb-8 text-center text-gray-400">
          Explore some highlights from my portfolio. Here's a glimpse into my
          work over the past few years.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-md shadow-md"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48"
              />

              <div className="p-6">
                {/* Project Title */}
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-sm text-white bg-gray-900 rounded"
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
