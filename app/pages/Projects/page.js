"use client";

import Image from "next/image";
import Button from "@/app/UI/Buttons/Button";
import { useRouter } from "next/navigation";
import { projectsPage } from "@/app/UI/Projects/projectsPage";

export default function Projects() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-start items-start p-10 gap-y-5">
      <Button
        design="relative h-14 w-44 flex"
        text="Back"
        click={() => {
          router.back();
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:gap-x-10 gap-y-10">
        {projectsPage.map((project, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <Image
                src={project.imgLg}
                alt={project.title}
                width={0}
                height={0}
                className="rounded-lg h-60 w-full object-cover"
              />

              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex gap-4">
                <a
                  href={project.github.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:text-secondary transition duration-300 text-[1.5rem]"
                >
                  {project.github.icon}
                </a>
                <a
                  href={project.website.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex hover:text-secondary transition duration-300"
                >
                  {project.website.icon}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
