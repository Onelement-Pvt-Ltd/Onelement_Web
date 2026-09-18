import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
  useRelatedTechnologies,
  useTechnology
} from "@/features/technology/api/technologyQueries";
import Blog1 from "@/assets/BlogImages/Blog1.png";

import TechnologyBanner from "./TechnologyBanner";
import TechnologyDescription from "./TechnologyDescription";
import TechnologyPoints from "./TechnologyPoints";
import { TechnologySkeleton } from "../TechnologySkeleton";

const TechnologyDetails = () => {
  const { techId } = useParams();

  const {
    data: current,
    isLoading,
    isError,
    error
  } = useTechnology(techId);
  const { data: related = [], isLoading: relatedLoading } =
    useRelatedTechnologies(techId);

  /* Scroll to top on slug change */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [techId]);

  /* Set page title */
  useEffect(() => {
    if (current?.title) {
      document.title = `${current.title} | Technologies`;
    }
  }, [current]);

  /* Loading */
  if (isLoading) return <TechnologySkeleton />;

  /* Error */
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          {error?.response?.data?.message || "Failed to load technology"}
        </p>
      </div>
    );
  }

  /* Not Found */
  if (!current) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Technology not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f6f8f6]">
      <TechnologyBanner name={current.title} banner={current.banner} />

      <main className="mx-auto flex max-w-7xl flex-col px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <TechnologyDescription
          title={current.description.highlightTitle}
          paragraphs={current.description.paragraphs}
        />

        <div className="my-12 h-px w-full bg-[#0a2955]/10 sm:my-16" />

        <TechnologyPoints points={current.points} />

        {(relatedLoading || related.length > 0) && (
          <section className="mt-20 border-t border-[#0a2955]/10 pt-14 sm:mt-24 sm:pt-16">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d6903]">
                  Continue exploring
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a2955] sm:text-4xl">
                  More relevant technologies
                </h2>
              </div>
              <Link
                to="/technologies"
                className="text-sm font-bold text-[#163B22] underline-offset-4 hover:underline"
              >
                View all technologies
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedLoading
                ? Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-[360px] animate-pulse rounded-3xl bg-[#0a2955]/8"
                    />
                  ))
                : related.map((technology) => (
                    <Link
                      key={technology.slug}
                      to={`/technologies/details/${technology.slug}`}
                      className="group overflow-hidden rounded-3xl border border-[#0a2955]/10 bg-white shadow-[0_16px_45px_rgba(10,41,85,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(10,41,85,0.14)]"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={technology.banner?.image || Blog1}
                          alt={technology.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-xl font-bold leading-tight text-[#0a2955]">
                            {technology.title}
                          </h3>
                          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eaf1e7] text-[#163B22] transition-colors group-hover:bg-[#163B22] group-hover:text-white">
                            <ArrowUpRight size={17} />
                          </span>
                        </div>
                        {technology.banner?.subtitle && (
                          <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                            {technology.banner.subtitle}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default TechnologyDetails;
