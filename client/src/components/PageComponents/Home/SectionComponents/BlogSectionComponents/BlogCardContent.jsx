import { ArrowRight } from "lucide-react";
import BlogCardMeta from "./BlogCardMeta";

const titleStyles = {
  horizontal: "text-2xl lg:text-3xl line-clamp-2",
  square: "text-lg lg:text-xl line-clamp-3",
  vertical: "text-2xl lg:text-[28px] line-clamp-3",
};

const excerptStyles = {
  horizontal: "hidden md:block",
  square: "hidden",
  vertical: "hidden md:block",
};

const BlogCardContent = ({ blog, variant }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent p-6">
      <div>
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
          {blog.category}
        </span>

        <h3
          className={`mt-4 font-bold leading-tight text-white transition-all duration-300 group-hover:translate-y-1 ${titleStyles[variant]}`}
        >
          {blog.title}
        </h3>
      </div>

      <div>
        <p
          className={`text-sm leading-6 text-white/80 line-clamp-2 ${excerptStyles[variant]}`}
        >
          {blog.excerpt}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#9BE15D] opacity-0 -translate-x-3 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Read Article
          <ArrowRight size={16} />
        </div>

        <BlogCardMeta
          author={blog.author}
          publishedAt={blog.publishedAt}
        />
      </div>
    </div>
  );
};

export default BlogCardContent;