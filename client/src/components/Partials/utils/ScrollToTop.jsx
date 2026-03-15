import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  console.log(location);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]); // Runs before the new page is painted

  return location;
};

export default ScrollToTop;
