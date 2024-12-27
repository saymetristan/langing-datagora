'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'
import { FaWallet, FaDumbbell, FaCamera, FaImage } from 'react-icons/fa'
import { Space_Grotesk } from 'next/font/google'

gsap.registerPlugin(ScrollTrigger)

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
})

interface SolutionCardProps {
  title: string
  description: string
  link?: string
  Icon: IconType
}

const SolutionCard = ({ title, description, link, Icon }: SolutionCardProps) => (
  <motion.div 
    className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer group relative overflow-hidden"
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    onClick={() => link && window.open(link, '_blank')}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
    <Icon className="text-5xl mb-6 text-blue-400 group-hover:text-purple-400 transition-colors" />
    <h3 className={`${spaceGrotesk.className} text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text`}>
      {title}
    </h3>
    <p className="text-gray-300 leading-relaxed text-lg">
      {description}
    </p>
  </motion.div>
)

export default function SolutionsUsuariosSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const solutions = [
    {
      title: "Asesor Financiero Personal",
      description: "Administra tus finanzas de manera sencilla con alertas, reportes y seguimiento automático desde tu móvil.",
      link: "https://getwispen.com",
      Icon: FaWallet
    },
    {
      title: "Asistente de Rutinas",
      description: "Accede a entrenamientos personalizados impulsados por inteligencia artificial que se adaptan a tu progreso y necesidades.",
      link: "https://actibai.com",
      Icon: FaDumbbell
    },
    {
      title: "Plataforma de Fotos Deportivas",
      description: "Encuentra, compra y administra tus fotos de carreras fácilmente con tecnología de reconocimiento facial y de dorsales.",
      link: "https://pacerpic.com",
      Icon: FaCamera
    },
    {
      title: "Mejora de Imágenes Ecommerce",
      description: "Optimiza la presentación de tus productos con iluminación mejorada y fondos personalizados, manteniendo la calidad y el estilo de tus imágenes.",
      link: "https://lumixfy.com",
      Icon: FaImage
    }
  ]

  useEffect(() => {
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
      .from(".solution-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.4")
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="solutions-usuarios" 
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className={`${spaceGrotesk.className} text-5xl md:text-6xl font-bold text-center mb-6`}>
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Soluciones IA
          </span>
          {" "}para Usuarios
        </h2>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto flex flex-col gap-6">
          <span>Transforma tu día a día con asistentes inteligentes diseñados para simplificar tus finanzas, salud y estilo de vida.</span>
          <span>¿Buscas una solución personalizada? Podemos ayudarte a hacerla realidad.</span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <SolutionCard {...solution} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 