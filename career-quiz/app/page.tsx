"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Brain, BarChart3, Cpu, Download } from "lucide-react"

interface Question {
  id: string
  question: string
  yesScores: {
    dataAnalyst: number
    dataScientist: number
    aiEngineer: number
  }
  noScores: {
    dataAnalyst: number
    dataScientist: number
    aiEngineer: number
  }
}

const questions: Question[] = [
  {
    id: "coding-experience",
    question: "Do you have any programming or coding experience?",
    yesScores: { dataAnalyst: 1, dataScientist: 3, aiEngineer: 3 },
    noScores: { dataAnalyst: 3, dataScientist: 1, aiEngineer: 0 },
  },
  {
    id: "math-comfort",
    question: "Are you comfortable with mathematics and statistics?",
    yesScores: { dataAnalyst: 2, dataScientist: 3, aiEngineer: 3 },
    noScores: { dataAnalyst: 3, dataScientist: 0, aiEngineer: 0 },
  },
  {
    id: "quick-results",
    question: "Do you want to get job-ready in 3-6 months?",
    yesScores: { dataAnalyst: 3, dataScientist: 1, aiEngineer: 0 },
    noScores: { dataAnalyst: 1, dataScientist: 3, aiEngineer: 3 },
  },
  {
    id: "business-focus",
    question: "Are you interested in solving business problems and creating reports?",
    yesScores: { dataAnalyst: 3, dataScientist: 2, aiEngineer: 1 },
    noScores: { dataAnalyst: 0, dataScientist: 2, aiEngineer: 3 },
  },
  {
    id: "excel-tools",
    question: "Do you enjoy working with Excel, dashboards, and business tools?",
    yesScores: { dataAnalyst: 3, dataScientist: 1, aiEngineer: 0 },
    noScores: { dataAnalyst: 0, dataScientist: 2, aiEngineer: 3 },
  },
  {
    id: "machine-learning",
    question: "Are you interested in building predictive models and machine learning?",
    yesScores: { dataAnalyst: 1, dataScientist: 3, aiEngineer: 3 },
    noScores: { dataAnalyst: 3, dataScientist: 0, aiEngineer: 0 },
  },
  {
    id: "ai-systems",
    question: "Do you want to build advanced AI systems and neural networks?",
    yesScores: { dataAnalyst: 0, dataScientist: 2, aiEngineer: 3 },
    noScores: { dataAnalyst: 3, dataScientist: 3, aiEngineer: 0 },
  },
  {
    id: "long-learning",
    question: "Are you willing to spend 8+ months learning complex technical concepts?",
    yesScores: { dataAnalyst: 0, dataScientist: 2, aiEngineer: 3 },
    noScores: { dataAnalyst: 3, dataScientist: 2, aiEngineer: 0 },
  },
  {
    id: "stakeholder-communication",
    question: "Do you enjoy presenting insights to business stakeholders?",
    yesScores: { dataAnalyst: 3, dataScientist: 2, aiEngineer: 1 },
    noScores: { dataAnalyst: 0, dataScientist: 1, aiEngineer: 2 },
  },
  {
    id: "research-oriented",
    question: "Are you interested in research and experimental analysis?",
    yesScores: { dataAnalyst: 1, dataScientist: 3, aiEngineer: 2 },
    noScores: { dataAnalyst: 3, dataScientist: 0, aiEngineer: 1 },
  },
]

