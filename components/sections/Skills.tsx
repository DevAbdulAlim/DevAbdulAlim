import React from "react";
import { Button } from "../ui/button";

const Skills = () => {
  // Sample skills data
  const skills = [
    {
      title: "HTML & CSS",
      description:
        "Nulla vitae elit libero, a pharetra augue id elit non mi porta gravida.",
    },
    {
      title: "Figma UI Design",
      description:
        "Nulla vitae elit libero, a pharetra augue id elit non mi porta gravida.",
    },
    {
      title: "React",
      description:
        "Nulla vitae elit libero, a pharetra augue id elit non mi porta gravida.",
    },
    {
      title: "Node.js",
      description:
        "Nulla vitae elit libero, a pharetra augue id elit non mi porta gravida.",
    },
    // Add more skills as needed
  ];

  return (
    <section id="skills" className="py-56 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="lg:flex items-center">
          <div className="text-center">
            <h2 className="mb-8 text-2xl font-bold">MY SKILLS</h2>
            <h3 className="text-4xl">My areas of expertise</h3>
            <p className="mb-4">
              Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas
              faucibus mollis elit interdum. Duis mollis, ligula magna mollis.
            </p>
            <Button>Download CV</Button>
          </div>

          <div className="grid grid-cols-1 mt-8 lg:mt-0 gap-8 md:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-white rounded-md shadow-md">
                <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
                <p className="text-gray-700">{skill.description}</p>
                <a
                  href="#"
                  className="block mt-4 text-blue-500 hover:underline"
                >
                  Link Text
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
