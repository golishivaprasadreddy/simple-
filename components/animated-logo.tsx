"use client"

import { useState, useEffect } from "react"
import { Code, Zap, Rocket } from "lucide-react"

export function AnimatedLogo({ className = "w-8 h-8" }: { className?: string }) {
  const [currentIcon, setCurrentIcon] = useState(0)
  const icons = [Code, Zap, Rocket]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = icons[currentIcon]

  return (
    <div className={`bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 animate-pulse opacity-75"></div>
      <CurrentIcon className="w-5 h-5 text-white relative z-10 transition-all duration-500 transform hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -skew-x-12 animate-shimmer"></div>
    </div>
  )
}