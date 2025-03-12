'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedHeroProps {
  children: React.ReactNode
}

export default function AnimatedHero({ children }: AnimatedHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate relative mouse position
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-[600px] overflow-hidden bg-slate-900">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgb(59, 130, 246) 0%, rgb(30, 64, 175) 50%, rgb(15, 23, 42) 100%)',
            'radial-gradient(circle at 100% 100%, rgb(59, 130, 246) 0%, rgb(30, 64, 175) 50%, rgb(15, 23, 42) 100%)',
            'radial-gradient(circle at 50% 50%, rgb(59, 130, 246) 0%, rgb(30, 64, 175) 50%, rgb(15, 23, 42) 100%)',
            'radial-gradient(circle at 0% 100%, rgb(59, 130, 246) 0%, rgb(30, 64, 175) 50%, rgb(15, 23, 42) 100%)',
            'radial-gradient(circle at 100% 0%, rgb(59, 130, 246) 0%, rgb(30, 64, 175) 50%, rgb(15, 23, 42) 100%)',
            'radial-gradient(circle at 0% 0%, rgb(59, 130, 246) 0%, rgb(30, 64, 175) 50%, rgb(15, 23, 42) 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-50"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          filter: 'contrast(200%) brightness(150%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
} 