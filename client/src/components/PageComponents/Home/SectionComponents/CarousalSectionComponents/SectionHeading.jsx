import { motion } from "framer-motion";

const SectionHeading = () => {
  return (
    <div className="mb-16 text-center">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="
        uppercase
        tracking-[8px]
        text-[#23b65f]
        font-semibold
      "
      >
        OUR FOUR PILLARS
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: .2,
          duration: .7,
        }}
        className="
        mt-4
        text-4xl
        md:text-5xl
        font-bold
        text-[#0a2955]
      "
      >
        Driving Climate Innovation
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: .4,
        }}
        className="
        mt-5
        mx-auto
        max-w-2xl
        text-lg
        text-slate-600
      "
      >
        Accelerating the transition towards a sustainable future through
        carbon capture, renewable energy and responsible innovation.
      </motion.p>

    </div>
  );
};

export default SectionHeading;