import PillarCard from "./PillarCard";

const PillarNavigation = ({ pillars, activeIndex, onSelect }) => {
  return (
    <div className="flex h-full w-full items-start lg:items-center">
      <div
        className="grid w-full grid-cols-2 lg:gap-5 gap:3 lg:flex lg:flex-col"
        role="tablist"
        aria-label="Onelement pillars"
      >
        {pillars.map((pillar, index) => (
          <PillarCard
            key={pillar.name}
            title={pillar.name}
            subtitle={pillar.subtitle}
            icon={pillar.icon}
            active={activeIndex === index}
            onClick={() => onSelect(index)}
            controls={`pillar-panel-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PillarNavigation;
