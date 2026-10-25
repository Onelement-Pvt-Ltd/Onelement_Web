import { ArrowLeft, ArrowUpRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/shared/seo/Seo";

const variants = {
  page: {
    label: "Page not found",
    title: "This page has moved beyond the grid.",
    description: "The address may be incorrect or the page may no longer be available.",
    action: "Return home",
    to: "/",
  },
  article: {
    label: "Article not found",
    title: "We could not find this article.",
    description: "The article address may be incorrect or the content may no longer be available.",
    action: "Browse articles",
    to: "/articles",
  },
  technology: {
    label: "Technology not found",
    title: "We could not find this technology.",
    description: "The technology address may be incorrect or the page may no longer be available.",
    action: "View technologies",
    to: "/technologies",
  },
  filters: {
    label: "Articles view not found",
    title: "These filters do not lead to an available page.",
    description: "The filter or page address is invalid. Return to the complete article collection.",
    action: "Reset articles",
    to: "/articles",
  },
};

const NotFound = ({ variant = "page" }) => {
  const content = variants[variant] || variants.page;

  return (
    <main className="relative isolate grid min-h-[calc(100svh-4rem)] place-items-center overflow-hidden bg-[#061a36] px-6 py-24 text-white">
      <Seo
        title={content.label}
        description={content.description}
        path={window.location.pathname}
        noindex
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_20%,rgba(121,255,224,.14),transparent_28%),radial-gradient(circle_at_18%_82%,rgba(35,182,95,.16),transparent_30%),linear-gradient(120deg,#061a36,#0a2955_65%,#0b3440)]"
      />
      <div aria-hidden="true" className="absolute -right-36 top-20 -z-10 h-[30rem] w-[30rem] rounded-full border border-[#79ffe0]/12">
        <span className="absolute inset-14 rounded-full border border-[#79ffe0]/10" />
        <span className="absolute inset-28 rounded-full border border-[#79ffe0]/8" />
      </div>

      <section className="w-full max-w-4xl">
        <div className="flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.28em] text-[#79ffe0]">
          <span className="h-0.5 w-12 bg-[#23b65f]" />
          404 · {content.label}
        </div>
        <h1 className="mt-7 max-w-3xl text-[clamp(3rem,7vw,6.8rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">
          {content.title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
          {content.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to={content.to}
            className="group inline-flex items-center gap-2 rounded-full bg-[#23b65f] px-6 py-3.5 font-bold text-white transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#2acb6b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79ffe0]"
          >
            {content.action}
            <ArrowUpRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {content.to !== "/" && (
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/7 px-6 py-3.5 font-bold text-white backdrop-blur transition-colors hover:bg-white/13"
            >
              <Home aria-hidden="true" size={18} /> Home page
            </Link>
          )}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-bold text-white/68 transition-colors hover:text-white"
          >
            <ArrowLeft aria-hidden="true" size={18} /> Go back
          </button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
