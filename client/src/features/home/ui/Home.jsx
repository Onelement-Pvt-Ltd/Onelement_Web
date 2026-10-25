import { useEffect } from "react";
import FourPillars from "./SectionComponents/CarousalSectionComponents/FourPillars";
import HeroSection from "./SectionComponents/HeroSectionComponents/HeroSection";
import PurposeSection from "./SectionComponents/PurposeSectionComponents/PurposeSection";
import RoadmapSection from "./SectionComponents/RoadmapAndTargetComponents";
import "./Home.css";
import Seo from "@/shared/seo/Seo";
import { organizationSchema, websiteSchema } from "@/shared/seo/seoData";

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
      <Seo
        description="Explore Onelement Energy's sustainable technology work, company journey and articles for a cleaner, more resilient energy future."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [organizationSchema, websiteSchema],
        }}
      />
      <HeroSection />
      <FourPillars />
      <RoadmapSection />
      <PurposeSection />
    </main>
  );
};
export default Home;
