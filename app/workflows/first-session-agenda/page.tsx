import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateSEO({
  title: 'First Session Agenda Template for Life Coaches',
  description: 'Structured 60-minute first session agenda template with goal setting, expectations, and momentum-building framework for new coaching clients.',
  keywords: ['first session agenda', 'coaching session structure', 'new client session', 'goal setting session', 'coaching framework'],
  canonicalUrl: 'https://lifecoachlibrary.com/workflows/first-session-agenda/',
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
            First Session Agenda: Set the Foundation for Transformation
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Complete 60-minute structured agenda for conducting powerful first coaching sessions that build momentum, clarify goals, and establish the coaching relationship.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Published: August 31, 5</span>
            <span className="mx-2">•</span>
            <span>15 min read</span>
          </div>
        </header>

        <div className="prose-custom">
          <p>
            The first coaching session sets the tone for the entire relationship. A well-structured session builds confidence, creates clarity, and generates momentum that carries clients through their transformation journey. This comprehensive agenda ensures your first sessions consistently deliver value while establishing professional boundaries and expectations.
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">First Session Impact</h3>
            <p className="text-primary-800">
              Clients who experience a structured, value-packed first session are 85% more likely to complete their coaching program and 3x more likely to refer others.
            </p>
          </div>

          <h2>60-minute first session structure</h2>
          <p>
            This timeboxed agenda ensures you cover all essential elements while maintaining momentum and engagement throughout the session.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="font-semibold mb-4">Complete Session Timeline:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span><strong>Welcome & Expectations (10 minutes)</strong></span>
                <span className="text-gray-600">Set the stage, review agreements</span>
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Current State Assessment (15 minutes)</strong></span>
                <span className="text-gray-600">Understand starting point</span>
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Goal Clarification (20 minutes)</strong></span>
                <span className="text-gray-600">Define specific outcomes</span>
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Coaching Process Overview (10 minutes)</strong></span>
                <span className="text-gray-600">Explain methodology</span>
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Action Planning & Next Steps (5 minutes)</strong></span>
                <span className="text-gray-600">Create immediate momentum</span>
              </div>
            </div>
          </div>

          <h2>Welcome & expectations setting (Minutes 0-10)</h2>
          <p>
            Begin with warmth and professionalism to help clients feel comfortable while establishing clear boundaries and expectations.
          </p>

          <h3>Opening script</h3>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3 text-blue-900">Welcome Framework:</h4>
            <div className="text-blue-800 space-y-3 text-sm">
              <p><strong>"Welcome to our first official coaching session! I'm excited to begin this journey with you and support you in achieving [their stated goal from discovery call]."</strong></p>
              
              <p><strong>"Before we dive into the content, let me review how our sessions will work and what you can expect from our time together."</strong></p>
              
              <p><strong>"Do you have any questions about our coaching agreement or the process before we begin?"</strong></p>
            </div>
          </div>

          <h3>Key elements to cover</h3>
          <ul>
            <li><strong>Session logistics:</strong> Duration, frequency, scheduling preferences</li>
            <li><strong>Communication boundaries:</strong> Between-session contact, response times</li>
            <li><strong>Confidentiality reminder:</strong> Reinforce safe space for sharing</li>
            <li><strong>Coaching vs. therapy:</strong> Clarify scope and limitations</li>
            <li><strong>Mutual responsibilities:</strong> What you'll provide, what they commit to</li>
          </ul>

          <h3>Expectation setting checklist</h3>
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Essential Expectations to Establish:</h4>
            <div className="text-sm space-y-2">
              <p>☐ Session format and structure</p>
              <p>☐ Homework and between-session work</p>
              <p>☐ Cancellation and rescheduling policy</p>
              <p>☐ Progress tracking and review process</p>
              <p>☐ Emergency contact procedures</p>
              <p>☐ Technology requirements (if virtual)</p>
            </div>
          </div>

          <h2>Current state assessment (Minutes 10-25)</h2>
          <p>
            Gain deep understanding of where the client is starting from across all relevant life areas. This baseline becomes crucial for measuring progress.
          </p>

          <h3>Wheel of Life exercise</h3>
          <p>Use this visual tool to quickly assess satisfaction across key life areas:</p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Life Areas to Assess (1-10 scale):</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <p>• Career/Work</p>
              <p>• Health & Fitness</p>
              <p>• Relationships</p>
              <p>• Personal Growth</p>
              <p>• Recreation/Fun</p>
              <p>• Physical Environment</p>
              <p>• Money/Finances</p>
              <p>• Contribution/Service</p>
            </div>
          </div>

          <h3>Assessment questions</h3>
          <h4>Current satisfaction levels</h4>
          <ul>
            <li>"On a scale of 1-10, how satisfied are you with your [area]?"</li>
            <li>"What's working well in this area?"</li>
            <li>"What would need to change for this to be a 10?"</li>
            <li>"How is this area affecting other parts of your life?"</li>
          </ul>

          <h4>Strengths and resources</h4>
          <ul>
            <li>"What are your greatest strengths?"</li>
            <li>"When have you overcome similar challenges before?"</li>
            <li>"What support systems do you have in place?"</li>
            <li>"What resources are available to you?"</li>
          </ul>

          <h4>Challenges and obstacles</h4>
          <ul>
            <li>"What patterns do you notice in areas where you feel stuck?"</li>
            <li>"What beliefs or thoughts hold you back?"</li>
            <li>"What external obstacles do you face?"</li>
            <li>"Where do you tend to get in your own way?"</li>
          </ul>

          <h2>Goal clarification and refinement (Minutes 25-45)</h2>
          <p>
            Transform vague desires into specific, measurable goals that inspire action and allow for clear progress tracking.
          </p>

          <h3>The SMART-ER framework</h3>
          <p>Expand traditional SMART goals with Exciting and Reviewed elements:</p>

          <div className="bg-green-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3 text-green-900">SMART-ER Goal Components:</h4>
            <div className="text-green-800 text-sm space-y-2">
              <p><strong>Specific:</strong> Clear, well-defined outcome</p>
              <p><strong>Measurable:</strong> Quantifiable progress indicators</p>
              <p><strong>Achievable:</strong> Realistic given current resources</p>
              <p><strong>Relevant:</strong> Aligned with values and priorities</p>
              <p><strong>Time-bound:</strong> Clear deadline or timeframe</p>
              <p><strong>Exciting:</strong> Personally motivating and inspiring</p>
              <p><strong>Reviewed:</strong> Regular check-ins and adjustments</p>
            </div>
          </div>

          <h3>Goal clarification process</h3>

          <h4>Step 1: Brain dump (5 minutes)</h4>
          <p>"Let's start by listing everything you want to achieve or change. Don't edit yourself—just get it all out."</p>

          <h4>Step 2: Prioritization (5 minutes)</h4>
          <p>"Looking at this list, which 2-3 goals would have the biggest impact on your life if achieved?"</p>

          <h4>Step 3: Specificity (7 minutes)</h4>
          <p>For each priority goal, ask:</p>
          <ul>
            <li>"What exactly will this look like when achieved?"</li>
            <li>"How will you know you've accomplished this?"</li>
            <li>"What will others notice is different?"</li>
            <li>"What timeframe feels realistic but challenging?"</li>
          </ul>

          <h4>Step 4: Motivation exploration (3 minutes)</h4>
          <ul>
            <li>"Why is this goal important to you?"</li>
            <li>"What will achieving this enable in your life?"</li>
            <li>"What's the cost of not pursuing this?"</li>
            <li>"On a scale of 1-10, how excited are you about this goal?"</li>
          </ul>

          <h3>Values alignment check</h3>
          <p>Ensure goals align with core values for sustainable motivation:</p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3 text-blue-900">Values Alignment Questions:</h4>
            <ul className="text-blue-800 text-sm space-y-2">
              <li>• "What values are most important to you?"</li>
              <li>• "How do these goals honor your values?"</li>
              <li>• "Where might there be conflicts between goals and values?"</li>
              <li>• "What adjustments would make these goals more values-aligned?"</li>
            </ul>
          </div>

          <h2>Coaching process overview (Minutes 45-55)</h2>
          <p>
            Help clients understand your methodology so they can engage more effectively in the process.
          </p>

          <h3>Your coaching approach</h3>
          <p>Explain your unique framework. Here's a template you can adapt:</p>

          <div className="bg-purple-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3 text-purple-900">Sample Process Explanation:</h4>
            <div className="text-purple-800 text-sm space-y-3">
              <p><strong>"My coaching approach focuses on three key areas: Clarity, Action, and Accountability."</strong></p>
              
              <p><strong>"Clarity means getting crystal clear on what you want and why you want it. Action involves creating specific steps and strategies to move forward. Accountability ensures you follow through on commitments to yourself."</strong></p>
              
              <p><strong>"Each session, we'll spend time in all three areas, and I'll provide tools and exercises to support your progress between sessions."</strong></p>
            </div>
          </div>

          <h3>Session structure preview</h3>
          <p>Help them know what to expect from ongoing sessions:</p>
          <ul>
            <li><strong>Check-in (5 minutes):</strong> Progress since last session</li>
            <li><strong>Coaching conversation (40 minutes):</strong> Focus on current challenges/opportunities</li>
            <li><strong>Action planning (10 minutes):</strong> Specific commitments for the week</li>
            <li><strong>Closing (5 minutes):</strong> Key insights and next session focus</li>
          </ul>

          <h3>Between-session expectations</h3>
          <ul>
            <li><strong>Homework assignments:</strong> Exercises, reading, or reflection</li>
            <li><strong>Progress tracking:</strong> Journal, habit tracker, or check-ins</li>
            <li><strong>Communication protocol:</strong> When and how to reach out</li>
            <li><strong>Preparation:</strong> How to prepare for each session</li>
          </ul>

          <h2>Action planning & next steps (Minutes 55-60)</h2>
          <p>
            End with momentum by creating specific actions and establishing clear next steps.
          </p>

          <h3>Immediate action items</h3>
          <p>Create 1-3 specific actions they can take before the next session:</p>

          <div className="bg-orange-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3 text-orange-900">Action Planning Template:</h4>
            <div className="text-orange-800 text-sm space-y-2">
              <p><strong>Action 1:</strong> ________________________________</p>
              <p><strong>By when:</strong> ________________________________</p>
              <p><strong>Success looks like:</strong> _______________________</p>
              <p><strong>Potential obstacles:</strong> _______________________</p>
              <p><strong>Support needed:</strong> ___________________________</p>
            </div>
          </div>

          <h3>Homework assignments</h3>
          <p>Common first-session homework options:</p>
          <ul>
            <li><strong>Values clarification exercise:</strong> Complete comprehensive values assessment</li>
            <li><strong>Strengths inventory:</strong> Identify top 5 strengths with examples</li>
            <li><strong>Goal visualization:</strong> Write detailed description of achieved goals</li>
            <li><strong>Obstacle brainstorm:</strong> List potential challenges and solutions</li>
            <li><strong>Support mapping:</strong> Identify key people in their support network</li>
          </ul>

          <h3>Next session planning</h3>
          <ul>
            <li><strong>Schedule:</strong> Confirm date and time for next session</li>
            <li><strong>Focus area:</strong> Preview what you'll work on together</li>
            <li><strong>Preparation:</strong> What they should think about or complete</li>
            <li><strong>Materials:</strong> Any resources to review beforehand</li>
          </ul>

          <h2>First session best practices</h2>

          <h3>Before the session</h3>
          <ul>
            <li>Review intake forms and discovery call notes</li>
            <li>Prepare relevant exercises and assessments</li>
            <li>Set up distraction-free environment</li>
            <li>Have coaching agreement readily available</li>
          </ul>

          <h3>During the session</h3>
          <ul>
            <li>Maintain warm but professional tone</li>
            <li>Take detailed notes for future reference</li>
            <li>Watch the clock to respect timeframes</li>
            <li>Ask for questions and clarification regularly</li>
          </ul>

          <h3>After the session</h3>
          <ul>
            <li>Send session summary within 24 hours</li>
            <li>Include action items and homework assignments</li>
            <li>Add detailed notes to client file</li>
            <li>Schedule next session if not already done</li>
          </ul>

          <h2>Common first session challenges</h2>

          <h3>Client nervousness or anxiety</h3>
          <ul>
            <li>Acknowledge their courage in starting coaching</li>
            <li>Normalize feeling uncertain at the beginning</li>
            <li>Share what they can expect from the process</li>
            <li>Ask what would help them feel more comfortable</li>
          </ul>

          <h3>Vague or unrealistic goals</h3>
          <ul>
            <li>Use specific questioning to add clarity</li>
            <li>Break large goals into smaller milestones</li>
            <li>Help them connect goals to deeper values</li>
            <li>Suggest starting with more achievable targets</li>
          </ul>

          <h3>Information overload</h3>
          <ul>
            <li>Prioritize most important elements</li>
            <li>Provide written summary of key points</li>
            <li>Focus on next steps rather than entire journey</li>
            <li>Reassure them that clarity develops over time</li>
          </ul>

          <h3>Unrealistic expectations</h3>
          <ul>
            <li>Clarify what coaching can and cannot do</li>
            <li>Explain typical timeline for seeing results</li>
            <li>Emphasize their role in the process</li>
            <li>Share realistic success stories</li>
          </ul>

          <h2>Session documentation template</h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">First Session Notes Template:</h4>
            <div className="text-sm space-y-2">
              <p><strong>Date:</strong> _____________ <strong>Duration:</strong> _____________</p>
              <p><strong>Current State Summary:</strong> _________________________</p>
              <p><strong>Primary Goals Identified:</strong> _______________________</p>
              <p><strong>Key Strengths Noted:</strong> ____________________________</p>
              <p><strong>Main Challenges/Obstacles:</strong> ______________________</p>
              <p><strong>Values Mentioned:</strong> _______________________________</p>
              <p><strong>Action Items Assigned:</strong> ___________________________</p>
              <p><strong>Homework Given:</strong> __________________________________</p>
              <p><strong>Next Session Focus:</strong> ______________________________</p>
              <p><strong>Coach Observations:</strong> ______________________________</p>
            </div>
          </div>

          <h2>Specialized first sessions</h2>

          <h3>For executive coaching clients</h3>
          <ul>
            <li>Focus on professional goals and leadership challenges</li>
            <li>Include 360-degree feedback discussion</li>
            <li>Address organizational context and constraints</li>
            <li>Emphasize ROI and measurable outcomes</li>
          </ul>

          <h3>For life transition clients</h3>
          <ul>
            <li>Acknowledge the difficulty of major changes</li>
            <li>Explore what's ending and what's beginning</li>
            <li>Identify sources of stability during transition</li>
            <li>Create small steps to build momentum</li>
          </ul>

          <h3>For wellness coaching clients</h3>
          <ul>
            <li>Include health and lifestyle assessment</li>
            <li>Discuss medical considerations and limitations</li>
            <li>Set realistic, sustainable health goals</li>
            <li>Address mindset around self-care</li>
          </ul>

          <h2>Follow-up and continuity</h2>

          <h3>Session summary email template</h3>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3 text-blue-900">Sample Follow-up Email:</h4>
            <div className="text-blue-800 text-sm space-y-3">
              <p><strong>Subject: Welcome to coaching - Your session summary & next steps</strong></p>
              
              <p><strong>"Hi [Name],</strong></p>
              <p><strong>It was wonderful to officially begin our coaching relationship today! I'm excited about the goals we identified and the progress you're going to make.</strong></p>
              
              <p><strong>Here's a summary of what we covered: [brief recap]</strong></p>
              <p><strong>Your action items for this week: [specific actions]</strong></p>
              <p><strong>Homework assignment: [details]</strong></p>
              <p><strong>Our next session: [date/time]</strong></p>
              
              <p><strong>Feel free to reach out if any questions come up. Looking forward to hearing about your progress!"</strong></p>
            </div>
          </div>

          <h2>Conclusion</h2>
          <p>
            A well-structured first session creates the foundation for a successful coaching relationship. By covering expectations, assessing current state, clarifying goals, and creating immediate action steps, you set both yourself and your client up for a transformative journey together.
          </p>

          <p>
            Remember that while structure is important, stay flexible and responsive to your client's needs. Some may need more time on goal clarification, others on expectation setting. Use this agenda as a guide, but always prioritize building connection and trust.
          </p>

          <p>
            The investment you make in creating a powerful first session pays dividends throughout the entire coaching relationship through increased client engagement, clearer progress tracking, and stronger outcomes.
          </p>
        </div>

        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Session Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/methods/coaching-session-structure" className="text-gray-900 hover:text-primary-600">
                  Ongoing Session Structure
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Framework for structuring regular coaching sessions for consistent results.
              </p>
              <Link href="/methods/coaching-session-structure" className="text-primary-600 text-sm font-medium">
                Learn Structure →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/progress-tracking" className="text-gray-900 hover:text-primary-600">
                  Progress Tracking Methods
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Tools and systems for monitoring client progress between sessions.
              </p>
              <Link href="/workflows/progress-tracking" className="text-primary-600 text-sm font-medium">
                Track Progress →
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}