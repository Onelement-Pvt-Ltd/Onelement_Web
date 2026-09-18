import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      setWidth((scrolled / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-green-600 z-50"
      style={{ width: `${width}%` }}
    />
  );
};
