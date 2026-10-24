import { motion as Motion } from "framer-motion";
import { revealItem, staggerGroup, viewportOnce } from "../aboutMotion";
import { beliefs } from "./utils/whatWeMeanData";

const WhatWeMean = () => (
  <section className="about-beliefs about-section">
    <div className="about-shell">
      <Motion.header
        className="about-beliefs-intro"
        variants={staggerGroup}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        <Motion.div variants={revealItem}>
          <p className="about-eyebrow">What we mean</p>
          <h2 className="about-heading">Our vision and mission</h2>
        </Motion.div>
        <Motion.p className="about-copy" variants={revealItem}>
          Discover the principles that guide our innovation and commitment
          towards building sustainable technologies for a cleaner tomorrow.
        </Motion.p>
      </Motion.header>

      <div className="belief-grid">
        {beliefs.map((belief) => (
          <Motion.article
            className="belief-row"
            key={belief.title}
            variants={staggerGroup}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <Motion.div className="belief-media" variants={revealItem}>
              <img src={belief.image} alt={`${belief.title} at Onelement Energy`} loading="lazy" />
            </Motion.div>
            <Motion.div className="belief-card" variants={revealItem}>
              <h3>{belief.title}</h3>
              <p>{belief.text}</p>
            </Motion.div>
          </Motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeMean;
