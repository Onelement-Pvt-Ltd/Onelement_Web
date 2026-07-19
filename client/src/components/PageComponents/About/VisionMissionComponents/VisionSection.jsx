import { visionData } from "./utils/whatWeBelieveData";
import ImageFrame from "./ImageFrame";
import VisionMissionCard from "./VisionMissionCard";

const VisionSection = () => {
  return (
    <section className="grid items-center gap-14 lg:grid-cols-2">
      <VisionMissionCard
        id={visionData.id}
        label={visionData.label}
        description={visionData.description}
      />

      <ImageFrame image={visionData.image} alt={visionData.label} />
    </section>
  );
};

export default VisionSection;