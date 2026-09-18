import { motion as Motion } from "framer-motion";
import bentoOne from "@/assets/AboutImages/About_Bento_1.png";
import bentoTwo from "@/assets/AboutImages/About_Bento_2.png";
import { revealItem } from "../../aboutMotion";

const tiles = [
  { image: bentoOne, label: "Practical engineering" },
  { note: "Purpose-driven deep tech", kicker: "Hyderabad · India", theme: "light" },
  { image: bentoTwo, label: "Scalable systems" },
  { note: "Climate action and economic growth", kicker: "Built together", theme: "dark" }
];

const AboutBento = () => (
  <Motion.div className="about-bento" variants={revealItem}>
    {tiles.map((tile) => (
      <article
        className={`about-bento-card ${tile.note ? `about-bento-note about-bento-note--${tile.theme}` : ""}`}
        key={tile.label || tile.note}
      >
        {tile.image ? (
          <>
            <img src={tile.image} alt="" />
            <div className="about-bento-overlay" />
            <p className="about-bento-label">{tile.label}</p>
          </>
        ) : (
          <>
            <span>{tile.kicker}</span>
            <strong>{tile.note}</strong>
          </>
        )}
      </article>
    ))}
  </Motion.div>
);

export default AboutBento;
