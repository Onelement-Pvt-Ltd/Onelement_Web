import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const toneStyles = {
  emerald: {
    glow: "bg-[#2fdc79]/15",
    accent: "text-[#67f5d0]",
    surface: "bg-[radial-gradient(circle_at_82%_24%,rgba(47,220,121,.12),transparent_34%),linear-gradient(110deg,#061a36_0%,#09264a_58%,#0b3150_100%)]",
  },
  cyan: {
    glow: "bg-[#67f5d0]/12",
    accent: "text-[#67f5d0]",
    surface: "bg-[radial-gradient(circle_at_78%_30%,rgba(103,245,208,.11),transparent_32%),linear-gradient(110deg,#061a36_0%,#09264a_60%,#0b3150_100%)]",
  },
};

const TemporaryHeroSlide = ({ slide }) => {
  const reduceMotion = useReducedMotion();
  const tone = toneStyles[slide.tone] || toneStyles.emerald;

  return (
    <div className={`relative grid h-full overflow-hidden text-white lg:grid-cols-[3fr_2fr] ${tone.surface}`}>
      <div className={`pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full ${tone.glow} blur-[110px]`} />

      <div className="relative z-20 flex h-full items-center overflow-y-auto px-6 pb-24 pt-14 sm:px-10 sm:pb-24 sm:pt-16 lg:overflow-visible lg:px-16 lg:py-[clamp(2.5rem,7vh,5rem)] xl:pl-[max(5rem,calc((100vw-80rem)/2))] xl:pr-16">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-white/65" />
            <span className={`text-xs font-bold uppercase tracking-[0.24em] ${tone.accent}`}>
              {slide.eyebrow}
            </span>
          </div>

          <h2 className="home-display mt-5 text-[clamp(2.45rem,9vw,4.8rem)] font-bold leading-[0.92] text-white lg:mt-7 lg:text-[clamp(2.5rem,5vw,5.8rem)] lg:leading-[0.94]">
            {slide.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/82 sm:text-base sm:leading-7 lg:mt-7 lg:text-lg lg:leading-8 lg:text-white/68">
            {slide.description}
          </p>

          <Link
            to={slide.to}
            className="group mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0a2955] shadow-[0_16px_45px_rgba(0,0,0,.18)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79ffe0] sm:px-6 sm:py-3.5 sm:text-base lg:mt-9"
          >
            {slide.linkLabel}
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
          </Link>
        </motion.div>
      </div>

      <motion.figure
        initial={{ opacity: 0, x: reduceMotion ? 0 : 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.78, delay: reduceMotion ? 0 : 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full overflow-hidden bg-[#071d35] lg:relative lg:inset-auto lg:border-l lg:border-white/10"
      >
        {slide.imageUrl && (
          <motion.img
            src={slide.imageUrl}
            alt={slide.imageAlt}
            draggable={false}
            initial={reduceMotion ? false : { scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ objectPosition: slide.imagePosition || "center" }}
            sizes="(min-width: 1024px) 40vw, 100vw"
            loading="lazy"
            decoding="async"
          />
        )}

        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,54,.22)_0%,rgba(6,26,54,.44)_42%,rgba(6,26,54,.94)_100%)] lg:bg-[linear-gradient(90deg,rgba(6,26,54,.32)_0%,rgba(6,26,54,.04)_20%,rgba(6,26,54,.08)_100%)]"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-[#061a36]/35 to-transparent lg:block" aria-hidden="true" />
        <div className="absolute bottom-8 right-8 flex items-center gap-3" aria-hidden="true">
          <span className="h-px w-16 bg-white/75" />
          <span className="h-2 w-2 rounded-full border border-white/80" />
        </div>
      </motion.figure>
    </div>
  );
};

export default TemporaryHeroSlide;
