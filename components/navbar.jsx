"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-500/10 bg-black-40 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text bg-gradient-to-r text-green-400">
          HackThrone
          </span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-green-400" /> : <Menu className="h-6 w-6 text-green-400" />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-green-400 transition-colors">
            Home
          </Link>
          <Link href="/problems" className="text-sm font-medium hover:text-green-400 transition-colors">
            Problems
          </Link>
          <Link href="/rules" className="text-sm font-medium hover:text-green-400 transition-colors">
            Rules
          </Link>
          <Link href="/leaderboard" className="text-sm font-medium hover:text-green-400 transition-colors">
            Leaderboard
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Button asChild className="cyber-button shiny-text cyber-border">
            <Link href="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black border-b border-green-500/20 p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/problems"
                className="text-sm font-medium hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Problems
              </Link>
              <Link
                href="/rules"
                className="text-sm font-medium hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rules
              </Link>
              <Link
                href="/leaderboard"
                className="text-sm font-medium hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Leaderboard
              </Link>
              <Button asChild className="cyber-button w-full">
                <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                  Register
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}