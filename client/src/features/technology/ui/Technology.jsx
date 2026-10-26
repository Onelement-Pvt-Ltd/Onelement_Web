import { useState } from "react";
import { useTechnologies } from "@/features/technology/api/technologyQueries";
import TechnologyThread from "./TechnologyThread";
import Seo from "@/shared/seo/Seo";
import { breadcrumbSchema } from "@/shared/seo/seoData";
import { sortTechnologies } from "@/features/technology/data/technologyImages";

const LIMIT = 12;

// Builds a windowed page list, e.g. [1, "...", 4, 5, 6, "...", 20]
const getPageRange = (current, total, delta = 1) => {
  const range = [];
  const withDots = [];
  let last;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  range.forEach((i) => {
    if (last !== undefined) {
      if (i - last === 2) {
        withDots.push(last + 1);
      } else if (i - last !== 1) {
        withDots.push("...");
      }
    }
    withDots.push(i);
    last = i;
  });

  return withDots;
};

const Technology = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, isError, refetch } = useTechnologies(
    page,
    LIMIT
  );

  const technologies = sortTechnologies(data?.data ?? []);
  const pagination = data?.pagination;
  const totalPages = pagination?.totalPages ?? 1;

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F6F8F6]">
        <div className="animate-pulse text-lg text-[#0B2440]">
          Loading technologies...
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="grid min-h-screen place-items-center bg-[#F6F8F6] px-6 text-center">
        <section className="w-full max-w-2xl border-l-4 border-[#23b65f] bg-white p-10 shadow-[0_24px_70px_rgba(10,41,85,.1)]">
          <h1 className="text-3xl font-bold tracking-tight text-[#0B2440]">
            Technologies are temporarily unavailable.
          </h1>
          <p className="mt-4 leading-7 text-[#0B2440]/60">Please try again in a moment.</p>
          <button
            type="button"
            onClick={() => refetch()}
            className="mt-7 rounded-full bg-[#0B2440] px-6 py-3 font-bold text-white transition-colors hover:bg-[#163B22]"
          >
            Try again
          </button>
        </section>
      </div>
    );
  }

  return (
    <main className="bg-[#F6F8F6]">
      <Seo
        title="Technologies"
        description="Explore the sustainable technologies Onelement Energy is developing across clean energy, carbon management and resilient energy systems."
        path="/technologies"
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Technologies", path: "/technologies" },
        ])}
      />
      <section className="bg-[#0B2440] px-6 py-28 text-[#F6F8F6] md:py-36">
        <div className="mx-auto max-w-3xl md:mx-0 md:ml-[8%]">
          <h1
            className="text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl"
          >
            Energy, Infrastructure and Sustainability
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#F6F8F6]/70 sm:text-lg">
            Four core technologies working together to capture, store, and
            deliver clean energy reliably.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        {technologies.length === 0 ? (
          <p className="py-12 text-center text-lg text-[#4B5563]">
            No technologies available right now.
          </p>
        ) : (
          <TechnologyThread technologies={technologies} />
        )}

        {totalPages > 1 && (
          <nav
            aria-label="Technology pagination"
            className="mt-16 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1 || isFetching}
              className="rounded-lg border border-gray-300 px-4 py-2 text-[#0B2440] transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Prev
            </button>

            {getPageRange(page, totalPages).map((p, idx) =>
              p === "..." ? (
                <span
                  key={`dots-${idx}`}
                  aria-hidden="true"
                  className="select-none px-2 text-gray-400"
                >
                  &hellip;
                </span>
              ) : (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  disabled={isFetching}
                  aria-current={p === page ? "page" : undefined}
                  className={`rounded-lg border px-4 py-2 transition ${
                    p === page
                      ? "border-[#0B2440] bg-[#0B2440] text-white"
                      : "border-gray-300 text-[#0B2440] hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages || isFetching}
              className="rounded-lg border border-gray-300 px-4 py-2 text-[#0B2440] transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </nav>
        )}
      </section>
    </main>
  );
};

export default Technology;
