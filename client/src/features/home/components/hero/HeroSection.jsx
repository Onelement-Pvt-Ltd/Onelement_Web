import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { animate, AnimatePresence, motion, useMotionValue, useReducedMotion } from "framer-motion";
import HeroContent from "./HeroContent";
import TemporaryHeroSlide from "./TemporaryHeroSlide";
import heroTechnologies from "@/assets/home/heroTechnologies.webp";
import heroWhoWeAre from "@/assets/home/hero-who-we-are.webp";

const heroSlides = [
  {
    eyebrow: "Who we are",
    title: "Engineering a cleaner future, one step at a time.",
    description:
      "",
    linkLabel: "Discover Onelement",
    to: "/about",
    imageUrl: heroWhoWeAre,
    imageAlt: "Onelement Energy team and company",
    imagePosition: "center",
    imageFit: "contain",
    tone: "emerald",
  },
  {
    eyebrow: "Onelement Energy",
    title: "Building a Sustainable Future",
    description: "Developing, Deploying & Decentralizing Sustainable Technologies",
    imageUrl: "",
    imageAlt: "Onelement Energy sustainable technology",
    primary: true,
    tone: "navy",
  },
  {
    eyebrow: "Our technologies",
    title: "Technology designed around energy, environment and industry.",
    description:
      "Sustainability is ecosystem driven",
    linkLabel: "Explore Technologies",
    to: "/technologies",
    imageUrl: heroTechnologies,
    imageAlt: "Onelement Energy technologies",
    imagePosition: "center 68%",
    imageFit: "cover",
    tone: "cyan",
  },
];

