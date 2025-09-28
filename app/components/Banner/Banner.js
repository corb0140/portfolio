import Button from "@/app/UI/Buttons/Button";
import { motion, useScroll, useTransform } from "framer-motion";

const Banner = () => {
  // Tracking the scroll position relative to ref
  const { scrollY } = useScroll();

  // Map scroll progress to opacity
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      id="banner"
      className="banner h-screen w-full px-10 lg:px-64 flex flex-col justify-center"
    >
      <p className="text-secondary pb-6">Hi, my name is</p>
      <p className="text-4xl md:text-6xl lg:text-8xl font-bold font-Roboto tracking-wide pb-2">
        Mark Corbin.
      </p>
      <p className="text-2xl md:text-5xl lg:text-6xl font-bold font-Roboto tracking-wide text-gray-300 pb-10">
        I am a Frontend Developer.
      </p>
      <p className="text-gray-300 text-[1rem] tracking-tighter lg:w-[60%]">
        I&apos;m a Frontend Developer with a strong foundation in both web and
        mobile development. I work primarily within the React ecosystem and I
        enjoy turning ideas into clean, functional websites and apps. Though I
        enjoy working more on the frontend, I have some knowledge in backend
        development using node and express with postgresql and mongodb.
      </p>

      <Button
        design={"relative h-16 w-64 top-12"}
        text={"Contact Me"}
        href={"mailto:markpc1608@gmail.com"}
      />
    </motion.div>
  );
};

export default Banner;
