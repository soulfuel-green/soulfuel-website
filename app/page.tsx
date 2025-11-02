import HeroCarouselSection from "@/components/hero-carousel-section"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Carousel Section */}
      <HeroCarouselSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
             {/* <Image
                src="/soulfuel-logo.png"
                alt="Soulfuel Green Energy"
                width={100}
                height={100}
                style={{borderRadius:4,background:"transparent" ,filter: 'contrast(1.2) brightness(1.1)',}}
              /> */}
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="hover:text-green-400">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services" className="hover:text-green-400">Biomass Pellets</a></li>
                <li><a href="/services" className="hover:text-green-400">B2B Supply</a></li>
                <li><a href="/services" className="hover:text-green-400">Logistics</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="hover:text-green-400">Get Quote</a></li>
                <li><a href="/contact" className="hover:text-green-400">Technical Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@soulfuelgreenenergy.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Soulfuel Green Energy Pvt. Ltd. All rights reserved.
            </p>
            <div className="mt-4 space-x-6">
              <a href="/privacy-policy" className="text-gray-400 hover:text-green-400">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-green-400">Terms of Service</a>
              {/* <a href="/cookie-policy" className="text-gray-400 hover:text-green-400">Cookie Policy</a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
