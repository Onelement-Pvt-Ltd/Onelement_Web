import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog, square = false, large = false }) => {
  const navigate = useNavigate();

  if (!blog) return null;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/blogs/${blog.slug}`)}
      className={`
        relative w-full h-full overflow-hidden rounded-2xl cursor-pointer group
        ${square ? "aspect-square" : ""}
        ${!square && !large ? "aspect-[16/9]" : ""}
      `}
    >
      {/* Image */}
      <img
        src={blog.coverImage}
        alt={blog.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-5 text-white w-full">
        <span className="text-xs uppercase tracking-widest text-[#9fe870] font-semibold">
          {blog.category}
        </span>

        <h3 className="mt-1 font-semibold text-lg md:text-xl line-clamp-2">
          {blog.title}
        </h3>

        {!square && (
          <p className="mt-2 text-sm text-white/80 line-clamp-2">
            {blog.excerpt}
          </p>
        )}

        <div className="mt-3 flex justify-between text-xs text-white/70">
          <span>{blog.author?.name}</span>
          <span>
            {new Date(blog.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;