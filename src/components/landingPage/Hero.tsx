import Image from "next/image";
import { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="bg-cover bg-center bg-[url(/Doodles.svg)] pt-10">
      <div className=" py-20 sm:py-30 lg:py-30 md:pb-[340px]">
        <div className=" container max-w-[1303px] mx-auto w-full flex">
          <div className=" transition-all duration-300 ease-in-out relative w-full h-full">
            <h1 className=" font-black tracking-tight font-Poppins italic text-[70px] leading-[80.5px] text-gray-900 1000px:text-[100px] 1000px:leading-[125.5px] 1050px:text-[110px] 1050px:leading-[135.5px] 1150px:text-[120px] 1150px:leading-[135.5px] 1200px:text-[120px] 1200px:leading-[135.5px] 1300px:text-[134px] 1300px:leading-[145.5px]">
              Your one <br /> and Only <br />
              <strong className=" text-primary">Medical</strong> Hub
            </h1>
            <div className=" group  1300px:max-w-[612px] 1200px:max-w-[570px] 1150px:max-w-[550px] 1050px:max-w-[500px] 1000px:max-w-[450px] 1000px:absolute mb-3  top-[400px] right-0 ">
              <div className="  relative">
                <Image
                  src={`/images/Marketplace_OP1.png`}
                  alt=""
                  height={264}
                  width={612}
                  priority
                  loading="eager"
                  className="h-full w-full shadow-2xl"
                />
                <div className=" group-hover:animate-spin top-12 absolute h-16 1000px:top-14 1000px:left-4 1200px:top-20 1200px:left-6  ">
                  <Image
                    src={`/images/HeroArrow.svg`}
                    alt=""
                    height={400}
                    width={400}
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>

            <div className=" group 1300px:max-w-[612px] 1200px:max-w-[570px] 1150px:max-w-[550px] 1050px:max-w-[500px] 1000px:max-w-[450px] 1000px:absolute mb-3  top-0 right-0 ">
              <div className=" relative">
                <Image
                  src={`/images/Marketplace_OP2.png`}
                  alt=""
                  height={264}
                  priority
                  loading="eager"
                  width={612}
                  className="h-full w-full shadow-2xl"
                />
                <div className=" group-hover:animate-spin bottom-3 absolute h-16 1000px:bottom-6 1000px:left-4 1200px:bottom-10 1200px:left-6  ">
                  <Image
                    src={`/images/HeroArrow.svg`}
                    alt=""
                    height={400}
                    width={400}
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>

            <div className=" group 1300px:max-w-[612px] 1200px:max-w-[570px] 1150px:max-w-[550px] 1050px:max-w-[500px] 1000px:max-w-[450px] 1000px:absolute mb-3  top-[450px] left-0 ">
              <div className=" relative">
                <Image
                  src={`/images/Marketplace_OP3.png`}
                  alt=""
                  height={264}
                  loading="eager"
                  priority
                  width={612}
                  className="h-full w-full shadow-2xl"
                />
                <div className=" group-hover:animate-spin bottom-2 absolute h-16 1000px:bottom-4 1000px:left-6  1200px:bottom-6 1200px:left-8  ">
                  <Image
                    src={`/images/HeroArrow.svg`}
                    alt=""
                    height={400}
                    width={400}
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
