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

  return generateSEO({
    title: `${template.title} - Free Coaching Template`,
    description: template.description,
    keywords: [template.title.toLowerCase(), 'coaching template', 'free download'],
    canonicalUrl: `https://adityabandi.github.io/LifeCoach-library/templates/${params.template}`,
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
              <Link
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(template.content)}`}
                download={`${template.slug}.txt`}
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold border border-primary-600 hover:bg-primary-50 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download as File
              </Link>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Template Content</h2>
            <div className="bg-white rounded border p-6 font-mono text-sm whitespace-pre-wrap">
              {template.content}
            </div>
          </div>

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