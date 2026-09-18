import { motion } from "framer-motion";

const SectionHeading = () => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="home-kicker text-[#79ffe0]"
      >
        Our Roadmap to Impact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="home-display mt-5 text-4xl font-bold leading-[1.02] text-white sm:text-5xl lg:text-6xl"
      >
        Engineering a
        <span className="block text-[#4dff9e]">Sustainable Future</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="home-copy mx-auto mt-7 max-w-3xl text-base leading-8 text-white/65 sm:text-lg"
      >
        Accelerating carbon capture, renewable energy and industrial innovation
        to help industries transition towards a cleaner, sustainable and
        net-zero future.
      </motion.p>
    </div>
  );
};

export default SectionHeading;
