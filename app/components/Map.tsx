"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { json } from "stream/consumers";
import { mapItems } from "../constants/mapItems";
import { shuffle } from "../utils/shuffleArray";

type TProps = {
  turn: number;
  wind: "east_wind" | "west_wind" | "south_wind" | "north_wind" | null;
};

export const Map = ({ turn, wind }: TProps) => {
  const [mapState, setMapstate] = useState<
    null | { x: number; y: number; type: string }[]
  >(null);

  const [party, setParty] = useState<number>(0);

  const onFireEclosion = (
    wind: "east_wind" | "west_wind" | "south_wind" | "north_wind" | null
  ) => {
    {
      if (mapState && wind) {
        const fires = mapState
          .filter((e) => e.type == "fire")
          .map((e) => {
            return JSON.stringify(e);
          });
        const bushBurned: { x: number; y: number; type: string }[] = [];
        const newMap = mapState.map((mapcard) => {
          if (
            fires.includes(
              JSON.stringify({
                x:
                  mapcard.x +
                  (["south_wind", "north_wind"].includes(wind)
                    ? 0
                    : wind === "east_wind"
                    ? -1
                    : 1),
                y:
                  mapcard.y +
                  (["east_wind", "west_wind"].includes(wind)
                    ? 0
                    : wind === "north_wind"
                    ? -1
                    : 1),
                type: "fire",
              })
            ) &&
            !["empty", "stone", "lake", "watch_center"].includes(mapcard.type)
          ) {
            if (mapcard.type === "bush") {
              bushBurned.push(mapcard);
            }
            return { ...mapcard, type: "fire" };
          }
          return mapcard;
        });
        if (bushBurned.length) {
          const a = newMap.map((item) => {
            let b = item;
            bushBurned.forEach((bush) => {
              if (
                [
                  JSON.stringify({ x: bush.x + 1, y: bush.y }),
                  JSON.stringify({ x: bush.x - 1, y: bush.y }),
                  JSON.stringify({ x: bush.x, y: bush.y + 1 }),
                  JSON.stringify({ x: bush.x, y: bush.y - 1 }),
                ].includes(JSON.stringify({ x: item.x, y: item.y })) &&
                !["empty", "stone", "lake", "watch_center"].includes(item.type)
              ) {
                b = { ...item, type: "fire" };
              }
            });
            return b;
          });
          return setMapstate(a);
        }

        return setMapstate(newMap);
      }
    }
  };

  const fillMap = () => {
    const map: { x: number; y: number; type: string }[] = [];
    const a = shuffle([
      ...Array(mapItems.tree.nb).fill("tree"),
      ...Array(mapItems.fire.nb).fill("fire"),
      ...Array(mapItems.lake.nb).fill("lake"),
      ...Array(mapItems.bush.nb).fill("bush"),
      ...Array(mapItems.stone.nb).fill("stone"),
      "watch_center",
    ]);

    const b = Array(10)
      .fill("")
      .map((e, index) => {
        return Array(10)
          .fill("")
          .map((e, i) => {
            if (i > 0 && i < 9 && index > 0 && index < 9) {
              return { x: i, y: 9 - index, isEmpty: false };
            }
            return { x: i, y: 9 - index, isEmpty: true };
          });
      })
      .flat(1);

    b.map((e) => {
      map.push(
        !e.isEmpty
          ? {
              x: e.x,
              y: e.y,
              type: a[0],
            }
          : {
              x: e.x,
              y: e.y,
              type: "empty",
            }
      );
      !e.isEmpty && a.shift();
    });
    return map;
  };

  useEffect(() => {
    setMapstate(fillMap());
  }, []);

  useEffect(() => {
    onFireEclosion(wind);
  }, [turn]);

  return (
    <>
      <div className="grid grid-cols-10">
        {mapState?.map((e) => {
          if (e.type === "empty") {
            return (
              <div className="w-[40px] h-[40px] border-green-900	border-2 "></div>
            );
          } else {
            return (
              <Image
                alt=""
                className="border-green-900	border-2  rounded-md"
                src={mapItems[e.type].src}
                width={40}
                height={40}
              />
            );
          }
        })}
      </div>
    </>
  );
};
