import { motion as Motion } from "framer-motion";
import carbonPipes from "@/assets/About/carbonPipes.webp";
import carbonPipesSmall from "@/assets/About/carbonPipes-700.webp";
import carbonPipesMobile from "@/assets/About/carbonPipes-420.webp";
import gh2Tanks from "@/assets/About/gh2Tanks.webp";
import gh2TanksSmall from "@/assets/About/gh2Tanks-700.webp";
import gh2TanksMobile from "@/assets/About/gh2Tanks-420.webp";
import solarPanelInstall from "@/assets/About/solarPanelInstall.webp";
import solarPanelInstallSmall from "@/assets/About/solarPanelInstall-700.webp";
import solarPanelInstallMobile from "@/assets/About/solarPanelInstall-420.webp";
import yellowPipesBuilding from "@/assets/About/yellowPipesBuilding.webp";
import yellowPipesBuildingSmall from "@/assets/About/yellowPipesBuilding-700.webp";
import yellowPipesBuildingMobile from "@/assets/About/yellowPipesBuilding-420.webp";
import { revealItem } from "../../aboutMotion";

const tiles = [
  {
    image: carbonPipes,
    imageSmall: carbonPipesSmall,
    imageMobile: carbonPipesMobile,
    imageWidth: 1400,
    kicker: "Infrastructure for impact",
    label: "Practical engineering",
    alt: "Carbon transport pipes in an industrial facility",
    width: 2847,
    height: 3744
  },
  {
    image: gh2Tanks,
    imageSmall: gh2TanksSmall,
    imageMobile: gh2TanksMobile,
    imageWidth: 952,
    kicker: "Hydrogen at scale",
    label: "Purpose-driven deep tech",
    alt: "Green hydrogen storage tanks at an energy facility",
    width: 952,
    height: 767
  },
  {
    image: solarPanelInstall,
    imageSmall: solarPanelInstallSmall,
    imageMobile: solarPanelInstallMobile,
    imageWidth: 1086,
    kicker: "Powering progress",
    label: "Scalable systems",
    alt: "Solar panels being installed",
    width: 1086,
    height: 1448
  },
  {
    image: yellowPipesBuilding,
    imageSmall: yellowPipesBuildingSmall,
    imageMobile: yellowPipesBuildingMobile,
    imageWidth: 1122,
    kicker: "Built together",
    label: "Climate action and economic growth",
    alt: "Yellow industrial pipes running along a building",
    width: 1122,
    height: 1402
  }
];

const AboutBento = () => (
  <Motion.div className="about-bento" variants={revealItem}>
    {tiles.map((tile, index) => (
      <article className="about-bento-card" key={tile.label}>
        <img
          src={tile.image}
          srcSet={`${tile.imageMobile} 420w, ${tile.imageSmall} 700w, ${tile.image} ${tile.imageWidth}w`}
          sizes="(min-width: 901px) 22vw, 46vw"
          alt={tile.alt}
          width={tile.width}
          height={tile.height}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
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
