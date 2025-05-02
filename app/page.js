import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Trophy, Users } from "lucide-react"
import { HeroSection } from "./page-sections/hero-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-cyber-black text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Info Cards */}
      <section className="py-10 bg-cyber-black matrix-bg">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card">
              <Calendar className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Two-Round Challenge</h3>
              <p className="text-gray-400">
                Compete in our two-round hackathon format. Qualify through the preliminary round to advance to the
                finals.
              </p>
            </div>
            <div className="cyber-card">
              <Trophy className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Amazing Prizes</h3>
              <p className="text-gray-400">
                Win from our prize pool of $3,000 with rewards for top 7 performers. First prize: $1,000!
              </p>
            </div>
            <div className="cyber-card">
              <Users className="h-10 w-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Network & Learn</h3>
              <p className="text-gray-400">
                Connect with like-minded developers and industry experts while showcasing your skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-cyber-dark circuit-overlay">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-10 cyber-heading">Registration Fees</h2>
          <div className="max-w-md mx-auto bg-black/80 rounded-lg overflow-hidden shadow-lg shadow-green-900/40 border border-green-500/30 cyber-glow">
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-green-400">Standard Entry</h3>
              <div className="text-4xl font-bold mb-6 shiny-text">$149</div>
              <p className="text-gray-400 mb-6">
                Access to both rounds of the hackathon, mentorship, and eligibility for all prizes.
              </p>
              <div className="border-t border-green-900/30 pt-4 mt-4">
                <p className="text-sm text-green-400 mb-2">Student Discount Available</p>
                <p className="text-gray-400">Use a referral code to get entry at just $99</p>
              </div>
            </div>
            <div className="bg-green-900/30 p-4 text-center">
              <Link href="/register" className="text-green-300 hover:text-green-200 font-medium">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prize Section */}
      <section className="py-10 bg-cyber-black circuit-overlay">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 cyber-heading">Prize Pool</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-b from-yellow-500/20 to-yellow-900/20 rounded-lg p-6 border border-yellow-500/30 text-center cyber-card">
              <div className="text-yellow-500 text-lg font-bold mb-2">1st Place</div>
              <div className="text-3xl font-bold shiny-text mb-2">$1,000</div>
              <p className="text-gray-400">Grand Prize Winner</p>
            </div>
            <div className="bg-gradient-to-b from-gray-400/20 to-gray-600/20 rounded-lg p-6 border border-gray-400/30 text-center cyber-card">
              <div className="text-gray-400 text-lg font-bold mb-2">2nd Place</div>
              <div className="text-3xl font-bold shiny-text mb-2">$750</div>
              <p className="text-gray-400">Runner Up</p>
            </div>
            <div className="bg-gradient-to-b from-amber-700/20 to-amber-900/20 rounded-lg p-6 border border-amber-700/30 text-center cyber-card">
              <div className="text-amber-700 text-lg font-bold mb-2">3rd Place</div>
              <div className="text-3xl font-bold shiny-text mb-2">$500</div>
              <p className="text-gray-400">Second Runner Up</p>
            </div>
            <div className="bg-gradient-to-b from-green-600/20 to-green-900/20 rounded-lg p-6 border border-green-600/30 text-center cyber-card">
              <div className="text-green-400 text-lg font-bold mb-2">4th-7th Place</div>
              <div className="text-3xl font-bold shiny-text mb-2">$150</div>
              <p className="text-gray-400">Each</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-900/40 to-black">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 shiny-text">Ready to Showcase Your Skills?</h2>
          <p className="text-xl text-green-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of developers in this exciting two-round hackathon and compete for amazing prizes.
          </p>
          <Button asChild size="lg" className="cyber-button">
            <Link href="/register">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}