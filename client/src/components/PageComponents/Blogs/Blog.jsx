import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import {
  fetchBlogMeta,
  fetchBlogs,
  setFilters,
} from "@/features/blog/blogSlice";

import BlogCard from "@/components/PageComponents/Blogs/BlogComponents/BlogCard";
import BlogFilters from "@/components/PageComponents/Blogs/BlogComponents/BlogFilters";
import BlogPagination from "./BlogPagination";

import {
  selectBlogs,
  selectMeta,
  selectFilters,
  selectPagination,
} from "@/features/blog/blog.selectors";

const Blog = () => {
  const dispatch = useDispatch();

  const blogs = useSelector(selectBlogs);
  const meta = useSelector(selectMeta);
  const filters = useSelector(selectFilters);
  const pagination = useSelector(selectPagination);
  const { loading } = useSelector((state) => state.blog);

  const handlePageChange = (newPage) => {
    dispatch(setFilters({ page: newPage }));
  };

  // Fetch meta only once properly
  useEffect(() => {
    if (!meta.categories.length) {
      dispatch(fetchBlogMeta());
    }
  }, [meta.categories.length, dispatch]);

  // Fetch blogs when filters change
  useEffect(() => {
    dispatch(fetchBlogs(filters));
  }, [filters, dispatch]);

  // Stagger container
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#f4f7f9] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <p className="uppercase text-sm tracking-[0.18em] text-[#1d6903] font-semibold">
            Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2955] mt-2">
            Renewable Technology Blog
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sticky Sidebar */}
          <div className="lg:w-72">
            <div className="lg:sticky lg:top-24">
              <BlogFilters meta={meta} />
            </div>
          </div>

          {/* Blog Section */}
          <div className="flex-1">

            {/* Loading Skeleton */}
            {loading && (
              <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="break-inside-avoid bg-white rounded-2xl shadow-md p-6 animate-pulse"
                  >
                    <div className="h-48 bg-gray-300 rounded mb-4" />
                    <div className="h-4 bg-gray-300 rounded w-1/3 mb-3" />
                    <div className="h-6 bg-gray-300 rounded mb-3" />
                    <div className="h-4 bg-gray-300 rounded mb-2" />
                    <div className="h-4 bg-gray-300 rounded w-2/3" />
                  </div>
                ))}
              </div>
            )}

            {/* Masonry Layout + Stagger */}
            {!loading && (
              <motion.div
                layout
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8"
              >
                <AnimatePresence>
                  {blogs.map((blog) => (
                    <motion.div
                      key={blog.slug}
                      layout
                      variants={cardVariants}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="break-inside-avoid"
                    >
                      <BlogCard blog={blog} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            {!loading && blogs.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                No blogs available for selected filters.
              </div>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-16">
          <BlogPagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
          />
        </div>

      </div>
    </div>
  );
};

export default Blog;