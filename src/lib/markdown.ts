import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  CATEGORIES,
  categoryLabel,
  formatDuration,
  formatPublishedAt,
  publishedVideos,
  type LaunchVideo,
} from "@/lib/catalog";
import {
  GITHUB_ISSUES,
  GITHUB_REPO,
  HOMEPAGE_INTRO,
  NOT_FOUND_MARKDOWN,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  WHEN_TO_USE,
} from "@/lib/site";
import { publishedStudios, studioKindLabel } from "@/lib/studios";
import { publishedTools, toolCategoryLabel } from "@/lib/tools";

const RECENT_COUNT = 40;

function pageUrl(pathname: string): string {
  return new URL(pathname, `${SITE_URL}/`).toString();
}

export function homepageMarkdown(videos: LaunchVideo[] = publishedVideos): string {
  const recent = videos.slice(0, RECENT_COUNT);
  const lines = [
    `# ${SITE_NAME} — ${SITE_TAGLINE}`,
    "",
    SITE_DESCRIPTION,
    "",
    HOMEPAGE_INTRO,
    "",
    "## When to use whatships.com",
    "",
    WHEN_TO_USE,
    "",
    "## Latest launch videos",
    "",
    ...recent.map(
      (video) =>
        `- [${video.title}](${pageUrl(`/videos/${video.slug}/`)}) — ${video.company}, ${categoryLabel(video.category)}, ${formatPublishedAt(video.publishedAt)}`,
    ),
    "",
    "## Pages",
    "",
    `- [About](${pageUrl("/about/")})`,
    `- [Contact](${pageUrl("/contact/")})`,
    `- [Privacy](${pageUrl("/privacy/")})`,
    `- [Developers](${pageUrl("/developers/")})`,
    `- [Tools](${pageUrl("/tools/")})`,
    `- [Studios](${pageUrl("/studios/")})`,
    `- [Submit](${pageUrl("/submit/")})`,
    `- [llms.txt](${pageUrl("/llms.txt")})`,
    `- [OpenAPI](${pageUrl("/openapi.json")})`,
    `- [Sitemap](${pageUrl("/sitemap.xml")})`,
    "",
  ];
  return lines.join("\n");
}

export function videoMarkdown(video: LaunchVideo): string {
  const duration = formatDuration(video.durationSeconds);
  const facts = [
    `- Product: ${video.product}`,
    `- Company: ${video.company}`,
    `- Category: ${categoryLabel(video.category)}`,
    `- Published: ${formatPublishedAt(video.publishedAt)}`,
  ];
  if (duration) facts.push(`- Duration: ${duration}`);
  facts.push(
    `- Author: [@${video.authorHandle.replace(/^@/, "")}](https://x.com/${video.authorHandle.replace(/^@/, "")})`,
    `- Original X post: ${video.tweetUrl}`,
    `- Directory entry: ${pageUrl(`/videos/${video.slug}/`)}`,
  );
  if (video.tags.length) facts.push(`- Tags: ${video.tags.join(", ")}`);

  return [
    `# ${video.title}`,
    "",
    video.description ||
      `${video.title} is a product launch video from ${video.company}, indexed on ${SITE_NAME}.`,
    "",
    ...facts,
    "",
    SITE_DESCRIPTION,
    "",
  ].join("\n");
}

export function aboutMarkdown(): string {
  return `# About ${SITE_NAME}

${SITE_DESCRIPTION}

## Why we built it

Great launch videos disappear into timelines within hours. ${SITE_NAME} keeps a durable, searchable index so you can study how products announce themselves — and jump straight to the original post on X.

## What belongs in the index?

A video is published when it is clearly a product launch, demo, or first-look walkthrough with a public X post. Entries store product metadata, category, poster art, and a link back to the original tweet. Draft records stay offline until review.

## Curation and submissions

The catalog is curated first. Anyone can propose a launch via the [Submit](${pageUrl("/submit/")}) form, which opens a prefilled GitHub issue for review. Approved entries are added to \`src/data/videos.json\` and published on the next site build.

## Independence

${SITE_NAME} is not affiliated with X/Twitter or the products shown. Names, trademarks, and video content remain the property of their respective owners. Every profile links to the original post.

## Contact and policies

- [Contact](${pageUrl("/contact/")})
- [Privacy](${pageUrl("/privacy/")})
- [Developers](${pageUrl("/developers/")})
`;
}

export function contactMarkdown(): string {
  return `# Contact ${SITE_NAME}

${SITE_NAME} is a small independent directory. There is no sales team, phone line, or walk-in office. Editorial and catalog questions go through public GitHub issues so the trail stays visible.

## Editorial and catalog questions

Open an issue on [${GITHUB_REPO.replace("https://github.com/", "")}](${GITHUB_ISSUES}) if you need a correction, a takedown discussion, or a question about how an entry was curated. Include the video slug or original X URL.

## Submit a launch video

Use the [Submit](${pageUrl("/submit/")}) form to propose a product launch film, demo, or walkthrough. The form validates a public X status URL and opens a prefilled GitHub issue. Nothing is published until a human reviews it.

## Developer resources

Agents and integrators should start at [whatships.com developer resources](${pageUrl("/developers/")}), which lists the OpenAPI spec, search index, llms.txt, and markdown negotiation. The project source is ${GITHUB_REPO}.

${SITE_NAME} does not run paid placement, affiliate rankings, or a public write API.
`;
}

