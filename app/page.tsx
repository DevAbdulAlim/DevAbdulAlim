'use client'
import React from "react";
import {
  FaHome,
  FaBriefcase,
  FaCode,
  FaUser,
  FaComment,
  FaEnvelope,
} from "react-icons/fa";
import ScrollSpy from "react-ui-scrollspy";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import Testimonial from "@/components/sections/Testimonial";
import Header from "@/components/sections/Header";
import Link from "next/link";

const pages = [
  { title: "Home", url: "/", to: "header", icon: <FaHome /> },
  {
    title: "Portfolio",
    url: "#portfolio",
    to: "portfolio",
    icon: <FaBriefcase />,
  },
  { title: "Skills", url: "#skills", to: "skills", icon: <FaCode /> },
  { title: "About", url: "#about", to: "about", icon: <FaUser /> },
  {
    title: "Testimonial",
    url: "#testimonial",
    to: "testimonial",
    icon: <FaComment />,
  },
  { title: "Contact", url: "#contact", to: "contact", icon: <FaEnvelope /> },
];

export default function Page() {
  return (
    <div className="relative flex">
      <ul className="fixed flex flex-col justify-center items-start h-full left-2">
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              href={page.url}
              className="py-2 px-4 rounded-md flex items-center space-x-2 group hover:bg-blue-500 hover:text-white"
              data-to-scrollspy-id={page.to}
            >
              <span className="">{page.icon}</span>
              <span className="hidden group-hover:inline">{page.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex-grow">
        <ScrollSpy offsetBottom={50} offsetTop={50}>
          <Header />
          <Portfolio />
          <Skills />
          <About />
          <Testimonial />
          <Contact />
        </ScrollSpy>
      </div>
    </div>
  );
}
