import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BlogCardContent from "./BlogCardContent";

const heightStyles = {
  horizontal: "h-full min-h-[230px] md:min-h-[260px]",
  square: "h-full min-h-[230px] md:min-h-[260px]",
  vertical: "h-full min-h-[280px] md:min-h-[540px]",
};

const BlogCard2 = ({ blog, variant }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-[28px] ${heightStyles[variant]}`}
    >
      <Link to={`/blogs/${blog.slug}`} className="block h-full">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent transition-all duration-500 group-hover:from-slate-950 group-hover:via-slate-950/50" />

        <div className="absolute inset-0 ring-1 ring-white/10 rounded-[28px] group-hover:ring-white/20 transition-all duration-300" />

        <BlogCardContent blog={blog} variant={variant} />
      </Link>
    </motion.article>
  );
};

export default BlogCard2;