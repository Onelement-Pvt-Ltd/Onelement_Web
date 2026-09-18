import { AnimatePresence, motion } from "framer-motion";
import ContentSlide from "./ContentSlide";

const PillarContent = ({ pillar, activeIndex, total }) => {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-[#0a2955]/10 bg-white shadow-[0_28px_80px_rgba(10,41,85,.1)] sm:min-h-[520px]">
      <div className="absolute inset-x-0 top-0 z-10 h-1 bg-[#0a2955]/8">
        <motion.div
          className="h-full bg-gradient-to-r from-[#23b65f] to-[#79ffe0]"
          animate={{ width: `${((activeIndex + 1) / total) * 100}%` }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#23b65f]/10 blur-3xl" />

      <AnimatePresence mode="wait">
        <ContentSlide
          key={pillar.name}
          pillar={pillar}
          panelId={`pillar-panel-${activeIndex}`}
        />
      </AnimatePresence>
    </div>
  );
};

export default PillarContent;
