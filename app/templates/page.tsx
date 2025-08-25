import { generateSEO } from '@/lib/seo'
import Link from 'next/link'

export const metadata = generateSEO({
  title: 'Free Coaching Templates & Downloads - Life Coach Library',
  description: 'Download free coaching templates including intake forms, session plans, progress trackers, and business documents. No email required.',
  keywords: ['coaching templates', 'free coaching forms', 'intake form template', 'coaching session plan'],
  canonicalUrl: 'https://lifecoachlibrary.com/templates',
})

export default function TemplatesPage() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Free Coaching Templates & Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional templates for intake forms, session plans, progress tracking, and business operations. Download immediately - no email required.
            </p>
          </div>
        </div>
      </section>

      {/* Template Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Intake Forms */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Intake Forms</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive client intake forms for different coaching niches. Includes consent forms and initial assessment questionnaires.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">General Life Coaching Intake</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Executive Coaching Intake</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Career Transition Intake</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Wellness Coaching Intake</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
              </div>
            </div>

            {/* Session Plans */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Session Plans</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Structured session agendas and conversation frameworks to guide productive coaching conversations.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">First Session Script</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">GROW Model Template</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Goal Setting Session</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Progress Review Template</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Progress Trackers</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Google Sheets and tracking tools to monitor client progress, goals, and milestones throughout the coaching journey.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Goal Progress Tracker</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Habit Formation Tracker</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Session Notes Template</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Client Journey Map</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
              </div>
            </div>

            {/* Business Documents */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Business Forms</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Legal agreements, proposals, and business documents to protect your practice and streamline operations.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Coaching Agreement Template</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Service Proposal Template</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Pricing Calculator</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Client Feedback Survey</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
              </div>
            </div>

            {/* Marketing Materials */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Marketing Tools</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Marketing templates and promotional materials to attract clients and grow your coaching practice.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Email Sequence Templates</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Social Media Content Pack</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Webinar Presentation Deck</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Lead Magnet Templates</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
              </div>
            </div>

            {/* Assessment Tools */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Assessment Tools</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Professional assessments and evaluation tools to understand client needs and measure coaching effectiveness.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Wheel of Life Assessment</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Values Clarification Exercise</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Readiness for Change Scale</span>
                  <button className="text-primary-600 text-sm font-medium hover:text-primary-700">Download</button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">
                    <a href="https://www.personality-quizzes.com/for-coaching?utm_source=lcl&utm_medium=referral&utm_campaign=for_coaching_library" 
                       className="text-primary-600 hover:text-primary-700"
                       target="_blank" 
                       rel="noopener noreferrer">
                      Premium Strengths Test
                    </a>
                  </span>
                  <span className="text-xs text-gray-500">External</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Custom Templates?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Looking for templates tailored to your specific coaching niche? Check out our specialized collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/workflows"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Browse Workflows
            </Link>
            <Link
              href="/guides"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border border-primary-600 hover:bg-primary-50 transition-colors"
            >
              Business Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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