import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/shared/seo/Seo";
import { breadcrumbSchema } from "@/shared/seo/seoData";

const focusAreas = ["Energy", "Environment", "Industry"];

export default function WhoWeAre() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 26 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7f3] text-[#0a2955]">
      <Seo
        title="Who We Are"
        description="Learn about Onelement Energy, a purpose-driven deep-tech cleantech company developing sustainable solutions from Hyderabad, Telangana."
        path="/about/teams"
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Who We Are", path: "/about/teams" },
        ])}
      />

      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-[#061a36] px-5 pb-16 pt-32 text-white sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_18%,rgba(121,255,224,.16),transparent_28%),radial-gradient(circle_at_12%_85%,rgba(35,182,95,.18),transparent_30%),linear-gradient(120deg,#061a36_0%,#0a2955_62%,#0b3440_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 top-24 -z-10 h-[30rem] w-[30rem] rounded-full border border-[#79ffe0]/15 sm:-right-12"
        >
          <span className="absolute inset-12 rounded-full border border-[#79ffe0]/10" />
          <span className="absolute inset-28 rounded-full border border-[#79ffe0]/10" />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#79ffe0]/45 to-transparent"
        />

        <div className="mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.28em] text-[#79ffe0]">
              <span className="h-0.5 w-12 bg-[#23b65f]" />
              Onelement Energy
            </p>
            <h1 className="mt-7 max-w-5xl text-[clamp(4rem,10vw,9.5rem)] font-extrabold leading-[0.78] tracking-[-0.07em]">
              WHO
              <span className="block text-[#4dff9e]">WE ARE</span>
            </h1>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.72,
              delay: reduceMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-l-2 border-[#23b65f] pl-6 lg:mb-2 lg:pl-8"
          >
            <p className="text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
              We Engineer a Cleaner Future One step at a time.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/62">
              <MapPin aria-hidden="true" size={17} className="text-[#79ffe0]" />
              Hyderabad, Telangana
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <motion.div {...reveal}>
            <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#1d6903]">
              Purpose-led innovation
            </p>
            <div className="mt-6 h-1 w-20 bg-[#23b65f]" />
            <p className="mt-8 max-w-sm text-sm font-bold uppercase leading-7 tracking-[0.12em] text-[#0a2955]/52">
              Deep-tech<br />Cleantech<br />Sustainable value
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: reduceMotion ? 0 : 0.08 }}
          >
            <p className="text-[clamp(1.75rem,3.2vw,3.6rem)] font-bold leading-[1.12] tracking-[-0.045em] text-[#0a2955]">
              Onelement Energy is a purpose-driven deep-tech cleantech company headquartered in Hyderabad, Telangana.
            </p>
            <p className="mt-8 max-w-4xl text-lg leading-8 text-[#0a2955]/68 sm:text-xl sm:leading-9">
              Founded with the belief that technology can solve some of humanity’s greatest challenges, we are committed to developing innovative solutions that combat climate change while creating sustainable economic value.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12 lg:pb-32">
        <motion.div
          {...reveal}
          className="relative mx-auto max-w-7xl overflow-hidden bg-[#0a2955] px-7 py-12 text-white shadow-[0_30px_90px_rgba(6,26,54,.18)] sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-[#23b65f]/18 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#23b65f]"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#79ffe0]">
                Connected by purpose
              </p>
              <p className="mt-6 text-2xl font-semibold leading-[1.35] tracking-[-0.025em] text-white/88 sm:text-3xl sm:leading-[1.3]">
                We are a team of passionate engineers, scientists, and entrepreneurs working at the intersection of energy, environment, and industry. we develop breakthrough technologies that turn industrial carbon emissions into valuable resources and clean energy solutions.
              </p>
              <p className="mt-7 max-w-4xl text-base leading-8 text-white/62 sm:text-lg">
                Our work focuses on three interconnected verticals that address some of the most critical challenges in the global energy transition.
              </p>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center justify-between border-b border-white/14 py-4 text-lg font-extrabold uppercase tracking-[0.08em]"
                  >
                    {area}
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 rounded-full bg-[#4dff9e]"
                    />
                  </div>
                ))}
              </div>

              <Link
                to="/technologies"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#23b65f] px-6 py-3.5 font-bold text-white shadow-[0_14px_40px_rgba(35,182,95,.22)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-[#2acb6b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79ffe0]"
              >
                Explore our technologies
                <ArrowUpRight
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={18}
                />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
