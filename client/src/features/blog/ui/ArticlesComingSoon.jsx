import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen, Leaf, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/shared/seo/Seo";
import { breadcrumbSchema } from "@/shared/seo/seoData";

const topics = [
  { label: "Clean technology", icon: Zap },
  { label: "Sustainability", icon: Leaf },
  { label: "Industry perspectives", icon: BookOpen },
];

const ArticlesComingSoon = () => {
  const reduceMotion = useReducedMotion();

  return (
    <main className="relative isolate grid min-h-[calc(100svh-4rem)] place-items-center overflow-hidden bg-[#f3f6f0] px-6 py-20 text-[#0a2955]">
      <Seo
        title="Articles — Coming Soon"
        description="Onelement Energy articles on clean technology, sustainability and the energy transition are coming soon."
        path="/articles"
        noindex
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Articles", path: "/articles" },
        ])}
      />

      <div
        className="absolute inset-0 -z-20 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,41,85,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(10,41,85,.16) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -left-40 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#23b65f]/13 blur-[110px]" />
      <div className="absolute -right-48 bottom-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#0a2955]/10 blur-[130px]" />

      <motion.section
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl"
      >
        <div className="mb-8 flex items-center justify-between gap-4 border-b border-[#0a2955]/15 pb-5">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0a2955]">
            <span className="h-2 w-2 rounded-full bg-[#23b65f] shadow-[0_0_0_6px_rgba(35,182,95,.1)]" />
            Onelement Articles
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0a2955]/50">
            In development
          </span>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="flex items-center gap-4">
              <p className="text-[clamp(1.45rem,3vw,2.15rem)] font-extrabold tracking-[-0.035em] text-[#23b65f]">
                Coming soon
              </p>
              <span className="h-px w-[clamp(3rem,10vw,8rem)] bg-linear-to-r from-[#23b65f] to-transparent" />
            </div>
            <h1 className="mt-5 max-w-4xl text-[clamp(3.5rem,10vw,8.5rem)] font-bold leading-[0.84] tracking-[-0.065em]">
              Ideas for a
              <span className="block text-[#23b65f]">cleaner future.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#40556b] sm:text-lg">
              We’re preparing practical perspectives on clean energy, emerging
              technology and the systems shaping tomorrow’s industries.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="relative hidden h-44 w-44 place-items-center rounded-full border border-[#0a2955]/25 lg:grid"
          >
            <div className="grid h-28 w-28 place-items-center rounded-full border border-[#0a2955]/10 bg-white shadow-[0_18px_45px_rgba(10,41,85,.12)]">
              <BookOpen size={34} strokeWidth={1.3} className="text-[#0a2955]" />
            </div>
            <motion.span
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-1px] rounded-full"
            >
              <span className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#23b65f] shadow-[0_0_18px_rgba(35,182,95,.55)]" />
            </motion.span>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-[#0a2955]/15 pt-7 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-3">
            {topics.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#0a2955]/10 bg-white/75 px-4 py-2 text-xs font-semibold text-[#0a2955] shadow-sm backdrop-blur"
              >
                <Icon size={14} className="text-[#23b65f]" />
                {label}
              </span>
            ))}
          </div>

          <Link
            to="/technologies"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#0a2955] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#123d70] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#23b65f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f3f6f0]"
          >
            Explore our technologies
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </motion.section>
    </main>
  );
};

export default ArticlesComingSoon;
