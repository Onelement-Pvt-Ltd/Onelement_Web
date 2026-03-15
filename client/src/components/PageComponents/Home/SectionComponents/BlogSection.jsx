import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeBlogs } from "@/features/blog/blogSlice";
import BlogCard from "./BlogSectionComponents/BlogCard";

const BlogSection = () => {
  const dispatch = useDispatch();

  const homeBlogs = useSelector((state) => state.blog.homeBlogs) || [];
  const loading = useSelector((state) => state.blog.loading);

  useEffect(() => {
    if (!homeBlogs.length) {
      dispatch(fetchHomeBlogs());
    }
  }, [dispatch, homeBlogs.length]);

  const [first, second, third, fourth] = homeBlogs;

  if (loading && !homeBlogs.length) {
    return (
      <div className="my-16 flex justify-center">
        <p className="text-gray-500">Loading blogs...</p>
      </div>
    );
  }

  return (
    <section className="my-16">

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">

        {/* Heading */}

        <div className="flex justify-center mb-12">
          <h1 className="relative inline-block md:text-4xl text-3xl lg:text-5xl font-extrabold after:absolute after:left-1/4 after:-bottom-2 after:w-3/4 after:h-[3px] after:bg-[#0a2955]">
            <span className="text-[#1d6903]">L</span>earn.{" "}
            <span className="text-[#1d6903]">E</span>xplore.{" "}
            <span className="text-[#1d6903]">G</span>row.
          </h1>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-5 auto-rows-[220px] md:auto-rows-[260px]">

          {first && (
            <div className="col-start-1 row-start-1 col-span-2 h-full">
              <BlogCard blog={first} />
            </div>
          )}

          {second && (
            <div className="col-start-1 row-start-2 h-full">
              <BlogCard blog={second} square />
            </div>
          )}

          {third && (
            <div className="col-start-2 row-start-2 h-full">
              <BlogCard blog={third} square />
            </div>
          )}

          {fourth && (
            <div className="col-start-1 row-start-3 md:col-start-3 md:row-start-1 col-span-2 md:row-span-2 h-full">
              <BlogCard blog={fourth} />
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default BlogSection;