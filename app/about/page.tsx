import Footer from "@/components/footer"
import FounderSection from "@/components/founder-section"
import MergedVisionMissionPurpose from "@/components/merged-vmp-section"

export default function AboutPage() {
  return (
    <>
      <main style={{ position: 'relative', zIndex: 50 }}>
        <MergedVisionMissionPurpose />
        <FounderSection />
      </main>
      <Footer />
    </>
  )
}
