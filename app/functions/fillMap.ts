import { mapItems } from "../constants/mapItems";
import { shuffle } from "./shuffleArray";

export const generateMap = () => {
  const map: { x: number; y: number; type: string }[] = [];

  const randomMapItemsArray = shuffle([
    ...Array(mapItems.tree.nb).fill("tree"),
    ...Array(mapItems.fire.nb).fill("fire"),
    ...Array(mapItems.lake.nb).fill("lake"),
    ...Array(mapItems.bush.nb).fill("bush"),
    ...Array(mapItems.stone.nb).fill("stone"),
    "watch_center",
  ]);

  Array(10)
    .fill("")
    .map((_, index) => {
      return Array(10)
        .fill("")
        .map((_, i) => {
          if (i > 0 && i < 9 && index > 0 && index < 9) {
            return { x: i, y: 9 - index, isEmpty: false };
          }
          return { x: i, y: 9 - index, isEmpty: true };
        });
    })
    .flat(1)
    .forEach((e) => {
      map.push(
        !e.isEmpty
          ? {
              x: e.x,
              y: e.y,
              type: randomMapItemsArray[0],
            }
          : {
              x: e.x,
              y: e.y,
              type: "empty",
            }
      );
      !e.isEmpty && randomMapItemsArray.shift();
    });

  return map;
};
