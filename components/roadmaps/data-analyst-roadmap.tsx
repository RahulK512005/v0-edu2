import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Clock,
  CheckCircle,
  Users,
  BookOpen,
  Briefcase,
  AlertTriangle,
  Target,
  Award,
} from "lucide-react"

export default function DataAnalystRoadmap() {
  const researchQuestions = [
    "Is there growth in the market for this role?",
    "Are people getting jobs for this role?",
    "Is it possible to transfer DA skills to other data roles in future?",
    "Is there reasonable pay for this role?",
    "Are there enough free resources for me to check my interest?",
    "Who are the big players (products) in my field of interest?",
    "Is there an active community of aspirants and professionals?",
    "What kind of problems are being solved in the industry using this field?",
    "Will this problem remain relevant in a few years to come with advancements in AI?",
    "Does this role align with my natural capabilities & interest?",
  ]

  const mindBodyPrep = [
    "Accept that you are entering a competitive field",
    "Train to use internet as your second brain",
    'Disengage from "Victim" mindset people',
    'Engage with "Hero" mindset people',
    "Create a consistent sleep cycle",
    "Eat mindfully, move regularly",
    "Read any spiritual book",
  ]

  const weeks = [
    {
      title: "Week 0: Fundamental Research + Preparing your Mind & Body",
      duration: "1 week",
      topics: ["Market research", "Suitability test", "Scam awareness", "Mindset preparation"],
      resources: [
        { name: "WEF Report", url: "https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf" },
        {
          name: "Reality Check",
          url: "https://www.linkedin.com/posts/hemvad_data-aspirants-know-this-reality-1-this-activity-7261582534826717184-9imE",
        },
        { name: "Suitability Test", url: "https://codebasics.io/find-your-match-da" },
        { name: "Scam Awareness Course", url: "https://codebasics.io/courses/scam-awareness-course" },
      ],
      assignments: [],
      insight: "Foundation week - proper research and mindset preparation is crucial",
    },
    {
      title: "Week 1-2: Excel and Business Math/Statistics + LinkedIn Profile",
      duration: "2 weeks",
      topics: [
        "Basic Formulas: SUM, AVERAGE, PRODUCT, MEAN, MEDIAN, IF, SUMIF",
        "Advanced Formulas: VLOOKUP, MATCH, INDEX",
        "Pivot Tables",
        "Basic Charting, Filters, Sorting",
        "Power Query",
        "Business Math: Arithmetic, Percentages, YoY Growth",
        "Basic Statistics: Mean, Median, Standard Deviation, Bell Curve, Percentile",
      ],
      resources: [
        { name: "Business Math using Excel", url: "https://youtu.be/npgbI8KYvN8" },
        { name: "Business Math (Hindi)", url: "https://youtu.be/vtrbOri8lag?si=DNmHRAbQCof5N_6H" },
        { name: "Google Templates Gallery", url: "https://docs.google.com/spreadsheets/u/0/?ftv=1" },
        { name: "Budget Planner", url: "https://www.vertex42.com/ExcelTemplates/budgets.html" },
        { name: "Chandoo's YouTube", url: "https://www.youtube.com/@chandoo_" },
        {
          name: "Codebasics Excel Course",
          url: "https://codebasics.io/courses/excel-mother-of-business-intelligence/",
        },
        { name: "Khan Academy", url: "https://www.khanacademy.org/" },
        {
          name: "Intro to Percentage",
          url: "https://www.khanacademy.org/math/pre-algebra/xb4832e56:percentages#xb4832e56:intro-to-percents",
        },
        { name: "Math is Fun", url: "https://www.mathsisfun.com/" },
      ],
      assignments: [
        "Create your own budget based on your monthly expenses",
        "Post the template of your budget sheet on LinkedIn and share your learning experience (Tag Codebasics, Dhaval Patel and Hemanand Vadivel with #daroadmap25)",
      ],
      motivation: { title: "Fresher BCom to Data Analyst Podcast", url: "https://bit.ly/46VtfJK" },
      insight: "Only 60 among 100 aspirants continue further. You be one among them",
    },
    {
      title: "Week 3-5: BI Tools (Power BI or Tableau) + LinkedIn Engagement + Domain Knowledge",
      duration: "3 weeks",
      topics: [
        "Connecting to different data sources",
        "Data transformation in Power Query",
        "Creating metrics using DAX & Data Modelling",
        "Creating visuals",
        "Dashboarding",
        "Publishing to Power BI Service",
        "Business Fundamentals/Domain Knowledge",
        "P&L fundamentals",
      ],
      resources: [
        { name: "Sales Insights Power BI Project", url: "https://bit.ly/3C1WKgA" },
        { name: "Hospitality Insights Project", url: "https://bit.ly/3DPBcoj" },
        { name: "Cricket T20 Project", url: "https://bit.ly/3j5I7lD" },
        { name: "HR Data Analytics Project", url: "https://bit.ly/41vxcUz" },
        { name: "Curbal YouTube", url: "https://www.youtube.com/@curbal" },
        { name: "Guy in a Cube", url: "https://www.youtube.com/@GuyInACube" },
        { name: "How to Power BI", url: "https://www.youtube.com/@HowtoPowerBI" },
        { name: "LearnWidGiggs", url: "https://www.youtube.com/@LearnWidGiggs" },
        {
          name: "Power BI Course",
          url: "https://codebasics.io/courses/power-bi-data-analysis-with-end-to-end-project",
        },
        { name: "Tableau Sales Insights", url: "http://bit.ly/3YQSBFV" },
        { name: "Hindi Tableau Sales Insights", url: "https://bit.ly/3hZXUCb" },
        { name: "DA FAQ Navigator", url: "https://codebasics.io/da-navigator" },
        { name: "Indian Data Club Discord", url: "https://discord.com/invite/SQ3rU3ddFq" },
        { name: "Indian Data Club LinkedIn", url: "https://www.linkedin.com/company/indian-data-club" },
        { name: "Investopedia", url: "https://www.investopedia.com/" },
        { name: "ThinkSchool Case Studies", url: "https://youtu.be/nnwqtZiYMxQ" },
      ],
      assignments: [
        "Do one unguided project from this list: https://bit.ly/43v4Ni2",
        "Read and understand P&L statements of at least 3 public companies",
        "Make a post on the unguided project on LinkedIn (Example: https://bit.ly/4737ckl)",
        "Make at least 1 meaningful comment every day!",
      ],
      motivation: { title: "Mom with career break to Data Analyst", url: "https://bit.ly/3MI2uRc" },
      insight: "Only 40 among 100 aspirants continue further. You be one among them",
    },
    {
      title: "Week 6-8: SQL + ATS Resume + Project Portfolio",
      duration: "3 weeks",
      topics: [
        "Basics of relational databases",
        "Basic Queries: SELECT, WHERE LIKE, DISTINCT, BETWEEN, GROUP BY, ORDER BY",
        "Advanced Queries: CTE, Subqueries, Window Functions",
        "Joins: Left, Right, Inner, Full",
        "Stored procedures and functions",
        "Presentation skills",
        "ATS Resume Preparation",
        "Portfolio Building",
      ],
      resources: [
        { name: "Free SQL Tutorial", url: "https://www.youtube.com/watch?v=Rm0xH2Vpfi0" },
        { name: "Khan Academy SQL", url: "https://bit.ly/3WFku20" },
        { name: "W3Schools SQL", url: "https://www.w3schools.com/sql/" },
        { name: "SQL Bolt", url: "https://sqlbolt.com/" },
        { name: "SQL Course", url: "https://codebasics.io/courses/sql-beginner-to-advanced-for-data-professionals" },
        { name: "Death by PowerPoint", url: "https://www.youtube.com/watch?v=Iwpi1Lm6dFo" },
        { name: "Resume Tips Video", url: "https://www.youtube.com/watch?v=buQSI8NLOMw" },
        { name: "Novypro", url: "https://www.novypro.com/" },
        { name: "Linktree", url: "https://linktr.ee/" },
        { name: "GitHub", url: "https://github.com/" },
        { name: "Portfolio Examples", url: "https://codebasics.io/portfolio/" },
      ],
      assignments: [
        "Participate in SQL resume project challenge: https://bit.ly/40x3YEf",
        "Add a link of your projects in your resume and LinkedIn (Tag Codebasics, Dhaval Patel and Hemanand Vadivel with #daroadmap25)",
      ],
      insight: "Only 30 among 100 aspirants continue further. You be one among them",
    },
    {
      title: "Week 9-10: Python and Pandas + Leveraging AI Tools + More Domain Knowledge",
      duration: "2 weeks",
      topics: [
        "Variables, Lists, Dictionaries, Tuples, If condition, for loops, functions, modules, file handling, classes and objects, exception handling",
        "Dataframe basics",
        "Reading data from csv/excel files",
        "Handling missing data",
        "Group by, Concat, Merge",
        "Project Management: Scrum, Kanban",
        "Leveraging ChatGPT",
        "Domain Knowledge",
      ],
      resources: [
        { name: "Codebasics Python Tutorials", url: "https://bit.ly/3X6CCC7" },
        { name: "Python Hindi Tutorials", url: "https://bit.ly/3vmXrgw" },
        { name: "Python Exercises", url: "https://github.com/codebasics/py/tree/master/Basics/Exercise" },
        { name: "Large Scale Data Analysis", url: "https://youtu.be/1MGG75oUK7o?si=r1rRMabmYPxOCQAh" },
        { name: "Python Course", url: "https://codebasics.io/courses/python-for-beginner-and-intermediate-learners" },
        { name: "Pandas Playlist", url: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uuASpe-1LjfG5f14Bnozjwy" },
        { name: "Kaggle Datasets", url: "https://www.kaggle.com/datasets" },
        { name: "Kaggle Notebooks", url: "https://www.kaggle.com/notebooks" },
        { name: "Scrum Training", url: "https://scrumtrainingseries.com/" },
        { name: "Kanban", url: "https://youtu.be/jf0tlbt9lx0" },
        { name: "Leveraging AI", url: "https://bit.ly/3RSsf53" },
      ],
      domainKnowledgeLinks: [
        { name: "BSNL Story", url: "#" },
        { name: "Amul's pandemic strategy", url: "#" },
        { name: "P & G data culture", url: "#" },
        { name: "Bad loans at Banks", url: "#" },
        { name: "Burger King's Strategy", url: "#" },
        { name: "AB InBev Automation", url: "#" },
        { name: "Data Career in Insurance Industry", url: "#" },
        { name: "Ikea Case Study", url: "#" },
        { name: "PwC using Analytics", url: "#" },
        { name: "Data science at health care", url: "#" },
        { name: "Dashboard in local business", url: "#" },
        { name: "Walmart Using Power BI", url: "#" },
        { name: "Data Literacy at Starbucks", url: "#" },
        { name: "Efficiency Scoring in Business", url: "#" },
        { name: "Hospitality Insights", url: "#" },
      ],
      assignments: [
        "Make a LinkedIn project post with a video presentation (Example: https://bit.ly/47WbRG9)",
        "Discord: Start solving problems – adopt problem-solving mindset",
      ],
      insight: "Only 20 among 100 aspirants continue further. You be one among them",
    },
    {
      title: "Week 11-12: Interview Prep & Practice",
      duration: "2 weeks",
      topics: [
        "SQL interview preparation",
        "Power BI and other tech interview preparation",
        "DA Projects for Interview",
        "Practice Unguided Projects",
        "Job Applications",
      ],
      resources: [
        { name: "DataLemur SQL Practice", url: "https://datalemur.com/" },
        { name: "TechTFQ YouTube", url: "https://www.youtube.com/@techTFQ" },
        { name: "LearnWidGiggs", url: "https://www.youtube.com/@LearnWidGiggs" },
        { name: "DA Projects for Interview", url: "https://youtu.be/prPBBS6wbYA?si=weY6-Gy-XHKBU_nM" },
        { name: "Cold Emailing Guide", url: "https://youtu.be/tD_sQSzq6uY" },
        { name: "LinkedIn Approach Method", url: "https://bit.ly/3tezRFi" },
      ],
      projects: [
        "Provide Ad Hoc Insights to Management",
        "Provide Insights to the Executive Team/ Telecom Domain",
        "Solve a supply chain problem/ FMCG Domain",
        "Provide Insights to Marketing/ F&B Industry",
      ],
      assignments: [
        "Participate in more resume project challenges",
        "Post your work at least once in 2 weeks on LinkedIn (Example: https://bit.ly/3WMTgGK)",
        "Make at least two posts per week",
        "Make at least two comments per week",
        "Discord server participation",
      ],
      insight: "Only 5-10 among 100 aspirants reach until here and crack a job. You be one among them",
    },
  ]

  const influencers = [
    { name: "Hemanand Vadivel", url: "https://www.linkedin.com/in/hemvad/" },
    { name: "Injae Park", url: "https://www.linkedin.com/in/injae-park/" },
    { name: "Shashank Singh", url: "https://bit.ly/4apSnv7" },
    { name: "Raghavan P", url: "https://www.linkedin.com/in/raghavan-rp/" },
    { name: "Naveen S", url: "https://www.linkedin.com/in/naveen-s6/" },
    { name: "Alex the Analyst", url: "https://www.linkedin.com/in/alex-freberg/" },
    { name: "Munna Das", url: "https://www.linkedin.com/in/munnadas/" },
    { name: "Thodupunuri Bharath", url: "https://www.linkedin.com/in/thodupunuri-bharath/" },
    { name: "Luke Barousse", url: "https://www.linkedin.com/in/luke-b/" },
    { name: "Ian K", url: "https://www.linkedin.com/in/ian-klosowicz/" },
    { name: "Hariharan S", url: "https://www.linkedin.com/in/hariharan14/" },
    { name: "Brian Julius", url: "https://www.linkedin.com/in/brianjuliusdc/" },
  ]

  const supplementaryLearning = [
    {
      title: "Microsoft Fabric",
      description:
        "Cloud-based analytics platform that brings together a suite of data management and analytics tools into a unified experience",
      url: "https://youtu.be/hwwU8V48g-4?si=B-c3SsgVoSEEyFxp",
    },
    {
      title: "Power Automate",
      description:
        "Service provided by Microsoft that helps you build workflows to automate time-consuming business tasks and processes",
      url: "https://learn.microsoft.com/en-us/training/powerplatform/power-automate",
    },
    {
      title: "PL-300 Certification",
      description:
        "Microsoft Certification for Power BI. This certification is not easily attained and requires a solid level of Power BI skills",
      url: "https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/?practice-assessment-type=certification",
      additionalUrl: "https://learn.microsoft.com/en-us/training/courses/pl-300t00",
    },
    {
      title: "Make Your Dashboard Look Unique",
      description:
        "Understanding dashboard design - transforming a simple dashboard into something stunning is entirely achievable",
      url: "https://codebasics.io/playback/how-to-transform-your-dashboards-from-simple-to-stunning",
    },
    {
      title: "Story Telling with Data",
      description:
        "One of the core responsibilities of a data analyst is to convey insights from data to non-technical stakeholders",
    },
  ]

  const finalChecklist = {
    mindBody: [
      "Accept that you are entering a competitive field",
      "Train to use internet as your second brain",
      'Disengage from "Victim" mindset people',
      'Engage with "Hero" mindset people',
      "Create a consistent sleep cycle",
      "Eat mindfully, move regularly",
      "Read any spiritual book",
    ],
    acquireSkills: [
      "Do thorough research on market condition / resources",
      "Filter the noise and learn from right resources",
      "Practice until you get it in muscle memory",
      "Understand domains and functions",
      "Do multiple unguided projects",
      "Find a learning community",
    ],
    showWork: [
      "Get your LinkedIn profile right",
      "Create a resume with 90+ ATS",
      "Build a project portfolio website",
      "Keep doing open source projects",
      "Keep posting your work on LinkedIn",
      "Participate in offline networking sessions",
      "Reach out to people on LinkedIn w/ proof of work",
      "Apply sensibly - treat each JD as a question paper",
    ],
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-blue-800">Data Analyst / Business Analyst Roadmap for All: 2025</h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          Complete roadmap to learn Data Analyst skills for a total beginner (no coding or computer science background
          needed). Includes FREE learning resources for technical skills + soft skills + Practice + Showcasing your work
          to get interview calls + Cracking Interview.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Clock className="w-3 h-3 mr-1" />
            3-6 Months
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Users className="w-3 h-3 mr-1" />4 hours daily
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            <Briefcase className="w-3 h-3 mr-1" />
            Job Ready
          </Badge>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 max-w-2xl mx-auto">
          <p className="text-blue-800 font-medium">Daily Study Plan:</p>
          <p className="text-blue-700 text-sm">
            1.5 hours Tool Skills + 1 hour Core Skills + 1.5 hours Practice = 4 hours dedication every day
          </p>
        </div>
      </div>

      {/* Research Questions Checklist */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-orange-800 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Week 0: Research Questions Checklist
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {researchQuestions.map((question, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <span className="text-orange-600 mt-1">☐</span>
                <span>{question}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mind & Body Preparation */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Preparing your Mind & Body
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {mindBodyPrep.map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <span className="text-green-600 mt-1">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Roadmap */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center">Weekly Learning Plan</h3>
        {weeks.map((week, index) => (
          <Card key={index} className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <CheckCircle className="w-5 h-5" />
                {week.title}
              </CardTitle>
              <Badge variant="outline" className="w-fit">
                {week.duration}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Topics Covered:</h4>
                <div className="space-y-1">
                  {week.topics.map((topic, i) => (
                    <div key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Learning Resources:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {week.resources.map((resource, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      size="sm"
                      className="justify-start h-auto p-2 text-left bg-transparent"
                      asChild
                    >
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2 flex-shrink-0" />
                        <span className="truncate">{resource.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              {week.domainKnowledgeLinks && (
                <div>
                  <h4 className="font-semibold mb-2">Domain Knowledge Case Studies:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {week.domainKnowledgeLinks.map((link, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        className="justify-start h-auto p-2 text-left bg-transparent"
                        asChild
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2 flex-shrink-0" />
                          <span className="truncate">{link.name}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {week.assignments && week.assignments.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Assignments:
                  </h4>
                  <ul className="space-y-1">
                    {week.assignments.map((assignment, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-blue-500 mt-1">☐</span>
                        {assignment}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {week.projects && (
                <div>
                  <h4 className="font-semibold mb-2">Practice Projects:</h4>
                  <ul className="space-y-1">
                    {week.projects.map((project, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {week.motivation && (
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <h4 className="font-semibold mb-1 text-blue-800">Motivation:</h4>
                  <Button variant="link" size="sm" className="p-0 h-auto text-blue-600" asChild>
                    <a href={week.motivation.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      {week.motivation.title}
                    </a>
                  </Button>
                </div>
              )}

              {week.insight && (
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <p className="text-sm text-orange-800 font-medium">
                    <strong>Insight:</strong> {week.insight}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Influencers to Follow */}
      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Data Analytics Influencers to Follow on LinkedIn
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Start following these prominent data analytics influencers and increase engagement by commenting
            meaningfully on their posts
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {influencers.map((influencer, index) => (
              <Button key={index} variant="outline" size="sm" className="justify-start bg-transparent" asChild>
                <a href={influencer.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  {influencer.name}
                </a>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Supplementary Learning */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800">Supplementary Learning</CardTitle>
          <p className="text-sm text-muted-foreground">
            If you have additional time, consider learning these to stand out in the job market
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supplementaryLearning.map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border">
                <h4 className="font-semibold text-purple-800 mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                {item.url && (
                  <div className="space-y-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Learn More
                      </a>
                    </Button>
                    {item.additionalUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={item.additionalUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Training Course
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bootcamp Option */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-orange-800">
            How can I access guided learning all in one place with practical job assistance?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            If you need guided learning with high quality learning resources along with practical job assistance then
            check this affordable data analyst bootcamp by codebasics. The bootcamp will help you save time compared to
            free learning resources. Also, it will provide job, interview assistance along with a virtual internship 🎯
          </p>
          <Button asChild>
            <a
              href="https://codebasics.io/bootcamps/data-analytics-bootcamp-with-practical-job-assistance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Bootcamp Details
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Tips for Effective Learning */}
      <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 border-indigo-200">
        <CardHeader>
          <CardTitle className="text-indigo-800">Tips for Effective Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Spend less time in consuming information, more time in:</h4>
              <ul className="space-y-1 ml-4">
                <li className="text-sm">• Digesting</li>
                <li className="text-sm">• Implementing</li>
                <li className="text-sm">• Sharing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Group Learning:</h4>
              <p className="text-sm text-muted-foreground">
                Use partner-and-group-finder channel on codebasics discord server for group study and hold each other
                accountable for the progress of your study plan.
              </p>
              <Button size="sm" variant="outline" className="mt-2 bg-transparent" asChild>
                <a href="https://discord.gg/r42Kbuk" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Join Discord Server
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Checklist */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Final Checklist / Concluding Actions Checklist</CardTitle>
          <p className="text-sm text-muted-foreground">
            The more boxes you tick, the closer you get to opening the door to your first data analyst job!
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Prepare your Mind & Body</h4>
              <ul className="space-y-2">
                {finalChecklist.mindBody.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Acquire Skills - Get Job Ready</h4>
              <ul className="space-y-2">
                {finalChecklist.acquireSkills.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-green-800">Show proof of work & Land a Job</h4>
              <ul className="space-y-2">
                {finalChecklist.showWork.map((item, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card className="bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-800">Other Relevant Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="outline" size="sm" asChild>
            <a href="https://bit.ly/41xuZYv" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3 mr-2" />
              How to land job as a fresher (scientific approach)
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Final Message */}
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-green-800 mb-4">All the best! 🎯</h3>
        <p className="text-muted-foreground">
          Follow this roadmap consistently, and you'll be well on your way to becoming a successful Data Analyst!
        </p>
      </div>
    </div>
  )
}
