import { motion as Motion } from "framer-motion";
import { focusAreas } from "../utils/aboutWhoWeAreData";
import VerticalCard from "./VerticalCard";
import { revealItem, staggerGroup, viewportOnce } from "../../../aboutMotion";

const TechnologyVerticals = () => (
  <section className="about-verticals about-section">
    <div className="about-shell">
      <Motion.header
        className="verticals-head"
        variants={staggerGroup}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <Motion.div variants={revealItem}>
          <p className="about-eyebrow">Where we focus</p>
          <h2 className="about-heading">Our technology verticals</h2>
          <p className="about-copy">
            Our work focuses on three interconnected technology verticals that
            address some of the most critical challenges in the global energy
            transition through innovative engineering and scalable clean-energy
            solutions.
          </p>
        </Motion.div>
        <Motion.div className="vertical-count" variants={revealItem}>
          <strong>3</strong>
          <span>Strategic verticals</span>
        </Motion.div>
      </Motion.header>

      <Motion.div
        className="vertical-grid"
        variants={staggerGroup}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {focusAreas.map((area) => <VerticalCard key={area.id} {...area} />)}
      </Motion.div>
    </div>
  </section>
);

export default TechnologyVerticals;
