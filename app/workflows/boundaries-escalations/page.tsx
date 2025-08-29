import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateSEO({
  title: 'Coach Boundaries & Escalation Protocols - Professional Practice Management',
  description: 'Essential boundaries, scope management, and escalation protocols for life coaches. Learn how to handle mental health concerns, maintain professional limits, and refer appropriately.',
  keywords: ['coaching boundaries', 'scope management', 'coach ethics', 'mental health referrals', 'professional coaching', 'escalation protocols'],
  canonicalUrl: 'https://lifecoachlibrary.com/workflows/boundaries-escalations',
})

export default function BoundariesEscalationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Workflows', href: '/workflows' },
          { label: 'Boundaries & Escalations' }
        ]} 
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Boundaries & Escalation Protocols
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Essential frameworks for maintaining professional scope, setting healthy boundaries, and handling situations that require referrals or escalation.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>Published: August 28, 2025</span>
            <span className="mx-2">•</span>
            <span>12 min read</span>
          </div>
        </header>

        <div className="prose-custom">
          <p>
            Professional boundaries protect both coach and client, ensuring effective coaching relationships while maintaining ethical standards. This guide provides clear protocols for scope management, boundary setting, and appropriate escalation procedures.
          </p>

          <h2>Understanding coaching scope & boundaries</h2>

          <h3>What coaching is:</h3>
          <ul>
            <li><strong>Future-focused:</strong> Helping clients move toward desired outcomes</li>
            <li><strong>Action-oriented:</strong> Creating accountability and momentum</li>
            <li><strong>Skill-building:</strong> Developing capabilities and strategies</li>
            <li><strong>Partnership-based:</strong> Collaborative relationship with capable adults</li>
            <li><strong>Solution-focused:</strong> Exploring options and possibilities</li>
          </ul>

          <h3>What coaching is NOT:</h3>
          <ul>
            <li><strong>Therapy:</strong> Treating mental health disorders or trauma</li>
            <li><strong>Consulting:</strong> Providing expert advice or solutions</li>
            <li><strong>Counseling:</strong> Processing past experiences or emotional healing</li>
            <li><strong>Medical treatment:</strong> Diagnosing or treating health conditions</li>
            <li><strong>Financial/legal advice:</strong> Professional guidance requiring licenses</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <h3 className="text-lg font-semibold text-red-900 mb-2">Critical Boundary Principle</h3>
            <p className="text-red-800">
              When in doubt, refer out. It's always better to err on the side of caution and maintain professional integrity than to work outside your scope of practice.
            </p>
          </div>

          <h2>Essential coaching boundaries</h2>

          <h3>1. Time boundaries</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">Session Time Limits:</h4>
            <ul className="space-y-2">
              <li>• Sessions start and end on time (±5 minutes maximum)</li>
              <li>• No sessions longer than 90 minutes without break</li>
              <li>• 24-hour cancellation policy</li>
              <li>• Emergency contact protocol clearly defined</li>
            </ul>

            <h4 className="font-semibold mb-3 mt-6">Response Times:</h4>
            <ul className="space-y-2">
              <li>• Email responses within 24-48 hours (business days)</li>
              <li>• No text messaging unless pre-agreed emergency protocol</li>
              <li>• Vacation/unavailability communicated 2 weeks in advance</li>
              <li>• After-hours contact only for true emergencies</li>
            </ul>
          </div>

          <h3>2. Relationship boundaries</h3>
          <ul>
            <li><strong>Dual relationships:</strong> Avoid coaching friends, family, or business partners</li>
            <li><strong>Social media:</strong> Clear policy on connecting personally vs. professionally</li>
            <li><strong>Personal disclosure:</strong> Share only what serves the client's goals</li>
            <li><strong>Physical boundaries:</strong> Appropriate professional distance and contact</li>
            <li><strong>Gift policy:</strong> Guidelines on accepting gifts or invitations</li>
          </ul>

          <h3>3. Scope boundaries</h3>
          <ul>
            <li><strong>Stay in coaching:</strong> Avoid therapy, counseling, or consulting roles</li>
            <li><strong>Competency limits:</strong> Only coach within your training and experience</li>
            <li><strong>Cultural sensitivity:</strong> Acknowledge limitations and seek appropriate resources</li>
            <li><strong>Subject matter expertise:</strong> Don't provide advice outside your expertise</li>
          </ul>

          <h2>Red flags requiring escalation</h2>

          <h3>Immediate escalation (within 24 hours):</h3>
          <div className="bg-red-50 p-6 rounded-lg my-6">
            <ul className="space-y-2">
              <li>• <strong>Suicidal ideation:</strong> Any mention of self-harm or suicide</li>
              <li>• <strong>Homicidal thoughts:</strong> Threats toward others</li>
              <li>• <strong>Psychotic episodes:</strong> Delusions, hallucinations, severe disconnection</li>
              <li>• <strong>Substance abuse crisis:</strong> Active addiction affecting safety</li>
              <li>• <strong>Domestic violence:</strong> Current abuse situations</li>
              <li>• <strong>Child/elder abuse:</strong> Mandatory reporting situations</li>
            </ul>
          </div>

          <h3>Planned referral situations:</h3>
          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <ul className="space-y-2">
              <li>• <strong>Clinical depression/anxiety:</strong> Persistent symptoms affecting daily function</li>
              <li>• <strong>Trauma processing:</strong> PTSD, childhood trauma, recent traumatic events</li>
              <li>• <strong>Eating disorders:</strong> Disordered eating patterns or body dysmorphia</li>
              <li>• <strong>Relationship therapy needs:</strong> Marital counseling, family systems work</li>
              <li>• <strong>Addiction recovery:</strong> Substance use disorders requiring clinical support</li>
              <li>• <strong>Grief counseling:</strong> Recent loss requiring therapeutic support</li>
            </ul>
          </div>

          <h3>Professional consultation needed:</h3>
          <ul>
            <li><strong>Legal issues:</strong> Divorce, custody, employment disputes</li>
            <li><strong>Financial planning:</strong> Investment advice, debt management, financial planning</li>
            <li><strong>Medical concerns:</strong> Health symptoms, medication interactions</li>
            <li><strong>Educational guidance:</strong> Learning disabilities, academic accommodations</li>
          </ul>

          <h2>Escalation protocols & scripts</h2>

          <h3>Mental health referral script:</h3>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="italic mb-4">"I've noticed you've mentioned [specific concern] several times in our sessions. While coaching can be incredibly helpful for goal achievement and forward momentum, what you're describing sounds like it might benefit from therapeutic support as well.</p>
            
            <p className="italic mb-4">I want to make sure you get the best possible support. I'd like to suggest we add a therapist to your support team. We can absolutely continue our coaching work alongside therapy - they complement each other beautifully.</p>
            
            <p className="italic">I have some excellent therapist referrals I can share with you. Would you like me to send you a few names to consider?"</p>
          </div>

          <h3>Scope boundary script:</h3>
          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="italic mb-4">"That's a great question about [topic], and I can see why you'd want guidance on this. However, that falls outside my scope as a coach - you'd benefit from speaking with a [specific professional type] who specializes in [area].</p>
            
            <p className="italic">What I can do is help you think through how to find the right professional and what questions to ask them. We can also explore how this decision fits into your larger goals once you have expert guidance."</p>
          </div>

          <h3>Emergency response protocol:</h3>
          <div className="bg-red-100 p-6 rounded-lg my-6">
            <h4 className="font-semibold mb-3">If client expresses suicidal thoughts:</h4>
            <ol className="space-y-2">
              <li>1. <strong>Stay calm and present:</strong> "I'm glad you shared this with me."</li>
              <li>2. <strong>Assess immediacy:</strong> "Are you thinking about hurting yourself right now?"</li>
              <li>3. <strong>Don't leave them alone:</strong> Stay on call/video until support arrives</li>
              <li>4. <strong>Connect to resources:</strong> National Suicide Prevention Lifeline: 988</li>
              <li>5. <strong>Emergency services:</strong> Call 911 if imminent danger</li>
              <li>6. <strong>Follow up:</strong> Check in within 24 hours via their preferred method</li>
            </ol>
          </div>

          <h2>Setting boundaries professionally</h2>

          <h3>Boundary-setting scripts:</h3>

          <h4>Time boundaries:</h4>
          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <p className="italic">"I want to be fully present for our work together, which means I keep strict session times. We'll wrap up in about 5 minutes, and I'd like to make sure we identify your action steps for this week."</p>
          </div>

          <h4>Scope boundaries:</h4>
          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <p className="italic">"I notice we're moving into therapy territory here. While I understand this is important to you, I want to make sure you get the right kind of support. Let's refocus on your coaching goals and how they might be affected by this situation."</p>
          </div>

          <h4>Communication boundaries:</h4>
          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <p className="italic">"I appreciate you reaching out. I check email twice daily during business hours and will respond within 24 hours. For our next session, let's create a more structured way to track insights between sessions."</p>
          </div>

          <h2>Documentation & liability protection</h2>

          <h3>Essential documentation:</h3>
          <ul>
            <li><strong>Coaching agreement:</strong> Clear scope, boundaries, and expectations</li>
            <li><strong>Session notes:</strong> Brief, factual summaries (not detailed personal information)</li>
            <li><strong>Referral records:</strong> When referrals were made and to whom</li>
            <li><strong>Boundary discussions:</strong> When boundaries were clarified or reinforced</li>
            <li><strong>Incident reports:</strong> Any concerning behaviors or emergency situations</li>
          </ul>

          <h3>Sample coaching agreement language:</h3>
          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="text-sm italic mb-4">"Coaching is not therapy, counseling, or psychological treatment. I am not a licensed mental health professional. If you are experiencing mental health concerns, I will refer you to appropriate professionals.</p>
            
            <p className="text-sm italic mb-4">I reserve the right to refer you to other professionals if I believe your needs fall outside the scope of coaching. This is in both of our best interests.</p>
            
            <p className="text-sm italic">In case of emergency or thoughts of self-harm, please contact 911 or the National Suicide Prevention Lifeline at 988 immediately."</p>
          </div>

          <h2>Building referral network</h2>

          <h3>Essential referral professionals:</h3>
          <ul>
            <li><strong>Therapists/counselors:</strong> Various specialties (trauma, anxiety, depression, couples)</li>
            <li><strong>Psychiatrists:</strong> For medication evaluation</li>
            <li><strong>Financial advisors:</strong> Certified financial planners</li>
            <li><strong>Legal professionals:</strong> Family law, employment law</li>
            <li><strong>Medical professionals:</strong> Primary care, specialists</li>
            <li><strong>Other coaches:</strong> Different specialties or approaches</li>
          </ul>

          <h3>Vetting referral partners:</h3>
          <ul>
            <li><strong>Credentials:</strong> Proper licensing and certifications</li>
            <li><strong>Approach alignment:</strong> Philosophy compatible with your clients</li>
            <li><strong>Communication style:</strong> Professional and responsive</li>
            <li><strong>Availability:</strong> Currently accepting new clients</li>
            <li><strong>Feedback:</strong> Positive reports from previous referrals</li>
          </ul>

          <h2>Self-care & boundary maintenance</h2>

          <h3>Coach self-care practices:</h3>
          <ul>
            <li><strong>Regular supervision:</strong> Meet with mentor coach monthly</li>
            <li><strong>Continuing education:</strong> Stay current with best practices</li>
            <li><strong>Personal therapy:</strong> Process your own challenges separately</li>
            <li><strong>Professional development:</strong> Attend workshops and training</li>
            <li><strong>Peer support:</strong> Connect with other coaches regularly</li>
          </ul>

          <h3>Boundary fatigue signs:</h3>
          <ul>
            <li>Thinking about clients between sessions excessively</li>
            <li>Feeling responsible for client outcomes</li>
            <li>Difficulty saying no to scope creep</li>
            <li>Dreading certain client sessions</li>
            <li>Taking client emergencies personally</li>
          </ul>

          <h2>Common boundary challenges</h2>

          <h3>Challenge 1: The "friend" client</h3>
          <p><strong>Situation:</strong> Client wants to be friends outside of coaching</p>
          <p><strong>Response:</strong> "I value our coaching relationship so much that I want to protect it. I've found that maintaining professional boundaries actually allows me to serve my clients better."</p>

          <h3>Challenge 2: The "emergency" texter</h3>
          <p><strong>Situation:</strong> Client texts frequently with "urgent" non-emergency issues</p>
          <p><strong>Response:</strong> "I notice you're reaching out between sessions often. Let's create a more structured system for capturing insights and questions that we can address in our scheduled time."</p>

          <h3>Challenge 3: The scope-creeper</h3>
          <p><strong>Situation:</strong> Client consistently brings therapy or consulting issues</p>
          <p><strong>Response:</strong> "I'm noticing a pattern where we're discussing [therapy/consulting issues]. I think you'd benefit from adding [appropriate professional] to your support team. Meanwhile, let's refocus on your coaching goals."</p>

          <h2>Implementation checklist</h2>

          <h3>Initial setup:</h3>
          <ul>
            <li>□ Create comprehensive coaching agreement</li>
            <li>□ Develop referral network contact list</li>
            <li>□ Establish emergency response protocol</li>
            <li>□ Set up documentation system</li>
            <li>□ Practice boundary-setting scripts</li>
          </ul>

          <h3>Ongoing maintenance:</h3>
          <ul>
            <li>□ Review boundaries in each coaching agreement</li>
            <li>□ Document any boundary discussions</li>
            <li>□ Update referral network quarterly</li>
            <li>□ Seek supervision for challenging cases</li>
            <li>□ Conduct annual boundary policy review</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Professional boundaries aren't barriers to effective coaching—they're the foundation that makes powerful coaching possible. Clear boundaries create safety for both coach and client, allowing for deeper trust and more effective work.
          </p>

          <p>
            Remember: maintaining boundaries is an ongoing practice, not a one-time setup. Regular review, consistent application, and continuous learning will help you navigate boundary challenges with confidence and professionalism.
          </p>

          <p>
            When in doubt, always err on the side of client safety and professional integrity. A well-boundaried coach is a more effective coach.
          </p>
        </div>

        {/* Related Articles */}
        <section className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Workflow Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/coaching-intake-questions" className="text-gray-900 hover:text-primary-600">
                  Coaching Intake Process
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Proper intake procedures help establish boundaries from the start.
              </p>
              <Link href="/workflows/coaching-intake-questions" className="text-primary-600 text-sm font-medium">
                View Intake Process →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">
                <Link href="/workflows/first-session-agenda" className="text-gray-900 hover:text-primary-600">
                  First Session Agenda
                </Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                Set clear expectations and boundaries in your very first session.
              </p>
              <Link href="/workflows/first-session-agenda" className="text-primary-600 text-sm font-medium">
                Get First Session Template →
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  )
}