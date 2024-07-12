import Image from "next/image";
import me from "@/public/images/me.jpeg";

import { useAnimate } from "framer-motion";
import SectionTitle from "@/app/UI/SectionTitles/SectionTitle";

const About = () => {
  const [scope, animate] = useAnimate();

  const mouseEnter = async () => {
    animate(
      "#image",
      {
        x: -5,
        y: -5,
      },
      { duration: 0.5 }
    );
    animate(
      "#imageOverlay",
      {
        opacity: 0,
      },
      { duration: 0.5 }
    );
    animate(
      "#border",
      {
        x: 5,
        y: 5,
      },
      { duration: 0.5 }
    );
  };

  const mouseLeave = async () => {
    animate(
      "#image",
      {
        x: 0,
        y: 0,
      },
      { duration: 0.5 }
    );
    animate(
      "#imageOverlay",
      {
        opacity: 0.7,
      },
      { duration: 0.5 }
    );
    animate(
      "#border",
      {
        x: 0,
        y: 0,
      },
      { duration: 0.5 }
    );
  };

  return (
    <div className="h-auto p-5 flex flex-col">
      <SectionTitle number="01" title="About Me" />

      <p className="text-sm tracking-tighter pb-5">
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

      <div
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        ref={scope}
        className="relative h-52 w-52 self-center"
      >
        <div id="image" className="absolute h-full w-full  z-10">
          <div
            id="imageOverlay"
            className="absolute h-full w-full opacity-70 z-10 rounded-md bg-secondary"
          ></div>
          <Image
            src={me}
            alt="head shot of my face"
            className="rounded-md h-full w-full"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          id="border"
          className="absolute top-2 left-2 h-full w-full rounded-md border-2 border-secondary"
        ></div>
      </div>
    </div>
  );
};

export default About;
