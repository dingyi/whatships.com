import { CATEGORIES, type CategoryId } from "@/lib/catalog";
import { TOOL_CATEGORIES, type ToolCategoryId } from "@/lib/tools";

export const SUBMIT_REPO = "dingyi/whatships.com";
export const SUBMIT_ISSUE_LABELS = ["submission"];

export const SUBMIT_KINDS = [
  { id: "video", label: "Video" },
  { id: "tool", label: "Tool" },
  { id: "studio", label: "Studio" },
  { id: "designer", label: "Designer" },
] as const;

export type SubmitKind = (typeof SUBMIT_KINDS)[number]["id"];

export interface CatalogSubmission {
  kind: SubmitKind;
  tweetUrl: string;
  product: string;
  company: string;
  videoCategory: CategoryId | "";
  title: string;
  name: string;
  url: string;
  toolCategory: ToolCategoryId | "";
  tagline: string;
  description: string;
  install: string;
  xHandle: string;
}

export interface SubmissionErrors {
  tweetUrl?: string;
  product?: string;
  company?: string;
  videoCategory?: string;
  title?: string;
  name?: string;
  url?: string;
  toolCategory?: string;
  tagline?: string;
  description?: string;
  install?: string;
  xHandle?: string;
}

const TWEET_PATH =
  /^https?:\/\/(www\.)?(twitter\.com|x\.com|mobile\.twitter\.com)\/([A-Za-z0-9_]{1,15})\/status\/(\d{5,25})\/?(?:\?.*)?$/i;
const X_HANDLE = /^[A-Za-z0-9_]{1,15}$/;

export function parseSubmitKind(value: string | null | undefined): SubmitKind {
  return SUBMIT_KINDS.some((item) => item.id === value)
    ? (value as SubmitKind)
    : "video";
}

export function emptySubmission(
  kind: SubmitKind = "video",
): CatalogSubmission {
  return {
    kind,
    tweetUrl: "",
    product: "",
    company: "",
    videoCategory: "",
    title: "",
    name: "",
    url: "",
    toolCategory: "",
    tagline: "",
    description: "",
    install: "",
    xHandle: "",
  };
}

export function parseTweetUrl(raw: string) {
  const value = raw.trim();
  const match = value.match(TWEET_PATH);
  if (!match) return null;
  const handle = match[3];
  const tweetId = match[4];
  return {
    handle,
    tweetId,
    tweetUrl: `https://x.com/${handle}/status/${tweetId}`,
  };
}

