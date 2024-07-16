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

// import { useScroll } from "framer-motion";
// import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div>
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
