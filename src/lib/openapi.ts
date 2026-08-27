import { CATEGORIES } from "@/lib/catalog";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export function openApiSpec() {
  const categoryEnum = CATEGORIES.map((item) => item.id);
  return {
    openapi: "3.1.0",
    info: {
      title: `${SITE_NAME} developer resources`,
      summary: "Read-only catalog of curated startup launch videos from X.",
      description: SITE_DESCRIPTION,
      version: "1.0.0",
      contact: {
        name: `${SITE_NAME} editorial`,
        url: `${SITE_URL}/contact/`,
      },
      license: {
        name: "MIT",
        url: "https://github.com/dingyi/whatships.com",
      },
    },
    servers: [{ url: SITE_URL, description: `${SITE_NAME} production` }],
    paths: {
      "/search-index.json": {
        get: {
          operationId: "getSearchIndex",
          summary: "Compact launch-video search index",
          description:
            "Returns every published video as name, slug, meta, and searchText for client-side lookup.",
          responses: {
            "200": {
              description: "Search index array",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/SearchIndexItem" },
                  },
                },
              },
            },
          },
        },
      },
      "/openapi.json": {
        get: {
          operationId: "getOpenApi",
          summary: "This OpenAPI document",
          responses: {
            "200": {
              description: "OpenAPI 3.1 document",
              content: { "application/json": { schema: { type: "object" } } },
            },
          },
        },
      },
      "/llms.txt": {
        get: {
          operationId: "getLlmsTxt",
          summary: "Agent map and when-to-use guidance",
          responses: {
            "200": {
              description: "Markdown llms.txt",
              content: { "text/plain": { schema: { type: "string" } } },
            },
          },
        },
      },
      "/llms-full.txt": {
        get: {
          operationId: "getLlmsFullTxt",
          summary: "Full agent guide and GEO-readable entity description",
          description:
            "Returns the complete plain-text guide for AI assistants, including entity identity, crawl contract, citation policy, categories, FAQs, and recent examples.",
          responses: {
            "200": {
              description: "Full plain-text agent guide",
              content: { "text/plain": { schema: { type: "string" } } },
            },
          },
        },
      },
      "/sitemap.xml": {
        get: {
          operationId: "getSitemap",
          summary: "XML sitemap of indexable pages",
          responses: {
            "200": {
              description: "Sitemap",
              content: { "application/xml": { schema: { type: "string" } } },
            },
          },
        },
      },
      "/videos/{slug}/": {
        get: {
          operationId: "getLaunchVideoPage",
          summary: "One launch video page",
          parameters: [
            {
              name: "slug",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "HTML by default; Markdown when Accept prefers text/markdown",
              content: {
                "text/html": { schema: { type: "string" } },
                "text/markdown": { schema: { type: "string" } },
              },
            },
            "404": { description: "Unknown slug" },
          },
        },
      },
    },
    components: {
      schemas: {
        SearchIndexItem: {
          type: "object",
          additionalProperties: false,
          required: ["name", "slug", "meta", "searchText"],
          properties: {
            name: { type: "string", description: "Launch video title" },
            slug: {
              type: "string",
              description: "Stable slug for /videos/{slug}/",
            },
            meta: {
              type: "string",
              description: "Company and category label",
            },
            searchText: { type: "string" },
          },
        },
        CategoryId: {
          type: "string",
          enum: categoryEnum,
        },
      },
    },
  };
}
