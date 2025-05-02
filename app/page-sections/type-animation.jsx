"use client"

import { useEffect, useState } from "react"

export function TypeAnimation() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = [
    "console.log('Hello, Developers!');",
    "function solveChallenge() { return innovation; }",
    "const future = await buildSomethingAmazing();",
    "// Join us and code the future",
    "if (skills.level === 'awesome') { win(); }",
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      // Set typing speed
      if (isDeleting) {
        setTypingSpeed(75) // Faster when deleting
      } else {
        setTypingSpeed(150) // Normal speed when typing
      }

      // Check if word is complete
      if (!isDeleting && text === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        // Pause before typing next word
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <div className="font-mono text-lg md:text-xl text-green-400 bg-black/80 px-4 py-1 rounded-md border border-green-500/30 cyber-glow flex items-center">
      <span>{text}</span>
      <span className="inline-block w-0.5 h-5 bg-green-400 animate-blink"></span>
    </div>
  )
}
