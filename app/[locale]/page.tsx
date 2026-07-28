import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { UniversalOpenerSection } from "@/components/universal-opener-section"
import { AiToolsSection } from "@/components/ai-tools-section"
import { FeaturesSection } from "@/components/features-section"
import { UtilityToolsSection } from "@/components/utility-tools-section"
import { CategoriesSection } from "@/components/categories-section"
import { WhySection } from "@/components/why-section"
import { KnowledgeHubSection } from "@/components/knowledge-hub-section"
import { FormatRecommender } from "@/components/format-recommender"
import { SiteFooter } from "@/components/site-footer"
import { AdSlot } from "@/components/ad-slot"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main>
        <HeroSection />
        <UniversalOpenerSection />
        <AiToolsSection />
        <AdSlot slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME} />
        <FeaturesSection />
        <UtilityToolsSection />
        <CategoriesSection />
        <KnowledgeHubSection />
        <FormatRecommender />
        <WhySection />
      </main>
      <SiteFooter />
    </div>
  )
}
