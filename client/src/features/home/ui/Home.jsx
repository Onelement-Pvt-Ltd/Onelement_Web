import { useEffect } from "react";
import FourPillars from "../components/pillars/FourPillars";
import HeroSection from "../components/hero/HeroSection";
import PurposeSection from "../components/purpose/PurposeSection";
import RoadmapSection from "../components/roadmap";
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
        description="Onelement Energy develops carbon capture, E-Fuel, PEM fuel cell and green hydrogen technologies for a cleaner, more resilient energy future."
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
