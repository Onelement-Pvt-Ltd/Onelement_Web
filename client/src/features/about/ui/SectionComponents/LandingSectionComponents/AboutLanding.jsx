import { motion as Motion } from "framer-motion";
import AboutBento from "./AboutBento";
import LandingHeading from "./LandingHeading";
import { revealItem, staggerGroup } from "../../aboutMotion";

const AboutLanding = () => (
  <section className="about-hero">
    <Motion.div
      className="about-shell about-hero-grid"
      variants={staggerGroup}
      initial="hidden"
      animate="show"
    >
      <Motion.div variants={revealItem}>
        <LandingHeading />
      </Motion.div>
      <AboutBento />
    </Motion.div>
  </section>
);

export default AboutLanding;
