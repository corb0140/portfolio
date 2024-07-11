import React from "react";

const About = () => {
  return (
    <div className="p-5">
      <h2 className="flex items-center py-5  gap-2">
        <span className="text-secondary">01.</span>
        <p className="text-xl text-Roboto font-bold">About Me</p>
        <div className="border-b border-white border-opacity-20 w-1/2 h-1"></div>
      </h2>
      <p className="text-sm tracking-tighter">
        Hey! My name is Mark. As a full-stack developer currently enrolled at
        Algonquin college, I am passionate about blending creativity with
        technology. With a strong foundation in front-end and back-end
        development, I’m adept at crafting seamless digital experiences. I
        thrive in team environments, communicate effectively, and love tackling
        meaningful projects. Eager to keep learning and making great strides
        through technology.
        <br />
        <br />
        When I&apos;m not coding, I enjoy playing video games, watching TV, and
        bowling.
      </p>
    </div>
  );
};

export default About;
