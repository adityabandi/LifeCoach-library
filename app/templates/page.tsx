import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Logo from '@/components/Logo'

export const metadata = generateSEO({
  title: 'Free Coaching Templates - Intake Forms, Session Plans & Progress Trackers',
  description: 'Access free professional coaching templates including client intake forms, session agendas, progress trackers, and assessment tools. Ready to use immediately.',
  keywords: ['coaching templates', 'intake forms', 'session plans', 'progress trackers', 'coaching tools'],
  canonicalUrl: 'https://lifecoachlibrary.com/templates',
})

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Logo variant="icon" size="xl" className="mx-auto animate-float" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="gradient-text">Free Coaching</span><br />
              Templates & Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional templates for intake forms, session plans, personality assessments, progress tracking, and business operations. 
              Access immediately. No email required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#templates" className="btn-primary hover-lift">
                Browse Templates
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              <Link href="/guides" className="btn-secondary hover-lift">
                Business Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section id="templates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional <span className="gradient-text">Template Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive library of ready-to-use templates designed by experienced coaches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Intake Forms */}
            <div className="template-card hover-glow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center template-icon">
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
                  <Link
                    href="/templates/general-life-coaching-intake"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View General Life Coaching Intake form"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Executive Coaching Intake</span>
                  <Link
                    href="/templates/executive-coaching-intake"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Executive Coaching Intake form"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Career Transition Intake</span>
                  <Link
                    href="/templates/career-transition-intake"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Career Transition Intake form"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Wellness Coaching Intake</span>
                  <Link
                    href="/templates/wellness-coaching-intake"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Wellness Coaching Intake form"
                  >
                    View Template
                  </Link>
                </div>
              </div>
            </div>

            {/* Session Plans */}
            <div className="template-card hover-glow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center template-icon">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Session Plans</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Structured session agendas and planning templates. Includes GROW model frameworks and goal-setting templates.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">GROW Model Template</span>
                  <Link
                    href="/templates/grow-model-template"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View GROW Model Template"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Goal Setting Session</span>
                  <Link
                    href="/templates/goal-setting-session"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Goal Setting Session"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Progress Review Template</span>
                  <Link
                    href="/templates/progress-review-template"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Progress Review Template"
                  >
                    View Template
                  </Link>
                </div>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="template-card hover-glow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center template-icon">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Progress Tracking</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Goal tracking sheets, milestone markers, and progress measurement tools. Available in Google Sheets and PDF formats.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">90-Day Goal Tracker</span>
                  <Link
                    href="/templates/goal-progress-tracker"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View 90-Day Goal Tracker"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Weekly Check-in Form</span>
                  <Link
                    href="/templates/weekly-check-in-form"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Weekly Check-in Form"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Habit Tracker Worksheet</span>
                  <Link
                    href="/templates/habit-formation-tracker"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Habit Tracker Worksheet"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Client Journey Map</span>
                  <Link
                    href="/templates/client-journey-map"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Client Journey Map"
                  >
                    View Template
                  </Link>
                </div>
              </div>
            </div>

            {/* Business Documents */}
            <div className="template-card hover-glow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center template-icon">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Business Documents</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Essential business templates including service agreements, pricing sheets, and client feedback forms.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Service Agreement Template</span>
                  <Link
                    href="/templates/coaching-agreement-template"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Service Agreement Template"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Pricing Calculator</span>
                  <Link
                    href="/templates/pricing-calculator"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Pricing Calculator"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Client Feedback Survey</span>
                  <Link
                    href="/templates/client-feedback-survey"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Client Feedback Survey"
                  >
                    View Template
                  </Link>
                </div>
              </div>
            </div>

            {/* Marketing Materials */}
            <div className="template-card hover-glow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center template-icon">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Marketing Materials</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Professional marketing templates for social media, lead magnets, and content creation.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Social Media Content Pack</span>
                  <Link
                    href="/templates/social-media-content-pack"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Social Media Content Pack"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Webinar Presentation Deck</span>
                  <Link
                    href="/templates/webinar-presentation-deck"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Webinar Presentation Deck"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-700">Lead Magnet Templates</span>
                  <Link
                    href="/templates/lead-magnet-templates"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Lead Magnet Templates"
                  >
                    View Template
                  </Link>
                </div>
              </div>
            </div>

            {/* Assessment Tools */}
            <div className="template-card hover-glow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center template-icon">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Assessment Tools</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Personality assessments, self-discovery exercises, and evaluation tools for deeper client insights.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Wheel of Life Assessment</span>
                  <Link
                    href="/templates/wheel-of-life-assessment"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Wheel of Life Assessment"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Values Clarification Exercise</span>
                  <Link
                    href="/templates/values-clarification-exercise"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Values Clarification Exercise"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-700">Readiness for Change Scale</span>
                  <Link
                    href="/templates/readiness-for-change-scale"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift"
                    aria-label="View Readiness for Change Scale"
                  >
                    View Template
                  </Link>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div className="flex-1">
                    <span className="text-sm text-gray-700">Personality Assessment Tool</span>
                    <div className="text-xs text-gray-500 mt-1">External link to comprehensive assessment</div>
                  </div>
                  <a 
                    href="https://www.personality-quizzes.com/for-coaching?utm_source=lcl&utm_medium=referral&utm_campaign=for_coaching_library"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1 hover-lift inline-flex items-center"
                    aria-label="Visit Personality Assessment Tool"
                  >
                    Visit Tool
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M7 7h.01M7 3h5l2 2v5" />
                    </svg>
                  </a>
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
              className="btn-primary hover-lift"
            >
              Browse Workflows
            </Link>
            <Link
              href="/guides"
              className="btn-secondary hover-lift"
            >
              Business Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}