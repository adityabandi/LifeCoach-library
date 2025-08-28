import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Logo from '@/components/Logo'

export const metadata = generateSEO({
  title: 'Client Lifecycle Workflows - Life Coach Process Templates',
  description: 'Complete client journey workflows from lead to offboarding. Process maps, checklists, and templates for discovery, intake, onboarding, sessions, reviews, and reactivation.',
  keywords: ['coaching workflows', 'client lifecycle', 'coaching process', 'client onboarding', 'coaching templates', 'discovery call script'],
  canonicalUrl: 'https://adityabandi.github.io/LifeCoach-library/workflows',
})

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Workflows' }
        ]} 
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Logo variant="icon" size="lg" className="mx-auto animate-float" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client Lifecycle <span className="gradient-text">Workflows</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete process maps and templates guiding clients from lead → discovery → intake → onboarding → first 30 days → ongoing sessions → progress reviews → offboarding & reactivation.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Client Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow this proven workflow sequence to deliver consistent, transformational coaching experiences.
            </p>
          </div>
          
          {/* Process Map */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Lead</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Discovery</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Intake</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Onboarding</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">First 30 Days</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Ongoing Sessions</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Progress Reviews</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Offboarding & Reactivation</div>
          </div>
        </div>
      </section>

      {/* Core Workflow Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Workflow Templates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential processes every life coach needs to deliver professional, results-driven coaching experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Discovery Call SOP */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery Call SOP</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  30-minute script template with note-taking framework to qualify prospects and close ideal clients.
                </p>
                <Link href="/workflows/discovery-call-script" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Get Script Template →
                </Link>
              </div>
            </div>

            {/* Coaching Intake */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Coaching Intake Process</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Essential questions, consent forms, and red flag identification to set proper boundaries.
                </p>
                <Link href="/workflows/coaching-intake-questions" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  View Intake Forms →
                </Link>
              </div>
            </div>

            {/* Client Onboarding */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Onboarding Week 1</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Set expectations, establish metrics, and define success milestones for new coaching relationships.
                </p>
                <Link href="/workflows/client-onboarding-checklist" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Get Checklist →
                </Link>
              </div>
            </div>

            {/* First Session */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">First Session (60-Min) Agenda</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Structured flow: Open → Goals → Plan → Next Steps with timeboxed segments.
                </p>
                <Link href="/workflows/first-session-agenda" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  View Agenda →
                </Link>
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Progress Tracking</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Scorecards, OKRs, and habit tracking systems to measure and celebrate client growth.
                </p>
                <Link href="/workflows/progress-tracking" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  View Tracking Tools →
                </Link>
              </div>
            </div>

            {/* Review Cadence */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Review Cadence & Accountability</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Weekly, biweekly, and monthly review frameworks to maintain momentum and accountability.
                </p>
                <Link href="/workflows/review-cadence" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Setup Reviews →
                </Link>
              </div>
            </div>

            {/* Boundaries & Escalations */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Escalations & Boundaries</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Scope management, time boundaries, and mental health triage protocols for professional practice.
                </p>
                <Link href="/workflows/boundaries-escalations" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Set Boundaries →
                </Link>
              </div>
            </div>

            {/* Offboarding & Reactivation */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Offboarding & Reactivation</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Graduation processes, referral systems, testimonial collection, and reactivation strategies.
                </p>
                <Link href="/workflows/offboarding-reactivation" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  End on High Note →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready-to-Use Templates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download professional templates and forms to implement these workflows immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">Discovery Call Notes</h4>
              <p className="text-gray-600 text-sm mb-3">Google Doc template</p>
              <Link href="/templates" className="text-primary-600 text-sm font-medium">Download →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">Intake Forms</h4>
              <p className="text-gray-600 text-sm mb-3">PDF + Typeform versions</p>
              <Link href="/templates" className="text-primary-600 text-sm font-medium">Download →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">First Session Slides</h4>
              <p className="text-gray-600 text-sm mb-3">Google Slides template</p>
              <Link href="/templates" className="text-primary-600 text-sm font-medium">Download →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">Progress Tracker</h4>
              <p className="text-gray-600 text-sm mb-3">Google Sheets template</p>
              <Link href="/templates" className="text-primary-600 text-sm font-medium">Download →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}