import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Content from "@/features/home/data/pillars";
import BackgroundGlow from "./BackgroundGlow";
import SectionHeading from "./SectionHeading";
import PillarNavigation from "./PillarNavigation";
import PillarContent from "./PillarContent";

const FourPillars = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % Content.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <section
      id="solutions"
      className="relative scroll-mt-24 overflow-hidden bg-[#f6f8f6] py-20 sm:py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <BackgroundGlow />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading />

        <div className="mt-12 grid items-stretch gap-7 lg:mt-16 lg:grid-cols-[minmax(280px,360px)_1fr] lg:gap-10">
          <PillarNavigation
            pillars={Content}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />

          <PillarContent
            pillar={Content[activeIndex]}
            activeIndex={activeIndex}
            total={Content.length}
          />
        </div>
      </div>
    </section>
  );
};

export default FourPillars;
