import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import TechnologyCard from "./TechnologyCard";

const TechnologyThread = ({ technologies }) => {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.6"]
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-5xl">
      <motion.div
        aria-hidden="true"
        style={{ scaleY: prefersReducedMotion ? 1 : lineScale }}
        className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 origin-top bg-gradient-to-b from-[#7BC96F] via-[#E3A23C] to-[#163B22] md:block"
      />
      <motion.div
        aria-hidden="true"
        style={{ scaleY: prefersReducedMotion ? 1 : lineScale }}
        className="absolute left-6 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-[#7BC96F] via-[#E3A23C] to-[#163B22] md:hidden"
      />

      <div className="flex flex-col gap-20 md:gap-32">
        {technologies.map((tech, index) => (
          <TechnologyCard key={tech.slug} tech={tech} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TechnologyThread;