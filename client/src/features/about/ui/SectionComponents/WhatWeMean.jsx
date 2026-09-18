import { motion as Motion } from "framer-motion";
import mission from "@/assets/AboutImages/mission.png";
import vision from "@/assets/AboutImages/vision.png";
import { revealItem, staggerGroup, viewportOnce } from "../aboutMotion";

const beliefs = [
  {
    index: "01",
    title: "Vision",
    image: vision,
    text: "To contribute to the ecosystem by developing and delivering sustainable and reliable technologies in alternative clean energy, energy storage and carbon capture. We provide turnkey solutions and integration process for carbon capture, its storage and utilization. We strive to develop zero emission power systems, for off-grid and auxiliary power applications that can draw us closer to an energy independent society."
  },
  {
    index: "02",
    title: "Mission",
    image: mission,
    text: "Creating a futuristic ecosystem that contributes to sustainable living."
  }
];

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
              <span className="belief-index">{belief.index}</span>
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
