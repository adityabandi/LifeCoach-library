import { notFound } from 'next/navigation'
import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import { templates } from '@/lib/templates'
import CopyButton from '@/components/CopyButton'

type Props = {
  params: { template: string }
}

export async function generateMetadata({ params }: Props) {
  const template = templates.find(t => t.slug === params.template)
  
  if (!template) {
    return {}
  }

  // Enhanced keywords based on template category
  const baseKeywords = [template.title.toLowerCase(), 'coaching template', 'free template']
  const categoryKeywords = {
    'intake-forms': ['client intake', 'coaching forms', 'personality assessment'],
    'session-plans': ['coaching session', 'session structure', 'coaching framework'],
    'progress-trackers': ['goal tracking', 'progress monitoring', 'coaching metrics'],
    'business-forms': ['coaching business', 'coaching agreements', 'professional forms'],
    'assessment-tools': ['coaching assessment', 'personality test', 'client evaluation', 'strengths assessment'],
    'marketing-tools': ['coaching marketing', 'client acquisition', 'coaching promotion']
  }

  const enhancedKeywords = [...baseKeywords, ...(categoryKeywords[template.category] || [])]

  return generateSEO({
    title: `${template.title} - Free Coaching Template`,
    description: template.description,
    keywords: enhancedKeywords,
    canonicalUrl: `https://lifecoachlibrary.com/templates/${params.template}`,
  })
}

export async function generateStaticParams() {
  return templates.map((template) => ({
    template: template.slug,
  }))
}

export default function TemplatePage({ params }: Props) {
  const template = templates.find(t => t.slug === params.template)

  if (!template) {
    notFound()
  }

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

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </li>
              <li>
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <Link href="/templates" className="text-gray-500 hover:text-gray-700">
                  Templates
                </Link>
              </li>
              <li>
                <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <span className="text-gray-900 font-medium">{template.title}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Template Content */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{template.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{template.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CopyButton
                content={template.content}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
              />
              {/* Removed file download option to keep templates view-only */}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Template Content</h2>
            <div className="bg-white rounded border p-6 font-mono text-sm whitespace-pre-wrap">
              {template.content}
            </div>
          </div>

          {/* Contextual Enhancement for Assessment-Related Templates */}
          {(template.category === 'intake-forms' || template.category === 'assessment-tools') && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                💡 Enhance This Template with Personality Insights
              </h3>
              <p className="text-blue-800 mb-4">
                Take your {template.category === 'intake-forms' ? 'client intake process' : 'assessment toolkit'} to the next level with professional personality assessments. Understanding personality types, communication styles, and motivational drivers creates more personalized and effective coaching relationships.
              </p>
              <a
                href="https://www.personality-quizzes.com/for-coaching?utm_source=lcl&utm_medium=referral&utm_campaign=template_enhancement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
              >
                Explore Professional Personality Assessments
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M7 7h.01M7 3h5l2 2v5" />
                </svg>
              </a>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/templates"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to All Templates
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}