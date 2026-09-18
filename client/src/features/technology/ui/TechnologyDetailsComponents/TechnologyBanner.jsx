import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Blog1 from "@/assets/BlogImages/Blog1.png";

const TechnologyBanner = ({ name, banner }) => {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner?.image || Blog1})`
        }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-10">

        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center text-sm text-white/80 space-x-2"
        >
          <Link
            to="/"
            className="hover:text-[#9fe870] transition font-medium"
          >
            Home
          </Link>

          <ArrowRight size={14} className="opacity-60" />

          <Link
            to="/technologies"
            className="hover:text-[#9fe870] transition font-medium"
          >
            Technologies
          </Link>

          <ArrowRight size={14} className="opacity-60" />

          <span className="text-white font-semibold truncate max-w-[200px]">
            {name}
          </span>
        </nav>

        <div className="max-w-2xl space-y-6">

          <div className="h-1 w-20 bg-[#9fe870] rounded-full" />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            {name}
          </h1>

          <p className="text-lg text-white/80 leading-relaxed">
            {banner?.subtitle}
          </p>

        </div>
      </div>
    </section>
  );
};

export default TechnologyBanner;