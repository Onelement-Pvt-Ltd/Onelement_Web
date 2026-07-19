import { approachData } from "../utils/aboutApproachData";
import ApproachCard from "./ApproachCard";

const AboutApproach = () => {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#05182f] via-[#0a2955] to-[#103d73] px-8 py-20 md:px-12 lg:px-16">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#35b46e]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#7effe5]/10 blur-3xl" />

      <div className="relative z-10">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7effe5]">
          OUR APPROACH
        </span>

        <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl xl:text-6xl">
          Everything we do is guided by 
          <span className="block bg-gradient-to-r from-[#35b46e] to-[#7effe5] bg-clip-text text-transparent">
            three principles.
          </span>
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {approachData.map((item) => (
            <ApproachCard
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutApproach;