import SectionTitle from "@/app/UI/SectionTitles/SectionTitle";

import { icons } from "@/app/data/Icons/Icons";
import { Icon } from "@iconify/react";

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

      <p className="uppercase font-semibold text-[.9rem] md:text-[1rem]  text-center tracking-wider pt-10">
        Here are the technologies I am familiar with:
      </p>

      <div className="grid grid-cols-3 md:grid-cols-4 place-items-center gap-y-7 pt-5">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="text-[5rem] md:text-[5rem] lg:text-[4rem] opacity-40 hover:opacity-100 hover:scale-[1.1] transition duration-500"
          >
            <Icon icon={icon.icon} />
            <p className="text-[.7rem] md:text-[.8rem] text-center pt-2">
              {icon.id}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
