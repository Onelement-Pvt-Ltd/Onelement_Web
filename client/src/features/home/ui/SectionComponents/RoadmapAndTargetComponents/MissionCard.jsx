import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const MissionCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative flex min-h-80 flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/[0.07] p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,.12)] backdrop-blur-sm transition-colors duration-300 hover:border-[#79ffe0]/45 hover:bg-white/[0.1]"
    >
      <span className="absolute right-5 top-5 text-xs font-bold tracking-[0.18em] text-white/25">
        0{index + 1}
      </span>

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#23b65f] shadow-[0_10px_25px_rgba(35,182,95,.25)]">
        <Icon size={23} />
      </div>

      <h3 className="home-display mt-8 text-2xl font-bold leading-tight">
        {item.title}
      </h3>
      <p className="home-copy mt-4 grow text-sm leading-7 text-white/62">
        {item.description}
      </p>

      <Link
        to="/technologies"
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-[#79ffe0] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#79ffe0]"
      >
        Learn More
        <ArrowUpRight size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>

      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#23b65f] to-[#79ffe0] transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  );
};

export default MissionCard;
