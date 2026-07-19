import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MissionCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:border-[#22b14c]/40 hover:shadow-2xl hover:shadow-green-500/10"
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#22b14c]/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-[#22b14c] to-[#14853d] shadow-lg shadow-green-500/20">
        <Icon size={30} className="text-white transition duration-300 group-hover:scale-110 group-hover:rotate-6" />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-[#0A2955]">
        {item.title}
      </h3>

      <div className="mt-4 h-1 w-16 rounded-full bg-linear-to-r from-[#22b14c] to-[#0a2955]" />

      <p className="mt-6 leading-8 text-slate-600">
        {item.description}
      </p>

      <motion.button
        whileHover={{ x: 6 }}
        className="mt-8 flex items-center gap-2 font-semibold text-[#22b14c]"
      >
        Learn More
        <ArrowRight size={18} strokeWidth={2.5} />
      </motion.button>

      <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-linear-to-r from-[#22b14c] to-[#0a2955] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default MissionCard;