import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award } from "lucide-react"

export default function LeaderboardPage() {
  return (
    <div className="container py-12 px-4 md:px-6 circuit-overlay">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center shiny-text">Leaderboard</h1>
        <p className="text-green-400 mb-8 text-center max-w-2xl mx-auto">
          Celebrating the top performers of HackThrone 2025.
        </p>

        <Tabs defaultValue="final" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-cyber-dark border border-green-500/30">
            <TabsTrigger
              value="final"
              className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-400"
            >
              Final Results
            </TabsTrigger>
            <TabsTrigger
              value="round1"
              className="data-[state=active]:bg-green-900/30 data-[state=active]:text-green-400"
            >
              Round 1 Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="final">
            <div className="grid gap-8">
              {/* Top 3 Winners */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Second Place */}
                <Card className="bg-gradient-to-b from-gray-800 to-black border-gray-400/30 text-center order-2 md:order-1">
                  <CardHeader className="pb-2">
                    <Medal className="h-12 w-12 mx-auto text-gray-400" />
                    <Badge className="mx-auto bg-white">2nd Place</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl mb-1 shiny-text">Alex Johnson</CardTitle>
                    <p className="text-gray-400 text-sm mb-2">University of Technology</p>
                    <div className="text-2xl font-bold text-white shiny-text">$750</div>
                    <p className="text-gray-400 text-sm mt-4">Smart City Traffic Optimization</p>
                  </CardContent>
                </Card>

                {/* First Place */}
                <Card className="bg-gradient-to-b from-green-900/30 to-black border-green-500/30 text-center order-1 md:order-2 transform md:scale-110 relative animate-pulse-glow">
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-gradient-to-r from-green-400 to-emerald-600 text-black">CHAMPION</Badge>
                  </div>
                  <CardHeader className="pb-2 pt-6">
                    <Trophy className="h-16 w-16 mx-auto text-green-500" />
                    <Badge className="mx-auto bg-white">1st Place</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl mb-1 shiny-text">Sarah Chen</CardTitle>
                    <p className="text-gray-400 text-sm mb-2">Stanford University</p>
                    <div className="text-2xl font-bold shiny-text">$1,000</div>
                    <p className="text-gray-400 text-sm mt-4">AI-Powered Healthcare Assistant</p>
                  </CardContent>
                </Card>

                {/* Third Place */}
                <Card className="bg-gradient-to-b from-amber-900/30 to-black border-amber-700/30 text-center order-3">
                  <CardHeader className="pb-2">
                    <Award className="h-12 w-12 mx-auto text-amber-700" />
                    <Badge className=" mx-auto bg-white">3rd Place</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-xl mb-1 shiny-text">Michael Rodriguez</CardTitle>
                    <p className="text-gray-400 text-sm mb-2">MIT</p>
                    <div className="text-2xl font-bold text-white shiny-text">$500</div>
                    <p className="text-gray-400 text-sm mt-4">Sustainable Energy Marketplace</p>
                  </CardContent>
                </Card>
              </div>

              {/* Runners Up */}
              <Card className="bg-black/80 border-green-500/30 cyber-glow">
                <CardHeader>
                  <CardTitle className="text-lg text-green-400">Runners Up ($150 Each)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyber-dark p-4 rounded-lg border border-green-900/50">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-900/30 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <div>
                          <h3 className="font-medium text-white">David Kim</h3>
                          <p className="text-sm text-gray-400">Blockchain Voting System</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyber-dark p-4 rounded-lg border border-green-900/50">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-900/30 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold">
                          5
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Emily Patel</h3>
                          <p className="text-sm text-gray-400">AR Navigation App</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyber-dark p-4 rounded-lg border border-green-900/50">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-900/30 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold">
                          6
                        </div>
                        <div>
                          <h3 className="font-medium text-white">James Wilson</h3>
                          <p className="text-sm text-gray-400">Eco-Friendly Shopping Assistant</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-cyber-dark p-4 rounded-lg border border-green-900/50">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-900/30 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold">
                          7
                        </div>
                        <div>
                          <h3 className="font-medium text-white">Olivia Martinez</h3>
                          <p className="text-sm text-gray-400">Mental Health Tracking Platform</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center text-green-400 text-sm">
                <p>
                  Congratulations to all winners and participants! The next CodeCraft Hackathon will be announced soon.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="round1">
            <Card className="bg-black/80 border-green-500/30 cyber-glow">
              <CardHeader>
                <CardTitle className="text-green-400">Round 1 Top Performers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    The following participants qualified for the final round by excelling in the preliminary challenges.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-green-900/30">
                          <th className="text-left py-3 px-4 text-green-400">Rank</th>
                          <th className="text-left py-3 px-4 text-green-400">Name</th>
                          <th className="text-left py-3 px-4 text-green-400">Score</th>
                          <th className="text-left py-3 px-4 hidden md:table-cell text-green-400">Problems Solved</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 10 }).map((_, i) => (
                          <tr key={i} className="border-b border-green-900/30">
                            <td className="py-3 px-4 text-gray-300">{i + 1}</td>
                            <td className="py-3 px-4 text-gray-300">
                              {
                                [
                                  "Sarah Chen",
                                  "Alex Johnson",
                                  "Michael Rodriguez",
                                  "David Kim",
                                  "Emily Patel",
                                  "James Wilson",
                                  "Olivia Martinez",
                                  "Daniel Lee",
                                  "Sophia Wang",
                                  "Robert Taylor",
                                ][i]
                              }
                            </td>
                            <td className="py-3 px-4 text-gray-300">{100 - i * 5}</td>
                            <td className="py-3 px-4 hidden md:table-cell text-gray-300">
                              {i < 3 ? "3/3" : i < 7 ? "2/3" : "1/3"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="text-center text-sm text-green-400 mt-6">
                    <p>Showing top 10 of 50 qualifiers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
