import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, Zap } from "lucide-react"

export default function ProblemsPage() {
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
              <Card className="bg-black/80 border-green-500/30 cyber-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-green-400">Problem 1: Algorithmic Challenge</CardTitle>
                      <CardDescription className="text-gray-400">Data Structures & Algorithms</CardDescription>
                    </div>
                    <Badge className="bg-green-600">Easy</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4 text-green-400" />
                      <span>Time Limit: 2 hours</span>
                    </div>

                    <p className="text-gray-300">
                      Implement an efficient algorithm to find the shortest path in a weighted graph. Your solution
                      should handle various edge cases and optimize for both time and space complexity.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        Algorithms
                      </Badge>
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        Graphs
                      </Badge>
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        Optimization
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500/30 cyber-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-green-400">Problem 2: Web Development Challenge</CardTitle>
                      <CardDescription className="text-gray-400">Frontend & API Integration</CardDescription>
                    </div>
                    <Badge className="bg-amber-600">Medium</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4 text-green-400" />
                      <span>Time Limit: 3 hours</span>
                    </div>

                    <p className="text-gray-300">
                      Create a responsive web application that fetches and displays data from a provided API. Implement
                      filtering, sorting, and search functionality with a clean, accessible UI.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        React
                      </Badge>
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        API
                      </Badge>
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        UI/UX
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/80 border-green-500/30 cyber-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-green-400">Problem 3: Data Analysis Challenge</CardTitle>
                      <CardDescription className="text-gray-400">Data Processing & Visualization</CardDescription>
                    </div>
                    <Badge className="bg-red-600">Hard</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4 text-green-400" />
                      <span>Time Limit: 4 hours</span>
                    </div>

                    <p className="text-gray-300">
                      Analyze a large dataset to extract meaningful insights and create visualizations. Implement
                      statistical models to predict future trends based on historical data.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        Data Science
                      </Badge>
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        Machine Learning
                      </Badge>
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        Visualization
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

              <Card className="bg-black/80 border-green-500/30 cyber-glow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-green-400">Final Challenge: Full-Stack Application</CardTitle>
                      <CardDescription className="text-gray-400">End-to-End Development</CardDescription>
                    </div>
                    <Badge className="bg-red-600">Advanced</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4 text-green-400" />
                      <span>Time Limit: 24 hours</span>
                    </div>

                    <p className="text-gray-300">
                      Build a complete full-stack application that solves a real-world problem. Your solution should
                      include a frontend, backend, database, and deployment strategy.
                    </p>

                    <div className="flex items-center gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-green-400" />
                        <span className="text-sm text-gray-300">
                          Detailed requirements will be provided to finalists
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        Full-Stack
                      </Badge>
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        System Design
                      </Badge>
                      <Badge variant="outline" className="border-green-700 text-green-400">
                        Problem Solving
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
