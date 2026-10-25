import ImpactHeading from "./ImpactHeading";
import CcusValueChain from "./CcusValueChain";
import JourneyTimeline from "./JourneyTimeline";

const ImpactSection = () => {
  return (
    <section id="impact" className="relative isolate scroll-mt-24 overflow-hidden bg-[#071f41] py-[clamp(3.5rem,8vw,8rem)]">
      <div className="absolute -left-48 top-0 h-96 w-96 rounded-full bg-[#23b65f]/15 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#79ffe0]/8 blur-[130px]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] bg-size-[56px_56px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <ImpactHeading />

        <CcusValueChain />

        <JourneyTimeline />
      </div>
    </section>
  );
};

export default ImpactSection;
