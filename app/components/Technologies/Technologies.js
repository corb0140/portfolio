import SectionTitle from "@/app/UI/SectionTitles/SectionTitle";

import { icons } from "@/app/data/Icons";
import { Icon } from "@iconify/react";
import {
  containerVariants,
  iconVariants,
} from "@/app/animations/IconAnimations";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="h-auto px-10 lg:px-80 py-16 flex flex-col gap-5"
    >
      <SectionTitle number="02" title="Technologies" />

      <p className="text-[.9rem] md:text-[1rem] tracking-wider leading-7">
        I&apos;m always eager to learn new technologies in this fast growing
        tech industry.
      </p>

      <p className="uppercase font-semibold text-[.9rem] md:text-[1rem] text-center tracking-wider pt-10">
        Here are the technologies I am familiar with:
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-3 md:grid-cols-4 place-items-center gap-y-7 pt-5"
      >
        {icons.map((icon, index) => (
          <motion.div
            variants={iconVariants}
            key={index}
            id={icon.id}
            className="flex flex-col items-center text-[4.5rem] md:text-[5rem] lg:text-[4rem] opacity-0 scale-75 hover:scale-[1.1] transition duration-500"
          >
            <Icon
              icon={icon.icon}
              className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
            />

            <p className="text-[.7rem] md:text-[.8rem] text-center pt-2">
              {icon.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
