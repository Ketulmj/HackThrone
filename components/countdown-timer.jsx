"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export function CountdownTimer({ targetDate, onComplete }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date()
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          total: difference
        }
      } else {
        onComplete && onComplete()
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          total: 0
        }
      }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setTimeLeft(calculateTimeLeft())

    return () => clearInterval(timer)
  }, [targetDate, onComplete])

  const formatNumber = (num) => String(num).padStart(2, '0')

  if (timeLeft.total <= 0) {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-8">
      <div className="flex items-center gap-2 text-green-400 mb-4">
        <Clock className="h-6 w-6" />
        <h2 className="text-2xl font-bold">Hackathon Starts In</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-black/80 border border-green-500/30 rounded-lg p-4 cyber-glow">
          <div className="text-3xl md:text-4xl font-bold text-green-400 shiny-text">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="text-sm text-gray-400 mt-2">Days</div>
        </div>
        
        <div className="bg-black/80 border border-green-500/30 rounded-lg p-4 cyber-glow">
          <div className="text-3xl md:text-4xl font-bold text-green-400 shiny-text">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-sm text-gray-400 mt-2">Hours</div>
        </div>
        
        <div className="bg-black/80 border border-green-500/30 rounded-lg p-4 cyber-glow">
          <div className="text-3xl md:text-4xl font-bold text-green-400 shiny-text">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-sm text-gray-400 mt-2">Minutes</div>
        </div>
        
        <div className="bg-black/80 border border-green-500/30 rounded-lg p-4 cyber-glow">
          <div className="text-3xl md:text-4xl font-bold text-green-400 shiny-text animate-pulse">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-sm text-gray-400 mt-2">Seconds</div>
        </div>
      </div>
      
      <div className="text-center text-gray-400 max-w-md">
        <p className="text-sm">
          Problem statements will be revealed when the hackathon begins. 
          Make sure you're registered and ready to compete!
        </p>
      </div>
    </div>
  )
}