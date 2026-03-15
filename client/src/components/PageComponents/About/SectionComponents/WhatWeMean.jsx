import mission from "@/assets/AboutImages/mission.png";
import vision from "@/assets/AboutImages/vision.png";
const WhatWeMean = () => {
  return (
    <div className="bg-[#0a2955] px-[4%] sm:px-[5%] md:px-[8%] lg:px-[12%] xl:px-[15%] py-10 text-white ">
      <div className="w-full text-justify">
        <div className="flex items-center">
          <div className=" size-3 sm:size-4 md:size-5 mr-4 bg-[#1F7902]" />
          <div className=" md:text-lg lg:text-xl font-semibold">
            <h1>WHAT WE MEAN</h1>
          </div>
        </div>
        <div className="flex-col mt-5">
          {/* vision */}
          <div className="w-full items-center flex md:flex-row flex-col gap-x-8 md:gap-x-10 lg:gap-x-20">
            <div className="flex flex-col w-full">
              <div className=" flex justify-start">
                          <h1 className="relative inline-block md:text-4xl text-3xl lg:text-5xl font-extrabold b:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-3/4 after:h-[5px] after:bg-[#1d6903]"> VISION
</h1>
              </div>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                inventore autem dolorum earum in ut error laborum sequi facilis
                reprehenderit voluptatibus aliquam, architecto modi, porro
                doloremque nisi pariatur cupiditate laboriosam repudiandae animi
                eaque vitae? Obcaecati aut non minus optio a.
              </p>
            </div>
            <div className="mt-5 relative inline-block">
              <img src={vision} alt="vision" className="block" />

              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 w-full h-4 bg-[#1F7902] rounded-b transition duration-300" />
            </div>
          </div>

          {/* // mission */}
          <div className="w-full items-center flex md:flex-row flex-col-reverse gap-x-8 md:gap-x-10 lg:gap-x-20 mt-10">
            <div className="mt-5 relative inline-block">
              <img className="" src={mission} alt="mission" />
              <div className="absolute bottom-0 left-0 w-full h-4 bg-[#1F7902] rounded-b transition duration-300" />
            </div>
            <div className="flex flex-col w-full">
              <div className=" flex justify-end">
          <h1 className="relative inline-block md:text-4xl text-3xl lg:text-5xl font-extrabold b:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-3/4 after:h-[5px] after:bg-[#1d6903]">MISSION</h1>
              </div>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                inventore autem dolorum earum in ut error laborum sequi facilis
                reprehenderit voluptatibus aliquam, architecto modi, porro
                doloremque nisi pariatur cupiditate laboriosam repudiandae animi
                eaque vitae? Obcaecati aut non minus optio a.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatWeMean;
