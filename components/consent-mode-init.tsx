import Script from "next/script"

const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-HCDN6BEKZH"

/**
 * Google Consent Mode v2 defaults — must run before any Google tag loads.
 * Actual grants happen client-side when the user accepts cookies.
 */
export function ConsentModeInit() {
  if (process.env.NODE_ENV !== "production" || !GA_MEASUREMENT_ID) return null

  return (
    <Script id="consent-mode-default" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          wait_for_update: 500
        });
      `}
    </Script>
  )
}
