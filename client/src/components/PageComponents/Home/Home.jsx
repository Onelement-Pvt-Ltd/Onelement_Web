import { Swiper, SwiperSlide } from "swiper/react";
import FourPillars from "./SectionComponents/CarousalSectionComponents/FourPillars";
import HeroSection from "./SectionComponents/HeroSectionComponents/HeroSection";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// import AboutSection from "./SectionComponents/AboutSection";
// import BlogSection from "./SectionComponents/BlogSection";
import BlogSection from "./SectionComponents/BlogSectionComponents/BlogSection";
import ContactSection from "./SectionComponents/ContactSection";
// import AnchorSections from "./AnchorSections";
import RoadmapSection from "./SectionComponents/RoadmapAndTargetComponents";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FourPillars />
      <RoadmapSection/>
      {/* <AboutSection/> */}
      <BlogSection />
      {/* <ContactSection/> */}

    </>
  );
};
export default Home;
