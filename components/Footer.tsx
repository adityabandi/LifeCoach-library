import Link from 'next/link'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo variant="full" size="md" className="filter brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Comprehensive resources and proven strategies to build and grow your coaching practice.
            </p>
            <div className="text-sm text-gray-500">
              © 2025 Life Coach Library. Free resources for coaches worldwide.
            </div>
          </div>
          
          {/* Business Building */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Business Building</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/guides/start-life-coaching-business" className="text-gray-400 hover:text-white transition-colors">
                  Start Your Practice
                </Link>
              </li>
              <li>
                <Link href="/guides/industry-trends-2025" className="text-gray-400 hover:text-white transition-colors">
                  Industry Trends
                </Link>
              </li>
              <li>
                <Link href="/growth" className="text-gray-400 hover:text-white transition-colors">
                  Marketing Strategies
                </Link>
              </li>
              <li>
                <Link href="/guides/virtual-coaching" className="text-gray-400 hover:text-white transition-colors">
                  Virtual Coaching
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/guides" className="text-gray-400 hover:text-white transition-colors">
                  Business Guides
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-gray-400 hover:text-white transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/methods" className="text-gray-400 hover:text-white transition-colors">
                  Coaching Methods
                </Link>
              </li>
              <li>
                <Link href="/workflows" className="text-gray-400 hover:text-white transition-colors">
                  Workflows
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Tools & Assessment */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Tools & Assessment</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/methods/coaching-exercises" className="text-gray-400 hover:text-white transition-colors">
                  Coaching Exercises
                </Link>
              </li>
              <li>
                <Link href="/methods/coaching-session-structure" className="text-gray-400 hover:text-white transition-colors">
                  Session Structure
                </Link>
              </li>
              <li>
                <Link href="/workflows/client-intake-onboarding" className="text-gray-400 hover:text-white transition-colors">
                  Client Intake
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.personality-quizzes.com/for-coaching?utm_source=lcl&utm_medium=referral&utm_campaign=for_coaching_library" 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Personality Assessments
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Built with ❤️ for life coaches worldwide. All resources are free to use.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer