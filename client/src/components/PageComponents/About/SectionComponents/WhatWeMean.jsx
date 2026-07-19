import mission from "@/assets/AboutImages/mission.png";
import vision from "@/assets/AboutImages/vision.png";

const WhatWeMean = () => {
  return (
    <section className="bg-[#0a2955] py-16 md:py-20 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-3 w-3 rounded-full bg-[#35b46e]" />

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7effe5]">
              What We Mean
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
            Our Vision & Mission
          </h2>

          <p className="mt-5 text-slate-300 leading-8">
            Discover the principles that guide our innovation and commitment
            towards building sustainable technologies for a cleaner tomorrow.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#35b46e]">
                01
              </span>

              <h3 className="mt-3 text-3xl font-black md:text-4xl">Vision</h3>

              <div className="mt-4 h-1 w-20 rounded-full bg-[#35b46e]" />

              <p className="mt-8 text-base leading-8 text-slate-300 lg:text-lg">
                To contribute to the ecosystem by developing and delivering
                sustainable and reliable technologies in alternative clean
                energy, energy storage and carbon capture.
                <br />
                We provide turnkey solutions and integration process for Carbon
                capture , its storage and utilization. We strive to develop zero
                emission power systems, for off-grid and auxiliary power
                applications that can draw us closer to an energy independent
                society.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-white/10">
              <img
                src={vision}
                alt="Vision"
                className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
              />
            </div>
          </div>

          <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1 overflow-hidden rounded-[28px] border border-white/10">
              <img
                src={mission}
                alt="Mission"
                className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
              />
            </div>

            <div className="order-1 text-right lg:order-2">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#35b46e]">
                02
              </span>

              <h3 className="mt-3 text-3xl font-black md:text-4xl">Mission</h3>
              <div className="flex justify-end">
                <div className="relative right-0 mt-4 h-1 w-20 rounded-full bg-[#35b46e]" />
              </div>

              <p className="mt-8 text-base leading-8 text-slate-300 lg:text-lg">
                Creating ,a futuristic ecosystem that contributes to sustainable
                living
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeMean;
