import { missionData } from "./utils/whatWeBelieveData";
import ImageFrame from "./ImageFrame";
import VisionMissionCard from "./VisionMissionCard";

const MissionSection = () => {
  return (
    <section className="grid items-center gap-14 lg:grid-cols-2">
      <div className="order-2 lg:order-1">
        <ImageFrame image={missionData.image} alt={missionData.label} />
      </div>

      <div className="order-1 lg:order-2">
        <VisionMissionCard
          id={missionData.id}
          label={missionData.label}
          description={missionData.description}
          align="right"
        />
      </div>
    </section>
  );
};

export default MissionSection;