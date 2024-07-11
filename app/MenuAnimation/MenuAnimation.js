export const openMenu = [
  {
    id: "#menuLine_1",
    width: 0,
    opacity: 0,
  },
  {
    id: "#menuLine_2",
    width: 0,
    opacity: 0,
  },
  {
    id: "#menuLine_3",
    width: "0",
    opacity: 0,
  },
  {
    id: "#exit",
    rotate: 360,
    opacity: 1,
  },
];

export const closeMenu = [
  {
    id: "#exit",
    rotate: 0,
    opacity: 0,
    duration: 0.5,
  },
  {
    id: "#menuLine_1",
    opacity: 1,
    width: "2.5rem",
    duration: 0.2,
    delay: 0.2,
  },
  {
    id: "#menuLine_2",
    opacity: 1,
    width: "1.75rem",
    duration: 0.2,
  },
  {
    id: "#menuLine_3",
    opacity: 1,
    width: "1rem",
    duration: 0.2,
  },
];
