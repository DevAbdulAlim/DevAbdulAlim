import React from "react";

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
    <section className="my-12">
      <h2 className="mb-8 text-4xl font-bold text-center text-white">
        MY SKILLS
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div key={index} className="p-6 bg-white rounded-md shadow-md">
            <h3 className="mb-2 text-xl font-semibold">{skill.title}</h3>
            <p className="text-gray-700">{skill.description}</p>
            <a href="#" className="block mt-4 text-blue-500 hover:underline">
              Link Text
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
