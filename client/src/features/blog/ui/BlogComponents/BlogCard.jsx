import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import BlogFallback from "@/assets/BlogImages/Blog1.png";
import AuthorFallback from "@/assets/dummy.png";

const formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(undefined, {
    day: "numeric", month: "short", year: "numeric"
  }).format(date);
};

const BlogCard = ({ blog, returnTo }) => {
  const [imgSrc, setImgSrc] = useState(blog.coverImage || BlogFallback);
  const [avatarSrc, setAvatarSrc] = useState(
    blog.author?.avatar || AuthorFallback
  );
  const authorName = blog.author?.name || "Onelement editorial";

  return (
    <Link
      to={`/blogs/${blog.slug}`}
      state={returnTo ? { insightsPath: returnTo } : undefined}
      className="group block h-full rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_18px_50px_-38px_rgba(15,23,42,0.65)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            src={imgSrc}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImgSrc(BlogFallback)}
            className="h-full w-full object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-800 shadow-sm backdrop-blur">
            {blog.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-medium text-slate-400">{formatDate(blog.publishedAt)}</p>
          <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-snug tracking-tight text-slate-900">{blog.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{blog.excerpt}</p>
          <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
            <span className="flex min-w-0 items-center gap-3">
              <img
                src={avatarSrc}
                alt={authorName}
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  setAvatarSrc(AuthorFallback);
                }}
                className="h-10 w-10 shrink-0 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-slate-200"
              />
              <span className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Written by
                </span>
                <span className="block truncate text-sm font-semibold text-slate-700">
                  {authorName}
                </span>
              </span>
            </span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-800 transition-colors duration-200 group-hover:bg-emerald-700 group-hover:text-white group-focus-visible:bg-emerald-700 group-focus-visible:text-white">
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
              />
              <span className="sr-only">Read article</span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
