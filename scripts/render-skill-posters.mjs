import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// `--slug=a,b` limits the run; everything else regenerates. Skill posters
// that were hand-illustrated (oil-motion, director, codex-whiteboard-video,
// lemo-opuscar) are deliberately never listed here — the script would
// overwrite them with a gradient.
const requestedSlugs = new Set(
  process.argv
    .slice(2)
    .filter((arg) => arg.startsWith("--slug="))
    .flatMap((arg) => arg.slice("--slug=".length).split(","))
    .map((slug) => slug.trim())
    .filter(Boolean),
);
const unknownFlags = process.argv
  .slice(2)
  .filter((arg) => arg.startsWith("--") && !arg.startsWith("--slug="));
if (unknownFlags.length > 0) {
  console.error(`Unknown flag(s): ${unknownFlags.join(", ")}`);
  process.exit(1);
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tools = JSON.parse(
  readFileSync(path.join(root, "src/data/tools.json"), "utf8"),
);
const plexWoff2 = path.join(
  root,
  "node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2",
);
const pixelWoff2 = path.join(
  root,
  "node_modules/@fontsource/geist-pixel/files/geist-pixel-latin-400-normal.woff2",
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

function gradientFor(slug) {  // agentskills.me-style previews: one saturated diagonal sweep per card,
  // picked from a fixed palette family so the grid reads as a set (like the
  // reference) instead of the washed-out random pastels this used to emit.
  // The pick is seeded by slug, so a poster is reproducible.
  const rand = mulberry32(seedFrom(slug));
  const palettes = [
    ["#38bdf8", "#818cf8", "#e879f9"], // sky → indigo → fuchsia
    ["#a78bfa", "#6366f1", "#22d3ee"], // violet → indigo → cyan
    ["#22d3ee", "#a78bfa", "#f472b6"], // cyan → violet → pink
    ["#60a5fa", "#c084fc", "#fb7185"], // blue → purple → rose
    ["#2dd4bf", "#38bdf8", "#818cf8"], // teal → sky → indigo
    ["#f472b6", "#a78bfa", "#38bdf8"], // pink → violet → sky
    ["#818cf8", "#e879f9", "#fb7185"], // indigo → fuchsia → rose
    ["#34d399", "#22d3ee", "#818cf8"], // emerald → cyan → indigo
  ];
  const stops = palettes[Math.floor(rand() * palettes.length)];
  const angle = Math.round(105 + rand() * 65);
  return { angle, stops };
}

/**
 * Two-layer structure, agentskills.me-style: a small "npx skills add"
 * label in Geist Pixel on top, and the package path as the big mono line
 * below — the repo path is the part worth reading at grid size.
 */
function htmlFor(install, slug) {
  const { angle, stops } = gradientFor(slug);
  const plexData = readFileSync(plexWoff2).toString("base64");
  const pixelData = readFileSync(pixelWoff2).toString("base64");
  const pkg = install.replace(/^npx skills add\s+/, "");
  const markSize = 48;
  // IBM Plex Mono advances 0.6em plus 0.06em tracking; the package size
  // adapts so even the longest repo path stays inside the 1320px width.
  const cmdSize = Math.min(64, Math.floor(1320 / (pkg.length * 0.66)));
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
@font-face {
  font-family: "IBM Plex Mono";
  font-weight: 500;
  src: url("data:font/woff2;base64,${plexData}") format("woff2");
}
@font-face {
  font-family: "Geist Pixel";
  font-weight: 400;
  src: url("data:font/woff2;base64,${pixelData}") format("woff2");
}
html, body {
  margin: 0;
  width: 1440px;
  height: 810px;
  overflow: hidden;
  background:
    radial-gradient(1100px 700px at 84% 12%, rgba(255, 255, 255, 0.30), transparent 56%),
    radial-gradient(1200px 820px at 10% 90%, rgba(15, 23, 42, 0.20), transparent 62%),
    linear-gradient(${angle}deg, ${stops[0]}, ${stops[1]} 52%, ${stops[2]});
}
.frame {
  width: 1440px;
  height: 810px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 60px;
  box-sizing: border-box;
}
.mark {
  margin: 0;
  color: rgba(15, 23, 42, 0.92);
  font-family: "Geist Pixel", "IBM Plex Mono", ui-monospace, monospace;
  font-size: ${markSize}px;
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1;
  text-align: center;
}
.cmd {
  margin: 40px 0 0;
  color: rgba(15, 23, 42, 0.92);
  font-family: "IBM Plex Mono", ui-monospace, monospace;
  font-size: ${cmdSize}px;
  font-weight: 500;
  letter-spacing: 0.06em;
  line-height: 1.3;
  text-align: center;
}
</style>
</head>
<body>
  <div class="frame">
    <p class="mark">npx skills add</p>
    <p class="cmd">${pkg}</p>
  </div>
</body>
</html>`;
}

function render(tool) {
  const { angle, stops } = gradientFor(tool.slug);
  const htmlPath = path.join(tmpDir, `${tool.slug}.html`);
  const pngPath = path.join(tmpDir, `${tool.slug}.png`);
  const poster = path.join(root, "public", tool.poster.replace(/^\//, ""));
  const grid = poster.replace(/\.webp$/, "-960.webp");
  writeFileSync(htmlPath, htmlFor(tool.install, tool.slug));
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

const skills = tools.filter(
  (tool) =>
    tool.category === "skills" &&
    (requestedSlugs.size === 0 || requestedSlugs.has(tool.slug)),
);
if (requestedSlugs.size > 0) {
  const found = new Set(skills.map((tool) => tool.slug));
  const missing = [...requestedSlugs].filter((slug) => !found.has(slug));
  if (missing.length > 0) {
    console.error(`Unknown skill slug(s): ${missing.join(", ")}`);
    process.exit(1);
  }
}
if (skills.length === 0) {
  console.error("no skills in tools.json");
  process.exit(1);
}
for (const tool of skills) {
  if (!tool.install) {
    console.error(`missing install for ${tool.slug}`);
    process.exit(1);
  }
  render(tool);
}
