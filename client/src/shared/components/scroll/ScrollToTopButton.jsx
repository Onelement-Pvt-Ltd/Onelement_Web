import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Leaf } from "lucide-react";
import "./ScrollToTopButton.css";
import { smoothScrollTo, subscribeToSmoothScroll } from "./SmoothScroll";

const RING_RADIUS = 28;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);
  const progressRingRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateScrollState = (scrollState) => {
      const scrollPosition = scrollState?.animatedScroll ?? window.scrollY;
      const scrollableHeight = scrollState?.limit
        ?? document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = Number.isFinite(scrollState?.progress)
        ? scrollState.progress
        : scrollableHeight > 0
          ? Math.min(Math.max(scrollPosition / scrollableHeight, 0), 1)
          : 0;
      const nextVisible = scrollPosition > 420;

      if (progressRingRef.current) {
        progressRingRef.current.setAttribute(
          "stroke-dashoffset",
          String(RING_LENGTH * (1 - nextProgress))
        );
      }

      if (visibleRef.current !== nextVisible) {
        visibleRef.current = nextVisible;
        setVisible(nextVisible);
      }
    };

    updateScrollState();
    const unsubscribeFromSmoothScroll = subscribeToSmoothScroll(updateScrollState);
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      unsubscribeFromSmoothScroll();
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollToTop = () => {
    if (!reduceMotion && smoothScrollTo(0)) return;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          title="Scroll to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.72, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.78, y: 16 }}
          whileHover={reduceMotion ? undefined : { y: -5, scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          className="eco-scroll-top"
        >
          <svg
            className="eco-scroll-ring"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <circle className="eco-scroll-ring-track" cx="32" cy="32" r={RING_RADIUS} />
            <circle
              ref={progressRingRef}
              className="eco-scroll-ring-progress"
              cx="32"
              cy="32"
              r={RING_RADIUS}
              strokeDasharray={RING_LENGTH}
              strokeDashoffset={RING_LENGTH}
            />
          </svg>

          <span className="eco-scroll-air" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>

          <span className="eco-scroll-leaf eco-scroll-leaf-one" aria-hidden="true">
            <Leaf size={13} />
          </span>
          <span className="eco-scroll-leaf eco-scroll-leaf-two" aria-hidden="true">
            <Leaf size={10} />
          </span>

          <span className="eco-scroll-core" aria-hidden="true">
            <Leaf className="eco-scroll-core-leaf" size={21} />
            <ArrowUp className="eco-scroll-arrow" size={18} strokeWidth={2.5} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
