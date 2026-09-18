import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PillarCard = ({ title, subtitle, icon: Icon, active, onClick, controls }) => {
  return (
    <motion.button
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      whileHover={{ x: active ? 0 : 4 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`group relative min-h-32 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#23b65f] lg:min-h-0 lg:p-5 ${
        active
          ? "border-[#0a2955] bg-[#0a2955] text-white shadow-[0_18px_45px_rgba(10,41,85,.18)]"
          : "border-[#0a2955]/10 bg-white text-[#0a2955] hover:border-[#23b65f]/50 hover:shadow-lg"
      }`}
    >
      <span
        className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl transition-colors lg:mb-0 lg:absolute lg:left-5 lg:top-1/2 lg:-translate-y-1/2 ${
          active ? "bg-[#23b65f] text-white" : "bg-[#23b65f]/10 text-[#23b65f]"
        }`}
      >
        <Icon size={20} />
      </span>

      <span className="block lg:pl-14">
        <span className="block text-base font-bold leading-tight sm:text-lg">
          {title}
        </span>
        <span className={`mt-1 hidden text-xs sm:block ${active ? "text-white/65" : "text-slate-500"}`}>
          {subtitle}
        </span>
      </span>

      <ArrowUpRight
        size={17}
        className={`absolute right-3 top-3 transition-all lg:right-4 lg:top-4 ${
          active ? "text-[#79ffe0]" : "text-[#0a2955]/35 group-hover:text-[#23b65f]"
        }`}
      />

      {active && (
        <motion.span
          layoutId="active-pillar"
          className="absolute inset-x-0 bottom-0 h-1 bg-[#23b65f]"
        />
      )}
    </motion.button>
  );
};

export default PillarCard;
