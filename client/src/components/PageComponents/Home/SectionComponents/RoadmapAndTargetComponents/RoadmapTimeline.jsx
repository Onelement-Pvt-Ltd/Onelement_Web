import { roadmapTimeline } from "@/components/Partials/utils/RoadmapData";
import TimelineNode from "./TimelineNode";

const RoadmapTimeline = () => {
  return (
    <section className="mt-24">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold text-[#0A2955] md:text-4xl">
          Our Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Every milestone reflects our commitment towards building scalable
          climate technologies and accelerating the transition to a net-zero
          future.
        </p>
      </div>

      <div className="relative">
        {/* <div className="absolute left-8 top-0 h-full w-1 rounded-full bg-slate-200 lg:hidden" /> */}

        <div className="absolute left-0 right-0 top-8 hidden h-1 rounded-full bg-slate-200 lg:block" />

        <div className="grid gap-14 lg:grid-cols-4 lg:gap-8">
          {roadmapTimeline.map((item, index) => (
            <TimelineNode
              key={item.year}
              item={item}
              index={index}
              isLast={index === roadmapTimeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapTimeline;