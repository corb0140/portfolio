import { useAnimate } from "framer-motion";

const MobileNavMenu = () => {
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
    <>
      <div className="fixed top-0  h-full w-full bg-black bg-opacity-30 blur-md"></div>
      <div
        className="fixed top-0 right-0 h-full w-64 bg-primary flex flex-col 
      items-center justify-center gap-14"
      >
        <ul className="flex flex-col gap-5 text-sm">
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">01.</span>
            <a
              href="#"
              className="hover:text-secondary transition duration-300"
            >
              About
            </a>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">02.</span>
            <a
              href="#"
              className="hover:text-secondary transition duration-300"
            >
              Experience
            </a>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">03.</span>
            <a
              href="#"
              className="hover:text-secondary transition duration-300"
            >
              Work
            </a>
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="text-secondary">04.</span>
            <a
              href="#"
              className="hover:text-secondary transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          className="relative h-[3.25rem] w-40"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseExit}
        >
          <div
            className="z-10 absolute top-0 left-0 h-full w-full border border-secondary 
            text-secondary bg-primary rounded-md flex items-center justify-center"
            ref={scope}
          >
            Resume
          </div>
          <div className="bg-secondary h-full w-full absolute top-0 left-0 rounded-md"></div>
        </button>
      </div>
    </>
  );
};

export default MobileNavMenu;
