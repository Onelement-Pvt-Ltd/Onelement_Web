import { missionCards } from "@/components/Partials/utils/RoadmapData";
import MissionCard from "./MissionCard";

const MissionGrid = () => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:gap-8">
      {missionCards.map((item, index) => (
        <MissionCard
          key={item.id}
          item={item}
          index={index}
        />
      ))}
    </div>
  );
};

export default MissionGrid;