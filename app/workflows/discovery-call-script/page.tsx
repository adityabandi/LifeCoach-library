import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateSEO({
  title: 'Discovery Call Script - Convert Leads to Coaching Clients',
  description: 'Proven discovery call framework and scripts for life coaches. Master the conversation structure that builds trust and converts prospects into paying clients.',
  keywords: ['discovery call script', 'coaching sales', 'client consultation', 'lead conversion', 'coaching consultation'],
  canonicalUrl: 'https://lifecoachlibrary.com/workflows/discovery-call-script',
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

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discovery Call Script: The Complete Framework for Converting Prospects
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Master the art of discovery calls with proven scripts and frameworks that build trust, uncover pain points, and naturally lead to coaching enrollments.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Published: September 1, 5</span>
            <span className="mx-2">•</span>
            <span>15 min read</span>
          </div>
        </header>

        <div className="prose-custom">
          <p>
            The discovery call is where potential clients decide whether to invest in coaching. Yet most coaches struggle with these conversations, either coming across as pushy salespeople or missing opportunities to demonstrate their value.
          </p>

          <p>
            This comprehensive framework provides proven scripts and conversation structures that feel natural, build genuine connection, and lead to enthusiastic client enrollment.
          </p>

          <h2>The TRUST Discovery Call Framework</h2>

          <h3>T - Thank & Connect (5 minutes)</h3>
          <ul>
            <li><strong>Gratitude:</strong> Thank them for their time and interest</li>
            <li><strong>Agenda setting:</strong> Outline what you'll cover together</li>
            <li><strong>Permission:</strong> Ask if they're comfortable sharing openly</li>
            <li><strong>Connection:</strong> Brief personal connection or shared experience</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <h4 className="font-semibold mb-3">Opening Script Example:</h4>
            <p className="text-sm italic mb-3">
              "Hi [Name], thank you so much for taking time out of your busy day to speak with me. I'm really excited to learn more about you and see if there might be a good fit for us to work together.
            </p>
            <p className="text-sm italic mb-3">
              Here's what I'd love to do in our time together: I want to understand where you are right now, where you'd love to be, and what's been standing in your way. Then I'll share how I might be able to help you get there. Does that sound good?
            </p>
            <p className="text-sm italic">
              Before we dive in, I'm curious - what drew you to coaching at this point in your life?"
            </p>
          </div>

          <h3>R - Reality Check (10 minutes)</h3>
          <ul>
            <li><strong>Current situation:</strong> Where are they now?</li>
            <li><strong>Challenges:</strong> What's not working?</li>
            <li><strong>Impact:</strong> How is this affecting their life?</li>
            <li><strong>Attempts:</strong> What have they tried before?</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h4 className="font-semibold mb-3">Reality Check Questions:</h4>
            <ul className="text-sm space-y-2">
              <li>• "Tell me about your current situation with [their main area of concern]."</li>
              <li>• "What's the biggest challenge you're facing right now?"</li>
              <li>• "How is this impacting other areas of your life?"</li>
              <li>• "What have you tried to address this so far?"</li>
              <li>• "What's working? What isn't?"</li>
              <li>• "If nothing changes, where do you see yourself in 6 months?"</li>
            </ul>
          </div>

          <h3>U - Uncover Vision (8 minutes)</h3>
          <ul>
            <li><strong>Ideal outcome:</strong> What does success look like?</li>
            <li><strong>Motivation:</strong> Why is this important now?</li>
            <li><strong>Timeline:</strong> When do they want to achieve this?</li>
            <li><strong>Value:</strong> What would achieving this be worth?</li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg my-8">
            <h4 className="font-semibold mb-3">Vision Uncovering Questions:</h4>
            <ul className="text-sm space-y-2">
              <li>• "If we could wave a magic wand, what would your ideal life look like?"</li>
              <li>• "What would need to change for you to feel completely fulfilled?"</li>
              <li>• "Why is making this change important to you right now?"</li>
              <li>• "What would achieving this goal mean for your family/relationships/career?"</li>
              <li>• "How would you feel if nothing changed in the next year?"</li>
            </ul>
          </div>

          <h3>S - Solution Presentation (10 minutes)</h3>
          <ul>
            <li><strong>Summary:</strong> Reflect back what you've heard</li>
            <li><strong>Bridge:</strong> Connect their situation to your expertise</li>
            <li><strong>Solution:</strong> Explain how coaching addresses their specific needs</li>
            <li><strong>Success stories:</strong> Share relevant client examples</li>
          </ul>

          <div className="bg-yellow-50 p-6 rounded-lg my-8">
            <h4 className="font-semibold mb-3">Solution Bridge Script:</h4>
            <p className="text-sm italic mb-3">
              "Based on what you've shared, it sounds like you're dealing with [summarize key challenges], and your vision is to [summarize their goals]. Is that accurate?
            </p>
            <p className="text-sm italic mb-3">
              This is actually exactly what I help my clients with. I work with [ideal client description] who are struggling with [their main pain points] and want to [their desired outcomes].
            </p>
            <p className="text-sm italic">
              The approach I use focuses on [your methodology], which helps clients [specific benefits]. For example, I recently worked with [client story that mirrors their situation]..."
            </p>
          </div>

          <h3>T - Take Action (7 minutes)</h3>
          <ul>
            <li><strong>Program overview:</strong> Explain your coaching offering</li>
            <li><strong>Investment:</strong> Share pricing and value proposition</li>
            <li><strong>Next steps:</strong> Clear path forward</li>
            <li><strong>Decision timeline:</strong> When do they need to decide?</li>
          </ul>

          <h2>Advanced Discovery Call Techniques</h2>

          <h3>The Pain Amplification Sequence</h3>
          <p>Use this sequence to help prospects understand the true cost of inaction:</p>
          <ol>
            <li><strong>Current pain:</strong> "How is this affecting you right now?"</li>
            <li><strong>Timeline impact:</strong> "How long has this been going on?"</li>
            <li><strong>Future projection:</strong> "If nothing changes, where will you be in a year?"</li>
            <li><strong>Emotional cost:</strong> "How does that make you feel?"</li>
            <li><strong>Ripple effects:</strong> "How is this impacting your family/work/health?"</li>
          </ol>

          <h3>The Value Stack Method</h3>
          <p>When presenting your solution, stack the value by addressing:</p>
          <ul>
            <li><strong>Specific outcomes:</strong> "You'll be able to..."</li>
            <li><strong>Time savings:</strong> "Instead of taking years to figure this out..."</li>
            <li><strong>Confidence building:</strong> "You'll have the clarity and confidence to..."</li>
            <li><strong>Support system:</strong> "You won't be doing this alone..."</li>
          </ul>

          <h2>Objection Handling Scripts</h2>

          <h3>"I need to think about it"</h3>
          <p><strong>Response:</strong> "I completely understand wanting to think this through - it's an important decision. Help me understand what specific aspects you'd like to think about so I can provide any additional information that might be helpful."</p>

          <h3>"I can't afford it"</h3>
          <p><strong>Response:</strong> "I hear you, and I want to be respectful of your financial situation. Can I ask - if money weren't a consideration, would this be something you'd want to move forward with? [If yes] What would need to happen for this to make financial sense for you?"</p>

          <h3>"I need to talk to my spouse"</h3>
          <p><strong>Response:</strong> "That makes perfect sense - this affects both of you. What do you think their main concerns or questions might be? How can I help you have that conversation in a way that's productive?"</p>

          <h3>"I'm not sure if coaching is right for me"</h3>
          <p><strong>Response:</strong> "That's a fair question. What specifically are you unsure about? Is it the coaching process itself, whether it will work for your situation, or something else?"</p>

          <h2>Call Structure Templates</h2>

          <h3>30-Minute Discovery Call Agenda</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-8">
            <ul className="text-sm space-y-2">
              <li><strong>0-3 min:</strong> Welcome & agenda setting</li>
              <li><strong>3-8 min:</strong> Current situation exploration</li>
              <li><strong>8-13 min:</strong> Vision & goals discovery</li>
              <li><strong>13-18 min:</strong> Challenge identification</li>
              <li><strong>18-25 min:</strong> Solution presentation</li>
              <li><strong>25-30 min:</strong> Next steps & close</li>
            </ul>
          </div>

          <h3>45-Minute Discovery Call Agenda</h3>
          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <ul className="text-sm space-y-2">
              <li><strong>0-5 min:</strong> Welcome, rapport building & agenda</li>
              <li><strong>5-12 min:</strong> Current situation deep dive</li>
              <li><strong>12-20 min:</strong> Vision & outcome exploration</li>
              <li><strong>20-28 min:</strong> Challenge & obstacle analysis</li>
              <li><strong>28-38 min:</strong> Solution presentation & value demonstration</li>
              <li><strong>38-45 min:</strong> Investment discussion & enrollment</li>
            </ul>
          </div>

          <h2>Pre-Call Preparation</h2>

          <h3>Research Checklist</h3>
          <ul>
            <li><strong>LinkedIn profile:</strong> Professional background and interests</li>
            <li><strong>Social media:</strong> Personal insights and current challenges</li>
            <li><strong>Application form:</strong> Information they've already shared</li>
            <li><strong>Website/business:</strong> If they're an entrepreneur</li>
          </ul>

          <h3>Environment Setup</h3>
          <ul>
            <li><strong>Technology:</strong> Test camera, microphone, and internet</li>
            <li><strong>Space:</strong> Professional, quiet background</li>
            <li><strong>Materials:</strong> Notes, program overview, pricing sheet</li>
            <li><strong>Mindset:</strong> Calm, curious, and service-oriented</li>
          </ul>

          <h2>Post-Call Follow-Up</h2>

          <h3>Same Day (within 2 hours)</h3>
          <ul>
            <li><strong>Thank you message:</strong> Appreciate their time and openness</li>
            <li><strong>Summary:</strong> Recap key points discussed</li>
            <li><strong>Next steps:</strong> Clear action items and timeline</li>
            <li><strong>Resources:</strong> Any promised materials or links</li>
          </ul>

          <h3>Follow-Up Sequence</h3>
          <ul>
            <li><strong>Day 3:</strong> Check-in with additional value/resource</li>
            <li><strong>Day 7:</strong> Final enrollment opportunity if still deciding</li>
            <li><strong>Day 14:</strong> Add to nurture sequence for future opportunities</li>
          </ul>

          <h2>Conversion Optimization Tips</h2>

          <h3>Before the Call</h3>
          <ul>
            <li><strong>Pre-call questionnaire:</strong> Gather key information in advance</li>
            <li><strong>Calendar reminders:</strong> Multiple touchpoints to reduce no-shows</li>
            <li><strong>Value-add content:</strong> Send relevant resource before call</li>
          </ul>

          <h3>During the Call</h3>
          <ul>
            <li><strong>Listen ratio:</strong> 70% listening, 30% talking</li>
            <li><strong>Note-taking:</strong> Write down key phrases and concerns</li>
            <li><strong>Energy matching:</strong> Match their communication style and pace</li>
            <li><strong>Specificity:</strong> Use their exact words and examples</li>
          </ul>

          <h3>Closing the Call</h3>
          <ul>
            <li><strong>Assumptive close:</strong> "When would you like to start?"</li>
            <li><strong>Alternative choice:</strong> "Would you prefer to start Monday or Wednesday?"</li>
            <li><strong>Urgency creation:</strong> Limited spots or timing considerations</li>
            <li><strong>Payment options:</strong> Make it easy to say yes</li>
          </ul>

          <h2>Common Mistakes to Avoid</h2>

          <h3>The Interrogation Trap</h3>
          <p><strong>Problem:</strong> Asking too many questions without building rapport</p>
          <p><strong>Solution:</strong> Share your own experiences and insights between questions</p>

          <h3>The Feature Dump</h3>
          <p><strong>Problem:</strong> Explaining everything about your program</p>
          <p><strong>Solution:</strong> Focus only on what addresses their specific needs</p>

          <h3>The Pressure Pitch</h3>
          <p><strong>Problem:</strong> Being pushy or aggressive about enrollment</p>
          <p><strong>Solution:</strong> Maintain service-oriented mindset and genuine curiosity</p>

          <h3>The Assumption Error</h3>
          <p><strong>Problem:</strong> Assuming you know what they need</p>
          <p><strong>Solution:</strong> Ask follow-up questions and seek clarification</p>

          <h2>Conclusion</h2>
          <p>
            Mastering discovery calls is a skill that directly impacts your coaching business growth. Use these frameworks as starting points, but always adapt your approach to each individual prospect's communication style and needs.
          </p>

          <p>
            Remember: The best discovery calls feel like natural conversations where prospects feel heard, understood, and excited about their potential transformation.
          </p>
        </div>

        {/* Related Articles */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Workflows</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/client-intake-onboarding" className="text-gray-900 hover:text-primary-600">
                  Client Intake Process
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                What happens after they say yes - complete onboarding framework.
              </p>
              <Link href="/workflows/client-intake-onboarding" className="text-primary-600 text-sm font-medium">
                Get Started →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/growth/pricing-for-coaches" className="text-gray-900 hover:text-primary-600">
                  Pricing Strategy
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                How to price your coaching services for maximum conversions.
              </p>
              <Link href="/growth/pricing-for-coaches" className="text-primary-600 text-sm font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}