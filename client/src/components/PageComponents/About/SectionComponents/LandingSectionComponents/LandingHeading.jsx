const LandingHeading = () => {
  return (
    <div className="flex flex-1 lg:gap-y-10 flex-col justify-between lg:pr-10">
      <div >
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#35b46e]">
          ABOUT US
        </span>

        <h1 className="mt-5 max-w-2xl text-5xl font-black leading-[1.02] text-[#0a2955] lg:text-6xl">
          Engineering
          <br />
          Tomorrow's Energy.
          <div className="mt-8 h-1 w-24 rounded-full bg-linear-to-r from-[#0a2955] to-[#4dff9e]" />
        </h1>
      </div>

      <p className=" mt-6 lg:mt-8 max-w-xl info-text text-justify lg:text-lg leading-7 lg:leading-9 text-slate-600">
        Onelement Energy was founded with a clear purpose to develop practical, scalable solutions that combat climate change and secure a sustainable future for the next generations. To accelerate the world’s transition to a low-carbon economy by delivering innovative, commercially viable technologies that reduce emissions while creating new economic value. We believe climate action and economic growth can and must  go hand in hand.
      </p>
    </div>
  );
};

export default LandingHeading;
