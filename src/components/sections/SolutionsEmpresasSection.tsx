'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

interface SolutionCardProps {
  title: string
  description: string
}

const SolutionCard = ({ title, description }: SolutionCardProps) => (
  <motion.div 
    className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
      {title}
    </h3>
    <p className="text-gray-300">
      {description}
    </p>
  </motion.div>
)

export default function SolutionsEmpresasSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const solutions = [
    {
      title: "Agente de Prospección Inteligente",
      description: "Investiga leads, redacta correos en frío hiperpersonalizados y acelera tus ventas."
    },
    {
      title: "Traducción Masiva de Excel",
      description: "Procesa miles de líneas en segundos sin perder precisión."
    },
    {
      title: "Automatización de Contenido",
      description: "Genera y publica posts en redes al instante, optimizados para tu audiencia."
    },
    {
      title: "Agentes de Venta 24/7",
      description: "Atención constante y cerrando ventas sin interrupciones en WhatsApp, Facebook, Instagram y Llamadas."
    },
    {
      title: "ERP Somos Oliver + IA",
      description: "Integra IA en la gestión de tu negocio para facturar, organizar e impulsar resultados."
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".solution-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="solutions" 
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Soluciones IA para Empresas
        </h2>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
          Potencia tus procesos, minimiza tus costos y maximiza tus ingresos con automatizaciones creadas a la medida.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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