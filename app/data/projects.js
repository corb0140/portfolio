import { Icon } from "@iconify/react";
import worldCountries from "@/public/images/world-countries.png";
import highnoon from "@/public/images/highnoon.png";
import pineapple from "@/public/images/pineapple.png";
import movies from "@/public/images/movies.jpg";

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
    img: highnoon,
    title: "Highnoon Gaming",
    description:
      "A fully responsive eSports website with smooth animations and parallax scrolling. Users can view event schedules, player stats and leaderboards.",
    technologies: [
      "React",
      "TypeScript",
      "GSAP",
      "Tailwind CSS",
      "TanStack",
      "Responsive",
      "Zustand",
    ],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/HighnoonGaming/highnoon_gaming",
    },
    website: {
      icon: <Icon icon="quill:link-out" />,
      link: "https://highnoon-gaming.vercel.app/",
    },
  },
  {
    img: pineapple,
    title: "Pineapple Landing Page",
    description:
      "A landing page for Pineapple Smart Phone. A hilarious take on the apple smart phones. Smooth animations and parallax effects",
    technologies: ["HTML", "JavaScript", "SCSS", "GSAP", "Responsive"],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/corb0140/product_launch_landing_page",
    },
    website: {
      icon: <Icon icon="quill:link-out" />,
      link: "https://corb0140.github.io/product_launch_landing_page/",
    },
  },
  {
    img: movies,
    title: "Movies App",
    description:
      "Cross-platform React Native app for discovering and tracking movies, persisting watch list in async storage, and a fun quiz game. Integrated TMDB API to fetch and display movies. PS: You need expo go to view app",
    technologies: ["React Native", "TypeScript", "TMDB API"],
    github: {
      icon: <Icon icon="mingcute:github-line" />,
      link: "https://github.com/corb0140/Movies_App_RN",
    },
    website: {
      icon: <Icon icon="quill:link-out" />,
      link: "https://expo.dev/preview/update?message=update&updateRuntimeVersion=1.0.0&createdAt=2025-09-28T19%3A54%3A52.385Z&slug=exp&projectId=8f03fd4b-9a97-4731-8f49-ab56be8e2a78&group=f7845468-e68a-4bdc-a936-2d318d62348f",
    },
  },
];
