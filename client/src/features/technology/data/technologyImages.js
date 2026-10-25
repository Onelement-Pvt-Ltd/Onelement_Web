import carbonCaptureImage from "@/assets/technologies/carbonCapture_OEPL.webp";
import pemFuelCellImage from "@/assets/technologies/pemFuelCell_OEPL.webp";
import gh2Image from "@/assets/technologies/gh2Ecosystem_OEPL.webp";
import eFuelImage from "@/assets/technologies/eFuel_OEPL.webp";

const technologyImages = {
  "carbon-capture": carbonCaptureImage,
  "pem-fuel-cell": pemFuelCellImage,
  gh2: gh2Image,
  efuel: eFuelImage,
};

const technologyOrder = ["carbon-capture", "efuel", "pem-fuel-cell", "gh2"];
const technologyRanks = new Map(
  technologyOrder.map((slug, index) => [slug, index])
);

export const getTechnologyImage = (slug, fallback) =>
  technologyImages[slug] || fallback;

export const sortTechnologies = (technologies = []) =>
  [...technologies].sort(
    (first, second) =>
      (technologyRanks.get(first.slug) ?? Number.MAX_SAFE_INTEGER) -
      (technologyRanks.get(second.slug) ?? Number.MAX_SAFE_INTEGER)
  );