export function parseHttpUrl(raw: string) {
  try {
    const url = new URL(raw.trim());
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (!url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function parseXHandle(raw: string) {
  const value = raw.trim().replace(/^@/, "");
  if (!value) return "";
  return X_HANDLE.test(value) ? value : null;
}

export function isValidVideoCategory(value: string): value is CategoryId {
  return CATEGORIES.some((item) => item.id === value);
}

export function isValidToolCategory(value: string): value is ToolCategoryId {
  return TOOL_CATEGORIES.some((item) => item.id === value);
}

function requireName(value: string, label: string) {
  const trimmed = value.trim();
  if (!trimmed) return `${label} is required.`;
  if (trimmed.length > 80) return `Keep the ${label.toLowerCase()} under 80 characters.`;
  return undefined;
}

function optionalLength(value: string, max: number, label: string) {
  if (value.trim().length > max) {
    return `Keep the ${label} under ${max} characters.`;
  }
  return undefined;
}

export function validateSubmission(
  submission: CatalogSubmission,
): SubmissionErrors {
  const errors: SubmissionErrors = {};

  if (submission.kind === "video") {
    const tweet = parseTweetUrl(submission.tweetUrl);
    if (!submission.tweetUrl.trim()) {
      errors.tweetUrl = "Paste a public X/Twitter status URL.";
    } else if (!tweet) {
      errors.tweetUrl =
        "Use a full post URL like https://x.com/handle/status/123…";
    }

    const productError = requireName(submission.product, "Product name");
    if (productError) errors.product = productError;

    if (!submission.company.trim()) {
      errors.company = "Company or publisher is required.";
    } else if (submission.company.trim().length > 80) {
      errors.company = "Keep the company name under 80 characters.";
    }

    if (!submission.videoCategory) {
      errors.videoCategory = "Choose a category.";
    } else if (!isValidVideoCategory(submission.videoCategory)) {
      errors.videoCategory = "Choose a valid category.";
    }

    const titleError = optionalLength(submission.title, 120, "title");
    if (titleError) errors.title = titleError;
  }

  if (submission.kind === "tool") {
    const nameError = requireName(submission.name, "Tool name");
    if (nameError) errors.name = nameError;

    if (!submission.url.trim()) {
      errors.url = "Paste the public website URL.";
    } else if (!parseHttpUrl(submission.url)) {
      errors.url = "Use a full URL like https://osmo.inc/";
    }

    if (!submission.toolCategory) {
      errors.toolCategory = "Choose a category.";
    } else if (!isValidToolCategory(submission.toolCategory)) {
      errors.toolCategory = "Choose a valid category.";
    }

    const taglineError = optionalLength(submission.tagline, 120, "tagline");
    if (taglineError) errors.tagline = taglineError;

    if (submission.toolCategory === "skills") {
      const installError = optionalLength(submission.install, 160, "install command");
      if (installError) errors.install = installError;
    }
  }

  if (submission.kind === "studio" || submission.kind === "designer") {
    const label = submission.kind === "studio" ? "Studio name" : "Designer name";
    const nameError = requireName(submission.name, label);
    if (nameError) errors.name = nameError;

    if (!submission.url.trim()) {
      errors.url = "Paste the public website or profile URL.";
    } else if (!parseHttpUrl(submission.url)) {
      errors.url = "Use a full URL like https://example.com/";
    }

    const taglineError = optionalLength(submission.tagline, 120, "tagline");
    if (taglineError) errors.tagline = taglineError;

    if (submission.xHandle.trim()) {
      if (!parseXHandle(submission.xHandle)) {
        errors.xHandle = "Use an X handle like name, without the URL.";
      }
    }
  }

  const descriptionError = optionalLength(
    submission.description,
    500,
    "description",
  );
  if (descriptionError) errors.description = descriptionError;

  return errors;
}

export function hasSubmissionErrors(errors: SubmissionErrors) {
  return Object.keys(errors).length > 0;
}

export function slugifyName(value: string) {
  return value
    .toLocaleLowerCase("en")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 48)
    .replace(/-$/, "");
}

export function buildSubmissionSlug(product: string, tweetId: string) {
  const base = slugifyName(product);
  return base ? `${base}-${tweetId.slice(-6)}` : `launch-${tweetId.slice(-8)}`;
}

export function buildCatalogDraft(submission: CatalogSubmission) {
  if (submission.kind === "video") {
    const tweet = parseTweetUrl(submission.tweetUrl);
    if (!tweet || !isValidVideoCategory(submission.videoCategory)) return null;

    const product = submission.product.trim();
    const company = submission.company.trim();
    const title =
      submission.title.trim() || `${product} — product launch video`;
    const description =
      submission.description.trim() ||
      `A product launch video for ${product} from ${company}, shared on X.`;
    const slug = buildSubmissionSlug(product, tweet.tweetId);

    return {
      id: `plv-sub-${tweet.tweetId}`,
      slug,
      title,
      product,
      company,
      description,
      category: submission.videoCategory,
      tags: [] as string[],
      tweetUrl: tweet.tweetUrl,
      tweetId: tweet.tweetId,
      authorName: company,
      authorHandle: tweet.handle,
      authorAvatar: null as string | null,
      poster: `/posters/${slug}.webp`,
      videoUrl: null as string | null,
      publishedAt: new Date().toISOString(),
      durationSeconds: null as number | null,
      featured: false,
      status: "draft" as const,
    };
  }

  if (submission.kind === "tool") {
    const url = parseHttpUrl(submission.url);
    if (!url || !isValidToolCategory(submission.toolCategory)) return null;
    const name = submission.name.trim();
    const slug = slugifyName(name) || "tool";
    const tagline = submission.tagline.trim() || name;
    const description =
      submission.description.trim() ||
      `${name} is a tool for making product launch videos or mockups.`;
    const install =
      submission.toolCategory === "skills"
        ? submission.install.trim() || undefined
        : undefined;

    return {
      id: `tool-${slug}`,
      slug,
      name,
      tagline,
      description,
      url,
      category: submission.toolCategory,
      poster: `/posters/tools/${slug}.webp`,
      ...(install ? { install } : {}),
    };
  }

  const url = parseHttpUrl(submission.url);
  if (!url) return null;
  const name = submission.name.trim();
  const slug = slugifyName(name) || submission.kind;
  const studioKind = submission.kind === "studio" ? "studio" : "person";
  const tagline =
    submission.tagline.trim() ||
    (studioKind === "studio"
      ? "Motion studio for product launch films"
      : "Motion design for product films");
  const description =
    submission.description.trim() ||
    `${name} makes product launch films, demos, and walkthroughs.`;
  const xHandle = parseXHandle(submission.xHandle) || undefined;

  return {
    id: `${studioKind}-${slug}`,
    slug,
    name,
    tagline,
    description,
    url,
    kind: studioKind,
    ...(xHandle ? { xHandle } : {}),
    poster: `/posters/studios/${slug}.webp`,
  };
}

export function buildIssueTitle(submission: CatalogSubmission) {
  if (submission.kind === "video") {
    const product = submission.product.trim() || "Untitled product";
    const company = submission.company.trim() || "Unknown";
    return `Launch video: ${product} (${company})`;
  }
  const name = submission.name.trim() || "Untitled";
  if (submission.kind === "tool") return `Tool: ${name}`;
  if (submission.kind === "studio") return `Studio: ${name}`;
  return `Designer: ${name}`;
}

function videoIssueBody(submission: CatalogSubmission) {
  const tweet = parseTweetUrl(submission.tweetUrl);
  const draft = buildCatalogDraft(submission);
  const categoryLabel =
    CATEGORIES.find((item) => item.id === submission.videoCategory)?.label ??
    submission.videoCategory;

  return [
    "## Launch video submission",
    "",
    "### Source",
    "",
    `- **Tweet URL:** ${tweet?.tweetUrl ?? submission.tweetUrl.trim()}`,
    `- **Tweet ID:** ${tweet?.tweetId ?? "—"}`,
    `- **Author handle:** @${tweet?.handle ?? "—"}`,
    "",
    "### Product",
    "",
    `- **Product:** ${submission.product.trim()}`,
    `- **Company:** ${submission.company.trim()}`,
    `- **Category:** ${categoryLabel}`,
    `- **Title:** ${submission.title.trim() || "—"}`,
    `- **Description:** ${submission.description.trim() || "—"}`,
    "",
    "### Suggested catalog draft",
    "",
    "```json",
    JSON.stringify(draft, null, 2),
    "```",
    "",
    "### Review checklist",
    "",
    "- [ ] Public post contains a product launch / demo video",
    "- [ ] Metadata is accurate",
    "- [ ] Poster can be captured",
    "- [ ] Ready to publish (`status: published`)",
    "",
  ].join("\n");
}

function toolIssueBody(submission: CatalogSubmission) {
  const draft = buildCatalogDraft(submission);
  const categoryLabel =
    TOOL_CATEGORIES.find((item) => item.id === submission.toolCategory)
      ?.label ?? submission.toolCategory;

  return [
    "## Tool submission",
    "",
    "### Listing",
    "",
    `- **Name:** ${submission.name.trim()}`,
    `- **URL:** ${parseHttpUrl(submission.url) ?? submission.url.trim()}`,
    `- **Category:** ${categoryLabel}`,
    `- **Tagline:** ${submission.tagline.trim() || "—"}`,
    `- **Description:** ${submission.description.trim() || "—"}`,
    `- **Install:** ${submission.toolCategory === "skills" ? submission.install.trim() || "—" : "—"}`,
    "",
    "### Suggested catalog draft",
    "",
    "```json",
    JSON.stringify(draft, null, 2),
    "```",
    "",
    "### Review checklist",
    "",
    "- [ ] Site is a real editor, motion, mockup, AI, or skills tool",
    "- [ ] Metadata is accurate",
    "- [ ] Poster can be captured",
    "- [ ] Ready to publish",
    "",
  ].join("\n");
}

function studioIssueBody(submission: CatalogSubmission) {
  const draft = buildCatalogDraft(submission);
  const heading =
    submission.kind === "studio" ? "Studio submission" : "Designer submission";
  const handle = parseXHandle(submission.xHandle);

  return [
    `## ${heading}`,
    "",
    "### Listing",
    "",
    `- **Name:** ${submission.name.trim()}`,
    `- **URL:** ${parseHttpUrl(submission.url) ?? submission.url.trim()}`,
    `- **Kind:** ${submission.kind === "studio" ? "studio" : "person"}`,
    `- **X handle:** ${handle ? `@${handle}` : "—"}`,
    `- **Tagline:** ${submission.tagline.trim() || "—"}`,
    `- **Description:** ${submission.description.trim() || "—"}`,
    "",
    "### Suggested catalog draft",
    "",
    "```json",
    JSON.stringify(draft, null, 2),
    "```",
    "",
    "### Review checklist",
    "",
    "- [ ] Makes product launch films, demos, or walkthroughs",
    "- [ ] Metadata is accurate",
    "- [ ] Poster can be captured",
    "- [ ] Ready to publish",
    "",
  ].join("\n");
}

export function buildIssueBody(submission: CatalogSubmission) {
  if (submission.kind === "video") return videoIssueBody(submission);
  if (submission.kind === "tool") return toolIssueBody(submission);
  return studioIssueBody(submission);
}

export function buildGitHubIssueUrl(submission: CatalogSubmission) {
  const params = new URLSearchParams({
    title: buildIssueTitle(submission),
    body: buildIssueBody(submission),
    labels: SUBMIT_ISSUE_LABELS.join(","),
  });
  return `https://github.com/${SUBMIT_REPO}/issues/new?${params.toString()}`;
}

export function submitKindCopy(kind: SubmitKind) {
  switch (kind) {
    case "tool":
      return {
        heading: "Share a tool for launch videos",
        lead: "Point us to a public site for a launch tool.",
        success:
          "Your tool details were packaged into a review issue. If a new tab did not open, use the button below. Editors will curate approved tools into the public directory.",
      };
    case "studio":
      return {
        heading: "Share a motion studio",
        lead: "Point us to a studio that makes launch films.",
        success:
          "Your studio details were packaged into a review issue. If a new tab did not open, use the button below. Editors will curate approved studios into the public directory.",
      };
    case "designer":
      return {
        heading: "Share an independent designer",
        lead: "Point us to a designer who makes launch films.",
        success:
          "Your designer details were packaged into a review issue. If a new tab did not open, use the button below. Editors will curate approved makers into the public directory.",
      };
    default:
      return {
        heading: "Share a product launch video from X",
        lead: "Point us to a public X post with a launch film.",
        success:
          "Your launch details were packaged into a review issue. If a new tab did not open, use the button below. Editors will curate approved videos into the public directory.",
      };
  }
}
