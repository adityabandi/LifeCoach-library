import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import Logo from '@/components/Logo'

export const metadata = generateSEO({
  title: 'Life Coach Marketing & Growth Strategies - Build Your Practice',
  description: 'Complete marketing funnel for life coaches: positioning, website conversion, SEO, LinkedIn, email funnels, referrals, pricing, and proof strategies.',
  keywords: ['life coach marketing', 'coaching business growth', 'coach SEO', 'LinkedIn for coaches', 'coaching referrals', 'coach pricing'],
  canonicalUrl: 'https://adityabandi.github.io/LifeCoach-library/growth',
})

export default function GrowthPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Growth' }
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
              Marketing & <span className="gradient-text">Growth</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Full-funnel marketing strategies: positioning → platform choice → content → funnels → referrals → proof → pricing psychology.
            </p>
          </div>
        </div>
      </section>

      {/* Marketing Funnel Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Marketing Funnel</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Build a predictable, scalable coaching practice with this proven marketing system.
            </p>
          </div>
          
          {/* Funnel Flow */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Positioning</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Platform Choice</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Content</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Funnels</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Referrals</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Social Proof</div>
            <div className="text-gray-400">→</div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-primary-200 text-primary-700 font-medium">Pricing</div>
          </div>
        </div>
      </section>

      {/* Core Marketing Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Marketing Strategies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven frameworks and templates to attract, convert, and retain ideal coaching clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Positioning & Niche */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Positioning & Niche</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Define your ideal client profile, pain points, promises, and proof to stand out in the market.
                </p>
                <Link href="/growth/positioning-for-coaches" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Find Your Niche →
                </Link>
              </div>
            </div>

            {/* Website Conversion */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Website That Converts</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Layout, copy, offers, and proof elements that turn visitors into discovery call bookings.
                </p>
                <Link href="/growth/website-conversion" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Optimize Site →
                </Link>
              </div>
            </div>

            {/* SEO for Coaches */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO for Life Coaches</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Topical maps, content cadence, and search optimization to rank for your ideal client searches.
                </p>
                <Link href="/growth/seo-for-life-coaches" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Rank Higher →
                </Link>
              </div>
            </div>

            {/* LinkedIn for Coaches */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">LinkedIn for Coaches</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Profile optimization, content framework, and DM scripts to generate quality leads on LinkedIn.
                </p>
                <Link href="/growth/linkedin-for-coaches" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Master LinkedIn →
                </Link>
              </div>
            </div>

            {/* Short Video Content */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Short Video Content</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Instagram/TikTok hooks and content systems for coaches (no dancing required).
                </p>
                <Link href="/growth/short-video-for-coaches" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Create Videos →
                </Link>
              </div>
            </div>

            {/* Email Funnels */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Funnels</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Lead magnet → nurture → offer sequences with proven templates and automation.
                </p>
                <Link href="/growth/email-funnels" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Build Funnels →
                </Link>
              </div>
            </div>

            {/* Webinar Playbook */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16M9 9h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Webinar That Converts</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Complete outline, slides, and registration page templates for high-converting webinars.
                </p>
                <Link href="/growth/webinar-playbook" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Host Webinars →
                </Link>
              </div>
            </div>

            {/* Referrals & Partnerships */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Referral & Partnership Engine</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Playbooks and scripts to build systematic referral relationships and strategic partnerships.
                </p>
                <Link href="/growth/referrals-partnerships" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Build Network →
                </Link>
              </div>
            </div>

            {/* Testimonials & Case Studies */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Testimonials & Case Studies</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Collection scripts and frameworks to capture powerful social proof that converts prospects.
                </p>
                <Link href="/growth/testimonials-case-studies" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Collect Proof →
                </Link>
              </div>
            </div>

            {/* Pricing Psychology */}
            <div className="feature-card hover-glow">
              <div className="feature-card-content">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing Psychology & Offers</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Tiering strategies, anchors, guarantees, and psychological principles for profitable pricing.
                </p>
                <Link href="/growth/pricing-for-coaches" className="text-primary-600 font-medium hover:text-primary-700 transition-colors hover-lift">
                  Price Profitably →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Platform-Specific Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform-Specific Marketing</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored strategies for each major marketing platform and coaching niche.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">LinkedIn Marketing</h4>
              <p className="text-gray-600 text-sm mb-3">Professional networking strategies</p>
              <Link href="/templates" className="text-primary-600 text-sm font-medium">View →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">Instagram/TikTok</h4>
              <p className="text-gray-600 text-sm mb-3">Short-form video content</p>
              <Link href="/growth/short-video-for-coaches" className="text-primary-600 text-sm font-medium">Create Content →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">YouTube Strategy</h4>
              <p className="text-gray-600 text-sm mb-3">Long-form content marketing</p>
              <Link href="/growth" className="text-primary-600 text-sm font-medium">Coming Soon →</Link>
            </div>
            <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <h4 className="font-semibold mb-2">Podcast Marketing</h4>
              <p className="text-gray-600 text-sm mb-3">Audio content strategies</p>
              <Link href="/growth" className="text-primary-600 text-sm font-medium">Coming Soon →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* View Resources */}
      <Footer />
    </div>
  )
}