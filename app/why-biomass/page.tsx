import Footer from "@/components/footer"
import BiomassComparisonSection from "@/components/biomass-comparison-section"
import WhyBiomassSection from "@/components/why-biomass-section"
import EnvironmentalBenefitsSection from "@/components/environmental-benefits-section"

export default function WhyBiomassPage() {
  return (
    <>
      <main style={{ position: 'relative', zIndex: 40 }}>
        <WhyBiomassSection />
        <BiomassComparisonSection />
        <EnvironmentalBenefitsSection />
      </main>
      <Footer />
    </>
  )
}
