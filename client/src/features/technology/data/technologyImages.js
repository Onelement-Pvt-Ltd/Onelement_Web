import carbonCaptureImage from "@/assets/Technologies/carbonCapture_OEPL.png";
import pemFuelCellImage from "@/assets/Technologies/penFuelCell_OEPL.png";
import gh2Image from "@/assets/Technologies/gh2Ecosystem_OEPL.png";
import eFuelImage from "@/assets/Technologies/eFuel_OEPL.png";

const technologyImages = {
  "carbon-capture": carbonCaptureImage,
  "pem-fuel-cell": pemFuelCellImage,
  gh2: gh2Image,
  efuel: eFuelImage,
};

export const getTechnologyImage = (slug, fallback) =>
  technologyImages[slug] || fallback;
