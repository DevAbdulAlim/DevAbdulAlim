"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";
import {
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
];

const SkillIcon: React.FC<Skill> = ({ name, icon }) => (
  <motion.div
    className="flex flex-col items-center bg-white p-6 rounded-2xl border border-blue-100 transition-all hover:border-blue-500"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <span className="text-sm font-medium text-gray-700 text-center">
      {name}
    </span>
  </motion.div>
);

export default function SkillsSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 py-16">
        {/* Title and Subtitle */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-600">
            Technologies & Languages
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            What I Work With
          </h1>
          <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-600">
            The key technologies I specialize in.
          </h3>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <SkillIcon key={index} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
