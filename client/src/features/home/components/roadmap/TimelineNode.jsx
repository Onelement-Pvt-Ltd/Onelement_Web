import { motion } from "framer-motion";

const TimelineNode = ({ item, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="relative grid grid-cols-[48px_1fr] gap-5 lg:block"
    >
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#79ffe0]/50 bg-[#071f41] shadow-[0_0_0_7px_rgba(35,182,95,.08)] lg:mx-0">
        <span className="h-3 w-3 rounded-full bg-[#4dff9e] shadow-[0_0_18px_rgba(77,255,158,.75)]" />
      </div>

      <div className="pb-2 lg:pt-7">
        <p className="text-4xl font-bold tracking-[-0.03em] text-white">
          {item.year}
        </p>
        <h3 className="mt-2 text-lg font-bold text-[#79ffe0]">
          {item.title}
        </h3>
        <p className="home-copy mt-3 max-w-xs text-sm leading-7 text-white/55">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
};

export default TimelineNode;
