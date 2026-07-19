import BackgroundGlow from "../CarousalSectionComponents/BackgroundGlow";
import SectionHeading from "./SectionHeading";
import MissionGrid from "./MissionGrid";
import RoadmapTimeline from "./RoadmapTimeline";

const RoadmapSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f7fbf9] via-white to-[#eef8ff] py-20 lg:py-28">
      <BackgroundGlow />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading />

        <MissionGrid />

        <RoadmapTimeline />
      </div>
    </section>
  );
};

export default RoadmapSection;