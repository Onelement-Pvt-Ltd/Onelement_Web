import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import { AnimatePresence } from "framer-motion";
import {motion} from "framer-motion";

import "swiper/css";

import ContentSlide from "./ContentSlide";

const PillarContent = ({
  pillars,
  swiperRef,
  activeIndex,
  handleSlideChange,
  handleSlideEnter,
  handleSlideLeave,
}) => {
  return (
    <div
      className="
      relative

      overflow-hidden

      rounded-3xl

      border
      border-slate-200

      bg-white

      shadow-xl

      h-[520px]

      lg:h-[560px]
    "
    >
      {/* Top Accent */}

      <div
        className="
        absolute
        top-0
        left-0

        h-1.5

        w-full

        bg-gradient-to-r

        from-[#22b14c]

        via-[#4cf0b2]

        to-[#0a2955]
      "
      />

      {/* Swiper */}

      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop
        spaceBetween={0}
        mousewheel={{
          forceToAxis: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Mousewheel, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        className="h-full"
      >
        {pillars.map((pillar, index) => (
          <SwiperSlide
            key={pillar.name}
            onMouseEnter={() => handleSlideEnter(index)}
            onMouseLeave={handleSlideLeave}
          >
            <div
              className="
              flex

              h-[520px]

              items-center

              p-8

              md:p-12
            "
            >
              <AnimatePresence mode="wait">
                <ContentSlide pillar={pillar} />
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Progress */}

      <div
        className="
        absolute

        bottom-0

        left-0

        h-1

        w-full

        bg-slate-100
      "
      >
        <motion.div
          className="
        h-full

        bg-gradient-to-r

        from-[#22b14c]

        to-[#4cf0b2]
    "
          animate={{
            width: `${((activeIndex + 1) / pillars.length) * 100}%`,
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default PillarContent;
