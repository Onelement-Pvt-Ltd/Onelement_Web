import React from "react";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogSectionComponents/BlogCard";

const BlogSection = () => {
  return ( 
    <div className="my-10">
      <div className="flex flex-col justify-center items-center px-4 md:px-8 lg:px-20 mx-[2%] sm:mx-[12%] md:mx-[15%] lg:mx-[18%]">
        {/* Heading */}
        <div className="text-3xl">
          <h1 className="relative inline-block md:text-4xl text-3xl lg:text-5xl font-extrabold after:absolute after:left-1/4 after:-bottom-1 after:w-3/4 after:h-[3.5px] after:bg-[#0a2955]">
            <span className="text-[#1d6903]">L</span>earn.{" "}
            <span className="text-[#1d6903]">E</span>xplore.{" "}
            <span className="text-[#1d6903]">G</span>row.
          </h1>
        </div>

        <div className="mt-8 w-full max-w-5xl sm:max-w-7xl">
          <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            <div className="col-start-1 row-start-1 col-span-2">
              <BlogCard image="/src/assets/BlogImages/Blog1.png" />
            </div>

            <div className="col-start-1 row-start-2">
              <BlogCard image="/src/assets/BlogImages/Blog2.png" square />
            </div>

            <div className="col-start-2 row-start-2">
              <BlogCard image="/src/assets/BlogImages/Blog2.png" square />
            </div>

            <div className="col-start-1 row-start-3 md:col-start-3 md:row-start-1 col-span-2 md:row-span-2">
              <BlogCard image="/src/assets/BlogImages/Blog4.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
