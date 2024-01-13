"use client";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import Header from "@/components/sections/headerSection";
import React from "react";
import ScrollSpy from "react-ui-scrollspy";

export default function page() {
  return (
    <>
      <Header />
      <Portfolio />
      <Skills />
      <div>
        <div className="fixed text-green-500 bg-red-500">
          <p data-to-scrollspy-id="first">Section 1</p>
          <p data-to-scrollspy-id="second">Section 2</p>
        </div>
        <ScrollSpy>
          <div id="first"></div>

          <div id="second"></div>
        </ScrollSpy>
      </div>
    </>
  );
}
