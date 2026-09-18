import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const SMOOTH_SCROLL_OPTIONS = {
  duration: 1.1,
  easing: (time) => 1 - Math.pow(1 - time, 3),
};

let activeScroller = null;

export const getSmoothScroller = () => activeScroller;

export const smoothScrollTo = (target, options = {}) => {
  if (activeScroller) {
    activeScroller.scrollTo(target, {
      ...SMOOTH_SCROLL_OPTIONS,
      ...options,
    });
    return true;
  }

  return false;
};

const SmoothScroll = () => {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(any-pointer: fine)");

    // Native scrolling is more predictable for touch and reduced-motion users.
    if (reducedMotion.matches || !finePointer.matches) return undefined;

    const lenis = new Lenis({
      ...SMOOTH_SCROLL_OPTIONS,
      smoothWheel: true,
    });

    activeScroller = lenis;
    let animationFrame;

    const updateScroll = (time) => {
      lenis.raf(time);
      animationFrame = window.requestAnimationFrame(updateScroll);
    };

    animationFrame = window.requestAnimationFrame(updateScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      lenis.destroy();
      if (activeScroller === lenis) activeScroller = null;
    };
  }, []);

  return null;
};

export default SmoothScroll;
