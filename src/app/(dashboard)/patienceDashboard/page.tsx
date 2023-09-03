import Hero from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { FC } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <div className="bg-white pt-10">
        <div className=" px-3 h-screen  max-w-7xl py-20 sm:py-30 lg:py-30 mx-auto w-full">
          <h1 className="text-4xl flex justify-start font-black tracking-tight font-Poppins text-gray-900 sm:text-6xl">
            Overview
          </h1>
          <p className="mt-4 text-base leading-8">
            Welcome back, Bella! Your progress is really good. Keep it up
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
