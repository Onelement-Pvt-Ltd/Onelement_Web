import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroContent = () => {
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
      className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center overflow-y-auto px-6 pb-24 pt-8 sm:px-10 sm:pb-24 sm:pt-10 lg:overflow-hidden lg:px-14 lg:py-[clamp(2.5rem,7vh,5rem)] xl:px-8"
    >
      <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-10 xl:gap-16">
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
              className="h-px w-12 origin-left bg-white/70"
            />
            <span className="h-2 w-2 rounded-full border border-white/70" />
          </motion.div>

          <motion.h1
            variants={reveal}
            className="home-display mt-5 text-white lg:mt-7"
            aria-label="Onelement Energy"
          >
            <span className="block text-[clamp(2.25rem,11vw,7rem)] font-bold leading-[0.88] lg:text-[clamp(2.8rem,7.4vw,7rem)]">
              ONELEMENT
            </span>
            <span className="hero-accent-text mt-1 block text-[clamp(2.25rem,11vw,7rem)] font-bold leading-[0.88] lg:mt-2 lg:text-[clamp(2.8rem,7.4vw,7rem)]">
              ENERGY
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-4 flex flex-wrap items-baseline gap-x-2 text-[clamp(1.05rem,4.8vw,2.2rem)] font-medium leading-tight tracking-[-0.02em] text-white/72 lg:mt-7 lg:text-[clamp(1.35rem,2.6vw,2.2rem)]"
          >
            <span>Building a</span>
            <span className="relative inline-block font-semibold text-white">
              Sustainable Future
              <span
                className="absolute -bottom-1 left-0 h-px w-full bg-linear-to-r from-[#67f5d0] via-white/60 to-transparent"
                aria-hidden="true"
              />
            </span>
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-9"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/technologies"
                className="group flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#061a36] shadow-[0_14px_40px_rgba(0,0,0,.22)] transition-colors hover:bg-[#e5f7ef] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base lg:px-7 lg:py-4"
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
          whileHover={reduceMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl lg:mx-0"
        >
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem_0_2rem_0] bg-[#2fdc79] shadow-[0_24px_70px_rgba(47,220,121,.18)]" aria-hidden="true" />

          <div className="relative min-h-[13.5rem] overflow-hidden rounded-[1.5rem_0_1.5rem_0] border border-[#67f5d0]/35 bg-[#102f50] px-5 py-5 shadow-[0_30px_80px_rgba(0,0,0,.3)] sm:min-h-[16rem] sm:px-7 sm:py-7 lg:min-h-[min(30rem,58vh)] lg:rounded-[2rem_0_2rem_0] lg:px-11 lg:py-11">
            <span className="absolute -right-5 top-1/2 -translate-y-1/2 text-[13rem] font-bold leading-none text-white/[0.025]" aria-hidden="true">&amp;</span>
            <span className="absolute right-0 top-0 h-20 w-20 bg-[#2fdc79] [clip-path:polygon(100%_0,100%_100%,0_0)]" aria-hidden="true" />
            <span className="absolute bottom-0 left-0 h-1 w-2/5 bg-linear-to-r from-[#2fdc79] to-[#67f5d0]" aria-hidden="true" />

            <div className="relative z-10 flex min-h-[10.5rem] flex-col justify-between sm:min-h-[12.5rem] lg:min-h-[min(23rem,48vh)]">
              <div className="flex items-center justify-between" aria-hidden="true">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#2fdc79]" />
                  <span className="h-2 w-2 rounded-full bg-[#67f5d0]/65" />
                  <span className="h-2 w-2 rounded-full bg-white/25" />
                </div>
                <span className="h-px w-20 bg-linear-to-r from-transparent to-[#67f5d0]/70" />
              </div>

              <div>
                <span className="block font-serif text-5xl leading-[0.5] text-[#2fdc79] sm:text-6xl lg:text-8xl" aria-hidden="true">
                  &ldquo;
                </span>

                <h2 className="home-display mt-2 text-[clamp(1.15rem,5vw,2rem)] font-medium leading-[1.08] text-white sm:text-2xl lg:mt-5 lg:text-4xl">
                  Decarbonising, Decentralizing & Deploying
                  <span className="mt-2 block font-semibold leading-tight text-[#67f5d0] sm:mt-3 lg:mt-5">
                    Sustainable Technologies
                  </span>
                </h2>
              </div>

              <div className="flex items-center gap-4" aria-hidden="true">
                <span className="h-px flex-1 bg-white/18" />
                <motion.span
                  animate={reduceMotion ? undefined : { rotate: [45, 135, 45] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="h-3 w-3 rotate-45 border border-[#2fdc79]"
                />
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.div
        variants={reveal}
        className="mt-10 hidden items-center gap-5 lg:flex xl:mt-12"
        aria-hidden="true"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-[#2fdc79]/70 via-[#36536f]/70 to-transparent" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#67f5d0]/75" />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
