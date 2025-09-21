"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, BarChart3, Brain, Code, TrendingUp, Users, DollarSign, Clock, Star, BookOpen } from "lucide-react"
import DataAnalystRoadmap from "./roadmaps/data-analyst-roadmap"
import DataScientistRoadmap from "./roadmaps/data-scientist-roadmap"
import AIEngineerRoadmap from "./roadmaps/ai-engineer-roadmap"

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
    noScores: { dataAnalyst: 0, dataScientist: 1, aiEngineer: 2 },
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

const careerInfo = {
  dataAnalyst: {
    title: "Data Analyst",
    icon: BarChart3,
    description: "Transform raw data into actionable business insights through visualization and reporting.",
    timeToJobReady: "3-6 months",
    averageSalary: "$55,000 - $85,000",
    difficulty: "Beginner-Friendly",
    keySkills: ["Excel/Google Sheets", "SQL", "Data Visualization", "Business Intelligence", "Statistical Analysis"],
    dailyTasks: [
      "Create reports and dashboards",
      "Analyze business metrics",
      "Present findings to stakeholders",
      "Clean and organize data",
    ],
    tools: ["Excel", "Tableau", "Power BI", "SQL", "Python (basic)"],
    careerPath: ["Junior Data Analyst", "Data Analyst", "Senior Data Analyst", "Analytics Manager"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-800",
  },
  dataScientist: {
    title: "Data Scientist",
    icon: Brain,
    description:
      "Build predictive models and extract deep insights using advanced statistical methods and machine learning.",
    timeToJobReady: "8-12 months",
    averageSalary: "$85,000 - $130,000",
    difficulty: "Intermediate",
    keySkills: ["Python/R", "Machine Learning", "Statistics", "Data Mining", "Predictive Modeling"],
    dailyTasks: [
      "Build predictive models",
      "Conduct statistical analysis",
      "Design experiments",
      "Collaborate with engineering teams",
    ],
    tools: ["Python", "R", "Jupyter", "Scikit-learn", "TensorFlow", "SQL"],
    careerPath: ["Junior Data Scientist", "Data Scientist", "Senior Data Scientist", "Principal Data Scientist"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    textColor: "text-purple-800",
  },
  aiEngineer: {
    title: "AI Engineer",
    icon: Code,
    description: "Design and deploy advanced AI systems, neural networks, and cutting-edge machine learning solutions.",
    timeToJobReady: "12-18 months",
    averageSalary: "$100,000 - $180,000",
    difficulty: "Advanced",
    keySkills: ["Deep Learning", "Neural Networks", "MLOps", "Cloud Platforms", "Software Engineering"],
    dailyTasks: [
      "Develop AI algorithms",
      "Deploy ML models",
      "Optimize system performance",
      "Research new AI techniques",
    ],
    tools: ["Python", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "AWS/GCP"],
    careerPath: ["ML Engineer", "AI Engineer", "Senior AI Engineer", "AI Research Scientist"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    textColor: "text-emerald-800",
  },
}

interface CareerQuizProps {
  onBack: () => void
}

export default function CareerQuiz({ onBack }: CareerQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [recommendation, setRecommendation] = useState<keyof typeof careerInfo | "">("")
  const [showRoadmap, setShowRoadmap] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const calculateRecommendation = (): keyof typeof careerInfo => {
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
    setShowRoadmap(false)
  }

  if (showResults && recommendation) {
    const career = careerInfo[recommendation]
    const CareerIcon = career.icon

    if (showRoadmap) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <Button onClick={() => setShowRoadmap(false)} variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Results
                </Button>
                <h1 className="text-2xl font-bold">Complete Learning Roadmap</h1>
              </div>

              {/* Roadmap Content */}
              {recommendation === "dataAnalyst" && <DataAnalystRoadmap />}
              {recommendation === "dataScientist" && <DataScientistRoadmap />}
              {recommendation === "aiEngineer" && <AIEngineerRoadmap />}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <Button onClick={onBack} variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Results
              </Button>
              <h1 className="text-2xl font-bold">Engineering Career Recommendation</h1>
            </div>

            {/* Main Result Card */}
            <Card
              className={`border-2 ${career.borderColor} ${career.bgColor} mb-8 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000`}
            >
              <CardHeader className="text-center">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${career.color} flex items-center justify-center mx-auto mb-4 animate-in zoom-in-0 duration-700 delay-200`}
                >
                  <CareerIcon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl mb-2 animate-in fade-in-0 duration-500 delay-400">
                  {career.title}
                </CardTitle>
                <CardDescription className="text-lg text-balance animate-in fade-in-0 duration-500 delay-600">
                  {career.description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Career Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-blue-50 border-blue-200 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-800">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-blue-800">Time to Job Ready</span>
                </div>
                <p className="text-blue-700">{career.timeToJobReady}</p>
              </Card>

              <Card className="p-4 bg-green-50 border-green-200 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-900">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-800">Average Salary</span>
                </div>
                <p className="text-green-700">{career.averageSalary}</p>
              </Card>

              <Card className="p-4 bg-purple-50 border-purple-200 animate-in fade-in-0 slide-in-from-right-4 duration-700 delay-1000">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold text-purple-800">Difficulty Level</span>
                </div>
                <p className="text-purple-700">{career.difficulty}</p>
              </Card>

              <Card className="p-4 bg-orange-50 border-orange-200 animate-in fade-in-0 slide-in-from-right-4 duration-700 delay-1100">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                  <span className="font-semibold text-orange-800">Career Growth</span>
                </div>
                <p className="text-orange-700">Excellent</p>
              </Card>
            </div>

            {/* Detailed Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 animate-in fade-in-0 slide-in-from-left-8 duration-700 delay-1200">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Key Skills
                </h4>
                <div className="space-y-2">
                  {career.keySkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6 animate-in fade-in-0 slide-in-from-right-8 duration-700 delay-1300">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Daily Tasks
                </h4>
                <ul className="space-y-2">
                  {career.dailyTasks.map((task, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 animate-in fade-in-0 slide-in-from-left-8 duration-700 delay-1400">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  Tools & Technologies
                </h4>
                <div className="space-y-2">
                  {career.tools.map((tool, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6 animate-in fade-in-0 slide-in-from-right-8 duration-700 delay-1500">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Career Progression
                </h4>
                <div className="space-y-3">
                  {career.careerPath.map((role, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${career.color} flex items-center justify-center text-white text-sm font-bold`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{role}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-1600">
              <Button
                onClick={() => setShowRoadmap(true)}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                View Complete Roadmap
              </Button>
              <Button
                onClick={resetQuiz}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-primary bg-transparent"
              >
                Take Quiz Again
              </Button>
              <Button onClick={onBack} variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Back to Degree Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button onClick={onBack} variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Engineering Career Path Quiz</h1>
              <p className="text-muted-foreground">Discover which data career suits you best</p>
            </div>
          </div>

          {/* Progress */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="mb-4" />
            </CardHeader>
          </Card>

          {/* Question Card */}
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-balance">{questions[currentQuestion].question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[questions[currentQuestion].id] || ""}
                onValueChange={(value) => setAnswers({ ...answers, [questions[currentQuestion].id]: value })}
                className="space-y-4 mb-8"
              >
                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="yes" id="yes" />
                  <label htmlFor="yes" className="text-base cursor-pointer flex-1">
                    Yes
                  </label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="no" id="no" />
                  <label htmlFor="no" className="text-base cursor-pointer flex-1">
                    No
                  </label>
                </div>
              </RadioGroup>

              <div className="flex justify-between">
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
    </div>
  )
}
