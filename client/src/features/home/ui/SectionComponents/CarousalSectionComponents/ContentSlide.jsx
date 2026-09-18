import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContentSlide = ({ pillar, panelId }) => {
  const Icon = pillar.icon;

  return (
    <motion.div
      id={panelId}
      role="tabpanel"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex min-h-[500px] flex-col justify-between p-7 sm:min-h-[520px] sm:p-10 lg:p-12"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#23b65f] text-white shadow-[0_12px_30px_rgba(35,182,95,.25)] sm:h-16 sm:w-16">
            <Icon size={28} />
          </div>
        </div>

        <p className="home-kicker mt-10 text-[#23b65f]">{pillar.subtitle}</p>
        <h3 className="home-display mt-3 text-4xl font-bold leading-none text-[#0a2955] sm:text-5xl">
          {pillar.name}
        </h3>
        <p className="home-copy mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
          {pillar.content}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-6 border-t border-[#0a2955]/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="home-copy text-xs uppercase tracking-[0.18em] text-slate-500">
            One Element Pvt. Ltd.
          </p>
          <p className="mt-1 text-lg font-bold text-[#0a2955]">
            Building a Sustainable Future
          </p>
        </div>

        <Link
          to="/technologies"
          className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#0a2955] px-5 py-3 font-bold text-white transition-colors hover:bg-[#23b65f] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#23b65f]"
        >
          Learn More
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ContentSlide;
