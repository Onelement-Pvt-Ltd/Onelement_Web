import { motion } from "framer-motion";

const layout = [
  "col-start-1 row-start-1 col-span-3 row-span-4",
  "col-start-1 row-start-5 col-span-3 row-span-3",
  "col-start-4 row-start-1 col-span-3 row-span-3",
  "col-start-4 row-start-4 col-span-3 row-span-4",
];

const WhoWeAreBento = ({ images = [] }) => {
  return (
    <div className=" w-3/4 md:w-full">
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
  );
};

export default WhoWeAreBento;
