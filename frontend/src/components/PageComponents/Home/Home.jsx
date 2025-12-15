import { Swiper, SwiperSlide } from "swiper/react";
import FourPillars from "./SectionComponents/FourPillars";
import HeroSection from "./SectionComponents/HeroSection";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import AboutSection from "./SectionComponents/AboutSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FourPillars />
      <AboutSection/>

    </>
  );
};
export default Home;
