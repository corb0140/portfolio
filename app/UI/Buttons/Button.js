import { useAnimate } from "framer-motion";
import Link from "next/link";

const Button = ({ design, text, click, href = "", download = false }) => {
  const [scope, animate] = useAnimate();

  const mouseEnter = async () => {
    animate(
      scope.current,
      {
        x: -5,
        y: -5,
      },
      {
        duration: 0.2,
      }
    );
  };

  const mouseExit = async () => {
    animate(
      scope.current,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.2,
      }
    );
  };

  return (
    <button
      className={design}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseExit}
      onClick={click}
    >
      <Link
        download={download}
        href={href}
        className="z-10 absolute top-0 left-0 h-full w-full border border-secondary 
            text-secondary bg-primary rounded-[.22rem] flex items-center justify-center"
        ref={scope}
      >
        {text}
      </Link>
      <div className="bg-secondary h-full w-full absolute top-0 left-0 rounded-[.22rem]"></div>
    </button>
  );
};

export default Button;
