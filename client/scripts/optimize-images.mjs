import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const images = [
  ["../src/assets/shared/OEPL_LARGE_BLUE_TRANSPARENT.png", "../src/assets/shared/OEPL_LARGE_BLUE_TRANSPARENT.webp", 260, true],
  ["../src/assets/shared/OEPL_LARGE_WHITE_TRANSPARENT.png", "../src/assets/shared/OEPL_LARGE_WHITE_TRANSPARENT.webp", 260, true],
  ["../src/assets/technologies/carbonCapture_OEPL.png", "../src/assets/technologies/carbonCapture_OEPL.webp", 1800],
  ["../src/assets/technologies/pemFuelCell_OEPL.png", "../src/assets/technologies/pemFuelCell_OEPL.webp", 1800],
  ["../src/assets/about/technologyVerticals.png", "../src/assets/about/technologyVerticals.webp", 1800],
  ["../src/assets/about/technologyVerticals.png", "../src/assets/about/technologyVerticals-900.webp", 900, false, 82],
  ["../src/assets/about/carbonPipes.jpg", "../src/assets/about/carbonPipes.webp", 1400],
  ["../src/assets/about/carbonPipes.jpg", "../src/assets/about/carbonPipes-700.webp", 700, false, 82],
  ["../src/assets/about/carbonPipes.jpg", "../src/assets/about/carbonPipes-420.webp", 420, false, 80],
  ["../src/assets/about/gh2Tanks.jpg", "../src/assets/about/gh2Tanks.webp", 1400],
  ["../src/assets/about/gh2Tanks.jpg", "../src/assets/about/gh2Tanks-700.webp", 700, false, 82],
  ["../src/assets/about/gh2Tanks.jpg", "../src/assets/about/gh2Tanks-420.webp", 420, false, 80],
  ["../src/assets/about/solarPanelInstall.png", "../src/assets/about/solarPanelInstall.webp", 1400],
  ["../src/assets/about/solarPanelInstall.png", "../src/assets/about/solarPanelInstall-700.webp", 700, false, 82],
  ["../src/assets/about/solarPanelInstall.png", "../src/assets/about/solarPanelInstall-420.webp", 420, false, 80],
  ["../src/assets/about/yellowPipesBuilding.png", "../src/assets/about/yellowPipesBuilding.webp", 1400],
  ["../src/assets/about/yellowPipesBuilding.png", "../src/assets/about/yellowPipesBuilding-700.webp", 700, false, 82],
  ["../src/assets/about/yellowPipesBuilding.png", "../src/assets/about/yellowPipesBuilding-420.webp", 420, false, 80],
  ["../src/assets/about/vision.jpg", "../src/assets/about/vision.webp", 1600],
  ["../src/assets/about/vision.jpg", "../src/assets/about/vision-900.webp", 900, false, 82],
  ["../src/assets/about/mission.jpg", "../src/assets/about/mission.webp", 1800],
  ["../src/assets/about/mission.jpg", "../src/assets/about/mission-900.webp", 900, false, 82],
  ["../src/assets/home/heroTechnologies.jpg", "../src/assets/home/heroTechnologies.webp", 1800],
  ["../src/assets/home/hero-who-we-are.jpg", "../src/assets/home/hero-who-we-are.webp", 1800],
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
