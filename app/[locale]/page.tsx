import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { WhySection } from "@/components/why-section"
import { EditorialTrustSection } from "@/components/editorial-trust-section"
import { PublisherNotesSection } from "@/components/publisher-notes-section"
import { FeaturedGuidesSection } from "@/components/featured-guides-section"
import { SiteFooter } from "@/components/site-footer"
import { AdSlot } from "@/components/ad-slot"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { OnboardingTour } from "@/components/onboarding-tour"
import { ExitIntentModal } from "@/components/exit-intent-modal"

/**
 * Homepage for AdSense / Search Quality: editorial first.
 * Tool grids, AI strip and opener farm live under /tools (noindex), not here.
 */
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <OnboardingTour />
      <ExitIntentModal />
      <main>
        <HeroSection />
        <EditorialTrustSection />
        <PublisherNotesSection locale={locale} />
        <FeaturedGuidesSection locale={locale} />
        <WhySection />
        <AdSlot
          placement="home"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME}
        />
        <NewsletterSignup />
      </main>
      <SiteFooter />
    </div>
  )
}
