import SectionHeading from "./SectionHeading";
import MissionGrid from "./MissionGrid";
import RoadmapTimeline from "./RoadmapTimeline";

const RoadmapSection = () => {
  return (
    <section id="impact" className="relative isolate scroll-mt-24 overflow-hidden bg-[#071f41] py-20 sm:py-24 lg:py-32">
      <div className="absolute -left-48 top-0 h-96 w-96 rounded-full bg-[#23b65f]/15 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#79ffe0]/8 blur-[130px]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] bg-size-[56px_56px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading />

        <MissionGrid />

        <RoadmapTimeline />
      </div>
    </section>
  );
};

export default RoadmapSection;
