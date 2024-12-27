'use client'

import { useRef, useEffect } from 'react'
import { Space_Grotesk } from 'next/font/google'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaReact, FaPython, FaAws, FaDocker, FaDatabase } from 'react-icons/fa'
import { SiOpenai, SiLangchain } from 'react-icons/si'
import OrbitingCircles from '@/components/ui/orbiting-circles'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
})

const technologies = {
  inner: [
    { Icon: SiOpenai, name: 'OpenAI' },
    { Icon: SiLangchain, name: 'LangChain' },
  ],
  middle: [
    { Icon: FaReact, name: 'React' },
    { Icon: FaPython, name: 'Python' },
  ],
  outer: [
    { Icon: FaAws, name: 'AWS' },
    { Icon: FaDocker, name: 'Docker' },
    { Icon: FaDatabase, name: 'Databases' }
  ]
}

export default function TechStackSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "center center",
          toggleActions: "play none none reverse"
        }
      })

      tl.from("h2", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from("p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center mb-20">
        <h2 className={`${spaceGrotesk.className} text-5xl md:text-6xl font-bold mb-6`}>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Stack Tecnológico
          </span>
        </h2>
        <p className="text-gray-300 text-xl max-w-3xl mx-auto">
          Combinamos las mejores tecnologías para crear soluciones de IA robustas y escalables
        </p>
      </div>

      <div className="relative h-[500px] w-full max-w-3xl mx-auto flex items-center justify-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Inner Circle */}
          {technologies.inner.map((tech, i) => (
            <OrbitingCircles
              key={tech.name}
              className="size-16 border-none bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
              duration={20}
              delay={i * 7}
              radius={80}
            >
              <tech.Icon className="size-8 text-blue-400" />
            </OrbitingCircles>
          ))}

          {/* Middle Circle */}
          {technologies.middle.map((tech, i) => (
            <OrbitingCircles
              key={tech.name}
              className="size-16 border-none bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
              duration={25}
              delay={i * 8}
              radius={160}
            >
              <tech.Icon className="size-8 text-purple-400" />
            </OrbitingCircles>
          ))}

          {/* Outer Circle */}
          {technologies.outer.map((tech, i) => (
            <OrbitingCircles
              key={tech.name}
              className="size-16 border-none bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
              duration={30}
              delay={i * 10}
              radius={240}
              reverse
            >
              <tech.Icon className="size-8 text-cyan-400" />
            </OrbitingCircles>
          ))}
        </div>
      </div>
    </section>
  )
}
