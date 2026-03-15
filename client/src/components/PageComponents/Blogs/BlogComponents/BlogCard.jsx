import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Link to={`/blogs/${blog.slug}`} className="block">
        <article
          className="
            group
            bg-white
            rounded-2xl
            shadow-md
            hover:shadow-2xl
            transition-all
            duration-500
            overflow-hidden
            flex
            flex-col
            h-[460px]   
          "
        >
          <div className="relative overflow-hidden h-52">
            <motion.img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </div>

          <div className="p-6 flex flex-col flex-1">
            <span className="text-[11px] uppercase tracking-widest text-green-700 font-semibold">
              {blog.category}
            </span>

            <h3 className="text-lg font-semibold text-[#0a2955] mt-3 line-clamp-2 min-h-14">
              {blog.title}
            </h3>

            <p className="text-sm text-gray-600 mt-3 line-clamp-3 min-h-[60px]">
              {blog.excerpt}
            </p>

            <div className="grow" />

            <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t">
              <span className="font-medium text-gray-700">
                {blog.author?.name}
              </span>
              <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
