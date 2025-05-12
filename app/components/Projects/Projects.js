import SectionTitle from "@/app/UI/SectionTitles/SectionTitle";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="h-auto px-10 lg:px-64 py-16">
      <SectionTitle number="03" title="Projects" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-8 lg:gap-y-16 px-2 md:px-0 custom-grid-rows">
        <div className="row-span-1 md:row-span-2 bg-gray-500 shadow-md rounded-lg">
          yo
        </div>
        <div className="row-span-1 md:row-span-2 bg-gray-500 shadow-md rounded-lg">
          yo
        </div>
      </div>
    </section>
  );
};

export default Projects;
