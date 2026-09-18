import { useEffect } from "react";
import FourPillars from "./SectionComponents/CarousalSectionComponents/FourPillars";
import HeroSection from "./SectionComponents/HeroSectionComponents/HeroSection";
import BlogSection from "./SectionComponents/BlogSectionComponents/BlogSection";
import RoadmapSection from "./SectionComponents/RoadmapAndTargetComponents";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return undefined;

    const frame = window.requestAnimationFrame(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "instant", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <main className="home-page overflow-hidden bg-[#f6f8f6] text-[#0a2955]">
      <HeroSection />
      <FourPillars />
      <RoadmapSection />
      <BlogSection />
    </main>
  );
};
export default Home;
