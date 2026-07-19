import { motion } from "framer-motion";

const BlogHeading = () => {
  return (
    <div className="mb-14 flex flex-col items-center text-center">
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3 rounded-full border border-[#1d6903]/20 bg-[#1d6903]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#1d6903]"
      >
        Recent Articles
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative inline-block text-3xl font-extrabold md:text-4xl lg:text-5xl"
      >
        <span className="text-[#0a2955]"><span className="text-[#1d6903]">P</span>eople.&nbsp;</span>
        <span className="text-[#0a2955]"><span className="text-[#1d6903]">P</span>lanet.&nbsp;</span>
        <span className="text-[#0a2955]"><span className="text-[#1d6903]">P</span>urpose.</span>
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 140 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 h-1 rounded-full bg-[#0a2955]"
      />

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base"
      >
        Discover the latest insights, innovations and sustainability stories
        shaping the future of clean energy and engineering.
      </motion.p>
    </div>
  );
};

export default BlogHeading;