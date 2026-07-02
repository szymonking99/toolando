import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { UniversalOpenerSection } from "@/components/universal-opener-section"
import { AiToolsSection } from "@/components/ai-tools-section"
import { FeaturesSection } from "@/components/features-section"
import { CategoriesSection } from "@/components/categories-section"
import { WhySection } from "@/components/why-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNavbar />
      <main>
        <HeroSection />
        <UniversalOpenerSection />
        <AiToolsSection />
        <FeaturesSection />
        <CategoriesSection />
        <WhySection />
        
      </main>
      <SiteFooter />
    </div>
  )
}
