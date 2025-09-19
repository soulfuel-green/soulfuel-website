export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img 
                src="/soulfuel-logo.png" 
                alt="Soulfuel Logo" 
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-900 hover:text-green-600">Home</a>
              <a href="/services" className="text-gray-900 hover:text-green-600">Our Services</a>
              <a href="/why-biomass" className="text-gray-900 hover:text-green-600">Why Biomass?</a>
              <a href="/impact" className="text-gray-900 hover:text-green-600">Impact</a>
              <a href="/about" className="text-gray-900 hover:text-green-600">About</a>
              <a href="/faq" className="text-gray-900 hover:text-green-600">FAQ</a>
              <a href="/contact" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Get a Quote</a>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-900">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Empowering Rural Communities
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Creating economic opportunities while protecting the environment through direct farmer partnerships
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="/services" 
                  className="bg-green-600 text-white px-8 py-3 rounded-md text-lg hover:bg-green-700 transition-colors"
                >
                  Explore More
                </a>
                <div className="flex space-x-2">
                  <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Transforming agricultural waste into clean energy solutions for a sustainable future. 
                Empowering farmers, industries, and communities.
              </p>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="/images/biomass-pellets.png" alt="Biomass Pellets" className="mx-auto h-32 w-32 object-contain mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Biomass Pellets</h3>
                <p className="text-gray-600">High-quality biomass pellets for clean energy</p>
              </div>
              <div className="text-center">
                <img src="/images/biomass-briquettes.png" alt="Biomass Briquettes" className="mx-auto h-32 w-32 object-contain mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Biomass Briquettes</h3>
                <p className="text-gray-600">Efficient fuel briquettes from agricultural waste</p>
              </div>
              <div className="text-center">
                <img src="/images/custom.png" alt="Custom Solutions" className="mx-auto h-32 w-32 object-contain mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored biomass solutions for your needs</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
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
              <a href="/cookie-policy" className="text-gray-400 hover:text-green-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
