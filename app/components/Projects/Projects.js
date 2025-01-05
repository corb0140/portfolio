import SectionTitle from "@/app/UI/SectionTitles/SectionTitle";
import { projects } from "@/app/UI/Projects/projects";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="h-auto px-10 lg:px-64 py-16">
      <SectionTitle number="03" title="Projects" />

      <div className="grid grid-cols-1 gap-y-8 lg:gap-y-16 px-2 md:px-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative h-auto lg:h-[28rem] w-full rounded-[.44rem] shadow-[.4px_1px_1px_#ff2e63] lg:shadow-none
            bg-primary bg-opacity-[.99] lg:bg-none lg:bg-opacity-[0] px-5 py-16"
          >
            <div
              className={`h-full lg:w-2/3 absolute hover:z-20 transition duration-500 ${
                index === 1 ? "right-0 top-0" : "top-0 left-0"
              }`}
            >
              <Image
                src={project.imgLg}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-[.5rem] h-full w-full absolute -z-10"
                style={
                  index === 1 ? { objectFit: "fill" } : { objectFit: "cover" }
                }
              />
              <div
                id="hover"
                className="lg:bg-primary lg:bg-opacity-90 h-full w-full hover:bg-opacity-20 transition duration-500"
              ></div>
            </div>

            <div
              className={`lg:absolute lg:w-1/2 lg:px-2 lg:py-10 lg:h-44 lg:flex lg:flex-col  ${
                index === 1
                  ? "top-0 left-0 lg:items-start"
                  : "top-0 right-0 lg:items-end"
              }`}
            >
              <h2 className="text-sm text-secondary">{project.featured}</h2>
              <h3 className="text-xl text-Roboto font-bold tracking-wide pt-2 lg:pb-5">
                {project.title}
              </h3>
              <p
                className={`text-sm leading-6 pt-8 lg:bg-secondary relative lg:p-5  ${
                  index === 1 ? "lg:text-left" : "lg:text-right"
                }`}
              >
                {project.description}
              </p>
              <ul
                className={`flex flex-wrap gap-x-4 pt-5 ${
                  index === 1 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {project.technologies.map((tech, index) => (
                  <li key={index} className="text-sm pt-2">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="pt-16 flex gap-x-4 items-center">
                <Link
                  href={project.github.link}
                  target="_blank"
                  className="flex hover:text-secondary transition duration-300 text-[1.5rem]"
                >
                  {project.github.icon}
                </Link>
                <Link
                  href={project.website.link}
                  target="_blank"
                  className="flex hover:text-secondary transition duration-300"
                >
                  {project.website.icon}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
