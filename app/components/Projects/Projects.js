import SectionTitle from "@/app/UI/SectionTitles/SectionTitle";
import { projects } from "@/app/UI/Projects/projects";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="h-auto px-10 py-16">
      <SectionTitle number="03" title="Projects" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-2 md:px-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative h-auto w-full rounded-[.44rem] shadow-[.4px_1px_1px_#ff2e63]
            bg-primary bg-opacity-[.99] px-5 py-16"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-[.5rem] h-full w-full absolute -z-10 top-0 left-0"
              style={{ objectFit: "cover" }}
            />
            <h2 className="text-sm text-secondary">{project.featured}</h2>
            <h3 className="text-xl text-Roboto font-bold tracking-wide pt-2">
              {project.title}
            </h3>
            <p className="text-sm pt-8">{project.description}</p>
            <ul className="flex flex-wrap gap-x-4 pt-5">
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
