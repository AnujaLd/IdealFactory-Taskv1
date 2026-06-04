import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  SolutionsHeroSection,
  SolutionsGridSection,
  WhyDifficultSection,
  ApproachSection,
  DesignPreviewSection,
  StatsSection,
  WhyChooseSection,
  TestimonialsSection,
  ContactSection,
} from '@/components/sections'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionsHeroSection />
      <SolutionsGridSection />
      <WhyDifficultSection />
      <ApproachSection />
      <DesignPreviewSection />
      <StatsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
