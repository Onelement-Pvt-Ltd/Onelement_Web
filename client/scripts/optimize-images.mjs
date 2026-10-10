import { stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const images = [
  ["../src/assets/AboutImages/About_Bento_1.png", "../src/assets/AboutImages/About_Bento_1.webp"],
  ["../src/assets/AboutImages/About_Bento_2.png", "../src/assets/AboutImages/About_Bento_2.webp"],
  ["../src/assets/BlogImages/Blog1.png", "../src/assets/BlogImages/Blog1.webp"],
  ["../src/assets/AboutImages/vision.png", "../src/assets/AboutImages/vision.webp"],
  ["../src/assets/AboutImages/mission.png", "../src/assets/AboutImages/mission.webp"],
];

for (const [sourceRelative, outputRelative] of images) {
  const source = fileURLToPath(new URL(sourceRelative, import.meta.url));
  const output = fileURLToPath(new URL(outputRelative, import.meta.url));
  const metadata = await sharp(source).metadata();
  await sharp(source)
    .rotate()
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(output);

  const [sourceStats, outputStats] = await Promise.all([stat(source), stat(output)]);
  const savedPercent = Math.round((1 - outputStats.size / sourceStats.size) * 100);
  console.log(
    `${sourceRelative} (${metadata.width}x${metadata.height}) -> ${outputRelative}; ${savedPercent}% smaller`,
  );
}
