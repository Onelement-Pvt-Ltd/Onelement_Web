import { Button } from "@/components/ui/button";
import HeroImage from "../../../../assets/HeroImage.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col mt-16">
      <div className=" flex h-[65vh] bg-[#0a2955]">
        <div className=" md:m-10 m-5 md:p-5 p-3 flex flex-col justify-between">
          <div className="flex flex-col">
            <div>
              <img
                src={HeroImage}
                alt="OEPL"
                className=" md:w-md w-xs lg:w-lg "
              />
            </div>
            <div>
              <h1 className="xl:text-6xl lg:text-4xl sm:text-3xl font-sans text-white">
                Be a part of building a{" "}
                <span className="text-[#1d6903]">Sustainable Future!</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <motion.button
                className="sm:px-4 px-3 h-[50px] text-xl py-0.5 w-40 sm:py-1 md:py-3 bg-[#1d6903] hover:bg-[#0c2f60] border-2 border-[#1d6903] hover:border-amber-50 transition text-white hover:text-white font-bold rounded-lg flex items-center gap-x-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h1 className="text-xl">Know More</h1>
                <motion.div
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight
                    strokeWidth="3px"
                    className="font-extrabold"
                    size={20}
                  />
                </motion.div>
              </motion.button>
            </div>
            <div className="mt-3">
              <h1 className="text-xl text-white ">
                Developing, deploying and <br /> decentralizing sustainable
                technologies.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