export function privacyMarkdown(): string {
  return `# Privacy — ${SITE_NAME}

${SITE_NAME} is a static public directory. It does not offer user accounts, comments, or a logged-in area. Visiting the site does not create a member profile.

## What we publish

Catalog pages show product names, companies, categories, locally captured poster frames, and links to public X posts that the authors already shared. Submissions arrive as GitHub issues on ${GITHUB_REPO}; GitHub's privacy policy applies to that flow.

## Analytics

The HTML site loads privacy-friendly Plausible analytics from \`data.dex.group\`. It is used to count page views. It is not used to build advertising profiles, and the site does not set a first-party analytics cookie for that script.

## Video playback

In-site playback fetches the original media through \`proxy.whatships.com\` so browsers can play files that X's CDN otherwise blocks by Referer. The proxy exists to display a video you already chose to watch; it is not a tracking pixel.

## What we do not do

We do not sell personal data, run ads, or take paid placement in the directory. We do not require an email address to browse. If you want an entry corrected or removed, use [Contact](${pageUrl("/contact/")}).

Last updated: 23 August 2026.
`;
}

export function developersMarkdown(): string {
  const categoryList = CATEGORIES.map((item) => `\`${item.id}\``).join(", ");
  return `# ${SITE_NAME} developer resources

Machine-readable access to the ${SITE_NAME} launch-video catalog. No authentication, webhooks, or MCP server — the directory is a static site with public JSON, markdown negotiation, and an OpenAPI description.

## When to use these resources

Use them when an agent or app needs to look up a launch video by product or company name, list recent launches, or cite the original X post. Start with [llms.txt](${pageUrl("/llms.txt")}) for the map, then call the URLs below.

## Endpoints

- [OpenAPI spec](${pageUrl("/openapi.json")}) — machine-readable catalog API description
- [Search index](${pageUrl("/search-index.json")}) — compact title/company/slug index for client search
- [Sitemap](${pageUrl("/sitemap.xml")}) — every indexable HTML page
- [llms.txt](${pageUrl("/llms.txt")}) — agent instructions and when-to-use guidance
- HTML pages also serve \`text/markdown\` when the request \`Accept\` header prefers it (\`Vary: Accept, Accept-Encoding\`)

## Catalog fields

Each launch video has a stable \`slug\` used at \`/videos/{slug}/\`. Published records include title, product, company, description, category (${categoryList}), tags, original X URL, author handle, poster path, publish date, and duration.

## Cite

When referencing a launch, cite the product name and link the original X post shown on the video page; link ${SITE_NAME} for the directory entry. Source: ${GITHUB_REPO}.
`;
}

export function toolsMarkdown(): string {
  const lines = [
    `# Tools for making launch videos — ${SITE_NAME}`,
    "",
    "A curated set of editors, motion tools, and mockup tools for product films.",
    "",
    ...publishedTools.map(
      (tool) =>
        `- [${tool.name}](${tool.url}) — ${tool.tagline} (${toolCategoryLabel(tool.category)})`,
    ),
    "",
  ];
  return lines.join("\n");
}

export function studiosMarkdown(): string {
  const lines = [
    `# Studios that make launch videos — ${SITE_NAME}`,
    "",
    "Motion studios and independent designers that specialize in product launch films.",
    "",
    ...publishedStudios.map(
      (studio) =>
        `- [${studio.name}](${studio.url}) — ${studio.tagline} (${studioKindLabel(studio.kind)})`,
    ),
    "",
  ];
  return lines.join("\n");
}

export function submitMarkdown(): string {
  return `# Submit a launch video — ${SITE_NAME}

Propose a product launch video from X for editorial review. The public form at ${pageUrl("/submit/")} validates a status URL and opens a GitHub issue on ${GITHUB_REPO.replace("https://github.com/", "")}. Approved entries are merged into the catalog on the next build. There is no unmoderated write API.
`;
}

export function notFoundMarkdown(): string {
  return NOT_FOUND_MARKDOWN;
}

export async function writeMarkdownAssets(distDir: string | URL): Promise<void> {
  const root = typeof distDir === "string" ? distDir : fileURLToPath(distDir);
  const files = new Map<string, string>([
    ["index.md", homepageMarkdown()],
    ["about/index.md", aboutMarkdown()],
    ["contact/index.md", contactMarkdown()],
    ["privacy/index.md", privacyMarkdown()],
    ["developers/index.md", developersMarkdown()],
    ["tools/index.md", toolsMarkdown()],
    ["studios/index.md", studiosMarkdown()],
    ["submit/index.md", submitMarkdown()],
  ]);
  for (const video of publishedVideos) {
    files.set(`videos/${video.slug}/index.md`, videoMarkdown(video));
  }
  for (const [relative, body] of files) {
    const full = path.join(root, relative);
    await mkdir(path.dirname(full), { recursive: true });
    await writeFile(full, body, "utf8");
  }
}
