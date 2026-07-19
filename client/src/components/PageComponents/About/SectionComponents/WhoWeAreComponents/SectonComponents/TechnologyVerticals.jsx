import { focusAreas } from "../utils/aboutWhoWeAreData";
import VerticalCard from "./VerticalCard";
import FocusCard from "./VerticalCard";

const TechnologyVerticals = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-10 border-b border-[#0a2955]/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-4xl">


          <h2 className="mt-4 text-4xl font-black leading-tight text-[#0a2955] md:text-5xl xl:text-6xl">
            Our Technology
            <br />
            Verticals
          </h2>

          <p className="mt-6 max-w-3xl info-text">
            Our work focuses on three interconnected technology verticals that
            address some of the most critical challenges in the global energy
            transition through innovative engineering and scalable clean-energy
            solutions.
          </p>
        </div>

        <div className="flex flex-col border-l-4 border-[#35b46e] pl-6">
          <span className="text-5xl font-black text-[#0a2955]">
            3
          </span>

          <span className="mt-2 text-lg font-semibold text-[#16792d]">
            Strategic Verticals
          </span>

          <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
            Carbon capture, green fuels and fuel-cell systems working together
            to accelerate industrial decarbonization.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {focusAreas.map((area) => (
          <VerticalCard
            key={area.id}
            {...area}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnologyVerticals;