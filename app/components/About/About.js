import Image from "next/image";
import me from "@/public/images/mark.jpg";

import { motion, useAnimate, useScroll, useTransform } from "framer-motion";
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

  const { scrollY } = useScroll();

  const translateY = useTransform(scrollY, [0, 600], [200, 0]);

  // Border animation
  const borderTranslateY = useTransform(scrollY, [0, 600], [300, 0]);

  // Image animation
  const imageTranslateX = useTransform(scrollY, [50, 700], [300, 0]);
  const imageOpacity = useTransform(scrollY, [0, 600], [0.5, 1]);

  return (
    <section id="about" className="h-auto py-5 px-10 lg:px-72 flex flex-col">
      <SectionTitle number="01" title="About Me" />

      <div className="flex flex-col lg:flex-row lg:pt-10 lg:gap-x-5">
        <motion.p
          style={{ translateY }}
          className="text-sm md:text-[1rem] tracking-tight leading-7 pb-5 lg:w-[55%]"
        >
          I&apos;m Mark Corbin, a Web Developer originating from Barbados and a
          graduate of Algonquin College&apos;s Mobile Development and Design
          program. I’m passionate about building seamless digital experiences by
          bringing ideas to life for the web and mobile. I enjoy solving complex
          problems with clean, efficient code and continuously exploring new
          technologies to enhance my skills.
          <br /> <br />
          When I’m not coding, you’ll find me immersed in video games, watching
          football (a proud FC Barcelona fan), or learning something new in
          tech.
        </motion.p>

        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          ref={scope}
          className="relative h-64 w-64 lg:h-72 lg:w-72 self-center lg:self-start"
        >
          <motion.div
            style={{
              translateX: imageTranslateX,
              opacity: imageOpacity,
            }}
            id="image"
            className="absolute h-full w-full z-10"
          >
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
          </motion.div>

          <motion.div
            style={{ translateY: borderTranslateY }}
            id="border"
            className="absolute top-2 left-2 h-full w-full rounded-md border-2 border-secondary"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
