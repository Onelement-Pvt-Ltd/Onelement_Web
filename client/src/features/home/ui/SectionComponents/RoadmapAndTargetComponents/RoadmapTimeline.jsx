import { motion } from "framer-motion";
import { roadmapTimeline } from "@/features/home/data/roadmap";
import TimelineNode from "./TimelineNode";

const RoadmapTimeline = () => {
  return (
    <section className="mt-24 border-t border-white/10 pt-16 lg:mt-28 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="grid gap-5 lg:grid-cols-[.7fr_1.3fr] lg:items-end"
      >
        <h2 className="home-display text-3xl font-bold text-white md:text-4xl">
          Our Journey
        </h2>
        <p className="home-copy max-w-2xl text-sm leading-7 text-white/60 sm:text-base lg:justify-self-end">
          Every milestone reflects our commitment towards building scalable
          climate technologies and accelerating the transition to a net-zero
          future.
        </p>
      </motion.div>

      <div className="relative mt-14">
        <div className="absolute left-[23px] top-6 h-[calc(100%-3rem)] w-px bg-white/15 lg:left-0 lg:right-0 lg:top-6 lg:h-px lg:w-auto" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-[#23b65f] via-[#79ffe0] to-[#23b65f] lg:block"
        />

        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
          {roadmapTimeline.map((item, index) => (
            <TimelineNode key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;
