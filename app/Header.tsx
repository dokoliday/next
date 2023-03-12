import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className=" bg-slate-200">
      <Link href="/">
        <p className="text-center font-mono text-stone-700">
          My beautiful site
        </p>
      </Link>
    </div>
  );
};
export default Header;
