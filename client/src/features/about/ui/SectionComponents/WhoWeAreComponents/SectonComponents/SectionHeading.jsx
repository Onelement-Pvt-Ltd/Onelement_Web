const SectionHeading = () => {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4">
        <div className="h-3 w-3 rounded-sm bg-[#16792d]" />

        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#0a2955]">
          Who We Are
        </span>
      </div>

      <h2 className="mt-5 lg:mt-8 text-3xl sm:text-4xl  font-black leading-tight text-[#0a2955] md:text-5xl xl:text-6xl">
        We engineer a cleaner future.
        <br />
        <span className="bg-gradient-to-r from-[#16792d] to-[#35b46e] bg-clip-text text-transparent">
          One Step at a time.
        </span>
      </h2>

    </div>
  );
};

export default SectionHeading;