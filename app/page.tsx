import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className=" bg-slate-600 flex justify-around py-3">
      <Link
        href={"/content"}
        className=" border-amber-400 border-solid rad rounded-md border-2 p-5"
      >
        <p className=" text-amber-400 text-sm ">tab 1</p>
      </Link>
      <Link
        href={"/content"}
        className=" border-amber-400 border-solid rad rounded-md border-2 p-5"
      >
        <p className=" text-amber-400 text-sm ">tab 2</p>
      </Link>
      <Link
        href={"/content"}
        className=" border-amber-400 border-solid rad rounded-md border-2 p-5"
      >
        <p className=" text-amber-400 text-sm ">tab 3</p>
      </Link>
    </div>
  );
};
export default Home;
