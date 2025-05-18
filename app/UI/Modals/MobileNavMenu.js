"use client";

import { motion } from "framer-motion";
import Button from "@/app/UI/Buttons/Button";
import Link from "next/link";

const NavMenu = ({ close, animate }) => {
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
      <div className="fixed lg:hidden z-20 top-0 h-full w-full bg-black bg-opacity-80"></div>

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed lg:hidden z-30 top-0 right-0 h-full w-64 translate-x-64 bg-primary flex flex-col items-center justify-center gap-14"
      >
        <ul className="flex flex-col gap-5 text-sm">
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">01.</span>
            <Link
              onClick={() => {
                close();
                animate();
              }}
              href="#about"
              className="hover:text-secondary transition duration-300"
            >
              About
            </Link>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">02.</span>
            <Link
              onClick={() => {
                close();
                animate();
              }}
              href="#technologies"
              className="hover:text-secondary transition duration-300"
            >
              Technologies
            </Link>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">03.</span>
            <Link
              onClick={() => {
                close();
                animate();
              }}
              href="#projects"
              className="hover:text-secondary transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">04.</span>
            <Link
              onClick={() => {
                close();
                animate();
              }}
              href="#contact"
              className="hover:text-secondary transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        <Button
          design={"relative h-[3.25rem] w-40"}
          text={"Resume"}
          href={"/resume/resume.pdf"}
          download={true}
        />
      </motion.div>
    </>
  );
};

export default NavMenu;
