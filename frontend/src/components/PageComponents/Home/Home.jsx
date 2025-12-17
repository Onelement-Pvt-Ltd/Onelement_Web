import { Swiper, SwiperSlide } from "swiper/react";
import FourPillars from "./SectionComponents/FourPillars";
import HeroSection from "./SectionComponents/HeroSection";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import AboutSection from "./SectionComponents/AboutSection";
import BlogSection from "./SectionComponents/BlogSection";
import ContactSection from "./SectionComponents/ContactSection";
import AnchorSections from "./AnchorSections";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FourPillars />
      <AboutSection/>
      <BlogSection />
      <ContactSection/>
      {/* <AnchorSections/> */}
    </>
  );
};
export default Home;
