import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationJsonLd() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    alternateName: ["whatships", "What Ships"],
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon.svg`,
    description: SITE_DESCRIPTION,
    sameAs: ["https://github.com/dingyi/whatships.com"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial inquiries",
      url: `${SITE_URL}/contact/`,
      availableLanguage: ["English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function homepageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      websiteJsonLd(),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/#homepage`,
        name: `${SITE_NAME} — Discover startup launch videos`,
        url: `${SITE_URL}/`,
        description: SITE_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}
