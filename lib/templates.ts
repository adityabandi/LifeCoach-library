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
20. Have you completed any personality or strengths assessments before?
☐ Yes ☐ No
If yes, what insights did you gain?
_________________________________________

If you're interested in gaining deeper personality insights to enhance our coaching sessions, consider taking a professional assessment at: https://www.personality-quizzes.com/for-coaching

21. Is there anything else you'd like me to know about you or your situation?
_________________________________________
_________________________________________

21. What questions do you have about the coaching process?
_________________________________________
_________________________________________

22. Are you interested in completing a personality or strengths assessment to enhance our coaching work together?
☐ Yes ☐ No ☐ Maybe
(Professional assessments available at: https://www.personality-quizzes.com/for-coaching)

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

This intake continues for several more sections covering feedback, stakeholder considerations, executive challenges, coaching logistics, organizational support, and consent forms.

LEADERSHIP STYLE AND PERSONALITY
===============================
Understanding your leadership style and personality preferences can significantly enhance our coaching effectiveness.

Previous Assessment Experience:
Have you completed any leadership or personality assessments (DISC, Myers-Briggs, StrengthsFinder, etc.)?
☐ Yes ☐ No

If yes, what were the key insights?
_________________________________________
_________________________________________

Personality Assessment Option:
Would you be interested in completing a comprehensive personality and leadership assessment to deepen our coaching work?
☐ Yes ☐ No ☐ Maybe later

Professional assessments available at: https://www.personality-quizzes.com/for-coaching

This assessment data helps create more targeted and effective leadership development strategies tailored to your unique style and preferences.`
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

Reassess every 3-6 months to track your growth and adjust your focus as your life evolves.

ADDITIONAL DEVELOPMENT RESOURCES
===============================
To gain even deeper insights into your personality, motivations, and natural strengths that can accelerate your progress in all life areas, consider taking a professional personality assessment.

Professional assessments available at: https://www.personality-quizzes.com/for-coaching

Understanding your personality type can help you:
• Set goals that align with your natural motivations
• Choose strategies that work with your personality rather than against it  
• Understand your relationship patterns and communication style
• Identify your core strengths and how to leverage them across all life areas`
  },

  {
    slug: 'habit-formation-tracker',
    title: 'Habit Formation Tracker',
    description: 'Daily and weekly habit tracking tool to help clients build positive habits and break negative patterns.',
    category: 'progress-trackers',
    content: `HABIT FORMATION TRACKER

CLIENT INFORMATION
==================
Name: _____________________________
Start Date: _______________________
Coach: ____________________________
Review Date: ______________________

HABIT OVERVIEW
==============
Target Habit: ______________________
___________________________________

Habit Category:
☐ Health & Wellness
☐ Productivity & Work
☐ Relationships & Social
☐ Personal Development
☐ Financial
☐ Creative & Hobbies
☐ Other: ______________

Why This Habit Matters:
___________________________________
___________________________________

HABIT DETAILS
=============
Specific Behavior: What exactly will you do?
___________________________________
___________________________________

Frequency Goal:
☐ Daily
☐ X times per week: ___
☐ X times per month: ___
☐ Other: ______________

Time of Day:
☐ Morning (before 10am)
☐ Midday (10am-2pm)
☐ Afternoon (2pm-6pm)
☐ Evening (6pm-10pm)
☐ Night (after 10pm)
☐ Flexible timing

Duration: ______ minutes
Location: ______________________

HABIT STACKING
==============
Link your new habit to an existing routine:

After I _________________________ (existing habit),
I will __________________________ (new habit).

For example:
"After I brush my teeth in the morning, I will do 10 push-ups."

DAILY TRACKING - WEEK 1
=======================
Mark with ✓ for completion, X for missed, ~ for partial

Day 1 (___/___ ): _____ Time: _____ Notes: _____________________
Day 2 (___/___ ): _____ Time: _____ Notes: _____________________
Day 3 (___/___ ): _____ Time: _____ Notes: _____________________
Day 4 (___/___ ): _____ Time: _____ Notes: _____________________
Day 5 (___/___ ): _____ Time: _____ Notes: _____________________
Day 6 (___/___ ): _____ Time: _____ Notes: _____________________
Day 7 (___/___ ): _____ Time: _____ Notes: _____________________

Week 1 Success Rate: ___/7 (____%)

DAILY TRACKING - WEEK 2
=======================
Day 8 (___/___ ): _____ Time: _____ Notes: _____________________
Day 9 (___/___ ): _____ Time: _____ Notes: _____________________
Day 10 (___/___ ): _____ Time: _____ Notes: _____________________
Day 11 (___/___ ): _____ Time: _____ Notes: _____________________
Day 12 (___/___ ): _____ Time: _____ Notes: _____________________
Day 13 (___/___ ): _____ Time: _____ Notes: _____________________
Day 14 (___/___ ): _____ Time: _____ Notes: _____________________

Week 2 Success Rate: ___/7 (____%)

DAILY TRACKING - WEEK 3
=======================
Day 15 (___/___ ): _____ Time: _____ Notes: _____________________
Day 16 (___/___ ): _____ Time: _____ Notes: _____________________
Day 17 (___/___ ): _____ Time: _____ Notes: _____________________
Day 18 (___/___ ): _____ Time: _____ Notes: _____________________
Day 19 (___/___ ): _____ Time: _____ Notes: _____________________
Day 20 (___/___ ): _____ Time: _____ Notes: _____________________
Day 21 (___/___ ): _____ Time: _____ Notes: _____________________

Week 3 Success Rate: ___/7 (____%)

DAILY TRACKING - WEEK 4
=======================
Day 22 (___/___ ): _____ Time: _____ Notes: _____________________
Day 23 (___/___ ): _____ Time: _____ Notes: _____________________
Day 24 (___/___ ): _____ Time: _____ Notes: _____________________
Day 25 (___/___ ): _____ Time: _____ Notes: _____________________
Day 26 (___/___ ): _____ Time: _____ Notes: _____________________
Day 27 (___/___ ): _____ Time: _____ Notes: _____________________
Day 28 (___/___ ): _____ Time: _____ Notes: _____________________

Week 4 Success Rate: ___/7 (____%)

30-DAY SUMMARY
==============
Total Completions: ___/30 (____%)
Longest Streak: _____ days
Current Streak: _____ days

Best Days of Week:
1. ______________________________
2. ______________________________
3. ______________________________

Most Challenging Days:
1. ______________________________
2. ______________________________
3. ______________________________

OBSTACLE TRACKING
=================
Common Obstacles Encountered:
☐ Lack of time
☐ Forgot to do it
☐ Too tired/low energy
☐ Not feeling motivated
☐ Schedule disruption
☐ Other priorities took over
☐ Physical discomfort/illness
☐ Emotional resistance
☐ Environmental barriers
☐ Other: ______________

Solutions That Worked:
• ________________________________
• ________________________________
• ________________________________

MOTIVATION & MINDSET
===================
Energy Level Assessment:
Week 1: ☐ High ☐ Medium ☐ Low
Week 2: ☐ High ☐ Medium ☐ Low
Week 3: ☐ High ☐ Medium ☐ Low
Week 4: ☐ High ☐ Medium ☐ Low

Motivation Level Assessment:
Week 1: ☐ High ☐ Medium ☐ Low
Week 2: ☐ High ☐ Medium ☐ Low
Week 3: ☐ High ☐ Medium ☐ Low
Week 4: ☐ High ☐ Medium ☐ Low

What kept you motivated?
___________________________________
___________________________________

What demotivated you?
___________________________________
___________________________________

REWARDS & CELEBRATIONS
======================
Small Daily Rewards (for completion):
___________________________________

Weekly Rewards (for meeting weekly goal):
___________________________________

Monthly Reward (for 30-day completion):
___________________________________

Celebration Moments:
Week 1: ___________________________
Week 2: ___________________________
Week 3: ___________________________
Week 4: ___________________________

HABIT EVOLUTION
===============
How has the habit gotten easier over time?
___________________________________
___________________________________

What adjustments did you make?
___________________________________
___________________________________

How has this habit impacted other areas of your life?
___________________________________
___________________________________

NEXT STEPS
==========
Based on your 30-day experience:

☐ Continue this habit as is
☐ Increase frequency/intensity
☐ Modify the approach
☐ Stack another habit
☐ Focus on consistency
☐ Other: ______________

Next Habit to Work On:
___________________________________

Connection to Current Habit:
___________________________________

COACH NOTES
===========
Observations about client's habit formation:
___________________________________
___________________________________

Patterns noticed:
___________________________________
___________________________________

Recommended adjustments:
___________________________________
___________________________________

Follow-up actions:
___________________________________
___________________________________

HABIT FORMATION PRINCIPLES
==========================
✓ Start small - make it so easy you can't say no
✓ Be consistent - same time, same place when possible
✓ Stack habits - attach new habits to existing routines
✓ Track visibly - seeing progress motivates continuation
✓ Celebrate wins - acknowledge every success, however small
✓ Plan for obstacles - identify barriers and solutions in advance
✓ Focus on identity - "I am someone who..."
✓ Environment design - make good habits obvious, bad habits invisible

Remember: Habits are formed through repetition, not perfection. Focus on showing up consistently rather than performing perfectly.`
  },

  {
    slug: 'session-notes-template',
    title: 'Session Notes Template',
    description: 'Structured template for recording coaching session notes, progress, and action items.',
    category: 'progress-trackers',
    content: `COACHING SESSION NOTES TEMPLATE

SESSION INFORMATION
==================
Client Name: _______________________
Session #: ________________________
Date: _____________________________
Time: Start: ______ End: ___________
Duration: _________________________
Session Type: ☐ In-Person ☐ Video ☐ Phone
Coach: ____________________________

PRE-SESSION PREPARATION
======================
☐ Reviewed previous session notes
☐ Reviewed client's action items from last session
☐ Prepared session materials/resources
☐ Set up session environment
☐ Confirmed technology (if virtual)

Last Session Action Items Review:
1. ________________________________
   Status: ☐ Completed ☐ In Progress ☐ Not Started
   
2. ________________________________
   Status: ☐ Completed ☐ In Progress ☐ Not Started
   
3. ________________________________
   Status: ☐ Completed ☐ In Progress ☐ Not Started

SESSION OPENING (5-10 minutes)
=============================
Client's Current State:
Energy Level: ☐ High ☐ Medium ☐ Low
Mood: _____________________________
Recent Developments/Updates:
_________________________________
_________________________________

What the client wants to focus on today:
_________________________________
_________________________________

SESSION AGENDA
=============
Primary Focus Areas:
1. ______________________________
2. ______________________________
3. ______________________________

Time Allocation:
Opening & Check-in: _____ minutes
Focus Area 1: _____ minutes  
Focus Area 2: _____ minutes
Focus Area 3: _____ minutes
Action Planning: _____ minutes
Closing: _____ minutes

DETAILED SESSION NOTES
======================

FOCUS AREA 1: ______________________
Key Discussion Points:
• ______________________________
• ______________________________
• ______________________________

Insights/Breakthroughs:
_________________________________
_________________________________

Questions Asked:
• ______________________________
• ______________________________
• ______________________________

Client's Responses/Realizations:
_________________________________
_________________________________

FOCUS AREA 2: ______________________
Key Discussion Points:
• ______________________________
• ______________________________
• ______________________________

Insights/Breakthroughs:
_________________________________
_________________________________

Questions Asked:
• ______________________________
• ______________________________
• ______________________________

Client's Responses/Realizations:
_________________________________
_________________________________

FOCUS AREA 3: ______________________
Key Discussion Points:
• ______________________________
• ______________________________
• ______________________________

Insights/Breakthroughs:
_________________________________
_________________________________

Questions Asked:
• ______________________________
• ______________________________
• ______________________________

Client's Responses/Realizations:
_________________________________
_________________________________

COACHING TOOLS USED
==================
☐ GROW Model
☐ Wheel of Life
☐ Values Assessment
☐ Goal Setting Framework
☐ Visualization Exercise
☐ Journaling/Reflection
☐ Role Playing
☐ Perspective Taking
☐ Action Planning
☐ Accountability Setup
☐ Other: _______________

Tools Effectiveness:
Most Effective: ____________________
Least Effective: ___________________
Client's Preferred Approach: ________

PROGRESS ASSESSMENT
==================
Progress on Current Goals:
Goal 1: ___________________________
Rating (1-10): _____
Progress Since Last Session: ________

Goal 2: ___________________________
Rating (1-10): _____
Progress Since Last Session: ________

Goal 3: ___________________________
Rating (1-10): _____
Progress Since Last Session: ________

Overall Session Rating:
Client Engagement: ☐ High ☐ Medium ☐ Low
Session Productivity: ☐ High ☐ Medium ☐ Low
Client Satisfaction: ☐ High ☐ Medium ☐ Low

CHALLENGES & OBSTACLES
=====================
Challenges Discussed:
1. ______________________________
2. ______________________________
3. ______________________________

Strategies Developed:
1. ______________________________
2. ______________________________
3. ______________________________

Resources Recommended:
• ______________________________
• ______________________________
• ______________________________

ACTION ITEMS FOR NEXT SESSION
=============================
Client Commitments:
1. ______________________________
   By When: ______________________
   
2. ______________________________
   By When: ______________________
   
3. ______________________________
   By When: ______________________

Coach Follow-up Actions:
☐ Send session summary
☐ Provide resources discussed
☐ Schedule next session
☐ Send reminder about action items
☐ Other: _______________

OBSERVATIONS & INSIGHTS
=======================
Client's Communication Style:
_________________________________

Emotional State Throughout Session:
_________________________________

Recurring Patterns Noticed:
_________________________________
_________________________________

Areas of Growth:
_________________________________
_________________________________

Areas Needing More Support:
_________________________________
_________________________________

CLIENT QUOTES
=============
Notable things the client said:
"_______________________________"

"_______________________________"

"_______________________________"

NEXT SESSION PLANNING
====================
Recommended Focus Areas:
1. ______________________________
2. ______________________________
3. ______________________________

Potential Tools/Approaches:
_________________________________

Materials to Prepare:
_________________________________

Follow-up Questions to Explore:
• ______________________________
• ______________________________
• ______________________________

SESSION CLOSING
===============
Client's Key Takeaways:
1. ______________________________
2. ______________________________
3. ______________________________

Client's Commitment Level (1-10): ____

Energy/Motivation at End of Session:
☐ Increased ☐ Same ☐ Decreased

Next Session Scheduled:
Date: ____________________________
Time: ____________________________
Format: ☐ In-Person ☐ Video ☐ Phone

COACH REFLECTION
================
What went well in this session?
_________________________________
_________________________________

What could have been better?
_________________________________
_________________________________

Adjustments for future sessions:
_________________________________
_________________________________

Professional development notes:
_________________________________
_________________________________

CONFIDENTIALITY REMINDER
========================
All information in these notes is confidential and should be stored securely according to professional coaching standards and applicable privacy laws.

Notes completed by: ________________
Date: _____________________________
Time: ____________________________`
  },

  {
    slug: 'client-journey-map',
    title: 'Client Journey Map',
    description: 'Visual mapping tool to track the complete client experience from initial contact through coaching completion.',
    category: 'progress-trackers',
    content: `CLIENT JOURNEY MAP

CLIENT INFORMATION
==================
Client Name: _______________________
Journey Start Date: _______________
Coach: ____________________________
Current Phase: ____________________

JOURNEY OVERVIEW
===============
Coaching Program: ___________________
Total Duration: ____________________
Number of Sessions: ________________
Coaching Focus Areas:
1. ______________________________
2. ______________________________
3. ______________________________

PHASE 1: DISCOVERY & INITIAL CONTACT
===================================
Date Range: From _______ To _______

Touchpoints:
☐ Website visit
☐ Social media interaction
☐ Referral conversation
☐ Discovery call
☐ Consultation session
☐ Proposal/package discussion
☐ Contract signing
☐ Other: _______________

Client's Initial State:
Awareness Level: ☐ High ☐ Medium ☐ Low
Motivation Level: ☐ High ☐ Medium ☐ Low
Readiness for Change: ☐ High ☐ Medium ☐ Low

Initial Goals Expressed:
• ______________________________
• ______________________________
• ______________________________

First Impressions:
Client's Concerns: __________________
Client's Expectations: ______________
Coach's Observations: _______________

Key Decisions Made:
Coaching Package Selected: ___________
Session Frequency: _________________
Primary Focus Area: ________________

PHASE 2: ONBOARDING & FOUNDATION
================================
Date Range: From _______ To _______

Onboarding Activities:
☐ Intake form completion
☐ Assessment tools administered
☐ Goal-setting session
☐ Coaching agreement review
☐ Expectation setting
☐ Communication preferences established
☐ First session completed

Assessment Results:
Tool 1: ___________________________
Results: ___________________________

Tool 2: ___________________________
Results: ___________________________

Established Goals:
Primary Goal: ______________________
Secondary Goals:
1. ______________________________
2. ______________________________
3. ______________________________

Foundation Building:
Rapport Level: ☐ Strong ☐ Good ☐ Developing
Trust Level: ☐ High ☐ Medium ☐ Building
Communication Flow: ☐ Excellent ☐ Good ☐ Needs Work

PHASE 3: ACTIVE COACHING JOURNEY
===============================
Date Range: From _______ To _______

Session Progress Tracking:

SESSION 1: ________________________
Date: _____________________________
Focus: ____________________________
Key Insights: ______________________
Action Items: ______________________
Client Energy: ☐ High ☐ Medium ☐ Low

SESSION 2: ________________________
Date: _____________________________
Focus: ____________________________
Key Insights: ______________________
Action Items: ______________________
Client Energy: ☐ High ☐ Medium ☐ Low

SESSION 3: ________________________
Date: _____________________________
Focus: ____________________________
Key Insights: ______________________
Action Items: ______________________
Client Energy: ☐ High ☐ Medium ☐ Low

SESSION 4: ________________________
Date: _____________________________
Focus: ____________________________
Key Insights: ______________________
Action Items: ______________________
Client Energy: ☐ High ☐ Medium ☐ Low

SESSION 5: ________________________
Date: _____________________________
Focus: ____________________________
Key Insights: ______________________
Action Items: ______________________
Client Energy: ☐ High ☐ Medium ☐ Low

SESSION 6: ________________________
Date: _____________________________
Focus: ____________________________
Key Insights: ______________________
Action Items: ______________________
Client Energy: ☐ High ☐ Medium ☐ Low

BREAKTHROUGH MOMENTS
===================
Session #: ________________________
What Happened: ____________________
___________________________________

Impact on Client: __________________
___________________________________

Session #: ________________________
What Happened: ____________________
___________________________________

Impact on Client: __________________
___________________________________

CHALLENGES & OBSTACLES
=====================
Challenge 1: _______________________
When: _____________________________
How Addressed: ____________________
Outcome: __________________________

Challenge 2: _______________________
When: _____________________________
How Addressed: ____________________
Outcome: __________________________

Challenge 3: _______________________
When: _____________________________
How Addressed: ____________________
Outcome: __________________________

PHASE 4: INTEGRATION & GROWTH
=============================
Date Range: From _______ To _______

Skill Development Progress:
Skill 1: ___________________________
Initial Level (1-10): ______________
Current Level (1-10): ______________

Skill 2: ___________________________
Initial Level (1-10): ______________
Current Level (1-10): ______________

Skill 3: ___________________________
Initial Level (1-10): ______________
Current Level (1-10): ______________

Behavior Changes Observed:
• ______________________________
• ______________________________
• ______________________________

Mindset Shifts:
• ______________________________
• ______________________________
• ______________________________

PHASE 5: COMPLETION & TRANSITION
================================
Date Range: From _______ To _______

Final Assessment:
Goals Achievement Rating:
Goal 1: _______ (% achieved)
Goal 2: _______ (% achieved)
Goal 3: _______ (% achieved)

Overall Satisfaction: ☐ Excellent ☐ Good ☐ Fair ☐ Poor

Transition Planning:
☐ Self-coaching tools provided
☐ Maintenance plan created
☐ Follow-up sessions scheduled
☐ Referrals made (if needed)
☐ Resources for continued growth provided

Client's Transformation Summary:
Where they started: ________________
___________________________________

Where they ended: __________________
___________________________________

Biggest changes: ___________________
___________________________________

EMOTIONAL JOURNEY TRACKING
=========================
Map the client's emotional experience throughout:

Phase 1 Emotions:
☐ Excited ☐ Nervous ☐ Hopeful ☐ Skeptical ☐ Confused

Phase 2 Emotions:
☐ Motivated ☐ Overwhelmed ☐ Committed ☐ Uncertain ☐ Energized

Phase 3 Emotions:
☐ Frustrated ☐ Breakthrough ☐ Consistent ☐ Challenged ☐ Growing

Phase 4 Emotions:
☐ Confident ☐ Independent ☐ Accomplished ☐ Grateful ☐ Ready

Phase 5 Emotions:
☐ Proud ☐ Sad to end ☐ Equipped ☐ Transformed ☐ Empowered

SUPPORT SYSTEM EVOLUTION
========================
Beginning Support System:
Family: ___________________________
Friends: __________________________
Professional: _____________________
Other: ____________________________

Support System at End:
Family: ___________________________
Friends: __________________________
Professional: _____________________
Other: ____________________________

Changes in Support System:
___________________________________
___________________________________

TOOLS & RESOURCES IMPACT
========================
Most Effective Tools:
1. ______________________________
2. ______________________________
3. ______________________________

Least Effective Tools:
1. ______________________________
2. ______________________________
3. ______________________________

Resources Client Found Most Helpful:
___________________________________
___________________________________

CLIENT SUCCESS METRICS
======================
Quantitative Measures:
Session Attendance: ____% (___/___sessions)
Action Item Completion: ____% 
Goal Achievement: ____% 
Program Completion: ☐ Yes ☐ No

Qualitative Measures:
Self-Awareness Growth: ☐ Significant ☐ Moderate ☐ Minimal
Confidence Increase: ☐ Significant ☐ Moderate ☐ Minimal
Life Satisfaction: ☐ Much Higher ☐ Higher ☐ Same ☐ Lower

POST-COACHING IMPACT
===================
3-Month Follow-up:
Date: _____________________________
Status of Goals: ___________________
New Challenges: ____________________
Continued Growth: ___________________

6-Month Follow-up:
Date: _____________________________
Status of Goals: ___________________
New Challenges: ____________________
Continued Growth: ___________________

LESSONS LEARNED
===============
For Coach:
What worked well: __________________
___________________________________

What to improve: ___________________
___________________________________

Approach adjustments for similar clients:
___________________________________
___________________________________

For Client (to share):
Key insights to remember: ___________
___________________________________

Strategies to continue: _____________
___________________________________

REFERRAL & TESTIMONIAL
======================
Client Willing to Provide:
☐ Testimonial
☐ Case study participation
☐ Referrals to friends/colleagues
☐ LinkedIn recommendation
☐ Online review

Testimonial Text:
"_______________________________
___________________________________
___________________________________"

This journey map serves as a comprehensive record of the client's transformation and provides valuable insights for improving coaching effectiveness.`
  },

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
    slug: 'service-proposal-template',
    title: 'Service Proposal Template',
    description: 'Professional proposal template for presenting coaching services to potential clients.',
    category: 'business-forms',
    content: `COACHING SERVICE PROPOSAL

PROPOSAL HEADER
===============
To: _______________________________
From: _____________________________
Date: _____________________________
Proposal #: _______________________
Valid Until: ______________________

EXECUTIVE SUMMARY
================
Thank you for your interest in coaching services. This proposal outlines a customized coaching program designed specifically for your needs and goals.

Based on our discovery conversation, I understand that you are looking to:
• ______________________________
• ______________________________
• ______________________________

I believe coaching will provide you with the clarity, accountability, and support needed to achieve these outcomes.

YOUR CURRENT SITUATION
======================
What you shared about where you are now:
___________________________________
___________________________________

What you want to achieve:
___________________________________
___________________________________

The gap between current state and desired outcome:
___________________________________
___________________________________

PROPOSED COACHING PROGRAM
========================

Program Name: ______________________
Duration: __________________________
Total Sessions: ___________________
Session Length: ___________________
Session Frequency: ________________

PROGRAM OBJECTIVES
=================
By the end of this coaching engagement, you will:

1. ______________________________
2. ______________________________
3. ______________________________
4. ______________________________

SUCCESS METRICS
===============
We will measure success by:
• ______________________________
• ______________________________
• ______________________________

COACHING METHODOLOGY
===================
My coaching approach combines:

☐ Goal-setting and action planning
☐ Accountability and progress tracking
☐ Strengths identification and development
☐ Obstacle identification and problem-solving
☐ Mindset and perspective work
☐ Skill building and practice
☐ Reflection and self-awareness development

Specific frameworks we'll use:
• ______________________________
• ______________________________
• ______________________________

PROGRAM STRUCTURE
================

PHASE 1: FOUNDATION (Sessions 1-2)
- Complete comprehensive intake assessment
- Clarify vision and goals
- Establish coaching agreement and expectations
- Create initial action plan

PHASE 2: MOMENTUM (Sessions 3-6)
- Dive deep into primary focus areas
- Build essential skills and habits
- Address obstacles and limiting beliefs
- Develop accountability systems

PHASE 3: ACCELERATION (Sessions 7-10)
- Refine strategies based on early results
- Tackle more complex challenges
- Expand comfort zone and capabilities
- Strengthen new behaviors and mindsets

PHASE 4: INTEGRATION (Sessions 11-12)
- Consolidate learning and growth
- Plan for sustained progress beyond coaching
- Develop self-coaching capabilities
- Celebrate achievements and plan next steps

WHAT'S INCLUDED
===============
☐ __ individual coaching sessions (__ minutes each)
☐ Comprehensive intake assessment
☐ Goal-setting and action planning worksheets
☐ Progress tracking tools and templates
☐ Email support between sessions
☐ Resource recommendations and materials
☐ Session summaries and notes
☐ Final progress review and future planning session

OPTIONAL ADD-ONS
===============
☐ Additional sessions: $____ per session
☐ Personality/Strengths assessment: $____
☐ 360-degree feedback process: $____
☐ Monthly check-ins for 3 months post-program: $____
☐ Group coaching component: $____
☐ Workshop or training session: $____

INVESTMENT
==========
Program Fee: $_____________________

Payment Options:
☐ Pay in full: $_______ (save $____)
☐ Two payments: $_______ each
☐ Monthly payments: $_______ x __ months
☐ Per session: $_______ each

Payment Methods Accepted:
☐ Credit card ☐ Bank transfer ☐ Check ☐ PayPal

Payment Schedule:
First payment due: _________________
Subsequent payments: _______________

COACHING AGREEMENT HIGHLIGHTS
============================
• Sessions are scheduled by mutual agreement
• 24-hour cancellation notice required
• Confidentiality is maintained according to coaching standards
• Client is responsible for implementing action items
• Coach provides support, guidance, and accountability
• Either party may terminate with reasonable notice

GETTING STARTED
===============
To begin your coaching journey:

1. Review and sign the attached coaching agreement
2. Submit your first payment
3. Complete the intake assessment
4. Schedule your first session

Timeline:
Week 1: Complete paperwork and assessment
Week 2: First coaching session
Ongoing: Regular sessions as scheduled

YOUR COACH
==========
Brief bio and relevant credentials:
___________________________________
___________________________________

Relevant experience:
___________________________________
___________________________________

Coaching philosophy:
___________________________________
___________________________________

CLIENT SUCCESS STORIES
======================
"[Testimonial from similar client about results achieved]"
- Client Name, Title

"[Another relevant testimonial]"
- Client Name, Title

FREQUENTLY ASKED QUESTIONS
=========================

Q: What if I need to reschedule a session?
A: ______________________________

Q: What happens if I miss a session?
A: ______________________________

Q: Can I contact you between sessions?
A: ______________________________

Q: What if I need additional sessions?
A: ______________________________

Q: Do you offer any guarantees?
A: ______________________________

NEXT STEPS
==========
I'm excited about the possibility of working together. This proposal is valid until [date]. To accept:

1. Sign and return the coaching agreement
2. Submit your first payment
3. Schedule your first session

If you have any questions or would like to discuss modifications to this proposal, please don't hesitate to contact me.

CONTACT INFORMATION
==================
Name: _____________________________
Phone: ___________________________
Email: ___________________________
Website: _________________________

AUTHORIZATION
=============
Client Acceptance:

I accept this proposal and agree to the terms outlined above.

Client Signature: __________________
Print Name: _______________________
Date: _____________________________

Coach Authorization:

Coach Signature: ___________________
Print Name: _______________________
Date: _____________________________

This proposal serves as a preliminary agreement. A detailed coaching agreement will be executed upon acceptance.`
  },

  // Add additional missing templates
  {
    slug: 'pricing-calculator',
    title: 'Pricing Calculator',
    description: 'Comprehensive worksheet to calculate coaching rates and package pricing based on value, market, and costs.',
    category: 'business-forms',
    content: `COACHING PRICING CALCULATOR

COACH INFORMATION
================
Name: _____________________________
Business Name: ____________________
Date: _____________________________
Location: _________________________

MARKET RESEARCH
===============
Research at least 3-5 coaches in your area or niche:

Competitor 1:
Name/Business: ____________________
Services: _________________________
Price Range: ______________________
Session Length: ___________________
Package Options: __________________

Competitor 2:
Name/Business: ____________________
Services: _________________________
Price Range: ______________________
Session Length: ___________________
Package Options: __________________

Competitor 3:
Name/Business: ____________________
Services: _________________________
Price Range: ______________________
Session Length: ___________________
Package Options: __________________

Market Average Price Range:
Low: $_______ Mid: $_______ High: $_______

COST ANALYSIS
=============
Calculate your monthly business expenses:

BUSINESS EXPENSES (Monthly):
Office/Space Rent: $_______________
Phone/Internet: $__________________
Website/Technology: $______________
Insurance: $______________________
Professional Development: $_________
Marketing/Advertising: $___________
Business Licenses: $_______________
Accounting/Legal: $_________________
Equipment/Supplies: $______________
Other Expenses: $__________________

Total Monthly Expenses: $___________

PERSONAL EXPENSES (Monthly):
Housing: $________________________
Food: $___________________________
Transportation: $__________________
Healthcare: $______________________
Personal Insurance: $______________
Savings/Retirement: $______________
Personal/Family: $__________________
Other Living Expenses: $____________

Total Monthly Personal: $___________

TOTAL MONTHLY NEEDS: $______________

VALUE ASSESSMENT
================
Rate your value factors (1-10 scale):

Experience Level: ___/10
Years coaching: ___________________
Previous career experience: ________

Education & Credentials: ___/10
Degrees: __________________________
Certifications: ___________________
Specialized training: ______________

Specialization/Niche: ___/10
Specific expertise in: _____________
Unique approach/methods: ____________

Results/Success Rate: ___/10
Client success stories: ____________
Testimonials/referrals: ____________

Personal Brand/Reputation: ___/10
Online presence: ___________________
Speaking/writing: __________________

Total Value Score: ____/50

VALUE MULTIPLIER:
0-20 points: 0.8x market rate
21-30 points: 1.0x market rate
31-40 points: 1.2x market rate
41-50 points: 1.5x market rate

INCOME GOALS
============
Desired Annual Income: $____________
Desired Monthly Income: $___________

Working Schedule:
Sessions per day: _________________
Days per week: ____________________
Weeks per year: ___________________
(Account for vacation, holidays, sick days)

Total Sessions per Year: ___________

TARGET SESSION RATE CALCULATION
===============================
Method 1: Income-Based
Monthly Income Goal: $______________
Sessions per Month: _______________
Required Rate per Session: $________

Method 2: Cost-Plus
Monthly Expenses: $________________
Desired Profit: $__________________
Sessions per Month: _______________
Required Rate per Session: $________

Method 3: Market-Based
Market Average: $__________________
Your Value Multiplier: ____________
Suggested Rate: $__________________

RECOMMENDED SESSION RATE: $__________

PACKAGE PRICING
===============
Single Session Rate: $______________

3-Session Package:
Individual rate: $__________________
Package discount: ____%
Package price: $___________________
Savings for client: $______________

6-Session Package:
Individual rate: $__________________
Package discount: ____%
Package price: $___________________
Savings for client: $______________

12-Session Package:
Individual rate: $__________________
Package discount: ____%
Package price: $___________________
Savings for client: $______________

SPECIALIZED PROGRAMS
===================
Program Name: ______________________
Duration: __________________________
Number of Sessions: _______________
Additional Components:
☐ Workbooks/Materials
☐ Email Support
☐ Group Sessions
☐ Assessments
☐ Follow-up Check-ins

Base Session Value: $_______________
Additional Value: $________________
Total Program Price: $______________

PAYMENT OPTIONS
===============
Option 1: Pay in Full
Full Price: $______________________
Discount: ____% = $________________
Final Price: $____________________

Option 2: Payment Plan
Number of Payments: _______________
Payment Amount: $__________________
Total with Plan: $________________
Processing Fee: $__________________

DIFFERENT MARKET SEGMENTS
=========================
Individual Clients:
Session Rate: $____________________
Package Rates: $___________________

Corporate Clients:
Hourly Rate: $____________________
Day Rate: $______________________
Project Rate: $___________________

Group Coaching:
Rate per Person: $________________
Minimum Group Size: ______________
Maximum Group Size: ______________

TESTING AND ADJUSTMENTS
=======================
Initial Pricing Test:
Start Date: ______________________
Test Rate: $____________________
Number of Inquiries: ______________
Conversion Rate: ____%
Feedback Received: ________________

Adjustment 1:
New Rate: $_______________________
Date Changed: ____________________
Results: _________________________

Adjustment 2:
New Rate: $_______________________
Date Changed: ____________________
Results: _________________________

PRICING STRATEGY
================
Positioning Strategy:
☐ Premium/High-end
☐ Mid-market/Competitive
☐ Value/Budget-friendly
☐ Introductory/Building client base

Pricing Justification:
What makes your coaching worth the price?
• ______________________________
• ______________________________
• ______________________________

Value Communication:
How will you communicate your value to prospects?
___________________________________
___________________________________

SEASONAL ADJUSTMENTS
===================
Peak Season Rates (if applicable):
Months: ___________________________
Rate Increase: ____%
Justification: ____________________

Off-Season Rates (if applicable):
Months: ___________________________
Rate Decrease/Promotion: ___%
Justification: ____________________

REVIEW SCHEDULE
===============
Pricing Review Dates:
Quarterly Review: __________________
Annual Review: ____________________

Factors to Consider in Reviews:
☐ Cost of living changes
☐ Experience gained
☐ Market rate changes
☐ Demand for services
☐ Additional qualifications
☐ Business growth

FINAL PRICING DECISION
======================
Chosen Session Rate: $______________
Chosen Package Options:
3 Sessions: $______________________
6 Sessions: $______________________
12 Sessions: $____________________

Confidence Level (1-10): ___________

Implementation Date: _______________

Notes:
___________________________________
___________________________________

Remember: Pricing is not permanent. Start with rates that feel sustainable and adjust as you gain experience and confidence. Your rates should reflect the value you provide and support your business and personal financial goals.`
  },

  {
    slug: 'client-feedback-survey',
    title: 'Client Feedback Survey',
    description: 'Comprehensive survey template to gather client feedback and measure coaching effectiveness.',
    category: 'business-forms',
    content: `CLIENT FEEDBACK SURVEY

SURVEY INFORMATION
==================
Client Name: _______________________
Program/Service: ___________________
Start Date: _______________________
Completion Date: __________________
Coach: ____________________________
Survey Date: ______________________

OVERALL SATISFACTION
===================
1. Overall, how satisfied are you with your coaching experience?
☐ Extremely satisfied
☐ Very satisfied  
☐ Satisfied
☐ Somewhat satisfied
☐ Not satisfied

Please explain your rating:
___________________________________
___________________________________

2. How likely are you to recommend our coaching services to others?
0 ── 1 ── 2 ── 3 ── 4 ── 5 ── 6 ── 7 ── 8 ── 9 ── 10
(0 = Not at all likely, 10 = Extremely likely)

What's the primary reason for your score?
___________________________________
___________________________________

GOAL ACHIEVEMENT
================
3. To what extent did coaching help you achieve your goals?
☐ Exceeded my expectations
☐ Met my expectations
☐ Mostly met my expectations
☐ Partially met my expectations
☐ Did not meet my expectations

4. Rate your progress in each goal area (1-10 scale):

Goal 1: ___________________________
Progress Rating: ___/10
Comments: _________________________

Goal 2: ___________________________
Progress Rating: ___/10
Comments: _________________________

Goal 3: ___________________________
Progress Rating: ___/10
Comments: _________________________

5. What was your biggest achievement or breakthrough during coaching?
___________________________________
___________________________________

COACHING PROCESS
================
6. How would you rate the following aspects of your coaching experience?

Coach's communication skills:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Coach's listening skills:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Coach's ability to ask powerful questions:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Coach's support and encouragement:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Coach's expertise and knowledge:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Session structure and organization:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Follow-up between sessions:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

7. Which coaching tools or techniques were most helpful?
☐ Goal setting
☐ Action planning
☐ Accountability check-ins
☐ Reflection exercises
☐ Assessment tools
☐ Visualization techniques
☐ Challenging questions
☐ Reframing perspectives
☐ Other: _______________

PROGRAM LOGISTICS
================
8. How was the session frequency for your needs?
☐ Too frequent
☐ Just right
☐ Too infrequent

9. How was the session length?
☐ Too long
☐ Just right
☐ Too short

10. How was the program duration?
☐ Too long
☐ Just right  
☐ Too short

11. Rate the scheduling and logistics:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Comments: _________________________

VALUE AND INVESTMENT
===================
12. Do you feel the coaching provided good value for your investment?
☐ Excellent value
☐ Good value
☐ Fair value
☐ Poor value
☐ Very poor value

13. How do the results you achieved compare to your investment?
☐ Results far exceeded investment
☐ Results exceeded investment
☐ Results matched investment
☐ Results somewhat below investment
☐ Results far below investment

PERSONAL IMPACT
===============
14. How has coaching impacted different areas of your life?

Self-awareness:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

Confidence:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

Motivation:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

Goal clarity:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

Action-taking ability:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

Life satisfaction:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

15. What specific skills or insights did you gain?
___________________________________
___________________________________

16. How likely are you to continue using what you learned?
☐ Extremely likely
☐ Very likely
☐ Likely
☐ Somewhat likely
☐ Not likely

IMPROVEMENT SUGGESTIONS
======================
17. What could have made your coaching experience better?
___________________________________
___________________________________

18. What would you like to see added to the coaching program?
___________________________________
___________________________________

19. What would you like to see removed or changed?
___________________________________
___________________________________

20. Any suggestions for improvement in:

Communication:
___________________________________

Session structure:
___________________________________

Materials/resources:
___________________________________

Follow-up support:
___________________________________

TESTIMONIAL AND REFERRALS
=========================
21. Would you be willing to provide a testimonial about your experience?
☐ Yes ☐ No ☐ Maybe

If yes, please write a brief testimonial:
"_________________________________
___________________________________
___________________________________"

22. May we use your name with your testimonial?
☐ Yes, use my full name
☐ Yes, use first name and last initial
☐ Yes, but keep anonymous
☐ No

23. Would you be comfortable referring others to our coaching services?
☐ Yes, definitely
☐ Yes, probably
☐ Maybe
☐ Probably not
☐ Definitely not

FUTURE SERVICES
===============
24. Are you interested in any additional services?
☐ Additional coaching sessions
☐ Group coaching programs
☐ Workshops or seminars
☐ Online courses
☐ Maintenance/check-in sessions
☐ None at this time

25. What topics would you be interested in for future coaching?
___________________________________
___________________________________

26. What's the best way to stay in touch?
☐ Email newsletter
☐ Social media
☐ Periodic check-in calls
☐ No ongoing contact preferred

FINAL THOUGHTS
==============
27. What would you tell someone considering working with this coach?
___________________________________
___________________________________

28. Is there anything else you'd like to share about your coaching experience?
___________________________________
___________________________________

29. One word to describe your coaching experience:
___________________________________

DEMOGRAPHICS (Optional)
======================
Age Range:
☐ 18-25 ☐ 26-35 ☐ 36-45 ☐ 46-55 ☐ 56-65 ☐ 65+

How did you find out about our coaching services?
☐ Referral from friend/colleague
☐ Online search
☐ Social media
☐ Professional network
☐ Website
☐ Advertisement
☐ Other: _______________

FOLLOW-UP PERMISSION
===================
☐ Yes, you may contact me for follow-up questions about this survey
☐ Yes, you may contact me for a brief interview about my experience
☐ No, please do not contact me for follow-up

Thank you for taking the time to provide this valuable feedback. Your responses help us continuously improve our coaching services and better serve future clients.

Survey completed by: _______________
Date: _____________________________
Submission method: ☐ Email ☐ Online ☐ Phone ☐ In-person`
  },

  {
    slug: 'values-clarification-exercise',
    title: 'Values Clarification Exercise',
    description: 'Interactive assessment to help clients identify and prioritize their core values for aligned decision-making.',
    category: 'assessment-tools',
    content: `VALUES CLARIFICATION EXERCISE

INTRODUCTION
============
Your values are your core beliefs and principles that guide your decisions and behavior. When your life and goals align with your values, you experience greater satisfaction, motivation, and authenticity. This exercise will help you identify and prioritize your most important values.

CLIENT INFORMATION
==================
Name: _____________________________
Date: _____________________________
Coach: ____________________________
Session/Context: __________________

PART 1: VALUES IDENTIFICATION
=============================

INSTRUCTIONS: Read through the values list below. Circle or check all values that resonate with you. Don't overthink it - go with your initial reaction.

ACHIEVEMENT & SUCCESS
☐ Accomplishment
☐ Excellence
☐ Recognition
☐ Success
☐ Winning
☐ Mastery
☐ Competence
☐ Influence
☐ Power
☐ Leadership

RELATIONSHIPS & CONNECTION
☐ Love
☐ Family
☐ Friendship
☐ Community
☐ Belonging
☐ Intimacy
☐ Companionship
☐ Loyalty
☐ Trust
☐ Collaboration

PERSONAL GROWTH
☐ Learning
☐ Wisdom
☐ Self-improvement
☐ Consciousness
☐ Spirituality
☐ Inner peace
☐ Mindfulness
☐ Authenticity
☐ Self-awareness
☐ Personal development

CONTRIBUTION & SERVICE
☐ Service
☐ Helping others
☐ Making a difference
☐ Social justice
☐ Equality
☐ Compassion
☐ Generosity
☐ Charity
☐ Volunteering
☐ Legacy

FREEDOM & INDEPENDENCE
☐ Freedom
☐ Independence
☐ Autonomy
☐ Choice
☐ Flexibility
☐ Self-direction
☐ Liberation
☐ Non-conformity
☐ Spontaneity
☐ Adventure

SECURITY & STABILITY
☐ Security
☐ Stability
☐ Safety
☐ Consistency
☐ Predictability
☐ Order
☐ Structure
☐ Financial security
☐ Health
☐ Peace

CREATIVITY & EXPRESSION
☐ Creativity
☐ Art
☐ Beauty
☐ Innovation
☐ Originality
☐ Self-expression
☐ Imagination
☐ Inspiration
☐ Design
☐ Music

PLEASURE & ENJOYMENT
☐ Fun
☐ Pleasure
☐ Joy
☐ Happiness
☐ Humor
☐ Play
☐ Entertainment
☐ Leisure
☐ Relaxation
☐ Celebration

INTEGRITY & MORALITY
☐ Honesty
☐ Integrity
☐ Truth
☐ Justice
☐ Fairness
☐ Ethics
☐ Morality
☐ Principles
☐ Honor
☐ Responsibility

CHALLENGE & GROWTH
☐ Challenge
☐ Risk-taking
☐ Courage
☐ Resilience
☐ Perseverance
☐ Determination
☐ Growth
☐ Change
☐ Progress
☐ Achievement

OTHER VALUES
☐ Nature
☐ Environment
☐ Health
☐ Fitness
☐ Knowledge
☐ Education
☐ Tradition
☐ Culture
☐ Diversity
☐ Technology

Add any values not listed:
☐ _____________________________
☐ _____________________________
☐ _____________________________

PART 2: VALUES REFINEMENT
=========================

From your selections above, write down your top 15 values:

1. _____________________________
2. _____________________________
3. _____________________________
4. _____________________________
5. _____________________________
6. _____________________________
7. _____________________________
8. _____________________________
9. _____________________________
10. ____________________________
11. ____________________________
12. ____________________________
13. ____________________________
14. ____________________________
15. ____________________________

PART 3: VALUES PRIORITIZATION
=============================

Now narrow down to your TOP 10 values. This requires difficult choices - consider which values are absolutely essential to who you are:

1. _____________________________
2. _____________________________
3. _____________________________
4. _____________________________
5. _____________________________
6. _____________________________
7. _____________________________
8. _____________________________
9. _____________________________
10. ____________________________

PART 4: CORE VALUES SELECTION
=============================

Finally, identify your TOP 5 CORE VALUES. These are the values that define you at your deepest level:

CORE VALUE #1: _____________________
Why this is essential to you:
___________________________________
___________________________________

CORE VALUE #2: _____________________
Why this is essential to you:
___________________________________
___________________________________

CORE VALUE #3: _____________________
Why this is essential to you:
___________________________________
___________________________________

CORE VALUE #4: _____________________
Why this is essential to you:
___________________________________
___________________________________

CORE VALUE #5: _____________________
Why this is essential to you:
___________________________________
___________________________________

PART 5: VALUES DEFINITION
=========================

For each core value, write your personal definition:

VALUE 1: ___________________________
My definition:
___________________________________
___________________________________

VALUE 2: ___________________________
My definition:
___________________________________
___________________________________

VALUE 3: ___________________________
My definition:
___________________________________
___________________________________

VALUE 4: ___________________________
My definition:
___________________________________
___________________________________

VALUE 5: ___________________________
My definition:
___________________________________
___________________________________

PART 6: VALUES IN ACTION
=======================

For each core value, identify how it shows up in your life:

VALUE 1: ___________________________
How I currently honor this value:
___________________________________
___________________________________

How I could honor it more:
___________________________________
___________________________________

VALUE 2: ___________________________
How I currently honor this value:
___________________________________
___________________________________

How I could honor it more:
___________________________________
___________________________________

VALUE 3: ___________________________
How I currently honor this value:
___________________________________
___________________________________

How I could honor it more:
___________________________________
___________________________________

VALUE 4: ___________________________
How I currently honor this value:
___________________________________
___________________________________

How I could honor it more:
___________________________________
___________________________________

VALUE 5: ___________________________
How I currently honor this value:
___________________________________
___________________________________

How I could honor it more:
___________________________________
___________________________________

PART 7: VALUES CONFLICTS
========================

Sometimes values can conflict with each other. Identify any potential conflicts:

Potential Conflict 1:
Value A: ___________________________
Value B: ___________________________
How they might conflict:
___________________________________

How to balance them:
___________________________________

Potential Conflict 2:
Value A: ___________________________
Value B: ___________________________
How they might conflict:
___________________________________

How to balance them:
___________________________________

PART 8: VALUES ALIGNMENT ASSESSMENT
===================================

Rate how well your current life aligns with each core value (1-10):

VALUE 1: ___________________________ Rating: ___/10
What's working: ____________________
What needs to change: ______________

VALUE 2: ___________________________ Rating: ___/10
What's working: ____________________
What needs to change: ______________

VALUE 3: ___________________________ Rating: ___/10
What's working: ____________________
What needs to change: ______________

VALUE 4: ___________________________ Rating: ___/10
What's working: ____________________
What needs to change: ______________

VALUE 5: ___________________________ Rating: ___/10
What's working: ____________________
What needs to change: ______________

OVERALL VALUES ALIGNMENT: ___/10

PART 9: ACTION PLANNING
======================

Based on your assessment, what changes could you make to better align with your values?

IMMEDIATE ACTIONS (Next 30 days):
1. _______________________________
2. _______________________________
3. _______________________________

SHORT-TERM CHANGES (Next 3-6 months):
1. _______________________________
2. _______________________________
3. _______________________________

LONG-TERM ALIGNMENT (Next 1-2 years):
1. _______________________________
2. _______________________________
3. _______________________________

PART 10: DECISION-MAKING FRAMEWORK
==================================

Use your core values to guide future decisions:

When facing a decision, ask yourself:
• Which option best honors my core values?
• Will this choice move me toward or away from my values?
• How can I integrate my values into this situation?
• What would I do if I were living my values fully?

VALUES-BASED DECISION TEMPLATE:
Decision to make: ___________________

Option 1: ___________________________
Values alignment score (1-10): _____
How it honors my values: ____________

Option 2: ___________________________
Values alignment score (1-10): _____
How it honors my values: ____________

Recommended choice: _________________
Reason: ____________________________

REFLECTION QUESTIONS
===================

1. What surprised you about your core values?
___________________________________
___________________________________

2. How do your values influence your goals?
___________________________________
___________________________________

3. When do you feel most authentic and aligned?
___________________________________
___________________________________

4. What happens when you act against your values?
___________________________________
___________________________________

5. How might understanding your values change your life?
___________________________________
___________________________________

Remember: Values clarification is an ongoing process. Your values may evolve as you grow and change. Revisit this exercise periodically to ensure your life remains aligned with what matters most to you.`
  },

  // Add marketing templates
  {
    slug: 'email-sequence-templates',
    title: 'Email Sequence Templates',
    description: 'Ready-to-use email sequences for coaching business including welcome series, nurture campaigns, and client onboarding.',
    category: 'marketing-tools',
    content: `EMAIL SEQUENCE TEMPLATES FOR COACHES

TEMPLATE COLLECTION OVERVIEW
============================
This collection includes email sequences for:
1. Welcome Series (5 emails)
2. Nurture Campaign (7 emails)
3. Client Onboarding (4 emails)
4. Post-Session Follow-up (3 emails)
5. Program Completion (3 emails)

SEQUENCE 1: WELCOME SERIES
=========================

EMAIL 1: IMMEDIATE WELCOME
Subject: Welcome! Here's what to expect...

Hi [First Name],

Welcome to the [Your Business Name] community! I'm thrilled you've joined us.

You signed up because you're interested in [specific benefit/topic]. That tells me you're someone who values growth and is ready to take action toward your goals.

Here's what you can expect from me:
• Weekly insights on [your specialty area]
• Practical tools you can use immediately
• Real stories from clients who've achieved breakthrough results
• Exclusive invitations to workshops and programs

In tomorrow's email, I'll share the #1 mistake I see people make when [relevant topic] and how to avoid it.

Talk soon,
[Your Name]

P.S. Hit reply and let me know: What's your biggest challenge with [relevant area] right now?

EMAIL 2: COMMON MISTAKE + VALUE
Subject: The #1 mistake that's holding you back

Hi [First Name],

Yesterday I promised to share the biggest mistake I see people make when [relevant topic].

Here it is: [Describe common mistake]

I used to make this mistake too. [Brief personal story]

The good news? Once you recognize this pattern, you can start shifting it immediately.

Here's how: [Provide 2-3 actionable tips]

Try this approach this week and notice what shifts.

Tomorrow, I'll share the simple framework I use with all my clients to [achieve specific result].

[Your Name]

EMAIL 3: FRAMEWORK/METHODOLOGY
Subject: The simple framework that changes everything

Hi [First Name],

Today I want to share the framework that's helped hundreds of my clients [achieve specific result].

I call it the [Name] Method:

[Letter] - [Step 1 with brief explanation]
[Letter] - [Step 2 with brief explanation]  
[Letter] - [Step 3 with brief explanation]
[Letter] - [Step 4 with brief explanation]

Here's how it works: [Provide example or case study]

The beauty of this framework is its simplicity. You can start using it today.

Which step resonates most with you? Hit reply and let me know.

[Your Name]

EMAIL 4: SOCIAL PROOF + STORY
Subject: How [Client Name] transformed their [area] in [timeframe]

Hi [First Name],

I want to tell you about [Client Name] (used with permission).

When we first started working together, they were [describe starting point/challenges].

Sound familiar?

After [timeframe] of coaching, here's what shifted:
• [Specific result 1]
• [Specific result 2]
• [Specific result 3]

But here's what [Client Name] said was the most valuable part: [quote about mindset/approach change]

[Include brief story about the transformation process]

The key was [main insight/approach that made the difference].

You can apply this same approach: [1-2 actionable tips]

[Your Name]

EMAIL 5: SOFT PITCH + INVITATION
Subject: Ready for your own transformation?

Hi [First Name],

Over the past few days, I've shared:
• The biggest mistake that holds people back
• My proven framework for [achieving result]
• How [Client Name] created real change

Here's what I know about you: You're here because you want something to change. You're ready to invest in yourself and create the [life/career/relationship] you truly want.

If you're ready to go deeper, I have a few ways I can help:

1. FREE RESOURCES
Access my [Resource Name]: [Brief description and link]

2. GROUP COACHING
Join my next [Program Name] starting [Date]. [Brief description]
[Link to learn more]

3. PRIVATE COACHING
Work with me one-on-one. I have [number] spots opening in [timeframe].
[Link to book discovery call]

Which option feels right for you?

Here to support your journey,
[Your Name]

SEQUENCE 2: NURTURE CAMPAIGN
===========================

EMAIL 1: MINDSET SHIFT
Subject: What if the problem isn't what you think?

Hi [First Name],

Most people think [common belief about problem] is the issue.

But after working with [number] clients, I've discovered something different...

[Continue with insight that challenges conventional thinking]

EMAIL 2: COMMON OBSTACLE
Subject: Why [common goal] feels so hard

Hi [First Name],

"I know what I should be doing, but I just can't seem to [action]."

Sound familiar?

[Address common obstacle with empathy and solutions]

EMAIL 3: TOOL OR TECHNIQUE
Subject: Try this 5-minute exercise

Hi [First Name],

Want to [achieve small result] in just 5 minutes?

Here's a simple exercise I use with clients:

[Provide detailed, actionable technique]

EMAIL 4: PERSONAL STORY
Subject: My biggest failure (and what it taught me)

Hi [First Name],

I want to share something vulnerable with you...

[Tell personal story of failure/struggle and lesson learned]

EMAIL 5: CLIENT SUCCESS
Subject: "I never thought this was possible"

Hi [First Name],

Those are the words [Client Name] said to me last week...

[Share detailed client success story]

EMAIL 6: ADDRESSING OBJECTIONS
Subject: "But I don't have time/money/support..."

Hi [First Name],

I hear this a lot: [common objection]

I get it. [Acknowledge the concern with empathy]

But here's what I've learned: [Reframe the objection]

EMAIL 7: CLEAR CALL TO ACTION
Subject: Ready to take the next step?

Hi [First Name],

Over the past few weeks, I've shared [recap key topics].

If you're ready to [achieve desired outcome], let's talk.

[Clear call to action with link]

SEQUENCE 3: CLIENT ONBOARDING
============================

EMAIL 1: WELCOME + WHAT'S NEXT
Subject: Welcome to [Program Name]! Here's what happens next

Hi [First Name],

Welcome to [Program Name]! I'm so excited to work with you.

Here's what to expect: [Outline program structure]

Your first session is scheduled for [date/time]. Here's how to prepare: [Instructions]

EMAIL 2: EXPECTATION SETTING
Subject: How to get the most from our work together

Hi [First Name],

To help you get maximum value from our coaching relationship, here are my recommendations:

[List expectations and guidelines]

EMAIL 3: PREPARATION FOR FIRST SESSION
Subject: Preparing for tomorrow's session

Hi [First Name],

Looking forward to our first session tomorrow!

To make the most of our time, please:
[List specific preparation items]

EMAIL 4: POST-FIRST SESSION
Subject: Great start! Here are your action items

Hi [First Name],

Thank you for such an engaging first session!

Here's what we covered: [Summary]

Your action items for this week: [List items]

CUSTOMIZATION GUIDELINES
========================

FOR EACH EMAIL:
• Replace [bracketed placeholders] with your specific content
• Adjust tone to match your brand voice
• Add your signature and contact information
• Include unsubscribe link as required by law

TIMING RECOMMENDATIONS:
• Welcome Series: Daily for 5 days
• Nurture Campaign: Every 2-3 days
• Client Onboarding: Based on session schedule
• Post-Session: Within 24 hours of session

PERSONALIZATION TIPS:
• Use subscriber's first name
• Reference their specific interests/challenges
• Include relevant examples from your experience
• Adjust content based on subscriber source

METRICS TO TRACK:
• Open rates
• Click-through rates
• Reply rates
• Unsubscribe rates
• Conversion to consultation/program

Remember: The goal is to build relationship and trust while providing genuine value. Always prioritize helping over selling.`
  },

  {
    slug: 'social-media-content-pack',
    title: 'Social Media Content Pack',
    description: 'Ready-to-post social media content templates for coaches including post ideas, captions, and engagement strategies.',
    category: 'marketing-tools',
    content: `SOCIAL MEDIA CONTENT PACK FOR COACHES

CONTENT CALENDAR OVERVIEW
=========================
This pack includes:
• 30 post ideas with captions
• Content pillars framework
• Engagement strategies
• Platform-specific adaptations
• Visual content suggestions

CONTENT PILLARS FOR COACHES
===========================

PILLAR 1: EDUCATION/TIPS (40% of content)
- Coaching insights
- Personal development tips
- Industry knowledge
- How-to content

PILLAR 2: INSPIRATION/MOTIVATION (25% of content)
- Motivational quotes
- Success stories
- Mindset shifts
- Encouragement

PILLAR 3: PERSONAL/BEHIND-THE-SCENES (20% of content)
- Your journey
- Day in the life
- Personal insights
- Vulnerable moments

PILLAR 4: COMMUNITY/ENGAGEMENT (10% of content)
- Questions for audience
- Polls and surveys
- User-generated content
- Community highlights

PILLAR 5: BUSINESS/OFFERS (5% of content)
- Program announcements
- Free resources
- Testimonials
- Call-to-actions

30 READY-TO-USE POSTS
=====================

POST 1: TIP TUESDAY
"The difference between a goal and a dream? A deadline and a plan.

Your dreams are valid. Your goals are achievable. But they need structure.

Here's my simple goal-setting framework:
✅ Be specific about what you want
✅ Set a realistic timeline
✅ Break it into weekly actions
✅ Track your progress
✅ Celebrate small wins

What goal are you working toward right now? 👇

#GoalSetting #PersonalDevelopment #LifeCoaching #Motivation"

POST 2: MINDSET MONDAY
"Your comfort zone is a beautiful place, but nothing grows there. 🌱

I used to think staying comfortable meant staying safe. But I learned that my biggest growth happened when I felt the most uncomfortable.

That job interview that scared you? Apply anyway.
That conversation you've been avoiding? Have it.
That dream you think is too big? Start working toward it.

Discomfort is just growth wearing a disguise.

What's one uncomfortable action you could take this week?

#MindsetShift #GrowthMindset #ComfortZone #PersonalGrowth #LifeCoaching"

POST 3: WISDOM WEDNESDAY
"You can't change what happened, but you can change what happens next.

This is something I remind clients when they're stuck in regret or 'what if' thinking.

The past is data, not destiny. Use it to inform your future choices, but don't let it imprison your possibilities.

Every moment is a fresh start. Every day is a new beginning.

What story from your past are you ready to rewrite?

#LetGo #FreshStart #MindsetCoaching #PersonalDevelopment #NewBeginnings"

POST 4: FEATURE FRIDAY - CLIENT WIN
"CLIENT WIN FRIDAY! 🎉

'I never thought I could speak up in meetings, but this week I shared my idea and the team loved it!' - Sarah

Six months ago, Sarah came to coaching feeling invisible at work. She had great ideas but never felt confident enough to share them.

Through our work together, she:
✨ Identified her unique strengths
✨ Practiced assertive communication
✨ Built unshakeable self-confidence
✨ Created strategies for workplace success

Now she's being considered for a promotion!

What's possible when you believe in yourself? Everything.

#ClientWin #ConfidenceCoaching #WorkplaceSuccess #PersonalDevelopment"

POST 5: SELF-CARE SUNDAY
"Self-care isn't selfish. It's strategic.

You can't pour from an empty cup. You can't give what you don't have.

My non-negotiable self-care practices:
🧘‍♀️ 10 minutes of morning meditation
📚 Reading before bed (no screens!)
🚶‍♀️ Daily walk in nature
🛁 Sunday evening bubble bath
📝 Weekly journal reflection

These aren't luxuries. They're necessities for showing up as my best self.

What's one self-care practice you want to add to your routine?

#SelfCare #SelfCareStrategy #Mindfulness #Balance #LifeCoaching"

POST 6: MOTIVATION MONDAY
"Your past doesn't define you. Your choices do.

Every day, you have the power to choose:
• Growth over comfort
• Courage over fear
• Action over excuses
• Hope over doubt
• Love over judgment

You are not stuck. You are not broken. You are not behind.

You are exactly where you need to be to become who you're meant to be.

What choice will you make today?

#MondayMotivation #PersonalPower #ChoiceArchitecture #LifeCoaching #Empowerment"

POST 7: TIP TUESDAY - PRODUCTIVITY
"The secret to productivity isn't doing more. It's doing what matters.

My simple priority system:
1️⃣ Brain dump everything on your to-do list
2️⃣ Circle only what moves you toward your big goals
3️⃣ Pick the top 3 for today
4️⃣ Do the hardest one first
5️⃣ Celebrate completion

Quality over quantity. Impact over activity.

What's the ONE thing that would make the biggest difference in your day?

#ProductivityTips #PriorityManagement #GoalFocused #TimeManagement #LifeCoaching"

POST 8: WISDOM WEDNESDAY - BOUNDARIES
"Boundaries aren't walls. They're gates with you as the gatekeeper.

Healthy boundaries:
✅ Protect your energy
✅ Honor your values
✅ Communicate your needs
✅ Create space for what matters
✅ Allow authentic relationships

You're not responsible for managing other people's emotions about your boundaries.

You're responsible for protecting your peace.

Where in your life do you need stronger boundaries?

#Boundaries #HealthyRelationships #SelfCare #PersonalDevelopment #LifeCoaching"

POST 9: TRANSFORMATION THURSDAY
"One year ago, I was afraid to share my story. Today, I'm helping others rewrite theirs.

The journey from fear to courage isn't a straight line. It's messy, uncomfortable, and sometimes scary.

But every step matters. Every small act of bravery builds your courage muscle.

Your story isn't over. The best chapters might be yet to come.

What story are you ready to tell?

#TransformationThursday #CourageOverFear #PersonalStory #GrowthJourney #LifeCoaching"

POST 10: FEATURE FRIDAY - TOOL SHARE
"TOOL FRIDAY: The 10-10-10 Decision Framework

Struggling with a decision? Ask yourself:
• How will I feel about this in 10 minutes?
• How will I feel about this in 10 months?
• How will I feel about this in 10 years?

This helps you see beyond immediate emotions and consider long-term impact.

Sometimes what feels scary in 10 minutes becomes the best decision in 10 years.

Try it and let me know how it works for you!

#DecisionMaking #LifeCoaching #PersonalDevelopment #ToolFriday #Clarity"

[Continue with 20 more posts following similar patterns...]

PLATFORM-SPECIFIC ADAPTATIONS
=============================

INSTAGRAM:
- Use 3-5 relevant hashtags
- Include emojis for visual appeal
- Ask questions to encourage engagement
- Use Stories for behind-the-scenes content
- Share carousel posts for tips/insights

FACEBOOK:
- Longer captions work well
- Ask questions to boost engagement
- Share personal stories
- Use Facebook groups for community building
- Go live for Q&A sessions

LINKEDIN:
- Professional tone
- Industry insights
- Career-focused content
- Professional development tips
- Share articles and thought leadership

TWITTER:
- Keep it concise
- Use trending hashtags
- Share quick tips
- Engage in conversations
- Thread longer insights

VISUAL CONTENT IDEAS
===================

QUOTE GRAPHICS:
- Key insights from posts
- Client quotes (with permission)
- Motivational statements
- Questions for reflection

BEHIND-THE-SCENES:
- Workspace photos
- Reading/learning moments
- Daily routines
- Planning sessions

EDUCATIONAL GRAPHICS:
- Tip lists
- Process frameworks
- Before/after transformations
- Infographics

VIDEO CONTENT:
- Quick tips (60 seconds)
- Client success stories
- Day in the life
- Live Q&A sessions

ENGAGEMENT STRATEGIES
====================

BOOST ENGAGEMENT:
- Ask specific questions
- Share polls and surveys
- Respond to all comments
- Tag relevant people
- Use current events/trends

BUILD COMMUNITY:
- Create hashtags for your community
- Feature client wins (with permission)
- Share user-generated content
- Host live sessions
- Create Facebook groups

GROW FOLLOWING:
- Collaborate with other coaches
- Guest post on others' accounts
- Share valuable free resources
- Engage with your ideal clients' content
- Be consistent with posting

CONTENT PLANNING TEMPLATE
=========================

WEEKLY SCHEDULE:
Monday: Motivation/Mindset
Tuesday: Tips/Education
Wednesday: Wisdom/Insights
Thursday: Transformation/Stories
Friday: Features/Tools
Saturday: Self-care/Balance
Sunday: Reflection/Preparation

MONTHLY THEMES:
January: New Beginnings
February: Self-Love
March: Goal Progress
April: Spring Cleaning (mindset)
May: Growth & Change
June: Confidence Building
July: Summer Self-Care
August: Productivity & Focus
September: Back to Basics
October: Overcoming Fear
November: Gratitude & Reflection
December: Year-End Review

Remember: Authenticity beats perfection. Your audience wants to connect with the real you, not a perfect version. Share your journey, struggles, and insights genuinely.`
  },

  // Add missing templates
  {
    slug: 'weekly-check-in-form',
    title: 'Weekly Check-in Form',
    description: 'Simple yet comprehensive weekly check-in form to track client progress, challenges, and wins between sessions.',
    category: 'progress-trackers',
    content: `WEEKLY CHECK-IN FORM

CLIENT INFORMATION
==================
Name: _____________________________
Week of: ___________________________
Session Number: ____________________
Coach: ____________________________

PROGRESS REVIEW
===============
1. How would you rate your overall week?
1 ── 2 ── 3 ── 4 ── 5 ── 6 ── 7 ── 8 ── 9 ── 10
(1 = Very challenging, 10 = Excellent)

2. What were your biggest wins this week?
___________________________________
___________________________________
___________________________________

3. What challenges did you face?
___________________________________
___________________________________
___________________________________

GOAL PROGRESS
=============
4. Rate your progress on your main goal this week:
☐ Exceeded expectations
☐ Met expectations  
☐ Made some progress
☐ No progress
☐ Moved backward

5. What specific actions did you take toward your goal?
☐ Action 1: _______________________
☐ Action 2: _______________________
☐ Action 3: _______________________
☐ Other: _________________________

6. What prevented you from making more progress?
___________________________________
___________________________________

ENERGY & WELL-BEING
==================
7. How were your energy levels this week?
☐ Very high ☐ High ☐ Moderate ☐ Low ☐ Very low

8. How well did you take care of yourself?
☐ Excellent ☐ Good ☐ Average ☐ Poor ☐ Very poor

9. What self-care activities did you engage in?
☐ Exercise/Movement
☐ Healthy eating
☐ Adequate sleep
☐ Meditation/Mindfulness
☐ Social connection
☐ Hobbies/Fun activities
☐ Other: _____________

RELATIONSHIPS & COMMUNICATION
=============================
10. How were your relationships this week?
Family: ☐ Great ☐ Good ☐ Okay ☐ Challenging
Friends: ☐ Great ☐ Good ☐ Okay ☐ Challenging  
Work: ☐ Great ☐ Good ☐ Okay ☐ Challenging
Romantic: ☐ Great ☐ Good ☐ Okay ☐ Challenging ☐ N/A

11. Any relationship insights or challenges to discuss?
___________________________________
___________________________________

LEARNING & GROWTH
================
12. What did you learn about yourself this week?
___________________________________
___________________________________

13. What patterns did you notice in your behavior or thinking?
___________________________________
___________________________________

14. How did you step out of your comfort zone?
___________________________________
___________________________________

LOOKING AHEAD
=============
15. What are your top 3 priorities for next week?
1. ________________________________
2. ________________________________
3. ________________________________

16. What support do you need from your coach?
___________________________________
___________________________________

17. What would make next week a success?
___________________________________
___________________________________

GRATITUDE & REFLECTION
======================
18. What are you most grateful for this week?
___________________________________
___________________________________

19. If you could redo this week, what would you do differently?
___________________________________
___________________________________

20. Additional thoughts or items to discuss in our next session:
___________________________________
___________________________________
___________________________________

COACH NOTES SECTION
==================
(For coach use only)

Observations:
___________________________________
___________________________________

Action items for next session:
___________________________________
___________________________________

Follow-up needed:
___________________________________
___________________________________`
  },

  {
    slug: 'webinar-presentation-deck',
    title: 'Webinar Presentation Deck',
    description: 'Complete webinar presentation template for life coaches to deliver engaging and valuable online sessions.',
    category: 'marketing-tools',
    content: `WEBINAR PRESENTATION DECK TEMPLATE

WEBINAR PLANNING CHECKLIST
==========================
☐ Topic selected and validated
☐ Target audience defined
☐ Learning objectives set
☐ Content outline created
☐ Registration page live
☐ Promotional materials ready
☐ Technology tested
☐ Follow-up sequence planned

SLIDE STRUCTURE TEMPLATE
========================

SLIDE 1: TITLE SLIDE
Title: [Your Webinar Title]
Subtitle: [Brief description]
Presenter: [Your name and credentials]
Date: [Webinar date]

SLIDE 2: WELCOME & HOUSEKEEPING
"Welcome to [Webinar Title]"
• Please mute your microphone
• Questions in chat - we'll answer at the end
• This session is being recorded
• Slides will be shared afterward

SLIDE 3: WHO AM I?
• Your name and photo
• Your coaching credentials
• Brief personal story/journey
• What makes you qualified to teach this topic

SLIDE 4: AGENDA
What we'll cover today:
1. [Main point 1]
2. [Main point 2] 
3. [Main point 3]
4. [Action steps]
5. Q&A

SLIDE 5: POLL/ENGAGEMENT
Interactive question to engage audience:
"In the chat, tell us: What's your biggest challenge with [topic]?"
or
"On a scale of 1-10, how confident do you feel about [topic]?"

SLIDE 6: THE PROBLEM
• What challenge are your audience facing?
• Statistics or research to support
• Paint the picture of their pain point
• "Raise your hand if you've ever felt..."

SLIDE 7: WHY THIS MATTERS
• The cost of not solving this problem
• The opportunity they're missing
• Why now is the right time to address it

SLIDE 8: INTRODUCE THE SOLUTION
• Your methodology/framework
• Why it works
• Brief overview of what you'll teach

MAIN CONTENT SLIDES (9-20)
==========================

SLIDE 9: MAIN POINT 1 - TITLE
[Clear, compelling title]

SLIDE 10: MAIN POINT 1 - CONTENT
• Key concept explained
• Why it matters
• Common mistakes to avoid

SLIDE 11: MAIN POINT 1 - EXAMPLE
Real example or case study
• Client story (anonymized)
• Before and after
• Specific results

SLIDE 12: MAIN POINT 2 - TITLE
[Clear, compelling title]

SLIDE 13: MAIN POINT 2 - CONTENT
• Key concept explained  
• Why it matters
• Common mistakes to avoid

SLIDE 14: MAIN POINT 2 - EXAMPLE
Real example or case study
• Different client story
• Before and after
• Specific results

SLIDE 15: MAIN POINT 3 - TITLE
[Clear, compelling title]

SLIDE 16: MAIN POINT 3 - CONTENT
• Key concept explained
• Why it matters
• Common mistakes to avoid

SLIDE 17: MAIN POINT 3 - EXAMPLE
Real example or case study
• Third client story
• Before and after
• Specific results

SLIDE 18: RECAP
What we've covered:
✓ [Main point 1]
✓ [Main point 2]
✓ [Main point 3]

SLIDE 19: YOUR NEXT STEPS
3 action items they can implement immediately:
1. [Specific action]
2. [Specific action]
3. [Specific action]

SLIDE 20: OFFER/CTA (if applicable)
• What you're offering
• Who it's for
• What's included
• Special webinar bonus
• Clear next step

CLOSING SLIDES (21-25)
=====================

SLIDE 21: FREE RESOURCE
• Link to download
• QR code
• Brief description of value

SLIDE 22: CONNECT WITH ME
• Website
• Social media handles
• Email address
• LinkedIn profile

SLIDE 23: Q&A
"Let's answer your questions!"
• Keep chat open
• Address questions one by one
• Thank people for participating

SLIDE 24: THANK YOU
• Express gratitude
• Reminder about recording/slides
• Next steps
• How to stay connected

SLIDE 25: CONTACT INFO
• All contact information
• Website
• Social media
• Email for follow-up questions

WEBINAR DELIVERY TIPS
====================

BEFORE THE WEBINAR:
• Test all technology 30 minutes before
• Have water nearby
• Eliminate distractions
• Review slides one final time
• Set phone to silent

DURING THE WEBINAR:
• Start with energy and enthusiasm
• Vary your vocal tone and pace
• Pause for questions/interaction
• Watch the chat for engagement
• Stay on time with your agenda

AFTER THE WEBINAR:
• Send thank you email within 24 hours
• Include recording link and slides
• Follow up with non-attendees
• Analyze engagement metrics
• Plan your next webinar

TECHNICAL SETUP
===============

RECOMMENDED TOOLS:
• Platform: Zoom, WebEx, or GoToWebinar
• Presentation: PowerPoint or Keynote
• Backup internet connection
• External microphone
• Good lighting setup
• Professional background

SLIDE DESIGN BEST PRACTICES:
• Maximum 6 lines of text per slide
• Use large, readable fonts (24pt minimum)
• High contrast colors
• Consistent branding throughout
• Minimal animations/transitions
• Include your logo on each slide

ENGAGEMENT STRATEGIES
====================

• Start with a poll or question
• Use chat for interaction
• Share your screen clearly
• Tell stories and use examples
• Ask rhetorical questions
• Use the participants' names
• Encourage note-taking
• Provide actionable tips
• Create urgency around your offer
• End with clear next steps

Remember: The goal is to provide value first, build relationships, and position yourself as the expert solution to their problems.`
  },

  {
    slug: 'lead-magnet-templates',
    title: 'Lead Magnet Templates',
    description: 'Collection of high-converting lead magnet templates to build your email list and attract ideal coaching clients.',
    category: 'marketing-tools',
    content: `LEAD MAGNET TEMPLATES FOR COACHES

TEMPLATE COLLECTION OVERVIEW
============================
This collection includes templates for:
1. Checklists and Cheat Sheets
2. Assessments and Quizzes
3. Mini-Courses and Email Series
4. Toolkits and Resource Lists
5. Templates and Worksheets

TEMPLATE 1: ULTIMATE CHECKLIST
==============================

TITLE: "The Ultimate [Your Niche] Success Checklist"
SUBTITLE: "10 Essential Steps to [Desired Outcome]"

INTRODUCTION:
"Are you ready to [achieve specific goal]? This comprehensive checklist will guide you through the exact steps successful [target audience] follow to [desired outcome]. Print it out, keep it handy, and check off each item as you progress!"

THE CHECKLIST:
☐ Step 1: [Specific action with brief explanation]
☐ Step 2: [Specific action with brief explanation]
☐ Step 3: [Specific action with brief explanation]
☐ Step 4: [Specific action with brief explanation]
☐ Step 5: [Specific action with brief explanation]
☐ Step 6: [Specific action with brief explanation]
☐ Step 7: [Specific action with brief explanation]
☐ Step 8: [Specific action with brief explanation]
☐ Step 9: [Specific action with brief explanation]
☐ Step 10: [Specific action with brief explanation]

BONUS SECTION:
"5 Common Mistakes to Avoid"
1. [Mistake with explanation]
2. [Mistake with explanation]
3. [Mistake with explanation]
4. [Mistake with explanation]
5. [Mistake with explanation]

CALL TO ACTION:
"Ready to take your [goal] to the next level? I'd love to help you implement these strategies personally. Click here to schedule a free [X]-minute discovery call."

TEMPLATE 2: SELF-ASSESSMENT QUIZ
================================

TITLE: "What's Your [Topic] Style?"
SUBTITLE: "Discover Your Unique Approach and Get Personalized Recommendations"

INTRODUCTION:
"Take this quick 2-minute assessment to discover your unique [topic] style and receive personalized strategies that align with your natural strengths."

QUESTIONS (10-15 multiple choice):
1. When facing a challenge, you typically:
   a) Dive in headfirst and figure it out as you go
   b) Research thoroughly before taking action
   c) Seek advice from others first
   d) Create a detailed plan step by step

2. Your ideal work environment is:
   a) Fast-paced and dynamic
   b) Structured and predictable
   c) Collaborative and social
   d) Quiet and focused

[Continue with 8-13 more questions]

RESULTS BREAKDOWN:
Mostly A's: "The Action Taker"
Mostly B's: "The Strategist"  
Mostly C's: "The Collaborator"
Mostly D's: "The Planner"

[Include detailed description of each type with specific recommendations]

TEMPLATE 3: 5-DAY EMAIL MINI-COURSE
===================================

TITLE: "5 Days to [Desired Outcome]"
SUBTITLE: "A Free Email Course to Transform Your [Area of Life]"

EMAIL 1: "Welcome! Your Journey Starts Now"
• Welcome message
• What to expect over 5 days
• Day 1 lesson: [Foundation concept]
• Action step for today

EMAIL 2: "Day 2: [Key Concept]"
• Quick recap of Day 1
• Day 2 lesson: [Building block]
• Real-life example
• Action step for today

EMAIL 3: "Day 3: [Advanced Strategy]"
• Progress check-in
• Day 3 lesson: [More complex concept]
• Case study
• Action step for today

EMAIL 4: "Day 4: [Implementation Focus]"
• Addressing common challenges
• Day 4 lesson: [Practical application]
• Troubleshooting tips
• Action step for today

EMAIL 5: "Day 5: [Mastery & Next Steps]"
• Celebration of progress
• Day 5 lesson: [Advanced strategy]
• How to continue your growth
• Soft pitch for your services

TEMPLATE 4: RESOURCE TOOLKIT
=============================

TITLE: "The [Your Niche] Toolkit"
SUBTITLE: "Essential Resources, Tools, and Templates for [Target Audience]"

SECTION 1: RECOMMENDED BOOKS
• Book 1: [Title] by [Author] - Why it's valuable
• Book 2: [Title] by [Author] - Why it's valuable
• Book 3: [Title] by [Author] - Why it's valuable

SECTION 2: HELPFUL APPS & TOOLS
• Tool 1: [Name] - What it does and why it's useful
• Tool 2: [Name] - What it does and why it's useful
• Tool 3: [Name] - What it does and why it's useful

SECTION 3: FREE TEMPLATES
• Template 1: [Description and link]
• Template 2: [Description and link]
• Template 3: [Description and link]

SECTION 4: WEBSITES & BLOGS
• Resource 1: [URL] - What you'll find there
• Resource 2: [URL] - What you'll find there
• Resource 3: [URL] - What you'll find there

SECTION 5: PODCASTS TO FOLLOW
• Podcast 1: [Name] - Why it's valuable
• Podcast 2: [Name] - Why it's valuable
• Podcast 3: [Name] - Why it's valuable

TEMPLATE 5: WORKSHEET/WORKBOOK
===============================

TITLE: "[Specific Goal] Worksheet"
SUBTITLE: "A Step-by-Step Guide to [Desired Outcome]"

PART 1: CURRENT STATE ASSESSMENT
Where are you now?
1. Rate your current satisfaction with [topic]: ___/10
2. What's working well? ________________
3. What's not working? ________________
4. What's your biggest challenge? ________________

PART 2: VISION SETTING
Where do you want to be?
1. Describe your ideal [outcome]: ________________
2. How will you know when you've achieved it? ________________
3. What will be different in your life? ________________
4. Why is this important to you? ________________

PART 3: GAP ANALYSIS
What's the difference between where you are and where you want to be?
1. Skill gaps: ________________
2. Resource gaps: ________________
3. Mindset gaps: ________________
4. Support gaps: ________________

PART 4: ACTION PLANNING
What steps will you take?
Goal: ________________
Timeline: ________________

Week 1 Actions:
• ________________
• ________________
• ________________

Week 2 Actions:
• ________________
• ________________
• ________________

Week 3 Actions:
• ________________
• ________________
• ________________

Week 4 Actions:
• ________________
• ________________
• ________________

PART 5: ACCOUNTABILITY
How will you stay on track?
1. Who will support you? ________________
2. How will you measure progress? ________________
3. What might derail you? ________________
4. How will you overcome obstacles? ________________

LEAD MAGNET OPTIMIZATION TIPS
=============================

DESIGN BEST PRACTICES:
• Clean, professional layout
• Consistent branding and colors
• Easy-to-read fonts
• Plenty of white space
• Include your logo and contact info

CONTENT BEST PRACTICES:
• Solve a specific problem
• Provide immediate value
• Keep it actionable
• Make it easy to consume
• Include next steps

DELIVERY BEST PRACTICES:
• Instant download after opt-in
• Welcome email with download link
• Follow-up sequence planned
• Clear instructions for use
• Contact info for questions

PROMOTION STRATEGIES:
• Social media posts
• Blog post content upgrades
• Guest posting
• Joint ventures
• Paid advertising
• Webinar offers
• Podcast interviews
• Video content

Remember: The best lead magnets solve a real problem for your ideal client and give them a taste of the transformation you can provide. Always follow up with valuable content that builds trust and demonstrates your expertise.`
  },

  {
    slug: 'readiness-for-change-scale',
    title: 'Readiness for Change Scale',
    description: 'Assessment tool to evaluate client motivation and readiness for change, helping tailor coaching approaches accordingly.',
    category: 'assessment-tools',
    content: `READINESS FOR CHANGE SCALE

ASSESSMENT OVERVIEW
==================
This assessment helps determine a client's readiness and motivation for change. Use this tool during intake or when exploring new goals to tailor your coaching approach effectively.

CLIENT INFORMATION
==================
Name: _____________________________
Date: _____________________________
Coach: ____________________________
Area of Change Being Assessed: ______
___________________________________

INSTRUCTIONS
============
For each statement below, circle the number that best represents how you feel right now about making changes in the area identified above.

1 = Strongly Disagree
2 = Disagree  
3 = Somewhat Disagree
4 = Neutral
5 = Somewhat Agree
6 = Agree
7 = Strongly Agree

MOTIVATION TO CHANGE
===================
1. I want to make changes in this area of my life.
   1    2    3    4    5    6    7

2. Making this change is important to me personally.
   1    2    3    4    5    6    7

3. I am committed to working on this change.
   1    2    3    4    5    6    7

4. The benefits of changing outweigh the costs.
   1    2    3    4    5    6    7

5. I have clear reasons for wanting to make this change.
   1    2    3    4    5    6    7

Motivation Score: ___/35

CONFIDENCE TO CHANGE
===================
6. I believe I can successfully make this change.
   1    2    3    4    5    6    7

7. I have the skills needed to make this change.
   1    2    3    4    5    6    7

8. I can overcome obstacles that might arise.
   1    2    3    4    5    6    7

9. I have been successful at making similar changes before.
   1    2    3    4    5    6    7

10. I feel confident in my ability to maintain this change long-term.
    1    2    3    4    5    6    7

Confidence Score: ___/35

READINESS TO ACT
================
11. I am ready to start working on this change immediately.
    1    2    3    4    5    6    7

12. I have already taken some steps toward this change.
    1    2    3    4    5    6    7

13. I am willing to invest time and energy into this change.
    1    2    3    4    5    6    7

14. I am prepared to make this change a priority in my life.
    1    2    3    4    5    6    7

15. I have a clear plan for how to make this change.
    1    2    3    4    5    6    7

Readiness Score: ___/35

SUPPORT SYSTEM
==============
16. I have people in my life who will support this change.
    1    2    3    4    5    6    7

17. My environment will support me in making this change.
    1    2    3    4    5    6    7

18. I have access to the resources I need for this change.
    1    2    3    4    5    6    7

19. Important people in my life want me to make this change.
    1    2    3    4    5    6    7

20. I feel comfortable asking for help when I need it.
    1    2    3    4    5    6    7

Support Score: ___/35

TOTAL READINESS SCORE
=====================
Motivation Score: ___/35
Confidence Score: ___/35  
Readiness Score: ___/35
Support Score: ___/35

TOTAL SCORE: ___/140

SCORING INTERPRETATION
======================

TOTAL SCORE RANGES:

115-140: HIGH READINESS
You are highly motivated and ready for change. You have confidence in your abilities and strong support systems. This is an excellent time to begin your coaching journey.

Coaching Approach:
• Set challenging but achievable goals
• Move quickly into action planning
• Focus on implementation strategies
• Regular accountability check-ins

90-114: MODERATE-HIGH READINESS  
You are generally ready for change but may need to strengthen certain areas. Focus on building confidence or motivation where scores are lower.

Coaching Approach:
• Address specific concerns in lower-scoring areas
• Build on existing strengths and motivation
• Create detailed action plans with built-in support
• Regular progress reviews and adjustments

65-89: MODERATE READINESS
You have some motivation for change but may face significant barriers. Additional preparation and support may be needed before diving into action.

Coaching Approach:
• Explore ambivalence about change
• Build motivation through values exploration
• Develop support systems
• Start with small, manageable steps

40-64: LOW-MODERATE READINESS
You may have some interest in change but face significant barriers or ambivalence. Focus on exploration and preparation before action.

Coaching Approach:
• Extensive exploration of motivation for change
• Address barriers and concerns
• Build confidence through skill development
• Create strong support network before action

20-39: LOW READINESS
You may not be ready for significant change at this time. Focus on awareness building and preparation.

Coaching Approach:
• Explore what brought them to coaching
• Focus on awareness and insight building
• Address ambivalence about change
• Consider if coaching is appropriate at this time

INDIVIDUAL DIMENSION ANALYSIS
=============================

LOW MOTIVATION (1-20):
• Explore values and personal reasons for change
• Examine costs of not changing
• Connect change to important life goals
• Use motivational interviewing techniques

LOW CONFIDENCE (1-20):
• Break goals into smaller steps
• Identify past successes and strengths
• Develop specific skills needed for change
• Practice and rehearse new behaviors

LOW READINESS TO ACT (1-20):
• Explore what's preventing action
• Address practical barriers
• Create specific timelines and plans
• Start with very small steps

LOW SUPPORT (1-20):
• Identify potential sources of support
• Address environmental barriers
• Develop strategies for difficult relationships
• Consider group coaching or support groups

FOLLOW-UP QUESTIONS
==================
1. Which area scored lowest for you? Why do you think that is?
___________________________________
___________________________________

2. What would need to change for you to feel more ready?
___________________________________
___________________________________

3. What has helped you make changes successfully in the past?
___________________________________
___________________________________

4. What are your biggest concerns about making this change?
___________________________________
___________________________________

5. How important is making this change on a scale of 1-10? ___

6. How confident are you that you can make this change on a scale of 1-10? ___

COACH NOTES
===========
Assessment Date: _______________
Key Observations:
___________________________________
___________________________________

Recommended Coaching Approach:
___________________________________
___________________________________

Areas to Focus On:
___________________________________
___________________________________

Next Steps:
___________________________________
___________________________________

Follow-up Assessment Date: __________

Remember: Readiness for change can fluctuate over time. Regular reassessment can help track progress and adjust coaching approaches as needed.`
  },

  {
    slug: 'webinar-presentation-deck',
    title: 'Webinar Presentation Deck',
    description: 'Professional webinar presentation template with slides for introduction, content delivery, Q&A, and call-to-action sections.',
    category: 'marketing-tools',
    content: `WEBINAR PRESENTATION DECK TEMPLATE

SLIDE 1: TITLE SLIDE
===================
[Your Name/Company Logo]

WEBINAR TITLE: [Compelling Title]
"Unlock Your Potential: A Life Coaching Masterclass"

Date: [Date]
Time: [Time]
Host: [Your Name]

SLIDE 2: AGENDA OVERVIEW
=======================
Today's Webinar Agenda:

1. Introduction (5 min)
2. The Coaching Mindset (10 min)
3. Common Challenges & Solutions (15 min)
4. Actionable Strategies (15 min)
5. Q&A Session (10 min)
6. Next Steps (5 min)

SLIDE 3: INTRODUCTION
====================
Welcome everyone!

[Your Photo]

[Your Name]
Certified Life Coach
[Years] Years Experience
[Specialization]
[Contact Info]

What to expect today:
• Practical coaching strategies
• Real client success stories
• Actionable takeaways
• Q&A opportunity

SLIDE 4: POLL/ICEBREAKER
========================
Quick Poll:
"What's your biggest challenge right now?"

A) Achieving work-life balance
B) Building confidence
C) Setting clear goals
D) Overcoming procrastination

Share in the chat!

SLIDE 5: THE COACHING MINDSET
============================
What is Life Coaching?

Life coaching is a partnership that helps you:
• Clarify your vision and goals
• Identify limiting beliefs
• Develop action plans
• Stay accountable
• Achieve breakthrough results

"Coaching is unlocking a person's potential to maximize their own performance." - Timothy Gallwey

SLIDE 6: COMMON CHALLENGES
==========================
Top 5 Challenges My Clients Face:

1. Lack of Clarity
   "I know I want change, but I don't know where to start"

2. Fear of Failure
   "What if I try and fail?"

3. Overwhelm
   "There are so many things I should be doing"

4. Self-Doubt
   "Am I capable of achieving my dreams?"

5. Lack of Accountability
   "I need someone to keep me on track"

SLIDE 7: THE SOLUTION FRAMEWORK
==============================
My 4-Step Coaching Framework:

1. CLARITY: Define your vision
2. STRATEGY: Create your action plan
3. ACCOUNTABILITY: Stay on track
4. CELEBRATION: Honor your progress

SLIDE 8: CLIENT SUCCESS STORY
=============================
Meet Sarah* (name changed for privacy)

Challenge: Career transition at 45
Goal: Start her own coaching business

Results after 6 months:
• Launched successful coaching practice
• 15 paying clients
• $50K in revenue
• Complete mindset shift

*"Your coaching gave me the confidence to pursue my passion. Thank you!"

SLIDE 9: ACTIONABLE STRATEGY #1
==============================
Strategy 1: The Vision Exercise

Take 15 minutes to write your answers:

1. What does success look like for you?
2. How will you feel when you achieve it?
3. What will your life be like?
4. Who will be part of your journey?

💡 Pro Tip: Be specific and write in present tense!

SLIDE 10: ACTIONABLE STRATEGY #2
===============================
Strategy 2: The 90-Day Action Plan

Break your big goal into:
• 3 monthly milestones
• 12 weekly actions
• Daily habits to build

Example:
Goal: Lose 20 pounds
Month 1: Nutrition foundation
Week 1: Meal prep planning
Daily: Track water intake

SLIDE 11: ACCOUNTABILITY SYSTEMS
===============================
Why Accountability Matters:

• 65% of people who set goals don't achieve them
• 95% of people who have accountability partners succeed
• Regular check-ins increase success rate by 3x

Find your accountability partner today!

SLIDE 12: COMMON MISTAKES TO AVOID
==================================
Don't Make These Mistakes:

❌ Setting vague goals
✅ "Get fit" → "Lose 10 pounds by June 1st"

❌ Trying to do everything at once
✅ Focus on 1-2 priorities

❌ No tracking system
✅ Use a simple journal or app

❌ Giving up after setbacks
✅ Learn and adjust your approach

SLIDE 13: Q&A TRANSITION
========================
We've covered:
✅ The coaching mindset
✅ Common challenges & solutions
✅ Actionable strategies
✅ Accountability systems

Now it's your turn!

What questions do you have?

SLIDE 14: Q&A SESSION
=====================
Live Q&A Session

Please submit your questions in the chat or raise your hand!

Common Questions:
• "How do I find clients?"
• "What's the best coaching certification?"
• "How much should I charge?"
• "How do I handle difficult clients?"

SLIDE 15: NEXT STEPS
====================
Ready to Take Action?

1. Download the free resources (link below)
2. Schedule your free consultation
3. Join our coaching community
4. Start your transformation today!

SLIDE 16: OFFER/CALL TO ACTION
==============================
Special Webinar Offer:

FREE 30-Minute Coaching Session
Value: $150

To claim your session:
1. Click the link in the chat
2. Fill out the quick application
3. Schedule your session

Limited to first 10 people!

SLIDE 17: FINAL THOUGHTS
========================
Remember:

"Your life doesn't get better by chance, it gets better by change." - Jim Rohn

You have the power to create the life you deserve!

Thank you for joining today!

SLIDE 18: CONTACT INFORMATION
=============================
Stay Connected:

[Your Name]
[Phone Number]
[Email Address]
[Website]
[Social Media Handles]

Free Resources:
• Goal Setting Worksheet
• Vision Exercise Template
• Accountability Partner Guide

SLIDE 19: THANK YOU
===================
Thank you for attending!

[Your Photo/Logo]

Questions? Reach out anytime!

See you on the next webinar!`
  },

  {
    slug: 'client-feedback-survey',
    title: 'Client Feedback Survey',
    description: 'Comprehensive survey template to gather client feedback and measure coaching effectiveness.',
    category: 'business-forms',
    content: `CLIENT FEEDBACK SURVEY

SURVEY INFORMATION
==================
Client Name: _______________________
Program/Service: ___________________
Start Date: _______________________
Completion Date: __________________
Coach: ____________________________
Survey Date: ______________________

OVERALL SATISFACTION
===================
1. Overall, how satisfied are you with your coaching experience?
☐ Extremely satisfied
☐ Very satisfied  
☐ Satisfied
☐ Somewhat satisfied
☐ Not satisfied

Please explain your rating:
___________________________________
___________________________________

2. How likely are you to recommend our coaching services to others?
0 ── 1 ── 2 ── 3 ── 4 ── 5 ── 6 ── 7 ── 8 ── 9 ── 10
(0 = Not at all likely, 10 = Extremely likely)

What's the primary reason for your score?
___________________________________
___________________________________

GOAL ACHIEVEMENT
================
3. To what extent did coaching help you achieve your goals?
☐ Exceeded my expectations
☐ Met my expectations
☐ Mostly met my expectations
☐ Partially met my expectations
☐ Did not meet my expectations

4. Rate your progress in each goal area (1-10 scale):

Goal 1: ___________________________
Progress Rating: ___/10
Comments: _________________________

Goal 2: ___________________________
Progress Rating: ___/10
Comments: _________________________

Goal 3: ___________________________
Progress Rating: ___/10
Comments: _________________________

5. What was your biggest achievement or breakthrough during coaching?
___________________________________
___________________________________

COACHING PROCESS
================
6. How would you rate the following aspects of your coaching experience?

Coach's communication skills:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Coach's listening skills:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Coach's ability to ask powerful questions:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Coach's support and encouragement:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Coach's expertise and knowledge:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Session structure and organization:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Follow-up between sessions:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

7. Which coaching tools or techniques were most helpful?
☐ Goal setting
☐ Action planning
☐ Accountability check-ins
☐ Reflection exercises
☐ Assessment tools
☐ Visualization techniques
☐ Role playing
☐ Perspective taking
☐ Action planning
☐ Accountability setup
☐ Other: _______________

Tools Effectiveness:
Most Effective: ____________________
Least Effective: ___________________
Client's Preferred Approach: ________

PROGRAM LOGISTICS
================
8. How was the session frequency for your needs?
☐ Too frequent
☐ Just right
☐ Too infrequent

9. How was the session length?
☐ Too long
☐ Just right  
☐ Too short

10. How was the program duration?
☐ Too long
☐ Just right
☐ Too short

11. Rate the scheduling and logistics:
☐ Excellent ☐ Very Good ☐ Good ☐ Fair ☐ Poor

Comments: _________________________

VALUE AND INVESTMENT
===================
12. Do you feel the coaching provided good value for your investment?
☐ Excellent value
☐ Good value
☐ Fair value
☐ Poor value
☐ Very poor value

13. How do the results you achieved compare to your investment?
☐ Results far exceeded investment
☐ Results exceeded investment
☐ Results matched investment
☐ Results somewhat below investment
☐ Results far below investment

PERSONAL IMPACT
===============
14. How has coaching impacted different areas of your life?

Self-awareness:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

Confidence:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

Motivation:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

Goal clarity:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

Action-taking ability:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

Life satisfaction:
☐ Significantly improved ☐ Improved ☐ Somewhat improved ☐ No change ☐ Declined

15. What specific skills or insights did you gain?
___________________________________
___________________________________

16. How likely are you to continue using what you learned?
☐ Extremely likely
☐ Very likely
☐ Likely
☐ Somewhat likely
☐ Not likely

IMPROVEMENT SUGGESTIONS
======================
17. What could have made your coaching experience better?
___________________________________
___________________________________

18. What would you like to see added to the coaching program?
___________________________________
___________________________________

19. What would you like to see removed or changed?
___________________________________
___________________________________

20. Any suggestions for improvement in:

Communication:
___________________________________

Session structure:
___________________________________

Materials/resources:
___________________________________

Follow-up support:
___________________________________

TESTIMONIAL AND REFERRALS
=========================
21. Would you be willing to provide a testimonial about your experience?
☐ Yes ☐ No ☐ Maybe

If yes, please write a brief testimonial:
"_________________________________
___________________________________
___________________________________"

22. May we use your name with your testimonial?
☐ Yes, use my full name
☐ Yes, use first name and last initial
☐ Yes, but keep anonymous
☐ No

23. Would you be comfortable referring others to our coaching services?
☐ Yes, definitely
☐ Yes, probably
☐ Maybe
☐ Probably not
☐ Definitely not

FUTURE SERVICES
===============
24. Are you interested in any additional services?
☐ Additional coaching sessions
☐ Group coaching programs
☐ Workshops or seminars
☐ Online courses
☐ Maintenance/check-in sessions
☐ None at this time

25. What topics would you be interested in for future coaching?
___________________________________
___________________________________

26. What's the best way to stay in touch?
☐ Email newsletter
☐ Social media
☐ Periodic check-in calls
☐ No ongoing contact preferred

FINAL THOUGHTS
==============
27. What would you tell someone considering working with this coach?
___________________________________
___________________________________

28. Is there anything else you'd like to share about your coaching experience?
___________________________________
___________________________________

29. One word to describe your coaching experience:
___________________________________

DEMOGRAPHICS (Optional)
======================
Age Range:
☐ 18-25 ☐ 26-35 ☐ 36-45 ☐ 46-55 ☐ 56-65 ☐ 65+

How did you find out about our coaching services?
☐ Referral from friend/colleague
☐ Online search
☐ Social media
☐ Professional network
☐ Website
☐ Advertisement
☐ Other: _______________

FOLLOW-UP PERMISSION
===================
☐ Yes, you may contact me for follow-up questions about this survey
☐ Yes, you may contact me for a brief interview about my experience
☐ No, please do not contact me for follow-up

Thank you for taking the time to provide this valuable feedback. Your responses help us continuously improve our coaching services and better serve future clients.

Survey completed by: _______________
Date: _____________________________
Submission method: ☐ Email ☐ Online ☐ Phone ☐ In-person`
  }
  ,

  {
    slug: 'social-media-content-pack',
    title: 'Social Media Content Pack',
    description: 'Ready-to-post social media content templates for coaches including post ideas, captions, and engagement strategies.',
    category: 'marketing-tools',
    content: `SOCIAL MEDIA CONTENT PACK FOR COACHES

CONTENT CALENDAR OVERVIEW
=========================
This pack includes:
• 30 post ideas with captions
• Content pillars framework
• Engagement strategies
• Platform-specific adaptations
• Visual content suggestions

CONTENT PILLARS FOR COACHES
===========================

PILLAR 1: EDUCATION/TIPS (40% of content)
- Coaching insights
- Personal development tips
- Industry knowledge
- How-to content

PILLAR 2: INSPIRATION/MOTIVATION (25% of content)
- Motivational quotes
- Success stories
- Mindset shifts
- Encouragement

PILLAR 3: PERSONAL/BEHIND-THE-SCENES (20% of content)
- Your journey
- Day in the life
- Personal insights
- Vulnerable moments

PILLAR 4: COMMUNITY/ENGAGEMENT (10% of content)
- Questions for audience
- Polls and surveys
- User-generated content
- Community highlights

PILLAR 5: BUSINESS/OFFERS (5% of content)
- Program announcements
- Free resources
- Testimonials
- Call-to-actions

30 READY-TO-USE POSTS
=====================

POST 1: TIP TUESDAY
"The difference between a goal and a dream? A deadline and a plan.

Your dreams are valid. Your goals are achievable. But they need structure.

Here's my simple goal-setting framework:
✅ Be specific about what you want
✅ Set a realistic timeline
✅ Break it into weekly actions
✅ Track your progress
✅ Celebrate small wins

What goal are you working toward right now? ��

#GoalSetting #PersonalDevelopment #LifeCoaching #Motivation"

POST 2: MINDSET MONDAY
"Your comfort zone is a beautiful place, but nothing grows there. 🌱

I used to think staying comfortable meant staying safe. But I learned that my biggest growth happened when I felt the most uncomfortable.

That job interview that scared you? Apply anyway.
That conversation you've been avoiding? Have it.
That dream you think is too big? Start working toward it.

Discomfort is just growth wearing a disguise.

What's one uncomfortable action you could take this week?

#MindsetShift #GrowthMindset #ComfortZone #PersonalGrowth #LifeCoaching"

POST 3: WISDOM WEDNESDAY
"You can't change what happened, but you can change what happens next.

This is something I remind clients when they're stuck in regret or 'what if' thinking.

The past is data, not destiny. Use it to inform your future choices, but don't let it imprison your possibilities.

Every moment is a fresh start. Every day is a new beginning.

What story from your past are you ready to rewrite?

#LetGo #FreshStart #MindsetCoaching #PersonalDevelopment #NewBeginnings"

POST 4: FEATURE FRIDAY - CLIENT WIN
"CLIENT WIN FRIDAY! 🎉

'I never thought I could speak up in meetings, but this week I shared my idea and the team loved it!' - Sarah

Six months ago, Sarah came to coaching feeling invisible at work. She had great ideas but never felt confident enough to share them.

Through our work together, she:
✨ Identified her unique strengths
✨ Practiced assertive communication
✨ Built unshakeable self-confidence
✨ Created strategies for workplace success

Now she's being considered for a promotion!

What's possible when you believe in yourself? Everything.

#ClientWin #ConfidenceCoaching #WorkplaceSuccess #PersonalDevelopment"

POST 5: SELF-CARE SUNDAY
"Self-care isn't selfish. It's strategic.

You can't pour from an empty cup. You can't give what you don't have.

My non-negotiable self-care practices:
🧘‍♀️ 10 minutes of morning meditation
📚 Reading before bed (no screens!)
🚶‍♀️ Daily walk in nature
🛁 Sunday evening bubble bath
📝 Weekly journal reflection

These aren't luxuries. They're necessities for showing up as my best self.

What's one self-care practice you want to add to your routine?

#SelfCare #SelfCareStrategy #Mindfulness #Balance #LifeCoaching"

POST 6: MOTIVATION MONDAY
"Your past doesn't define you. Your choices do.

Every day, you have the power to choose:
• Growth over comfort
• Courage over fear
• Action over excuses
• Hope over doubt
• Love over judgment

You are not stuck. You are not broken. You are not behind.

You are exactly where you need to be to become who you're meant to be.

What choice will you make today?

#MondayMotivation #PersonalPower #ChoiceArchitecture #LifeCoaching #Empowerment"

POST 7: TIP TUESDAY - PRODUCTIVITY
"The secret to productivity isn't doing more. It's doing what matters.

My simple priority system:
1️⃣ Brain dump everything on your to-do list
2️⃣ Circle only what moves you toward your big goals
3️⃣ Pick the top 3 for today
4️⃣ Do the hardest one first
5️⃣ Celebrate completion

Quality over quantity. Impact over activity.

What's the ONE thing that would make the biggest difference in your day?

#ProductivityTips #PriorityManagement #GoalFocused #TimeManagement #LifeCoaching"

POST 8: WISDOM WEDNESDAY - BOUNDARIES
"Boundaries aren't walls. They're gates with you as the gatekeeper.

Healthy boundaries:
✅ Protect your energy
✅ Honor your values
✅ Communicate your needs
✅ Create space for what matters
✅ Allow authentic relationships

You're not responsible for managing other people's emotions about your boundaries.

You're responsible for protecting your peace.

Where in your life do you need stronger boundaries?

#Boundaries #HealthyRelationships #SelfCare #PersonalDevelopment #LifeCoaching"

POST 9: TRANSFORMATION THURSDAY
"One year ago, I was afraid to share my story. Today, I'm helping others rewrite theirs.

The journey from fear to courage isn't a straight line. It's messy, uncomfortable, and sometimes scary.

But every step matters. Every small act of bravery builds your courage muscle.

Your story isn't over. The best chapters might be yet to come.

What story are you ready to tell?

#TransformationThursday #CourageOverFear #PersonalStory #GrowthJourney #LifeCoaching"

POST 10: FEATURE FRIDAY - TOOL SHARE
"TOOL FRIDAY: The 10-10-10 Decision Framework

Struggling with a decision? Ask yourself:
• How will I feel about this in 10 minutes?
• How will I feel about this in 10 months?
• How will I feel about this in 10 years?

This helps you see beyond immediate emotions and consider long-term impact.

Sometimes what feels scary in 10 minutes becomes the best decision in 10 years.

Try it and let me know how it works for you!

#DecisionMaking #LifeCoaching #PersonalDevelopment #ToolFriday #Clarity"

PLATFORM-SPECIFIC ADAPTATIONS
=============================

INSTAGRAM:
- Use 3-5 relevant hashtags
- Include emojis for visual appeal
- Ask questions to encourage engagement
- Use Stories for behind-the-scenes content
- Share carousel posts for tips/insights

FACEBOOK:
- Longer captions work well
- Ask questions to boost engagement
- Share personal stories
- Use Facebook groups for community building
- Go live for Q&A sessions

LINKEDIN:
- Professional tone
- Industry insights
- Career-focused content
- Professional development tips
- Share articles and thought leadership

TWITTER:
- Keep it concise
- Use trending hashtags
- Share quick tips
- Engage in conversations
- Thread longer insights

VISUAL CONTENT IDEAS
===================

QUOTE GRAPHICS:
- Key insights from posts
- Client quotes (with permission)
- Motivational statements
- Questions for reflection

BEHIND-THE-SCENES:
- Workspace photos
- Reading/learning moments
- Daily routines
- Planning sessions

EDUCATIONAL GRAPHICS:
- Tip lists
- Process frameworks
- Before/after transformations
- Infographics

VIDEO CONTENT:
- Quick tips (60 seconds)
- Client success stories
- Day in the life
- Live Q&A sessions

ENGAGEMENT STRATEGIES
====================

BOOST ENGAGEMENT:
- Ask specific questions
- Share polls and surveys
- Respond to all comments
- Tag relevant people
- Use current events/trends

BUILD COMMUNITY:
- Create hashtags for your community
- Feature client wins (with permission)
- Share user-generated content
- Host live sessions
- Create Facebook groups

GROW FOLLOWING:
- Collaborate with other coaches
- Guest post on others' accounts
- Share valuable free resources
- Engage with your ideal clients' content
- Be consistent with posting

CONTENT PLANNING TEMPLATE
=========================

WEEKLY SCHEDULE:
Monday: Motivation/Mindset
Tuesday: Tips/Education
Wednesday: Wisdom/Insights
Thursday: Transformation/Stories
Friday: Features/Tools
Saturday: Self-care/Balance
Sunday: Reflection/Preparation

MONTHLY THEMES:
January: New Beginnings
February: Self-Love
March: Goal Progress
April: Spring Cleaning (mindset)
May: Growth & Change
June: Confidence Building
July: Summer Self-Care
August: Productivity & Focus
September: Back to Basics
October: Overcoming Fear
November: Gratitude & Reflection
December: Year-End Review

Remember: Authenticity beats perfection. Your audience wants to connect with the real you, not a perfect version. Share your journey, struggles, and insights genuinely.`
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

PHYSICAL WELLNESS
=================
4. How would you rate your physical fitness level?
☐ Excellent ☐ Very good ☐ Good ☐ Fair ☐ Poor

5. What type of physical activity do you currently do?
☐ None ☐ Walking ☐ Running ☐ Yoga ☐ Strength training ☐ Sports ☐ Other: __________

6. How many days per week do you exercise?
☐ 0 ☐ 1-2 ☐ 3-4 ☐ 5-6 ☐ 7

7. How many hours of sleep do you get per night?
☐ Less than 5 ☐ 5-6 ☐ 7-8 ☐ 9+

8. How would you rate your nutrition habits?
☐ Excellent ☐ Very good ☐ Good ☐ Fair ☐ Poor

9. How often do you eat processed foods or fast food?
☐ Daily ☐ Weekly ☐ Monthly ☐ Rarely ☐ Never

MENTAL & EMOTIONAL WELLNESS
===========================
10. How would you rate your stress level?
☐ Very low ☐ Low ☐ Moderate ☐ High ☐ Very high

11. What are your main sources of stress?
☐ Work ☐ Relationships ☐ Finances ☐ Health ☐ Other: __________

12. How do you typically cope with stress?
☐ Exercise ☐ Meditation ☐ Talking to friends ☐ Eating ☐ TV/Internet ☐ Other: __________

13. How would you rate your mental health?
☐ Excellent ☐ Very good ☐ Good ☐ Fair ☐ Poor

14. Have you experienced anxiety or depression?
☐ Yes ☐ No
If yes, please describe: _________________

15. How often do you feel overwhelmed?
☐ Daily ☐ Weekly ☐ Monthly ☐ Rarely ☐ Never

LIFESTYLE HABITS
================
16. How many hours per day do you spend on screens?
☐ Less than 2 ☐ 2-4 ☐ 4-6 ☐ 6-8 ☐ More than 8

17. How often do you eat meals with family/friends?
☐ Daily ☐ Weekly ☐ Monthly ☐ Rarely ☐ Never

18. How often do you engage in hobbies or recreational activities?
☐ Daily ☐ Weekly ☐ Monthly ☐ Rarely ☐ Never

19. How often do you practice mindfulness or meditation?
☐ Daily ☐ Weekly ☐ Monthly ☐ Rarely ☐ Never

20. How often do you spend time in nature?
☐ Daily ☐ Weekly ☐ Monthly ☐ Rarely ☐ Never

WELLNESS GOALS
==============
21. What are your top 3 wellness goals?
1. ________________________________
2. ________________________________
3. ________________________________

22. What has prevented you from achieving these goals in the past?
___________________________________
___________________________________

23. What wellness areas would you like to focus on?
☐ Physical fitness ☐ Nutrition ☐ Sleep ☐ Stress management ☐ Mental health ☐ Work-life balance ☐ Other: __________

24. On a scale of 1-10, how motivated are you to make changes?
1 ── 2 ── 3 ── 4 ── 5 ── 6 ── 7 ── 8 ── 9 ── 10

25. What would increase your motivation?
___________________________________
___________________________________

SUPPORT SYSTEMS
===============
26. Who can support you in your wellness journey?
☐ Spouse/Partner ☐ Family ☐ Friends ☐ Colleagues ☐ Coach ☐ Other: __________

27. What kind of support do you need?
☐ Accountability ☐ Encouragement ☐ Resources ☐ Guidance ☐ Other: __________

28. Have you worked with a wellness coach before?
☐ Yes ☐ No
If yes, what worked well? _________________
What didn't work well? _________________

BARRIERS TO WELLNESS
====================
29. What are the biggest barriers to your wellness?
☐ Time ☐ Money ☐ Motivation ☐ Knowledge ☐ Support ☐ Other: __________

30. How do you feel about asking for help?
☐ Very comfortable ☐ Somewhat comfortable ☐ Neutral ☐ Uncomfortable ☐ Very uncomfortable

COMMITMENT LEVEL
================
31. How much time can you commit to wellness activities per week?
☐ Less than 1 hour ☐ 1-2 hours ☐ 3-5 hours ☐ 5-10 hours ☐ More than 10 hours

32. What time of day works best for wellness activities?
☐ Morning ☐ Afternoon ☐ Evening ☐ Flexible

33. How often would you like to check in with your coach?
☐ Weekly ☐ Bi-weekly ☐ Monthly

ADDITIONAL INFORMATION
======================
34. Is there anything else you'd like me to know about your health or wellness?
___________________________________
___________________________________

35. What questions do you have about wellness coaching?
___________________________________
___________________________________

CONSENT AND AGREEMENT
=====================
☐ I understand that wellness coaching is not medical treatment
☐ I agree to communicate openly and honestly
☐ I commit to taking action on agreed-upon goals
☐ I understand that results depend on my commitment and effort

Client Signature: _________________ Date: _________

Coach Signature: _________________ Date: _________`
  }
]
