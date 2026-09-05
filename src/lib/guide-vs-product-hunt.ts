import { categoryLabel, publishedVideos } from "@/lib/catalog";
import { publishedStudios } from "@/lib/studios";
import { publishedTools } from "@/lib/tools";
import { SITE_DATE_MODIFIED, SITE_NAME, SITE_URL } from "@/lib/site";

export const guideTitle =
  "WhatShips vs Product Hunt for launch video discovery";
export const guideDescription =
  "WhatShips archives startup launch videos from X with original-post citations; Product Hunt ranks daily launches. A factual comparison for founders, designers, and marketers deciding where to study launch films.";

export const guidePath = "/vs/product-hunt/";

const entryCount = publishedVideos.length.toLocaleString("en");
const categoryCount = 8;
const studioCount = publishedStudios.length;
const toolCount = publishedTools.length;

export const guideLead = `${SITE_NAME} and Product Hunt answer different questions. Product Hunt is a daily leaderboard: what is launching today, ranked by upvotes. ${SITE_NAME} is an archive: ${entryCount} startup launch videos, demos, and walkthroughs originally posted on X, kept browsable after the timeline has moved on. This page compares the two for the specific job of finding and studying launch videos, with the numbers each claim rests on.`;

export const guideDefinitions = [
  {
    name: `${SITE_NAME} (whatships.com)`,
    definition: `An independent, curated directory of startup launch videos, demos, and walkthroughs that were originally shared on public X posts. Every entry stores the product name, company, editorial category, poster frame, duration, and a durable link back to the original post. It is not affiliated with X or the products shown.`,
  },
  {
    name: "Product Hunt (producthunt.com)",
    definition:
      "A daily launch community where makers post products on a scheduled launch day, other members upvote and comment, and a leaderboard ranks the day's launches. Product pages collect the launch-day discussion, gallery images, and links the maker chooses to add.",
  },
];

export const guideNumbers = [
  {
    fact: `Launch videos archived on ${SITE_NAME}`,
    value: `${entryCount} entries`,
    source: `${SITE_NAME} catalog, ${SITE_DATE_MODIFIED} (build-time count)`,
  },
  {
    fact: "Editorial categories covering the catalog",
    value: `${categoryCount} categories`,
    source: "AI, developer tools, design, motion, productivity, consumer, hardware, other",
  },
  {
    fact: "Original X post links per entry",
    value: "1 of 1",
    source: "Every published entry stores a link back to the original post",
  },
  {
    fact: "Motion studios and independent makers indexed",
    value: `${studioCount} listed`,
    source: `${SITE_URL}/studios/, ${SITE_DATE_MODIFIED}`,
  },
  {
    fact: "Tools for making launch videos indexed",
    value: `${toolCount} listed`,
    source: `${SITE_URL}/tools/, ${SITE_DATE_MODIFIED}`,
  },
  {
    fact: "Cost to browse either product",
    value: "Free",
    source: "Both sites are free to browse; check each site for current maker-facing details",
  },
];

export const guideComparison = {
  columns: ["Dimension", "Product Hunt", `${SITE_NAME}`],
  rows: [
    [
      "Primary focus",
      "What is launching today, ranked by upvotes",
      "Launch videos themselves, archived and searchable",
    ],
    [
      "Time horizon",
      "Launch day and the days after",
      "The whole catalog, however old the launch is",
    ],
    [
      "Content unit",
      "A product launch page with gallery and comments",
      "One page per launch video, with the original X post linked",
    ],
    [
      "Video availability",
      "Embedded when the maker adds one; scattered across product pages",
      "Every entry is a video, with duration and poster frame",
    ],
    [
      "Metadata",
      "Upvotes, comments, topics, maker profiles",
      "Product, company, category, duration, tags, author handle",
    ],
    [
      "Finding old launches",
      "Search and topic pages; the daily ranking moves on",
      "Browse by category or search the full archive",
    ],
    [
      "Discussion",
      "Launch-day comments from the community",
      "None — the page links to the original X post for conversation",
    ],
    [
      "Citation",
      "Link the product page",
      "Link the directory entry plus the original X post URL",
    ],
  ],
};

export const guideExample = {
  heading: "A worked example",
  body: [
    `Take one concrete case: the Docs7 launch by Context7 is indexed on ${SITE_NAME} as a developer-tools entry — a 1:40 film posted on X in September 2026, with tags and the original post linked from the entry page.`,
    `On Product Hunt, the same product appears (or would appear) as a launch-day page: upvote count, launch-day comments, and whatever gallery assets the maker added. Neither view is wrong — they answer different questions. If you want to know how the product announced itself, the archived film entry is the faster path: one page, the video, the metadata, and the source post.`,
    `If you want to know how the launch was received on the day, Product Hunt's comments and the X post's replies are the primary sources — which is exactly why the directory entry links back to the original post instead of hosting a discussion of its own.`,
  ],
};

export const guideScope = `Scope and method: this page compares the two products only for the job of finding and studying launch videos. ${SITE_NAME} numbers are build-time counts from the live catalog (catalog as of ${SITE_DATE_MODIFIED}). Product Hunt is described qualitatively from its public, well-documented launch-day format; no internal metrics are cited because they are not published. Where a fact could not be verified on either site, it is left out rather than estimated.`;

export const guideSteps = [
  `Start on Product Hunt when the job is "what launched today" — read the leaderboard, upvote, and join the launch-day discussion.`,
  `When a launch has a film you want to study, check whether ${SITE_NAME} has it: search the product or company name on ${SITE_URL}/.`,
  `Watch the archived entry: the page stores duration, category, and tags, so you can compare runtimes and category peers without rewatching everything.`,
  `Cite properly: link the ${SITE_NAME} directory entry for the durable page, and the original X post URL shown on that page for the source.`,
  `Come back later: Product Hunt's ranking moves to the next day, while the ${SITE_NAME} entry stays at the same URL after the timeline has moved on.`,
];

