import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Clock, CheckCircle, Users, BookOpen, Cpu, Code } from "lucide-react"

export default function AIEngineerRoadmap() {
  const weeks = [
    {
      title: "Week 0: Research and Scam Protection",
      duration: "1 week",
      topics: ["Market research", "Scam awareness", "Prerequisites check"],
      resources: [
        { name: "Scam Awareness Course", url: "https://codebasics.io/courses/scam-awareness-course" },
        { name: "Market Research Post 1", url: "https://bit.ly/4at9Jaw" },
        { name: "Market Research Post 2", url: "https://bit.ly/477IOOs" },
        { name: "Market Research Post 3", url: "https://bit.ly/3GPD7dp" },
      ],
    },
    {
      title: "Week 1-2: Computer Science Fundamentals",
      duration: "2 weeks",
      topics: ["Data representation", "Computer networks", "Programming basics", "Algorithms"],
      resources: [{ name: "Khan Academy CS Course", url: "https://bit.ly/42DUXtW" }],
    },
    {
      title: "Week 3-4: Beginner Python",
      duration: "2 weeks",
      topics: ["Python basics", "Data structures", "OOP", "File handling"],
      resources: [
        { name: "Codebasics Python Tutorials", url: "https://bit.ly/3X6CCC7" },
        { name: "Corey's Python Tutorials", url: "https://bit.ly/3uqUgaZ" },
        { name: "Python Hindi Tutorials", url: "https://bit.ly/3vmXrgw" },
        { name: "Python Course", url: "https://codebasics.io/courses/python-for-beginner-and-intermediate-learners" },
        { name: "Python Exercises", url: "https://bit.ly/3k1mof5" },
      ],
    },
    {
      title: "Week 5-6: Data Structures and Algorithms",
      duration: "2 weeks",
      topics: ["Big O notation", "Arrays, Linked Lists", "Trees, Graphs", "Sorting algorithms"],
      resources: [{ name: "DSA YouTube Playlist", url: "https://bit.ly/3uiW2Lf" }],
    },
    {
      title: "Week 7-8: Advanced Python",
      duration: "2 weeks",
      topics: ["Inheritance", "Generators", "Decorators", "Multithreading"],
      resources: [{ name: "Advanced Python Tutorials", url: "https://bit.ly/3X6CCC7" }],
    },
    {
      title: "Week 9: Version Control (Git, GitHub)",
      duration: "1 week",
      topics: ["Git basics", "Branches", "Pull requests", "Collaboration"],
      resources: [
        { name: "Git Playlist (Codebasics)", url: "https://bit.ly/3SECQQ7" },
        { name: "Git Playlist (Corey)", url: "https://bit.ly/3T0Yrmb" },
      ],
    },
    {
      title: "Week 10-11: SQL for AI Engineers",
      duration: "2 weeks",
      topics: ["Database design", "Advanced queries", "Stored procedures", "Indexes"],
      resources: [
        { name: "Khan Academy SQL", url: "https://bit.ly/3WFku20" },
        { name: "W3Schools SQL", url: "https://www.w3schools.com/sql/" },
        { name: "SQL Bolt", url: "https://sqlbolt.com/" },
        { name: "SQL Video Tutorial", url: "https://youtu.be/Rm0xH2Vpfi0?si=6ZLK8A5LvGqN4NmT" },
        { name: "SQL Course", url: "https://codebasics.io/courses/sql-beginner-to-advanced-for-data-professionals" },
        { name: "SQL Resume Challenge", url: "https://codebasics.io/challenge/codebasics-resume-project-challenge/7" },
      ],
    },
    {
      title: "Week 12: NumPy, Pandas, Data Visualization",
      duration: "1 week",
      topics: ["NumPy arrays", "Pandas operations", "Matplotlib", "Seaborn"],
      resources: [
        { name: "NumPy Playlist", url: "https://bit.ly/3GTppa8" },
        { name: "Math & Statistics Course", url: "https://codebasics.io/courses/math-and-statistics-for-data-science" },
      ],
    },
    {
      title: "Week 13-16: Math & Statistics for AI",
      duration: "4 weeks",
      topics: ["Linear algebra", "Calculus", "Statistics", "Probability", "Hypothesis testing"],
      resources: [
        { name: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability" },
        { name: "StatQuest YouTube", url: "https://www.youtube.com/@statquest" },
        { name: "Statistics Playlist", url: "https://bit.ly/3QrSXis" },
        { name: "3Blue1Brown", url: "https://www.youtube.com/@3blue1brown" },
        { name: "Math & Statistics Course", url: "https://codebasics.io/courses/math-and-statistics-for-data-science" },
      ],
    },
    {
      title: "Week 17: Exploratory Data Analysis",
      duration: "1 week",
      topics: ["Data exploration", "Pattern recognition", "Data cleaning"],
      resources: [
        { name: "Kaggle EDA Notebooks", url: "https://www.kaggle.com/code?searchQuery=exploratory+data+analysis" },
        { name: "IPL Auction Dataset", url: "https://www.kaggle.com/datasets/rishabhkarn/ipl-auction-2023/data" },
      ],
    },
    {
      title: "Week 18-21: Machine Learning",
      duration: "4 weeks",
      topics: ["Supervised/Unsupervised learning", "Model evaluation", "Feature engineering", "Hyperparameter tuning"],
      resources: [
        { name: "ML Playlist (2M+ views)", url: "https://bit.ly/3io5qqX" },
        { name: "Feature Engineering", url: "https://bit.ly/3IFa3Yf" },
        {
          name: "Master ML Course",
          url: "https://codebasics.io/courses/machine-learning-for-data-science-beginners-to-advanced",
        },
      ],
    },
    {
      title: "Week 22: MLOps",
      duration: "1 week",
      topics: ["FastAPI", "Docker", "Kubernetes", "CI/CD pipelines"],
      resources: [
        { name: "FastAPI Tutorial", url: "https://bit.ly/497p6Ex" },
        { name: "Docker Tutorial", url: "https://bit.ly/3uCNpeE" },
      ],
    },
    {
      title: "Week 23-24: ML Projects with Deployment",
      duration: "2 weeks",
      topics: ["End-to-end projects", "Model deployment", "Cloud platforms"],
      resources: [
        { name: "Property Price Prediction", url: "https://bit.ly/3ivycWr" },
        { name: "Sports Celebrity Classification", url: "https://bit.ly/3ioaMSU" },
        { name: "FastAPI Tutorial", url: "https://youtu.be/Wr1JjhTt1Xg" },
      ],
    },
    {
      title: "Week 25-27: Deep Learning",
      duration: "3 weeks",
      topics: ["Neural networks", "CNNs", "RNNs", "Advanced architectures"],
      resources: [
        { name: "Deep Learning (TensorFlow)", url: "https://bit.ly/3vOZ3zV" },
        { name: "Deep Learning (PyTorch)", url: "https://bit.ly/3TzDbWp" },
        { name: "Potato Disease Classification", url: "https://bit.ly/3QzkVJi" },
        { name: "Deep Learning Course", url: "https://codebasics.io/courses/deep-learning-beginner-to-advanced" },
      ],
    },
    {
      title: "Week 28-30: NLP or Computer Vision & GenAI",
      duration: "3 weeks",
      topics: ["Text processing", "Image processing", "Specialized models"],
      resources: [{ name: "NLP Playlist", url: "https://bit.ly/3XnjfEZ" }],
    },
    {
      title: "Week 31-32: LLM & LangChain",
      duration: "2 weeks",
      topics: ["Large Language Models", "Vector databases", "RAG", "LangChain framework"],
      resources: [{ name: "LangChain & LLM Playlist", url: "https://bit.ly/3RYpxuw" }],
    },
  ]

  const influencers = [
    { name: "Daliana Liu", url: "https://www.linkedin.com/in/dalianaliu/" },
    { name: "Nitin Aggarwal", url: "https://www.linkedin.com/in/ntnaggarwal/" },
    { name: "Steve Nouri", url: "https://www.linkedin.com/in/stevenouri/" },
    { name: "Dhaval Patel", url: "https://www.linkedin.com/in/dhavalsays/" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-emerald-800">AI Engineer Roadmap for Beginners</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Complete roadmap to learn AI Engineering skills from beginner to professional. Total Duration: 8 months with 4
          hours daily study. Prerequisites: Coding and Math interest required.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
            <Clock className="w-3 h-3 mr-1" />8 Months
          </Badge>
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            <Cpu className="w-3 h-3 mr-1" />
            Advanced
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Code className="w-3 h-3 mr-1" />
            High Salary
          </Badge>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> AI Engineer = Data Scientist + Software Engineer. This path requires strong coding
            and mathematical foundations.
          </p>
        </div>
      </div>

      {/* Weekly Roadmap */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center">Weekly Learning Plan</h3>
        {weeks.map((week, index) => (
          <Card key={index} className="border-l-4 border-l-emerald-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-800">
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
                <div className="flex flex-wrap gap-2">
                  {week.topics.map((topic, i) => (
                    <Badge key={i} variant="secondary" className="bg-emerald-50 text-emerald-700">
                      {topic}
                    </Badge>
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
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Influencers */}
      <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
        <CardHeader>
          <CardTitle className="text-emerald-800 flex items-center gap-2">
            <Users className="w-5 h-5" />
            AI Engineering Influencers to Follow
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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

      {/* Bootcamp Option */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-orange-800">Guided Learning with Job Assistance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Need guided learning with practical job assistance? Check out the affordable Data Science & AI Bootcamp with
            virtual internship.
          </p>
          <Button asChild>
            <a
              href="https://codebasics.io/bootcamps/ai-data-science-bootcamp-with-virtual-internship"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Bootcamp Details
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Learning Tips */}
      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Tips for Effective Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Time Management</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Spend less time consuming, more time implementing</li>
                <li>• Focus on digesting and sharing knowledge</li>
                <li>• Practice consistently every day</li>
                <li>• Build projects to solidify learning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Community Learning</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Join study groups for accountability</li>
                <li>• Use Discord for questions and help</li>
                <li>• Contribute to open source projects</li>
                <li>• Build your online presence</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prerequisites Warning */}
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-800">Important Prerequisites</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              <strong>Before starting this roadmap, ensure you have:</strong>
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>✓ Strong interest and aptitude in coding and programming</li>
              <li>✓ Comfort with mathematics and willingness to learn advanced math</li>
              <li>✓ Commitment to 8+ months of intensive learning</li>
              <li>✓ Understanding that this is the most challenging data career path</li>
            </ul>
            <p className="text-sm text-red-700 font-medium">
              Without these prerequisites, consider starting with Data Analyst or Data Scientist paths first.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
