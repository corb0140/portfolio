import { Icon } from "@iconify/react";
import bookkeeper from "@/public/images/bookkeeper.png";
import worldCountries from "@/public/images/world-countries.png";
import picture from "@/public/images/picture.png";
import rps from "@/public/images/rock-paper-scissors.png";
import todo from "@/public/images/todo.png";
import dessert from "@/public/images/dessert.png";
import bookkeeperLg from "@/public/images/bookkeeper-lg.png";
import pictureLg from "@/public/images/picture-lg.png";

export const projectsPage = [
  {
    img: worldCountries,
    imgLg: worldCountries,
    featured: "Featured Project",
    title: "World Countries",
    description:
      "A website that displays information about countries using REST countries API. Users can search for countries by name, or region. Users can also view detailed information about a country, including the country's flag, population, and languages spoken.",
    technologies: [
      "VS Code",
      "NextJS",
      "Tailwind CSS",
      "Redux",
      "Responsive",
      "REST Countries API",
    ],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/corb0140/world-countries",
    },
    website: {
      icon: (
        <span className="text-[1.5rem] material-symbols-outlined">
          open_in_new
        </span>
      ),
      link: "https://world-countries-gamma.vercel.app/",
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
  {
    img: dessert,
    imgLg: dessert,
    featured: "Featured Project",
    title: "Dessert E-Commerce",
    description:
      "A dessert e-commerce website with a focus on the products. Users, can view item name and price, and can add or remove items products to the cart, and checkout.",
    technologies: ["VS Code", "NextJS", "Redux", "Tailwind CSS", "Responsive"],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/corb0140/desserts",
    },
    website: {
      icon: (
        <span className="text-[1.5rem] material-symbols-outlined">
          open_in_new
        </span>
      ),
      link: "https://desserts-chi.vercel.app/",
    },
  },
  {
    img: bookkeeper,
    imgLg: bookkeeperLg,
    featured: "Featured Project",
    title: "Bookkeeper's Edge(in progress)",
    description:
      "A bookkeeping portfolio website for small business owner. Users can view services, testimonies, contact information, and learn more about the owner",
    technologies: [
      "VS Code",
      "NextJS",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive",
    ],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "#",
    },
    website: {
      icon: (
        <span className="text-[1.5rem] material-symbols-outlined">
          open_in_new
        </span>
      ),
      link: "https://www.bookkeepersedge.com/",
    },
  },
  {
    img: rps,
    imgLg: rps,
    featured: "Featured Project",
    title: "Rock Paper Scissors",
    description:
      "A rock paper scissors game. Users can play against the computer, and keep track of their score.",
    technologies: ["VS Code", "NextJS", "Tailwind CSS", "Redux", "Responsive"],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/corb0140/rock-paper-scissors",
    },
    website: {
      icon: (
        <span className="text-[1.5rem] material-symbols-outlined">
          open_in_new
        </span>
      ),
      link: "https://rock-paper-scissors-xi-navy.vercel.app/",
    },
  },
  {
    img: todo,
    imgLg: todo,
    featured: "Featured Project",
    title: "Todo List",
    description:
      "A todo list app. Users can add, delete, and complete tasks. Reorder tasks by dragging and dropping.",
    technologies: [
      "VS Code",
      "NextJS",
      "Tailwind CSS",
      "Framer-Motion",
      "Redux",
      "Responsive",
    ],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/corb0140/Todo-App",
    },
    website: {
      icon: (
        <span className="text-[1.5rem] material-symbols-outlined">
          open_in_new
        </span>
      ),
      link: "https://todo-app-six-virid-47.vercel.app/",
    },
  },
];