import SectionTitle from "@/app/UI/SectionTitles/SectionTitle";

import { icons } from "@/app/UI/Icons/Icons";

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="h-auto px-10 lg:px-80 py-16 flex flex-col gap-5"
    >
      <SectionTitle number="02" title="Technologies" />

      <p className="text-[.9rem] md:text-[1rem] tracking-wider leading-7">
        I&apos;ve been doing web development for about a year and a half now,
        and I&apos;m eager to learn more in this fast growing tech industry.
      </p>

      <p className="uppercase font-semibold text-[.9rem] md:text-[1rem]  text-center tracking-wider pt-10">
        Here are the technologies I am familiar with:
      </p>

      <div className="grid grid-cols-3 place-items-center gap-x-1 gap-y-9 pt-5">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="text-[5rem] md:text-[6rem] lg:text-[6.5rem] opacity-40 hover:opacity-100 hover:scale-[1.1] transition duration-500"
          >
            {Object.values(icon)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
