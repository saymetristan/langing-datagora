'use client'

import { useRef, useEffect } from 'react'
import { Space_Grotesk } from 'next/font/google'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IconCloud from "@/components/ui/icon-cloud"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
})

const techIcons = [
  "openai",
  "python",
  "react", 
  "nextdotjs",
  "typescript",
  "javascript",
  "amazonaws",
  "postgresql",
  "docker",
  "git",
  "github",
  "vercel",
  "prisma",
  "tailwindcss",
  "nodedotjs",
  "mongodb",
  "redis",
  "langchain"
]

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
    <section ref={sectionRef} className="relative min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="relative w-screen h-screen items-center justify-center overflow-hidden border-y border-gray-800 bg-black/40 backdrop-blur-sm pt-32">
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h2 className={`${spaceGrotesk.className} text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text`}>
            Nuestro Stack
          </h2>
        </div>
        <IconCloud iconSlugs={techIcons} />
      </div>
    </section>
  )
}