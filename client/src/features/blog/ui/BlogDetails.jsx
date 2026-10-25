import { useEffect, useMemo } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, CalendarDays, Clock3, List } from "lucide-react";

import { fetchBlogBySlug, clearSelectedBlog } from "@/features/blog/model/blogSlice";
import { selectSelectedBlog } from "@/features/blog/model/blogSelectors";
import { useRelatedBlogsQuery } from "@/features/blog/api/blogQueries";
import { calculateReadingTime } from "@/shared/utils/readingTime";
import Seo from "@/shared/seo/Seo";
import { breadcrumbSchema } from "@/shared/seo/seoData";
import NotFound from "@/shared/components/NotFound";
import PublicError from "@/shared/components/PublicError";

import BlogCard from "./BlogComponents/BlogCard";
import { ScrollProgress } from "./ScrollProgress";
import { BlogSkeleton } from "./BlogSkeleton";
import AuthorFallback from "@/assets/articleAuthorFallback.png";

const formatDate = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};

const BlogDetails = () => {
  const { slug } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const reduceMotion = useReducedMotion();

  const blog = useSelector(selectSelectedBlog);
  const { loading, error } = useSelector((state) => state.blog);
  const {
    data: relatedBlogs = [],
    isLoading: relatedLoading,
  } = useRelatedBlogsQuery(slug);

  useEffect(() => {
    if (slug) dispatch(fetchBlogBySlug(slug));
    window.scrollTo(0, 0);
    return () => dispatch(clearSelectedBlog());
  }, [slug, dispatch]);

  const sections = useMemo(() => blog?.content || [], [blog?.content]);
  const readingTime = useMemo(
    () => (sections.length ? calculateReadingTime(sections) : 0),
    [sections]
  );
  const insightsPath = useMemo(() => {
    const candidate = location.state?.insightsPath;
    return typeof candidate === "string" && /^\/articles(?:\?|$)/.test(candidate)
      ? candidate
      : "/articles";
  }, [location.state]);

  const articleStructuredData = useMemo(() => {
    if (!blog) return null;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: blog.title,
          description: blog.excerpt,
          image: blog.coverImage,
          datePublished: blog.publishedAt,
          dateModified: blog.updatedAt || blog.publishedAt,
          author: {
            "@type": "Person",
            name: blog.author?.name || "Onelement Energy editorial team",
          },
          publisher: {
            "@type": "Organization",
            name: "Onelement Energy",
            url: "https://onelement.in",
          },
          mainEntityOfPage: `https://onelement.in/articles/${blog.slug}`,
        },
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Articles", path: "/articles" },
          { name: blog.title, path: `/articles/${blog.slug}` },
        ]),
      ],
    };
  }, [blog]);

  if (loading) return <BlogSkeleton />;

  if (error) {
    if (error.status === 404) return <NotFound variant="article" />;
    return (
      <PublicError
        resource="article"
        onRetry={() => dispatch(fetchBlogBySlug(slug))}
      />
    );
  }

  if (!blog) return <NotFound variant="article" />;

  return (
    <main className="min-h-screen bg-[#f6f8f6] pb-20 text-slate-900">
      <Seo
        title={blog.title}
        description={blog.excerpt}
        path={`/articles/${blog.slug}`}
        image={blog.coverImage}
        type="article"
        publishedTime={blog.publishedAt}
        modifiedTime={blog.updatedAt || blog.publishedAt}
        author={blog.author?.name || "Onelement Energy editorial team"}
        structuredData={articleStructuredData}
      />
      <ScrollProgress />

      <header className="relative isolate min-h-[560px] overflow-hidden text-white sm:min-h-[620px]">
        <img
          src={blog.coverImage}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06182c] via-[#071d35]/78 to-[#071d35]/35" />

        <div className="mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 sm:min-h-[620px] sm:pb-20 lg:px-8">
          <Link
            to={insightsPath}
            className="mb-9 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to articles
          </Link>

          <div className="max-w-5xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b6eda9] backdrop-blur">
              {blog.category}
            </span>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/75">
              <span className="inline-flex items-center gap-3 font-semibold text-white">
                <img
                  src={blog.author?.avatar || AuthorFallback}
                  alt={blog.author?.name || "Onelement editorial"}
                  className="h-10 w-10 rounded-full border-2 border-white/70 object-cover shadow-md"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = AuthorFallback;
                  }}
                />
                {blog.author?.name || "Onelement editorial"}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} />
                {formatDate(blog.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={16} />
                {readingTime} min read
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8 lg:py-20">
        <article className="min-w-0 rounded-[2rem] border border-slate-200/80 bg-white px-6 py-9 shadow-[0_20px_65px_rgba(10,41,85,0.07)] sm:px-10 sm:py-12 lg:px-14">
          {blog.excerpt && (
            <p className="mb-12 border-l-4 border-[#61a652] pl-6 text-xl font-medium leading-8 text-[#0a2955]">
              {blog.excerpt}
            </p>
          )}

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.section
                key={section.heading || index}
                id={`section-${index}`}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="scroll-mt-28"
              >
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#0a2955] sm:text-3xl">
                  {section.heading}
                </h2>
                <p className="mt-5 whitespace-pre-line text-base leading-8 text-slate-600 sm:text-[17px]">
                  {section.body}
                </p>
              </motion.section>
            ))}
          </div>
        </article>

        {sections.length > 0 && (
          <aside className="hidden lg:block">
            <nav
              aria-label="Table of contents"
              className="sticky top-28 rounded-2xl border border-[#0a2955]/10 bg-white p-6 shadow-[0_12px_40px_rgba(10,41,85,0.06)]"
            >
              <h2 className="flex items-center gap-2 font-bold text-[#0a2955]">
                <List size={18} />
                On this page
              </h2>
              <ol className="mt-5 space-y-1">
                {sections.map((section, index) => (
                  <li key={section.heading || index}>
                    <a
                      href={`#section-${index}`}
                      className="group flex gap-3 rounded-xl px-2 py-2.5 text-sm leading-5 text-slate-600 transition-colors hover:bg-[#eaf1e7] hover:text-[#163B22]"
                    >
                      <span className="font-bold text-[#1d6903]/55">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{section.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        )}
      </div>

      {(relatedLoading || relatedBlogs.length > 0) && (
        <section className="mx-auto max-w-7xl border-t border-[#0a2955]/10 px-6 pt-16 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d6903]">
                More from {blog.category}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a2955] sm:text-4xl">
                Continue reading
              </h2>
            </div>
            <Link
              to="/articles"
              className="text-sm font-bold text-[#163B22] underline-offset-4 hover:underline"
            >
              Browse all articles
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-[430px] animate-pulse rounded-3xl bg-[#0a2955]/8"
                  />
                ))
              : relatedBlogs.map((relatedBlog) => (
                  <BlogCard
                    key={relatedBlog.slug}
                    blog={relatedBlog}
                    returnTo={insightsPath}
                  />
                ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default BlogDetails;
