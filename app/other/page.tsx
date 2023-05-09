import React from "react";
import Image from "next/image";

const map = {
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

const elements = {
  sun: {
    src: "/assets/sun.png",
  },
  rain: {
    src: "/assets/rain.png",
  },
  east_wind: {
    src: "/assets/east_wind.png",
  },
  south_wind: {
    src: "/assets/south_wind.png",
  },
  north_wind: {
    src: "/assets/north_wind.png",
  },
  west_wind: {
    src: "/assets/west_wind.png",
  },
};

const characters = {
  helicopter_empty: {
    src: "/assets/helicopter_empty.png",
  },
  helicopter_full: {
    src: "/assets/helicopter_full.png",
  },
  tank: {
    src: "/assets/tank.png",
  },
  phone_red: {
    src: "/assets/phone_red.png",
  },
  phone_green: {
    src: "/assets/phone_green.png",
  },
  phone_orange: {
    src: "/assets/phone_orange.png",
  },
  human_red: {
    src: "/assets/human_red.png",
  },
  human_green: {
    src: "/assets/human_green.png",
  },
  human_orange: {
    src: "/assets/human_orange.png",
  },
};

const OtherIndex = () => {
  const shuffle = (array: string[]) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const mapPlan = Array(10)
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

  const getRandomElement = (onlyWind: boolean) => {
    if (onlyWind) {
      const a =
        elements[
          shuffle(Object.keys(elements).filter((e) => e.includes("wind")))[0]
        ];
      return a;
    }

    const b = elements[shuffle(Object.keys(elements))[0]];
    return b;
  };

  const getRandomPhone = () => {
    const a =
      characters[
        shuffle(Object.keys(characters).filter((e) => e.includes("phone")))[0]
      ];
    console.log(
      "Object.keys(elements).filter((e) => e.includes(",
      Object.keys(characters).filter((e) => e.includes("phone"))
    );

    return a;
  };

  const mapArray = shuffle([
    ...Array(map.tree.nb).fill("tree"),
    ...Array(map.fire.nb).fill("fire"),
    ...Array(map.lake.nb).fill("lake"),
    ...Array(map.bush.nb).fill("bush"),
    ...Array(map.stone.nb).fill("stone"),
    "watch_center",
  ]);
  console.log(getRandomPhone());

  return (
    <div className="flex flex-row">
      <div>
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
        {Object.keys(elements).map((e) => (
          <Image
            alt=""
            className="border-green-900	border-2 m-1 rounded-[50%]"
            src={elements[e].src}
            width={50}
            height={50}
          />
        ))}
      </div>
      <div className="grid grid-cols-10 w-[70vw]">
        {mapPlan.map((e) => {
          if (!e.isEmpty && mapArray.length) {
            const imageSrc = mapArray[0].toString();
            mapArray.shift();
            return (
              <Image
                alt=""
                className="border-green-900	border-2 m-1  rounded-lg"
                src={map[imageSrc].src}
                width={90}
                height={90}
              />
            );
          }
          return (
            <div className="w-[90px] h-[90px] border-green-900	border-2 m-1 "></div>
          );
        })}
      </div>
      <div>
        <Image
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
        />
      </div>
    </div>
  );
};
export default OtherIndex;
