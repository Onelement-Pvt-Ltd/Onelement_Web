import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const TechnologyPoints = ({ points }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section>
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1d6903]">
          Inside the technology
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a2955]">
          Key capabilities and applications
        </h2>
      </div>

      <div className="grid gap-3">
        {points?.map((point, index) => {
          const isOpen = openIndex === index;
          const panelId = `technology-point-${index}`;

          return (
            <article
              key={point.title || index}
              className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                isOpen ? "border-[#163B22]/30" : "border-[#0a2955]/10"
              }`}
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xs font-bold text-[#1d6903]/65">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-bold text-[#0a2955] sm:text-lg">
                      {point.title}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.2 }}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eaf1e7] text-[#163B22]"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && point.content && (
                  <motion.div
                    id={panelId}
                    initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-[#0a2955]/8 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-7 sm:text-base">
                      {point.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TechnologyPoints;
