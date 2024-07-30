import { Icon } from "@iconify/react";
import bookkeeper from "@/public/images/bookkeeper.png";
import picture from "@/public/images/picture.png";
import smoothie from "@/public/images/smoothie.jpg";
import bookkeeperLg from "@/public/images/bookkeeper-lg.png";
import pictureLg from "@/public/images/picture-lg.png";

export const projects = [
  {
    img: bookkeeper,
    imgLg: bookkeeperLg,
    featured: "Featured Project",
    title: "Bookkeeper's Edge",
    description:
      "A portfolio website for an entrepreneur bookkeeper. Minimalistic design with a focus on the services provided, and contact information.",
    technologies: [
      "VS Code",
      "NextJS",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive",
    ],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/corb0140/bookkeepers-edge",
    },
    website: {
      icon: (
        <span className="text-[1.5rem] material-symbols-outlined">
          open_in_new
        </span>
      ),
      link: "https://bookkeepers-edge.vercel.app/",
    },
  },
  {
    img: picture,
    imgLg: pictureLg,
    featured: "Featured Project",
    title: "Picture This",
    description:
      "A photo gallery website using the pixabay API, and mediapipe face detection API. Search photos by keyword and save them to the cache. Pull images from the cache and detect faces in the images.",
    technologies: [
      "VS Code",
      "HTML",
      "Javascript",
      "CSS",
      "Pixabay API",
      "Mediapipe API",
      "Responsive",
    ],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/corb0140/final-project",
    },
    website: {
      icon: (
        <span className="text-[1.5rem] material-symbols-outlined">
          open_in_new
        </span>
      ),
      link: "https://corb0140.github.io/final-project/",
    },
  },
  // {
  //   img: smoothie,
  //   imgLg: smoothie,
  //   featured: "Featured Project",
  //   title: "Smoothie Hut",
  //   description:
  //     "A smoothie shop website showcasing different flavors and prices. Users can add items to the cart and view the total price, see past orders, and contact the shop.",
  //   technologies: [
  //     "VS Code",
  //     "NextJS",
  //     "Tailwind CSS",
  //     "Framer Motion",
  //     "MongoDB",
  //     "Express",
  //     "NodeJS",
  //     "onrender",
  //   ],
  //   github: {
  //     icon: <Icon icon="mingcute:github-line" />,
  //     link: "#",
  //   },
  //   website: {
  //     icon: (
  //       <span className="text-[1.5rem] material-symbols-outlined">
  //         open_in_new
  //       </span>
  //     ),
  //     link: "#",
  //   },
  // },
];
