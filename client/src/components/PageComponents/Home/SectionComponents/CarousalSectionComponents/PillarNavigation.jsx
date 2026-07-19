import PillarCard from "./PillarCard";

const PillarNavigation = ({
  pillars,
  activeIndex,
  handleCardEnter,
  handleCardLeave,
}) => {
  return (
    <div
      className="
       lg:flex
        hidden
        flex-col
        gap-5
        justify-center
        h-full

        lg:max-w-[380px]
      "
    >
      {pillars.map((pillar, index) => (
        <PillarCard
          key={pillar.name}
          title={pillar.name}
          subtitle={pillar.subtitle}
          icon={pillar.icon}
          active={activeIndex === index}
          onMouseEnter={() => handleCardEnter(index)}
          onMouseLeave={handleCardLeave}
          onClick={() => handleCardEnter(index)}
        />
      ))}
    </div>
  );
};

export default PillarNavigation;
