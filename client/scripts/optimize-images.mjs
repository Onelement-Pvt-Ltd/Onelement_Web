import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const images = [
  ["../src/assets/Technologies/carbonCapture_OEPL.png", "../src/assets/Technologies/carbonCapture_OEPL.webp"],
  ["../src/assets/Technologies/penFuelCell_OEPL.png", "../src/assets/Technologies/penFuelCell_OEPL.webp"],
  ["../src/assets/Technologies/gh2Ecosystem_OEPL.png", "../src/assets/Technologies/gh2Ecosystem_OEPL.webp"],
  ["../src/assets/Technologies/eFuel_OEPL.png", "../src/assets/Technologies/eFuel_OEPL.webp"],
  ["../src/assets/About/technologyVerticals.png", "../src/assets/About/technologyVerticals.webp"],
  ["../src/assets/About/carbonPipes.jpg", "../src/assets/About/carbonPipes.webp"],
  ["../src/assets/About/gh2Tanks.jpg", "../src/assets/About/gh2Tanks.webp"],
  ["../src/assets/About/solarPanelInstall.png", "../src/assets/About/solarPanelInstall.webp"],
  ["../src/assets/About/yellowPipesBuilding.png", "../src/assets/About/yellowPipesBuilding.webp"],
  ["../src/assets/About/vision.jpg", "../src/assets/About/vision.webp"],
  ["../src/assets/About/mission.jpg", "../src/assets/About/mission.webp"],
  ["../src/assets/Home/heroTechnologies.jpg", "../src/assets/Home/heroTechnologies.webp"],
  ["../src/assets/Home/hero-who-we-are.jpg", "../src/assets/Home/hero-who-we-are.webp"],
];

for (const [sourceRelative, outputRelative] of images) {
  const source = fileURLToPath(new URL(sourceRelative, import.meta.url));
  const output = fileURLToPath(new URL(outputRelative, import.meta.url));
  const metadata = await sharp(source).metadata();
  await sharp(source)
    .rotate()
    .webp({ quality: 88, effort: 6, smartSubsample: true })
    .toFile(output);

  const [sourceStats, outputStats] = await Promise.all([stat(source), stat(output)]);
  const savedPercent = Math.round((1 - outputStats.size / sourceStats.size) * 100);
  console.log(
    `${sourceRelative} (${metadata.width}x${metadata.height}) -> ${outputRelative}; ${savedPercent}% smaller`,
  );
}
