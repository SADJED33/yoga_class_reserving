
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Heart } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 20)
    }

    window?.addEventListener?.('scroll', handleScroll)
    return () => window?.removeEventListener?.('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/classes', label: 'Classes' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith?.(href)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Heart className="w-6 h-6 text-sage group-hover:scale-110 transition-transform" />
            <span className="font-serif font-semibold text-lg text-sage">Yoga Tipaza</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks?.map?.((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link?.href)
                    ? 'text-sage border-b-2 border-sage pb-1'
                    : 'text-gray-700 hover:text-sage'
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-sage transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white rounded-sm shadow-lg mt-2">
            {navLinks?.map?.((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 font-medium transition-colors duration-200 ${
                  isActive(link?.href)
                    ? 'text-sage bg-light-beige'
                    : 'text-gray-700 hover:text-sage hover:bg-light-beige'
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
