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
    image: abs("/opengraph-image"),
    email: "badyltech@outlook.com",
  }
}

/**
 * WebSite — declares the site identity for crawlers.
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

/**
 * HowTo — marks tool pages as step-by-step guides for rich results.
 */
export function howToSchema(opts: {
  name: string
  description: string
  path: string
  steps: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    step: opts.steps.map((text, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text,
    })),
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
    image: abs("/opengraph-image"),
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

/**
 * Article / BlogPosting — for standalone guide and comparison pages.
 */
export function articleSchema(opts: {
  title: string
  description: string
  path: string
  author: string
  published: string
  updated: string
  locale: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: abs(opts.path),
    datePublished: opts.published,
    dateModified: opts.updated,
    inLanguage: opts.locale,
    author: {
      "@type": "Person",
      name: opts.author,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: abs("/opengraph-image"),
  }
}

/**
 * ItemList — for hub/index pages listing articles or formats.
 */
export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: abs(item.path),
    })),
  }
}

/** DefinedTerm — glossary term pages for long-tail SEO. */
export function definedTermSchema(opts: {
  name: string
  description: string
  path: string
  locale: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    inLanguage: opts.locale,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Toolando.tech file conversion glossary",
      url: abs(`/${opts.locale}/slownik`),
    },
  }
}

/** Premium subscription product schema for the pricing page. */
export function premiumProductSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Toolando Premium",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web browser",
    url: abs(`/${locale}/premium`),
    offers: {
      "@type": "Offer",
      price: "9.00",
      priceCurrency: "PLN",
      priceValidUntil: "2099-12-31",
      availability: "https://schema.org/InStock",
      url: abs(`/${locale}/premium`),
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  }
}

/** All supported locales, exported for callers that need hreflang-style data. */
export { supportedLocales }
