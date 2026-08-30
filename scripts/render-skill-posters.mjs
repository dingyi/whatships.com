import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tools = JSON.parse(
  readFileSync(path.join(root, "src/data/tools.json"), "utf8"),
);
const plexWoff2 = path.join(
  root,
  "node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2",
);
const tmpDir = "/tmp/skill-posters";
mkdirSync(tmpDir, { recursive: true });

function mulberry32(seed) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function seedFrom(slug) {
  const buf = createHash("sha256").update(slug).digest();
  return buf.readUInt32LE(0);
}

function hsl(h, s, l) {
  return `hsl(${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%)`;
}

function gradientFor(slug, index) {
  const rand = mulberry32(seedFrom(slug));
  const hue = (rand() * 48 + index * 78) % 360;
  const spread = 42 + rand() * 38;
  const hue2 = (hue + spread) % 360;
  const hue3 = (hue + 180 + rand() * 24) % 360;
  const sat = 38 + rand() * 16;
  const lightA = 58 + rand() * 8;
  const lightB = 84 + rand() * 6;
  const lightC = 52 + rand() * 8;
  const angle = Math.round(24 + rand() * 48);
  return {
    angle,
    stops: [
      hsl(hue, sat, lightA),
      hsl(hue3, sat - 10, lightB),
      hsl(hue2, sat + 4, lightC),
    ],
  };
}

function htmlFor(install, slug, index) {
  const { angle, stops } = gradientFor(slug, index);
  const fontData = readFileSync(plexWoff2).toString("base64");
  const pkg = install.replace(/^npx skills add\s+/, "");
  const size = pkg.length > 32 ? 56 : 64;
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
@font-face {
  font-family: "IBM Plex Mono";
  font-weight: 500;
  src: url("data:font/woff2;base64,${fontData}") format("woff2");
}
html, body {
  margin: 0;
  width: 1440px;
  height: 810px;
  overflow: hidden;
  background:
    radial-gradient(1200px 720px at 16% 12%, ${stops[0]}, transparent 58%),
    radial-gradient(1100px 780px at 88% 86%, ${stops[2]}, transparent 62%),
    linear-gradient(${angle}deg, ${stops[0]}, ${stops[1]} 52%, ${stops[2]});
  font-family: "IBM Plex Mono", ui-monospace, monospace;
}
.frame {
  width: 1440px;
  height: 810px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
  box-sizing: border-box;
}
.cmd {
  margin: 0;
  color: rgba(24, 24, 28, 0.88);
  font-size: ${size}px;
  font-weight: 500;
  letter-spacing: 0.01em;
  line-height: 1.28;
  text-align: center;
  white-space: pre-line;
}
</style>
</head>
<body>
  <div class="frame">
    <p class="cmd">npx skills add
${pkg}</p>
  </div>
</body>
</html>`;
}

function render(tool, index) {
  const htmlPath = path.join(tmpDir, `${tool.slug}.html`);
  const pngPath = path.join(tmpDir, `${tool.slug}.png`);
  const poster = path.join(root, "public", tool.poster.replace(/^\//, ""));
  const grid = poster.replace(/\.webp$/, "-960.webp");
  writeFileSync(htmlPath, htmlFor(tool.install, tool.slug, index));
  execFileSync(
    "chromium",
    [
      "--headless",
      "--disable-gpu",
      "--hide-scrollbars",
      "--allow-file-access-from-files",
      "--window-size=1440,810",
      `--screenshot=${pngPath}`,
      `file://${htmlPath}`,
    ],
    { stdio: "ignore" },
  );
  execFileSync("ffmpeg", [
    "-y",
    "-i",
    pngPath,
    "-c:v",
    "libwebp",
    "-quality",
    "82",
    poster,
  ], { stdio: "ignore" });
  execFileSync("ffmpeg", [
    "-y",
    "-i",
    poster,
    "-vf",
    "scale=960:540",
    "-c:v",
    "libwebp",
    "-quality",
    "82",
    grid,
  ], { stdio: "ignore" });
  console.log(`wrote ${tool.slug}`);
}

const skills = tools.filter((tool) => tool.category === "skills");
if (skills.length === 0) {
  console.error("no skills in tools.json");
  process.exit(1);
}
for (const [i, tool] of skills.entries()) {
  if (!tool.install) {
    console.error(`missing install for ${tool.slug}`);
    process.exit(1);
  }
  render(tool, i);
}
