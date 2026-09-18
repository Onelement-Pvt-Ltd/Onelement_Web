import { missionCards } from "@/features/home/data/roadmap";
import MissionCard from "./MissionCard";

const MissionGrid = () => {
  return (
    <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
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
