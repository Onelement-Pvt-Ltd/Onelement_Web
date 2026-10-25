import { motion, useReducedMotion } from "framer-motion";

const purposeWords = ["People.", "Planet.", "Purpose."];
const capitalOrigins = [
  { x: -260, y: -180, rotate: -22 },
  { x: 0, y: 240, rotate: 12 },
  { x: 260, y: -180, rotate: 22 },
];

const PurposeSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="purpose"
      className="relative flex min-h-[28svh] items-center overflow-hidden bg-[#f6f8f6] py-10 sm:min-h-[32svh] sm:py-12 md:min-h-[36svh] md:py-16 lg:min-h-[55svh] lg:py-24 xl:min-h-[60svh]"
    >
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#23b65f]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#0a2955]/8 blur-3xl" />

      <motion.h2
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        className="home-display relative mx-auto flex max-w-[1600px] flex-nowrap justify-center gap-x-[0.16em] whitespace-nowrap px-5 text-center text-[clamp(1.4rem,7.4vw,9rem)] font-bold leading-[0.92] text-[#0a2955]"
      >
        {purposeWords.map((word, index) => (
          <span key={word} className="inline-flex whitespace-nowrap">
            <motion.span
              className="inline-block text-[#23b65f]"
              variants={{
                hidden: { opacity: 0, scale: 0.35, ...capitalOrigins[index] },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: {
                    delay: index * 0.28,
                    type: "spring",
                    stiffness: 60,
                    damping: 17,
                    mass: 1.05,
                  },
                },
              }}
            >
              {word.charAt(0)}
            </motion.span>
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, x: -14 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.82 + index * 0.28,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              {word.slice(1)}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </section>
  );
};

export default PurposeSection;
