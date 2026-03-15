import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { getTechnologies } from "@/features/technology/technologySlice";
import TechnologyCard from "./SectionComponents/TechnologyCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const Technology = () => {
  const dispatch = useDispatch();
  const { technologies, loading } = useSelector((state) => state.technology);

  useEffect(() => {
    dispatch(getTechnologies({ page: 1, limit: 12 }));
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse text-[#0a2955] text-lg">
          Loading technologies...
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white overflow-hidden">

      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center">

        <div
          className="absolute inset-0 bg-cover bg-center scale-100"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1920&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#0a2955]/90 via-[#0a2955]/70 to-[#1d6903]/70" />

        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#9fe870]/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#9fe870] font-semibold">
              Technology Stack
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Our Technology <br />
              <span className="text-[#9fe870]">Ecosystem</span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Explore intelligent energy systems engineered for scale,
              resilience, and long-term sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-10 md:py-16 bg-[#f4f7f9]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
              grid 
              gap-8 sm:gap-10 md:gap-12
              justify-items-center
              grid-cols-1 
              sm:grid-cols-1 
              md:grid-cols-2 
              lg:grid-cols-3
            "
          >
            {technologies.map((tech, index) => (
              <TechnologyCard key={tech.slug} tech={tech} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Technology;
