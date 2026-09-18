// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
import "./blogbento.css"; // optional: keep if you still use any grid helpers
// import first from "../../../assets/images/first.webp";
// import Blog4 from "../../../assets/BlogImages/Blog4.png";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const BlogSectionSample = () => {
  return (
    <div className="bg-sky-200">

      {/* About Section  */}
      <div>
        <div className="md:pt-32 pt-20 sm:pt-24 flex flex-col justify-center items-center px-4 md:px-8 lg:px-20 mx-[2%] sm:mx-[12%] md:mx-[15%] lg:mx-[18%] xl:mx-[20%]">
        <div className="w-full max-w-5xl sm:max-w-7xl ">
          {/* Grid: 1 col mobile, 2 cols sm, 4 cols x 3 rows md+ */}
          <div className="grid  grid-cols-3 grid-rows-4 md:grid-cols-4 md:grid-rows-3 gap-2 md:gap-3">
            {/* 1: top-left square */}
            <div className="col-start-1 row-start-1">
              <div className="aspect-square size-full bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                <span className="text-sm md:text-base">Hello first</span>
              </div>
            </div>

            {/* 2: top-second square */}
            <div className="md:col-start-4 col-start-3 row-start-2  md:row-start-1">
              <div className="w-full h-full bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                <span className="text-sm md:text-base">Hello 1</span>
              </div>
            </div>

            {/* 3: top-wide (5/2) spanning cols 3-4 */}
            <div className="md:col-start-2 row-start-2 col-start-1 col-span-2 md:row-start-1">
              <div className="w-full h-full bg-black rounded-md overflow-hidden flex items-center justify-center text-white">
                <span className="text-sm md:text-base">hello 1</span>
              </div>
            </div>

            {/* 4: left tall narrow occupying rows 2-3 of col 1 */}
            <div className=" md:col-span-1 md:row-start-2 md:col-start-1 md:row-span-2 row-start-1 col-start-2 col-span-2 ">
              <div className=" w-full h-full bg-black rounded-md overflow-hidden flex items-center justify-center text-white">
                <span className="text-sm md:text-base">hello left</span>
              </div>
            </div>

            {/* 5: middle big 5/2 on row 2 spanning cols 2-3 */}
            <div className="md:col-start-3 col-start-2 row-start-3 col-span-2 md:row-start-2">
              <div className="w-full h-full bg-black rounded-md overflow-hidden flex items-center justify-center text-white">
                <span className="text-sm md:text-base">hello 2</span>
              </div>
            </div>

            {/* 6: row 2 right square at col 4 */}
            <div className="md:col-start-2 col-start-1 row-start-3 md:row-start-2">
              <div className="size-full bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                <span className="text-sm md:text-base">Hello 2</span>
              </div>
            </div>

            {/* 7: row 3 left of right block -> col 2 */}
            <div className=" col-start-3  row-start-4 md:col-start-4 md:row-start-3">
              <div className="size-full bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                <span className="text-sm md:text-base">Hello 3</span>
              </div>
            </div>

            {/* 8: row 3 wide 5/2 spanning cols 3-4 */}
            <div className="md:col-start-2 col-span-2  md:row-start-3">
              <div className="size-full bg-black rounded-md overflow-hidden flex items-center justify-center text-white">
                <span className="text-sm md:text-base">hello 3</span>
              </div>
            </div>
          </div>

          {/* CTA / full-width row below grid */}
        </div>
      </div>
      <div className=" w-full">
        <div className="bg-cover bg-center rounded-md overflow-hidden flex items-center justify-center pt-5 pb-10">
          <button className="px-6 py-2 bg-white text-black rounded font-semibold shadow">
            Read More
          </button>
        </div>
      </div>
      </div>

      {/* Blog Section Grid */}
      <div className="py-10">
        <div className="md:pt-32 pt-20 sm:pt-24 flex flex-col justify-center items-center px-4 md:px-8 lg:px-20 mx-[2%] sm:mx-[15%] md:mx-[18%] lg:mx-[20]">
          <div className="w-full max-w-5xl sm:max-w-7xl gap-5 ">
            <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 ">
              <div className="col-start-1 row-start-1 col-span-2">
                <div className="h-full bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 1</span>
                </div>
              </div>

              <div className="col-start-1 row-start-2">
                <div className="aspect-square bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 2</span>
                </div>
              </div>

              <div className="col-start-2 row-start-2">
                <div className="aspect-square bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 3</span>
                </div>
              </div>

              <div className=" col-start-1 row-start-3 md:col-start-3 md:row-start-1 col-span-2 md:row-span-2">
                <div className="h-full bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="md:pt-32 pt-20 sm:pt-24 flex flex-col justify-center items-center px-4 md:px-8 lg:px-20 mx-[2%] sm:mx-[15%] md:mx-[18%] lg:mx-[20]">
          <div className="w-full max-w-5xl sm:max-w-7xl gap-5 ">
            <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 ">
              <div className="col-start-1 row-start-1 col-span-2">
                <div className="aspect-25/12 bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 1</span>
                </div>
              </div>

              <div className="col-start-1 row-start-2">
                <div className="aspect-square bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 2</span>
                </div>
              </div>

              <div className="col-start-2 row-start-2">
                <div className="aspect-square bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 3</span>
                </div>
              </div>

              <div className=" col-start-1 row-start-3 md:col-start-3 md:row-start-1 col-span-2 md:row-span-2">
                <div className="h-full bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="md:pt-32 pt-20 sm:pt-24 flex flex-col justify-center items-center px-4 md:px-8 lg:px-20 mx-[2%] sm:mx-[15%] md:mx-[18%] lg:mx-[20]">
          <div className="w-full max-w-7xl sm:max-w-7xl gap-5 ">
            <div className="grid grid-cols-6 grid-rows-9  gap-2 sm:gap-3 md:gap-4 lg:gap-5 ">
              <div className=" col-start-1 row-start-1 col-span-3 row-span-5 ">
                <div className="h-full bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-full">
                  <span className="text-sm md:text-base">Hello 1</span>
                </div>
              </div>
               <div className="row-start-6 col-start-1 col-span-3 row-span-4 ">
                <div className="aspect-3/4 bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 2</span>
                </div>
              </div>
              <div className=" col-start-4 row-start-1 col-span-3 row-span-3">
                <div className="aspect-square bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 3</span>
                </div>
              </div>
              <div className=" col-start-4 row-start-4 col-span-3 row-span-6">
                <div className="aspect-1/2 bg-gray-300 rounded-md overflow-hidden flex items-center justify-center min-w-0">
                  <span className="text-sm md:text-base">Hello 4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default BlogSectionSample;
