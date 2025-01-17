'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import HyperText from '@/components/ui/hyper-text'
import RainbowButton from '@/components/ui/rainbow-button'
import { motion } from 'framer-motion'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
})

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Inicializar Three.js
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    // Configuración mejorada
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    scene.fog = new THREE.FogExp2(0x000000, 0.001)

    // Partículas mejoradas
    const particlesGeometry = new THREE.BufferGeometry()
    const count = window.innerWidth < 768 ? 3000 : 8000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const scales = new Float32Array(count)

    const color = new THREE.Color()
    for(let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = (Math.random() - 0.5) * 15
      positions[i3 + 2] = (Math.random() - 0.5) * 10

      // Colores aleatorios entre azul eléctrico y morado neón
      color.setHSL(Math.random() * 0.1 + 0.6, 1, 0.5)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      scales[i] = Math.random()
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Posicionar cámara
    camera.position.z = 5

    // Mouse movement
    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', onMouseMove)

    // Animación
    const animate = () => {
      requestAnimationFrame(animate)
      
      particles.rotation.y += 0.0005
      particles.rotation.x += 0.0002

      // Efecto de movimiento suave con el mouse
      const targetX = mouseRef.current.x * 0.5
      const targetY = mouseRef.current.y * 0.3
      particles.rotation.x += (targetY - particles.rotation.x) * 0.05
      particles.rotation.y += (targetX - particles.rotation.y) * 0.05

      renderer.render(scene, camera)
    }

    animate()

    // GSAP Animations
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
    
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.5
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2
    }, '-=1')
    .from(buttonRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      scale: 0.8
    }, '-=0.8')

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      scene.remove(particles)
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/70" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div ref={titleRef} className="flex flex-col gap-6 text-center">
          <HyperText 
            className="text-6xl md:text-8xl font-black tracking-wider"
            duration={800}
            delay={300}
            startOnView={true}
            animateOnHover={true}
          >
            DATAGORA
          </HyperText>
          
          <h1 className={`${spaceGrotesk.className} text-4xl md:text-6xl font-black tracking-tight`}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
              REDEFINE{" "} 
            </span>
             EL PRESENTE{" "}
          </h1>
          
          <h1 className={`${spaceGrotesk.className} text-4xl md:text-6xl font-black tracking-tight`}>
            CONQUISTA EL{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                FUTURO
            </span>
            {" "}CON IA
          </h1>
        </div>

        <motion.div ref={buttonRef}>
          <RainbowButton 
            className={`${spaceGrotesk.className} mt-12 text-lg font-bold tracking-wide`}
            onClick={() => {
              const nextSection = document.getElementById('solutions')
              nextSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            CONOCE CÓMO
          </RainbowButton>
        </motion.div>
      </div>
    </section>
  )
} 