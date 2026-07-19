import Content from "../../../../Partials/utils/FourData";

import BackgroundGlow from "./BackgroundGlow";
import SectionHeading from "./SectionHeading";
import PillarNavigation from "./PillarNavigation";
import PillarContent from "./PillarContent";

import useCarousel from "./useCarousel";

const FourPillars = () => {
  const {
    swiperRef,
    activeIndex,

    handleSlideChange,

    handleCardEnter,
    handleCardLeave,

    handleSlideEnter,
    handleSlideLeave,
  } = useCarousel();

  return (
    <section
      className="
      relative

      overflow-hidden

      bg-gradient-to-br

      from-[#eef7f5]

      via-white

      to-[#edf8ff]

      py-20

      lg:py-28
    "
    >
      {/* Background */}

      {/* <BackgroundGlow /> */}

      <div
        className="
        relative

        z-10

        mx-auto

        max-w-7xl

        px-6

        lg:px-8
      "
      >
        {/* Heading */}

        <SectionHeading />

        {/* Main Layout */}

        <div
          className="
          mt-14

          grid

          gap-10

          lg:grid-cols-[360px_1fr]

          xl:grid-cols-[400px_1fr]
          

          items-start
        "
        >
          {/* Left Navigation */}

          <PillarNavigation 

            pillars={Content}
            activeIndex={activeIndex}
            handleCardEnter={handleCardEnter}
            handleCardLeave={handleCardLeave}
          />

          {/* Right Content */}

          <PillarContent
            pillars={Content}
            activeIndex={activeIndex}
            swiperRef={swiperRef}
            handleSlideChange={handleSlideChange}
            handleSlideEnter={handleSlideEnter}
            handleSlideLeave={handleSlideLeave}
          />
        </div>
      </div>
    </section>
  );
};

export default FourPillars;