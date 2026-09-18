import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollTo } from "./SmoothScroll";

const ScrollToTop = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    if (!smoothScrollTo(0, { immediate: true })) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return location;
};

export default ScrollToTop;
