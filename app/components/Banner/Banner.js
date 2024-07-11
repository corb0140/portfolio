import Button from "@/app/Buttons/Button";
import React from "react";

const Banner = () => {
  return (
    <section
      id="about"
      className="banner h-screen w-full px-5 flex flex-col justify-center"
    >
      <p className="text-secondary pb-4">Hi, my name is</p>
      <p className="text-4xl font-bold font-Roboto tracking-wide pb-2">
        Mark Corbin.
      </p>
      <p className="text-2xl font-bold font-Roboto tracking-wide text-gray-300 pb-10">
        I am a full-stack developer.
      </p>
      <p className="text-gray-300 text-sm tracking-tighter">
        As a full-stack developer currently enrolled at Algonquin college, I am
        passionate about blending creativity with technology. With a strong
        foundation in front-end and back-end development, I’m adept at crafting
        seamless digital experiences. I thrive in team environments, communicate
        effectively, and love tackling meaningful projects. Eager to keep
        learning and making great strides through technology.
      </p>

      <Button design={"relative h-16 w-64 top-12"} text={"Contact Me"} />
    </section>
  );
};

export default Banner;
