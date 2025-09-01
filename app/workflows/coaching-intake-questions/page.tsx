import { generateSEO } from '@/lib/seo'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = generateSEO({
  title: 'Coaching Intake Questions & Process',
  description: 'Essential intake questions, consent forms, and red flag identification to set proper boundaries and structure successful coaching relationships from the start.',
  keywords: ['coaching intake', 'intake questions', 'coaching assessment', 'client onboarding', 'coaching boundaries'],
  canonicalUrl: 'https://lifecoachlibrary.com/workflows/coaching-intake-questions',
})

export default function CoachingIntakeQuestionsPage() {
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
              <span aria-current="page">Coaching Intake Questions</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Coaching Intake: Questions, Consent & Red Flags (Free Forms)
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Design effective intake forms that gather meaningful client information, establish proper consent, and identify red flags. Includes 25 essential questions and ready-to-use templates.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Published: January 15, 2025</span>
            <span className="mx-2">•</span>
            <span>11 min read</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-custom">
          <p>
            A comprehensive intake process is the foundation of every successful coaching relationship. It establishes boundaries, clarifies expectations, and ensures you're working with clients you can genuinely help. This guide provides everything you need to create professional intake forms that protect both you and your clients while setting the stage for transformational work.
          </p>

          <h2>Why intake matters</h2>
          <p>
            Many coaches rush into working with clients without proper intake, leading to misaligned expectations, scope creep, and ethical challenges. A thorough intake process:
          </p>

          <ul>
            <li>Establishes clear boundaries and expectations from the start</li>
            <li>Identifies potential red flags that might indicate a poor fit</li>
            <li>Gathers essential information for tailoring your coaching approach</li>
            <li>Demonstrates professionalism and builds client confidence</li>
            <li>Protects you legally through proper consent and documentation</li>
            <li>Helps clients reflect on their goals and commitment level</li>
          </ul>

          <h2>Core sections of an effective intake form</h2>
          <p>
            Your intake form should cover several key areas to gather comprehensive information while remaining user-friendly and professional.
          </p>

          <h3>Personal and contact information</h3>
          <p>
            Start with basics but go beyond name and email. Understanding someone's life context helps you provide more effective coaching.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4">Essential Personal Information Questions</h4>
            <ul className="space-y-2 text-sm">
              <li>• Full name and preferred name/pronouns</li>
              <li>• Email address and phone number</li>
              <li>• Time zone and preferred meeting times</li>
              <li>• Current life situation (single, married, children, etc.)</li>
              <li>• Employment status and general work situation</li>
              <li>• How they prefer to communicate between sessions</li>
            </ul>
          </div>

          <h3>Current situation and challenges</h3>
          <p>
            Understanding where clients are starting from helps you gauge the scope of work and identify potential challenges early.
          </p>

          <h4>Key current situation questions:</h4>
          <ol>
            <li><strong>"What's happening in your life right now that brought you to coaching?"</strong> - Gets to the root motivation</li>
            <li><strong>"Describe a typical day or week in your current situation."</strong> - Provides context and reveals patterns</li>
            <li><strong>"What aspects of your life are working well right now?"</strong> - Identifies strengths to build upon</li>
            <li><strong>"Where do you feel most stuck or frustrated?"</strong> - Pinpoints primary focus areas</li>
            <li><strong>"How long have you been dealing with these challenges?"</strong> - Indicates urgency and patterns</li>
          </ol>

          <h3>Goals and expectations</h3>
          <p>
            Clear goal-setting prevents misaligned expectations and helps both parties understand what success looks like.
          </p>

          <h4>Essential goal clarification questions:</h4>
          <ol start={6}>
            <li><strong>"What do you want to achieve through coaching?"</strong> - Primary goal identification</li>
            <li><strong>"If we could solve your main challenge completely, what would your life look like in 6 months?"</strong> - Vision clarity</li>
            <li><strong>"What would need to change for you to feel completely satisfied with this area of your life?"</strong> - Success metrics</li>
            <li><strong>"How will you know when you've achieved your goals?"</strong> - Measurable outcomes</li>
            <li><strong>"What's your timeline for seeing meaningful progress?"</strong> - Expectation management</li>
          </ol>

          <h3>Previous coaching or therapy experience</h3>
          <p>
            Understanding a client's history with professional support helps you avoid repeating unsuccessful approaches and identifies what works for them.
          </p>

          <h4>Experience assessment questions:</h4>
          <ol start={11}>
            <li><strong>"Have you worked with a coach or therapist before?"</strong> - Experience level</li>
            <li><strong>"If yes, what worked well in those relationships?"</strong> - Successful approaches</li>
            <li><strong>"What didn't work or what would you want to be different?"</strong> - Lessons learned</li>
            <li><strong>"Are you currently working with any other coaches, therapists, or consultants?"</strong> - Overlap prevention</li>
            <li><strong>"What qualities do you look for in a coach?"</strong> - Style preferences</li>
          </ol>

          <h3>Commitment and logistics</h3>
          <p>
            Assess their readiness for change and ability to engage fully in the coaching process.
          </p>

          <h4>Commitment assessment questions:</h4>
          <ol start={16}>
            <li><strong>"How committed are you to making changes in your life on a scale of 1-10?"</strong> - Motivation level</li>
            <li><strong>"What might prevent you from fully participating in coaching?"</strong> - Obstacle identification</li>
            <li><strong>"How much time can you realistically dedicate to coaching work between sessions?"</strong> - Capacity assessment</li>
            <li><strong>"What does accountability mean to you in a coaching relationship?"</strong> - Expectation alignment</li>
            <li><strong>"How do you prefer to receive feedback or challenging conversations?"</strong> - Communication style</li>
          </ol>

          <h3>Health and wellness considerations</h3>
          <p>
            Understanding someone's mental and physical health situation helps you determine if coaching is appropriate or if referrals are needed.
          </p>

          <h4>Wellness screening questions:</h4>
          <ol start={21}>
            <li><strong>"Are you currently managing any mental health challenges with professional support?"</strong> - Mental health status</li>
            <li><strong>"Do you have any physical health conditions that might impact our work together?"</strong> - Physical considerations</li>
            <li><strong>"Are you currently taking any medications that affect your mood, energy, or thinking?"</strong> - Medical factors</li>
            <li><strong>"Have you experienced any major life changes or losses in the past year?"</strong> - Recent trauma assessment</li>
            <li><strong>"Is there anything else about your situation that would be important for me to know?"</strong> - Open-ended disclosure</li>
          </ol>

          <h2>Consent and privacy framework</h2>
          <p>
            Proper consent protects both parties and establishes trust. Your consent section should cover these essential elements:
          </p>

          <h3>Coaching vs. therapy distinction</h3>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Sample Consent Language</h4>
            <p className="text-sm">
              "I understand that coaching is not therapy, counseling, or mental health treatment. Coaching focuses on goal achievement, personal development, and forward movement rather than healing from past trauma or treating mental health conditions. If therapeutic support is needed, my coach will provide appropriate referrals."
            </p>
          </div>

          <h3>Confidentiality and limits</h3>
          <p>
            Clearly explain what information will be kept confidential and the rare circumstances where confidentiality might be broken (such as harm to self or others).
          </p>

          <h3>Session recording and notes</h3>
          <p>
            If you record sessions or take detailed notes, clients should consent to this practice and understand how the information will be used and stored.
          </p>

          <h3>Communication boundaries</h3>
          <p>
            Establish clear guidelines about between-session communication, response times, and emergency contact procedures.
          </p>

          <h2>Red flags and referral tree</h2>
          <p>
            Not everyone who applies for coaching is a good fit. Watch for these red flags that suggest someone might need therapy, medical attention, or simply isn't ready for coaching:
          </p>

          <div className="bg-red-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-4 text-red-800">Red Flag Matrix</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-red-700">Mental Health Concerns (Refer to Therapy)</h5>
                <ul className="text-sm text-red-600 mt-2 space-y-1">
                  <li>• Active suicidal or self-harm thoughts</li>
                  <li>• Untreated depression, anxiety, or trauma</li>
                  <li>• Recent major loss without professional support</li>
                  <li>• Substance abuse issues</li>
                  <li>• Eating disorders or body dysmorphia</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-red-700">Coaching Readiness Issues (Decline or Delay)</h5>
                <ul className="text-sm text-red-600 mt-2 space-y-1">
                  <li>• Unwillingness to take responsibility for their situation</li>
                  <li>• Seeking someone to fix them rather than support change</li>
                  <li>• Unrealistic expectations about timeline or effort required</li>
                  <li>• History of not following through on commitments</li>
                  <li>• Primarily motivated by others' expectations</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-red-700">Scope Concerns (Clarify or Refer)</h5>
                <ul className="text-sm text-red-600 mt-2 space-y-1">
                  <li>• Seeking advice on medical, legal, or financial decisions</li>
                  <li>• Wanting therapy but calling it coaching</li>
                  <li>• Goals outside your area of expertise or experience</li>
                  <li>• Expecting you to solve relationship or family dynamics</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>Building your referral network</h3>
          <p>
            Develop relationships with qualified professionals you can refer clients to when needed:
          </p>

          <ul>
            <li><strong>Licensed therapists</strong> - For mental health support</li>
            <li><strong>Medical professionals</strong> - For health-related concerns</li>
            <li><strong>Financial advisors</strong> - For money-related goals</li>
            <li><strong>Career counselors</strong> - For specialized career transition support</li>
            <li><strong>Other coaches</strong> - For areas outside your expertise</li>
          </ul>

          <h2>Setting up in Typeform or Google Forms</h2>
          <p>
            Make your intake process user-friendly with these digital form best practices:
          </p>

          <h3>Typeform advantages</h3>
          <ul>
            <li>Conversational, one-question-at-a-time format</li>
            <li>Professional appearance and mobile optimization</li>
            <li>Conditional logic for personalized question flows</li>
            <li>Integration with CRM and scheduling tools</li>
          </ul>

          <h3>Google Forms advantages</h3>
          <ul>
            <li>Free and easy to set up</li>
            <li>Automatic response collection in Google Sheets</li>
            <li>Familiar interface for most users</li>
            <li>Good for coaches just starting out</li>
          </ul>

          <h3>Form optimization tips</h3>
          <ul>
            <li>Keep the form to 25 questions or fewer</li>
            <li>Use progress indicators to show completion status</li>
            <li>Make required questions clear and limit them to essentials</li>
            <li>Include a clear privacy statement</li>
            <li>Test the form yourself before launching</li>
            <li>Send confirmation emails with next steps</li>
          </ul>

          <h2>Download pack and templates</h2>
          <p>
            Ready to implement this intake process? Access these downloadable resources:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Complete Intake Form</h4>
              <p className="text-gray-600 text-sm mb-3">All 25 questions in Typeform and Google Forms format</p>
              <Link href="/templates" className="text-primary-600 text-sm font-medium">View Forms →</Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Red Flag Checklist</h4>
              <p className="text-gray-600 text-sm mb-3">Decision matrix for client acceptance</p>
              <Link href="/templates" className="text-primary-600 text-sm font-medium">View Template →</Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Consent Form Template</h4>
              <p className="text-gray-600 text-sm mb-3">Legal protection and boundary setting</p>
              <Link href="/templates" className="text-primary-600 text-sm font-medium">View →</Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Referral Directory</h4>
              <p className="text-gray-600 text-sm mb-3">Template for building your professional network</p>
              <Link href="/templates" className="text-primary-600 text-sm font-medium">Get Directory →</Link>
            </div>
          </div>

          <p>
            Run a client strengths profile before session one to tailor goals. Integrating a <a href="https://www.personality-quizzes.com/for-coaching?utm_source=lcl&utm_medium=referral&utm_campaign=for_coaching_library" className="text-primary-600 hover:text-primary-700">comprehensive personality assessment</a> during intake helps you understand how to motivate and communicate with each client effectively.
          </p>

          <h2>Conclusion</h2>
          <p>
            A comprehensive intake process is the first step toward transformational coaching. By gathering detailed personal information, clarifying goals and expectations, and integrating validated assessments, you create a strong foundation for your coaching relationship. The time invested in proper intake pays dividends throughout the entire coaching engagement by preventing misunderstandings, identifying the right clients, and setting both parties up for success.
          </p>

          <p>
            Remember that intake is not just information gathering—it's the beginning of the coaching relationship. Approach it with the same care, professionalism, and client focus that you bring to your coaching sessions.
          </p>
        </div>

        {/* Related Articles */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/discovery-call-script" className="text-gray-900 hover:text-primary-600">
                  Discovery Call Script
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                30-minute framework to qualify prospects before they complete intake forms.
              </p>
              <Link href="/workflows/discovery-call-script" className="text-primary-600 text-sm font-medium">
                Get Script →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/first-session-agenda" className="text-gray-900 hover:text-primary-600">
                  First Session Agenda
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                How to use intake information in your first coaching session effectively.
              </p>
              <Link href="/workflows/first-session-agenda" className="text-primary-600 text-sm font-medium">
                View Agenda →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How long should clients spend completing the intake form?</h4>
              <p className="text-gray-600">
                Most clients need 15-20 minutes to thoughtfully complete a comprehensive intake form. If it takes longer than 30 minutes, consider reducing the number of questions or breaking it into multiple shorter forms.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What if a client refuses to answer certain intake questions?</h4>
              <p className="text-gray-600">
                Respect their boundaries while explaining why the information is important for effective coaching. If they won't provide essential information that affects your ability to coach them safely and effectively, consider whether the match is appropriate.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Should I charge for the intake process?</h4>
              <p className="text-gray-600">
                The intake form itself is typically free, but some coaches charge for an intake session to review the responses and ensure fit. This approach pre-qualifies clients and demonstrates the value of your time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">How do I handle sensitive information revealed in intake forms?</h4>
              <p className="text-gray-600">
                Store intake information securely, following privacy laws in your jurisdiction. Address sensitive issues compassionately in your first session, and be prepared to make referrals when appropriate. Never ignore red flags.
              </p>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}