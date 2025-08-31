import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateSEO({
  title: 'Discovery Call Script Template for Life Coaches',
  description: 'Complete discovery call script template with 30-minute framework, qualifying questions, objection handling, and closing techniques to convert prospects into clients.',
  keywords: ['discovery call script', 'sales call template', 'coaching sales', 'convert prospects', 'consultation call'],
  canonicalUrl: 'https://lifecoachlibrary.com/workflows/discovery-call-script/',
})

export default function DiscoveryCallScriptPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Workflows', href: '/workflows' },
          { label: 'Discovery Call Script' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discovery Call Script: Convert Prospects Into Coaching Clients
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Master the 30-minute discovery call framework that converts qualified prospects into paying coaching clients. Includes script templates, qualifying questions, and closing techniques.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Published: August 31, 2025</span>
            <span className="mx-2">•</span>
            <span>18 min read</span>
          </div>
        </header>

        <div className="prose-custom">
          <p>
            The discovery call is where prospects decide to invest in coaching. A well-structured conversation can transform hesitant leads into enthusiastic clients, while poor execution sends them to your competitors. This comprehensive script and framework ensures consistent, professional discovery calls that convert.
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">Discovery Call Impact</h3>
            <p className="text-primary-800">
              Coaches using structured discovery call scripts report 3x higher conversion rates and 40% shorter sales cycles compared to unstructured conversations.
            </p>
          </div>

          <h2>The 30-minute discovery call framework</h2>
          <p>
            Every successful discovery call follows the same basic structure: rapport → discovery → solution → close. This framework ensures you gather essential information while building trust and presenting your coaching as the logical solution.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="font-semibold mb-4">Complete Call Structure:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span><strong>Opening & Rapport (5 minutes)</strong></span>
                <span className="text-gray-600">Set the tone, build connection</span>
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Discovery Questions (15 minutes)</strong></span>
                <span className="text-gray-600">Uncover pain points and goals</span>
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Solution Presentation (7 minutes)</strong></span>
                <span className="text-gray-600">Position coaching as the answer</span>
              </div>
              <div className="flex justify-between items-center">
                <span><strong>Close & Next Steps (3 minutes)</strong></span>
                <span className="text-gray-600">Secure commitment or follow-up</span>
              </div>
            </div>
          </div>

          <h2>Opening & rapport building (Minutes 0-5)</h2>
          <p>
            The first few minutes set the entire tone. Your goal is to create a comfortable environment where prospects feel safe to share vulnerably about their challenges.
          </p>

          <h3>Script: Opening statements</h3>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3 text-blue-900">Word-for-Word Opening:</h4>
            <div className="text-blue-800 space-y-3 text-sm">
              <p><strong>"Hi [Name], thanks for taking the time to speak with me today. I'm excited to learn more about what's going on in your [career/life/business] and see if there's a way I can help."</strong></p>
              
              <p><strong>"Before we dive in, I want to set some expectations. This isn't a sales call where I'm going to pressure you into anything. My goal is to understand your situation and see if coaching might be a good fit. At the end, I'll be completely honest about whether I think we should work together. Sound good?"</strong></p>
              
              <p><strong>"Great. To start, tell me a little about yourself and what prompted you to look into coaching right now."</strong></p>
            </div>
          </div>

          <h3>Rapport-building techniques</h3>
          <ul>
            <li><strong>Active listening:</strong> Reflect back what you hear using their exact words</li>
            <li><strong>Find common ground:</strong> Share relevant but brief personal experiences</li>
            <li><strong>Acknowledge courage:</strong> "It takes courage to reach out for support"</li>
            <li><strong>Validate feelings:</strong> "That sounds really frustrating" or "I can hear the excitement in your voice"</li>
          </ul>

          <h2>Discovery questions (Minutes 5-20)</h2>
          <p>
            This is the heart of the call. Your questions should uncover the prospect's current situation, desired outcome, obstacles, and urgency. The better you understand their world, the more compelling your solution becomes.
          </p>

          <h3>The SPIN questioning framework</h3>
          <p>Adapted for coaching, SPIN helps you uncover pain points systematically:</p>

          <h4>Situation questions (current state)</h4>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• "Tell me about your current role/situation."</li>
              <li>• "What does a typical day/week look like for you?"</li>
              <li>• "How long have you been in this situation?"</li>
              <li>• "What have you tried so far to address this?"</li>
              <li>• "Who else is affected by this situation?"</li>
            </ul>
          </div>

          <h4>Problem questions (pain points)</h4>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• "What's the biggest challenge you're facing right now?"</li>
              <li>• "What's frustrating you most about your current situation?"</li>
              <li>• "What keeps you up at night worrying about this?"</li>
              <li>• "How is this affecting other areas of your life?"</li>
              <li>• "What happens if this continues for another year?"</li>
            </ul>
          </div>

          <h4>Implication questions (consequences)</h4>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• "How is this impacting your confidence/relationships/career?"</li>
              <li>• "What opportunities might you be missing because of this?"</li>
              <li>• "How would your life be different if this was resolved?"</li>
              <li>• "What's the cost of not addressing this?"</li>
              <li>• "How important is it to solve this, on a scale of 1-10?"</li>
            </ul>
          </div>

          <h4>Need-payoff questions (desired outcomes)</h4>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>• "What would success look like for you?"</li>
              <li>• "If we could wave a magic wand, what would change?"</li>
              <li>• "What would having clarity/confidence enable you to do?"</li>
              <li>• "How would achieving this impact other areas of your life?"</li>
              <li>• "What would be possible for you then?"</li>
            </ul>
          </div>

          <h3>Discovery call note-taking template</h3>
          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Essential Information to Capture:</h4>
            <div className="text-sm space-y-2">
              <p><strong>Current Situation:</strong> _________________________________</p>
              <p><strong>Primary Challenge:</strong> _______________________________</p>
              <p><strong>Impact/Consequences:</strong> _____________________________</p>
              <p><strong>Desired Outcome:</strong> _________________________________</p>
              <p><strong>Previous Solutions Tried:</strong> _________________________</p>
              <p><strong>Urgency (1-10):</strong> _____ <strong>Budget Range:</strong> _____________</p>
              <p><strong>Decision Timeline:</strong> ________________________________</p>
              <p><strong>Other Stakeholders:</strong> ______________________________</p>
            </div>
          </div>

          <h2>Solution presentation (Minutes 20-27)</h2>
          <p>
            Now you connect their specific situation to your coaching approach. This isn't a generic pitch—it's a customized solution based on what you just learned.
          </p>

          <h3>The bridge statement</h3>
          <p>Transition from discovery to solution with a summary:</p>
          <div className="bg-green-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3 text-green-900">Bridge Script:</h4>
            <p className="text-green-800 text-sm">
              <strong>"Let me summarize what I'm hearing. You're [current situation], which is causing [primary challenge]. The impact is [consequences], and what you really want is [desired outcome]. You've tried [previous attempts] but haven't gotten the results you want. Does that sound accurate?"</strong>
            </p>
            <p className="text-green-800 text-sm mt-3">
              <strong>"Based on what you've shared, I can see exactly why you're stuck and how coaching could help. Let me explain..."</strong>
            </p>
          </div>

          <h3>Solution framework</h3>
          <h4>1. Acknowledge the challenge (30 seconds)</h4>
          <ul>
            <li>"The reason you're struggling with [challenge] is completely normal"</li>
            <li>"Most people in your situation face this exact issue"</li>
            <li>"The good news is this is absolutely solvable"</li>
          </ul>

          <h4>2. Explain your approach (3-4 minutes)</h4>
          <ul>
            <li>Position coaching as the solution to their specific challenges</li>
            <li>Share your methodology without giving everything away</li>
            <li>Include relevant success stories or case studies</li>
            <li>Focus on transformation, not just tactics</li>
          </ul>

          <h4>3. Paint the vision (2-3 minutes)</h4>
          <ul>
            <li>Help them visualize success using their words</li>
            <li>Connect coaching outcomes to their stated goals</li>
            <li>Address the urgency they expressed</li>
            <li>Reinforce the cost of inaction</li>
          </ul>

          <h3>Sample solution presentation</h3>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3 text-blue-900">Example for Career Transition Client:</h4>
            <div className="text-blue-800 text-sm space-y-3">
              <p><strong>"The reason you're feeling stuck in your career transition is that most people try to figure this out in their heads, but real clarity comes from a structured process of exploration and experimentation."</strong></p>
              
              <p><strong>"My approach works in three phases: First, we get crystal clear on your values, strengths, and what truly motivates you. Second, we identify and explore potential paths that align with who you are. Third, we create a strategic action plan with accountability to make the transition happen."</strong></p>
              
              <p><strong>"I just worked with someone in a similar situation who went from feeling completely lost to landing their dream role in 4 months. The difference was having someone to guide them through the process systematically rather than trying to wing it alone."</strong></p>
              
              <p><strong>"Imagine where you could be 6 months from now - waking up excited about your work, feeling confident in your direction, and actually using your strengths every day. That's what's possible when you have the right support and process."</strong></p>
            </div>
          </div>

          <h2>Closing & next steps (Minutes 27-30)</h2>
          <p>
            The close shouldn't feel like pressure—it should feel like the natural next step for someone who wants to solve their problem.
          </p>

          <h3>The assumptive close</h3>
          <div className="bg-purple-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3 text-purple-900">Closing Script:</h4>
            <div className="text-purple-800 text-sm space-y-3">
              <p><strong>"Based on everything we've discussed, I'm confident I can help you [achieve their goal]. I have two spots opening up in my practice next month."</strong></p>
              
              <p><strong>"My coaching program is [duration] over [timeframe], and the investment is [price]. This includes [specific deliverables]. Does this feel like the right fit for you?"</strong></p>
              
              <p><strong>[If yes]: "Great! Let me walk you through next steps..."</strong></p>
              <p><strong>[If hesitation]: "What questions do you have?" or "What would need to be true for this to feel like a yes?"</strong></p>
            </div>
          </div>

          <h3>Handling common objections</h3>

          <h4>"I need to think about it"</h4>
          <ul>
            <li><strong>Isolate:</strong> "Of course. What specifically do you need to think through?"</li>
            <li><strong>Understand:</strong> "Help me understand what's holding you back"</li>
            <li><strong>Address:</strong> Handle the real concern (usually time, money, or trust)</li>
            <li><strong>Reclose:</strong> "If we could resolve [concern], would you want to move forward?"</li>
          </ul>

          <h4>"It's too expensive"</h4>
          <ul>
            <li><strong>Acknowledge:</strong> "I understand this is a significant investment"</li>
            <li><strong>Reframe:</strong> "What's it costing you to stay where you are?"</li>
            <li><strong>Value:</strong> "Let's talk about what this could be worth to you"</li>
            <li><strong>Options:</strong> Offer payment plans if appropriate</li>
          </ul>

          <h4>"I don't have time"</h4>
          <ul>
            <li><strong>Empathize:</strong> "I hear that you're really busy"</li>
            <li><strong>Reframe:</strong> "That's exactly why you need support"</li>
            <li><strong>Logistics:</strong> "Let's talk about how to make this work with your schedule"</li>
            <li><strong>Priority:</strong> "On a scale of 1-10, how important is solving this?"</li>
          </ul>

          <h3>Alternative closes</h3>

          <h4>The alternative choice close</h4>
          <p>"Would you prefer to start with the 3-month program or the 6-month intensive?"</p>

          <h4>The urgency close</h4>
          <p>"I have one spot available in March and one in May. Which works better for your timeline?"</p>

          <h4>The summary close</h4>
          <p>"So you want [goal], you're frustrated with [current situation], and you're ready to invest in getting this handled. Should we get started?"</p>

          <h2>Post-call follow-up process</h2>

          <h3>For prospects who said yes</h3>
          <ul>
            <li>Send coaching agreement within 24 hours</li>
            <li>Include clear next steps and timeline</li>
            <li>Schedule first session immediately</li>
            <li>Send welcome packet with prep materials</li>
          </ul>

          <h3>For prospects who need time</h3>
          <ul>
            <li>Send summary email recapping conversation</li>
            <li>Include relevant resources (blog posts, case studies)</li>
            <li>Set specific follow-up date</li>
            <li>Add to nurture email sequence</li>
          </ul>

          <h3>For prospects who said no</h3>
          <ul>
            <li>Thank them for their time</li>
            <li>Ask for referrals if appropriate</li>
            <li>Offer to stay in touch</li>
            <li>Add to long-term nurture list</li>
          </ul>

          <h2>Advanced discovery call techniques</h2>

          <h3>The emotional ladder</h3>
          <p>Help prospects connect logic to emotion:</p>
          <ul>
            <li>"How would achieving this make you feel?"</li>
            <li>"What would be different about your daily experience?"</li>
            <li>"How would your relationships change?"</li>
            <li>"What would this mean for your family?"</li>
          </ul>

          <h3>The commitment ladder</h3>
          <p>Test readiness throughout the call:</p>
          <ul>
            <li>"How committed are you to solving this?"</li>
            <li>"What would need to happen for this to be a priority?"</li>
            <li>"Are you looking for free advice or are you ready to invest in getting this handled?"</li>
          </ul>

          <h3>Social proof integration</h3>
          <p>Weave in relevant stories naturally:</p>
          <ul>
            <li>"I just worked with someone who had the exact same challenge..."</li>
            <li>"What you're describing reminds me of a client who..."</li>
            <li>"I see this pattern a lot with [their demographic]..."</li>
          </ul>

          <h2>Qualifying questions before the call</h2>
          <p>Screen prospects with these pre-call questions to ensure good fit:</p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Pre-Call Qualifying Form:</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>1. What's the biggest challenge you're facing right now?</li>
              <li>2. What have you tried so far to address this?</li>
              <li>3. How urgent is solving this for you?</li>
              <li>4. What's your budget range for professional support?</li>
              <li>5. What questions do you have about coaching?</li>
            </ul>
          </div>

          <h2>Discovery call best practices</h2>

          <h3>Before the call</h3>
          <ul>
            <li>Review their application and any previous touchpoints</li>
            <li>Prepare relevant case studies and success stories</li>
            <li>Set up distraction-free environment</li>
            <li>Have pricing and program details readily available</li>
          </ul>

          <h3>During the call</h3>
          <ul>
            <li>Listen more than you talk (80/20 rule)</li>
            <li>Take detailed notes for follow-up</li>
            <li>Use their language and mirror their energy</li>
            <li>Address objections as they arise, don't wait</li>
          </ul>

          <h3>After the call</h3>
          <ul>
            <li>Send follow-up within 24 hours</li>
            <li>Update CRM with detailed notes</li>
            <li>Set reminders for future follow-up</li>
            <li>Analyze what worked and what didn't</li>
          </ul>

          <h2>Common discovery call mistakes</h2>

          <h3>Talking too much</h3>
          <p>The prospect should talk 80% of the time. Your job is to ask great questions and listen actively.</p>

          <h3>Rushing to the close</h3>
          <p>Don't present solutions until you fully understand their situation. Premature closing feels pushy.</p>

          <h3>Not addressing objections</h3>
          <p>When you hear hesitation, address it immediately rather than hoping it goes away.</p>

          <h3>Generic presentations</h3>
          <p>Customize your solution presentation based on what they told you. One size fits all doesn't work.</p>

          <h3>No clear next steps</h3>
          <p>Every call should end with specific, agreed-upon next steps, regardless of their decision.</p>

          <h2>Conclusion</h2>
          <p>
            The discovery call is your opportunity to transform a curious prospect into an excited client. With this structured approach, you'll conduct more confident, professional calls that convert at higher rates while serving your prospects better.
          </p>

          <p>
            Remember: the best discovery calls don't feel like sales calls. They feel like coaching sessions where the prospect experiences your value firsthand and naturally wants to continue working with you.
          </p>

          <p>
            Practice this framework until it becomes natural, then adapt it to your unique style and niche. The more discovery calls you conduct, the better you'll become at reading prospects and customizing your approach for maximum impact.
          </p>
        </div>

        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Workflow Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/coaching-intake-questions" className="text-gray-900 hover:text-primary-600">
                  Client Intake Process
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Essential questions and forms for onboarding new coaching clients effectively.
              </p>
              <Link href="/workflows/coaching-intake-questions" className="text-primary-600 text-sm font-medium">
                View Intake Forms →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/first-session-agenda" className="text-gray-900 hover:text-primary-600">
                  First Session Framework
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Structure for conducting powerful first coaching sessions after client enrollment.
              </p>
              <Link href="/workflows/first-session-agenda" className="text-primary-600 text-sm font-medium">
                Get Framework →
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}