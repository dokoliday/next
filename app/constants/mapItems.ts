type element = {
  src: string;
  nb?: number;
};

export const mapItems: Record<string, element> = {
  tree: {
    src: "/assets/tree.png",
    nb: 45,
  },
  fire: {
    src: "/assets/fire.png",
    nb: 3,
  },
  burned_earth: {
    src: "/assets/burned_earth.png",
  },
  earth: {
    src: "/assets/earth.png",
  },
  lake: {
    src: "/assets/lake.png",
    nb: 5,
  },
  bush: {
    src: "/assets/bush.png",
    nb: 5,
  },
  stone: {
    src: "/assets/stone.png",
    nb: 5,
  },
  watch_center: {
    src: "/assets/watch_center.png",
    nb: 1,
  },
};
