import SectionTitle from "@/app/UI/SectionTitles/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="h-auto px-10 lg:px-64 py-16">
      <SectionTitle number="03" title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-0 custom-grid-rows">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden row-span-2 lg:row-span-2 shadow-md rounded-lg flex flex-col gap-2"
          >
            <Image
              src={project.img}
              alt={project.title}
              className="absolute w-full h-full object-fit"
            />

            <div
              className="bg-black/80 absolute -bottom-full group-hover:bottom-0 transition-all duration-500 
            w-full h-full flex flex-col justify-between p-2 z-10"
            >
              <h3 className="text-[1rem] md:text-[1.3rem] font-semibold">
                {project.title}
              </h3>

              <p className="text-[0.8rem] md:text-[0.9rem]">
                {project.description}
              </p>

              <div className="flex gap-4">
                <Link
                  className="text-[1.5rem] hover:text-secondary transition-all duration-300"
                  href={project.website.link}
                  target="_blank"
                >
                  {project.website.icon}
                </Link>

                <Link
                  className="text-[1.5rem] hover:text-secondary transition-all duration-300"
                  href={project.github.link}
                  target="_blank"
                >
                  {project.github.icon}
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
