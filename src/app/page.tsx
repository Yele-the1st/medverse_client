import Hero from "@/components/Hero";
import { Button } from "@/components/ui/Button";
import { FC } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoCloud from "@/components/LogoCloud";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <Hero />

      <LogoCloud />

      <Footer />
    </div>
  );
};

export default page;
