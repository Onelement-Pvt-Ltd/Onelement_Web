import mission from "@/assets/AboutImages/mission.png";
import vision from "@/assets/AboutImages/vision.png";

const WhatWeDo = () => {
  return (
    <div>
      <div>
        <div className="py-20 text-white">
          <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-20 mx-[2%] sm:mx-[12%] md:mx-[15%] lg:mx-[18%] xl:mx-[20%]">
            <div className="w-full min-w-[90vw] md:min-w-[80vw] lg:min-w-[70vw]">
              {/* Grid: 1 col mobile, 2 cols sm, 4 cols x 3 rows md+ */}
              <div className="grid  grid-cols-3 grid-rows-4 md:grid-cols-5 md:grid-rows-3 gap-2 md:gap-3">
                {/* 1: top-left square */}
                <div className="col-start-1 row-start-1 md:col-span-2">
                  <div className=" aspect-square md:aspect-2/1 size-full rounded-md overflow-hidden flex  min-w-0">
                    <div className="text-black">
                      <div className="flex items-center">
                        <div className=" size-3 sm:size-4 md:size-5 mr-4 bg-[#1F7902]" />
                        <div className=" text-[12px] md:text-lg lg:text-xl font-semibold">
                          <h1 className="">WHAT WE DO</h1>
                        </div>
                      </div>
                      <div className="mt-2 text-sm md:text-xl font-bold">
                        <p className="">We Engineer solutions that matter</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2: top-second square */}
                <div className="md:col-start-5 col-start-3 row-start-2  md:row-start-1">
                  <div className="w-full h-full bg-[#0a2955] rounded-md overflow-hidden flex flex-col justify-end items-end p-3 min-w-0">
                    <h1 className="text-3xl sm:text-5xl md:text-2xl lg:text-4xl font-extrabold" >45+</h1>
                    <p className="text-xs sm:text-2xl md:text-base lg:text-xl text-right font-semibold">Projects Completed</p>
                  </div>
                </div>

                {/* 3: top-wide (5/2) spanning cols 3-4 */}
                <div className="md:col-start-3 row-start-2 col-start-1 col-span-2 md:row-start-1">
                  <div className="w-full h-full relative rounded-md overflow-hidden flex items-center justify-center text-white">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${mission})` }}
                    />
                  </div>
                </div>

                {/* 4: left tall narrow occupying rows 2-3 of col 1 */}
                <div className=" md:row-start-2 md:col-start-1 md:row-span-2 md:col-span-2 row-start-1 col-start-2 col-span-2 ">
                  <div className="w-full h-full relative rounded-md overflow-hidden flex items-center justify-center text-white">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${mission})` }}
                    />
                  </div>
                </div>

                {/* 5: middle big 5/2 on row 2 spanning cols 2-3 */}
                <div className="md:col-start-4 col-start-2 row-start-3 col-span-2 md:row-start-2">
                  <div className="w-full h-full relative rounded-md overflow-hidden flex items-center justify-center text-white">
                    <span className="text-sm md:text-base">hello 1</span>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${vision})` }}
                    />
                  </div>
                </div>

                {/* 6: row 2 right square at col 4 */}
                <div className="md:col-start-3 col-start-1 row-start-3 md:row-start-2">
                  <div className="w-full h-full bg-[#0a2955] rounded-md overflow-hidden flex flex-col justify-end items-end p-3 min-w-0">
                    <h1 className="text-3xl sm:text-5xl md:text-2xl lg:text-4xl font-extrabold" >17+</h1>
                    <p className="text-xs sm:text-2xl md:text-base lg:text-xl text-right font-semibold">Experts Contractors</p>
                  </div>
                </div>

                {/* 7: row 3 left of right block -> col 2 */}
                <div className=" col-start-3  row-start-4 md:col-start-5 md:row-start-3">
                  <div className="w-full h-full bg-[#0a2955] rounded-md overflow-hidden flex flex-col justify-end items-end p-3 min-w-0">
                    <h1 className="text-3xl sm:text-5xl md:text-2xl lg:text-4xl font-extrabold" >28+</h1>
                    <p className="text-xs sm:text-2xl md:text-base lg:text-xl text-right font-semibold">Happy Clients</p>
                  </div>
                </div>

                {/* 8: row 3 wide 5/2 spanning cols 3-4 */}
                <div className="md:col-start-3 col-span-2  md:row-start-3">
                  <div className="w-full h-full relative rounded-md overflow-hidden flex items-center justify-center text-white">
                    <span className="text-sm md:text-base">hello 1</span>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${mission})` }}
                    />
                  </div>
                </div>
              </div>

              {/* CTA / full-width row below grid */}
            </div>
          </div>
          {/* <div className="w-full">
            <div className="bg-cover bg-center rounded-md overflow-hidden flex items-center justify-center pt-5">
              <button className="px-6 py-2 bg-white text-black rounded font-semibold shadow">
                Read More
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;
