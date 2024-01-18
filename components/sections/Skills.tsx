import React from "react";
import { Button } from "../ui/button";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      icon: <BiLogoHtml5 size={48} color="#E44D26" />,
    },
    {
      title: "CSS",
      icon: <BiLogoCss3 size={48} color="#264DE4" />,
    },
    {
      title: "JavaScript",
      icon: <BiLogoJavascript size={48} color="#F0DB4F" />,
    },
    {
      title: "TypeScript",
      icon: <BiLogoTypescript size={48} color="#3178C6" />,
    },
    {
      title: "React.js",
      icon: <BiLogoReact size={48} color="#61DAFB" />,
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs size={48} color="#000000" />,
    },
    {
      title: "Node.js",
      icon: <BiLogoNodejs size={48} color="#8CC84B" />,
    },

    {
      title: "PostgreSQL",
      icon: <BiLogoPostgresql size={48} color="#336791" />,
    },
  ];

  return (
    <section id="skills" className="py-20 text-white bg-gray-800">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">MY SKILLS</h2>
          <h3 className="text-4xl">Areas of Expertise</h3>
          <p className="mt-4 text-gray-300">
            With over 5 years of experience, I specialize in various
            technologies, focusing on JavaScript, React.js, and more. Download
            my CV below.
          </p>
          <Button className="mt-6">Download CV</Button>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 text-center rounded-md shadow-lg">
              <span className="flex items-center justify-center">
                {" "}
                {skill.icon}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-gray-200">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
