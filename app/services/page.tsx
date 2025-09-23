import Footer from "@/components/footer"
import ServicesHeroSection from "@/components/services-hero-section"
import OurOfferingsSection from "@/components/our-offerings-section"

export default function ServicesPage() {
  return (
    <>
      <main style={{ position: 'relative', zIndex: 40 }}>
        <ServicesHeroSection />
        <OurOfferingsSection />
      </main>
      <Footer/>
    </>
  )
}

