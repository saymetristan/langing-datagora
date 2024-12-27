'use client'

import { Space_Grotesk } from 'next/font/google'
import OrbitingCircles from "@/components/ui/orbiting-circles"
import { FaPython, FaReact, FaAws, FaNode } from 'react-icons/fa'
import { SiOpenai, SiHuggingface, SiSupabase, SiRedis, SiPostgresql, SiNextdotjs, SiElevenlabs, SiMeta } from 'react-icons/si'

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

      <div className="relative w-full max-w-4xl aspect-square flex items-center justify-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent z-10">
            Nuestro Stack
        </span>

        <div className="absolute inset-0">
          {/* Círculo interior */}
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent text-blue-400"
            duration={20}
            radius={80}
          >
            <SiOpenai className="w-6 h-6" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent text-purple-400"
            duration={20}
            delay={10}
            radius={80}
          >
            <SiHuggingface className="w-6 h-6" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent text-cyan-400"
            duration={20}
            delay={20}
            radius={80}
          >
            <SiMeta className="w-6 h-6" />
          </OrbitingCircles>

          {/* Círculo medio */}
          <OrbitingCircles
            className="size-[40px] border-none bg-transparent text-purple-400"
            duration={22}
            radius={150}
          >
            <SiElevenlabs className="w-8 h-8" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[40px] border-none bg-transparent text-cyan-400"
            duration={22}
            delay={5}
            radius={150}
          >
            <SiSupabase className="w-8 h-8" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[40px] border-none bg-transparent text-blue-400"
            duration={22}
            delay={10}
            radius={150}
          >
            <SiRedis className="w-8 h-8" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[40px] border-none bg-transparent text-purple-400"
            duration={22}
            delay={15}
            radius={150}
          >
            <SiPostgresql className="w-8 h-8" />
          </OrbitingCircles>

          {/* Círculo exterior */}
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent text-cyan-400"
            radius={190}
            duration={25}
            reverse
          >
            <FaPython className="w-10 h-10" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent text-blue-400"
            radius={190}
            duration={25}
            delay={5}
            reverse
          >
            <FaNode className="w-10 h-10" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent text-purple-400"
            radius={190}
            duration={25}
            delay={10}
            reverse
          >
            <SiNextdotjs className="w-10 h-10" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent text-cyan-400"
            radius={190}
            duration={25}
            delay={15}
            reverse
          >
            <FaReact className="w-10 h-10" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent text-blue-400"
            radius={190}
            duration={25}
            delay={20}
            reverse
          >
            <FaAws className="w-10 h-10" />
          </OrbitingCircles>
        </div>
      </div>
    </div>
  )
}