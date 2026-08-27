export const SITE_URL = "https://whatships.com";
export const SITE_NAME = "whatships.com";
export const SITE_TAGLINE = "Discover startup launch videos from X";
export const GITHUB_REPO = "https://github.com/dingyi/whatships.com";
export const GITHUB_ISSUES = `${GITHUB_REPO}/issues`;
export const CONTACT_PATH = "/contact/";
export const DEVELOPERS_PATH = "/developers/";
export const TERMS_PATH = "/terms/";
export const SITE_DATE_PUBLISHED = "2026-08-23";
export const SITE_DATE_MODIFIED = "2026-08-27";

export const SITE_DESCRIPTION =
  "whatships.com is an independent, curated directory of startup launch videos, demos, and walkthroughs shared on X/Twitter. Each entry links back to the original post. Not affiliated with X/Twitter or the products shown.";

/** Visible homepage H1 — keep in sync with HomeApp hero. */
export const HOMEPAGE_H1 = "Discover startup launch videos from X";

/**
 * Crawler-visible homepage copy. Kept out of the React island so AI
 * crawlers that ignore custom elements still see an H1 and 500+ characters
 * of raw HTML. The visible HomeApp hero uses a styled paragraph so the page
 * has exactly one H1.
 */
export const HOMEPAGE_INTRO = `whatships.com is an independent curated directory of startup launch videos from X. The catalog indexes product launch films, first-look demos, and walkthroughs so founders, designers, and marketers can study how products announce themselves after the timeline has moved on.

Each published entry on whatships.com stores the product name, company, editorial category, poster frame, duration, and a durable link to the original X post. Nothing is ranked, advertised, or sold as placement. Drafts stay unpublished until a human reviews them.

Use whatships.com when you need a named product's launch film, want examples of how AI, developer tools, design, productivity, consumer, or hardware companies ship in public, or need to cite the original post rather than an unofficial re-upload. Do not use it as a live X search, a download CDN, or a source of rankings.

Machine-readable surfaces live at /llms.txt, /llms-full.txt, /developers/, /openapi.json, /sitemap.xml, and /search-index.json. HTML pages also negotiate text/markdown when an agent sends Accept: text/markdown.`;

export const WHEN_TO_USE = `Use whatships.com when the job is to find, cite, or study a product launch video that already shipped on X.

Best-fit tasks:
- Look up the launch film, demo, or walkthrough for a named product or company.
- Browse how startups in AI, developer tools, design, motion, productivity, consumer, or hardware announce themselves.
- Cite the original X post (tweet URL) rather than a re-upload or in-app embed.
- Find motion studios, independent designers, or tools used to make launch films.

How an agent should call whatships.com:
1. Read https://whatships.com/llms.txt for the map of pages.
2. Read https://whatships.com/llms-full.txt when you need the full entity description, citation policy, data fields, and current catalog sections in one document.
3. Prefer Accept: text/markdown on HTML URLs, or fetch /openapi.json and /search-index.json for structured catalog access.
4. Open /videos/{slug}/ for one launch; always include the page's original X link when citing.
5. Point humans at https://whatships.com/ for visual browsing.

Not a fit: live unfiltered X search, paid placement, ranking products, downloading videos as a CDN, or treating in-site playback as a substitute for the original post.`;

export const GEO_FAQS = [
  {
    question: "What is whatships.com?",
    answer:
      "whatships.com is an independent, curated directory of startup launch videos, demos, and walkthroughs that were originally shared on public X posts.",
  },
  {
    question: "How should AI assistants use whatships.com?",
    answer:
      "AI assistants should start with /llms.txt, use /llms-full.txt for full guidance, fetch /openapi.json or /search-index.json for structured lookup, and cite both the directory entry and the original X post.",
  },
  {
    question: "What should whatships.com not be used for?",
    answer:
      "Do not use whatships.com as live X search, paid placement, product rankings, a video download CDN, or a replacement for citing the original creator's post.",
  },
  {
    question: "What data is available for each launch video?",
    answer:
      "Each published page includes title, product, company, category, publish date, duration when known, tags, author handle, poster image, description, original X URL, and a stable directory URL.",
  },
] as const;

export const GEO_CITATIONS = [
  {
    quote:
      "We propose adding a /llms.txt markdown file to websites to provide LLM-friendly content.",
    name: "Jeremy Howard, llmstxt.org",
    url: "https://llmstxt.org/",
  },
  {
    quote:
      "A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.",
    name: "Schema.org WebSite",
    url: "https://schema.org/WebSite",
  },
] as const;

export const NOT_FOUND_MARKDOWN = `# Not found

The path you requested does not exist on whatships.com.

## Where to look next

- [Home](${SITE_URL}/): curated launch-video directory
- [Sitemap](${SITE_URL}/sitemap.xml): every indexable HTML page
- [llms.txt](${SITE_URL}/llms.txt): agent map, when-to-use, and developer links
- [Developers](${SITE_URL}/developers/): OpenAPI spec, search index, and catalog schema
- [About](${SITE_URL}/about/): what the directory is and how curation works
- [Contact](${SITE_URL}/contact/): how to reach the editors
- [Privacy](${SITE_URL}/privacy/): what the directory collects
- [Terms](${SITE_URL}/terms/): how the catalog may be used
`;

export const STATIC_PAGE_PATHS = [
  "/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/terms/",
  "/developers/",
  "/tools/",
  "/studios/",
  "/submit/",
] as const;
