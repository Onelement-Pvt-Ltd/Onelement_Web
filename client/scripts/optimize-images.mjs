import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const images = [
  ["../src/assets/shared/OEPL_LARGE_BLUE_TRANSPARENT.png", "../src/assets/shared/OEPL_LARGE_BLUE_TRANSPARENT.webp", 260, true],
  ["../src/assets/shared/OEPL_LARGE_WHITE_TRANSPARENT.png", "../src/assets/shared/OEPL_LARGE_WHITE_TRANSPARENT.webp", 260, true],
  ["../src/assets/Technologies/carbonCapture_OEPL.png", "../src/assets/Technologies/carbonCapture_OEPL.webp", 1800],
  ["../src/assets/Technologies/pemFuelCell_OEPL.png", "../src/assets/Technologies/pemFuelCell_OEPL.webp", 1800],
  ["../src/assets/Technologies/gh2Ecosystem_OEPL.png", "../src/assets/Technologies/gh2Ecosystem_OEPL.webp", 1800],
  ["../src/assets/Technologies/eFuel_OEPL.png", "../src/assets/Technologies/eFuel_OEPL.webp", 1800],
  ["../src/assets/About/technologyVerticals.png", "../src/assets/About/technologyVerticals.webp", 1800],
  ["../src/assets/About/technologyVerticals.png", "../src/assets/About/technologyVerticals-900.webp", 900, false, 82],
  ["../src/assets/About/carbonPipes.jpg", "../src/assets/About/carbonPipes.webp", 1400],
  ["../src/assets/About/carbonPipes.jpg", "../src/assets/About/carbonPipes-700.webp", 700, false, 82],
  ["../src/assets/About/carbonPipes.jpg", "../src/assets/About/carbonPipes-420.webp", 420, false, 80],
  ["../src/assets/About/gh2Tanks.jpg", "../src/assets/About/gh2Tanks.webp", 1400],
  ["../src/assets/About/gh2Tanks.jpg", "../src/assets/About/gh2Tanks-700.webp", 700, false, 82],
  ["../src/assets/About/gh2Tanks.jpg", "../src/assets/About/gh2Tanks-420.webp", 420, false, 80],
  ["../src/assets/About/solarPanelInstall.png", "../src/assets/About/solarPanelInstall.webp", 1400],
  ["../src/assets/About/solarPanelInstall.png", "../src/assets/About/solarPanelInstall-700.webp", 700, false, 82],
  ["../src/assets/About/solarPanelInstall.png", "../src/assets/About/solarPanelInstall-420.webp", 420, false, 80],
  ["../src/assets/About/yellowPipesBuilding.png", "../src/assets/About/yellowPipesBuilding.webp", 1400],
  ["../src/assets/About/yellowPipesBuilding.png", "../src/assets/About/yellowPipesBuilding-700.webp", 700, false, 82],
  ["../src/assets/About/yellowPipesBuilding.png", "../src/assets/About/yellowPipesBuilding-420.webp", 420, false, 80],
  ["../src/assets/About/vision.jpg", "../src/assets/About/vision.webp", 1600],
  ["../src/assets/About/vision.jpg", "../src/assets/About/vision-900.webp", 900, false, 82],
  ["../src/assets/About/mission.jpg", "../src/assets/About/mission.webp", 1800],
  ["../src/assets/About/mission.jpg", "../src/assets/About/mission-900.webp", 900, false, 82],
  ["../src/assets/Home/heroTechnologies.jpg", "../src/assets/Home/heroTechnologies.webp", 1800],
  ["../src/assets/Home/hero-who-we-are.jpg", "../src/assets/Home/hero-who-we-are.webp", 1800],
];

for (const [sourceRelative, outputRelative, maxWidth, lossless = false, quality = 86] of images) {
  const source = fileURLToPath(new URL(sourceRelative, import.meta.url));
  const output = fileURLToPath(new URL(outputRelative, import.meta.url));
  const metadata = await sharp(source).metadata();
  await sharp(source)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp(lossless
      ? { lossless: true, effort: 6 }
      : { quality, effort: 6, smartSubsample: true })
    .toFile(output);

  const [sourceStats, outputStats] = await Promise.all([stat(source), stat(output)]);
  const savedPercent = Math.round((1 - outputStats.size / sourceStats.size) * 100);
  console.log(
    `${sourceRelative} (${metadata.width}x${metadata.height}) -> ${outputRelative}; ${savedPercent}% smaller`,
  );
}
