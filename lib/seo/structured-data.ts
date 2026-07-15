import { supportedLocales } from "@/lib/i18n/config"

/**
 * Structured data (schema.org JSON-LD) builders.
 *
 * These power Google "rich results": the sitelinks search box, organization
 * knowledge panel, breadcrumbs, app rich cards and FAQ accordions in search.
 * Every builder returns a plain object that is serialized by <JsonLd />.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://toolando.tech"

const SITE_NAME = "Toolando.tech"

/** Absolute URL helper. `path` should start with a slash. */
function abs(path: string): string {
  return `${SITE_URL}${path}`
}

/**
 * Organization — identifies the brand behind the site. Helps Google build a
 * knowledge panel and associate the logo/social profiles with the domain.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: abs("/icon.svg"),
    },
    image: abs("/og-image.png"),
    email: "badyltech@outlook.com",
  }
}

/**
 * WebSite — declares the site and enables the sitelinks search box by pointing
 * Google at the tools search/listing page.
 */
export function websiteSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/${locale}/tools?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export type Crumb = { name: string; path: string }

/**
 * BreadcrumbList — renders the breadcrumb trail under the search result title
 * and clarifies site hierarchy to crawlers.
 */
export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  }
}

/**
 * SoftwareApplication — marks each tool as a free web application so it can earn
 * an app-style rich card. Tools run in the browser at no cost.
 */
export function softwareApplicationSchema(opts: {
  name: string
  description: string
  path: string
  locale: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web browser",
    inLanguage: opts.locale,
    image: abs("/og-image.png"),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  }
}

/**
 * FAQPage — lets Google show an expandable FAQ directly in the results for
 * pages that answer common questions.
 */
export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  }
}

/** All supported locales, exported for callers that need hreflang-style data. */
export { supportedLocales }
