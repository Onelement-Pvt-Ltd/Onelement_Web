import { motion as Motion } from "framer-motion";
import technologyVerticals from "@/assets/About/technologyVerticals.webp";
import technologyVerticalsSmall from "@/assets/About/technologyVerticals-900.webp";
import { revealItem, staggerGroup, viewportOnce } from "../../../aboutMotion";

const TechnologyVerticals = () => (
  <section id="where-we-focus" className="about-verticals about-section scroll-mt-24">
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
        {/* <Motion.div className="vertical-count" variants={revealItem}>
          <strong>3</strong>
          <span>Strategic verticals</span>
        </Motion.div> */}
      </Motion.header>

      <Motion.figure
        className="verticals-visual"
        variants={revealItem}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <img
          src={technologyVerticals}
          srcSet={`${technologyVerticalsSmall} 900w, ${technologyVerticals} 1619w`}
          sizes="(min-width: 1280px) 1280px, 100vw"
          alt="Onelement Energy technology verticals connecting carbon capture, green hydrogen, methanol production and fuel-cell power"
          loading="lazy"
          decoding="async"
        />
      </Motion.figure>
    </div>
  </section>
);

export default TechnologyVerticals;
