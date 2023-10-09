import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FC } from "react";

interface FeaturesCardProps {
  features: string;
  image: string;
  description: string;
}

const FeaturesCard: FC<FeaturesCardProps> = ({
  description,
  image,
  features,
}) => {
  return (
    <div className=" hover:shadow-lg cursor-pointer group h-[20rem] bg-[#eceff1] rounded-[0.75rem] flex flex-col justify-between items-end p-[1.5rem] relative overflow-hidden">
      <Image
        src={image}
        alt=""
        height={373}
        width={420}
        priority
        className=" rounded-tl-[0.75rem] transition-all delay-0 duration-300 ease-in-out transform-gpu group-hover:scale-[1.2] scale-100 top-[1.3rem] left-[1.3rem] pointer-events-none w-full max-w-none absolute bottom-auto right-auto align-middle inline-block "
      />
      <div className=" z-[1] h-[70%] bg-gradient-to-b to-primary via-primary from-transparent absolute top-auto bottom-0 left-0 right-0 "></div>
      <div className=" group-hover:bg-primary z-[3] bg-white rounded-full justify-center items-center p-3 flex relative shadow-md ">
        <svg
          className=" group-hover:stroke-white stroke-[#58C566]  "
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.29199 17.7087L17.7087 7.29199"
            // stroke="#58C566"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.29199 7.29199H17.7087V17.7087"
            // stroke="#58C566"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className=" z-[2] relative w-full max-w-full  ">
        <div className=" text-xl font-bold text-white"> {features}</div>
        <div className=" text-sm text-white">{description}</div>
      </div>
    </div>
  );
};

export default FeaturesCard;
