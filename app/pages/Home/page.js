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

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      className="relative"
    >
      <div
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        className={`absolute bg-secondary rounded-full -left-10 -top-10 w-14 h-14 z-20 cursor-none`}
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