export default function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [recommendation, setRecommendation] = useState<string>("")

  useEffect(() => {
    const savedState = localStorage.getItem("careerQuizState")
    if (savedState) {
      try {
        const {
          answers: savedAnswers,
          showResults: savedShowResults,
          recommendation: savedRecommendation,
        } = JSON.parse(savedState)
        setAnswers(savedAnswers || {})
        setShowResults(savedShowResults || false)
        setRecommendation(savedRecommendation || "")
      } catch (error) {
        console.error("Error loading saved quiz state:", error)
      }
    }
  }, [])

  useEffect(() => {
    if (showResults && recommendation) {
      localStorage.setItem(
        "careerQuizState",
        JSON.stringify({
          answers,
          showResults,
          recommendation,
        }),
      )
    }
  }, [answers, showResults, recommendation])

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const calculateRecommendation = () => {
    const scores = {
      dataAnalyst: 0,
      dataScientist: 0,
      aiEngineer: 0,
    }

    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find((q) => q.id === questionId)
      if (question) {
        if (answer === "yes") {
          scores.dataAnalyst += question.yesScores.dataAnalyst
          scores.dataScientist += question.yesScores.dataScientist
          scores.aiEngineer += question.yesScores.aiEngineer
        } else if (answer === "no") {
          scores.dataAnalyst += question.noScores.dataAnalyst
          scores.dataScientist += question.noScores.dataScientist
          scores.aiEngineer += question.noScores.aiEngineer
        }
      }
    })

    const maxScore = Math.max(scores.dataAnalyst, scores.dataScientist, scores.aiEngineer)

    if (scores.dataAnalyst === maxScore) {
      return "dataAnalyst"
    } else if (scores.dataScientist === maxScore) {
      return "dataScientist"
    } else {
      return "aiEngineer"
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const result = calculateRecommendation()
      setRecommendation(result)
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setRecommendation("")
    localStorage.removeItem("careerQuizState")
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const downloadPDF = (role: string) => {
    let filename = ""
    let filepath = ""

    if (role === "dataAnalyst") {
      filename = "Data_Analyst_Roadmap_2025.pdf"
      filepath = "/Data_Analyst_Roadmap_2025.pdf"
    } else if (role === "dataScientist") {
      filename = "Data_Scientist_Roadmap_2025.pdf"
      filepath = "/Data_Scientist_Roadmap_2025.pdf"
    } else if (role === "aiEngineer") {
      filename = "AI_Engineer_Roadmap_2025.pdf"
      filepath = "/AI_Engineer_Roadmap_2025.pdf"
    }

    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = filepath
    link.download = filename
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-3xl font-bold text-green-700">Quiz Complete!</CardTitle>
              <CardDescription className="text-lg">
                Based on your answers, here's your recommended career path:
              </CardDescription>
            </CardHeader>
          </Card>

          {recommendation === "dataAnalyst" && <DataAnalystResult />}
          {recommendation === "dataScientist" && <DataScientistResult />}
          {recommendation === "aiEngineer" && <AIEngineerResult />}

          <div className="text-center mt-8 space-y-4">
            <Button
              onClick={() => downloadPDF(recommendation)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Complete Roadmap PDF
            </Button>
            <Button onClick={resetQuiz} variant="outline" size="lg">
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-blue-800">Data Career Path Quiz</CardTitle>
            <CardDescription className="text-lg">
              Discover which data career suits you best: Data Analyst, Data Scientist, or AI Engineer
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm text-gray-600">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="mb-4" />
            <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </h2>
              <p className="text-lg text-muted-foreground">{questions[currentQuestion].question}</p>

              <RadioGroup
                value={answers[questions[currentQuestion].id] || ""}
                onValueChange={(value) => setAnswers({ ...answers, [questions[currentQuestion].id]: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <label htmlFor="yes" className="text-base cursor-pointer">
                    Yes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <label htmlFor="no" className="text-base cursor-pointer">
                    No
                  </label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-between mt-8">
              <Button onClick={prevQuestion} disabled={currentQuestion === 0} variant="outline">
                Previous
              </Button>
              <Button onClick={nextQuestion} disabled={!answers[questions[currentQuestion].id]}>
                {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DataAnalystResult() {
  return (
    <Card className="border-green-200 bg-green-50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-green-600" />
          <div>
            <CardTitle className="text-2xl text-green-800">Data Analyst / Business Analyst</CardTitle>
            <CardDescription className="text-green-700">
              Perfect for business-focused data insights and visualization
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Why This Role Fits You:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Business-focused approach with immediate practical applications</li>
            <li>Shorter learning curve (3-6 months)</li>
            <li>Strong emphasis on visualization and stakeholder communication</li>
            <li>Excel and BI tools align with your preferences</li>
            <li>High demand in the job market</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Complete Roadmap (3-6 Months):</h3>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Week 0: Foundation & Research</h4>
              <p className="text-sm text-gray-600">Market research, scam awareness, mind & body preparation</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Key Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    • WEF Report:{" "}
                    <a
                      href="https://reports.weforum.org/docs/WEF_Future_of_Jobs_Report_2025.pdf"
                      className="text-blue-600 hover:underline"
                    >
                      Future of Jobs Report 2025
                    </a>
                  </li>
                  <li>
                    • Suitability Test:{" "}
                    <a href="https://codebasics.io/find-your-match-da" className="text-blue-600 hover:underline">
                      Find Your Match
                    </a>
                  </li>
                  <li>
                    • Scam Awareness:{" "}
                    <a
                      href="https://codebasics.io/courses/scam-awareness-course"
                      className="text-blue-600 hover:underline"
                    >
                      Scam Awareness Course
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Week 1-2: Excel & Business Math</h4>
              <p className="text-sm text-gray-600">Master Excel formulas, pivot tables, business statistics</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Basic Formulas: SUM, AVERAGE, IF, VLOOKUP, INDEX, MATCH</li>
                  <li>• Pivot Tables, Power Query, Basic Charting</li>
                  <li>• Business Math: YoY Growth, Market Share, Percentages</li>
                  <li>• Statistics: Mean, Median, Standard Deviation</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://youtu.be/npgbI8KYvN8" className="text-blue-600 hover:underline">
                      Business Math using Excel
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/excel-mother-of-business-intelligence/"
                      className="text-blue-600 hover:underline"
                    >
                      Codebasics Excel Course
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://www.youtube.com/@chandoo_" className="text-blue-600 hover:underline">
                      Chandoo's YouTube Channel
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Week 3-5: Power BI/Tableau & Domain Knowledge</h4>
              <p className="text-sm text-gray-600">Master BI tools, build dashboards, understand business domains</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Power BI Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Data connections, Power Query transformations</li>
                  <li>• DAX formulas, Data Modelling</li>
                  <li>• Creating visuals, Dashboarding</li>
                  <li>• Publishing to Power BI Service</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Key Projects:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3C1WKgA" className="text-blue-600 hover:underline">
                      Sales Insights Project
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3DPBcoj" className="text-blue-600 hover:underline">
                      Hospitality Insights Project
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3j5I7lD" className="text-blue-600 hover:underline">
                      Cricket T20 Project
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">Week 6-8: SQL & Portfolio Building</h4>
              <p className="text-sm text-gray-600">Database querying, resume preparation, project portfolio</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>SQL Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Basic Queries: SELECT, WHERE, GROUP BY, ORDER BY</li>
                  <li>• Advanced: CTE, Subqueries, Window Functions</li>
                  <li>• Joins: Left, Right, Inner, Full</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Portfolio Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://novypro.com" className="text-blue-600 hover:underline">
                      NovyPro
                    </a>{" "}
                    for Power BI projects
                  </li>
                  <li>
                    •{" "}
                    <a href="https://github.com" className="text-blue-600 hover:underline">
                      GitHub
                    </a>{" "}
                    for code projects
                  </li>
                  <li>
                    •{" "}
                    <a href="https://codebasics.io/portfolio/" className="text-blue-600 hover:underline">
                      Portfolio Examples
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold">Week 9-10: Python & Advanced Skills</h4>
              <p className="text-sm text-gray-600">Python basics, Pandas, AI tools, domain expertise</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Python Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Variables, Lists, Dictionaries, Functions</li>
                  <li>• Pandas: DataFrames, Data cleaning, Group by</li>
                  <li>• File handling, Exception handling</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3X6CCC7" className="text-blue-600 hover:underline">
                      Codebasics Python Tutorials
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3RSsf53" className="text-blue-600 hover:underline">
                      Leveraging ChatGPT for Analysis
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold">Week 11-12: Interview Prep & Job Applications</h4>
              <p className="text-sm text-gray-600">Technical interviews, project presentations, job search</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Interview Preparation:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    • SQL practice:{" "}
                    <a href="https://datalemur.com/" className="text-blue-600 hover:underline">
                      DataLemur
                    </a>
                  </li>
                  <li>
                    • Power BI interviews:{" "}
                    <a href="https://www.youtube.com/@LearnWidGiggs" className="text-blue-600 hover:underline">
                      LearnWidGiggs
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://youtu.be/prPBBS6wbYA" className="text-blue-600 hover:underline">
                      6 Solid DA Projects for Interviews
                    </a>
                  </li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Job Application Strategy:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://youtu.be/tD_sQSzq6uY" className="text-blue-600 hover:underline">
                      Cold Emailing Guide
                    </a>
                  </li>
                  <li>• LinkedIn networking and referrals</li>
                  <li>• Resume project challenges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Supplementary Learning (Optional):</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              • <strong>Microsoft Fabric:</strong>{" "}
              <a href="https://youtu.be/hwwU8V48g-4" className="text-blue-600 hover:underline">
                Cloud analytics platform
              </a>
            </li>
            <li>
              • <strong>Power Automate:</strong>{" "}
              <a
                href="https://learn.microsoft.com/en-us/training/powerplatform/power-automate"
                className="text-blue-600 hover:underline"
              >
                Workflow automation
              </a>
            </li>
            <li>
              • <strong>PL-300 Certificate:</strong>{" "}
              <a
                href="https://learn.microsoft.com/en-us/credentials/certifications/data-analyst-associate/"
                className="text-blue-600 hover:underline"
              >
                Microsoft Power BI certification
              </a>
            </li>
            <li>
              • <strong>Dashboard Design:</strong>{" "}
              <a
                href="https://codebasics.io/playbook/how-to-transform-your-dashboards-from-simple-to-stunning"
                className="text-blue-600 hover:underline"
              >
                Transform dashboards
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Success Checklist:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Mind & Body Preparation:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>□ Accept competitive field reality</li>
                <li>□ Use internet as second brain</li>
                <li>□ Engage with positive mindset people</li>
                <li>□ Create consistent sleep cycle</li>
                <li>□ Read spiritual/motivational books</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Skill Building:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>□ Master Excel and Power BI</li>
                <li>□ Complete SQL projects</li>
                <li>□ Build project portfolio</li>
                <li>□ Understand business domains</li>
                <li>□ Practice presentation skills</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Show Work & Network:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>□ Optimize LinkedIn profile</li>
                <li>□ Create ATS-friendly resume</li>
                <li>□ Post projects regularly</li>
                <li>□ Engage with DA community</li>
                <li>□ Participate in challenges</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Job Search:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>□ Apply strategically</li>
                <li>□ Network on LinkedIn</li>
                <li>□ Prepare for interviews</li>
                <li>□ Follow up professionally</li>
                <li>□ Keep learning continuously</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-lg mb-2 text-blue-800">Guided Learning Option:</h3>
          <p className="text-sm text-blue-700 mb-2">
            For structured learning with job assistance, consider the
            <a
              href="https://codebasics.io/bootcamps/data-analytics-bootcamp-with-practical-job-assistance"
              className="text-blue-600 hover:underline font-medium"
            >
              {" "}
              Codebasics Data Analytics Bootcamp
            </a>
          </p>
          <p className="text-xs text-blue-600">
            Includes virtual internship, interview preparation, and direct employer connections.
          </p>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-lg mb-2 text-yellow-800">Key Success Insights:</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Only 60% continue after Week 2 - Stay committed!</li>
            <li>• Only 40% continue after Week 5 - You can be in the top group!</li>
            <li>• Only 30% continue after Week 8 - Persistence pays off!</li>
            <li>• Only 5-10% complete the full journey and get jobs - Be one of them!</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function DataScientistResult() {
  return (
    <Card className="border-blue-200 bg-blue-50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Brain className="h-8 w-8 text-blue-600" />
          <div>
            <CardTitle className="text-2xl text-blue-800">Data Scientist</CardTitle>
            <CardDescription className="text-blue-700">
              Perfect for research-oriented analysis and predictive modeling
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Why This Role Fits You:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Strong balance of technical and analytical skills</li>
            <li>Research-oriented approach with statistical rigor</li>
            <li>Machine learning and predictive modeling focus</li>
            <li>6-month comprehensive learning path</li>
            <li>High growth potential and versatility</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Complete Roadmap (6 Months):</h3>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold">Week 0: Research & Scam Protection</h4>
              <p className="text-sm text-gray-600">Market research, mentor verification, scam awareness</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Critical Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/4at9Jaw" className="text-blue-600 hover:underline">
                      Market Reality Check 1
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/477IOOs" className="text-blue-600 hover:underline">
                      Market Reality Check 2
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/scam-awareness-course"
                      className="text-blue-600 hover:underline"
                    >
                      Scam Awareness Course
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Week 1-2: Python Fundamentals</h4>
              <p className="text-sm text-gray-600">Master Python programming basics</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Variables, Numbers, Strings, Lists, Dictionaries</li>
                  <li>• If conditions, for loops, Functions</li>
                  <li>• Modules, File handling, Exception handling</li>
                  <li>• Classes and Objects</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3X6CCC7" className="text-blue-600 hover:underline">
                      Codebasics Python Tutorials (first 16)
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3vmXrgw" className="text-blue-600 hover:underline">
                      Hindi Python Tutorials
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/python-for-beginner-and-intermediate-learners"
                      className="text-blue-600 hover:underline"
                    >
                      Python Course (Paid)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Week 3: NumPy, Pandas, Visualization</h4>
              <p className="text-sm text-gray-600">Data manipulation and visualization libraries</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Libraries:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    • NumPy:{" "}
                    <a href="https://bit.ly/3GTppa8" className="text-blue-600 hover:underline">
                      NumPy Playlist
                    </a>
                  </li>
                  <li>• Pandas, Matplotlib, Seaborn</li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/math-and-statistics-for-data-science"
                      className="text-blue-600 hover:underline"
                    >
                      Chapter 5 (Free)
                    </a>
                  </li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Networking:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    • Follow:{" "}
                    <a href="https://www.linkedin.com/in/dalianaliu/" className="text-blue-600 hover:underline">
                      Daliana Liu
                    </a>
                    ,{" "}
                    <a href="https://www.linkedin.com/in/ntnaggarwal/" className="text-blue-600 hover:underline">
                      Nitin Aggarwal
                    </a>
                  </li>
                  <li>
                    • Join:{" "}
                    <a href="https://discord.gg/r42Kbuk" className="text-blue-600 hover:underline">
                      Codebasics Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">Week 4-7: Statistics & Math for Data Science</h4>
              <p className="text-sm text-gray-600">Essential mathematical foundations</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Core Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Descriptive vs Inferential Statistics</li>
                  <li>• Measures of Central Tendency & Dispersion</li>
                  <li>• Probability, Distributions, Normal Distribution</li>
                  <li>• Correlation, Covariance, Central Limit Theorem</li>
                  <li>• Hypothesis Testing, p-values, Confidence Intervals</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Learning Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a
                      href="https://www.khanacademy.org/math/statistics-probability"
                      className="text-blue-600 hover:underline"
                    >
                      Khan Academy Statistics
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://www.youtube.com/@statquest" className="text-blue-600 hover:underline">
                      StatQuest YouTube
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3QrSXis" className="text-blue-600 hover:underline">
                      Free Statistics Playlist
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/math-and-statistics-for-data-science"
                      className="text-blue-600 hover:underline"
                    >
                      Math & Stats Course (Paid)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-semibold">Week 8: Exploratory Data Analysis (EDA)</h4>
              <p className="text-sm text-gray-600">Hands-on data exploration and analysis</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Practice:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a
                      href="https://www.kaggle.com/code?searchQuery=exploratory+data+analysis"
                      className="text-blue-600 hover:underline"
                    >
                      Kaggle EDA Notebooks
                    </a>
                  </li>
                  <li>• Practice with 3+ datasets</li>
                  <li>
                    • Example:{" "}
                    <a
                      href="https://www.kaggle.com/datasets/rishabhkarn/ipl-auction-2023/data"
                      className="text-blue-600 hover:underline"
                    >
                      IPL Auction Dataset
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold">Week 9-10: SQL for Data Science</h4>
              <p className="text-sm text-gray-600">Database querying and data extraction</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Basic Queries: SELECT, WHERE, GROUP BY, ORDER BY</li>
                  <li>• Advanced: CTE, Subqueries, Window Functions</li>
                  <li>• Joins: Left, Right, Inner, Full</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3WFku20" className="text-blue-600 hover:underline">
                      Khan Academy SQL
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://sqlbolt.com/" className="text-blue-600 hover:underline">
                      SQL Bolt
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/sql-beginner-to-advanced-for-data-professionals"
                      className="text-blue-600 hover:underline"
                    >
                      SQL Course (Paid)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold">Week 11-15: Machine Learning</h4>
              <p className="text-sm text-gray-600">Core ML algorithms and model building</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Preprocessing:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Handling NA values, outlier treatment</li>
                  <li>• One-hot encoding, feature engineering</li>
                  <li>• Train-test split, cross-validation</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Algorithms:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Linear/Logistic Regression, Decision Trees</li>
                  <li>• Random Forest, XGBoost</li>
                  <li>• K-means, PCA, Model Evaluation</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3io5qqX" className="text-blue-600 hover:underline">
                      ML Playlist (2M+ views)
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/machine-learning-for-data-science-beginners-to-advanced"
                      className="text-blue-600 hover:underline"
                    >
                      Master ML Course (Paid)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4">
              <h4 className="font-semibold">Week 16-18: ML Projects & Deployment</h4>
              <p className="text-sm text-gray-600">End-to-end project implementation</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Projects:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3ivycWr" className="text-blue-600 hover:underline">
                      Bangalore Property Price Prediction
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3ioaMSU" className="text-blue-600 hover:underline">
                      Sports Celebrity Classification
                    </a>
                  </li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Skills Covered:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Data cleaning, feature engineering</li>
                  <li>• Model building, hyperparameter tuning</li>
                  <li>• Flask/FastAPI web backend</li>
                  <li>• AWS/Azure deployment</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-violet-500 pl-4">
              <h4 className="font-semibold">Week 19-21: Deep Learning</h4>
              <p className="text-sm text-gray-600">Neural networks and advanced architectures</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Neural Networks, Forward/Back Propagation</li>
                  <li>• CNN for Computer Vision</li>
                  <li>• RNN, LSTM for Sequences</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3vOZ3zV" className="text-blue-600 hover:underline">
                      Deep Learning (TensorFlow)
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3TzDbWp" className="text-blue-600 hover:underline">
                      Deep Learning (PyTorch)
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3QzkVJi" className="text-blue-600 hover:underline">
                      Potato Disease Classification
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-semibold">Week 22-24: Specialization (NLP or Computer Vision)</h4>
              <p className="text-sm text-gray-600">Choose your specialization track</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>NLP Track:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Regex, Text preprocessing</li>
                  <li>• TF-IDF, Word2Vec, Embeddings</li>
                  <li>• Text Classification, Naive Bayes</li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3XnjfEZ" className="text-blue-600 hover:underline">
                      NLP Playlist
                    </a>
                  </li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Computer Vision Track:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Image processing with OpenCV</li>
                  <li>• CNN architectures</li>
                  <li>• Data augmentation techniques</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold">Week 25+: Advanced Projects & Job Search</h4>
              <p className="text-sm text-gray-600">Portfolio building and career advancement</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Focus Areas:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Advanced project implementations</li>
                  <li>• LinkedIn brand building</li>
                  <li>• Kaggle competitions</li>
                  <li>• Open source contributions</li>
                  <li>• Job applications and interviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Key Motivational Stories:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              •{" "}
              <a href="https://bit.ly/47cA8GU" className="text-blue-600 hover:underline">
                Physics to Data Scientist Transition
              </a>
            </li>
            <li>
              •{" "}
              <a href="https://bit.ly/3REsqiL" className="text-blue-600 hover:underline">
                Petroleum Engineer to Data Scientist
              </a>
            </li>
            <li>
              •{" "}
              <a href="https://bit.ly/3RFVruy" className="text-blue-600 hover:underline">
                How Kaggle Helped Become ML Engineer
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Frequently Asked Questions:</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-sm">Do I need to learn cloud tech (AWS, Azure)?</h4>
              <p className="text-xs text-gray-600">
                As a fresher, it's okay to not know cloud platforms initially. Once you gain experience, learning at
                least one cloud ML platform (like Amazon SageMaker) becomes valuable.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Do I need to learn Gen AI?</h4>
              <p className="text-xs text-gray-600">
                Gen AI is trending but most junior positions don't require it. If you have extra time, learn{" "}
                <a href="https://bit.ly/3RYpxuw" className="text-blue-600 hover:underline">
                  LangChain for GenAI apps
                </a>
                .
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Should I learn BI tools (Power BI/Tableau)?</h4>
              <p className="text-xs text-gray-600">
                BI tools are mainly for BI developers and data analysts. As a data scientist, you'll typically work with
                BI teams when dashboards are needed.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-lg mb-2 text-blue-800">Guided Learning Option:</h3>
          <p className="text-sm text-blue-700 mb-2">
            For comprehensive guided learning with job assistance, consider the
            <a
              href="https://codebasics.io/bootcamps/ai-data-science-bootcamp-with-virtual-internship"
              className="text-blue-600 hover:underline font-medium"
            >
              {" "}
              Data Science & AI Bootcamp
            </a>
          </p>
          <p className="text-xs text-blue-600">
            Includes virtual internship, interview preparation, and structured learning path.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-lg mb-2 text-green-800">Effective Learning Tips:</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Spend less time consuming, more time digesting, implementing, sharing</li>
            <li>
              • Join study groups via{" "}
              <a href="https://discord.gg/r42Kbuk" className="text-green-600 hover:underline">
                Codebasics Discord
              </a>
            </li>
            <li>• Focus on digesting concepts thoroughly</li>
            <li>• Build projects while learning theory</li>
            <li>• Engage with the data science community</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

function AIEngineerResult() {
  return (
    <Card className="border-purple-200 bg-purple-50">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Cpu className="h-8 w-8 text-purple-600" />
          <div>
            <CardTitle className="text-2xl text-purple-800">AI Engineer (ML Engineer)</CardTitle>
            <CardDescription className="text-purple-700">
              Perfect for building and deploying AI systems and applications
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Why This Role Fits You:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Strong technical foundation with coding and math skills</li>
            <li>Combines Data Science + Software Engineering</li>
            <li>Focus on building production-ready AI systems</li>
            <li>8-month comprehensive learning journey</li>
            <li>Highest growth potential in AI/ML field</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Complete Roadmap (8 Months):</h3>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold">Week 0: Research & Scam Protection</h4>
              <p className="text-sm text-gray-600">Critical market research and scam awareness</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Essential Reading:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/4at9Jaw" className="text-blue-600 hover:underline">
                      Market Reality Check 1
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/477IOOs" className="text-blue-600 hover:underline">
                      Market Reality Check 2
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3GPD7dp" className="text-blue-600 hover:underline">
                      Market Reality Check 3
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/scam-awareness-course"
                      className="text-blue-600 hover:underline"
                    >
                      Scam Awareness Course
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Week 1-2: Computer Science Fundamentals</h4>
              <p className="text-sm text-gray-600">Essential CS concepts and foundations</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Data representation: Bits, Bytes, Binary systems</li>
                  <li>• Computer networks, IP addresses, Internet protocols</li>
                  <li>• UDP, TCP, HTTP, World Wide Web</li>
                  <li>• Programming basics, Algorithm fundamentals</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resource:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/42DUXtW" className="text-blue-600 hover:underline">
                      Khan Academy CS Course
                    </a>{" "}
                    (First 4 sections)
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Week 3-4: Python Fundamentals</h4>
              <p className="text-sm text-gray-600">Master Python programming from basics</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Core Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Variables, Numbers, Strings, Lists, Dictionaries</li>
                  <li>• If conditions, for loops, Functions, Lambda</li>
                  <li>• Modules, File handling, Exception handling</li>
                  <li>• Classes, Objects, OOP concepts</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3X6CCC7" className="text-blue-600 hover:underline">
                      Codebasics Python (first 16)
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3uqUgaZ" className="text-blue-600 hover:underline">
                      Corey's Python Tutorials
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/python-for-beginner-and-intermediate-learners"
                      className="text-blue-600 hover:underline"
                    >
                      Python Course (Paid)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold">Week 5-6: Data Structures & Algorithms</h4>
              <p className="text-sm text-gray-600">Essential DSA for technical interviews</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Big O notation, Arrays, Linked Lists</li>
                  <li>• Hash Tables, Stacks, Queues</li>
                  <li>• Trees, Graphs, Recursion</li>
                  <li>• Binary search, Sorting algorithms</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resource:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3uiW2Lf" className="text-blue-600 hover:underline">
                      DSA YouTube Playlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">Week 7-8: Advanced Python</h4>
              <p className="text-sm text-gray-600">Advanced Python concepts for production code</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Advanced Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Inheritance, Generators, Iterators</li>
                  <li>• List Comprehensions, Decorators</li>
                  <li>• Multithreading, Multiprocessing</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Networking & Community:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    • Follow AI influencers:{" "}
                    <a href="https://www.linkedin.com/in/dalianaliu/" className="text-blue-600 hover:underline">
                      Daliana Liu
                    </a>
                    ,{" "}
                    <a href="https://www.linkedin.com/in/stevenouri/" className="text-blue-600 hover:underline">
                      Steve Nouri
                    </a>
                  </li>
                  <li>
                    • Join:{" "}
                    <a href="https://discord.gg/r42Kbuk" className="text-blue-600 hover:underline">
                      Codebasics Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-teal-500 pl-4">
              <h4 className="font-semibold">Week 9: Version Control (Git/GitHub)</h4>
              <p className="text-sm text-gray-600">Essential for collaborative development</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Git basics: add, commit, push</li>
                  <li>• Branches, merging, pull requests</li>
                  <li>• GitHub workflows</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3SECQQ7" className="text-blue-600 hover:underline">
                      Codebasics Git Playlist
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3T0Yrmb" className="text-blue-600 hover:underline">
                      Corey's Git Playlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold">Week 10-11: SQL for AI Engineers</h4>
              <p className="text-sm text-gray-600">Database management and data extraction</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Basic to Advanced Queries</li>
                  <li>• Database creation, indexes, stored procedures</li>
                  <li>• Performance optimization</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3WFku20" className="text-blue-600 hover:underline">
                      Khan Academy SQL
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://youtu.be/Rm0xH2Vpfi0" className="text-blue-600 hover:underline">
                      Comprehensive SQL Tutorial
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/sql-beginner-to-advanced-for-data-professionals"
                      className="text-blue-600 hover:underline"
                    >
                      SQL Course (Paid)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold">Week 12: NumPy, Pandas, Visualization</h4>
              <p className="text-sm text-gray-600">Data manipulation libraries</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Libraries:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3GTppa8" className="text-blue-600 hover:underline">
                      NumPy Playlist
                    </a>
                  </li>
                  <li>• Pandas, Matplotlib, Seaborn</li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/math-and-statistics-for-data-science"
                      className="text-blue-600 hover:underline"
                    >
                      Chapter 5 (Free)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4">
              <h4 className="font-semibold">Week 13-16: Math & Statistics for AI</h4>
              <p className="text-sm text-gray-600">Advanced mathematical foundations</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Core Mathematics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Linear Algebra: Vectors, Matrices, Eigenvalues</li>
                  <li>• Calculus: Integral and Differential calculus</li>
                  <li>• Statistics: All DS topics + advanced concepts</li>
                  <li>• Probability distributions and hypothesis testing</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a
                      href="https://www.khanacademy.org/math/statistics-probability"
                      className="text-blue-600 hover:underline"
                    >
                      Khan Academy
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://www.youtube.com/@3blue1brown" className="text-blue-600 hover:underline">
                      3Blue1Brown
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/math-and-statistics-for-data-science"
                      className="text-blue-600 hover:underline"
                    >
                      Math & Stats Course (Paid)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <h4 className="font-semibold">Week 17: Exploratory Data Analysis</h4>
              <p className="text-sm text-gray-600">Hands-on data exploration practice</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Practice:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a
                      href="https://www.kaggle.com/code?searchQuery=exploratory+data+analysis"
                      className="text-blue-600 hover:underline"
                    >
                      Kaggle EDA Notebooks
                    </a>
                  </li>
                  <li>• Work on 2+ additional datasets</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-violet-500 pl-4">
              <h4 className="font-semibold">Week 18-21: Machine Learning Mastery</h4>
              <p className="text-sm text-gray-600">Comprehensive ML algorithm understanding</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>All ML Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Preprocessing, Feature Engineering</li>
                  <li>• Supervised: Regression, Classification</li>
                  <li>• Unsupervised: Clustering, PCA</li>
                  <li>• Model evaluation and hyperparameter tuning</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3io5qqX" className="text-blue-600 hover:underline">
                      ML Playlist (2M+ views)
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a
                      href="https://codebasics.io/courses/machine-learning-for-data-science-beginners-to-advanced"
                      className="text-blue-600 hover:underline"
                    >
                      Master ML Course (Paid)
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-rose-500 pl-4">
              <h4 className="font-semibold">Week 22: MLOps Fundamentals</h4>
              <p className="text-sm text-gray-600">Production deployment and DevOps</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• FastAPI for Python server development</li>
                  <li>• CI/CD pipelines, Docker, Kubernetes</li>
                  <li>• Cloud platforms (AWS, Azure)</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/497p6Ex" className="text-blue-600 hover:underline">
                      FastAPI Tutorial
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3uCNpeE" className="text-blue-600 hover:underline">
                      Docker Tutorial
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-semibold">Week 23-24: ML Projects with Deployment</h4>
              <p className="text-sm text-gray-600">End-to-end project implementation</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Projects:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3ivycWr" className="text-blue-600 hover:underline">
                      Property Price Prediction
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3ioaMSU" className="text-blue-600 hover:underline">
                      Image Classification
                    </a>
                  </li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Modifications:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Use FastAPI instead of Flask</li>
                  <li>• Choose your own Kaggle datasets</li>
                  <li>• Deploy to AWS/Azure</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-lime-500 pl-4">
              <h4 className="font-semibold">Week 25-27: Deep Learning</h4>
              <p className="text-sm text-gray-600">Neural networks and advanced architectures</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Neural Networks, Forward/Back Propagation</li>
                  <li>• CNN for Computer Vision</li>
                  <li>• RNN, LSTM for Sequences</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3vOZ3zV" className="text-blue-600 hover:underline">
                      Deep Learning (TensorFlow)
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3TzDbWp" className="text-blue-600 hover:underline">
                      Deep Learning (PyTorch)
                    </a>
                  </li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3QzkVJi" className="text-blue-600 hover:underline">
                      Potato Disease Classification
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-sky-500 pl-4">
              <h4 className="font-semibold">Week 28-30: Specialization Track</h4>
              <p className="text-sm text-gray-600">Choose NLP or Computer Vision + GenAI</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>NLP Track:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• Text preprocessing, TF-IDF, Word2Vec</li>
                  <li>• Text classification, NLP libraries</li>
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3XnjfEZ" className="text-blue-600 hover:underline">
                      NLP Playlist
                    </a>
                  </li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Computer Vision Track:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• OpenCV, Image processing</li>
                  <li>• Advanced CNN architectures</li>
                  <li>• Data augmentation techniques</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-fuchsia-500 pl-4">
              <h4 className="font-semibold">Week 31-32: LLM & LangChain</h4>
              <p className="text-sm text-gray-600">LLM & Langchain</p>
              <div className="mt-2">
                <p className="text-sm">
                  <strong>Topics:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>• What is LLM, Vector database, Embeddings?</li>
                  <li>• RAG (Retrieval Augmented Generation)</li>
                  <li>• Langchain framework</li>
                </ul>
                <p className="text-sm mt-2">
                  <strong>Resources:</strong>
                </p>
                <ul className="text-xs text-gray-600 ml-4">
                  <li>
                    •{" "}
                    <a href="https://bit.ly/3RYpxuw" className="text-blue-600 hover:underline">
                      Langchain, LLM playlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-white pl-4">
              <h4 className="font-semibold">Week 33 onwards:</h4>
              <p className="text-sm text-gray-600">
                More projects, Online brand building through LinkedIn, Kaggle, Discord, and Opensource contribution, Job
                application and Success
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Key Motivational Stories:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              •{" "}
              <a href="https://bit.ly/47cA8GU" className="text-blue-600 hover:underline">
                Physics to Data Scientist Transition
              </a>
            </li>
            <li>
              •{" "}
              <a href="https://bit.ly/3REsqiL" className="text-blue-600 hover:underline">
                Petroleum Engineer to Data Scientist
              </a>
            </li>
            <li>
              •{" "}
              <a href="https://bit.ly/3RFVruy" className="text-blue-600 hover:underline">
                How Kaggle Helped Become ML Engineer
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Frequently Asked Questions:</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-sm">Do I need to learn cloud tech (AWS, Azure)?</h4>
              <p className="text-xs text-gray-600">
                As a fresher it's ok if you're not familiar with cloud platforms, but with experience it's good to know
                at least one cloud ML platform
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Do I need to learn Gen AI?</h4>
              <p className="text-xs text-gray-600">
                Gen AI is fancy but majority of junior data science positions don't demand gen ai skills, If you have
                additional time, langchain playlist: https://bit.ly/3RYpxuw
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-lg mb-2 text-blue-800">Guided Learning Option:</h3>
          <p className="text-sm text-blue-700 mb-2">
            For comprehensive guided learning with job assistance, consider the
            <a
              href="https://codebasics.io/bootcamps/ai-data-science-bootcamp-with-virtual-internship"
              className="text-blue-600 hover:underline font-medium"
            >
              Data Science & AI Bootcamp
            </a>
          </p>
          <p className="text-xs text-blue-600">
            Includes virtual internship, interview preparation, and structured learning path.
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-lg mb-2 text-green-800">Tips for Effective Learning:</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Spend less time consuming information, more time digesting, implementing, sharing</li>
            <li>
              • Group learning using partner-and-group-finder channel on codebasics discord server:
              https://discord.gg/r42Kbuk
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
