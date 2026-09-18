import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import BlogFallback from "@/assets/BlogImages/Blog1.png";
import AuthorFallback from "@/assets/dummy.png";
import { formatDate } from "@/shared/utils/formatDate";

const cardStyles = {
  horizontal: "flex h-full min-h-[390px] flex-col md:min-h-0 md:grid md:grid-cols-[1.05fr_.95fr]",
  square: "h-full min-h-[390px] md:min-h-0 flex flex-col",
  vertical: "h-full min-h-[430px] md:min-h-0 flex flex-col",
};

const imageStyles = {
  horizontal: "h-52 md:h-full",
  square: "h-52 md:h-[44%]",
  vertical: "h-56 md:h-[52%]",
};

const BlogCard2 = ({ blog, variant }) => {
  const [imageSrc, setImageSrc] = useState(blog.coverImage || BlogFallback);
  const [avatarSrc, setAvatarSrc] = useState(
    blog.author?.avatar || AuthorFallback
  );
  const authorName = blog.author?.name || "Onelement editorial";
  const compact = variant === "square";

  return (
    <article className="h-full">
      <Link
        to={`/blogs/${blog.slug}`}
        className={`group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_18px_50px_-38px_rgba(15,23,42,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4 ${cardStyles[variant]}`}
      >
        <div className={`relative shrink-0 overflow-hidden bg-slate-100 ${imageStyles[variant]}`}>
          <img
            src={imageSrc}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImageSrc(BlogFallback)}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-800 shadow-sm backdrop-blur">
            {blog.category}
          </span>
        </div>

        <div
          className={`flex min-h-0 flex-1 flex-col ${
            compact ? "p-4 sm:p-5" : "p-5 sm:p-6"
          }`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400">
            {formatDate(blog.publishedAt)}
          </p>
          <h3
            className={`mt-2 font-bold leading-snug tracking-tight text-slate-900 ${
              compact ? "line-clamp-3 text-lg" : "line-clamp-2 text-xl"
            }`}
          >
            {blog.title}
          </h3>

          {!compact && (
            <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-600">
              {blog.excerpt}
            </p>
          )}

          <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <span className="flex min-w-0 items-center gap-2.5">
              <img
                src={avatarSrc}
                alt={authorName}
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  setAvatarSrc(AuthorFallback);
                }}
                className="h-9 w-9 shrink-0 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-200"
              />
              <span className="min-w-0">
                <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400">
                  Written by
                </span>
                <span className="block truncate text-xs font-semibold text-slate-700">
                  {authorName}
                </span>
              </span>
            </span>

            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-800 transition-colors duration-200 group-hover:bg-emerald-700 group-hover:text-white group-focus-visible:bg-emerald-700 group-focus-visible:text-white">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
              />
              <span className="sr-only">Read article</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard2;
