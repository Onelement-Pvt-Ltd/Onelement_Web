import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TechnologyFallback from "@/assets/technologies/technologyFallback.png";

const TechnologyBanner = ({ name, banner, image }) => {
  return (
    <section className="relative flex min-h-0 w-full items-center overflow-hidden bg-[#0a2955] py-14 sm:py-16 md:min-h-[34rem] lg:min-h-[38rem] lg:py-20">
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#23b65f]/10 blur-3xl" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#67f5d0]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-[.82fr_1.18fr] md:px-10 lg:gap-16">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center space-x-2 text-sm text-white/80"
          >
            <Link to="/" className="font-medium transition hover:text-[#9fe870]">
              Home
            </Link>
            <ArrowRight size={14} className="opacity-60" />
            <Link
              to="/technologies"
              className="font-medium transition hover:text-[#9fe870]"
            >
              Technologies
            </Link>
            <ArrowRight size={14} className="opacity-60" />
            <span className="max-w-[200px] truncate font-semibold text-white">
              {name}
            </span>
          </nav>

          <div className="max-w-2xl space-y-6">
            <div className="h-1 w-20 rounded-full bg-[#9fe870]" />
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              {name}
            </h1>
            <p className="text-lg leading-relaxed text-white/80">
              {banner?.subtitle}
            </p>
          </div>
        </div>

        <div className="aspect-[3/2] overflow-hidden rounded-3xl bg-white shadow-[0_30px_70px_rgba(0,0,0,.28)]">
          <img
            src={image || banner?.image || TechnologyFallback}
            alt={`${name} technology system`}
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyBanner;
