const ValuesBanner = () => {
  const values = [
    "Innovation",
    "Sustainability",
    "Integrity",
    "Collaboration",
    "Excellence",
  ];

  return (
    <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-[#0d3768] via-[#0a2955] to-[#0a2955] px-8 py-12">
      <div className="absolute -left-20 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-[#35b46e]/20 blur-[120px]" />

      <div className="relative flex flex-col items-center gap-8">
        <h3 className="text-center text-3xl font-black text-white lg:text-4xl">
          Our Core Values
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {values.map((value) => (
            <div
              key={value}
              className="rounded-full border border-[#35b46e]/30 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7effe5] backdrop-blur-sm"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesBanner;