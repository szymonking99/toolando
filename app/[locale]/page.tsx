import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { UniversalOpenerSection } from "@/components/universal-opener-section"
import { AiToolsSection } from "@/components/ai-tools-section"
import { FeaturesSection } from "@/components/features-section"
import {
  CalculatorsSection,
  DeveloperToolsSection,
} from "@/components/hub-utility-sections"
import { CategoriesSection } from "@/components/categories-section"
import { WhySection } from "@/components/why-section"
import { KnowledgeHubSection } from "@/components/knowledge-hub-section"
import { EditorialTrustSection } from "@/components/editorial-trust-section"
import { FeaturedGuidesSection } from "@/components/featured-guides-section"
import { FormatRecommender } from "@/components/format-recommender"
import { SiteFooter } from "@/components/site-footer"
import { AdSlot } from "@/components/ad-slot"

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main>
        <HeroSection />
        <EditorialTrustSection />
        <UniversalOpenerSection />
        <AiToolsSection />
        <AdSlot
          placement="home"
          slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME}
        />
        <FeaturesSection />
        <CategoriesSection />
        <CalculatorsSection />
        <DeveloperToolsSection />
        <KnowledgeHubSection />
        <FeaturedGuidesSection locale={locale} />
        <FormatRecommender />
        <WhySection />
      </main>
      <SiteFooter />
    </div>
  )
}
