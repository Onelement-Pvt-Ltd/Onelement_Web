import HeroContent from "./HeroContent";
import CarbonBackground from "./CarbonBackground";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative isolate mt-16 min-h-[calc(100svh-4rem)] overflow-hidden bg-[#061a36]"
    >
      <CarbonBackground />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(35,182,95,.13),transparent_32%),linear-gradient(90deg,rgba(6,26,54,.97)_0%,rgba(10,41,85,.86)_48%,rgba(10,41,85,.35)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061a36]/60 to-transparent" />
      <HeroContent />
    </section>
  );
};

export default HeroSection;
