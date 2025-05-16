import { Icon } from "@iconify/react";
import worldCountries from "@/public/images/world-countries.png";
import bookkeepersEdge from "@/public/images/bookkeeper-lg.png";
import inventory from "@/public/images/inventory.png";
import rockPaperScissors from "@/public/images/rock-paper-scissors.png";

export const projects = [
  {
    img: inventory,
    title: "Inventory Management System",
    description:
      "A full-stack inventory management system that allows users to manage their inventory, including adding, updating, and deleting items. Built using Nextjs, TailwindCSS, Node, Express, and PostgreSQL. It's fully responsive and deployed using AWS Amplify, EC2 and RDS.",
    technologies: [
      "Next",
      "NextJS",
      "Tailwind CSS",
      "Redux",
      "Responsive",
      "REST Countries API",
    ],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/corb0140/inventory-management",
    },
    website: {
      icon: <Icon icon="quill:link-out" />,
      link: "https://main.dkle4bseinws3.amplifyapp.com/",
    },
  },
  {
    img: rockPaperScissors,
    title: "Rock Paper Scissors Game",
    description:
      "A classic game of rock paper scissors where you play against the computer. The game is built using Nextjs and uses Redux to manage state. It's fully responsive and works on all devices.",
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
      link: "https://github.com/corb0140/rock-paper-scissors",
    },
    website: {
      icon: <Icon icon="quill:link-out" />,
      link: "https://rock-paper-scissors-xi-navy.vercel.app/",
    },
  },
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
];
