"use client";

import { motion } from "framer-motion";
import Button from "@/app/UI/Buttons/Button";

const MobileNavMenu = () => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="fixed z-20 top-0 h-full w-full bg-black bg-opacity-80"></div>

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed z-30 top-0 right-0 h-full w-64 translate-x-64 bg-primary flex flex-col items-center justify-center gap-14"
      >
        <ul className="flex flex-col gap-5 text-sm">
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">01.</span>
            <a
              href="#about"
              className="hover:text-secondary transition duration-300"
            >
              About
            </a>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">02.</span>
            <a
              href="#technologies"
              className="hover:text-secondary transition duration-300"
            >
              Technologies
            </a>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">03.</span>
            <a
              href="#projects"
              className="hover:text-secondary transition duration-300"
            >
              Projects
            </a>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">04.</span>
            <a
              href="#contact"
              className="hover:text-secondary transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        <Button design={"relative h-[3.25rem] w-40"} text={"Resume"} />
      </motion.div>
    </>
  );
};

export default MobileNavMenu;
