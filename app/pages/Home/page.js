"use client";

import About from "@/app/components/About/About";
import Banner from "@/app/components/Banner/Banner";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";
import Navbar from "@/app/components/Navbar/Navbar";
import Projects from "@/app/components/Projects/Projects";
import Technologies from "@/app/components/Technologies/Technologies";
import SocialsDesktop from "@/app/UI/SocialsDesktop/SocialsDesktop";
import EmailDesktop from "@/app/UI/EmailDesktop/EmailDesktop";

import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      onPointerOver={(e) => {
        const target = e.target;

        if (["button", "a"].includes(target.tagName.toLowerCase())) {
          setIsHovered(true);
        }

        if (target.closest("button")) {
          setIsHovered(true);
        }
      }}
      onPointerOut={() => setIsHovered(false)}
      className={`relative ${isHovered ? "cursor-none" : ""} overflow-hidden`}
    >
      <div
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 3 : 1})`,
          // opacity: 0.5,
        }}
        className={`fixed bg-secondary rounded-full -left-10 -top-10 z-50 pointer-events-none
        ${isHovered ? "w-8 h-8" : "w-0 h-0"} backdrop-invert bg-secondary/30`}
      ></div>
      <Navbar />
      <Banner />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />

      <SocialsDesktop />
      <EmailDesktop />
    </div>
  );
}
