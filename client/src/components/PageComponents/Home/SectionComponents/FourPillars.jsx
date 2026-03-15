// FourPillars.jsx
import React, { useRef, useState } from "react";
import Content from "../../../Partials/utils/FourData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FourPillars = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const safeStopAutoplay = (s) => {
    try {
      s?.autoplay?.stop?.();
    } catch (e) {}
  };

  const safeStartAutoplay = (s) => {
    try {
      s?.autoplay?.start?.();
    } catch (e) {}
  };

  const ensureInteractions = (s) => {
    try {
      // make sure mousewheel is enabled
      s?.mousewheel?.enable?.();
    } catch (e) {}
    try {
      // ensure sliding via wheel/touch is allowed
      if (typeof s.allowSlideNext === "boolean") s.allowSlideNext = true;
      if (typeof s.allowSlidePrev === "boolean") s.allowSlidePrev = true;
      if (typeof s.allowTouchMove === "boolean") s.allowTouchMove = true;
    } catch (e) {}
  };

  const handleCardEnter = (idx) => {
    const s = swiperRef.current;
    if (s?.slideToLoop) s.slideToLoop(idx);
    else if (s?.slideTo) s.slideTo(idx);

    // pause autoplay (but ensure interactions still work)
    safeStopAutoplay(s);
    ensureInteractions(s);

    setActiveIndex(idx);
  };

  const handleCardLeave = () => {
    const s = swiperRef.current;
    safeStartAutoplay(s);
  };

  const handleSlideEnter = (idx) => {
    const s = swiperRef.current;
    if (s) {
      const currentReal =
        typeof s.realIndex === "number" ? s.realIndex : s.activeIndex;
      if (currentReal !== idx) {
        if (s.slideToLoop) s.slideToLoop(idx);
        else s.slideTo(idx);
      }
    }

    // Pause autoplay but keep interactions enabled
    safeStopAutoplay(s);
    ensureInteractions(s);

    setActiveIndex(idx);
  };

  const handleSlideLeave = () => {
    const s = swiperRef.current;
    // Resume autoplay
    safeStartAutoplay(s);
    // keep interactions enabled (no harm)
    ensureInteractions(s);
  };

  return (
    <div className="w-full bg-[#d9d9d9] flex items-center justify-center py-12">
      <div className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT: cards column */}
          <div className="flex flex-col items-center gap-y-6 overflow-visible relative">
            {Content.map((Four, idx) => (
              // wrapper: capture hover and show active visuals
              <div
                key={idx}
                onMouseEnter={() => handleCardEnter(idx)}
                onMouseLeave={handleCardLeave}
                className={`relative overflow-visible rounded-md transition-transform duration-200 ease-out
                  ${
                    activeIndex === idx
                      ? "scale-[1.08] z-20 shadow-[-1px_12px_12px_-6px_#144e87]"
                      : "scale-100"
                  }`}
                style={{ willChange: "transform" }}
              >
                <div
                  className="bg-[#0a2955] text-white flex items-center justify-center rounded-md cursor-pointer w-[280px] py-5 select-none relative"
                  style={{ willChange: "transform" }}
                  role="button"
                >
                  <h1 className="text-xl font-semibold">{Four.name}</h1>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: content column */}
          <div className="flex items-start">
            <div className="bg-[#0a2955] w-2" />
            <div className=" bg-white flex items-center px-4 w-full h-88 overflow-hidden">
              <Swiper
                onSwiper={(s) => (swiperRef.current = s)}
                onSlideChange={(s) => {
                  const idx =
                    typeof s.realIndex === "number"
                      ? s.realIndex
                      : s.activeIndex;
                  setActiveIndex(idx);
                }}
                loop={true}
                direction="vertical"
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={0}
                // pagination={{ clickable: true }}
                mousewheel={{ forceToAxis: true }}
                modules={[Pagination, Mousewheel, Autoplay]}
                className="h-full w-full"
              >
                {Content.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    className="h-full flex items-center justify-center"
                    onMouseEnter={() => handleSlideEnter(idx)}
                    onMouseLeave={handleSlideLeave}
                  >
                    <div className="w-full h-full overflow-auto flex items-center">
                      <div className="max-w-prose w-full px-6 py-4">
                        <p className="text-2xl font-semibold leading-10 text-justify text-black/80">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourPillars;
