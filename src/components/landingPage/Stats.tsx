import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { FC } from "react";

interface StatsProps {}

const Stats: FC<StatsProps> = ({}) => {
  return (
    <div>
      <div className=" px-3 mt-20 md:mt-32 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-full md:col-span-7">
          <div className="mb-10 relative max-w-max w-full  ">
            <Image
              src={`/assets/Vector.svg`}
              alt="SVG Image"
              height={120}
              width={120}
              className="absolute animate-spin transition-all ease-in-out bottom-[-15px] right-32 lg:right-48 h-20"
            />
            <div className=" mb-8 z-10 drop-shadow-lg relative flex text-4xl md:text-5xl lg:text-6xl italic font-bold items-center justify-between pb-2 ">
              Growing Beyond <br /> Boundaries,
              <br /> Watch Us
            </div>
          </div>

          <div className=" py-4 border-b-2 border-gray-900 ">
            <div className=" text-2xl md:text-3xl lg:text-4xl font-bold">
              340,886,410
            </div>
            <div className="">Messages, chat, phone, video sessions</div>
          </div>
          <div className=" py-4 border-b-2 border-gray-900 ">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
              340,886,410
            </div>
            <div className="">Licensed Professionals ready to help</div>
          </div>
          <div className=" py-4 border-b-2 border-gray-900 ">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
              340,886,410
            </div>
            <div className="">People got help</div>
          </div>
        </div>
        <div className=" col-span-full md:col-span-5 hidden md:block rounded-lg">
          <div className="rounded-[35px]  max-h-[200px] w-full ">
            <Image
              src={`/assets/Group44211.png`}
              alt=""
              height={500}
              width={500}
              className=" h-full w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
