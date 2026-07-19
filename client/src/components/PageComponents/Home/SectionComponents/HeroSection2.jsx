import { Button } from "@/components/ui/button";
import HeroImage from "../../../../assets/HeroImage.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ReactTyped, Typed } from "react-typed";
const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col mt-16">
      <div className=" flex h-[65vh]  bg-[#0a2955]">
        <div className=" md:mx-10 md:mt-5 w-full mx-5 md:p-5 p-3 flex flex-col justify-between">
          <div className="flex flex-col">
            <div>
              <img
                src={HeroImage}
                alt="OEPL"
                className=" md:w-md w-xs lg:w-lg "
              />
            </div>
            <div className="text-[42px] text-white">
              <h1>ONE ELEMENT PRIVATE LIMITED</h1>
            </div>
            <div>
              <h1 className="xl:text-6xl lg:text-4xl sm:text-3xl font-sans text-white">
                Be a part of building a{" "}
                <span className="text-[#00ae06]">Sustainable Future!</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <motion.button
                className="sm:px-4 px-3 h-[50px] text-xl py-0.5  sm:py-1 md:py-3 bg-[#1d6903] hover:bg-[#0c2f60] border-2 border-[#1d6903] hover:border-amber-50 transition text-white hover:text-white font-bold rounded-lg flex items-center gap-x-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h1 className="text-xl">Explore Sollutions and Technologies</h1>
                <motion.div
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight
                    strokeWidth="2.5px"
                    className="font-extrabold"
                    size={16}
                  />
                </motion.div>
              </motion.button>
            </div>
            <div className="flex w-full mt-3">
              <div className="flex justify-center mx-auto">
              <div className="flex w-full items-center">
                <div className="mr-5 text-white">
                  <h1 className="text-4xl">"</h1>
                </div>
                <div className="mt-3">
                  <h1 className="text-2xl text-center text-white ">
                    Developing, Deploying and  Decentralizing <br /> Sustainable
                    Technologies.
                  </h1>
                </div>
                <div className="ml-5 text-white">
                  <h1 className="text-4xl">"</h1>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