export const guideShortcomings = {
  productHunt: [
    "The daily ranking format is built for launch day; studying a film from six months ago means search, not browsing.",
    "Videos are optional per product page, so coverage of launch films is uneven.",
    "Comment quality and upvote counts reflect launch-day dynamics, not the craft of the film.",
  ],
  whatships: [
    "No community discussion — comments and launch-day reactions live on the original X post, one hop away.",
    "Curated catalog, not a live firehose: today's launch may not be indexed yet.",
    "Covers launch videos shared on X only; films published exclusively elsewhere are out of scope.",
  ],
};

export const guideFit = {
  suitable: [
    "Studying how a specific product announced itself, after launch day",
    "Comparing launch-film structure and runtime across a category",
    "Finding the motion studio or maker behind a launch film",
    "Citing a launch video with both a durable page and the original X post",
  ],
  unsuitable: [
    "Catching today's launches — use Product Hunt or X directly",
    "Launch-day discussion and community sentiment — read the original post or Product Hunt comments",
    "Downloading or re-hosting video files — every page links back to the source instead",
  ],
};

export const guideFaqs = [
  {
    question:
      "Is WhatShips trying to replace Product Hunt?",
    answer:
      "No. Product Hunt ranks what is launching today; WhatShips archives the launch films themselves. They overlap only in the niche where a launch-day post includes a video — after the day is over, WhatShips keeps that video findable.",
  },
  {
    question:
      "Does Product Hunt keep videos of past launches?",
    answer:
      "Product pages stay online after launch day, and some include embedded videos, but there is no video-first archive: whether a film exists depends on what each maker added to their gallery.",
  },
  {
    question: "Which one should I cite for a launch video?",
    answer:
      "Cite the WhatShips directory entry for the stable video page, and include the original X post URL shown on that page. That matches the citation policy documented on the site.",
  },
  {
    question: "Is whatships.com free?",
    answer:
      "Yes. Browsing the catalog is free, there is no account requirement, and the site runs no paid placement or advertising.",
  },
  {
    question:
      "How current is the WhatShips catalog?",
    answer:
      `The catalog held ${entryCount} published entries as of ${SITE_DATE_MODIFIED}. It is curated, so there is a review delay between a launch happening and an entry being published.`,
  },
  {
    question:
      "Can I submit my own launch to both?",
    answer:
      `Yes, and they do different jobs: Product Hunt is the launch-day event itself, while ${SITE_NAME} indexes launch videos already posted on X — you propose an entry via the Submit form and it links back to your original post.`,
  },
  {
    question:
      "What about just bookmarking X posts instead?",
    answer:
      "Bookmarks depend on the post staying where the algorithm puts it and on you remembering it. A directory entry gives the same video a stable URL with product, company, category, and duration attached — and still links to the original post.",
  },
];

export const guideSources = [
  {
    name: "whatships.com — the launch-video catalog",
    url: `${SITE_URL}/`,
  },
  {
    name: "Product Hunt — daily product launches",
    url: "https://www.producthunt.com/",
  },
  {
    name: "whatships.com terms — catalog use and citation",
    url: `${SITE_URL}/terms/`,
  },
  {
    name: "whatships.com llms.txt — agent guide",
    url: `${SITE_URL}/llms.txt`,
  },
];

export function guideMarkdown(): string {
  const lines: string[] = [
    `# ${guideTitle}`,
    "",
    guideLead,
    "",
    "## What each one is",
    "",
    ...guideDefinitions.flatMap((item) => [
      `### ${item.name}`,
      "",
      item.definition,
      "",
    ]),
    "## Key numbers",
    "",
    "| Fact | Value | Source |",
    "|---|---|---|",
    ...guideNumbers.map(
      (item) => `| ${item.fact} | ${item.value} | ${item.source} |`,
    ),
    "",
    "## Side-by-side comparison",
    "",
    `| ${guideComparison.columns.join(" | ")} |`,
    "|---|---|---|",
    ...guideComparison.rows.map((row) => `| ${row.join(" | ")} |`),
    "",
    "## How to use both together",
    "",
    ...guideSteps.map((step, index) => `${index + 1}. ${step}`),
    "",
    `## ${guideExample.heading}`,
    "",
    ...guideExample.body,
    "",
    "## Scope and method",
    "",
    guideScope,
    "",
    "## Where each falls short",
    "",
    "### Product Hunt",
    "",
    ...guideShortcomings.productHunt.map((item) => `- ${item}`),
    "",
    `### ${SITE_NAME}`,
    "",
    ...guideShortcomings.whatships.map((item) => `- ${item}`),
    "",
    "## Who should use which",
    "",
    `**Choose ${SITE_NAME} when:**`,
    "",
    ...guideFit.suitable.map((item) => `- ${item}`),
    "",
    "**Not a fit when:**",
    "",
    ...guideFit.unsuitable.map((item) => `- ${item}`),
    "",
    "## Frequently asked questions",
    "",
    ...guideFaqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]),
    "## Sources",
    "",
    ...guideSources.map((item) => `- [${item.name}](${item.url})`),
    "",
    `Categories referenced: ${categoryLabel("ai")}, ${categoryLabel("developer-tools")}, ${categoryLabel("design")}, ${categoryLabel("motion")}, ${categoryLabel("productivity")}, ${categoryLabel("consumer")}, ${categoryLabel("hardware")}, ${categoryLabel("other")}.`,
    "",
  ];
  return lines.join("\n");
}
