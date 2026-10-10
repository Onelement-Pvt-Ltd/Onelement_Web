import { ArrowUpRight, ImagePlus } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const toneStyles = {
  emerald: {
    glow: "bg-[#23b65f]/25",
    accent: "text-[#79ffe0]",
    panel: "from-[#163b22]/70 to-[#0a2955]/80",
    surface: "bg-[radial-gradient(circle_at_82%_24%,rgba(35,182,95,.24),transparent_34%),linear-gradient(110deg,#061a36_0%,#0b2440_56%,#163b22_100%)]",
  },
  cyan: {
    glow: "bg-cyan-300/20",
    accent: "text-cyan-200",
    panel: "from-cyan-950/65 to-[#0a2955]/85",
    surface: "bg-[radial-gradient(circle_at_78%_30%,rgba(121,255,224,.19),transparent_32%),linear-gradient(110deg,#061a36_0%,#0a2955_60%,#0b3440_100%)]",
  },
};

const TemporaryHeroSlide = ({ slide }) => {
  const reduceMotion = useReducedMotion();
  const tone = toneStyles[slide.tone] || toneStyles.emerald;

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

        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-md lg:block"
          aria-label={slide.mediaLabel}
        >
          <div className={`absolute inset-0 rotate-3 rounded-[2.5rem] border border-white/12 bg-gradient-to-br ${tone.panel}`} />
          <div className="absolute inset-0 -rotate-2 rounded-[2.5rem] border border-white/15 bg-white/6 backdrop-blur-xl" />
          <div className="absolute inset-7 flex flex-col justify-between rounded-[2rem] border border-dashed border-white/22 bg-[#061a36]/45 p-7">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/48">
                Visual space
              </span>
              <span className="h-2 w-2 rounded-full bg-[#4dff9e] shadow-[0_0_18px_rgba(77,255,158,.7)]" />
            </div>
            <div className="grid place-items-center text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-white/8 text-[#79ffe0]">
                <ImagePlus size={25} />
              </span>
              <p className="mt-5 max-w-48 text-sm leading-6 text-white/55">{slide.mediaLabel}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4dff9e]" />
              <span className="h-px flex-1 bg-white/15" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TemporaryHeroSlide;
