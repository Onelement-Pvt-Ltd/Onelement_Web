import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import HeroContent from "./HeroContent";
import CarbonBackground from "./CarbonBackground";
import TemporaryHeroSlide from "./TemporaryHeroSlide";
import heroTechnologies from "@/assets/Home/heroTechnologies.jpg";
import heroWhoWeAre from "@/assets/Home/hero-who-we-are.jpg";

const heroSlides = [
  {
    eyebrow: "Who we are",
    title: "Engineering a cleaner future, one step at a time.",
    description:
      "This space is ready for the approved company story and its final supporting visual.",
    linkLabel: "Discover Onelement",
    to: "/about",
    imageUrl: heroWhoWeAre,
    imageAlt: "Onelement Energy team and company",
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
    imageFit: "cover",
    tone: "cyan",
  },
];

const AUTOPLAY_DELAY = 7000;

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const pointerStart = useRef(null);
  const reduceMotion = useReducedMotion();

  const selectSlide = (nextIndex, nextDirection) => {
    setDirection(nextDirection);
    setActiveIndex((nextIndex + heroSlides.length) % heroSlides.length);
  };

  const showPrevious = () => selectSlide(activeIndex - 1, -1);
  const showNext = () => selectSlide(activeIndex + 1, 1);

  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    if (isPaused || reduceMotion) return undefined;

    const timer = window.setTimeout(() => {
      setDirection(1);
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroSlides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused, reduceMotion]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  };

  const handlePointerDown = (event) => {
    pointerStart.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < 55) return;
    if (distance > 0) showPrevious();
    else showNext();
  };

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Onelement featured stories"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      className="relative isolate mt-16 min-h-[calc(100svh-4rem)] overflow-hidden bg-[#061a36] outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#79ffe0]"
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

      <div className="relative min-h-[calc(100svh-4rem)]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={activeIndex}
            role="group"
            aria-roledescription="slide"
            aria-label={`${activeIndex + 1} of ${heroSlides.length}: ${activeSlide.eyebrow}`}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 70, scale: 0.985 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -50, scale: 0.99 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.56, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[calc(100svh-4rem)] w-full overflow-hidden bg-[#061a36]"
          >
            {activeSlide.primary ? (
              <>
                <CarbonBackground />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(35,182,95,.13),transparent_32%),linear-gradient(90deg,rgba(6,26,54,.97)_0%,rgba(10,41,85,.86)_48%,rgba(10,41,85,.35)_100%)]" />
                <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(54,83,111,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(54,83,111,.2)_1px,transparent_1px)] [background-size:52px_52px]" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061a36]/60 to-transparent" />
                <HeroContent slide={activeSlide} />
              </>
            ) : (
              <TemporaryHeroSlide slide={activeSlide} />
            )}
          </motion.article>
        </AnimatePresence>
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
