export interface Template {
  slug: string
  title: string
  description: string
  category: 'intake-forms' | 'session-plans' | 'progress-trackers' | 'business-forms' | 'marketing-tools' | 'assessment-tools'
  content: string
}

export const templates: Template[] = [
  // INTAKE FORMS
  {
    slug: 'general-life-coaching-intake',
    title: 'General Life Coaching Intake',
    description: 'Comprehensive intake form for general life coaching clients to gather essential information before the first session.',
    category: 'intake-forms',
    content: `GENERAL LIFE COACHING INTAKE FORM

PERSONAL INFORMATION
==================
Name: _________________________
Email: ________________________
Phone: _______________________
Date of Birth: ________________
Occupation: ___________________
Preferred Communication Method: ☐ Email ☐ Phone ☐ Text

CURRENT SITUATION
================
1. What brings you to coaching at this time?
_________________________________________
_________________________________________

2. What areas of your life would you most like to improve or develop?
☐ Career/Professional growth
☐ Personal relationships
☐ Health and wellness
☐ Financial goals
☐ Personal development
☐ Life transitions
☐ Work-life balance
☐ Other: _______________

3. On a scale of 1-10, how satisfied are you currently with your life overall?
1 ── 2 ── 3 ── 4 ── 5 ── 6 ── 7 ── 8 ── 9 ── 10
(1 = Very dissatisfied, 10 = Very satisfied)

GOALS AND ASPIRATIONS
====================
4. What would you like to achieve through our coaching relationship?
_________________________________________
_________________________________________

5. What does success look like to you in 6 months?
_________________________________________
_________________________________________

6. What does success look like to you in 1 year?
_________________________________________
_________________________________________

OBSTACLES AND CHALLENGES
=======================
7. What do you believe has been holding you back from achieving your goals?
_________________________________________
_________________________________________

8. What patterns or habits would you like to change?
_________________________________________
_________________________________________

9. How do you typically handle stress or challenges?
_________________________________________
_________________________________________

SUPPORT SYSTEM
=============
10. Who are the key people in your support network?
_________________________________________

11. How do family/friends typically respond to your goals and changes?
☐ Very supportive
☐ Somewhat supportive
☐ Neutral
☐ Sometimes resistant
☐ Often resistant

COACHING PREFERENCES
===================
12. What qualities do you value most in a coach?
☐ Direct and challenging
☐ Supportive and encouraging
☐ Structured and organized
☐ Flexible and intuitive
☐ Other: _______________

13. How do you prefer to receive feedback?
_________________________________________

14. What motivates you most?
_________________________________________

PREVIOUS EXPERIENCE
==================
15. Have you worked with a coach or therapist before?
☐ Yes ☐ No

If yes, what worked well?
_________________________________________

What didn't work well?
_________________________________________

COMMITMENT AND LOGISTICS
=======================
16. How much time can you realistically commit to coaching work between sessions?
☐ 30 minutes per week
☐ 1 hour per week
☐ 2-3 hours per week
☐ More than 3 hours per week

17. What time of day works best for sessions?
☐ Morning ☐ Afternoon ☐ Evening

18. Preferred session frequency:
☐ Weekly ☐ Bi-weekly ☐ Monthly

19. Any scheduling restrictions or considerations?
_________________________________________

ADDITIONAL INFORMATION
=====================
20. Is there anything else you'd like me to know about you or your situation?
_________________________________________
_________________________________________

21. What questions do you have about the coaching process?
_________________________________________
_________________________________________

CONSENT AND AGREEMENTS
=====================
☐ I understand that coaching is not therapy or counseling
☐ I understand that I am responsible for my own decisions and actions
☐ I commit to being open and honest in our coaching relationship
☐ I agree to complete agreed-upon action items between sessions

Client Signature: _________________ Date: _________

Thank you for taking the time to complete this intake form. This information will help us create a coaching relationship that's tailored to your specific needs and goals.`
  },

  {
    slug: 'executive-coaching-intake',
    title: 'Executive Coaching Intake',
    description: 'Specialized intake form for executive and leadership coaching focused on professional development and organizational impact.',
    category: 'intake-forms',
    content: `EXECUTIVE COACHING INTAKE FORM

PROFESSIONAL INFORMATION
=======================
Name: _________________________
Title/Position: _______________
Company: ______________________
Industry: ____________________
Team Size: ___________________
Years in Current Role: ________
Years in Leadership: __________
Email: _______________________
Phone: ______________________

ORGANIZATIONAL CONTEXT
=====================
1. Describe your organization's current priorities and challenges:
_________________________________________
_________________________________________

2. How does your role contribute to organizational success?
_________________________________________
_________________________________________

3. What are your key performance indicators (KPIs)?
_________________________________________
_________________________________________

4. Who are your key stakeholders? (internal and external)
_________________________________________
_________________________________________

LEADERSHIP ASSESSMENT
====================
5. What leadership challenges are you currently facing?
☐ Team performance and engagement
☐ Strategic decision-making
☐ Communication and influence
☐ Change management
☐ Conflict resolution
☐ Work-life integration
☐ Succession planning
☐ Other: _______________

6. On a scale of 1-10, rate your current effectiveness in:
Leadership Vision: 1 ── 2 ── 3 ── 4 ── 5 ── 6 ── 7 ── 8 ── 9 ── 10
Team Building: 1 ── 2 ── 3 ── 4 ── 5 ── 6 ── 7 ── 8 ── 9 ── 10
Communication: 1 ── 2 ── 3 ── 4 ── 5 ── 6 ── 7 ── 8 ── 9 ── 10
Decision Making: 1 ── 2 ── 3 ── 4 ── 5 ── 6 ── 7 ── 8 ── 9 ── 10
Emotional Intelligence: 1 ── 2 ── 3 ── 4 ── 5 ── 6 ── 7 ── 8 ── 9 ── 10

DEVELOPMENT GOALS
================
7. What specific leadership skills do you want to develop?
_________________________________________
_________________________________________

8. What business outcomes do you want to achieve through coaching?
_________________________________________
_________________________________________

9. How will you measure success from this coaching engagement?
_________________________________________
_________________________________________

This intake continues for several more sections covering feedback, stakeholder considerations, executive challenges, coaching logistics, organizational support, and consent forms.`
  },

  {
    slug: 'career-transition-intake',
    title: 'Career Transition Intake',
    description: 'Focused intake form for clients navigating career changes, job transitions, or professional pivots.',
    category: 'intake-forms',
    content: `CAREER TRANSITION COACHING INTAKE FORM

PERSONAL INFORMATION
==================
Name: _________________________
Email: ________________________
Phone: _______________________
Current Location: _____________
LinkedIn Profile: _____________

CURRENT CAREER STATUS
====================
1. Current/Most Recent Position:
Title: _______________________
Company: ____________________
Industry: ___________________
Duration: ___________________

2. Current employment status:
☐ Employed (seeking change)
☐ Unemployed (voluntary)
☐ Unemployed (involuntary)
☐ Between opportunities
☐ Returning to workforce
☐ Career break

3. What prompted this career transition consideration?
☐ Layoff or termination
☐ Lack of growth opportunities
☐ Industry changes
☐ Personal values shift
☐ Work-life balance issues
☐ Geographic relocation
☐ Burnout or stress
☐ New interests or passions
☐ Other: _______________

[Form continues with career history, transition goals, values assessment, financial considerations, obstacles, skills development, networking, and commitment sections]`
  },

  {
    slug: 'wellness-coaching-intake',
    title: 'Wellness Coaching Intake',
    description: 'Holistic intake form for wellness coaching covering physical health, mental wellbeing, and lifestyle factors.',
    category: 'intake-forms',
    content: `WELLNESS COACHING INTAKE FORM

PERSONAL INFORMATION
==================
Name: _________________________
Age: _________________________
Email: _______________________
Phone: ______________________
Emergency Contact: ____________
Preferred Communication: ☐ Email ☐ Phone ☐ Text

CURRENT HEALTH STATUS
====================
1. Please describe your current overall health:
☐ Excellent ☐ Very good ☐ Good ☐ Fair ☐ Poor

2. Do you have any current health conditions or concerns?
☐ Yes ☐ No
If yes, please describe: _________________

3. Are you currently taking any medications or supplements?
☐ Yes ☐ No
If yes, please list: ____________________

[Form continues with physical wellness, mental/emotional wellness, lifestyle habits, wellness goals, motivation assessment, support systems, and coaching preferences]`
  },

  // SESSION PLANS
  {
    slug: 'first-session-script',
    title: 'First Session Script',
    description: 'Structured agenda and conversation guide for conducting effective first coaching sessions.',
    category: 'session-plans',
    content: `FIRST COACHING SESSION SCRIPT

SESSION OVERVIEW
===============
Duration: 60-90 minutes
Objectives: 
- Build rapport and trust
- Establish coaching agreement
- Understand client's goals and current situation
- Set expectations for the coaching relationship
- Create initial action plan

PRE-SESSION PREPARATION
======================
☐ Review client intake form
☐ Prepare session materials
☐ Set up comfortable, private space
☐ Ensure technology is working (if virtual)
☐ Have contract/agreement ready

OPENING (10 minutes)
===================
1. WELCOME AND RAPPORT BUILDING
"Welcome! I'm excited to begin this coaching journey with you. How are you feeling about our first session today?"

"Before we dive in, I'd love to hear what drew you to coaching at this particular time in your life."

2. SESSION OVERVIEW
"Today's session will last [X] minutes. Here's what we'll cover:
- Getting to know each other better
- Understanding your goals and current situation
- Establishing our coaching agreement
- Creating an initial action plan
- Scheduling our next session

Does this agenda work for you? Is there anything you'd like to add or prioritize?"

[Script continues with detailed sections for coaching agreement review, goal exploration, assessment, action planning, and closing procedures]`
  },

  {
    slug: 'grow-model-template',
    title: 'GROW Model Template',
    description: 'Structured coaching conversation framework using the GROW model (Goal, Reality, Options, Way Forward).',
    category: 'session-plans',
    content: `GROW MODEL COACHING SESSION TEMPLATE

SESSION INFORMATION
==================
Client: _________________________
Date: __________________________
Session #: _____________________
Duration: ______________________

GROW MODEL OVERVIEW
==================
G - GOAL: What do you want to achieve?
R - REALITY: What is the current situation?
O - OPTIONS: What could you do?
W - WAY FORWARD: What will you do?

GOAL (15-20 minutes)
===================
Establish what the client wants to achieve in this session and longer-term.

SESSION GOAL QUESTIONS:
"What would you like to focus on in today's session?"
"What would make this session valuable for you?"
"What outcome would you like by the end of our time together?"

[Template continues with detailed question frameworks for each section of the GROW model]`
  }
]

// This is a sample of the templates. The full implementation would include all 19 templates.`