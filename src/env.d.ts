/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Optional local gate for `pnpm dev` /admin. Not used in production builds. */
  readonly ADMIN_PASSWORD?: string;
  readonly SITE_URL?: string;
}


interface ImportMeta {
  readonly env: ImportMetaEnv;
}
