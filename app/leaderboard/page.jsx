"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Clock, Users } from "lucide-react"

export default function LeaderboardPage() {
  // These would typically come from your backend/API
  const [leaderboardConfig, setLeaderboardConfig] = useState({
    winnersAnnounced: false, // Backend controls this
    round1Complete: false,   // Backend controls this
    finalResults: [],
    round1Results: []
  })

  useEffect(() => {
    // This would be an API call to your backend
    // fetchLeaderboardConfig().then(setLeaderboardConfig)
  }, [])

  // Mock data for when results are available
  const mockResults = {
    final: [
      { rank: 1, name: "Sarah Chen", university: "Stanford University", prize: "$1,000", project: "AI-Powered Healthcare Assistant" },
      { rank: 2, name: "Alex Johnson", university: "University of Technology", prize: "$750", project: "Smart City Traffic Optimization" },
      { rank: 3, name: "Michael Rodriguez", university: "MIT", prize: "$500", project: "Sustainable Energy Marketplace" },
      { rank: 4, name: "David Kim", university: "UC Berkeley", prize: "$150", project: "Blockchain Voting System" },
      { rank: 5, name: "Emily Patel", university: "Carnegie Mellon", prize: "$150", project: "AR Navigation App" },
      { rank: 6, name: "James Wilson", university: "Georgia Tech", prize: "$150", project: "Eco-Friendly Shopping Assistant" },
      { rank: 7, name: "Olivia Martinez", university: "Caltech", prize: "$150", project: "Mental Health Tracking Platform" },
    ],
    round1: [
      { rank: 1, name: "Sarah Chen", score: 100, solved: "3/3" },
      { rank: 2, name: "Alex Johnson", score: 95, solved: "3/3" },
      { rank: 3, name: "Michael Rodriguez", score: 90, solved: "3/3" },
      { rank: 4, name: "David Kim", score: 85, solved: "2/3" },
      { rank: 5, name: "Emily Patel", score: 80, solved: "2/3" },
      { rank: 6, name: "James Wilson", score: 75, solved: "2/3" },
      { rank: 7, name: "Olivia Martinez", score: 70, solved: "2/3" },
      { rank: 8, name: "Daniel Lee", score: 65, solved: "1/3" },
      { rank: 9, name: "Sophia Wang", score: 60, solved: "1/3" },
      { rank: 10, name: "Robert Taylor", score: 55, solved: "1/3" },
    ]
  }

  const ComingSoonCard = ({ title, description, icon: Icon }) => (
    <Card className="bg-black/80 border-green-500/30 cyber-glow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-400">
          <Icon className="h-5 w-5" />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/30 border border-green-500/30 mb-4">
              <Clock className="h-8 w-8 text-green-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{description}</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Results will be published here once the competition concludes and judging is complete.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/30 rounded-lg">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm">Competition in progress</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  if (!leaderboardConfig.winnersAnnounced) {
    return (
      <div className="container py-12 px-4 md:px-6 circuit-overlay">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center shiny-text">Leaderboard</h1>
          <p className="text-green-400 mb-8 text-center max-w-2xl mx-auto">
            Track the progress of HackThrone 2025 participants and see who will claim the throne!
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
              <ComingSoonCard 
                title="Final Results"
                description="Winners will be announced soon!"
                icon={Trophy}
              />
            </TabsContent>

            <TabsContent value="round1">
              {leaderboardConfig.round1Complete ? (
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
                            {mockResults.round1.map((participant) => (
                              <tr key={participant.rank} className="border-b border-green-900/30">
                                <td className="py-3 px-4 text-gray-300">{participant.rank}</td>
                                <td className="py-3 px-4 text-gray-300">{participant.name}</td>
                                <td className="py-3 px-4 text-gray-300">{participant.score}</td>
                                <td className="py-3 px-4 hidden md:table-cell text-gray-300">{participant.solved}</td>
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
              ) : (
                <ComingSoonCard 
                  title="Round 1 Results"
                  description="Round 1 results pending!"
                  icon={Users}
                />
              )}
            </TabsContent>
          </Tabs>

          {/* Competition Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-black/80 border-green-500/30 cyber-glow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">150+</div>
                <div className="text-gray-400">Registered Participants</div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/80 border-green-500/30 cyber-glow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$3,000</div>
                <div className="text-gray-400">Total Prize Pool</div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/80 border-green-500/30 cyber-glow">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2</div>
                <div className="text-gray-400">Competition Rounds</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Card className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-green-500/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-400">Stay Updated</h3>
                <p className="text-gray-300 mb-4">
                  Follow our social media channels for real-time updates on the competition progress and announcements.
                </p>
                <div className="flex justify-center gap-4">
                  <Badge className="bg-green-600">Live Updates</Badge>
                  <Badge className="bg-blue-600">Social Media</Badge>
                  <Badge className="bg-purple-600">Email Notifications</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // This would render when winnersAnnounced is true (original leaderboard content)
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
                    {mockResults.final.slice(3).map((winner) => (
                      <div key={winner.rank} className="bg-cyber-dark p-4 rounded-lg border border-green-900/50">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-900/30 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold">
                            {winner.rank}
                          </div>
                          <div>
                            <h3 className="font-medium text-white">{winner.name}</h3>
                            <p className="text-sm text-gray-400">{winner.project}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-center text-green-400 text-sm">
                <p>
                  Congratulations to all winners and participants! The next Hackathon will be announced soon.
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
                        {mockResults.round1.map((participant) => (
                          <tr key={participant.rank} className="border-b border-green-900/30">
                            <td className="py-3 px-4 text-gray-300">{participant.rank}</td>
                            <td className="py-3 px-4 text-gray-300">{participant.name}</td>
                            <td className="py-3 px-4 text-gray-300">{participant.score}</td>
                            <td className="py-3 px-4 hidden md:table-cell text-gray-300">{participant.solved}</td>
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