import { Icon } from "@iconify/react";
import worldCountries from "@/public/images/world-countries.png";
import bookkeepersEdge from "@/public/images/bookkeeper-lg.png";
import sweetTooth from "@/public/images/sweet-tooth.png";
import rockPaperScissors from "@/public/images/rock-paper-scissors.png";

export const projects = [
  {
    img: worldCountries,
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
      icon: <Icon icon="quill:link-out" />,
      link: "https://world-countries-gamma.vercel.app/",
    },
  },
  {
    img: bookkeepersEdge,
    title: "Bookkeepers Edge",
    description:
      "A template for a bookkeeping website. The website is built using Nextjs, uses Tailwind CSS for styling and framer-motion for animations. The website is fully responsive and works on all devices.",
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
      link: "https://github.com/corb0140/bookkeepers-edge",
    },
    website: {
      icon: <Icon icon="quill:link-out" />,
      link: "https://bookkeepers-edge.vercel.app/",
    },
  },
  {
    img: sweetTooth,
    title: "Ice Cream E-commerce",
    description:
      "A full-stack e-commerce website for ice cream products. The website is built using React + vite, ExpressJS, and PostgreSQL. It features a fully functional shopping cart, user authentication, and an admin panel for managing products.",
    technologies: [
      "VS Code",
      "NextJS",
      "ExpressJS",
      "MongoDB",
      "Tailwind CSS",
      "Responsive",
    ],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/corb0140/ice_cream_ecommerce",
    },
    website: {
      icon: <Icon icon="quill:link-out" />,
      link: "https://ice-cream-ecommerce-pi.vercel.app/",
    },
  },
];
