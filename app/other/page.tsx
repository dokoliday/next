import React from "react";
import Image from "next/image";

const OtherIndex = () => {
  const eightrange = Array(8).fill(
    <Image
      className="border-green-900	border-2 "
      src="/assets/tree.png"
      alt="Picture of the author"
      width={100}
      height={100}
    />
  );
  return (
    <div className="flex flex-row">
      {Array(8)
        .fill("")
        .map((e) => {
          return (
            <div>
              {eightrange.map((e) => {
                return <div className="m-1">{e}</div>;
              })}
            </div>
          );
        })}
    </div>
  );
};
export default OtherIndex;
