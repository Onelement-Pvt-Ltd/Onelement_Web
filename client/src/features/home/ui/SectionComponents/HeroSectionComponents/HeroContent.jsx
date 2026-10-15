import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const FEATURE_CLIP_PATH =
  "polygon(0 0, calc(100% - 2.5rem) 0, 100% 2.5rem, 100% 100%, 2.5rem 100%, 0 calc(100% - 2.5rem))";

const HeroContent = ({ slide }) => {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.08,
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col justify-center px-6 py-24 sm:px-10 lg:px-14 lg:py-24 xl:px-8"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr] xl:gap-20">
        <div className="relative max-w-3xl">
          <motion.div
            variants={reveal}
            className="flex items-center gap-4"
            aria-hidden="true"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.18 }}
              className="h-px w-12 origin-left bg-[#2fdc79]"
            />
            <span className="h-2 w-2 rounded-full border border-[#67f5d0]/80" />
          </motion.div>

          <motion.h1
            variants={reveal}
            className="home-display mt-7 text-white"
            aria-label="Onelement Energy"
          >
            <span className="block text-[clamp(2.8rem,7.4vw,7rem)] font-bold leading-[0.88]">
              ONELEMENT
            </span>
            <span className="hero-accent-text mt-2 block text-[clamp(2.8rem,7.4vw,7rem)] font-bold leading-[0.88]">
              ENERGY
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-7 flex flex-wrap items-baseline gap-x-2 text-[clamp(1.35rem,2.6vw,2.2rem)] font-medium leading-tight tracking-[-0.02em] text-white/72"
          >
            <span>Building a</span>
            <span className="font-semibold text-[#67f5d0]">Sustainable Future</span>
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/technologies"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#2fdc79] px-7 py-4 text-base font-bold text-[#061a36] shadow-[0_14px_40px_rgba(47,220,121,.2)] transition-colors hover:bg-[#45e58a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#67f5d0]"
              >
                Explore Technologies
                <ArrowRight
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  size={19}
                />
              </Link>
            </motion.div>

            {/* <motion.a
              href="#solutions"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-3 rounded-full border border-[#36536f] bg-[#1b3858] px-7 py-4 text-base font-bold text-white transition-colors hover:border-[#67f5d0]/55 hover:bg-[#234665] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Our Solutions
              <ArrowDownRight
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                size={18}
              />
            </motion.a> */}
          </motion.div>
        </div>

        <motion.aside
          variants={reveal}
          whileHover={reduceMotion ? undefined : { y: -5 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg lg:mx-0 lg:translate-y-8"
        >
          <div
            className="absolute inset-0 translate-x-3 translate-y-3 bg-[#1b3858]"
            style={{ clipPath: FEATURE_CLIP_PATH }}
            aria-hidden="true"
          />

          <div
            className="relative overflow-hidden bg-[#36536f] p-px shadow-[0_30px_80px_rgba(0,0,0,.3)]"
            style={{ clipPath: FEATURE_CLIP_PATH }}
          >
            <div
              className="relative bg-[#102f50] p-7 sm:p-10"
              style={{ clipPath: FEATURE_CLIP_PATH }}
            >
            {slide?.imageUrl && (
              <>
                <img
                  src={slide.imageUrl}
                  alt={slide.imageAlt}
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-[#061a36]/62" aria-hidden="true" />
              </>
            )}

            <span
              className="absolute right-0 top-0 h-16 w-16 bg-[#2fdc79]"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="mb-10 flex items-center justify-between">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#2fdc79]" />
                  <span className="h-2 w-2 rounded-full bg-[#67f5d0]/65" />
                  <span className="h-2 w-2 rounded-full bg-white/25" />
                </div>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.7 }}
                  className="h-px w-20 origin-right bg-linear-to-r from-transparent to-[#67f5d0]/60"
                />
              </div>

              <div className="flex items-start justify-between" aria-hidden="true">
                <span className="font-serif text-6xl leading-none text-[#2fdc79] sm:text-7xl">
                  &ldquo;
                </span>
                <span className="font-serif text-6xl leading-none text-[#2fdc79] sm:text-7xl">
                  &rdquo;
                </span>
              </div>

              <h2 className="home-display -mt-2 text-center text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-left">
                Decarbonising, Decentralizing & Deploying
                <span className="mt-3 block font-semibold text-[#67f5d0]">
                  Sustainable Technologies
                </span>
              </h2>

              <div className="mt-9 flex items-center gap-4" aria-hidden="true">
                <span className="h-px flex-1 bg-white/15" />
                <motion.span
                  animate={reduceMotion ? undefined : { rotate: [45, 135, 45] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="h-3 w-3 rotate-45 border border-[#2fdc79]"
                />
              </div>
            </div>
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.div
        variants={reveal}
        className="mt-14 flex items-center gap-5 lg:mt-16"
        aria-hidden="true"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-[#2fdc79]/70 via-[#36536f]/70 to-transparent" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#67f5d0]/75" />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
