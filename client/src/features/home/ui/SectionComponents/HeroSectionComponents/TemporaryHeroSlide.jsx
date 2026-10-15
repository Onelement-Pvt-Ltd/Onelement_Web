import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const toneStyles = {
  emerald: {
    glow: "bg-[#2fdc79]/15",
    accent: "text-[#67f5d0]",
    frame: "bg-[#1b3858]",
    marker: "bg-[#2fdc79]",
    surface: "bg-[radial-gradient(circle_at_82%_24%,rgba(47,220,121,.12),transparent_34%),linear-gradient(110deg,#061a36_0%,#09264a_58%,#0b3150_100%)]",
  },
  cyan: {
    glow: "bg-[#67f5d0]/12",
    accent: "text-[#67f5d0]",
    frame: "bg-[#1b3858]",
    marker: "bg-[#2fdc79]",
    surface: "bg-[radial-gradient(circle_at_78%_30%,rgba(103,245,208,.11),transparent_32%),linear-gradient(110deg,#061a36_0%,#09264a_60%,#0b3150_100%)]",
  },
};

const MEDIA_CLIP_PATH =
  "polygon(0 0, calc(100% - 2.25rem) 0, 100% 2.25rem, 100% 100%, 2.25rem 100%, 0 calc(100% - 2.25rem))";

const TemporaryHeroSlide = ({ slide }) => {
  const reduceMotion = useReducedMotion();
  const tone = toneStyles[slide.tone] || toneStyles.emerald;
  const shouldCover = slide.imageFit === "cover";

  return (
    <div className={`relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-24 text-white sm:px-10 lg:px-14 xl:px-20 ${tone.surface}`}>
      <div className={`absolute -right-24 top-8 h-96 w-96 rounded-full ${tone.glow} blur-[110px]`} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,54,.48),transparent_65%)]" />

      <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr] xl:gap-20">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#23b65f]" />
            <span className={`text-xs font-bold uppercase tracking-[0.24em] ${tone.accent}`}>
              {slide.eyebrow}
            </span>
          </div>

          <h2 className="home-display mt-7 text-[clamp(2.5rem,5.6vw,5.8rem)] font-bold leading-[0.94] text-white">
            {slide.title}
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            {slide.description}
          </p>

          <Link
            to={slide.to}
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-bold text-[#0a2955] shadow-[0_16px_45px_rgba(0,0,0,.18)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79ffe0]"
          >
            {slide.linkLabel}
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
          </Link>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={`relative mx-auto w-full ${
            shouldCover ? "aspect-[4/3] max-w-xl" : "aspect-[3/4] max-w-md"
          }`}
        >
          <div
            className={`absolute inset-0 translate-x-3 translate-y-3 ${tone.frame}`}
            style={{ clipPath: MEDIA_CLIP_PATH }}
            aria-hidden="true"
          />

          <div
            className="relative h-full bg-[#36536f] p-1 shadow-[0_28px_70px_rgba(0,0,0,.28)]"
            style={{ clipPath: MEDIA_CLIP_PATH }}
          >
            <div
              className="relative h-full overflow-hidden bg-[#071d35]"
              style={{ clipPath: MEDIA_CLIP_PATH }}
            >
              {slide.imageUrl && (
                <img
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  className={`h-full w-full object-center ${
                    shouldCover ? "object-cover" : "object-contain"
                  }`}
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061a36]/28 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>

          <div
            className={`absolute -left-3 top-10 h-24 w-1.5 ${tone.marker}`}
            aria-hidden="true"
          />
          <div className="absolute -bottom-5 left-8 flex items-center gap-2" aria-hidden="true">
            <span className={`h-1.5 w-16 ${tone.marker}`} />
            <span className="h-1.5 w-5 bg-white/35" />
          </div>
        </motion.figure>
      </div>
    </div>
  );
};

export default TemporaryHeroSlide;
