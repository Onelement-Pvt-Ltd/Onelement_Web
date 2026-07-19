import { motion } from "framer-motion";

const SectionHeading = () => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-flex rounded-full border border-[#22b14c]/30 bg-[#22b14c]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#22b14c]"
      >
        Our Roadmap to Impact
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mt-6 text-4xl font-black leading-tight text-[#0A2955] sm:text-5xl lg:text-6xl"
      >
        Engineering a
        <span className="block text-[#22b14c]">Sustainable Future</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg"
      >
        Accelerating carbon capture, renewable energy and industrial innovation
        to help industries transition towards a cleaner, sustainable and
        net-zero future.
      </motion.p>
    </div>
  );
};

export default SectionHeading;