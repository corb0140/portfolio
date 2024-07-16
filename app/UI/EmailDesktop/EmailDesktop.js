import Link from "next/link";

const SocialsDesktop = () => {
  return (
    <div className="hidden h-auto fixed bottom-0 right-[-1.5rem] pb-1 lg:flex flex-col items-center gap-y-[7rem]">
      <Link
        href="mailto:markpc1608@gmail.com"
        className="rotate-[90deg] tracking-[.1rem] text-sm hover:text-secondary transition duration-300"
      >
        markpc1608@gmail.com
      </Link>

      <div className="border-r border-textColor h-20"></div>
    </div>
  );
};

export default SocialsDesktop;
