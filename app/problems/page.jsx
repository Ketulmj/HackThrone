"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, Zap, Lock } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"

export default function ProblemsPage() {
  // These would typically come from your backend/API
  const [hackathonConfig, setHackathonConfig] = useState({
    startDate: "2025-03-15T10:00:00Z", // Set your hackathon start date here
    problemsVisible: false, // Backend controls this
    round1Problems: [],
    round2Problems: []
  })

  const [countdownComplete, setCountdownComplete] = useState(false)

  useEffect(() => {
    // This would be an API call to your backend
    // fetchHackathonConfig().then(setHackathonConfig)
    
    // Check if hackathon has already started
    const now = new Date()
    const startDate = new Date(hackathonConfig.startDate)
    if (now >= startDate) {
      setCountdownComplete(true)
    }
  }, [hackathonConfig.startDate])

  const handleCountdownComplete = () => {
    setCountdownComplete(true)
  }

  // Mock problems data (this would come from backend when problemsVisible is true)
  const mockProblems = {
    round1: [
      {
        id: 1,
        title: "Algorithmic Challenge",
        description: "Data Structures & Algorithms",
        difficulty: "Easy",
        timeLimit: "2 hours",
        content: "Implement an efficient algorithm to find the shortest path in a weighted graph. Your solution should handle various edge cases and optimize for both time and space complexity.",
        tags: ["Algorithms", "Graphs", "Optimization"]
      },
      {
        id: 2,
        title: "Web Development Challenge",
        description: "Frontend & API Integration",
        difficulty: "Medium",
        timeLimit: "3 hours",
        content: "Create a responsive web application that fetches and displays data from a provided API. Implement filtering, sorting, and search functionality with a clean, accessible UI.",
        tags: ["React", "API", "UI/UX"]
      },
      {
        id: 3,
        title: "Data Analysis Challenge",
        description: "Data Processing & Visualization",
        difficulty: "Hard",
        timeLimit: "4 hours",
        content: "Analyze a large dataset to extract meaningful insights and create visualizations. Implement statistical models to predict future trends based on historical data.",
        tags: ["Data Science", "Machine Learning", "Visualization"]
      }
    ],
    round2: [
      {
        id: 1,
        title: "Full-Stack Application",
        description: "End-to-End Development",
        difficulty: "Advanced",
        timeLimit: "24 hours",
        content: "Build a complete full-stack application that solves a real-world problem. Your solution should include a frontend, backend, database, and deployment strategy.",
        tags: ["Full-Stack", "System Design", "Problem Solving"]
      }
    ]
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-600'
      case 'medium': return 'bg-amber-600'
      case 'hard': return 'bg-red-600'
      case 'advanced': return 'bg-purple-600'
      default: return 'bg-gray-600'
    }
  }

  if (!countdownComplete && !hackathonConfig.problemsVisible) {
    return (
      <div className="container py-12 px-4 md:px-6 circuit-overlay">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center cyber-heading shiny-text">
            Problem Statements
          </h1>
          <p className="text-green-400 mb-8 text-center max-w-2xl mx-auto">
            Get ready for the ultimate coding challenge! Problem statements will be revealed when the hackathon begins.
          </p>

          <Card className="bg-black/80 border-green-500/30 cyber-glow">
            <CardContent className="p-8">
              <CountdownTimer 
                targetDate={hackathonConfig.startDate}
                onComplete={handleCountdownComplete}
              />
            </CardContent>
          </Card>

          <div className="mt-8 grid gap-6">
            <Card className="bg-black/80 border-green-500/30 cyber-glow opacity-60">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-gray-500" />
                    <div>
                      <CardTitle className="text-gray-500">Round 1: Preliminary Challenges</CardTitle>
                      <CardDescription className="text-gray-600">Multiple coding challenges</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-gray-600">Locked</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Duration: 6 hours</span>
                  </div>
                  <p className="text-gray-500">
                    Three challenging problems designed to test your algorithmic thinking, web development skills, 
                    and data analysis capabilities.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="outline" className="border-gray-700 text-gray-500">
                      Algorithms
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-500">
                      Web Development
                    </Badge>
                    <Badge variant="outline" className="border-gray-700 text-gray-500">
                      Data Analysis
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/80 border-green-500/30 cyber-glow opacity-60">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-gray-500" />
                    <div>
                      <CardTitle className="text-gray-500">Round 2: Final Challenge</CardTitle>
                      <CardDescription className="text-gray-600">Full-stack application development</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-gray-600">Locked</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Duration: 24 hours</span>
                  </div>
                  <p className="text-gray-500">
                    Build a complete application that demonstrates your full-stack development capabilities. 
                    Only available to Round 1 qualifiers.
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-gray-500" />
                      <span className="text-sm text-gray-500">
                        Detailed requirements revealed to finalists
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12 px-4 md:px-6 circuit-overlay">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center cyber-heading shiny-text">Problem Statements</h1>
        <p className="text-green-400 mb-8 text-center max-w-2xl mx-auto">
          Explore the challenges for both rounds of our hackathon. The problems are designed to test your coding skills
          and creativity.
        </p>

        <Tabs defaultValue="round1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-cyber-dark border border-green-500/30">
            <TabsTrigger
              value="round1"
              className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-400"
            >
              Round 1 (Preliminary)
            </TabsTrigger>
            <TabsTrigger
              value="round2"
              className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-400"
            >
              Round 2 (Final)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="round1">
            <div className="grid gap-6">
              {mockProblems.round1.map((problem) => (
                <Card key={problem.id} className="bg-black/80 border-green-500/30 cyber-glow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-green-400">Problem {problem.id}: {problem.title}</CardTitle>
                        <CardDescription className="text-gray-400">{problem.description}</CardDescription>
                      </div>
                      <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4 text-green-400" />
                        <span>Time Limit: {problem.timeLimit}</span>
                      </div>

                      <p className="text-gray-300">{problem.content}</p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {problem.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-green-700 text-green-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="round2">
            <div className="grid gap-6">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium mb-2 text-green-400">Round 2 Information</h3>
                <p className="text-gray-300">
                  Only participants who successfully complete Round 1 will advance to Round 2. The final round problems
                  will be revealed to qualified participants after Round 1 results are announced.
                </p>
              </div>

              {mockProblems.round2.map((problem) => (
                <Card key={problem.id} className="bg-black/80 border-green-500/30 cyber-glow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-green-400">Final Challenge: {problem.title}</CardTitle>
                        <CardDescription className="text-gray-400">{problem.description}</CardDescription>
                      </div>
                      <Badge className={getDifficultyColor(problem.difficulty)}>{problem.difficulty}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4 text-green-400" />
                        <span>Time Limit: {problem.timeLimit}</span>
                      </div>

                      <p className="text-gray-300">{problem.content}</p>

                      <div className="flex items-center gap-4 mt-6">
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5 text-green-400" />
                          <span className="text-sm text-gray-300">
                            Detailed requirements will be provided to finalists
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {problem.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-green-700 text-green-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="flex items-center justify-center gap-4 p-6 bg-black/80 border border-green-500/30 rounded-lg cyber-glow">
                <Zap className="h-6 w-6 text-green-400" />
                <p className="text-gray-300">
                  Finalists will have access to mentors during Round 2 to help guide their development process.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}