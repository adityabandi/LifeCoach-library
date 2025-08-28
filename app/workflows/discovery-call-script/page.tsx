import { generateSEO } from '@/lib/seo'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = generateSEO({
  title: 'Discovery Call SOP: 30-Minute Script & Notes Template | Life Coach Library',
  description: 'Complete discovery call script and notes template to qualify prospects and close ideal coaching clients. Free 30-minute framework with proven questions.',
  keywords: ['discovery call script', 'coaching sales call', 'prospect qualification', 'client consultation', 'coaching enrollment'],
  canonicalUrl: 'https://adityabandi.github.io/LifeCoach-library/workflows/discovery-call-script',
})

export default function DiscoveryCallScriptPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-gray-700">Home</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2" aria-hidden="true">›</span>
              <Link href="/workflows" className="hover:text-gray-700">Workflows</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2" aria-hidden="true">›</span>
              <span aria-current="page">Discovery Call Script</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discovery Call SOP: 30-Minute Script & Notes Template
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Master the art of prospect qualification and client enrollment with this proven 30-minute discovery call framework. Includes scripts, questions, and note-taking templates.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Published: January 15, 2025</span>
            <span className="mx-2">•</span>
            <span>12 min read</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-custom">
          <p>
            The discovery call is your most critical touchpoint in the client acquisition process. It's where prospects become paying clients, and where you establish the foundation for a successful coaching relationship. This comprehensive framework provides everything you need to conduct professional, effective discovery calls that convert qualified prospects into committed clients.
          </p>

          <h2>Pre-call preparation checklist</h2>
          <p>
            Success begins before the call starts. Proper preparation ensures you're confident, focused, and ready to deliver maximum value in minimal time.
          </p>

          <h3>Research your prospect</h3>
          <ul>
            <li>Review their application or intake form responses</li>
            <li>Check their LinkedIn profile for professional context</li>
            <li>Note any specific goals or challenges they've mentioned</li>
            <li>Identify potential objections based on their background</li>
          </ul>

          <h3>Set up your environment</h3>
          <ul>
            <li>Choose a quiet, professional space with good lighting</li>
            <li>Test your video and audio quality</li>
            <li>Have your note-taking template ready</li>
            <li>Prepare any relevant assessment tools or resources</li>
          </ul>

          <h2>The 30-minute discovery call framework</h2>
          <p>
            This proven structure ensures you cover all essential elements while maintaining a natural, conversational flow. Each segment is timeboxed to keep the call focused and respectful of everyone's time.
          </p>

          <h3>Opening & rapport building (5 minutes)</h3>
          <p>
            Start with warmth and professionalism to set the right tone for the conversation.
          </p>

          <blockquote>
            <p><strong>Script example:</strong></p>
            <p>"Hi [Name], it's wonderful to meet you! Thank you for taking the time to speak with me today. I'm excited to learn more about your goals and see how I might be able to support you. Before we dive in, how has your day been going?"</p>
          </blockquote>

          <p>
            <strong>Key objectives:</strong>
          </p>
          <ul>
            <li>Create a welcoming, professional atmosphere</li>
            <li>Establish initial connection and trust</li>
            <li>Set clear expectations for the call structure</li>
            <li>Make the prospect feel heard and valued</li>
          </ul>

          <h3>Discovery & qualification (15 minutes)</h3>
          <p>
            This is the heart of your call. Use open-ended questions to understand their situation, goals, and readiness for change.
          </p>

          <h4>Current situation questions</h4>
          <ul>
            <li>"Tell me about what's happening in [specific area] right now that made you reach out."</li>
            <li>"What does a typical day look like for you currently?"</li>
            <li>"What's working well in your life right now?"</li>
            <li>"Where do you feel stuck or frustrated?"</li>
          </ul>

          <h4>Goal clarification questions</h4>
          <ul>
            <li>"If we could wave a magic wand and solve this completely, what would your life look like in 6 months?"</li>
            <li>"What would achieving this goal mean to you personally and professionally?"</li>
            <li>"How important is solving this on a scale of 1-10?"</li>
            <li>"What happens if nothing changes?"</li>
          </ul>

          <h4>Commitment and investment questions</h4>
          <ul>
            <li>"What have you tried so far to address this?"</li>
            <li>"What prevented those approaches from working?"</li>
            <li>"What would you be willing to invest in yourself to make this change?"</li>
            <li>"How committed are you to doing the work required for real change?"</li>
          </ul>

          <h3>Solution presentation (7 minutes)</h3>
          <p>
            Based on what you've learned, present a tailored solution that directly addresses their specific needs and goals.
          </p>

          <blockquote>
            <p><strong>Script framework:</strong></p>
            <p>"Based on everything you've shared, I can see that [summarize their situation]. The good news is that [specific challenge] is exactly what I help [ideal client type] overcome. In my experience working with clients like you, the most effective approach involves [brief methodology overview]."</p>
          </blockquote>

          <p>
            Include a relevant client success story that mirrors their situation, focusing on the transformation and results achieved.
          </p>

          <h3>Next steps & close (3 minutes)</h3>
          <p>
            End with clarity about next steps, whether that's enrollment in your program or a follow-up conversation.
          </p>

          <p>
            <strong>For qualified prospects ready to move forward:</strong>
          </p>
          <blockquote>
            <p>"I'm confident I can help you achieve [specific goal]. My [program name] is designed specifically for [their situation]. The investment is [price], and we would start with [next step]. How does that feel to you?"</p>
          </blockquote>

          <p>
            <strong>For prospects who need more time:</strong>
          </p>
          <blockquote>
            <p>"I can see this is exactly what you need, and I want to give you space to think it through. What questions do you have for me? And what would be helpful as you make this decision?"</p>
          </blockquote>

          <h2>Note-taking template</h2>
          <p>
            Effective note-taking ensures you capture key information while staying present in the conversation. Use this template to organize your notes:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Discovery Call Notes Template</h4>
            <p><strong>Prospect:</strong> ________________<br/>
            <strong>Date:</strong> ________________<br/>
            <strong>Call Duration:</strong> ________________</p>
            
            <p className="mt-4"><strong>CURRENT SITUATION:</strong><br/>
            • Main challenge: ________________<br/>
            • Current frustrations: ________________<br/>
            • What's working: ________________</p>
            
            <p className="mt-4"><strong>GOALS & DESIRES:</strong><br/>
            • Primary goal: ________________<br/>
            • Success vision: ________________<br/>
            • Importance level (1-10): ________________</p>
            
            <p className="mt-4"><strong>PAST ATTEMPTS:</strong><br/>
            • Previous solutions tried: ________________<br/>
            • Why they didn't work: ________________<br/>
            • Investment history: ________________</p>
            
            <p className="mt-4"><strong>QUALIFICATION NOTES:</strong><br/>
            • Commitment level: ________________<br/>
            • Decision-making process: ________________<br/>
            • Timeline: ________________</p>
            
            <p className="mt-4"><strong>NEXT STEPS:</strong><br/>
            • Outcome: ________________<br/>
            • Follow-up required: ________________<br/>
            • Action items: ________________</p>
          </div>

          <h2>Common objections and responses</h2>
          <p>
            Prepare for these frequent objections with thoughtful, empathetic responses that address underlying concerns.
          </p>

          <h3>"I need to think about it"</h3>
          <p>
            <strong>Response:</strong> "I completely understand wanting to think this through - it's an important decision. Help me understand what specifically you'd like to think about. Is it the approach, the timing, or the investment?"
          </p>

          <h3>"I can't afford it right now"</h3>
          <p>
            <strong>Response:</strong> "I hear you, and I want to respect your financial situation. Help me understand - is this not in the budget at all, or is it about prioritizing this investment? What would need to change for this to make sense financially?"
          </p>

          <h3>"I need to talk to my partner"</h3>
          <p>
            <strong>Response:</strong> "That makes perfect sense - it's wonderful that you include your partner in important decisions. What information would be most helpful for you to share with them? Would it be valuable if I spoke with both of you together?"
          </p>

          <h2>Red flags to watch for</h2>
          <p>
            Not every prospect is a good fit. Watch for these warning signs that suggest someone may not be ready for coaching:
          </p>

          <ul>
            <li>Unwillingness to take responsibility for their situation</li>
            <li>Looking for a quick fix without doing the work</li>
            <li>History of not following through on commitments</li>
            <li>Unrealistic expectations about timeline or outcomes</li>
            <li>Primarily focused on price rather than value</li>
            <li>Seeking therapy-level support for mental health issues</li>
          </ul>

          <h2>Post-call follow-up</h2>
          <p>
            Your follow-up can make the difference between a lost prospect and a committed client.
          </p>

          <h3>Immediate follow-up (within 2 hours)</h3>
          <p>
            Send a brief email thanking them for their time and summarizing next steps. Include any resources you mentioned during the call.
          </p>

          <h3>For prospects who need time to decide</h3>
          <p>
            Follow up within 24-48 hours with additional information that addresses their specific concerns or questions. Include social proof relevant to their situation.
          </p>

          <h3>For prospects who aren't ready</h3>
          <p>
            Add them to your nurture sequence and provide ongoing value through helpful content. Stay top-of-mind for when their situation changes.
          </p>

          <h2>Measuring and improving your discovery calls</h2>
          <p>
            Track key metrics to continuously improve your conversion rates:
          </p>

          <ul>
            <li><strong>Show-up rate:</strong> Percentage of scheduled calls that actually happen</li>
            <li><strong>Conversion rate:</strong> Percentage of calls that result in enrollment</li>
            <li><strong>Follow-up conversion:</strong> Percentage of "think about it" prospects who eventually enroll</li>
            <li><strong>Average call duration:</strong> Staying within your 30-minute timeframe</li>
          </ul>

          <p>
            Consider integrating a <a href="https://www.personality-quizzes.com/for-coaching?utm_source=lcl&utm_medium=referral&utm_campaign=for_coaching_library" className="text-primary-600 hover:text-primary-700">validated strengths assessment</a> into your discovery call process. Understanding a prospect's natural strengths and motivators can help you tailor your coaching approach and demonstrate the value of personalized development.
          </p>

          <h2>Conclusion</h2>
          <p>
            A well-structured discovery call is your opportunity to serve potential clients while building a sustainable coaching practice. By following this framework, you'll conduct professional conversations that help prospects make informed decisions about their development journey. Remember, the goal isn't to convince everyone to work with you—it's to identify the right clients for whom you can create meaningful transformation.
          </p>

          <p>
            Practice this framework consistently, track your results, and refine your approach based on what works best for your ideal clients. With time and experience, discovery calls will become a natural, enjoyable part of your client acquisition process.
          </p>
        </div>

        {/* Related Articles */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/coaching-intake-questions" className="text-gray-900 hover:text-primary-600">
                  Coaching Intake Process
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Complete intake forms and questionnaires to gather essential client information.
              </p>
              <Link href="/workflows/coaching-intake-questions" className="text-primary-600 text-sm font-medium">
                View Forms →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/first-session-agenda" className="text-gray-900 hover:text-primary-600">
                  First Session Agenda
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Structured 60-minute framework for powerful first coaching sessions.
              </p>
              <Link href="/workflows/first-session-agenda" className="text-primary-600 text-sm font-medium">
                Get Template →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How do I handle prospects who want to negotiate price during the discovery call?</h4>
              <p className="text-gray-600">
                Stay focused on value rather than price. Acknowledge their concern, then redirect to the transformation they'll experience. If price is truly a barrier, consider offering payment plans or discussing alternative program options that better fit their budget.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What if the prospect doesn't ask any questions during the call?</h4>
              <p className="text-gray-600">
                This often indicates they're not fully engaged or don't understand the value yet. Prompt them with: "What questions do you have about working together?" or "What would be most important for you to know before making a decision?"
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Should I offer a discovery call to everyone who inquires?</h4>
              <p className="text-gray-600">
                No. Use a brief application or intake form to pre-qualify prospects. Only offer discovery calls to those who demonstrate genuine interest, meet your ideal client criteria, and have the potential budget for your services.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How many discovery calls should I expect to convert into clients?</h4>
              <p className="text-gray-600">
                A good conversion rate for well-qualified prospects is 30-50%. If your rate is lower, examine your qualification process, call structure, or follow-up strategy. Higher rates might indicate you're not being selective enough with prospects.
              </p>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}