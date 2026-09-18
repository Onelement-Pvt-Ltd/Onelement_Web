import { motion as Motion } from "framer-motion";
import { approachData } from "../utils/aboutApproachData";
import ApproachCard from "./ApproachCard";
import { revealItem, staggerGroup, viewportOnce } from "../../../aboutMotion";

const AboutApproach = () => (
  <section className="about-approach-wrap">
    <Motion.div
      className="about-shell about-approach"
      variants={staggerGroup}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <Motion.header className="approach-head" variants={revealItem}>
        <div>
          <p className="about-eyebrow">Our approach</p>
          <h2 className="about-heading">Everything we do is guided by three principles.</h2>
        </div>
        <span className="approach-marker" aria-hidden="true">Method / 01—03</span>
      </Motion.header>
      <Motion.div className="approach-grid" variants={staggerGroup}>
        {approachData.map((item) => <ApproachCard key={item.id} {...item} />)}
      </Motion.div>
    </Motion.div>
  </section>
);

export default AboutApproach;
