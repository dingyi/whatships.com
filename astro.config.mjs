import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { writeMarkdownAssets } from "./src/lib/markdown.ts";

/** /admin is a local review UI. Never inject it into `astro build`. */
function localAdmin() {
  return {
    name: "local-admin",
    hooks: {
      "astro:config:setup"({ command, injectRoute }) {
        if (command !== "dev") return;
        injectRoute({
          pattern: "/admin",
          entrypoint: "./src/admin/index.astro",
        });
      },
    },
  };
}

/** Emit .md siblings so the site Worker can negotiate Accept: text/markdown. */
function markdownAssets() {
  return {
    name: "markdown-assets",
    hooks: {
      async "astro:build:done"({ dir }) {
        await writeMarkdownAssets(dir);
      },
    },
  };
}

export default defineConfig({
  site: process.env.SITE_URL ?? "https://whatships.com",
  output: "static",
  integrations: [react(), localAdmin(), markdownAssets()],
  vite: {
    plugins: [tailwindcss()],
  },
});
