import Hero from "@/components/landingPage/Hero";
import { Button } from "@/components/ui/Button";
import { FC } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/landingPage/Footer";
import LogoCloud from "@/components/landingPage/LogoCloud";
import Features from "@/components/landingPage/Features";
import Stats from "@/components/landingPage/Stats";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <Hero />

      <LogoCloud />
      <Features />
      <Stats />

      <Footer />
    </div>
  );
};

export default page;
