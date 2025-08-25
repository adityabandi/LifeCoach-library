import { generateSEO } from '@/lib/seo'
import Link from 'next/link'

export const metadata = generateSEO({
  title: 'Coaching Methods & Techniques - Session Planning, Models & Exercises',
  description: 'Proven coaching methods including session structures, coaching models, exercise templates, and comprehensive planning frameworks.',
  keywords: ['coaching methods', 'coaching techniques', 'session planning', 'coaching models', 'coaching exercises'],
  canonicalUrl: 'https://lifecoachlibrary.com/methods',
})

export default function MethodsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Life Coach Library
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/guides" className="text-gray-600 hover:text-gray-900">
                Guides
              </Link>
              <Link href="/workflows" className="text-gray-600 hover:text-gray-900">
                Workflows
              </Link>
              <Link href="/methods" className="text-gray-600 hover:text-gray-900">
                Methods
              </Link>
              <Link href="/growth" className="text-gray-600 hover:text-gray-900">
                Marketing
              </Link>
              <Link href="/templates" className="text-gray-600 hover:text-gray-900">
                Templates
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span className="mx-2">›</span>
          <span>Methods</span>
        </nav>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Coaching Methods & Techniques
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven coaching methodologies, session structures, and practical frameworks to enhance your coaching effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* Methods Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">
                <Link href="/methods/coaching-session-structure" className="text-gray-900 hover:text-primary-600">
                  Coaching Session Structure
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Learn proven frameworks for structuring effective coaching sessions from opening to closing with actionable templates.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>8 min read</span>
                <span className="mx-2">•</span>
                <span>Session Planning</span>
              </div>
              <Link href="/methods/coaching-session-structure" className="text-primary-600 font-medium">
                Learn Method →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">
                <Link href="/methods/coaching-exercises" className="text-gray-900 hover:text-primary-600">
                  Coaching Exercises & Activities
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Ready-to-use coaching exercises and activities to engage clients and drive breakthrough moments in your sessions.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>12 min read</span>
                <span className="mx-2">•</span>
                <span>Practical Tools</span>
              </div>
              <Link href="/methods/coaching-exercises" className="text-primary-600 font-medium">
                Get Exercises →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">
                <Link href="/methods/coaching-plans" className="text-gray-900 hover:text-primary-600">
                  Coaching Plans & Templates
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive planning templates for different coaching scenarios including 30, 60, and 90-day programs.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span>Program Planning</span>
              </div>
              <Link href="/methods/coaching-plans" className="text-primary-600 font-medium">
                Get Templates →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Life Coach Library</h3>
              <p className="text-gray-400">
                Free resources and templates for professional life coaches.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/guides" className="text-gray-400 hover:text-white">Business Guides</Link></li>
                <li><Link href="/templates" className="text-gray-400 hover:text-white">Templates</Link></li>
                <li><Link href="/methods" className="text-gray-400 hover:text-white">Coaching Methods</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Growth</h4>
              <ul className="space-y-2">
                <li><Link href="/growth" className="text-gray-400 hover:text-white">Marketing</Link></li>
                <li><Link href="/workflows" className="text-gray-400 hover:text-white">Workflows</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.personality-quizzes.com/for-coaching?utm_source=lcl&utm_medium=referral&utm_campaign=for_coaching_library" 
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Strengths Assessment
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Life Coach Library. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}