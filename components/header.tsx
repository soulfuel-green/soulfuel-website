"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // No longer need to attach scroll event listeners for anchor links
    // as navigation is handled by Next.js router.
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Our Services" },
    { href: "/why-biomass", label: "Why Biomass?" },
    { href: "/impact", label: "Impact" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
  ]

  const isActive = (href: string) => {
    if (!pathname) return false
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/soulfuel-logo.png"
                alt="Soulfuel Green Energy"
                width={120}
                height={100}
                style={{borderRadius:4,filter: 'contrast(1.2) brightness(1.1)',}}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-gray-900 hover:text-green-600 transition-colors font-medium border-b-2 ${
                  isActive(item.href)
                    ? "text-green-600 border-green-600"
                    : "border-transparent"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-semibold">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-4"></div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors font-medium border-b-2 ${
                    isActive(item.href)
                      ? "text-green-600 border-green-600"
                      : "text-gray-900 hover:text-green-600 border-transparent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
