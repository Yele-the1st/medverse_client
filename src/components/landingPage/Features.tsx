import { FC } from "react";
import FeaturesCard from "../cards/FeaturesCard";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: "/assets/IMG.png",
    features: "Consultation",
    description:
      "Access expert medical consultation for personalized advice and guidance. Our platform connects you with healthcare professionals to address your concerns and provide tailored recommendations for optimal health.",
  },
  {
    id: 2,
    image: "/assets/IMG1.png",
    features: "Lab Test",
    description:
      "Explore our streamlined process for convenient lab testing. Get quick, accurate results to monitor your health and make informed decisions. Prioritize your well-being with our hassle-free lab testing services.",
  },
  {
    id: 3,
    image: "/assets/IMG2.png",
    features: "Community",
    description:
      "Join our community to foster a culture of wellness and mutual support. Share knowledge, experiences, and resources to promote better health for everyone. Together, we can make a positive impact on our collective well-being.",
  },
  {
    id: 4,
    image: "/assets/IMG3.png",
    features: "Subscription",
    description:
      "Opt for our Pharma Subscription to seamlessly access essential medical drugs and equipment. Stay worry-free as we provide convenient and reliable healthcare solutions tailored to your needs",
  },
  {
    id: 5,
    image: "/assets/IMG4.png",
    features: "Market Hub ",
    description:
      "our marketplace offering a wide range of essential medical drugs and cutting-edge equipment. Access quality healthcare solutions at competitive prices. Your gateway to a healthier tomorrow.",
  },
  {
    id: 6,
    image: "/assets/IMG5.png",
    features: "Pharma insurance",
    description:
      "Get essential medications and healthcare services without financial burden. Prioritize your health with our reliable, tailored pharma insurance coverage.",
  },
  // Add more objects as needed
];

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <div className=" container max-w-7xl mx-auto w-full">
      <div className=" mt-20 mb-10 relative max-w-max   ">
        <Image
          src={`/assets/Vector.svg`}
          alt="SVG Image"
          height={120}
          width={120}
          className="absolute animate-spin transition-all ease-in-out top-[-20px] right-0 h-20"
        />

        <h1 className="relative drop-shadow-lg font-bold text-3xl md:text-5xl text-gray-900 text-center sm:text-start z-10">
          What we bring to You
        </h1>
      </div>
      <div className=" mt-3 max-w-2xl ">
        At Medverse, we&apos;re rewriting the way you experience medical care.
        Our services are designed to empower you in every aspect of your health
        journey
      </div>
      <div className=" mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] ">
        {data.map((item) => (
          <FeaturesCard
            key={item.id}
            image={item.image}
            description={item.description}
            features={item.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
