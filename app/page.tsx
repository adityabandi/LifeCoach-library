import Link from 'next/link'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: 'Free Coaching Templates & Business Resources for Life Coaches',
  description: 'Download free coaching templates, intake forms, session plans, and business guides. Proven methods and tools to grow your life coaching practice.',
  keywords: ['coaching templates', 'life coach resources', 'coaching business', 'intake forms', 'coaching methods'],
  canonicalUrl: 'https://adityabandi.github.io/LifeCoach-library',
})

export default function HomePage() {
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
      <section className="bg-gradient-to-b from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to Build a Thriving Coaching Practice
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From startup guides to advanced marketing strategies, get access to proven templates, 
              coaching methodologies, and business resources used by successful life coaches worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/templates"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Get Free Templates
              </Link>
              <Link
                href="/guides/start-life-coaching-business"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border border-primary-600 hover:bg-primary-50 transition-colors"
              >
                Start Your Practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats & Trends */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Coaching Industry is Booming
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join the fastest-growing wellness profession with our comprehensive resources
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">$4.5B+</div>
              <div className="text-gray-600">Industry Revenue (2022)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">54%</div>
              <div className="text-gray-600">Growth in Professional Coaches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">$7T</div>
              <div className="text-gray-600">Projected Wellness Economy by 2025</div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/guides/industry-trends-2025"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              Read Full Industry Report →
            </Link>
          </div>
        </div>
      </section>

      {/* Core Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Coaching Resource Library
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Business Building */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Building</h3>
              <p className="text-gray-600 mb-4">
                Complete guides for starting, pricing, and scaling your coaching practice with legal and positioning strategies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Starting your coaching business</li>
                <li>• Industry trends & market analysis</li>
                <li>• Legal structure & pricing strategies</li>
              </ul>
              <Link href="/guides" className="text-primary-600 font-medium hover:text-primary-700">
                Explore Business Guides →
              </Link>
            </div>

            {/* Coaching Methods */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Methods</h3>
              <p className="text-gray-600 mb-4">
                Evidence-based coaching frameworks, exercises, and session structures used by successful coaches.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Coaching exercises (Wheel of Life, SMART goals)</li>
                <li>• Session structure & planning templates</li>
                <li>• Coaching models (GROW, CLEAR, OSKAR)</li>
              </ul>
              <Link href="/methods" className="text-primary-600 font-medium hover:text-primary-700">
                Learn Methods →
              </Link>
            </div>

            {/* Client Management */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Workflows</h3>
              <p className="text-gray-600 mb-4">
                Streamlined systems for onboarding, managing relationships, and tracking client progress effectively.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Client intake & onboarding process</li>
                <li>• Relationship management strategies</li>
                <li>• Progress tracking & milestone systems</li>
              </ul>
              <Link href="/workflows" className="text-primary-600 font-medium hover:text-primary-700">
                Get Workflows →
              </Link>
            </div>

            {/* Virtual Coaching */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Virtual Coaching</h3>
              <p className="text-gray-600 mb-4">
                Master online coaching with tools, best practices, and strategies for delivering powerful virtual sessions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Essential virtual coaching tools</li>
                <li>• Online session best practices</li>
                <li>• Global reach & cost reduction strategies</li>
              </ul>
              <Link href="/guides/virtual-coaching" className="text-primary-600 font-medium hover:text-primary-700">
                Go Virtual →
              </Link>
            </div>

            {/* Marketing & Growth */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing & Growth</h3>
              <p className="text-gray-600 mb-4">
                Proven marketing strategies to attract ideal clients and scale your coaching practice organically.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• SEO & content marketing strategies</li>
                <li>• LinkedIn networking for coaches</li>
                <li>• Referral & word-of-mouth systems</li>
              </ul>
              <Link href="/growth" className="text-primary-600 font-medium hover:text-primary-700">
                Grow Practice →
              </Link>
            </div>

            {/* Templates & Tools */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Ready-to-Use Templates</h3>
              <p className="text-gray-600 mb-4">
                Download immediately. Professional templates for intake, sessions, progress tracking, and client management.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Client intake & assessment forms</li>
                <li>• Session agendas & planning sheets</li>
                <li>• Progress trackers & goal worksheets</li>
              </ul>
              <Link href="/templates" className="text-primary-600 font-medium hover:text-primary-700">
                Download Templates →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deep-Dive Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured In-Depth Guides
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive articles covering the most important aspects of building a successful coaching practice
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-lg border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Life Coaching Industry Trends 2025</h3>
                  <p className="text-gray-600 mb-4">
                    Deep dive into the $4.5B coaching industry with market analysis, emerging specialties, 
                    certification insights, and technology trends shaping the future of coaching.
                  </p>
                  <Link href="/guides/industry-trends-2025" className="text-primary-600 font-medium hover:text-primary-700">
                    Read Full Analysis →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Virtual Coaching Mastery</h3>
                  <p className="text-gray-600 mb-4">
                    Complete guide to delivering powerful online coaching sessions, including essential tools, 
                    best practices, and strategies for building trust and engagement virtually.
                  </p>
                  <Link href="/guides/virtual-coaching" className="text-primary-600 font-medium hover:text-primary-700">
                    Master Virtual Coaching →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Coaching Exercises Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Essential Coaching Exercises
            </h2>
            <p className="text-lg text-gray-600">
              Proven tools to transform abstract desires into tangible goals and increase client self-awareness
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Wheel of Life</h3>
              <p className="text-gray-600 text-sm">Visual assessment tool for evaluating life satisfaction across key areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">SMART Goals</h3>
              <p className="text-gray-600 text-sm">Framework for setting Specific, Measurable, Achievable, Relevant, Time-bound objectives</p>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Values Assessment</h3>
              <p className="text-gray-600 text-sm">Help clients identify core values to guide decision-making and goal alignment</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/methods/coaching-exercises"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Explore All Exercises
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Start Action Plan */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Start Building Your Practice Today
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Follow our proven step-by-step roadmap to launch and grow your coaching business
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-primary-700 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
              <h3 className="font-semibold mb-2">Learn the Fundamentals</h3>
              <p className="text-primary-100 text-sm mb-4">Start with our business setup guide and industry insights</p>
              <Link href="/guides/start-life-coaching-business" className="text-white underline text-sm">
                Get Started →
              </Link>
            </div>
            <div className="bg-primary-700 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
              <h3 className="font-semibold mb-2">Master Core Methods</h3>
              <p className="text-primary-100 text-sm mb-4">Learn proven coaching exercises and session structures</p>
              <Link href="/methods" className="text-white underline text-sm">
                Learn Methods →
              </Link>
            </div>
            <div className="bg-primary-700 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
              <h3 className="font-semibold mb-2">Set Up Systems</h3>
              <p className="text-primary-100 text-sm mb-4">Download templates and create client workflows</p>
              <Link href="/workflows" className="text-white underline text-sm">
                Get Systems →
              </Link>
            </div>
            <div className="bg-primary-700 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
              <h3 className="font-semibold mb-2">Attract Clients</h3>
              <p className="text-primary-100 text-sm mb-4">Implement marketing strategies to grow your practice</p>
              <Link href="/growth" className="text-white underline text-sm">
                Grow Business →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free Professional Templates
            </h2>
            <p className="text-xl text-gray-600">
              Download immediately. No email required. Ready to use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Client Intake Forms</h3>
              <p className="text-gray-600 mb-4">Comprehensive onboarding forms for different coaching niches and specialties</p>
              <Link href="/templates" className="text-primary-600 font-medium hover:text-primary-700">
                Download Free →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Session Agendas</h3>
              <p className="text-gray-600 mb-4">Structured session plans and agendas for consistent client outcomes</p>
              <Link href="/templates" className="text-primary-600 font-medium hover:text-primary-700">
                Download Free →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Progress Trackers</h3>
              <p className="text-gray-600 mb-4">Google Sheets and PDFs to monitor client goals and milestones</p>
              <Link href="/templates" className="text-primary-600 font-medium hover:text-primary-700">
                Download Free →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Coaches Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of successful coaches using our resources
            </p>
          </div>
          
          {/* Usage Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">15,000+</div>
              <div className="text-gray-600">Downloads This Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">89</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2019</div>
              <div className="text-gray-600">Helping Coaches Since</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The intake forms saved me hours of work. My client onboarding is now professional and systematic. 
                These templates are exactly what I needed to scale my practice."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-semibold">SJ</span>
                </div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Life Coach, California</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The virtual coaching guide transformed how I deliver sessions online. My clients are more engaged 
                and I've been able to expand globally. Incredible resource!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-semibold">MC</span>
                </div>
                <div>
                  <div className="font-semibold">Marcus Chen</div>
                  <div className="text-sm text-gray-500">Executive Coach, Singapore</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "As a new coach, these business guides gave me the confidence to start my practice. 
                The pricing strategies alone paid for themselves in my first month."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary-600 font-semibold">AL</span>
                </div>
                <div>
                  <div className="font-semibold">Anna Lopez</div>
                  <div className="text-sm text-gray-500">Wellness Coach, Texas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter & Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Coaching Practice?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get instant access to all our resources, templates, and proven strategies. 
            Start building the thriving practice you've always envisioned.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download All Templates
            </Link>
            <Link
              href="/guides/start-life-coaching-business"
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold border border-primary-400 hover:bg-primary-400 transition-colors"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Life Coach Library</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive resources and proven strategies to build and grow your coaching practice.
              </p>
              <div className="text-sm text-gray-500">
                © 2025 Life Coach Library. Free resources for coaches worldwide.
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Business Building</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guides/start-life-coaching-business" className="hover:text-white">Start Your Practice</Link></li>
                <li><Link href="/guides/industry-trends-2025" className="hover:text-white">Industry Trends</Link></li>
                <li><Link href="/growth" className="hover:text-white">Marketing Strategies</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Coaching Methods</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/methods/coaching-exercises" className="hover:text-white">Coaching Exercises</Link></li>
                <li><Link href="/methods/coaching-session-structure" className="hover:text-white">Session Structure</Link></li>
                <li><Link href="/guides/virtual-coaching" className="hover:text-white">Virtual Coaching</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Client Management</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/workflows/client-intake-onboarding" className="hover:text-white">Client Intake</Link></li>
                <li><Link href="/workflows/progress-tracking" className="hover:text-white">Progress Tracking</Link></li>
                <li><Link href="/templates" className="hover:text-white">Free Templates</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}