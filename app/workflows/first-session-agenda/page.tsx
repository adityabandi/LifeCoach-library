import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateSEO({
  title: 'First Coaching Session Agenda - 60-Minute Template for Life Coaches',
  description: 'Complete first session agenda template with timeboxed segments: Open → Goals → Plan → Next Steps. Maximize impact and set the foundation for successful coaching relationships.',
  keywords: ['first coaching session', 'session agenda', 'coaching structure', 'session template', 'life coach session plan'],
  canonicalUrl: 'https://adityabandi.github.io/LifeCoach-library/workflows/first-session-agenda',
})

export default function FirstSessionAgendaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Workflows', href: '/workflows' },
          { label: 'First Session Agenda' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            First Coaching Session Agenda: The 60-Minute Framework
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A structured agenda template that transforms first sessions from awkward introductions into powerful momentum-building experiences that set the foundation for transformational coaching relationships.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Published: August 28, 2025</span>
            <span className="mx-2">•</span>
            <span>11 min read</span>
          </div>
        </header>

        <div className="prose-custom">
          <p>
            Your first coaching session is the most critical hour in your entire client relationship. It sets expectations, builds rapport, creates momentum, and determines whether your client leaves feeling excited about the journey ahead or uncertain about their investment.
          </p>

          <p>
            This structured 60-minute agenda template ensures every first session delivers maximum value while efficiently moving from introductions to actionable next steps.
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">First Session Success Rate</h3>
            <p className="text-primary-800">
              Clients who rate their first session 8/10 or higher have a 94% program completion rate compared to 67% for those rating it below 8/10. Structure matters.
            </p>
          </div>

          <h2>The 60-minute first session framework</h2>
          <p>
            This agenda balances relationship building, goal clarification, and action planning to maximize both connection and momentum:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="font-semibold mb-4">Session Overview:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span><strong>Opening & Connection (10 minutes)</strong></span>
                <span className="text-gray-600">Build rapport, set tone</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Goal Exploration (20 minutes)</strong></span>
                <span className="text-gray-600">Clarify objectives, motivations</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Obstacle Assessment (10 minutes)</strong></span>
                <span className="text-gray-600">Identify challenges, patterns</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Success Planning (15 minutes)</strong></span>
                <span className="text-gray-600">Create roadmap, next actions</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Wrap-up & Scheduling (5 minutes)</strong></span>
                <span className="text-gray-600">Summarize, schedule next session</span>
              </div>
            </div>
          </div>

          <h2>Pre-session preparation (5 minutes before client joins)</h2>
          <p>
            Your preparation in the final minutes before the session sets you up for success:
          </p>

          <h3>Review client materials:</h3>
          <ul>
            <li>Re-read discovery call notes and key insights</li>
            <li>Review their pre-session assessment responses</li>
            <li>Note specific goals and challenges they mentioned</li>
            <li>Prepare 2-3 relevant tools or frameworks</li>
          </ul>

          <h3>Environmental setup:</h3>
          <ul>
            <li>Test technology and eliminate distractions</li>
            <li>Have notepad ready for key insights</li>
            <li>Queue up any materials you might reference</li>
            <li>Set positive, focused energy</li>
          </ul>

          <h2>Opening & connection (0-10 minutes)</h2>
          <p>
            The opening sets the tone for your entire relationship. Focus on creating safety, building rapport, and establishing your professional competence.
          </p>

          <h3>Minutes 0-2: Warm welcome</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Opening Script Template:</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p>"[Name], welcome! I'm so excited to officially begin our coaching journey together. How are you feeling about today?"</p>
              <p>[Listen to their response and acknowledge]</p>
              <p>"Perfect. I've been looking forward to this conversation since our discovery call, especially when you mentioned [specific detail from discovery call]. Today we're going to dig deeper into your goals and create a clear roadmap for achieving them."</p>
            </div>
          </div>

          <h3>Minutes 2-5: Set session expectations</h3>
          <p>Clearly outline what will happen in this session to reduce anxiety and create structure:</p>
          <ul>
            <li><strong>Agenda overview:</strong> "Here's what we'll cover in the next hour..."</li>
            <li><strong>Participation expectations:</strong> "I'll ask lots of questions and may challenge your thinking..."</li>
            <li><strong>Note-taking:</strong> "I'll be taking notes to capture key insights..."</li>
            <li><strong>Questions welcome:</strong> "Please interrupt me anytime with questions..."</li>
          </ul>

          <h3>Minutes 5-10: Current state check-in</h3>
          <p>Understand where they are right now and what brought them to coaching today:</p>

          <h4>Essential opening questions:</h4>
          <ul>
            <li>"What's different in your life since we last spoke?"</li>
            <li>"On a scale of 1-10, how motivated are you feeling about making changes?"</li>
            <li>"What made today the right day to start this process?"</li>
            <li>"What's working well in your life right now that we want to protect/enhance?"</li>
          </ul>

          <h2>Goal exploration (10-30 minutes)</h2>
          <p>
            This is the heart of your first session. Move beyond surface-level goals to understand their deeper motivations, values, and vision for success.
          </p>

          <h3>Minutes 10-15: Surface goals review</h3>
          <p>Start with what they've already shared but dig deeper:</p>

          <h4>Goal clarification questions:</h4>
          <ul>
            <li>"You mentioned wanting to [goal]. Tell me more about what that means to you."</li>
            <li>"What would achieving this goal give you that you don't have now?"</li>
            <li>"How will you know when you've been successful?"</li>
            <li>"What would change in your daily life if you achieved this?"</li>
          </ul>

          <h3>Minutes 15-25: Deeper motivations</h3>
          <p>Explore the 'why' behind their goals to ensure sustainable motivation:</p>

          <h4>Motivation exploration framework:</h4>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">The "5 Whys" for Coaching Goals:</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Why #1:</strong> "Why is this goal important to you?"</p>
              <p><strong>Why #2:</strong> "Why does [their answer] matter to you?"</p>
              <p><strong>Why #3:</strong> "What would having [deeper reason] give you?"</p>
              <p><strong>Why #4:</strong> "Why is [core value/need] significant in your life?"</p>
              <p><strong>Why #5:</strong> "What does this tell us about who you're becoming?"</p>
            </div>
          </div>

          <h3>Minutes 25-30: Values and vision alignment</h3>
          <p>Connect their goals to their deeper values and long-term vision:</p>

          <h4>Alignment questions:</h4>
          <ul>
            <li>"What values are most important to you in how you live your life?"</li>
            <li>"How does this goal align with those values?"</li>
            <li>"Where do you see yourself in 2-3 years if we're successful together?"</li>
            <li>"What kind of person do you need to become to achieve this vision?"</li>
          </ul>

          <div className="bg-accent-50 border-l-4 border-accent-500 p-6 my-8">
            <h4 className="text-lg font-semibold text-accent-900 mb-2">Coaching Tip: Listen for Energy</h4>
            <p className="text-accent-800">
              Pay attention to when their voice changes, when they light up, or when they get excited. These energy shifts reveal their true motivations and where to focus your coaching.
            </p>
          </div>

          <h2>Obstacle assessment (30-40 minutes)</h2>
          <p>
            Identify what's been preventing them from achieving their goals and uncover patterns that coaching can address.
          </p>

          <h3>Minutes 30-35: Previous attempts and barriers</h3>
          <p>Understand their history with this goal and what hasn't worked:</p>

          <h4>Obstacle identification questions:</h4>
          <ul>
            <li>"What have you tried before to achieve this goal?"</li>
            <li>"What got in the way of your success?"</li>
            <li>"What patterns do you notice in how you approach challenges?"</li>
            <li>"What typically derails you when you're making progress?"</li>
          </ul>

          <h3>Minutes 35-40: Internal vs. external factors</h3>
          <p>Help them distinguish between obstacles they can control and those they cannot:</p>

          <h4>Factor categorization exercise:</h4>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Obstacle Mapping Framework:</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Internal factors (we can change):</strong></p>
              <p>• Mindset, beliefs, habits, skills, responses, priorities</p>
              <p><strong>External factors (we adapt to):</strong></p>
              <p>• Other people, market conditions, family situations, time constraints</p>
              <p><strong>Coaching focus:</strong> Internal factors + strategies for external ones</p>
            </div>
          </div>

          <h2>Success planning (40-55 minutes)</h2>
          <p>
            Create a concrete roadmap for the first 30 days and establish the framework for ongoing success.
          </p>

          <h3>Minutes 40-45: Goal setting and metrics</h3>
          <p>Transform their vision into specific, measurable, achievable goals:</p>

          <h4>SMART goal refinement:</h4>
          <ul>
            <li><strong>Specific:</strong> "Let's get crystal clear on exactly what success looks like..."</li>
            <li><strong>Measurable:</strong> "How will we track progress along the way?"</li>
            <li><strong>Achievable:</strong> "What feels both challenging and realistic?"</li>
            <li><strong>Relevant:</strong> "How does this connect to your bigger vision?"</li>
            <li><strong>Time-bound:</strong> "What's a realistic timeline for achieving this?"</li>
          </ul>

          <h3>Minutes 45-50: 30-day quick wins</h3>
          <p>Identify immediate actions they can take to build momentum:</p>

          <h4>Quick win criteria:</h4>
          <ul>
            <li>Can be completed within 7-14 days</li>
            <li>Directly supports their larger goal</li>
            <li>Builds confidence and momentum</li>
            <li>Requires skills they already have</li>
          </ul>

          <h3>Minutes 50-55: Accountability structure</h3>
          <p>Establish how you'll track progress and maintain momentum between sessions:</p>

          <h4>Accountability framework:</h4>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Between-Session Structure:</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Check-in method:</strong> Weekly email, daily habit tracker, or mid-week call</p>
              <p><strong>Progress metrics:</strong> Specific measurements we'll track</p>
              <p><strong>Support resources:</strong> Tools, apps, or materials they'll use</p>
              <p><strong>Emergency contact:</strong> When and how to reach you if stuck</p>
            </div>
          </div>

          <h2>Wrap-up & scheduling (55-60 minutes)</h2>
          <p>
            End on a high note with clear next steps and confirmed commitment to the process.
          </p>

          <h3>Minutes 55-58: Session summary</h3>
          <p>Recap key insights and commitments to reinforce learning:</p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Summary Template:</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p>"Let me summarize what I heard today:</p>
              <p>• Your core goal is [specific goal]</p>
              <p>• The deeper reason this matters is [motivation]</p>
              <p>• The main obstacle we're addressing is [key challenge]</p>
              <p>• Your first action step is [specific next action]</p>
              <p>Does that capture it accurately?"</p>
            </div>
          </div>

          <h3>Minutes 58-60: Next session and final thoughts</h3>
          <ul>
            <li><strong>Schedule next session:</strong> Confirm date, time, and format</li>
            <li><strong>Homework assignment:</strong> One specific action to complete</li>
            <li><strong>Confidence check:</strong> "How are you feeling about moving forward?"</li>
            <li><strong>Positive reinforcement:</strong> Acknowledge their commitment and potential</li>
          </ul>

          <h2>Post-session follow-up (within 24 hours)</h2>
          <p>
            Your work doesn't end when the session does. Follow-up communication reinforces key insights and maintains momentum.
          </p>

          <h3>Session summary email:</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Follow-up Email Template:</h4>
            <div className="text-sm text-gray-700 space-y-2">
              <p><strong>Subject:</strong> Thank you + Your Next Steps</p>
              <p>"Hi [Name],</p>
              <p>Thank you for such an engaged and productive first session! I loved your insight about [specific insight they shared].</p>
              <p><strong>Key takeaways from today:</strong></p>
              <p>• Goal: [their refined goal]</p>
              <p>• Why it matters: [their deeper motivation]</p>
              <p>• Next action: [specific homework]</p>
              <p>• Next session: [date and time]</p>
              <p>I'm excited about the progress you're going to make. Remember, [encouraging specific insight or strength you noticed].</p>
              <p>See you [next session day]!</p>
              <p>[Your signature]"</p>
            </div>
          </div>

          <h2>Handling common first session challenges</h2>

          <h3>Challenge 1: The overwhelmed client</h3>
          <p><strong>Signs:</strong> Too many goals, scattered focus, anxiety about the process</p>
          <p><strong>Solution:</strong> Help them prioritize one primary goal for the first 30 days. Use the phrase "What would make the biggest difference in your life right now?"</p>

          <h3>Challenge 2: The resistant client</h3>
          <p><strong>Signs:</strong> Vague answers, surface-level engagement, skepticism about coaching</p>
          <p><strong>Solution:</strong> Focus on their original pain point from the discovery call. Ask "What would happen if nothing changed in the next 6 months?"</p>

          <h3>Challenge 3: The perfectionist client</h3>
          <p><strong>Signs:</strong> Wants detailed plans, fears making mistakes, analysis paralysis</p>
          <p><strong>Solution:</strong> Emphasize experimentation over perfection. Use "Let's try this for two weeks and see what we learn."</p>

          <h3>Challenge 4: The time-constrained client</h3>
          <p><strong>Signs:</strong> Busy schedule, multitasking during session, wanting quick fixes</p>
          <p><strong>Solution:</strong> Focus on efficiency and integration. Ask "What's one small change that would fit into your existing routine?"</p>

          <h2>Customizing for different client types</h2>

          <h3>Executive clients:</h3>
          <ul>
            <li>Use business language and ROI frameworks</li>
            <li>Focus on leadership and performance goals</li>
            <li>Provide clear metrics and milestones</li>
            <li>Respect their time and be highly structured</li>
          </ul>

          <h3>Career transition clients:</h3>
          <ul>
            <li>Address uncertainty and fear directly</li>
            <li>Explore values and long-term vision thoroughly</li>
            <li>Break large goals into smaller, manageable steps</li>
            <li>Provide extra emotional support and reassurance</li>
          </ul>

          <h3>Relationship clients:</h3>
          <ul>
            <li>Focus on communication and boundary patterns</li>
            <li>Explore their role in relationship dynamics</li>
            <li>Use values to guide relationship decisions</li>
            <li>Address self-worth and attachment issues sensitively</li>
          </ul>

          <h2>Measuring first session success</h2>

          <h3>Immediate indicators:</h3>
          <ul>
            <li>Client rates session 8/10 or higher</li>
            <li>They schedule their next session before leaving</li>
            <li>They seem energized and optimistic</li>
            <li>They ask thoughtful questions about the process</li>
          </ul>

          <h3>Follow-up indicators:</h3>
          <ul>
            <li>They complete their first homework assignment</li>
            <li>They proactively communicate between sessions</li>
            <li>They show up prepared for session two</li>
            <li>They refer friends or colleagues</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            A well-structured first session transforms nervous prospects into committed clients ready to do the work required for transformation. The agenda provides safety and direction while leaving room for the authentic coaching conversations that create breakthrough moments.
          </p>

          <p>
            Remember: your goal isn't to solve all their problems in 60 minutes—it's to create clarity, build trust, and establish momentum for the transformational journey ahead.
          </p>

          <p>
            Practice this framework until it becomes natural, then adapt it to match your style and your clients' needs. The structure serves the relationship, not the other way around.
          </p>
        </div>

        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Workflow Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/client-onboarding-checklist" className="text-gray-900 hover:text-primary-600">
                  Client Onboarding Checklist
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Prepare clients for success before this first session with structured onboarding.
              </p>
              <Link href="/workflows/client-onboarding-checklist" className="text-primary-600 text-sm font-medium">
                View Checklist →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/methods/coaching-session-structure" className="text-gray-900 hover:text-primary-600">
                  Ongoing Session Structure
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Templates and frameworks for sessions 2 through program completion.
              </p>
              <Link href="/methods/coaching-session-structure" className="text-primary-600 text-sm font-medium">
                Get Templates →
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}