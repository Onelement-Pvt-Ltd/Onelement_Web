import { Wind, Sun, Factory, Battery, Cpu, Network } from "lucide-react";
import { motion } from "framer-motion";
import Blog1 from "@/assets/BlogImages/Blog1.png"; // add a real energy image

const technologies = [
  {
    icon: Wind,
    title: "Wind Energy Platforms",
    body: "Utility-scale and distributed wind solutions designed for reliability, efficiency, and seamless grid integration.",
    tag: "On-grid & off-grid",
  },
  {
    icon: Sun,
    title: "Solar & Hybrid Systems",
    body: "Hybrid solar + wind architectures that maximise yield while keeping operations resilient and low-maintenance.",
    tag: "Hybrid architectures",
  },
  {
    icon: Factory,
    title: "Carbon Capture Systems",
    body: "Modular capture units that can be retrofitted to existing infrastructure to actively reduce operational emissions.",
    tag: "Modular retrofit",
  },
  {
    icon: Battery,
    title: "Energy Storage",
    body: "Smart storage layers that stabilise supply, smoothen demand peaks, and unlock new business models.",
    tag: "Grid stability",
  },
  {
    icon: Cpu,
    title: "Intelligent Control",
    body: "Adaptive control algorithms that optimise generation, storage, and dispatch in real time.",
    tag: "AI-driven",
  },
  {
    icon: Network,
    title: "Digital Twin & Analytics",
    body: "High-fidelity monitoring, forecasting, and simulation to continuously improve asset performance.",
    tag: "Data-first",
  },
];

const Technology = () => {
  return (
    <main className="flex flex-col bg-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Blog1})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2955]/90 via-[#0a2955]/70 to-[#1d6903]/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-white">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="uppercase tracking-widest text-sm text-[#9fe870] font-semibold">
              Our Technologies
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              Powering the transition to a
              <span className="text-[#9fe870]"> sustainable future</span>
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              A connected ecosystem of intelligent systems that integrate
              generation, storage, optimisation and analytics into one seamless platform.
            </p>

            <div className="mt-10 h-1 w-24 bg-[#9fe870] rounded-full" />
          </motion.div>

        </div>
      </section>

      {/* TECHNOLOGY GRID */}
      <section className="relative py-24 bg-[#f4f7f9] overflow-hidden">

        {/* Soft background accent */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#1d6903]/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm text-[#1d6903] font-semibold">
              Technology Stack
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#0a2955]">
              Integrated systems engineered for impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {technologies.map(({ icon: Icon, title, body, tag }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-[#0a2955]/5"
              >

                {/* Icon */}
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a2955]/5 text-[#0a2955] group-hover:bg-[#0a2955] group-hover:text-white transition">
                    <Icon size={26} strokeWidth={2.3} />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-[#1d6903] font-medium">
                    {tag}
                  </span>

                </div>

                <h3 className="mt-8 text-xl font-semibold text-[#0a2955]">
                  {title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {body}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#1d6903] transition-all duration-500 group-hover:w-full rounded-b-3xl" />

              </motion.article>
            ))}

          </div>
        </div>
      </section>

      {/* ARCHITECTURE FLOW SECTION */}
      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-widest text-sm text-[#1d6903] font-semibold">
              Deployment Model
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#0a2955]">
              From assessment to continuous optimisation
            </h2>
          </div>

          <div className="relative grid md:grid-cols-3 gap-10">

            {["Discover", "Design", "Operate"].map((step, index) => (
              <div
                key={step}
                className="relative bg-[#f4f7f9] rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-6xl font-bold text-[#0a2955]/10 absolute top-6 right-6">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold text-[#0a2955]">
                  {step}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  Structured process ensuring scalable integration,
                  intelligent configuration and real-time operational excellence.
                </p>

                <div className="mt-8 h-1 w-16 bg-[#1d6903] rounded-full" />
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
};

export default Technology;