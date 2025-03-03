"use client";

import type React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { TypeAnimation } from "../type-animation";
import { CodeRainBackground } from "../code-rain-background";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <CodeRainBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/30" />
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 py-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-600">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            John Doe
          </h1>
          <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-600">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                "UI/UX Enthusiast",
                "Problem Solver",
              ]}
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </h3>
          <p className="text-xl mb-12 text-gray-700 max-w-2xl mx-auto">
            Transforming ideas into elegant, efficient, and scalable digital
            solutions. Passionate about creating seamless user experiences and
            robust systems.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            onClick={() => router.push("#portfolio")}
            className="group bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => router.push("#contact")}
            className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Contact Me
          </button>
        </motion.div>

        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SocialIcon href="https://github.com" icon={<Github />} />
          <SocialIcon href="https://linkedin.com" icon={<Linkedin />} />
          <SocialIcon href="https://twitter.com" icon={<Twitter />} />
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 transition-colors"
    >
      {icon}
    </a>
  );
}
