import { useRef, useState } from "react";

const useCarousel = () => {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  /* -----------------------------
      Helpers
  ------------------------------ */

  const stopAutoplay = () => {
    try {
      swiperRef.current?.autoplay?.stop();
    } catch (err) {}
  };

  const startAutoplay = () => {
    try {
      swiperRef.current?.autoplay?.start();
    } catch (err) {}
  };

  const enableInteractions = () => {
    const swiper = swiperRef.current;

    try {
      swiper?.mousewheel?.enable();
    } catch (err) {}

    if (!swiper) return;

    swiper.allowTouchMove = true;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
  };

  /* -----------------------------
      Navigation Hover
  ------------------------------ */

  const handleCardEnter = (index) => {
    const swiper = swiperRef.current;

    if (!swiper) return;

    if (swiper.slideToLoop) {
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }

    stopAutoplay();

    enableInteractions();

    setActiveIndex(index);
  };

  const handleCardLeave = () => {
    startAutoplay();
  };

  /* -----------------------------
      Slide Hover
  ------------------------------ */

  const handleSlideEnter = (index) => {
    const swiper = swiperRef.current;

    if (!swiper) return;

    const current =
      swiper.realIndex ?? swiper.activeIndex;

    if (current !== index) {
      swiper.slideToLoop(index);
    }

    stopAutoplay();

    enableInteractions();

    setActiveIndex(index);
  };

  const handleSlideLeave = () => {
    startAutoplay();
  };

  /* -----------------------------
      Swiper Change
  ------------------------------ */

  const handleSlideChange = (swiper) => {
    const current =
      swiper.realIndex ?? swiper.activeIndex;

    setActiveIndex(current);
  };

  return {
    swiperRef,

    activeIndex,

    setActiveIndex,

    handleSlideChange,

    handleCardEnter,

    handleCardLeave,

    handleSlideEnter,

    handleSlideLeave,
  };
};

export default useCarousel;