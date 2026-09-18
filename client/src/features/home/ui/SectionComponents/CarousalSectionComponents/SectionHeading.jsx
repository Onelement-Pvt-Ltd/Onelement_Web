import { motion } from "framer-motion";

const SectionHeading = () => {
  return (
    <div className="grid items-end gap-7 lg:grid-cols-[.8fr_1.2fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="home-kicker text-[#23b65f]">OUR FOUR PILLARS</p>
        <h2 className="home-display mt-4 max-w-xl text-4xl font-bold leading-[1.02] text-[#0a2955] sm:text-5xl lg:text-6xl">
          Driving Climate Innovation
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="home-copy max-w-2xl border-l-2 border-[#23b65f] pl-6 text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end"
      >
        Accelerating the transition towards a sustainable future through
        carbon capture, renewable energy and responsible innovation.
      </motion.p>
    </div>
  );
};

export default SectionHeading;
