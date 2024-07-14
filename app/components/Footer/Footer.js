import { socials } from "../../UI/Icons/Socials";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-auto w-full p-10 flex flex-col items-center gap-y-8">
      <div className="flex justify-center gap-x-10 lg:hidden">
        {socials.map((social, index) => {
          return (
            <div key={index} className="flex flex-col">
              <Link
                className="text-[1.2rem] hover: hover:text-secondary transition duration-300"
                href={social.link}
                target="_blank"
              >
                {social.icon}
              </Link>
            </div>
          );
        })}
      </div>
      <p className="text-sm">Built by Mark Pierre Corbin</p>
    </div>
  );
};

export default Footer;
