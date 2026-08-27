import {
  GEO_FAQS,
  SITE_DATE_MODIFIED,
  SITE_DATE_PUBLISHED,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const FAQ_ID = `${SITE_URL}/#faq`;

type HomepageListItem = {
  title: string;
  slug: string;
  company: string;
  description?: string;
};

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
    foundingDate: SITE_DATE_PUBLISHED,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial inquiries",
      url: `${SITE_URL}/contact/`,
      availableLanguage: ["English"],
    },
  };
}

export function faqPageJsonLd() {
  return {
    "@type": "FAQPage",
    "@id": FAQ_ID,
    name: `${SITE_NAME} frequently asked questions`,
    mainEntity: GEO_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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

export function homepageJsonLd(recentVideos: HomepageListItem[] = []) {
  const itemList =
    recentVideos.length > 0
      ? {
          "@type": "ItemList",
          "@id": `${SITE_URL}/#latest-launch-videos`,
          name: "Latest startup launch videos",
          itemListElement: recentVideos.map((video, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: video.title,
              url: `${SITE_URL}/videos/${video.slug}/`,
              description: video.description,
              publisher: video.company,
            },
          })),
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationJsonLd(),
      websiteJsonLd(),
      faqPageJsonLd(),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/#homepage`,
        name: `${SITE_NAME} — ${SITE_TAGLINE}`,
        url: `${SITE_URL}/`,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        datePublished: SITE_DATE_PUBLISHED,
        dateModified: SITE_DATE_MODIFIED,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        author: { "@id": ORGANIZATION_ID },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["[data-agent-intro] h1", "[data-agent-intro] p"],
        },
        ...(itemList ? { mainEntity: itemList } : {}),
      },
      {
        "@type": "Article",
        "@id": `${SITE_URL}/#overview-article`,
        headline: `${SITE_NAME} startup launch-video catalog`,
        description: SITE_DESCRIPTION,
        datePublished: SITE_DATE_PUBLISHED,
        dateModified: SITE_DATE_MODIFIED,
        inLanguage: "en",
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@id": `${SITE_URL}/#homepage` },
      },
    ],
  };
}
