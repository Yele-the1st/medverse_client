"use client";
import React, { FC, useState } from "react";

import Image from "next/image";

interface LogoCloudProps {}

const logo1 = "/assets/optimum-nutrition-inc-logos-idjEg084fz.svg";
const logo2 = "/assets/green-life-energy-gle-logos-idyESTloyP.svg";
const logo3 = "/assets/gsk-logos-idJKnhJLpP.svg";
const logo4 = "/assets/merck-logos-ido0cuxynN.svg";
const logo5 =
  "/assets/mopson-pharmaceuticals-limited-lagos-logos-id2KEbHKab.svg";
const logo6 = "/assets/pfizer-logos-ido439HBxO.svg";
const logo7 = "/assets/procter-and-gamble-logos-idKej0DsdD.svg";
const logo8 = "/assets/reckitt-logos-idadT54nrV.svg";

const LogoCloud: FC<LogoCloudProps> = ({}) => {
  const [isHovered, setIsHovered] = useState(false);

  const animationStyle = {
    animation: "60s slide infinite linear",
    // define the normal style without the box shadow
    // ...npm
  };

  const hoverStyle = {
    animation: "60s slide infinite linear paused",
    // ...
  };

  return (
    <div className="">
      <div className="my-10 relative max-w-max container mx-auto w-full  ">
        <div>
          <Image
            src={`/assets/Vector.svg`}
            alt="SVG Image"
            height={120}
            width={120}
            className="absolute animate-spin transition-all ease-in-out top-[-20px] left-0 h-20"
          />
          <p className="relative drop-shadow-lg font-bold text-3xl md:text-5xl text-gray-900 text-center sm:text-start z-10">
            Where Innovation Meets Trust
          </p>
        </div>
      </div>
      <section
        id="logos-play"
        className=" overflow-hidden w-full bg-white relative text-base leading-5"
      >
        <div className=" h-[100px] relative items-center flex max-w-none py-[64px] z-1 justify-center mx-auto">
          <div
            style={{
              position: "absolute",
              top: 0,
              width: "250px",
              height: "100%",
              content: '""',
              zIndex: 2,
              left: 0,
              background:
                "linear-gradient(to left, rgba(255,255,255,0), white)",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: 0,
              width: "250px",
              height: "100%",
              content: '""',
              zIndex: 2,
              right: 0,
              background:
                "linear-gradient(to right, rgba(255,255,255,0), white)",
            }}
          ></div>
          <div className=" items-center flex absolute">
            <div className=" flex relative flex-none">
              <div
                role="list"
                className=" grid gap-10 auto-cols-max items-center grid-flow-col grid-rows-auto grid-cols-auto-cols-max cursor-pointer"
                style={isHovered ? hoverStyle : animationStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo1}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo2}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo3}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo4}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo5}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo6}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo7}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo8}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="flex relative flex-none">
              <div
                role="list"
                className="grid gap-10 auto-cols-max items-center grid-flow-col grid-rows-auto grid-cols-auto-cols-max cursor-pointer"
                style={isHovered ? hoverStyle : animationStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo1}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo2}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo3}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo4}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo5}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo6}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo7}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo8}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="flex relative flex-none">
              <div
                role="list"
                className="grid gap-10 auto-cols-max items-center grid-flow-col grid-rows-auto grid-cols-auto-cols-max cursor-pointer"
                style={isHovered ? hoverStyle : animationStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo1}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo2}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo3}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo4}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo5}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo6}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo7}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
                <div className=" mr-[40px] px-3 py-2">
                  <Image
                    className=" min-h-[100px] min-w-[120px]"
                    src={logo8}
                    alt="Logo 1"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoCloud;