const AUTOPLAY_DELAY = 7000;
const MOBILE_BREAKPOINT = "(max-width: 767px)";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia(MOBILE_BREAKPOINT).matches
  );
  const [hasChangedSlide, setHasChangedSlide] = useState(false);
  const gesture = useRef(null);
  const suppressClick = useRef(false);
  const dragX = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  const selectSlide = useCallback((nextIndex, nextDirection) => {
    const normalizedIndex = (nextIndex + heroSlides.length) % heroSlides.length;

    setDirection(nextDirection);
    setHasChangedSlide(true);
    setActiveIndex(normalizedIndex);
  }, []);

  const showPrevious = () => selectSlide(activeIndex - 1, -1);
  const showNext = () => selectSlide(activeIndex + 1, 1);

  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);
    const handleChange = (event) => setIsMobile(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isPaused || isDragging || reduceMotion) return undefined;

    const timer = window.setTimeout(() => {
      selectSlide(activeIndex + 1, 1);
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isDragging, isPaused, reduceMotion, selectSlide]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  };

  const resetGesture = () => {
    gesture.current = null;
    setIsDragging(false);
    animate(dragX, 0, { duration: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] });
  };

  const handlePointerDown = (event) => {
    if (!event.isPrimary || event.button > 0) return;

    gesture.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startedAt: performance.now(),
      horizontal: false,
    };
  };

  const handlePointerMove = (event) => {
    const current = gesture.current;
    if (!current || current.pointerId !== event.pointerId) return;

    const distanceX = event.clientX - current.startX;
    const distanceY = event.clientY - current.startY;

    if (!current.horizontal) {
      if (Math.abs(distanceX) < 8 && Math.abs(distanceY) < 8) return;
      if (Math.abs(distanceY) > Math.abs(distanceX)) {
        resetGesture();
        return;
      }
      current.horizontal = true;
      setIsDragging(true);
      event.currentTarget.setPointerCapture?.(event.pointerId);
    }

    event.preventDefault();
    dragX.set(distanceX * 0.72);
  };

  const handlePointerUp = (event) => {
    const current = gesture.current;
    if (!current || current.pointerId !== event.pointerId) return;

    const travelled = event.clientX - current.startX;
    const elapsed = Math.max(performance.now() - current.startedAt, 1);
    const speed = (travelled / elapsed) * 1000;
    const completedDrag = current.horizontal;

    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    resetGesture();

    if (!completedDrag) return;
    suppressClick.current = true;
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 0);

    if (travelled > 65 || speed > 520) showPrevious();
    else if (travelled < -65 || speed < -520) showNext();
  };

  const handlePointerCancel = () => resetGesture();

  const handleClickCapture = (event) => {
    if (!suppressClick.current) return;
    event.preventDefault();
    event.stopPropagation();
  };

  const renderSlide = (slide) => slide.primary ? (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(35,182,95,.13),transparent_32%),linear-gradient(90deg,rgba(6,26,54,.97)_0%,rgba(10,41,85,.86)_48%,rgba(10,41,85,.35)_100%)]" />
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(54,83,111,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(54,83,111,.2)_1px,transparent_1px)] [background-size:52px_52px]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061a36]/60 to-transparent" />
      <HeroContent slide={slide} />
    </>
  ) : (
    <TemporaryHeroSlide slide={slide} />
  );

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Onelement featured stories"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onClickCapture={handleClickCapture}
      onMouseEnter={() => !isMobile && setIsPaused(true)}
      onMouseLeave={() => !isMobile && setIsPaused(false)}
      onFocusCapture={() => !isMobile && setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!isMobile && !event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      className="relative isolate mt-16 h-[min(calc(100svh-4rem),48rem)] touch-pan-y overflow-hidden bg-[#061a36] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#79ffe0] lg:h-[min(calc(100dvh-4rem),48rem)]"
    >
      <button
        type="button"
        onClick={showPrevious}
        aria-label="Previous hero slide"
        className="absolute bottom-5 left-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/18 bg-[#061a36]/72 text-white shadow-[0_12px_35px_rgba(0,0,0,.28)] backdrop-blur-xl transition-[background-color,border-color,transform] hover:scale-105 hover:border-[#79ffe0]/55 hover:bg-[#163b22] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#79ffe0] lg:bottom-auto lg:left-8 lg:top-1/2 lg:h-12 lg:w-12 lg:-translate-y-1/2"
      >
        <ArrowLeft aria-hidden="true" size={20} />
      </button>

      <button
        type="button"
        onClick={showNext}
        aria-label="Next hero slide"
        className="absolute bottom-5 right-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/18 bg-[#061a36]/72 text-white shadow-[0_12px_35px_rgba(0,0,0,.28)] backdrop-blur-xl transition-[background-color,border-color,transform] hover:scale-105 hover:border-[#79ffe0]/55 hover:bg-[#163b22] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#79ffe0] lg:bottom-auto lg:right-8 lg:top-1/2 lg:h-12 lg:w-12 lg:-translate-y-1/2"
      >
        <ArrowRight aria-hidden="true" size={20} />
      </button>

      <div className="relative h-full">
        {isMobile ? (
          <div className="hero-mobile-viewport">
            <article
              key={activeIndex}
              role="group"
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} of ${heroSlides.length}: ${activeSlide.eyebrow}`}
              className={`hero-mobile-slide ${
                hasChangedSlide
                  ? direction > 0
                    ? "hero-mobile-slide--next"
                    : "hero-mobile-slide--previous"
                  : ""
              }`}
            >
              {renderSlide(activeSlide)}
            </article>
          </div>
        ) : (
          <AnimatePresence initial={false} custom={direction}>
            <motion.article
              key={activeIndex}
              custom={direction}
              role="group"
              aria-roledescription="slide"
              aria-label={`${activeIndex + 1} of ${heroSlides.length}: ${activeSlide.eyebrow}`}
              initial={reduceMotion ? { opacity: 0 } : { x: `${direction * 100}%` }}
              animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { x: `${direction * -100}%` }}
              transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 h-full w-full cursor-grab touch-pan-y select-none overflow-hidden bg-[#061a36] active:cursor-grabbing"
            >
              <motion.div className="h-full w-full" style={{ x: dragX }}>
                {renderSlide(activeSlide)}
              </motion.div>
            </motion.article>
          </AnimatePresence>
        )}
      </div>

      <div className="absolute bottom-7 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-[#061a36]/62 px-3 py-2 backdrop-blur-xl" role="tablist" aria-label="Choose featured story">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.eyebrow}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`Show slide ${index + 1}: ${slide.eyebrow}`}
            onClick={() => selectSlide(index, index > activeIndex ? 1 : -1)}
            className={`h-2 rounded-full transition-[width,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#79ffe0] ${
              activeIndex === index ? "w-8 bg-[#4dff9e]" : "w-2 bg-white/35 hover:bg-white/65"
            }`}
          />
        ))}
      </div>

      {!reduceMotion && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-0.5 bg-white/8" aria-hidden="true">
          <span
            key={activeIndex}
            className="hero-carousel-progress block h-full origin-left bg-linear-to-r from-[#23b65f] to-[#79ffe0]"
            style={{
              animationDuration: `${AUTOPLAY_DELAY}ms`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          />
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        Showing slide {activeIndex + 1} of {heroSlides.length}: {activeSlide.eyebrow}
      </p>
    </section>
  );
};

export default HeroSection;
