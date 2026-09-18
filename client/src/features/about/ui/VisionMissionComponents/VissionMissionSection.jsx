import SectionHeading from "../VisionMissionComponents/SectionHeading";
import VisionSection from "../VisionMissionComponents/VisionSection";
import MissionSection from "../VisionMissionComponents/MissionSection";
import ValuesBanner from "../VisionMissionComponents/ValuesBanner";
import BottomCTA from "../VisionMissionComponents/BottomCTA";

const VissionMissionSection = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#123c72_0%,#0a2955_35%,#071d3d_100%)]">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#35b46e]/15 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-[#7effe5]/10 blur-[180px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-28 px-6 py-20 sm:px-8 lg:px-10 xl:px-0">
        <SectionHeading />

        <VisionSection />

        <div className="h-px bg-gradient-to-r from-transparent via-[#35b46e]/40 to-transparent" />

        <MissionSection />

        <ValuesBanner />

        <BottomCTA />
      </div>
    </section>
  );
};

export default VissionMissionSection;