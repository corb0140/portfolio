import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  useAnimate,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import MobileNavMenu from "@/app/UI/Modals/MobileNavMenu";
import { openMenu, closeMenu } from "@/app/UI/MenuAnimation/MenuAnimation";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  // Animation for the navbar - useScroll
  const [hidden, setHidden] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();

    if (latest > prev && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  });

  // Animation for the mobile menu - useAnimate
  const [scope, animate] = useAnimate();
  const menuAnimation = async (close) => {
    if (showMobileMenu === close) {
      {
        openMenu.map(async (item) => {
          await animate(item.id, item, { duration: 0.5 });
        });
      }
    } else {
      closeMenu.map(async (item) => {
        await animate(item.id, item, { duration: 0.5 });
      });
    }
  };

  const toggleMobileMenu = (close) => {
    if (close === false) {
      setShowMobileMenu(true);
    } else {
      setShowMobileMenu(false);
    }

    if (showMobileMenu === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={[
          { y: 0 },
          hidden ? "hidden" : "visible",
          shadow ? "shadow" : "noShadow",
          showMobileMenu ? "backgroundTransparent" : "backgroundColor",
        ]}
        variants={{
          visible: { y: 0, transition: { duration: 0.5 } },
          hidden: { y: -100, transition: { duration: 0.5 } },
          shadow: {
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#252a34",
          },
          noShadow: { boxShadow: "none", backgroundColor: "none" },
          backgroundColor: {
            backgroundColor: "#252a34",
            transition: { delay: 0.5 },
          },
          backgroundTransparent: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
        className={`fixed w-full h-24 z-40 flex items-center justify-between px-5`}
      >
        <div onClick={goBack} className="hover:cursor-pointer">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14"
          >
            <title>My Profile</title>
            <path
              d="M15.8975 51.4434L100 2.88675L184.103 51.4434V148.557L100 197.113L15.8975 148.557V51.4434Z"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#FF2E63"
            />
            <path
              d="M63.6526 117V83.4H68.7886L83.4766 107.928H80.7886L95.2366 83.4H100.373L100.421 117H94.5166L94.4686 92.664H95.7166L83.4286 113.16H80.6446L68.1646 92.664H69.6046V117H63.6526ZM125.048 117.48C122.488 117.48 120.104 117.064 117.896 116.232C115.72 115.368 113.816 114.168 112.184 112.632C110.584 111.064 109.336 109.224 108.44 107.112C107.544 105 107.096 102.696 107.096 100.2C107.096 97.704 107.544 95.4 108.44 93.288C109.336 91.176 110.6 89.352 112.232 87.816C113.864 86.248 115.768 85.048 117.944 84.216C120.12 83.352 122.504 82.92 125.096 82.92C127.848 82.92 130.36 83.4 132.632 84.36C134.904 85.288 136.824 86.68 138.392 88.536L134.36 92.328C133.144 91.016 131.784 90.04 130.28 89.4C128.776 88.728 127.144 88.392 125.384 88.392C123.624 88.392 122.008 88.68 120.536 89.256C119.096 89.832 117.832 90.648 116.744 91.704C115.688 92.76 114.856 94.008 114.248 95.448C113.672 96.888 113.384 98.472 113.384 100.2C113.384 101.928 113.672 103.512 114.248 104.952C114.856 106.392 115.688 107.64 116.744 108.696C117.832 109.752 119.096 110.568 120.536 111.144C122.008 111.72 123.624 112.008 125.384 112.008C127.144 112.008 128.776 111.688 130.28 111.048C131.784 110.376 133.144 109.368 134.36 108.024L138.392 111.864C136.824 113.688 134.904 115.08 132.632 116.04C130.36 117 127.832 117.48 125.048 117.48Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="relative flex flex-col gap-[0.4rem] [transform:rotateY(180deg)] hover:cursor-pointer"
          onClick={() => {
            toggleMobileMenu(showMobileMenu), menuAnimation(showMobileMenu);
          }}
          ref={scope}
        >
          <div
            id="menuLine_1"
            className="h-[.2rem] w-10 bg-secondary rounded-lg "
          ></div>
          <div
            id="menuLine_2"
            className="h-[.2rem] w-7 bg-secondary rounded-lg "
          ></div>
          <div
            id="menuLine_3"
            className="h-[.2rem] w-4 bg-secondary rounded-lg "
          ></div>

          <span
            id="exit"
            className="absolute z-40 text-[2.5rem] opacity-0 text-secondary material-symbols-outlined"
          >
            close
          </span>
        </div>
      </motion.nav>

      <AnimatePresence>
        {showMobileMenu && (
          <MobileNavMenu close={toggleMobileMenu} animate={menuAnimation} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
