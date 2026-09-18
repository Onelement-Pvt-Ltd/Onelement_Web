import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeBlogs } from "@/features/blog/model/blogSlice";

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
    <section id="insights" className="relative scroll-mt-24 overflow-hidden bg-[#f6f8f6] py-20 sm:py-24 lg:py-32">
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#23b65f]/8 blur-3xl" />
      <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-[#0a2955]/7 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
