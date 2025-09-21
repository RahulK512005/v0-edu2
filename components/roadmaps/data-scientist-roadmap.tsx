import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Clock, CheckCircle, Users, BookOpen, Briefcase, Brain } from "lucide-react"

export default function DataScientistRoadmap() {
  const weeks = [
    {
      title: "Week 0: Research and Scam Protection",
      duration: "1 week",
      topics: ["Market research", "Scam awareness", "Mentor evaluation"],
      resources: [
        { name: "Scam Awareness Course", url: "https://codebasics.io/courses/scam-awareness-course" },
        { name: "Market Research Post 1", url: "https://bit.ly/4at9Jaw" },
        { name: "Market Research Post 2", url: "https://bit.ly/477IOOs" },
        { name: "Market Research Post 3", url: "https://bit.ly/3GPD7dp" },
      ],
    },
    {
      title: "Week 1-2: Python Fundamentals",
      duration: "2 weeks",
      topics: ["Variables & data types", "Control structures", "Functions", "OOP", "File handling"],
      resources: [
        { name: "Codebasics Python Tutorials", url: "https://bit.ly/3X6CCC7" },
        { name: "Python Hindi Tutorials", url: "https://bit.ly/3vmXrgw" },
        { name: "Python Course", url: "https://codebasics.io/courses/python-for-beginner-and-intermediate-learners" },
        { name: "Python Exercises", url: "https://bit.ly/3k1mof5" },
      ],
    },
    {
      title: "Week 3: NumPy, Pandas, Data Visualization",
      duration: "1 week",
      topics: ["NumPy arrays", "Pandas DataFrames", "Matplotlib", "Seaborn"],
      resources: [
        { name: "NumPy Playlist", url: "https://bit.ly/3GTppa8" },
        {
          name: "Math & Statistics Course (Chapter 5)",
          url: "https://codebasics.io/courses/math-and-statistics-for-data-science",
        },
      ],
    },
    {
      title: "Week 4-7: Statistics and Math for Data Science",
      duration: "4 weeks",
      topics: ["Descriptive statistics", "Probability", "Distributions", "Hypothesis testing", "Correlation"],
      resources: [
        { name: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability" },
        { name: "StatQuest YouTube", url: "https://www.youtube.com/@statquest" },
        { name: "Free Statistics Playlist", url: "https://bit.ly/3QrSXis" },
        { name: "Math & Statistics Course", url: "https://codebasics.io/courses/math-and-statistics-for-data-science" },
      ],
    },
    {
      title: "Week 8: Exploratory Data Analysis (EDA)",
      duration: "1 week",
      topics: ["Data exploration", "Pattern identification", "Data cleaning", "Visualization"],
      resources: [
        { name: "Kaggle EDA Notebooks", url: "https://www.kaggle.com/code?searchQuery=exploratory+data+analysis" },
        { name: "IPL Auction Dataset", url: "https://www.kaggle.com/datasets/rishabhkarn/ipl-auction-2023/data" },
      ],
    },
    {
      title: "Week 9-10: SQL for Data Science",
      duration: "2 weeks",
      topics: ["Database basics", "Queries", "Joins", "Window functions", "CTEs"],
      resources: [
        { name: "Khan Academy SQL", url: "https://bit.ly/3WFku20" },
        { name: "W3Schools SQL", url: "https://www.w3schools.com/sql/" },
        { name: "SQL Bolt", url: "https://sqlbolt.com/" },
        { name: "SQL Course", url: "https://codebasics.io/courses/sql-beginner-to-advanced-for-data-professionals" },
        { name: "SQL Resume Challenge", url: "https://codebasics.io/challenge/codebasics-resume-project-challenge/7" },
      ],
    },
    {
      title: "Week 11-15: Machine Learning",
      duration: "5 weeks",
      topics: ["Supervised learning", "Unsupervised learning", "Model evaluation", "Feature engineering"],
      resources: [
        { name: "ML Playlist (2M+ views)", url: "https://bit.ly/3io5qqX" },
        { name: "Feature Engineering Playlist", url: "https://bit.ly/3IFa3Yf" },
        {
          name: "Master ML Course",
          url: "https://codebasics.io/courses/machine-learning-for-data-science-beginners-to-advanced",
        },
      ],
    },
    {
      title: "Week 16-18: ML Projects with Deployment",
      duration: "3 weeks",
      topics: ["End-to-end projects", "Model deployment", "Web development", "Cloud deployment"],
      resources: [
        { name: "Property Price Prediction", url: "https://bit.ly/3ivycWr" },
        { name: "Sports Celebrity Classification", url: "https://bit.ly/3ioaMSU" },
        { name: "FastAPI Tutorial", url: "https://youtu.be/Wr1JjhTt1Xg" },
        { name: "Resume Tips", url: "https://www.youtube.com/watch?v=buQSI8NLOMw" },
      ],
    },
    {
      title: "Week 19-21: Deep Learning",
      duration: "3 weeks",
      topics: ["Neural networks", "CNNs", "RNNs", "TensorFlow/PyTorch"],
      resources: [
        { name: "Deep Learning (TensorFlow)", url: "https://bit.ly/3vOZ3zV" },
        { name: "Deep Learning (PyTorch)", url: "https://bit.ly/3TzDbWp" },
        { name: "Potato Disease Classification", url: "https://bit.ly/3QzkVJi" },
        { name: "Deep Learning Course", url: "https://codebasics.io/courses/deep-learning-beginner-to-advanced" },
      ],
    },
    {
      title: "Week 22-24: NLP or Computer Vision",
      duration: "3 weeks",
      topics: ["Text processing", "Image processing", "Specialized models", "End-to-end projects"],
      resources: [{ name: "NLP Playlist", url: "https://bit.ly/3XnjfEZ" }],
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
        <h2 className="text-3xl font-bold text-purple-800">Data Science Roadmap for Beginners</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Complete roadmap to learn Data Science skills from beginner to professional. Total Duration: 6 months with 4
          hours daily study.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            <Clock className="w-3 h-3 mr-1" />6 Months
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Brain className="w-3 h-3 mr-1" />
            Intermediate
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <Briefcase className="w-3 h-3 mr-1" />
            High Demand
          </Badge>
        </div>
      </div>

      {/* Weekly Roadmap */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center">Weekly Learning Plan</h3>
        {weeks.map((week, index) => (
          <Card key={index} className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
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
                    <Badge key={i} variant="secondary" className="bg-purple-50 text-purple-700">
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
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Data Science Influencers to Follow
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

      {/* FAQs */}
      <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">Do I need to learn cloud tech (AWS, Azure)?</h4>
            <p className="text-sm text-muted-foreground">
              As a fresher, it's okay if you're not familiar with cloud platforms. Once you have experience, it's good
              to know at least one cloud ML platform like Amazon SageMaker.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">Do I need to learn Gen AI?</h4>
            <p className="text-sm text-muted-foreground">
              Gen AI is trending but most junior positions don't require it. If you have extra time, you can learn
              LangChain for building GenAI apps.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">How about BI tools (Power BI/Tableau)?</h4>
            <p className="text-sm text-muted-foreground">
              BI tools are mainly used by BI developers and data analysts. As a data scientist, you'll typically work
              with BI teams when dashboards are needed.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Learning Tips */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Tips for Effective Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Time Management</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Spend less time consuming, more time implementing</li>
                <li>• Focus on digesting and sharing knowledge</li>
                <li>• Practice consistently every day</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Community Learning</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Join study groups for accountability</li>
                <li>• Use Discord for questions and help</li>
                <li>• Engage with the data science community</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
