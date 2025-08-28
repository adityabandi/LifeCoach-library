import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumb = ({ items, className = '' }: BreadcrumbProps) => {
  return (
    <div className={`bg-gray-50 py-4 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-400" aria-hidden="true">
                    ›
                  </span>
                )}
                {item.href ? (
                  <Link 
                    href={item.href} 
                    className="hover:text-gray-700 transition-colors duration-200 hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default Breadcrumb