'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene())
  const cameraRef = useRef<THREE.PerspectiveCamera>(new THREE.PerspectiveCamera())
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // Animaciones GSAP
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
    .from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1
    }, '-=0.5')
    .from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8
    }, '-=0.5')

    // Three.js setup...
    if (!canvasRef.current) return

    // Inicializar Three.js
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    })

    sceneRef.current = scene
    cameraRef.current = camera
    rendererRef.current = renderer

    // Configurar tamaño
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Crear geometría básica (ejemplo con partículas)
    const particlesGeometry = new THREE.BufferGeometry()
    const count = 5000
    const positions = new Float32Array(count * 3)
    
    for(let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: '#5B8FB9'
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Posicionar cámara
    camera.position.z = 3

    // Animación
    const animate = () => {
      requestAnimationFrame(animate)
      particles.rotation.y += 0.001
      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      scene.remove(particles)
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section className="relative h-screen w-full bg-black">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold text-center mb-4">
          Redefine el Presente. Conquista el Futuro con IA.
        </h1>
        <p ref={subtitleRef} className="text-lg md:text-xl text-center max-w-3xl mb-8">
          En Datagora diseñamos soluciones de Inteligencia Artificial que impulsan a empresas y usuarios finales hacia un nuevo paradigma de eficiencia y crecimiento.
        </p>
        <button ref={buttonRef} className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors">
          Conoce Cómo
        </button>
      </div>
    </section>
  )
} 