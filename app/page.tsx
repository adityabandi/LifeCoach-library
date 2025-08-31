import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Logo from '@/components/Logo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = generateSEO({
  title: 'How to Become a Life Coach',
  description: 'Learn how to become a life coach with our comprehensive guide. Get free templates, coaching methods, business strategies, and step-by-step training to start your practice.',
  keywords: ['how to become a life coach', 'life coaching certification', 'coaching business', 'life coach training', 'coaching templates', 'coaching methods'],
  canonicalUrl: 'https://lifecoachlibrary.com',
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="mobile-hero">
        <div className="mobile-container">
          <div className="text-center">
            <div className="mb-12">
              <Logo variant="icon" size="xl" className="mx-auto animate-float" />
            </div>
            <h1 className="mobile-hero-title text-gray-900 mb-8 leading-tight">
              Learn <span className="gradient-text">How to Become a Life Coach</span> and Build a Thriving Practice
            </h1>
            <p className="mobile-hero-subtitle mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover step-by-step training, free templates, proven coaching methods, and business strategies to start your life coaching career.
            </p>
            <div className="mobile-button-grid">
              <Link href="/guides/start-life-coaching-business" className="btn-primary hover-lift">
                Start Your Journey
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Link>
              <Link href="/templates" className="btn-secondary hover-lift">
                Get Free Templates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats & Trends */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Coaching Industry is <span className="gradient-text">Booming</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the fastest-growing wellness profession with our comprehensive resources
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="feature-card text-center hover-glow">
              <div className="text-5xl font-bold gradient-text mb-4">$4.5B+</div>
              <div className="text-gray-600 text-lg">Industry Revenue (2024)</div>
            </div>
            <div className="feature-card text-center hover-glow">
              <div className="text-5xl font-bold gradient-text mb-4">54%</div>
              <div className="text-gray-600 text-lg">Growth in Professional Coaches</div>
            </div>
            <div className="feature-card text-center hover-glow">
              <div className="text-5xl font-bold gradient-text mb-4">$7T</div>
              <div className="text-gray-600 text-lg">Projected Wellness Economy by 2025</div>
            </div>
          </div>
          <div className="text-center">
            <Link href="/guides/industry-trends-2025" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors hover-lift">
              Read Full Industry Report
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Resource Categories */}
      <section className="py-24 bg-gray-50 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Coaching <span className="gradient-text">Resource Library</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, grow, and scale your coaching practice
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Business Building */}
            <div className="feature-card hover-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 template-icon">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Building</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete guides for starting, pricing, and scaling your coaching practice with legal and positioning strategies.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Starting your coaching business
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Industry trends & market analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Legal structure & pricing strategies
                </li>
              </ul>
              <Link href="/guides" className="btn-outline w-full hover-lift">
                Explore Business Guides
              </Link>
            </div>

            {/* Coaching Methods */}
            <div className="feature-card hover-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-success-100 to-success-200 rounded-2xl flex items-center justify-center mb-6 template-icon">
                <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Methods</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Evidence-based coaching frameworks, exercises, and session structures used by successful coaches.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Essential coaching exercises
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Session structure frameworks
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-success-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Personality assessment tools
                </li>
              </ul>
              <Link href="/methods" className="btn-outline w-full hover-lift">
                Discover Methods
              </Link>
            </div>

            {/* Virtual Coaching */}
            <div className="feature-card hover-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6 template-icon">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Coaching</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Master online coaching with tools, best practices, and strategies for delivering powerful virtual sessions.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Essential virtual coaching tools
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Online session best practices
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Global reach & cost reduction strategies
                </li>
              </ul>
              <Link href="/guides/virtual-coaching" className="btn-outline w-full hover-lift">
                Go Virtual
              </Link>
            </div>

            {/* Marketing & Growth */}
            <div className="feature-card hover-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 template-icon">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing & Growth</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Proven marketing strategies to attract ideal clients and scale your coaching practice organically.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  SEO & content marketing strategies
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  LinkedIn networking for coaches
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Referral & word-of-mouth systems
                </li>
              </ul>
              <Link href="/growth" className="btn-outline w-full hover-lift">
                Grow Practice
              </Link>
            </div>

            {/* Templates & Tools */}
            <div className="feature-card hover-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mb-6 template-icon">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready-to-Use Templates</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access immediately. No email required. Ready to use.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Client intake & assessment forms
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Session agendas & planning sheets
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Progress trackers & goal worksheets
                </li>
              </ul>
              <Link href="/templates" className="btn-outline w-full hover-lift">
                Access Templates
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
            <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-lg border hover-glow">
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
                  <Link href="/guides/industry-trends-2025" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                    Read Full Analysis →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border hover-glow">
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
                  <Link href="/guides/virtual-coaching" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
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
            <div className="bg-white p-6 rounded-lg border text-center hover-glow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Wheel of Life</h3>
              <p className="text-gray-600 text-sm">Visual assessment tool for evaluating life satisfaction across key areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center hover-glow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">SMART Goals</h3>
              <p className="text-gray-600 text-sm">Framework for setting Specific, Measurable, Achievable, Relevant, Time-bound objectives</p>
            </div>
            <div className="bg-white p-6 rounded-lg border text-center hover-glow">
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
              className="btn-primary hover-lift"
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
            <div className="bg-primary-700 p-6 rounded-lg text-center hover-glow">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
              <h3 className="font-semibold mb-2">Learn the Fundamentals</h3>
              <p className="text-primary-100 text-sm mb-4">Start with our business setup guide and industry insights</p>
              <Link href="/guides/start-life-coaching-business" className="text-white underline text-sm hover-lift">
                Get Started →
              </Link>
            </div>
            <div className="bg-primary-700 p-6 rounded-lg text-center hover-glow">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
              <h3 className="font-semibold mb-2">Master Core Methods</h3>
              <p className="text-primary-100 text-sm mb-4">Learn proven coaching exercises and session structures</p>
              <Link href="/methods" className="text-white underline text-sm hover-lift">
                Learn Methods →
              </Link>
            </div>
            <div className="bg-primary-700 p-6 rounded-lg text-center hover-glow">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
              <h3 className="font-semibold mb-2">Set Up Systems</h3>
              <p className="text-primary-100 text-sm mb-4">Access templates and create client workflows</p>
              <Link href="/workflows" className="text-white underline text-sm hover-lift">
                Get Systems →
              </Link>
            </div>
            <div className="bg-primary-700 p-6 rounded-lg text-center hover-glow">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
              <h3 className="font-semibold mb-2">Attract Clients</h3>
              <p className="text-primary-100 text-sm mb-4">Implement marketing strategies to grow your practice</p>
              <Link href="/growth" className="text-white underline text-sm hover-lift">
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
              Access immediately. No email required. Ready to use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow hover-glow">
              <h3 className="text-lg font-semibold mb-2">Client Intake Forms</h3>
              <p className="text-gray-600 mb-4">Comprehensive onboarding forms for different coaching niches and specialties</p>
              <Link href="/templates" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                Access Templates →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow hover-glow">
              <h3 className="text-lg font-semibold mb-2">Session Agendas</h3>
              <p className="text-gray-600 mb-4">Structured session plans and agendas for consistent client outcomes</p>
              <Link href="/templates" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                Access Templates →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow hover-glow">
              <h3 className="text-lg font-semibold mb-2">Progress Trackers</h3>
              <p className="text-gray-600 mb-4">Google Sheets and PDFs to monitor client goals and milestones</p>
              <Link href="/templates" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                Access Templates →
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
              <div className="text-gray-600">Views This Month</div>
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
            <div className="bg-gray-50 p-6 rounded-lg hover-glow">
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

            <div className="bg-gray-50 p-6 rounded-lg hover-glow">
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

            <div className="bg-gray-50 p-6 rounded-lg hover-glow">
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
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover-lift"
            >
              Access All Templates
            </Link>
            <Link
              href="/guides/start-life-coaching-business"
              className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold border border-primary-400 hover:bg-primary-400 transition-colors hover-lift"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}