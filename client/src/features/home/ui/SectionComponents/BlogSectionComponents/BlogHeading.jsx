import { motion } from "framer-motion";

const BlogHeading = () => {
  return (
    <div className="mb-12 grid items-end gap-7 lg:mb-16 lg:grid-cols-[1fr_.8fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p className="home-kicker text-[#23b65f]">Recent Articles</p>
        <h2 className="home-display mt-4 text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
          <span className="text-[#0a2955]"><span className="text-[#23b65f]">P</span>eople. </span>
          <span className="text-[#0a2955]"><span className="text-[#23b65f]">P</span>lanet. </span>
          <span className="text-[#0a2955]"><span className="text-[#23b65f]">P</span>urpose.</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="home-copy max-w-xl border-l-2 border-[#23b65f] pl-6 text-base leading-8 text-slate-600 lg:justify-self-end"
      >
        Discover the latest insights, innovations and sustainability stories
        shaping the future of clean energy and engineering.
      </motion.p>
    </div>
  );
};

export default BlogHeading;
