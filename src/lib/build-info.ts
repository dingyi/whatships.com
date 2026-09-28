/**
 * Build identity for deploy verification. The site deploy workflow reads this
 * back from the live domain after `wrangler deploy` and fails the run when the
 * served commit is not the one it just pushed. Without it, a deploy that never
 * reached production looks exactly like one that did: production keeps serving
 * an older build and no run reports a problem.
 */
export function buildCommit(
  env: Record<string, string | undefined> = process.env,
): string {
  return env.GITHUB_SHA ?? "unknown";
}
