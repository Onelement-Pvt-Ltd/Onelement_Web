import { motion as Motion } from "framer-motion";
import { revealItem, staggerGroup, viewportOnce } from "../aboutMotion";
import { beliefs } from "./utils/whatWeMeanData";

const WhatWeMean = () => (
  <section id="what-we-mean" className="about-beliefs about-section scroll-mt-24">
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
              <img
                src={belief.image}
                srcSet={`${belief.imageSmall} 900w, ${belief.image} ${belief.imageWidth}w`}
                sizes="(min-width: 901px) 42vw, calc(100vw - 1.25rem)"
                alt={`${belief.title} at Onelement Energy`}
                loading="lazy"
                decoding="async"
              />
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
