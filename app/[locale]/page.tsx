import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { UniversalOpenerSection } from "@/components/universal-opener-section"
import { AiToolsSection } from "@/components/ai-tools-section"
import { FeaturesSection } from "@/components/features-section"
import { WhySection } from "@/components/why-section"
import { KnowledgeHubSection } from "@/components/knowledge-hub-section"
import { EditorialTrustSection } from "@/components/editorial-trust-section"
import { PublisherNotesSection } from "@/components/publisher-notes-section"
import { FeaturedGuidesSection } from "@/components/featured-guides-section"
import { FormatRecommender } from "@/components/format-recommender"
import { SiteFooter } from "@/components/site-footer"
import { AdSlot } from "@/components/ad-slot"
import { RecentToolsSection } from "@/components/recent-tools-section"
import { ComparisonSection } from "@/components/comparison-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ToolRequestBanner } from "@/components/tool-request-banner"
import { OnboardingTour } from "@/components/onboarding-tour"
import { ExitIntentModal } from "@/components/exit-intent-modal"

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
        <RecentToolsSection />
        <EditorialTrustSection />
        <PublisherNotesSection locale={locale} />
        <UniversalOpenerSection />
        <AdSlot
          placement="home"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME}
        />
        <FeaturesSection />
        <KnowledgeHubSection />
        <FeaturedGuidesSection locale={locale} />
        <FormatRecommender />
        <ComparisonSection />
        <AiToolsSection />
        <NewsletterSignup />
        <ToolRequestBanner />
        <WhySection />
      </main>
      <SiteFooter />
    </div>
  )
}
