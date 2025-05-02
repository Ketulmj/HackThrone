"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { TypeAnimation } from "./type-animation"
import LetterGlitch from "@/components/LetterGlitch"

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Matrix code rain effect */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        {/* {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500/20 text-xs font-mono animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j}>{Math.random() > 0.5 ? "1" : "0"}</div>
            ))}
          </div>
        ))} */}
        <LetterGlitch
          glitchColors={['#02A78B28']}
          glitchSpeed={50}
          // centerVignette={true}
          outerVignette={true}
          smooth={true}
        />
      </div>
      {/* Content */}
      <div className="container px-4 md:px-6 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r">
          <div className=" text-white">
            HackThrone 2025
          </div>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-green-400 mb-4 max-w-3xl mx-auto">
          One Hack. One Throne. One Winner
        </p>

        {/* Typing Animation */}
        <div className="mb-8 h-16 flex justify-center">
          <TypeAnimation />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="cyber-button">
            <Link href="/register">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="cyber-button shiny-text cyber-border p-5">
            <Link href="/problems">View Problems</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
