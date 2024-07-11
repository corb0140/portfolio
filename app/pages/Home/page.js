"use client";

import About from "@/app/components/About/About";
import Banner from "@/app/components/Banner/Banner";
import Navbar from "@/app/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
    </div>
  );
}
