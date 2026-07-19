import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeBlogs } from "@/features/blog/blogSlice";

import BlogHeading from "./BlogHeading";
import BlogGrid from "./BlogGrid";
import ViewAllButton from "./ViewAllButton";

const BlogSection = () => {
  const dispatch = useDispatch();

  const { homeBlogs, loading } = useSelector((state) => state.blog);

  useEffect(() => {
    if (!homeBlogs.length) {
      dispatch(fetchHomeBlogs());
    }
  }, [dispatch, homeBlogs.length]);

  return (
    <section className="relative my-20 overflow-hidden">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#1d6903]/5 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#0a2955]/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
        <BlogHeading />

        <BlogGrid
          blogs={homeBlogs}
          loading={loading}
        />

        <ViewAllButton />
      </div>
    </section>
  );
};

export default BlogSection;