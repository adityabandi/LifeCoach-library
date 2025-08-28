import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import CopyButton from '@/components/CopyButton'

export const metadata = generateSEO({
  title: 'Proven Coaching Models & Frameworks - GROW, OSKAR, Solution-Focused',
  description: 'Master evidence-based coaching models including GROW, OSKAR, CBT, and NLP frameworks. Templates and practical applications for life coaches.',
  keywords: ['coaching models', 'GROW model', 'OSKAR model', 'CBT coaching', 'NLP coaching', 'coaching frameworks'],
  canonicalUrl: 'https://adityabandi.github.io/LifeCoach-library/methods/coaching-models',
})

export default function CoachingModelsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Methods', href: '/methods' },
          { label: 'Coaching Models' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proven Coaching <span className="gradient-text">Models</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Master evidence-based coaching frameworks and methodologies that drive transformational client outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Effective coaching relies on proven frameworks that provide structure, direction, and measurable outcomes. 
              These evidence-based models have been refined through decades of practice and research, offering coaches 
              reliable pathways to facilitate meaningful client transformations.
            </p>
          </div>

          {/* GROW Model */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8 rounded-2xl mb-8">
              <h2 className="text-3xl font-bold mb-4">GROW Model</h2>
              <p className="text-primary-100 text-lg">
                The most widely used coaching framework, providing a clear structure for goal-oriented conversations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">G</span>
                    Goal
                  </h3>
                  <p className="text-gray-600">What do you want to achieve? Define clear, specific outcomes and vision.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">R</span>
                    Reality
                  </h3>
                  <p className="text-gray-600">What is the current situation? Explore present circumstances objectively.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">O</span>
                    Options
                  </h3>
                  <p className="text-gray-600">What could you do? Generate multiple pathways and creative solutions.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <span className="bg-primary-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">W</span>
                    Way Forward
                  </h3>
                  <p className="text-gray-600">What will you do? Commit to specific actions with timelines and accountability.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">GROW Model Questions Template</h4>
              <div className="bg-white p-4 rounded-lg border">
                <div className="space-y-4 text-sm">
                  <div>
                    <strong className="text-primary-600">Goal Questions:</strong>
                    <p className="text-gray-600 mt-1">• What would you like to focus on today?<br/>• How will you know you've achieved this goal?<br/>• What would success look like?</p>
                  </div>
                  <div>
                    <strong className="text-primary-600">Reality Questions:</strong>
                    <p className="text-gray-600 mt-1">• What's happening right now?<br/>• What have you tried so far?<br/>• What obstacles are you facing?</p>
                  </div>
                  <div>
                    <strong className="text-primary-600">Options Questions:</strong>
                    <p className="text-gray-600 mt-1">• What options do you have?<br/>• What else could you try?<br/>• What would you do if resources weren't an issue?</p>
                  </div>
                  <div>
                    <strong className="text-primary-600">Way Forward Questions:</strong>
                    <p className="text-gray-600 mt-1">• What will you do next?<br/>• When will you take this action?<br/>• How committed are you to this plan (1-10)?</p>
                  </div>
                </div>
                <CopyButton 
                  content="GROW Model Questions Template"
                  className="mt-4"
                />
              </div>
            </div>
          </div>

          {/* OSKAR Model */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl mb-8">
              <h2 className="text-3xl font-bold mb-4">OSKAR Model</h2>
              <p className="text-blue-100 text-lg">
                A solution-focused approach that emphasizes strengths, resources, and positive outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">O</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Outcome</h3>
                <p className="text-gray-600 text-sm">What do you want to achieve?</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">S</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Scaling</h3>
                <p className="text-gray-600 text-sm">Where are you now (1-10)?</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">K</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Know-how</h3>
                <p className="text-gray-600 text-sm">What skills do you have?</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">A</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Affirm</h3>
                <p className="text-gray-600 text-sm">What's working well?</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">R</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Review</h3>
                <p className="text-gray-600 text-sm">What will you do next?</p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">When to Use OSKAR</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">•</span>
                  Client feels stuck or overwhelmed
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">•</span>
                  Need to build confidence and momentum
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">•</span>
                  Focus on strengths rather than problems
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">•</span>
                  Quick breakthrough sessions needed
                </li>
              </ul>
            </div>
          </div>

          {/* CBT-Based Coaching */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl mb-8">
              <h2 className="text-3xl font-bold mb-4">CBT-Based Coaching</h2>
              <p className="text-green-100 text-lg">
                Cognitive Behavioral Therapy principles adapted for coaching to address limiting beliefs and thought patterns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Principles</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Thoughts → Feelings → Actions</h4>
                    <p className="text-gray-600 text-sm">Understanding the connection between cognitive patterns and behavior.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Identifying Cognitive Distortions</h4>
                    <p className="text-gray-600 text-sm">Recognizing unhelpful thinking patterns that limit potential.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Reframing Techniques</h4>
                    <p className="text-gray-600 text-sm">Developing more balanced and empowering perspectives.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Cognitive Distortions</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">All-or-Nothing</span>
                    <span className="text-gray-600">Black and white thinking</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">Catastrophizing</span>
                    <span className="text-gray-600">Expecting worst-case scenarios</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">Mind Reading</span>
                    <span className="text-gray-600">Assuming others' thoughts</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">Personalization</span>
                    <span className="text-gray-600">Taking responsibility for everything</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium mr-3 mt-0.5">Should Statements</span>
                    <span className="text-gray-600">Rigid expectations and rules</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">CBT Thought Record Template</h4>
              <div className="bg-white p-4 rounded-lg border">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900">Situation</strong>
                    <p className="text-gray-600 mt-1">What happened?</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Thoughts</strong>
                    <p className="text-gray-600 mt-1">What went through your mind?</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Feelings</strong>
                    <p className="text-gray-600 mt-1">How did you feel? (Rate 1-10)</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">Balanced Thought</strong>
                    <p className="text-gray-600 mt-1">What's a more balanced perspective?</p>
                  </div>
                </div>
                <CopyButton 
                  content="CBT Thought Record Template"
                  className="mt-4"
                />
              </div>
            </div>
          </div>

          {/* NLP-Based Coaching */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8 rounded-2xl mb-8">
              <h2 className="text-3xl font-bold mb-4">NLP-Based Coaching</h2>
              <p className="text-purple-100 text-lg">
                Neuro-Linguistic Programming techniques for rapid change and enhanced communication.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Anchoring</h3>
                <p className="text-gray-600 text-sm mb-4">Create positive state associations through sensory triggers.</p>
                <div className="text-xs text-gray-500">
                  <p><strong>Use for:</strong> Confidence building, peak state access</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Reframing</h3>
                <p className="text-gray-600 text-sm mb-4">Change meaning by shifting perspective on experiences.</p>
                <div className="text-xs text-gray-500">
                  <p><strong>Use for:</strong> Overcoming limiting beliefs, finding opportunities</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Timeline Therapy</h3>
                <p className="text-gray-600 text-sm mb-4">Release negative emotions and create compelling futures.</p>
                <div className="text-xs text-gray-500">
                  <p><strong>Use for:</strong> Goal setting, trauma resolution, motivation</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Well-Formed Outcome (NLP Goal Setting)</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Specific:</strong> What exactly do you want?</li>
                  <li><strong>Evidence:</strong> How will you know you've achieved it?</li>
                  <li><strong>Control:</strong> What can you personally influence?</li>
                  <li><strong>Resources:</strong> What do you need to succeed?</li>
                  <li><strong>Ecology:</strong> How does this fit with your life?</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Representational Systems</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div><strong>Visual:</strong> "I see what you mean"</div>
                  <div><strong>Auditory:</strong> "That sounds right"</div>
                  <div><strong>Kinesthetic:</strong> "I feel good about this"</div>
                  <div><strong>Digital:</strong> "That makes sense"</div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution-Focused Brief Therapy */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-8 rounded-2xl mb-8">
              <h2 className="text-3xl font-bold mb-4">Solution-Focused Coaching</h2>
              <p className="text-teal-100 text-lg">
                Brief therapy principles focused on solutions rather than problems, emphasizing client strengths and resources.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Techniques</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Miracle Question</h4>
                    <p className="text-gray-600 text-sm">"If a miracle happened overnight and your problem was solved, what would be different?"</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Exception Finding</h4>
                    <p className="text-gray-600 text-sm">"When was a time this problem wasn't happening? What was different then?"</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Scaling Questions</h4>
                    <p className="text-gray-600 text-sm">"On a scale of 1-10, where are you now? What would move you up one point?"</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Assumptions</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">✓</div>
                    <span className="text-gray-600">Clients are the experts on their own lives</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">✓</div>
                    <span className="text-gray-600">Small changes can lead to big differences</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">✓</div>
                    <span className="text-gray-600">Focus on solutions, not problems</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">✓</div>
                    <span className="text-gray-600">If it works, do more of it</span>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-teal-100 text-teal-600 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">✓</div>
                    <span className="text-gray-600">Every client has strengths and resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Choosing the Right Model */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Choosing the Right Model</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client Factors</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <div>
                      <strong>Learning Style:</strong> Visual, auditory, kinesthetic preferences
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <div>
                      <strong>Problem Type:</strong> Specific goal vs. complex life situation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <div>
                      <strong>Timeline:</strong> Quick breakthrough vs. long-term development
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <div>
                      <strong>Mindset:</strong> Problem-focused vs. solution-focused
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Session Context</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <div>
                      <strong>First Session:</strong> GROW for goal clarity, OSKAR for rapport
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <div>
                      <strong>Stuck Pattern:</strong> CBT for limiting beliefs, NLP for rapid change
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <div>
                      <strong>Goal Setting:</strong> GROW for structure, NLP for compelling outcomes
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-400 mr-2">•</span>
                    <div>
                      <strong>Crisis/Overwhelm:</strong> Solution-focused for immediate relief
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Integration Framework */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Integration Framework</h2>
            <p className="text-gray-600 mb-6">
              Master coaches seamlessly blend multiple models within a single session, adapting their approach based on 
              client needs and session dynamics.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Assessment Phase</h3>
                <p className="text-gray-600 text-sm">Use OSKAR scaling to gauge current state and GROW reality questions to understand context.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Exploration Phase</h3>
                <p className="text-gray-600 text-sm">Apply CBT thought records for limiting beliefs, solution-focused exceptions for strengths.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Action Phase</h3>
                <p className="text-gray-600 text-sm">Use GROW way forward for commitment, NLP well-formed outcomes for compelling goals.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}