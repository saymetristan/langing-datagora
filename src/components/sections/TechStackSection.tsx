'use client'

import { useRef } from 'react'
import { Space_Grotesk } from 'next/font/google'
import OrbitingCircles from "@/components/ui/orbiting-circles"
import { FaPython, FaReact, FaAws, FaDocker } from 'react-icons/fa'
import { SiTensorflow, SiOpenai } from 'react-icons/si'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
})

export default function TechStackSection() {
  return (
    <div className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden py-20">
      <h2 className={`${spaceGrotesk.className} text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text`}>
        Nuestro Stack
      </h2>

      <div className="relative w-full max-w-4xl aspect-square">
        {/* Círculo interior */}
        <OrbitingCircles
          className="size-[40px] text-blue-400"
          duration={20}
          radius={100}
        >
          <SiOpenai className="w-8 h-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] text-purple-400"
          duration={20}
          delay={5}
          radius={100}
        >
          <SiTensorflow className="w-8 h-8" />
        </OrbitingCircles>

        {/* Círculo exterior */}
        <OrbitingCircles
          className="size-[40px] text-cyan-400"
          radius={200}
          duration={25}
          reverse
        >
          <FaPython className="w-8 h-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] text-blue-400"
          radius={200}
          duration={25}
          delay={6}
          reverse
        >
          <FaReact className="w-8 h-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] text-purple-400"
          radius={200}
          duration={25}
          delay={12}
          reverse
        >
          <FaAws className="w-8 h-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[40px] text-cyan-400"
          radius={200}
          duration={25}
          delay={18}
          reverse
        >
          <FaDocker className="w-8 h-8" />
        </OrbitingCircles>
      </div>
    </div>
  )
}