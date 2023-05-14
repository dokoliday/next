"use client";

import React, { useState } from "react";
import { Elements } from "../../components/Elements";
// import Image from "next/image";
// import { characters } from "../../constants/characters";
// import { elementItems } from "../../constants/elementItems";
import { Map } from "../../components/Map";
import { elementItems } from "../../constants/elementItems";
import { shuffle } from "../../utils/shuffleArray";

export const GameContainer = () => {
  const [turn, setTurn] = useState<number>(0);
  const [wind, setWind] = useState<
    "east_wind" | "west_wind" | "south_wind" | "north_wind" | null
  >(null);
  const getRandomElement = (
    onlyWind: boolean
  ): { src: string; name: string } => {
    if (onlyWind) {
      const a =
        elementItems[
          shuffle(
            Object.keys(elementItems).filter((e) => e.includes("wind"))
          )[0]
        ];
      return a;
    }

    const b = elementItems[shuffle(Object.keys(elementItems))[0]];
    return b;
  };

  // const getRandomPhone = () => {
  //   const a =
  //     characters[
  //       shuffle(Object.keys(characters).filter((e) => e.includes("phone")))[0]
  //     ];
  //   console.log(
  //     "Object.keys(elements).filter((e) => e.includes(",
  //     Object.keys(characters).filter((e) => e.includes("phone"))
  //   );

  //   return a;
  // };

  return (
    <>
      <div className="flex flex-row">
        <div className="w-[300px] h-[300px] border-green-900	border-2  rounded-md p-2 m-2">
          {wind ? <Elements wind={wind} /> : null}
        </div>
        <div className="flex flex-row">
          <Map turn={turn} wind={wind} />
          {/* <div>
        {Object.keys(characters).map((e) => (
          <Image
            alt=""
            className="border-green-900	border-2 m-1 rounded-[50%] "
            src={characters[e].src}
            width={50}
            height={50}
          />
        ))}
      </div>
      <div>
        {Object.keys(elementItems).map((e) => (
          <Image
            alt=""
            className="border-green-900	border-2 m-1 rounded-[50%]"
            src={elementItems[e].src}
            width={50}
            height={50}
          />
        ))}
      </div> */}

          <div>
            {/* <Image
          alt=""
          className="rounded-[40px]"
          src={getRandomElement(true).src}
          width={90}
          height={90}
        />
        <Image
          alt=""
          className="rounded-[40px]"
          src={getRandomElement(false).src}
          width={90}
          height={90}
        />

        <Image
          alt=""
          className="rounded-[40px]"
          src={getRandomPhone().src}
          width={90}
          height={90}
        /> */}
          </div>
        </div>
      </div>
      <button
        className=" border-green-900	border-2  rounded-md p-2"
        onClick={() => {
          setTurn(turn + 1),
            setWind(
              getRandomElement(true).name as
                | "east_wind"
                | "west_wind"
                | "south_wind"
                | "north_wind"
            );
        }}
      >
        next turn
      </button>
    </>
  );
};
