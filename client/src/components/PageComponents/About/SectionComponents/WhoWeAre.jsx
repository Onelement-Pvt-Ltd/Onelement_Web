import { Link } from "react-router";

const WhoWeAre = () => {
  return (
    <div className="bg-white">
      <div className="py-10 md:py-15 px-[4%] sm:px-[5%] md:px-[8%] lg:px-[12%] xl:px-[15%]">
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className=" size-3 sm:size-4 md:size-5 mr-4 bg-[#1F7902]"></div>
            <div className=" md:text-lg lg:text-xl  font-semibold">
              <h1>WHO WE ARE</h1>
            </div>
          </div>
          <div className=" text-3xl md:text-4xl mt-5 font-semibold">
            <h1>
              We engineer a cleaner future. <br />{" "}
              <Link to="/">
                <span className="text-[#1F7902] rounded underline transition duration-400 cursor-poin ease-in-out">
                  Onelement
                </span>{" "}
                at a time.
              </Link>
            </h1>
          </div>
        </div>
        <div className="flex justify-between w-full flex-col md:flex-row ">
          <div className="w-full flex justify-center ">
            <div className="w-full md:pr-10">
              {/* block of square and who we are heading. */}
              <div className="text-[16px] md:text-[18px] lg:text-xl mt-2 text-justify font-semibold">
                <p>
                  Our path towards deploying these technologies is a dire
                  necessity not only for the present but potentially for the
                  future generations.
                </p>
              </div>
              <div className=" w-full">
                <div className=" my-5 md:my-10 w-[75%] sm:w-[80%] md:w-full xl:w-[95%] mx-auto">
                  <div className="w-full max-w-7xl sm:max-w-7xl gap-5 ">
                    <div className="grid grid-cols-6 grid-rows-7  gap-2 md:gap-3 ">
                      <div className=" col-start-1 row-start-1 col-span-3 row-span-4 ">
                        <div className="relative h-full rounded-md overflow-hidden min-w-0 group">
                          {/* Background Image */}
                          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />
                          {/* Black Overlay */}
                          <div className="absolute inset-0 bg-black/30  transition duration-300" />
                          {/* Content */}
                          <div className="relative z-10 h-full flex items-center justify-center text-white"></div>
                        </div>
                      </div>
                      <div className="row-start-5 col-start-1 col-span-3 row-span-3">
                        <div className="relative h-full rounded-md overflow-hidden min-w-0 group">
                          {/* Background Image */}
                          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />

                          {/* Black Overlay */}
                          <div className="absolute inset-0 bg-black/30  transition duration-300" />

                          {/* Content */}
                          <div className="relative z-10 h-full flex items-center justify-center text-white"></div>
                        </div>
                      </div>

                      <div className=" col-start-4 row-start-1 col-span-3 row-span-3">
                        <div className="relative h-full aspect-9/8 rounded-md overflow-hidden min-w-0 group">
                          {/* Background Image */}
                          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />

                          {/* Black Overlay */}
                          <div className="absolute inset-0 bg-black/30  transition duration-300" />

                          {/* Content */}
                          <div className="relative z-10 h-full flex items-center justify-center text-white"></div>
                        </div>
                      </div>
                      <div className=" col-start-4 row-start-4 col-span-3 row-span-4">
                        <div className="relative h-full rounded-md overflow-hidden min-w-0 group">
                          {/* Background Image */}
                          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" />

                          {/* Black Overlay */}
                          <div className="absolute inset-0 bg-black/30  transition duration-300" />

                          {/* Content */}
                          <div className="relative z-10 h-full flex items-center justify-center text-white"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex md:ml-10 justify-center">
            <div className=" text-[16px] md:text-[18px] lg:text-xl text-justify font-semibold">
              <p>
                Our path towards deploying these technologies is a dire
                necessity not only for the present but potentially for the
                future generations.Our path towards deploying these technologies
                is a dire necessity not only for the
              </p>

              <p className="mt-3 md:mt-5 lg:mt-7 xl:mt-9 ">
                Our path towards deploying these technologies is a dire
                necessity not only for the present but potentially for the
                future generations.present but potentially for the future
                generations.
              </p>
              <p className="mt-3 md:mt-5 lg:mt-7 xl:mt-9 ">
                Our path towards deploying these technologies is a dire
                necessity not only for the present but potentially for the
                future generations.present but potentially for the future
                generations.present but potentially for the future generations.
              </p>
              <p className="mt-3 md:mt-5 lg:mt-7 xl:mt-9 ">
                Our path towards deploying these technologies is a dire
                necessity not only for the present but potentially for the
                future generations.present but potentially for the future
                generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhoWeAre;
