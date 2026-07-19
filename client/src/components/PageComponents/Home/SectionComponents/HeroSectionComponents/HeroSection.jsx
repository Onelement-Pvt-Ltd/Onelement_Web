import HeroContent from "./HeroContent";
import CarbonBackground from "./CarbonBackground";

const HeroSection = () => {
  return (
    <section
      className="
      relative
      h-full
      mt-16
      overflow-hidden
      bg-gradient-to-br
      from-[#0a2955]
      via-[#0a2955]
      to-[#08294d]
      "
    >
      <HeroContent />
    </section>
  );
};

export default HeroSection;