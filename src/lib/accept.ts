export const HTML_TYPE = "text/html";
export const MARKDOWN_TYPE = "text/markdown";
export const PRODUCES = [HTML_TYPE, MARKDOWN_TYPE] as const;

type AcceptEntry = { type: string; q: number; specificity: number };

function parseAccept(header: string): AcceptEntry[] {
  return header
    .split(",")
    .map((raw) => {
      const parts = raw
        .trim()
        .split(";")
        .map((part) => part.trim())
        .filter(Boolean);
      const type = parts[0]?.toLowerCase();
      if (!type) return null;
      let q = 1;
      for (const param of parts.slice(1)) {
        const [name, value] = param.split("=").map((item) => item.trim());
        if (name.toLowerCase() !== "q") continue;
        const parsed = Number(value);
        if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
      }
      const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
      return { type, q, specificity };
    })
    .filter((entry): entry is AcceptEntry => entry !== null);
}

function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) {
    return candidate.startsWith(entry.type.slice(0, -1));
  }
  return entry.type === candidate;
}

/**
 * Pick a representation from `produces` for an HTTP Accept header.
 * Missing / empty Accept → produces[0] (HTML). No acceptable match → null (406).
 */
export function preferredType(
  header: string | null,
  produces: readonly string[] = PRODUCES,
): string | null {
  if (!header || header.trim() === "") return produces[0] ?? null;
  const entries = parseAccept(header);
  if (entries.length === 0) return produces[0] ?? null;

  let bestType: string | null = null;
  let bestQ = -1;
  let bestPosition = Infinity;

  for (const candidate of produces) {
    let matched: AcceptEntry | null = null;
    let matchedPosition = Infinity;
    for (let index = 0; index < entries.length; index += 1) {
      const entry = entries[index];
      if (!matches(entry, candidate)) continue;
      if (
        matched === null ||
        entry.specificity > matched.specificity ||
        (entry.specificity === matched.specificity && index < matchedPosition)
      ) {
        matched = entry;
        matchedPosition = index;
      }
    }
    if (matched === null || matched.q <= 0) continue;
    if (
      matched.q > bestQ ||
      (matched.q === bestQ && matchedPosition < bestPosition)
    ) {
      bestQ = matched.q;
      bestPosition = matchedPosition;
      bestType = candidate;
    }
  }

  return bestType;
}

export function appendVaryAccept(headers: Headers): void {
  const required = ["Accept", "Accept-Encoding"];
  const existing = headers.get("Vary");
  if (!existing) {
    headers.set("Vary", required.join(", "));
    return;
  }
  const tokens = existing.split(",").map((token) => token.trim());
  const seen = new Set(tokens.map((token) => token.toLowerCase()));
  for (const token of required) {
    if (!seen.has(token.toLowerCase())) tokens.push(token);
  }
  headers.set("Vary", tokens.join(", "));
}

/** Map a request pathname to its built markdown sibling in the assets bucket. */
export function markdownAssetPath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/") return "/index.md";
  return `${clean}/index.md`;
}

const PASSTHROUGH =
  /\.(?:css|js|mjs|map|png|jpe?g|webp|gif|svg|avif|ico|woff2?|ttf|otf|eot|xml|txt|json|pdf|mp4|webm|mp3|wav|ogg|zip)$/i;

export function shouldPassthrough(pathname: string): boolean {
  return PASSTHROUGH.test(pathname) || pathname.startsWith("/api/");
}
