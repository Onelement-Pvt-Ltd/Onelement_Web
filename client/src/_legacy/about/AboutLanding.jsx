import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import About_Bento_1 from "../../../../assets/AboutImages/About_Bento_1.png";

const AboutLanding = () => {
  const [isHoveredAbout, setIsHoveredAbout] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <div className="min-h-full flex text-black bg-[#d9d9d9] w-full">
      <div className=" flex-col md:flex-row flex items-center md:justify-between md:gap-x-15 py-10 md:py-16 mx-3 sm:mx-5 md:mx-10 lg:mx-20">
        <div className="flex w-full md:w-1/2 justify-center flex-col">
          <div className="mb-5 md:mb-10">
            <h1 className="relative  inline-block text-3xl md:text-5xl sm:text-4xl lg:text-5xl font-extrabold b:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-7/8 after:h-[5px] after:bg-[#1d6903]">
              ABOUT US
            </h1>
          </div>
          <p className="lg:text-[18px] md:text-[16px] text-[14px] text-justify md:mb-5 font-semibold">
            Our path towards deploying these technologies is a dire necessity
            not only for the present but potentially for the future generations.
            Our path towards deploying these technologies is a dire necessity
            not only for the present but potentially for the future generations.
            Our path towards deploying these technologies is a dire necessity
            not only for the present but potentially for the future generations.
          </p>

          <div className="flex items-center justify-between md:justify-between w-full ">
            <div className="flex ">
              <Motion.button
                className="sm:px-4 cursor-pointer px-2 lg:px-3 md:text-xl text-md py-2  md:mt-5 mt-2  xs:py-2 bg-[#1d6903] hover:bg-[#0c2f60] border-2 border-[#1d6903] hover:border-amber-50 transition text-white hover:text-white font-bold rounded-lg flex items-center gap-x-2"
                onMouseEnter={() => setIsHoveredAbout(true)}
                onMouseLeave={() => setIsHoveredAbout(false)}
                onClick={handleClick}
              >
                <h1 className="text-sm sm:text-xl">Know More</h1>
                <Motion.div
                  animate={{ x: isHoveredAbout ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight
                    strokeWidth="3px"
                    className="font-extrabold"
                    size={15}
                  />
                </Motion.div>
              </Motion.button>
            </div>
          </div>
        </div>
        <div className=" w-3/4 md:w-3/7 lg:w-3/8">
          <div className=" my-5 md:my-10 md:w-[95%] mx-auto">
            <div className="w-full max-w-7xl sm:max-w-7xl gap-5 ">
              <div className="grid grid-cols-6 grid-rows-7 gap-2 lg:gap-3 ">
                <div className=" col-start-1 row-start-1 col-span-3 row-span-4 ">
                  <div className="relative h-full rounded-md overflow-hidden min-w-0 group">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />
                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/30  transition duration-300" />
                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center justify-center text-white">
                      <span className="text-sm md:text-base font-semibold tracking-wide"></span>
                    </div>
                  </div>
                </div>
                <div className="row-start-5 col-start-1 col-span-3 row-span-3">
                  <div className="relative h-full rounded-md overflow-hidden min-w-0 group">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/30  transition duration-300" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center justify-center text-white">
                      <span className="text-sm md:text-base font-semibold tracking-wide"></span>
                    </div>
                  </div>
                </div>

                <div className=" col-start-4 row-start-1 col-span-3 row-span-3">
                  <div className="relative h-full aspect-9/8 rounded-md overflow-hidden min-w-0 group">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/30  transition duration-300" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center justify-center text-white">
                      <span className="text-sm md:text-base font-semibold tracking-wide"></span>
                    </div>
                  </div>
                </div>
                <div className=" col-start-4 row-start-4 col-span-3 row-span-4">
                  <div className="relative h-full rounded-md overflow-hidden min-w-0 group">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/30  transition duration-300" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center justify-center text-white">
                      <span className="text-sm md:text-base font-semibold tracking-wide"></span>
                    </div>
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
export default AboutLanding;
