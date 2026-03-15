import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { fetchBlogBySlug, clearSelectedBlog } from "@/features/blog/blogSlice";
import { selectSelectedBlog } from "@/features/blog/blog.selectors";
import { calculateReadingTime } from "@/utils/readingTime";

import { ScrollProgress } from "./ScrollProgress";
import { BlogSkeleton } from "./BlogSkeleton";

const BlogDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blog = useSelector(selectSelectedBlog);
  const { loading, error } = useSelector((state) => state.blog);

  /* fetch blog */

  useEffect(() => {
    if (slug) {
      dispatch(fetchBlogBySlug(slug));
    }

    window.scrollTo(0, 0);

    return () => {
      dispatch(clearSelectedBlog());
    };
  }, [slug, dispatch]);

  /* safe content array */

  const sections = blog?.content || [];

  /* reading time */

  const readingTime = useMemo(() => {
    if (!sections.length) return 0;
    return calculateReadingTime(sections);
  }, [sections]);

  /* update page title */

  useEffect(() => {
    if (blog?.title) {
      document.title = blog.title;
    }
  }, [blog]);

  /* loading */

  if (loading) {
    return <BlogSkeleton />;
  }

  /* error */

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">Something went wrong</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-600 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  /* blog not found */

  if (!blog) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Blog not found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#f4f7f9] min-h-screen pb-20">

      {/* Scroll Progress */}
      <ScrollProgress />

      {/* Hero */}

      <div className="relative h-[420px] overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 text-white">

          <span className="bg-green-600 px-4 py-1 rounded-full text-xs uppercase tracking-wider">
            {blog.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            {blog.title}
          </h1>

          <div className="flex items-center gap-4 mt-6 text-sm">

            {blog.author?.avatar && (
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-10 h-10 rounded-full"
              />
            )}

            <span>{blog.author?.name}</span>
            <span>•</span>

            <span>
              {new Date(blog.publishedAt).toLocaleDateString()}
            </span>

            <span>•</span>

            <span>{readingTime} min read</span>

          </div>
        </div>
      </div>

      {/* Content */}

      <div className="max-w-5xl mx-auto px-6 mt-16 flex gap-12">

        {/* Main Content */}

        <div className="flex-1 space-y-12">

          {sections.map((section, index) => (
            <motion.section
              key={index}
              id={`section-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >

              <h2 className="text-2xl font-bold text-[#0a2955] mb-4">
                {section.heading}
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {section.body}
              </p>

            </motion.section>
          ))}

        </div>

        {/* Table of Contents */}

        {sections.length > 0 && (
          <aside className="hidden lg:block w-64 sticky top-32 h-fit">

            <div className="bg-white rounded-xl shadow-md p-6">

              <h3 className="font-semibold mb-4">
                On this page
              </h3>

              <ul className="space-y-3 text-sm">

                {sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${index}`}
                      className="text-gray-600 hover:text-green-600 transition"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}

              </ul>

            </div>

          </aside>
        )}

      </div>

    </div>
  );
};

export default BlogDetails;