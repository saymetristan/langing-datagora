'use client'

import { useRef, useEffect } from 'react'
import { Space_Grotesk } from 'next/font/google'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FaChartLine, FaImage, FaEnvelope } from 'react-icons/fa'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
})

const metrics = [
  {
    value: 31,
    text: "en Ventas con Agentes de Prospección Inteligente",
    Icon: FaChartLine
  },
  {
    value: 48,
    text: "de Eficiencia al Clasificar Imágenes en Eventos Deportivos",
    Icon: FaImage
  },
  {
    value: 62,
    text: "de Apertura en Campañas de Email Hiperpersonalizadas",
    Icon: FaEnvelope
  }
]

export default function ImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const numbersRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Animación del título y subtítulo
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

      // Animación de los números
      metrics.forEach((_, index) => {
        gsap.to(numbersRef.current[index], {
          scrollTrigger: {
            trigger: numbersRef.current[index],
            start: "top center+=100",
            toggleActions: "play none none reverse"
          },
          innerText: metrics[index].value,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out"
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center py-20 px-4">
      <h2 className={`${spaceGrotesk.className} text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text`}>
        Casos de Éxito y Resultados Reales
      </h2>
      
      <p className="text-gray-300 text-xl text-center max-w-3xl mb-20">
        Desde el aumento de ventas hasta la transformación de la experiencia de usuario, hemos generado valor tangible en cada proyecto.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center text-center group hover:bg-gray-800/70 transition-all duration-300">
            <metric.Icon className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span 
                ref={(el) => { if (el) numbersRef.current[index] = el }} 
                className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text"
              >
                0
              </span>
              <span className="text-3xl font-bold text-white">%</span>
            </div>
            <p className="text-gray-300 text-lg">{metric.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
} 