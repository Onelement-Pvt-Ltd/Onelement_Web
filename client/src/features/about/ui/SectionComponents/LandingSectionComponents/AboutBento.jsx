import { motion as Motion } from "framer-motion";
import carbonPipes from "@/assets/About/carbonPipes.jpg";
import gh2Tanks from "@/assets/About/gh2Tanks.jpg";
import solarPanelInstall from "@/assets/About/solarPanelInstall.png";
import yellowPipesBuilding from "@/assets/About/yellowPipesBuilding.png";
import { revealItem } from "../../aboutMotion";

const tiles = [
  {
    image: carbonPipes,
    kicker: "Infrastructure for impact",
    label: "Practical engineering",
    alt: "Carbon transport pipes in an industrial facility",
    width: 2847,
    height: 3744
  },
  {
    image: gh2Tanks,
    kicker: "Hydrogen at scale",
    label: "Purpose-driven deep tech",
    alt: "Green hydrogen storage tanks at an energy facility",
    width: 952,
    height: 767
  },
  {
    image: solarPanelInstall,
    kicker: "Powering progress",
    label: "Scalable systems",
    alt: "Solar panels being installed",
    width: 1086,
    height: 1448
  },
  {
    image: yellowPipesBuilding,
    kicker: "Built together",
    label: "Climate action and economic growth",
    alt: "Yellow industrial pipes running along a building",
    width: 1122,
    height: 1402
  }
];

const AboutBento = () => (
  <Motion.div className="about-bento" variants={revealItem}>
    {tiles.map((tile) => (
      <article className="about-bento-card" key={tile.label}>
        <img
          src={tile.image}
          alt={tile.alt}
          width={tile.width}
          height={tile.height}
          loading="lazy"
          decoding="async"
        />
        <div className="about-bento-overlay" aria-hidden="true" />
        <div className="about-bento-label">
          {tile.kicker && <span>{tile.kicker}</span>}
          <strong>{tile.label}</strong>
        </div>
      </article>
    ))}
  </Motion.div>
);

export default AboutBento;
