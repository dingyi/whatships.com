import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

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

export default defineConfig({
  site: process.env.SITE_URL ?? "https://whatships.com",
  output: "static",
  integrations: [react(), localAdmin()],
  vite: {
    plugins: [tailwindcss()],
  },
});
