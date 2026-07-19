import { motion } from "framer-motion";

const TimelineNode = ({ item, index, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#22b14c] to-[#14853d] shadow-lg shadow-green-500/20">
        <div className="h-6 w-6 rounded-full border-4 border-[#0a2955] bg-white" />
      </div>

      {!isLast && (
        <div className="absolute left-1/2 top-8 hidden h-1 w-[calc(100%+2rem)] -translate-y-1/2 bg-gradient-to-r from-[#22b14c] to-[#79ffe0] lg:block" />
      )}

      {!isLast && (
        <div className="mt-4 h-16 w-1 rounded-full bg-linear-to-b from-[#22b14c] to-[#79ffe0] lg:hidden" />
      )}

      <h3 className="mt-6 text-3xl font-black text-[#0A2955]">
        {item.year}
      </h3>

      <h4 className="mt-2 text-xl font-semibold text-[#22b14c]">
        {item.title}
      </h4>

      <p className="mt-4 max-w-[230px] leading-7 text-[#0a2955]">
        {item.description}
      </p>
    </motion.div>
  );
};

export default TimelineNode;