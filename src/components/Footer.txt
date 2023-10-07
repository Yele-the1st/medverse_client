import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { Button } from "./ui/Button";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="mx-auto max-w-7xl py-20 sm:py-30 lg:py-30">
      <div className="w-full rounded-[35px] bg-gray-900 px-10 py-20 flex flex-col items-center">
        <div className=" pb-20 border-b border-white w-full flex flex-col items-center">
          <h1 className="text-4xl font-black tracking-tight font-Poppins text-white sm:text-8xl">
            TALK TO US!?
          </h1>
          <div className=" mt-6 w-full flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-24 lg:space-x-36 justify-center items-center text-white">
            <p className="flex items-center gap-2">
              chat with us
              <span>
                <ArrowRightIcon className=" rotate-45 w-5 h-5" />
              </span>
            </p>
            <p className="flex items-center gap-2">
              Email us
              <span>
                <ArrowRightIcon className=" rotate-45 w-5 h-5" />
              </span>
            </p>
            <p className="flex items-center gap-2">
              Ask Expert
              <span>
                <ArrowRightIcon className=" rotate-45 w-5 h-5" />
              </span>
            </p>
          </div>
          <div className="mt-20  ">
            <Button className=" flex items-center text-base gap-3 rounded-full">
              Get Started <ArrowRightIcon className=" rotate-45 w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className=" flex flex-col text-center md:text-left whitespace-nowrap mt-10 max-w-7xl mx-auto w-full md:grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className=" col-span-3">
            <div className="">
              <Link
                href="/"
                className={` text-white font-Poppins font-bold text-3xl`}
              >
                Med<span className="text-primary">Verse</span>
              </Link>
            </div>
          </div>
          <div className=" col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              <div className=" col-span-1 text-white">
                <div className="flex text-sm flex-col space-y-3">
                  <div className=" mb-4 text-base text-primary font-semibold">
                    Company
                  </div>
                  <Link href={"/"}>About us</Link>
                  <Link href={"/"}>Pricing</Link>
                  <Link href={"/"}>Success Stories</Link>
                  <Link href={"/"}>FAQs</Link>
                </div>
              </div>
              <div className=" col-span-1 text-white">
                <div className="flex flex-col text-sm space-y-3">
                  <div className=" mb-4 text-base text-primary font-semibold">
                    Partnership
                  </div>
                  <Link href={"/"}>Partners</Link>
                  <Link href={"/"}>Register Hospitals</Link>
                  <Link href={"/"}>Registered Pharmarcy</Link>
                </div>
              </div>
              <div className=" col-span-1 text-white">
                <div className="flex flex-col text-sm space-y-3">
                  <div className=" mb-4 text-base text-primary font-semibold">
                    Resources
                  </div>
                  <Link href={"/"}>Help Center</Link>
                  <Link href={"/"}>Blogs</Link>
                  <Link href={"/"}>Careers</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-9 text-center text-xs col-span-full text-white">
          <p className="text-center">
            Copyright, all rights reserved 2023 by Medverse
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
