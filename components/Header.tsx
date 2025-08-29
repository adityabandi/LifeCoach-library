'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

interface HeaderProps {
  className?: string
}

const Header = ({ className = '' }: HeaderProps) => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActivePath = (path: string) => {
    if (path === '/') return pathname === path
    return pathname.startsWith(path)
  }

  const navItems = [
    { href: '/guides', label: 'Guides' },
    { href: '/workflows', label: 'Workflows' },
    { href: '/methods', label: 'Methods' },
    { href: '/growth', label: 'Marketing' },
    { href: '/templates', label: 'Templates' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              href="/"
              className="flex items-center hover-glow rounded-lg p-2 -m-2 transition-all duration-300"
              onClick={closeMobileMenu}
            >
              <Logo size="lg" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link transition-all duration-200 px-3 py-2 rounded-lg ${
                  isActivePath(item.href)
                    ? 'text-primary-600 bg-primary-50 font-semibold'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className="flex flex-col space-y-1 py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link block px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActivePath(item.href)
                    ? 'text-primary-600 bg-primary-50 font-semibold border-l-4 border-primary-600'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header