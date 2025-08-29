import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateSEO({
  title: 'Client Onboarding Checklist - First Week Setup for Life Coaches',
  description: 'Complete onboarding checklist for new coaching clients. Set expectations, establish metrics, define success milestones, and create accountability systems from day one.',
  keywords: ['client onboarding', 'coaching checklist', 'new client setup', 'coaching expectations', 'client success metrics'],
  canonicalUrl: 'https://lifecoachlibrary.com/workflows/client-onboarding-checklist',
})

export default function ClientOnboardingChecklistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Workflows', href: '/workflows' },
          { label: 'Client Onboarding Checklist' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Client Onboarding Checklist: The First Week Framework
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Set your new coaching relationships up for success with this comprehensive onboarding system that establishes clear expectations, metrics, and accountability from day one.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Published: August 28, 2025</span>
            <span className="mx-2">•</span>
            <span>12 min read</span>
          </div>
        </header>

        <div className="prose-custom">
          <p>
            The first week of a coaching relationship sets the tone for everything that follows. A structured onboarding process transforms nervous, uncertain new clients into confident, committed partners in their own transformation.
          </p>

          <p>
            This checklist covers the critical 7 days between "Yes, I want to work with you" and your first official coaching session, ensuring every client starts with clarity, confidence, and momentum.
          </p>

          <h2>Why onboarding matters</h2>
          <p>
            Research shows that clients who complete a structured onboarding process are 73% more likely to complete their coaching program and 2.3x more likely to achieve their stated goals. Proper onboarding:
          </p>

          <ul>
            <li>Reduces client anxiety and buyer's remorse</li>
            <li>Sets clear expectations and boundaries</li>
            <li>Establishes measurement systems early</li>
            <li>Creates momentum before the first session</li>
            <li>Positions you as the professional expert</li>
          </ul>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">Onboarding Success Metric</h3>
            <p className="text-primary-800">
              Clients who complete 80%+ of your onboarding checklist before the first session show 90% higher program completion rates and significantly better outcomes.
            </p>
          </div>

          <h2>Pre-onboarding: Contract to first contact (Day 0)</h2>
          <p>
            The moment a client signs your contract, your onboarding sequence begins. This immediate response prevents second-guessing and maintains momentum.
          </p>

          <h3>Immediate automated response (within 1 hour):</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Welcome Email Template:</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Subject:</strong> Welcome to [Your Program Name] - Next Steps Inside</p>
              <p><strong>Body:</strong></p>
              <p>"[Client Name], welcome to the [Program Name] family!</p>
              <p>I'm thrilled you've decided to invest in yourself and your growth. Over the next [program length], we'll work together to [specific transformation promise].</p>
              <p><strong>What happens next:</strong></p>
              <p>1. You'll receive your Welcome Packet within 24 hours<br/>
              2. Complete your pre-program assessment (takes 15 minutes)<br/>
              3. Schedule your first session using the link below<br/>
              4. Join our private client community</p>
              <p>I can't wait to begin this journey with you!</p>
              <p>[Your signature]"</p>
            </div>
          </div>

          <h2>Day 1: Welcome packet delivery</h2>
          <p>
            Your welcome packet sets professional expectations and gets clients thinking about their goals before you even meet.
          </p>

          <h3>Welcome packet contents:</h3>
          <h4>1. Personal welcome video (2-3 minutes)</h4>
          <ul>
            <li>Acknowledge their specific situation/goals</li>
            <li>Share your excitement about working together</li>
            <li>Preview what they can expect in week 1</li>
            <li>Reinforce their smart decision to invest in coaching</li>
          </ul>

          <h4>2. Program overview document</h4>
          <ul>
            <li>Session schedule and structure</li>
            <li>Communication preferences and boundaries</li>
            <li>What to expect in each phase of the program</li>
            <li>Success metrics and tracking methods</li>
          </ul>

          <h4>3. Pre-program assessment</h4>
          <ul>
            <li>Current state evaluation (1-10 scales)</li>
            <li>Goal clarity and motivation assessment</li>
            <li>Learning style and communication preferences</li>
            <li>Potential obstacles and support systems</li>
          </ul>

          <h4>4. First session preparation guide</h4>
          <ul>
            <li>What to prepare beforehand</li>
            <li>Questions they should come ready to discuss</li>
            <li>Technical setup instructions for virtual sessions</li>
          </ul>

          <div className="bg-accent-50 border-l-4 border-accent-500 p-6 my-8">
            <h4 className="text-lg font-semibold text-accent-900 mb-2">Pro Tip: Personalization</h4>
            <p className="text-accent-800">
              Reference specific details from your discovery call in the welcome packet. "Based on our conversation about your promotion goal..." shows you were listening and creates immediate connection.
            </p>
          </div>

          <h2>Day 2-3: Assessment completion and scheduling</h2>
          <p>
            Follow up to ensure they've received everything and guide them through the next steps.
          </p>

          <h3>Follow-up sequence:</h3>
          <h4>Day 2 email:</h4>
          <ul>
            <li>Check if they received the welcome packet</li>
            <li>Remind them to complete the assessment</li>
            <li>Offer to answer any questions</li>
            <li>Share a relevant resource or article</li>
          </ul>

          <h4>Day 3 (if assessment not completed):</h4>
          <ul>
            <li>Gentle reminder with direct link</li>
            <li>Offer to complete it together via phone if needed</li>
            <li>Address any concerns about the questions</li>
          </ul>

          <h3>Scheduling first session:</h3>
          <ul>
            <li>Provide calendar link with specific time slots</li>
            <li>Include timezone confirmation</li>
            <li>Send calendar invite immediately upon booking</li>
            <li>Include session agenda and prep materials</li>
          </ul>

          <h2>Day 4-5: Goal setting and baseline establishment</h2>
          <p>
            Use their assessment responses to create a preliminary coaching plan and establish baseline metrics.
          </p>

          <h3>Goal clarification process:</h3>
          <h4>Review their assessment for:</h4>
          <ul>
            <li>Stated goals vs. underlying desires</li>
            <li>Realistic timelines and expectations</li>
            <li>Potential obstacles and limiting beliefs</li>
            <li>Support systems and resources available</li>
          </ul>

          <h4>Create preliminary success metrics:</h4>
          <ul>
            <li>Quantitative measures (income, weight, hours, etc.)</li>
            <li>Qualitative measures (confidence, relationships, satisfaction)</li>
            <li>Behavioral indicators (habits, responses, choices)</li>
            <li>Milestone checkpoints throughout the program</li>
          </ul>

          <h3>Baseline establishment:</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Key Baseline Metrics to Track:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Life satisfaction wheel (8 areas, 1-10 scale)</li>
              <li>• Energy levels throughout the week</li>
              <li>• Time allocation across priorities</li>
              <li>• Stress/anxiety levels in key situations</li>
              <li>• Confidence in relevant areas</li>
              <li>• Key habit consistency</li>
              <li>• Relationship quality measures</li>
              <li>• Financial or career-specific metrics</li>
            </ul>
          </div>

          <h2>Day 6: Community integration and resource sharing</h2>
          <p>
            Connect new clients with your broader community and provide initial resources to build momentum.
          </p>

          <h3>Community onboarding:</h3>
          <h4>Private client group introduction:</h4>
          <ul>
            <li>Welcome post introducing the new client</li>
            <li>Encourage them to share their goal (if comfortable)</li>
            <li>Connect them with clients who have similar objectives</li>
            <li>Share community guidelines and best practices</li>
          </ul>

          <h4>Resource library access:</h4>
          <ul>
            <li>Curated reading list for their specific goals</li>
            <li>Relevant podcast episodes or videos</li>
            <li>Worksheets and tools they can use immediately</li>
            <li>Apps or tools that support their objectives</li>
          </ul>

          <h3>Momentum-building activities:</h3>
          <ul>
            <li>One small action they can take before the first session</li>
            <li>A mindset exercise or reflection question</li>
            <li>Permission to start tracking one key metric</li>
            <li>Connection to an accountability partner if relevant</li>
          </ul>

          <h2>Day 7: First session preparation and expectation setting</h2>
          <p>
            Ensure both you and your client are fully prepared for a powerful first session.
          </p>

          <h3>Pre-session preparation email:</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Day 7 Email Template:</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Subject:</strong> Tomorrow's Session - Come Prepared!</p>
              <p>"Hi [Name],</p>
              <p>I'm excited about our first official session tomorrow! Based on your assessment, I've prepared a customized agenda that will help us hit the ground running.</p>
              <p><strong>To make the most of our time together, please:</strong></p>
              <p>1. Review your completed assessment and note any additional thoughts<br/>
              2. Prepare 2-3 specific questions about your goals<br/>
              3. Think about what success would look like 30 days from now<br/>
              4. Test your technology 10 minutes before our session</p>
              <p><strong>What to expect:</strong> We'll clarify your goals, create your action plan, and schedule your next session. Come ready to dig deep!</p>
              <p>See you tomorrow!</p>
              <p>[Your signature]"</p>
            </div>
          </div>

          <h3>Coach preparation checklist:</h3>
          <h4>Review client materials:</h4>
          <ul>
            <li>Re-read discovery call notes</li>
            <li>Analyze assessment responses for patterns</li>
            <li>Identify 2-3 key areas to focus on initially</li>
            <li>Prepare relevant tools, exercises, or frameworks</li>
          </ul>

          <h4>Session planning:</h4>
          <ul>
            <li>Create customized agenda based on their needs</li>
            <li>Prepare 3-5 powerful questions to explore goals</li>
            <li>Plan one quick win or tool they can implement immediately</li>
            <li>Have accountability structure ready to propose</li>
          </ul>

          <h2>Onboarding quality control checklist</h2>
          <p>
            Use this checklist to ensure consistent, professional onboarding for every client:
          </p>

          <div className="bg-primary-50 p-6 rounded-lg my-8">
            <h3 className="font-semibold mb-4">Week 1 Completion Checklist:</h3>
            <div className="space-y-2 text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox"/>
                <span>Welcome email sent within 1 hour of contract signing</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox"/>
                <span>Welcome packet delivered within 24 hours</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox"/>
                <span>Pre-program assessment completed by client</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox"/>
                <span>First session scheduled with calendar invite sent</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox"/>
                <span>Baseline metrics established</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox"/>
                <span>Community access provided and introduction made</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox"/>
                <span>Resource library access granted</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox"/>
                <span>Pre-session preparation email sent 24 hours before</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox"/>
                <span>Coach preparation completed (notes, agenda, tools ready)</span>
              </label>
            </div>
          </div>

          <h2>Common onboarding mistakes to avoid</h2>

          <h3>1. Information overload</h3>
          <p>
            Don't dump everything on them at once. Space out information delivery and focus on what they need for the next step, not the entire program.
          </p>

          <h3>2. Generic welcome messages</h3>
          <p>
            Avoid templates that could apply to anyone. Reference specific details from your discovery call and their unique situation.
          </p>

          <h3>3. Passive expectation setting</h3>
          <p>
            Don't just tell them what to expect—actively involve them in the process. Ask for their preferences and incorporate them into your approach.
          </p>

          <h3>4. No accountability for onboarding tasks</h3>
          <p>
            If clients don't complete pre-work, address it immediately. The pattern they set in onboarding often continues throughout the program.
          </p>

          <h3>5. Technical assumptions</h3>
          <p>
            Always test technology and provide clear instructions. A frustrated client in the first session starts you behind the curve.
          </p>

          <h2>Measuring onboarding success</h2>
          <p>
            Track these metrics to continuously improve your onboarding process:
          </p>

          <h3>Completion rates:</h3>
          <ul>
            <li>Percentage who complete the full assessment</li>
            <li>Time from contract to first session scheduled</li>
            <li>Engagement with welcome materials and resources</li>
            <li>Community participation rates</li>
          </ul>

          <h3>Quality indicators:</h3>
          <ul>
            <li>First session preparation level</li>
            <li>Goal clarity coming into the program</li>
            <li>Questions quality and depth</li>
            <li>Enthusiasm and engagement levels</li>
          </ul>

          <h3>Long-term correlation:</h3>
          <ul>
            <li>Program completion rates by onboarding score</li>
            <li>Goal achievement rates</li>
            <li>Client satisfaction and testimonial quality</li>
            <li>Referral rates from well-onboarded clients</li>
          </ul>

          <h2>Customizing for different client types</h2>

          <h3>High-achiever executives:</h3>
          <ul>
            <li>Streamlined, efficient communication</li>
            <li>Clear ROI and success metrics</li>
            <li>Professional, results-focused language</li>
            <li>Integration with their existing systems</li>
          </ul>

          <h3>Life transition clients:</h3>
          <ul>
            <li>Extra emotional support and reassurance</li>
            <li>Gentle pace with more check-ins</li>
            <li>Focus on stability and small wins</li>
            <li>Connection to relevant support resources</li>
          </ul>

          <h3>Young professionals:</h3>
          <ul>
            <li>Mobile-friendly materials and communication</li>
            <li>Visual aids and interactive elements</li>
            <li>Peer connection opportunities</li>
            <li>Flexible scheduling options</li>
          </ul>

          <h2>Implementation timeline</h2>

          <h3>Week 1: Create core materials</h3>
          <ul>
            <li>Draft welcome email templates</li>
            <li>Build pre-program assessment</li>
            <li>Create program overview document</li>
            <li>Set up automated sequences</li>
          </ul>

          <h3>Week 2: Test and refine</h3>
          <ul>
            <li>Walk through process with a friend or colleague</li>
            <li>Time each component</li>
            <li>Test all links and technology</li>
            <li>Gather feedback and iterate</li>
          </ul>

          <h3>Week 3: Launch with next client</h3>
          <ul>
            <li>Implement full onboarding sequence</li>
            <li>Track completion and engagement</li>
            <li>Note client feedback and reactions</li>
            <li>Document what works and what needs adjustment</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            A structured onboarding process is one of the highest-leverage improvements you can make to your coaching practice. It sets professional expectations, builds momentum, and creates the foundation for transformational results.
          </p>

          <p>
            The investment in creating these systems pays dividends through higher completion rates, better outcomes, and more satisfied clients who become enthusiastic referral sources.
          </p>

          <p>
            Start with the basic framework and customize based on your style and client needs. The key is consistency—every client should feel equally welcomed, prepared, and excited about the journey ahead.
          </p>
        </div>

        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Workflow Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/first-session-agenda" className="text-gray-900 hover:text-primary-600">
                  First Session Agenda
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Structured 60-minute agenda template to maximize your first coaching session impact.
              </p>
              <Link href="/workflows/first-session-agenda" className="text-primary-600 text-sm font-medium">
                Get Agenda Template →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/progress-tracking" className="text-gray-900 hover:text-primary-600">
                  Progress Tracking System
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Implement the metrics and tracking systems you establish during onboarding.
              </p>
              <Link href="/workflows/progress-tracking" className="text-primary-600 text-sm font-medium">
                Setup Tracking →
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}