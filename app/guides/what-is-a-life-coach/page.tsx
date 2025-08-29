import Link from 'next/link'
import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata = generateSEO({
  title: 'What is a Life Coach? Complete Guide & Career Path (2025)',
  description: 'Discover what a life coach is, what they do, how to become one, and if life coaching is right for you. Complete guide with certification requirements, salary data, and free resources.',
  keywords: ['what is a life coach', 'life coach definition', 'life coaching career', 'how to become a life coach', 'life coach certification', 'life coach salary', 'life coaching benefits'],
  canonicalUrl: 'https://lifecoachlibrary.com/guides/what-is-a-life-coach',
})

export default function WhatIsALifeCoachPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Guides', href: '/guides' },
            { label: 'What is a Life Coach?' }
          ]} 
        />

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What is a Life Coach? Complete Guide to the Growing Profession
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Life coaching is one of the fastest-growing professions in the wellness industry. Discover what life coaches do, 
            how they help clients achieve their goals, and if this rewarding career path is right for you.
          </p>
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">$4.5B+</div>
              <div className="text-gray-600">Industry Revenue (2025)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">71,000+</div>
              <div className="text-gray-600">Certified Coaches Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">$62K</div>
              <div className="text-gray-600">Average Annual Salary</div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-2">
            <a href="#definition" className="text-primary-600 hover:text-primary-700 py-1">• What is a Life Coach?</a>
            <a href="#what-they-do" className="text-primary-600 hover:text-primary-700 py-1">• What Do Life Coaches Do?</a>
            <a href="#vs-therapist" className="text-primary-600 hover:text-primary-700 py-1">• Life Coach vs. Therapist</a>
            <a href="#types" className="text-primary-600 hover:text-primary-700 py-1">• Types of Life Coaches</a>
            <a href="#benefits" className="text-primary-600 hover:text-primary-700 py-1">• Benefits of Life Coaching</a>
            <a href="#certification" className="text-primary-600 hover:text-primary-700 py-1">• Certification Requirements</a>
            <a href="#salary" className="text-primary-600 hover:text-primary-700 py-1">• Life Coach Salary & Career</a>
            <a href="#how-to-become" className="text-primary-600 hover:text-primary-700 py-1">• How to Become a Life Coach</a>
          </div>
        </nav>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          {/* Definition Section */}
          <section id="definition" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Life Coach?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A <strong>life coach</strong> is a trained professional who helps individuals identify and achieve personal and professional goals. 
              Unlike therapists who focus on healing past trauma, life coaches work with mentally healthy clients to create positive 
              changes and reach their full potential in various areas of life.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Definition</h3>
              <p className="text-gray-700">
                Life coaching is a collaborative partnership between coach and client that uses structured conversations, 
                proven methodologies, and accountability to help clients overcome obstacles, clarify goals, and create 
                sustainable action plans for personal and professional success.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Evolution of Life Coaching</h3>
            <p className="text-gray-700 mb-4">
              Life coaching emerged in the 1980s, drawing from psychology, business consulting, sports coaching, and personal development. 
              The profession gained significant momentum in the 1990s and has experienced explosive growth in the 2020s, particularly 
              with the rise of virtual coaching and increased focus on mental wellness.
            </p>
            
            <p className="text-gray-700 mb-6">
              Today, life coaching is recognized as a legitimate profession with established training standards, 
              certification bodies like the International Coach Federation (ICF), and a growing evidence base supporting its effectiveness.
            </p>
          </section>

          {/* What They Do Section */}
          <section id="what-they-do" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Do Life Coaches Do?</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Life coaches use specialized techniques and frameworks to guide clients through a structured process of self-discovery, 
              goal setting, and action planning. Here's what a typical life coaching relationship involves:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Activities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Goal clarification and priority setting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Identifying limiting beliefs and obstacles</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Creating actionable strategies and plans</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Providing accountability and support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Teaching tools and techniques for self-improvement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Coaching Methods</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>SMART goal setting framework</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Wheel of Life assessments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Values clarification exercises</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Action planning and milestone tracking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Powerful questioning techniques</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What to Expect in a Coaching Session</h3>
              <p className="text-gray-700 mb-4">
                A typical life coaching session lasts 45-60 minutes and follows a structured format:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>Check-in:</strong> Review progress since last session</li>
                <li><strong>Agenda Setting:</strong> Determine the focus for today's session</li>
                <li><strong>Exploration:</strong> Use powerful questions to gain clarity</li>
                <li><strong>Action Planning:</strong> Define specific next steps</li>
                <li><strong>Accountability:</strong> Commit to actions before next session</li>
              </ol>
            </div>
          </section>

          {/* Life Coach vs Therapist */}
          <section id="vs-therapist" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Life Coach vs. Therapist: Key Differences</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              While both life coaches and therapists help people improve their lives, they have distinctly different approaches, 
              training requirements, and areas of focus. Understanding these differences is crucial when deciding which professional to work with.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-4 text-left font-bold">Aspect</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Life Coach</th>
                    <th className="border border-gray-300 p-4 text-left font-bold">Therapist</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Focus</td>
                    <td className="border border-gray-300 p-4">Future goals and potential</td>
                    <td className="border border-gray-300 p-4">Past trauma and mental health</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Education</td>
                    <td className="border border-gray-300 p-4">Certification programs (100-500+ hours)</td>
                    <td className="border border-gray-300 p-4">Master's/Doctoral degree + licensure</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Clients</td>
                    <td className="border border-gray-300 p-4">Mentally healthy individuals</td>
                    <td className="border border-gray-300 p-4">People with mental health conditions</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-semibold">Duration</td>
                    <td className="border border-gray-300 p-4">3-12 months typically</td>
                    <td className="border border-gray-300 p-4">Varies widely (weeks to years)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-semibold">Approach</td>
                    <td className="border border-gray-300 p-4">Action-oriented, goal-focused</td>
                    <td className="border border-gray-300 p-4">Healing-focused, insight-oriented</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">When to Choose a Life Coach</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You're mentally healthy but want to achieve specific goals</li>
                <li>• You're seeking clarity on life direction or career path</li>
                <li>• You want accountability and support for positive changes</li>
                <li>• You're ready to take action but need guidance and structure</li>
                <li>• You want to develop new skills or habits</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">When to Choose a Therapist</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You're dealing with anxiety, depression, or other mental health conditions</li>
                <li>• You have unresolved trauma or past experiences affecting your present</li>
                <li>• You need clinical treatment or diagnosis</li>
                <li>• You're experiencing relationship or family issues requiring therapeutic intervention</li>
                <li>• You need support processing grief, loss, or major life transitions</li>
              </ul>
            </div>
          </section>

          {/* Types of Life Coaches */}
          <section id="types" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Life Coaches: Specializations & Niches</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              While some life coaches work as generalists, many specialize in specific areas to serve particular client needs. 
              Here are the most common types of life coaching specializations:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Career Coaching",
                  description: "Helps professionals navigate career transitions, find their ideal job, negotiate salaries, and develop leadership skills.",
                  icon: "💼"
                },
                {
                  title: "Executive Coaching",
                  description: "Works with senior leaders to enhance leadership effectiveness, decision-making, and organizational performance.",
                  icon: "👔"
                },
                {
                  title: "Business Coaching",
                  description: "Supports entrepreneurs and business owners in growing their companies, improving systems, and achieving business goals.",
                  icon: "🚀"
                },
                {
                  title: "Relationship Coaching",
                  description: "Focuses on improving communication skills, finding love, strengthening marriages, and navigating dating challenges.",
                  icon: "💕"
                },
                {
                  title: "Health & Wellness Coaching",
                  description: "Helps clients achieve fitness goals, develop healthy habits, manage stress, and improve overall well-being.",
                  icon: "🌱"
                },
                {
                  title: "Financial Coaching",
                  description: "Guides clients in managing money, eliminating debt, building wealth, and developing healthy financial habits.",
                  icon: "💰"
                },
                {
                  title: "Parenting Coaching",
                  description: "Supports parents in developing effective parenting strategies, improving family communication, and managing challenges.",
                  icon: "👨‍👩‍👧‍👦"
                },
                {
                  title: "Spiritual Coaching",
                  description: "Helps individuals explore their spiritual path, find purpose and meaning, and connect with their values.",
                  icon: "🙏"
                },
                {
                  title: "Transition Coaching",
                  description: "Supports people through major life changes like divorce, retirement, relocation, or career shifts.",
                  icon: "🔄"
                }
              ].map((type, index) => (
                <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">{type.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choosing Your Coaching Niche</h3>
              <p className="text-gray-700 mb-4">
                If you're considering becoming a life coach, selecting a niche can help you:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Attract your ideal clients more effectively</li>
                <li>• Command higher fees as a specialist</li>
                <li>• Develop deeper expertise in your area</li>
                <li>• Stand out in a competitive market</li>
                <li>• Create more targeted marketing and content</li>
              </ul>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Working with a Life Coach</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Research shows that life coaching can produce significant positive outcomes for clients. Here are the key benefits 
              people experience when working with a qualified life coach:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Increased self-awareness and emotional intelligence",
                    "Greater clarity on personal values and priorities",
                    "Improved confidence and self-esteem",
                    "Better work-life balance and stress management",
                    "Enhanced decision-making skills",
                    "Stronger accountability and follow-through",
                    "More effective goal-setting and achievement"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "Accelerated career advancement and promotions",
                    "Improved leadership and communication skills",
                    "Better team management and delegation",
                    "Enhanced productivity and time management",
                    "Increased job satisfaction and engagement",
                    "More effective networking and relationship building",
                    "Greater resilience and adaptability to change"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research-Backed Results</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">86%</div>
                  <div className="text-gray-700">of clients recoup their investment in coaching</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
                  <div className="text-gray-700">would repeat their coaching experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                  <div className="text-gray-700">improved work performance</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                <em>Source: International Coach Federation (ICF) Global Coaching Study 2024</em>
              </p>
            </div>
          </section>

          {/* Certification Section */}
          <section id="certification" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Life Coach Certification Requirements</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              While life coaching is not a regulated profession in most countries, obtaining proper certification 
              is essential for credibility, effectiveness, and professional success.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Important Note</h3>
              <p className="text-gray-700">
                Life coaching is largely unregulated, meaning anyone can call themselves a "life coach." However, 
                working with certified coaches who have completed accredited training programs ensures quality and professionalism.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">International Coach Federation (ICF) Credentials</h3>
            <p className="text-gray-700 mb-6">
              The ICF is the leading global organization for professional coaches. They offer three levels of certification:
            </p>

            <div className="space-y-6 mb-8">
              <div className="border rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <h4 className="text-xl font-bold text-gray-900">Associate Certified Coach (ACC)</h4>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700 mb-3">Entry-level certification for new coaches</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 60+ hours of coach-specific training</li>
                    <li>• 100+ hours of coaching experience</li>
                    <li>• 10+ hours of mentor coaching</li>
                    <li>• Pass the Coach Knowledge Assessment (CKA)</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <h4 className="text-xl font-bold text-gray-900">Professional Certified Coach (PCC)</h4>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700 mb-3">Intermediate-level certification for experienced coaches</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 125+ hours of coach-specific training</li>
                    <li>• 500+ hours of coaching experience</li>
                    <li>• 10+ hours of mentor coaching</li>
                    <li>• Pass the CKA and submit coaching recordings</li>
                  </ul>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <h4 className="text-xl font-bold text-gray-900">Master Certified Coach (MCC)</h4>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700 mb-3">Advanced certification for master-level coaches</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 200+ hours of coach-specific training</li>
                    <li>• 2,500+ hours of coaching experience</li>
                    <li>• 10+ hours of mentor coaching</li>
                    <li>• Pass advanced assessments and portfolio review</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Certification Options</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Center for Credentialing & Education (CCE)</h4>
                <p className="text-gray-700 mb-3">Offers the Board Certified Coach (BCC) credential</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Graduate degree + coaching training, or</li>
                  <li>• Bachelor's degree + extensive coaching training</li>
                  <li>• Pass written examination</li>
                  <li>• Meet experience requirements</li>
                </ul>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Institute for Professional Excellence in Coaching (iPEC)</h4>
                <p className="text-gray-700 mb-3">Comprehensive certification program</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Core Energy Coaching methodology</li>
                  <li>• 6-month training program</li>
                  <li>• Live practice sessions</li>
                  <li>• Business development training</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Salary Section */}
          <section id="salary" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Life Coach Salary & Career Outlook</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Life coaching offers excellent earning potential, especially as you build experience and develop a specialty. 
              Here's what you can expect in terms of compensation and career growth:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Average Salaries (2025)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Entry Level (0-2 years):</span>
                    <span className="font-bold">$35,000 - $50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Experienced (3-7 years):</span>
                    <span className="font-bold">$50,000 - $85,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Senior (8+ years):</span>
                    <span className="font-bold">$85,000 - $150,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Top Specialists:</span>
                    <span className="font-bold">$150,000 - $500,000+</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hourly Rates</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">New Coaches:</span>
                    <span className="font-bold">$50 - $100/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Experienced Coaches:</span>
                    <span className="font-bold">$100 - $250/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Executive Coaches:</span>
                    <span className="font-bold">$250 - $500/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Celebrity Coaches:</span>
                    <span className="font-bold">$500 - $2,000+/hour</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Outlook & Growth</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white border rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">15%</div>
                <div className="text-gray-700">Expected job growth (2024-2034)</div>
                <div className="text-sm text-gray-500 mt-2">Much faster than average</div>
              </div>
              <div className="text-center p-6 bg-white border rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">$7T</div>
                <div className="text-gray-700">Global wellness economy by 2025</div>
                <div className="text-sm text-gray-500 mt-2">Includes coaching services</div>
              </div>
              <div className="text-center p-6 bg-white border rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">71K+</div>
                <div className="text-gray-700">ICF certified coaches worldwide</div>
                <div className="text-sm text-gray-500 mt-2">Growing 10%+ annually</div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Factors Affecting Income</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Specialization:</strong> Niche coaches earn more</li>
                  <li>• <strong>Experience:</strong> Years in practice matter</li>
                  <li>• <strong>Certification:</strong> ICF credentials increase rates</li>
                  <li>• <strong>Location:</strong> Urban areas pay more</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Client Type:</strong> Corporate clients pay premium</li>
                  <li>• <strong>Service Model:</strong> Group vs. individual coaching</li>
                  <li>• <strong>Marketing:</strong> Strong brand commands higher fees</li>
                  <li>• <strong>Results:</strong> Proven track record increases demand</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Become Section */}
          <section id="how-to-become" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Become a Life Coach: Step-by-Step Guide</h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Becoming a successful life coach requires proper training, practice, and business development skills. 
              Here's your complete roadmap to launching a thriving coaching practice:
            </p>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Assess Your Readiness",
                  content: [
                    "Evaluate your natural coaching abilities and people skills",
                    "Ensure you have life experience and emotional maturity",
                    "Confirm your motivation for becoming a coach",
                    "Assess your financial readiness for training and business startup"
                  ]
                },
                {
                  step: 2,
                  title: "Choose Your Training Program",
                  content: [
                    "Research ICF-accredited coaching schools",
                    "Compare curriculum, cost, and format (online vs. in-person)",
                    "Look for programs that include mentor coaching",
                    "Consider specialization options that interest you"
                  ]
                },
                {
                  step: 3,
                  title: "Complete Your Education",
                  content: [
                    "Attend all required training hours (minimum 60 for ACC)",
                    "Practice coaching skills with fellow students",
                    "Complete mentor coaching requirements",
                    "Study for and pass the Coach Knowledge Assessment"
                  ]
                },
                {
                  step: 4,
                  title: "Gain Practical Experience",
                  content: [
                    "Start with pro bono clients to build experience",
                    "Record coaching sessions for ICF credential submission",
                    "Seek feedback from mentors and clients",
                    "Document your coaching hours meticulously"
                  ]
                },
                {
                  step: 5,
                  title: "Obtain Your Certification",
                  content: [
                    "Apply for ICF ACC credential once eligible",
                    "Submit required coaching recordings and documentation",
                    "Complete any additional requirements",
                    "Maintain certification through continuing education"
                  ]
                },
                {
                  step: 6,
                  title: "Build Your Business",
                  content: [
                    "Define your target market and ideal client",
                    "Develop your brand and marketing materials",
                    "Create a professional website and online presence",
                    "Establish pricing and service packages"
                  ]
                },
                {
                  step: 7,
                  title: "Launch and Scale",
                  content: [
                    "Start marketing and networking to attract clients",
                    "Deliver exceptional coaching experiences",
                    "Collect testimonials and referrals",
                    "Continuously improve your skills and expand your services"
                  ]
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {item.step}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.content.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-lg mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Life Coaching Journey?</h3>
              <p className="text-primary-100 mb-6">
                Get access to our complete business startup guide, templates, and resources to launch your coaching practice successfully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/guides/start-life-coaching-business"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Get the Complete Startup Guide
                </Link>
                <Link
                  href="/templates"
                  className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold border border-primary-400 hover:bg-primary-400 transition-colors text-center"
                >
                  Access Free Templates
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Do I need a degree to become a life coach?",
                  answer: "No formal degree is required to become a life coach. However, most successful coaches complete accredited training programs and obtain certifications from organizations like the ICF. Having a background in psychology, business, or related fields can be helpful but isn't mandatory."
                },
                {
                  question: "How long does it take to become a certified life coach?",
                  answer: "The time varies depending on the program and certification level. Most entry-level certifications (like ICF ACC) require 60+ hours of training, which can be completed in 3-6 months. Building the required coaching experience typically takes an additional 6-12 months."
                },
                {
                  question: "Can life coaches give advice?",
                  answer: "Life coaches generally don't give direct advice. Instead, they use powerful questioning techniques to help clients discover their own solutions. This approach empowers clients to develop critical thinking skills and take ownership of their decisions."
                },
                {
                  question: "Is life coaching worth the investment?",
                  answer: "Research shows that 86% of coaching clients recoup their investment, and 96% would repeat the experience. The ROI comes from achieving goals faster, making better decisions, improving performance, and developing skills that provide long-term benefits."
                },
                {
                  question: "What's the difference between life coaching and consulting?",
                  answer: "Consultants typically provide expert advice and solutions in specific areas. Life coaches focus on helping clients discover their own answers through questioning and exploration. Coaches work on the person; consultants work on the problem."
                },
                {
                  question: "Can I do life coaching part-time?",
                  answer: "Yes, many coaches start part-time while maintaining other employment. This allows you to build experience, develop your practice, and create a client base before transitioning to full-time coaching."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/guides/start-life-coaching-business" className="block bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How to Start a Life Coaching Business</h3>
                <p className="text-gray-600 mb-4">Complete guide to launching your coaching practice with business plans, legal requirements, and marketing strategies.</p>
                <span className="text-primary-600 font-medium">Read Guide →</span>
              </Link>

              <Link href="/methods/coaching-exercises" className="block bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Coaching Exercises</h3>
                <p className="text-gray-600 mb-4">Proven exercises and tools that professional coaches use with their clients to create breakthrough results.</p>
                <span className="text-primary-600 font-medium">Explore Exercises →</span>
              </Link>

              <Link href="/templates" className="block bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Free Coaching Templates</h3>
                <p className="text-gray-600 mb-4">Download professional intake forms, session plans, and client tracking templates to streamline your practice.</p>
                <span className="text-primary-600 font-medium">Get Templates →</span>
              </Link>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}