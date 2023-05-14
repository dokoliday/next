import { log } from "console";
import Image from "next/image";
import { elementItems } from "../constants/elementItems";

type TProps = {
  wind: string;
};
export const Elements = ({ wind }: TProps) => {
  return (
    <Image
      alt=""
      className="border-green-900	border-2  rounded-md"
      src={elementItems[wind].src}
      width={100}
      height={100}
    />
  );
};
