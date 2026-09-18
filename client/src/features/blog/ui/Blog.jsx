import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";

import { useBlogFilters } from "@/features/blog/hooks/useBlogFilters";
import { useBlogsQuery, useBlogMetaQuery } from "@/features/blog/api/blogQueries";

import BlogCard from "@/features/blog/ui/BlogComponents/BlogCard";
import BlogFilters from "@/features/blog/ui/BlogComponents/BlogFilters";
import BlogPagination from "./BlogPagination";
import { smoothScrollTo } from "@/shared/components/scroll/SmoothScroll";

const SKELETON_COUNT = 6;

const Blog = () => {
  const location = useLocation();
  const { filters, setFilter, setPage, clearAll } = useBlogFilters();
  const [isMobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const resultsTopRef = useRef(null);

  const {
    data: blogData,
    isLoading,
    isError,
    error,
    isFetching,
    refetch,
  } = useBlogsQuery(filters);

  const { data: meta, isLoading: metaLoading, isError: metaError } = useBlogMetaQuery();

  const blogs = blogData?.data ?? [];
  const pagination = blogData?.pagination ?? { page: 1, totalPages: 0, total: 0 };
  const hasActiveFilters = Boolean(
    filters.categories.length || filters.years.length || filters.months.length
  );
  const insightsPath = `${location.pathname}${location.search}`;

  useEffect(() => {
    document.body.style.overflow = isMobileFiltersOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileFiltersOpen]);

  useEffect(() => {
    if (!isMobileFiltersOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setMobileFiltersOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMobileFiltersOpen]);

  useEffect(() => {
    if (isLoading || isFetching || isError || filters.page <= 1) return;
    const lastPage = Math.max(pagination.totalPages, 1);
    if (filters.page > lastPage) setPage(lastPage);
  }, [filters.page, isError, isFetching, isLoading, pagination.totalPages, setPage]);

  const scrollToResults = useCallback(() => {
    const resultsTop = resultsTopRef.current;
    if (!resultsTop) return;

    const headerHeight = document.querySelector("header")?.offsetHeight ?? 64;
    const top = resultsTop.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = Math.max(0, top);

    if (!reduceMotion && smoothScrollTo(target)) return;

    window.scrollTo({
      top: target,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, []);

  const handleFilterChange = useCallback(
    (updates) => {
      setFilter(updates);
      window.requestAnimationFrame(scrollToResults);
    },
    [scrollToResults, setFilter]
  );

  const handleClearFilters = useCallback(() => {
    clearAll();
    window.requestAnimationFrame(scrollToResults);
  }, [clearAll, scrollToResults]);

  const handleShowResults = useCallback(() => {
    setMobileFiltersOpen(false);
    window.requestAnimationFrame(scrollToResults);
  }, [scrollToResults]);

  const handlePageChange = useCallback(
    (newPage) => {
      setPage(newPage);
      window.requestAnimationFrame(scrollToResults);
    },
    [scrollToResults, setPage]
  );

  return (
    <div className="min-h-screen bg-[#f7f8f5] pb-20">
      <section className="relative overflow-hidden bg-[#0a2955] text-white">
        <div className="absolute -right-32 -top-44 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-24 h-80 w-80 rounded-full border border-[#0a2955]/15" />
        <div className="mx-auto flex max-w-7xl items-end justify-between gap-8 px-6 py-20 md:py-24">
          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300">Ideas for a cleaner future</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Energy insights,<br /><span className="text-emerald-300">built for action.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">Research, technology perspectives, and practical thinking from the people building tomorrow's energy systems.</p>
          </div>

          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="relative shrink-0 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur lg:hidden"
          >
            Filters
          </button>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col gap-10 lg:flex-row">

          <aside className="hidden lg:block lg:w-80 lg:shrink-0">
            <div className="lg:sticky lg:top-24">
              <BlogFilters
                meta={meta}
                metaLoading={metaLoading}
                metaError={metaError}
                filters={filters}
                onChange={handleFilterChange}
                onClear={handleClearFilters}
              />
            </div>
          </aside>

          <AnimatePresence>
            {isMobileFiltersOpen && (
              <>
                <Motion.div
                  key="backdrop"
                  className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileFiltersOpen(false)}
                />
                <Motion.div
                  key="drawer"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Filter blogs"
                  className="fixed left-0 top-0 z-50 h-full w-[90%] max-w-sm overflow-y-auto bg-[#f7f8f5] p-5 lg:hidden"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-semibold text-lg text-[#0a2955]">Filters</h2>
                    <button
                      type="button"
                      onClick={() => setMobileFiltersOpen(false)}
                      aria-label="Close filters"
                      className="text-2xl leading-none px-2"
                    >
                      &times;
                    </button>
                  </div>
                  <BlogFilters
                    meta={meta}
                    metaLoading={metaLoading}
                    metaError={metaError}
                    filters={filters}
                    onChange={handleFilterChange}
                    onClear={handleClearFilters}
                  />
                  <button
                    type="button"
                    onClick={handleShowResults}
                    className="mt-6 w-full bg-[#1d6903] text-white py-3 rounded-lg font-medium"
                  >
                    Show results
                  </button>
                </Motion.div>
              </>
            )}
          </AnimatePresence>

          <main ref={resultsTopRef} className="min-w-0 scroll-mt-20 flex-1">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Latest thinking</p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
                  {hasActiveFilters ? "Filtered articles" : "All articles"}
                </h2>
              </div>
              {!isLoading && !isError && (
                <p className="text-sm text-slate-500" aria-live="polite">
                  {pagination.total} {pagination.total === 1 ? "article" : "articles"}
                </p>
              )}
            </div>

            {isError && (
              <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                <p className="text-red-500 font-medium">
                  Something went wrong while loading blogs.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {error?.message || "Please try again."}
                </p>
                <button
                  type="button"
                  onClick={() => refetch()}
                  className="mt-4 px-5 py-2 rounded-lg bg-[#0a2955] text-white text-sm"
                >
                  Retry
                </button>
              </div>
            )}

            {!isError && isLoading && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-md p-6 animate-pulse h-[460px] flex flex-col">
                    <div className="h-52 bg-gray-300 rounded mb-4" />
                    <div className="h-4 bg-gray-300 rounded w-1/3 mb-3" />
                    <div className="h-6 bg-gray-300 rounded mb-3" />
                    <div className="h-4 bg-gray-300 rounded mb-2" />
                    <div className="h-4 bg-gray-300 rounded w-2/3" />
                  </div>
                ))}
              </div>
            )}

            {!isError && !isLoading && (
              <div
                className={`grid grid-cols-1 gap-6 transition-opacity duration-200 md:grid-cols-2 ${
                  isFetching ? "opacity-60" : "opacity-100"
                }`}
              >
                {blogs.map((blog) => (
                  <div key={blog.slug}>
                    <BlogCard blog={blog} returnTo={insightsPath} />
                  </div>
                ))}
              </div>
            )}

            {!isError && !isLoading && blogs.length === 0 && (
              <div className="text-center py-20 text-gray-500 bg-white rounded-2xl shadow-sm">
                <p>No blogs found{hasActiveFilters ? " for the selected filters." : "."}</p>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="mt-4 text-[#1d6903] underline text-sm font-medium"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </main>
        </div>

        {!isError && pagination.totalPages > 1 && (
          <div className="mt-16">
            <BlogPagination
              page={pagination.page}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}

      </div>
    </div>
  );
};

export default Blog;
