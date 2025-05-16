import { socials } from "@/app/data/Socials";
import Link from "next/link";

const SocialsDesktop = () => {
  return (
    <div className="hidden h-auto fixed bottom-0 left-10 pb-1 lg:flex flex-col items-center gap-y-8">
      <ul className="flex flex-col gap-y-8">
        {socials.map((social, index) => (
          <li
            key={index}
            className="hover:text-secondary hover:-translate-y-2 transition duration-300"
          >
            <Link href={social.link} target="_blank" className="text-[1.3rem]">
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-r border-textColor h-20"></div>
    </div>
  );
};

export default SocialsDesktop;
