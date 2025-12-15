// import { TbWindmill } from "react-icons/tb";
import WindMill2 from "../../../../../assets/WindMill2.png";
import CarbonCapture from "../../../../../assets/CarbonCapture.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const AboutContent = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col py-5 text-black">
      <div className="flex flex-col">
        <div>
          <h1 className="relative inline-block text-5xl font-bold b:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-3/4 after:h-[5px] after:bg-[#1d6903]">
            About Us
          </h1>
        </div>
        <div className="mt-2 text-justify">
          <h1 className="text-2xl font-semibold">
            We strongly believe, in creating a sustainable, resilient and clean
            environment for future generations!
          </h1>
        </div>
      </div>
      <div className="flex mt-5 text-[18px] font-semibold text-justify">
        <p>
          Our path towards deploying these technologies is a dire necessity not
          only for the present but potentially for the future generations.
        </p>
      </div>
      <div className="w-full mt-5 ">
        {/* Horizontal */}
        <div className="w-full h-[3px] bg-black " />

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2  h-full w-[3px] bg-black" />

          <div className="text-justify flex flex-col justify-start text-md leading-5 my-5 md:pr-4 font-md text-black/80 max-w-md">
            <div className="flex flex-col">
              <div>
                <img src={WindMill2} alt="WindMill" className="size-15" />
              </div>

              <h1 className="text-xl mt-1 font-bold">Industrial Equipment</h1>
            </div>
            <p className="mt-4 font-semibold">
              Our path towards deploying these technologies is a dire necessity
              not only for the present but potentially for the future
              generations.
            </p>
          </div>

          <div className="text-justify flex flex-col justify-start text-md leading-5 my-5 md:px-4 font-md text-black/80 max-w-md">
            <div className="flex flex-col">
              <div>
                <img src={CarbonCapture} alt="WindMill" className="size-15" />
              </div>

              <h1 className="text-xl mt-1 font-bold">Industrial Equipment</h1>
            </div>
            <p className="mt-4 font-semibold">
              Our path towards deploying these technologies is a dire necessity
              not only for the present but potentially for the future
              generations.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <motion.button
            className="sm:px-4 px-3 h-[50px] text-xl py-0.5 w-40 sm:py-1 md:py-3 hover:bg-[#1d6903] bg-[#0c2f60] border-2 hover:border-[#1d6903] hover:cursor-pointer border-[#0c2f60] transition text-white hover:text-white font-bold rounded-lg flex items-center gap-x-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 className="text-xl">Know More</h1>
            <motion.div
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ duration: 0.15 }}
            >
              <ArrowRight
                strokeWidth="3px"
                className="font-extrabold"
                size={20}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
