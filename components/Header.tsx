'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

interface HeaderProps {
  className?: string
}

const Header = ({ className = '' }: HeaderProps) => {
  const pathname = usePathname()

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

  return (
    <header className={`bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center hover-glow rounded-lg p-2 -m-2 transition-all duration-300">
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
              className="text-gray-600 hover:text-primary-600 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Open mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation (you can expand this later with state management) */}
        <div className="md:hidden border-t border-gray-200 py-4 hidden">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link block px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActivePath(item.href)
                    ? 'text-primary-600 bg-primary-50 font-semibold'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
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