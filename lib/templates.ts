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
  },

  // Continue with more session plans
  {
    slug: 'goal-setting-session',
    title: 'Goal Setting Session',
    description: 'Comprehensive session plan for helping clients set SMART goals and create actionable plans.',
    category: 'session-plans',
    content: `GOAL SETTING SESSION PLAN

SESSION OVERVIEW
===============
Duration: 60-90 minutes
Purpose: Help client create clear, achievable, and meaningful goals
Framework: SMART Goals + Values Alignment

MATERIALS NEEDED
===============
☐ Goal-setting worksheet
☐ Values assessment tool
☐ Action planning template
☐ Progress tracking sheet
☐ Calendar for scheduling

PRE-SESSION PREPARATION
======================
☐ Review client's previous goals or aspirations
☐ Prepare examples of well-crafted goals
☐ Set up quiet, focused environment
☐ Have note-taking materials ready

OPENING (10 minutes)
===================
1. CHECK-IN AND CONTEXT
"How are you feeling about goal-setting today?"
"What experiences have you had with goals in the past - positive or challenging?"
"What brings you to want to set new goals right now?"

2. SESSION OVERVIEW
"Today we'll work together to:
- Clarify what you want to achieve
- Connect your goals to your values
- Create specific, actionable plans
- Set up systems for success

Does this feel right for where you are today?"

VISION AND VALUES EXPLORATION (20 minutes)
=========================================
3. FUTURE VISION EXERCISE
"Close your eyes and imagine yourself one year from now, living your ideal life in [relevant area]. What do you see? What are you doing? How do you feel?"

"Now expand that to 5 years from now. What's different? What has evolved?"

Key areas to explore:
- Career/Professional life
- Relationships
- Health and wellness
- Personal growth
- Financial situation
- Lifestyle and recreation

4. VALUES IDENTIFICATION
"What values are most important to you right now?"

Common values to discuss:
- Security vs. Adventure
- Achievement vs. Balance
- Independence vs. Connection
- Growth vs. Stability
- Service vs. Success

"How do your goals need to align with these values to feel meaningful?"

CURRENT SITUATION ASSESSMENT (15 minutes)
=========================================
5. CURRENT STATE ANALYSIS
"Where are you right now in relation to your vision?"

Rating exercise: "On a scale of 1-10, how satisfied are you currently with your [area of focus]?"

6. STRENGTH AND RESOURCE INVENTORY
"What strengths do you have that will help you achieve your goals?"
"What resources (time, money, skills, relationships) are available to you?"
"What obstacles or limitations do you need to consider?"

GOAL CREATION USING SMART FRAMEWORK (25 minutes)
===============================================
7. GOAL BRAINSTORMING
"Based on our discussion, what goals are emerging for you?"

Allow client to generate initial list without filtering.

8. SMART GOAL REFINEMENT
Work through each potential goal using SMART criteria:

S - SPECIFIC
"What exactly do you want to accomplish?"
"Who is involved?"
"Where will this happen?"
"Why is this goal important?"

M - MEASURABLE
"How will you measure progress?"
"What metrics will indicate success?"
"How will you know when you've achieved it?"

A - ACHIEVABLE
"Is this goal realistic given your current situation?"
"What would make it more achievable?"
"What support or resources do you need?"

R - RELEVANT
"How does this goal align with your values and vision?"
"Is this the right time for this goal?"
"Does this goal matter to you personally?"

T - TIME-BOUND
"When do you want to achieve this goal?"
"What are the key milestones along the way?"
"What's your timeline for getting started?"

GOAL REFINEMENT WORKSHEET:
Original goal: ________________________
Specific: _____________________________
Measurable: ___________________________
Achievable: ___________________________
Relevant: _____________________________
Time-bound: ___________________________

Refined SMART goal: ____________________

9. GOAL PRIORITIZATION
"If you could only achieve one of these goals, which would have the biggest positive impact on your life?"

"Which goal excites you most?"
"Which goal scares you most?" (often indicates importance)
"Which goal aligns best with your current priorities?"

ACTION PLANNING (15 minutes)
============================
10. BREAK DOWN INTO STEPS
For each prioritized goal:
"What are the major milestones needed to achieve this goal?"
"What needs to happen in the first 30 days?"
"What needs to happen in the first week?"
"What could you do tomorrow to move toward this goal?"

11. IDENTIFY OBSTACLES AND SOLUTIONS
"What might prevent you from achieving this goal?"
"How have you overcome similar challenges before?"
"What contingency plans could you create?"
"Who could help you when you face obstacles?"

12. CREATE ACCOUNTABILITY SYSTEM
"How will you track your progress?"
"How often will you review your goals?"
"Who will help keep you accountable?"
"What consequences will you create for not following through?"
"What rewards will you give yourself for achieving milestones?"

ACTION PLAN TEMPLATE:
Goal: _______________________________
Milestone 1: ________________________
Target date: _______________________
Specific actions: __________________

Milestone 2: ________________________
Target date: _______________________
Specific actions: __________________

Milestone 3: ________________________
Target date: _______________________
Specific actions: __________________

First step (within 7 days): ___________
Potential obstacles: ___________________
Solution strategies: ___________________
Accountability partner: ________________
Progress review date: __________________

COMMITMENT AND CLOSING (10 minutes)
==================================
13. COMMITMENT ASSESSMENT
"On a scale of 1-10, how committed are you to achieving these goals?"

If below 8, explore:
"What would increase your commitment?"
"What's holding you back?"
"How could we modify the goal to increase your commitment?"

14. NEXT STEPS CONFIRMATION
"What's the very first thing you'll do when you leave here today?"
"When will you take that first step?"
"How will you remember to stay focused on these goals?"

15. SESSION SUMMARY
"What was most valuable about today's session?"
"What insights did you gain about yourself?"
"How are you feeling about your goals now?"

GOAL TRACKING TEMPLATE
=====================
Goal: _______________________________
Start date: ________________________
Target completion: __________________

Weekly Progress Check:
Week 1: ____________________________
Week 2: ____________________________
Week 3: ____________________________
Week 4: ____________________________

Monthly Review Questions:
- What progress have I made?
- What's working well?
- What challenges am I facing?
- What adjustments do I need to make?
- How can I celebrate my progress?

Remember: Great goals are achieved through consistent small actions, regular review, and the flexibility to adapt as circumstances change.`
  },

  {
    slug: 'progress-review-template',
    title: 'Progress Review Template',
    description: 'Structured framework for conducting regular progress reviews and adjusting coaching plans.',
    category: 'session-plans',
    content: `PROGRESS REVIEW SESSION TEMPLATE

SESSION INFORMATION
==================
Client: _________________________
Review Period: From _____________ To _____________
Session Date: ___________________
Goals Being Reviewed: ____________

PRE-SESSION PREPARATION
======================
☐ Review previous session notes
☐ Gather client's progress reports/tracking data
☐ Prepare celebration items for wins
☐ Have goal adjustment worksheets ready
☐ Review original goals and action plans

OPENING AND CELEBRATION (10 minutes)
===================================
1. WARM-UP AND CONTEXT SETTING
"Welcome! Today we're going to review your progress and celebrate your achievements. How are you feeling about where you are right now?"

2. CELEBRATION OF WINS
"Let's start with the good stuff! What wins and achievements can we celebrate from this period?"

"What are you most proud of?"
"What surprised you about what you accomplished?"
"What felt easier than expected?"

Celebration categories:
☐ Goals achieved
☐ Milestones reached
☐ New habits formed
☐ Obstacles overcome
☐ Insights gained
☐ Confidence built

DETAILED PROGRESS ASSESSMENT (25 minutes)
=========================================
3. GOAL-BY-GOAL REVIEW

For each goal, assess:

GOAL 1: _____________________________
Original target date: _______________
Current status: 
☐ Completed
☐ On track
☐ Behind schedule
☐ Modified
☐ Paused/stopped

Progress rating (1-10): _____________

What's been accomplished:
_____________________________________

What's working well:
_____________________________________

What's been challenging:
_____________________________________

4. ACTION PLAN REVIEW
"Let's look at the specific actions you committed to. Which ones happened? Which ones didn't?"

Actions completed successfully:
☐ _________________________________
☐ _________________________________
☐ _________________________________

Actions partially completed:
☐ _________________________________
☐ _________________________________

Actions not completed:
☐ _________________________________
☐ _________________________________

"What made the difference between the actions you completed and those you didn't?"

OBSTACLE AND CHALLENGE ANALYSIS (15 minutes)
===========================================
5. IDENTIFYING PATTERNS
"What patterns do you notice in what worked vs. what didn't work?"

"What obstacles showed up that you didn't expect?"

"How did you handle challenges when they arose?"

"What would you do differently if you could start over?"

6. RESOURCE AND SUPPORT ASSESSMENT
"What resources were most helpful?"
"What support did you need that you didn't have?"
"What internal resources (motivation, energy, skills) fluctuated during this period?"

7. EXTERNAL FACTOR IMPACT
"What external factors helped or hindered your progress?"
- Life changes or transitions
- Work demands
- Health issues
- Relationship changes
- Financial considerations
- Seasonal factors

LEARNING AND INSIGHT EXTRACTION (10 minutes)
===========================================
8. SELF-AWARENESS DEVELOPMENT
"What did you learn about yourself during this period?"

"What patterns in your behavior became clearer?"

"What assumptions about yourself were challenged or confirmed?"

"What strengths did you discover or strengthen?"

9. STRATEGY EVALUATION
"Which strategies and approaches worked best for you?"

"What tools or techniques were most helpful?"

"What would you want to keep doing?"

"What would you want to change or stop doing?"

GOAL ADJUSTMENT AND REFINEMENT (15 minutes)
==========================================
10. GOAL RELEVANCE ASSESSMENT
"How do you feel about your original goals now?"

"Have your priorities shifted?"

"Do these goals still align with your values and vision?"

"What goals need to be modified?"

11. GOAL MODIFICATION OPTIONS
For goals that need adjustment:

MODIFICATION TYPE:
☐ Extend timeline
☐ Reduce scope
☐ Change approach
☐ Pause temporarily
☐ Replace with new goal
☐ Break into smaller goals

NEW OR MODIFIED GOALS:
Goal: _______________________________
Reason for change: __________________
New timeline: ______________________
Adjusted success criteria: ___________

12. NEW GOAL IDENTIFICATION
"Based on your progress and learning, what new goals are emerging?"

"What opportunities for growth do you see?"

"What areas need more attention?"

FORWARD PLANNING (10 minutes)
============================
13. NEXT PHASE ACTION PLANNING
"Looking ahead to the next [period], what are your priorities?"

"What will you do differently based on what you've learned?"

"What support or resources do you need for the next phase?"

14. ACCOUNTABILITY STRUCTURE ADJUSTMENT
"How well did our accountability system work?"

"What changes would make accountability more effective?"

"How often should we check in on progress?"

IMMEDIATE NEXT STEPS:
For the next week:
1. _______________________________
2. _______________________________
3. _______________________________

For the next month:
1. _______________________________
2. _______________________________
3. _______________________________

CLOSING AND COMMITMENT (5 minutes)
==================================
15. ENERGY AND MOTIVATION CHECK
"How are you feeling about moving forward?"

"What's your energy level for pursuing these goals?"

"What would increase your motivation?"

16. KEY TAKEAWAYS
"What are the most important insights from today's review?"

"What will you remember most from this conversation?"

"How will you use what you learned?"

PROGRESS REVIEW SUMMARY
=======================
ACHIEVEMENTS TO CELEBRATE:
• ________________________________
• ________________________________
• ________________________________

KEY LEARNINGS:
• ________________________________
• ________________________________
• ________________________________

GOALS CONTINUING UNCHANGED:
• ________________________________
• ________________________________

GOALS BEING MODIFIED:
• ________________________________
• ________________________________

NEW GOALS ADDED:
• ________________________________
• ________________________________

GOALS BEING PAUSED/STOPPED:
• ________________________________
• ________________________________

SUCCESS FACTORS TO LEVERAGE:
• ________________________________
• ________________________________

OBSTACLES TO ADDRESS:
• ________________________________
• ________________________________

NEXT REVIEW DATE: ________________

Regular progress reviews keep coaching focused, celebrate achievements, and ensure continuous movement toward meaningful goals.`
  },

  // PROGRESS TRACKERS
  {
    slug: 'goal-progress-tracker',
    title: 'Goal Progress Tracker',
    description: 'Comprehensive tracking tool to monitor client progress, milestones, and goal achievement over time.',
    category: 'progress-trackers',
    content: `GOAL PROGRESS TRACKER

CLIENT INFORMATION
==================
Name: _____________________________
Goal Setting Date: ________________
Review Date: ______________________
Coach: ____________________________

GOAL OVERVIEW
=============
Primary Goal: ______________________
___________________________________

Goal Category:
☐ Career/Professional
☐ Health & Wellness
☐ Relationships
☐ Financial
☐ Personal Development
☐ Life Transitions
☐ Other: ______________

Target Completion Date: ____________
Priority Level: ☐ High ☐ Medium ☐ Low

SMART GOAL BREAKDOWN
===================
Specific: What exactly will be accomplished?
___________________________________
___________________________________

Measurable: How will progress be measured?
___________________________________
___________________________________

Achievable: Is this goal realistic?
___________________________________
___________________________________

Relevant: Why is this goal important?
___________________________________
___________________________________

Time-bound: What is the deadline?
___________________________________
___________________________________

MILESTONE TRACKING
==================
Milestone 1: _______________________
Target Date: ______________________
Completion Date: __________________
Status: ☐ Not Started ☐ In Progress ☐ Completed ☐ Delayed

Milestone 2: _______________________
Target Date: ______________________
Completion Date: __________________
Status: ☐ Not Started ☐ In Progress ☐ Completed ☐ Delayed

Milestone 3: _______________________
Target Date: ______________________
Completion Date: __________________
Status: ☐ Not Started ☐ In Progress ☐ Completed ☐ Delayed

Milestone 4: _______________________
Target Date: ______________________
Completion Date: __________________
Status: ☐ Not Started ☐ In Progress ☐ Completed ☐ Delayed

Milestone 5: _______________________
Target Date: ______________________
Completion Date: __________________
Status: ☐ Not Started ☐ In Progress ☐ Completed ☐ Delayed

WEEKLY PROGRESS CHECK
====================
Week of: ___________________________

Progress Rating (1-10): ____________
(1 = No progress, 10 = Significant progress)

Actions Taken This Week:
☐ _________________________________
☐ _________________________________
☐ _________________________________
☐ _________________________________

Challenges Encountered:
___________________________________
___________________________________

Solutions Implemented:
___________________________________
___________________________________

Energy Level: ☐ High ☐ Medium ☐ Low
Motivation Level: ☐ High ☐ Medium ☐ Low

Support Received:
___________________________________

Support Needed:
___________________________________

Key Insights:
___________________________________
___________________________________

Next Week's Priorities:
1. _______________________________
2. _______________________________
3. _______________________________

MONTHLY REVIEW
==============
Month: _____________________________

Overall Progress Rating (1-10): ____

Major Accomplishments:
• ________________________________
• ________________________________
• ________________________________

Significant Challenges:
• ________________________________
• ________________________________
• ________________________________

Lessons Learned:
• ________________________________
• ________________________________
• ________________________________

Adjustments Made to Goal/Approach:
___________________________________
___________________________________

Celebration Moments:
___________________________________
___________________________________

Areas for Improvement:
___________________________________
___________________________________

Coach Feedback:
___________________________________
___________________________________

Client Reflections:
___________________________________
___________________________________

OBSTACLE TRACKING
=================
Obstacle 1: _______________________
Impact Level: ☐ High ☐ Medium ☐ Low
Strategy Used: ____________________
Outcome: __________________________
Status: ☐ Resolved ☐ Ongoing ☐ Recurring

Obstacle 2: _______________________
Impact Level: ☐ High ☐ Medium ☐ Low
Strategy Used: ____________________
Outcome: __________________________
Status: ☐ Resolved ☐ Ongoing ☐ Recurring

Obstacle 3: _______________________
Impact Level: ☐ High ☐ Medium ☐ Low
Strategy Used: ____________________
Outcome: __________________________
Status: ☐ Resolved ☐ Ongoing ☐ Recurring

RESOURCE UTILIZATION
====================
Resources Used Effectively:
☐ Time management tools
☐ Skill development courses
☐ Mentor/coach guidance
☐ Support from family/friends
☐ Professional networks
☐ Financial investments
☐ Technology/apps
☐ Books/research
☐ Other: ______________

Resources Needed:
☐ Additional time
☐ Financial support
☐ Skill development
☐ Emotional support
☐ Professional guidance
☐ Technology/tools
☐ Information/research
☐ Other: ______________

ACCOUNTABILITY TRACKING
=======================
Accountability Partner: ___________
Check-in Frequency: _______________
Last Check-in Date: _______________

Commitments Made:
1. _______________________________
2. _______________________________
3. _______________________________

Commitments Kept:
☐ Commitment 1
☐ Commitment 2
☐ Commitment 3

Accountability Effectiveness Rating (1-10): ____

Improvements Needed in Accountability:
___________________________________
___________________________________

GOAL ADJUSTMENT LOG
==================
Date: _____________________________
Original Goal: ____________________
___________________________________

Adjustment Made:
☐ Timeline extended
☐ Scope reduced
☐ Approach changed
☐ Resources added
☐ Goal redefined
☐ Other: ______________

Reason for Adjustment:
___________________________________
___________________________________

New Target: _______________________
___________________________________

FINAL GOAL ASSESSMENT
====================
Goal Completion Date: ______________
Final Status: 
☐ Fully Achieved
☐ Partially Achieved
☐ Not Achieved
☐ Goal Changed/Evolved

Success Rating (1-10): _____________

What Worked Best:
• ________________________________
• ________________________________
• ________________________________

What Would Be Done Differently:
• ________________________________
• ________________________________
• ________________________________

Impact of Achieving This Goal:
___________________________________
___________________________________

Next Goals That Emerged:
1. _______________________________
2. _______________________________
3. _______________________________

COACH NOTES SECTION
==================
Session 1 Notes:
___________________________________
___________________________________

Session 2 Notes:
___________________________________
___________________________________

Session 3 Notes:
___________________________________
___________________________________

Session 4 Notes:
___________________________________
___________________________________

PROGRESS VISUALIZATION
=====================
Use this section to create graphs, charts, or visual representations of progress over time.

Month 1 Progress: ☐☐☐☐☐☐☐☐☐☐ (____%)
Month 2 Progress: ☐☐☐☐☐☐☐☐☐☐ (____%)
Month 3 Progress: ☐☐☐☐☐☐☐☐☐☐ (____%)
Month 4 Progress: ☐☐☐☐☐☐☐☐☐☐ (____%)
Month 5 Progress: ☐☐☐☐☐☐☐☐☐☐ (____%)
Month 6 Progress: ☐☐☐☐☐☐☐☐☐☐ (____%)

TRACKING TIPS
=============
• Review progress weekly for momentum
• Celebrate small wins along the way
• Adjust expectations as needed
• Focus on effort, not just outcomes
• Use setbacks as learning opportunities
• Stay flexible with methods while keeping the end goal in mind
• Regular communication with accountability partners is key

This tracker is designed to be a living document that evolves with your goal journey. Use it consistently for maximum benefit.`
  },

  // Add a few more key templates to demonstrate full functionality
  {
    slug: 'coaching-agreement-template',
    title: 'Coaching Agreement Template',
    description: 'Professional coaching agreement template covering terms, expectations, and legal protections.',
    category: 'business-forms',
    content: `COACHING AGREEMENT TEMPLATE

COACHING SERVICES AGREEMENT

This Coaching Agreement ("Agreement") is entered into on ____________ ("Effective Date") between:

COACH:
Name: _________________________
Business Name: ________________
Address: ______________________
Phone: _______________________
Email: _______________________

CLIENT:
Name: _________________________
Address: ______________________
Phone: _______________________
Email: _______________________

1. COACHING SERVICES
===================
The Coach agrees to provide professional coaching services to the Client. Coaching is a partnership that involves:
- Supporting the Client in identifying and achieving personal and professional goals
- Providing tools, techniques, and frameworks for personal development
- Offering accountability and encouragement
- Facilitating self-discovery and awareness

Coaching is NOT:
- Therapy, counseling, or psychological treatment
- Medical or mental health advice
- Business or legal consultation
- A guarantee of specific outcomes

2. COACHING PROCESS
==================
Sessions will be conducted:
☐ In person at: _______________
☐ Via video call (Zoom/Teams/etc.)
☐ Via telephone
☐ Combination of above

Session frequency: ☐ Weekly ☐ Bi-weekly ☐ Monthly
Session duration: ☐ 45 minutes ☐ 60 minutes ☐ 90 minutes
Total number of sessions: _____
Program duration: _____________

3. FEES AND PAYMENT
==================
Coaching Fee Structure:
☐ Per session: $_______ per session
☐ Package rate: $_______ for _____ sessions
☐ Monthly retainer: $_______ per month
☐ Other: _______________

Payment Terms:
☐ Payment due before each session
☐ Payment due at beginning of each month
☐ Payment due in full upon signing
☐ Payment plan: _______________

Payment Methods Accepted:
☐ Cash ☐ Check ☐ Credit Card ☐ Bank Transfer ☐ PayPal ☐ Other: _______

Late Payment: A fee of $_____ will be charged for payments more than _____ days late.

4. SCHEDULING AND CANCELLATION
=============================
Session Scheduling:
Sessions will be scheduled by mutual agreement. The Client is responsible for being punctual and prepared for each session.

Cancellation Policy:
- Client must provide at least _____ hours notice to cancel or reschedule
- Sessions cancelled with less than required notice will be charged in full
- Coach will provide 24 hours notice for any schedule changes
- Emergency situations will be handled with flexibility

Missed Sessions:
Missed sessions without proper notice are forfeited and non-refundable.

5. CLIENT RESPONSIBILITIES
=========================
The Client agrees to:
☐ Be fully committed to the coaching process
☐ Be honest and open in all communications
☐ Complete agreed-upon action items between sessions
☐ Come prepared to each session with agenda items
☐ Take responsibility for their own decisions and actions
☐ Notify Coach of any significant life changes that may impact coaching
☐ Maintain confidentiality regarding Coach's methods and materials

6. COACH RESPONSIBILITIES
========================
The Coach agrees to:
☐ Maintain professional standards and ethics
☐ Be punctual and prepared for each session
☐ Provide a safe, supportive environment for growth
☐ Respect Client's autonomy and decision-making authority
☐ Maintain confidentiality as outlined in this agreement
☐ Refer Client to appropriate professionals when needed
☐ Continue professional development and training

7. CONFIDENTIALITY
=================
All information shared during coaching sessions is confidential and will not be disclosed without written consent, except:
- When required by law
- When there is imminent danger to self or others
- When professional consultation is needed (identity will be protected)

The Client consents to Coach taking notes during sessions for coaching purposes only.

8. BOUNDARIES AND LIMITATIONS
============================
- Coaching sessions will focus on agreed-upon topics and goals
- Personal relationships outside of coaching are discouraged
- Coach is not available for crisis intervention or emergency support
- Coach will refer Client to appropriate mental health professionals if needed
- All communication should occur during business hours unless otherwise arranged

9. TECHNOLOGY AND COMMUNICATION
==============================
Between-session communication:
☐ Email check-ins included
☐ Text message reminders allowed
☐ No contact between sessions
☐ Emergency contact protocol: _______________

Technology requirements for virtual sessions:
- Reliable internet connection
- Private, quiet environment
- Backup communication method

10. TERMINATION
==============
Either party may terminate this agreement with _____ days written notice.

Grounds for immediate termination:
- Violation of confidentiality
- Inappropriate behavior or harassment
- Non-payment of fees
- Client no-shows for consecutive sessions without communication

Upon termination:
- All outstanding fees are due immediately
- Confidentiality obligations continue
- Coach will provide summary of progress if requested

11. REFUND POLICY
================
☐ No refunds on services rendered
☐ Pro-rated refunds for unused sessions in packages
☐ Full refund available within _____ days of purchase
☐ Other: _______________

12. LIABILITY AND DISCLAIMER
===========================
The Client understands that:
- Coaching involves risk and no specific outcomes are guaranteed
- The Client is fully responsible for their decisions and actions
- The Coach is not liable for any consequences of Client's choices
- The Client releases Coach from any claims related to coaching services

The Coach's liability is limited to the amount of fees paid by the Client.

13. DISPUTE RESOLUTION
=====================
Any disputes will be resolved through:
☐ Direct negotiation
☐ Mediation
☐ Binding arbitration
☐ Court jurisdiction in [Location]: _______________

14. ADDITIONAL TERMS
===================
Special arrangements or additional terms:
_________________________________
_________________________________
_________________________________

15. AGREEMENT TO TERMS
=====================
By signing below, both parties acknowledge they have read, understood, and agree to all terms and conditions of this Coaching Agreement.

This agreement constitutes the entire agreement between the parties and supersedes all prior negotiations, representations, or agreements.

CLIENT SIGNATURE: _________________________ DATE: _________
Print Name: _________________________

COACH SIGNATURE: _________________________ DATE: _________
Print Name: _________________________

WITNESS (if required): _________________________ DATE: _________
Print Name: _________________________

This agreement is governed by the laws of [State/Province]: _______________

For questions about this agreement, contact:
Coach Email: _________________________
Coach Phone: _________________________`
  },

  {
    slug: 'wheel-of-life-assessment',
    title: 'Wheel of Life Assessment',
    description: 'Classic coaching assessment tool to evaluate life satisfaction across multiple areas and identify priorities for growth.',
    category: 'assessment-tools',
    content: `WHEEL OF LIFE ASSESSMENT

INTRODUCTION
============
The Wheel of Life is a powerful visual tool that helps you assess your current life satisfaction across key areas. This assessment will help identify where you're thriving and where you might want to focus your energy for growth and improvement.

INSTRUCTIONS
============
1. Look at each life area below
2. Rate your current satisfaction level from 1-10 (1 = very dissatisfied, 10 = completely satisfied)
3. Consider what "perfect" would look like for you in each area
4. Be honest - this is for your own insight and growth
5. After rating, reflect on the patterns and priorities that emerge

CLIENT INFORMATION
==================
Name: _____________________________
Date: _____________________________
Coach: ____________________________

LIFE AREAS ASSESSMENT
=====================

1. CAREER/WORK
Rating: ___/10

What's working well:
_________________________________
_________________________________

What's challenging:
_________________________________
_________________________________

What would a "10" look like:
_________________________________
_________________________________

2. FINANCES/MONEY
Rating: ___/10

What's working well:
_________________________________
_________________________________

What's challenging:
_________________________________
_________________________________

What would a "10" look like:
_________________________________
_________________________________

3. HEALTH & FITNESS
Rating: ___/10

What's working well:
_________________________________
_________________________________

What's challenging:
_________________________________
_________________________________

What would a "10" look like:
_________________________________
_________________________________

4. RELATIONSHIPS/FAMILY
Rating: ___/10

What's working well:
_________________________________
_________________________________

What's challenging:
_________________________________
_________________________________

What would a "10" look like:
_________________________________
_________________________________

5. ROMANCE/INTIMATE RELATIONSHIP
Rating: ___/10

What's working well:
_________________________________
_________________________________

What's challenging:
_________________________________
_________________________________

What would a "10" look like:
_________________________________
_________________________________

6. PERSONAL GROWTH/LEARNING
Rating: ___/10

What's working well:
_________________________________
_________________________________

What's challenging:
_________________________________
_________________________________

What would a "10" look like:
_________________________________
_________________________________

7. FUN & RECREATION
Rating: ___/10

What's working well:
_________________________________
_________________________________

What's challenging:
_________________________________
_________________________________

What would a "10" look like:
_________________________________
_________________________________

8. PHYSICAL ENVIRONMENT
Rating: ___/10

What's working well:
_________________________________
_________________________________

What's challenging:
_________________________________
_________________________________

What would a "10" look like:
_________________________________
_________________________________

VISUAL WHEEL
============
Draw your wheel by marking your satisfaction level for each area:

                    Personal Growth (10)
                           |
                           |
Physical Environment  ────  ────  Career/Work
        (10)          \\   |   /        (10)
                       \\  |  /
                     5  \\ | /  5
                         \\|/
Fun & Recreation ────────  ●  ──────── Finances
     (10)              / | \\        (10)
                      /  |  \\
                     /   |   \\
Romance/Love ──────────  |  ──────── Health & Fitness
   (10)                 |              (10)
                        |
                  Relationships (10)

CONNECTION PATTERNS
==================
Looking at your ratings, answer these reflection questions:

Highest Rated Areas (8-10):
1. ______________________________
2. ______________________________
3. ______________________________

What do these areas have in common?
_________________________________
_________________________________

Lowest Rated Areas (1-5):
1. ______________________________
2. ______________________________
3. ______________________________

What patterns do you notice?
_________________________________
_________________________________

Mid-Range Areas (6-7):
1. ______________________________
2. ______________________________
3. ______________________________

Which of these could you improve most easily?
_________________________________
_________________________________

INTERCONNECTIONS
===============
Which life areas affect each other the most?

Example: Low health might impact career performance and relationships.

Area 1: ___________________________
Affects: ___________________________
How: _______________________________

Area 2: ___________________________
Affects: ___________________________
How: _______________________________

Area 3: ___________________________
Affects: ___________________________
How: _______________________________

PRIORITIES FOR GROWTH
====================
Based on your assessment, which 2-3 areas would you most like to focus on improving?

Priority 1: _______________________
Current rating: ___/10
Target rating in 6 months: ___/10
Why this is important to you:
_________________________________
_________________________________

Priority 2: _______________________
Current rating: ___/10
Target rating in 6 months: ___/10
Why this is important to you:
_________________________________
_________________________________

Priority 3: _______________________
Current rating: ___/10
Target rating in 6 months: ___/10
Why this is important to you:
_________________________________
_________________________________

ACTION PLANNING
==============
For each priority area, identify specific actions you could take:

Priority 1 Actions:
• _______________________________
• _______________________________
• _______________________________

Priority 2 Actions:
• _______________________________
• _______________________________
• _______________________________

Priority 3 Actions:
• _______________________________
• _______________________________
• _______________________________

INSIGHTS AND REFLECTION
=======================
What surprised you about your ratings?
_________________________________
_________________________________

What patterns do you notice about what makes you satisfied vs. dissatisfied?
_________________________________
_________________________________

How might improving your lowest-rated areas impact your highest-rated areas?
_________________________________
_________________________________

What would need to change for you to feel more balanced overall?
_________________________________
_________________________________

What strengths from your high-rated areas could you apply to your growth areas?
_________________________________
_________________________________

COMMITMENT TO CHANGE
===================
On a scale of 1-10, how motivated are you to work on your priority areas?
Motivation Level: ___/10

What would increase your motivation?
_________________________________
_________________________________

What support do you need to make these changes?
_________________________________
_________________________________

When will you reassess your Wheel of Life?
Date for next assessment: ___________

COACH NOTES
===========
(For coach use during review session)

Client's energy and engagement during assessment:
_________________________________

Key insights that emerged:
_________________________________
_________________________________

Coaching focus areas identified:
_________________________________
_________________________________

Follow-up actions agreed upon:
_________________________________
_________________________________

USING YOUR RESULTS
=================
Your Wheel of Life assessment is a snapshot of where you are today. Use these insights to:

✓ Set meaningful goals aligned with your priorities
✓ Make decisions that support life balance
✓ Track progress over time
✓ Celebrate improvements in all areas
✓ Stay aware of how changes in one area affect others

Remember: There's no "perfect" wheel. The goal is awareness, intentional choices, and progress toward what matters most to you.

Reassess every 3-6 months to track your growth and adjust your focus as your life evolves.`
  }
]