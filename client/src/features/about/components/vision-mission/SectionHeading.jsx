const SectionHeading = () => {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7effe5]">
        WHAT WE BELIEVE
      </span>

      <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
        Vision &
        <span className="block bg-gradient-to-r from-[#35b46e] to-[#7effe5] bg-clip-text text-transparent">
          Mission
        </span>
      </h1>

      <div className="mx-auto mt-8 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#35b46e] to-[#7effe5]" />
    </div>
  );
};

export default SectionHeading;
