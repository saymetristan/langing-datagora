'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TransitionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Setup
    sceneRef.current = new THREE.Scene()
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    
    rendererRef.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    
    rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(rendererRef.current.domElement)

    // Partículas
    const particlesGeometry = new THREE.BufferGeometry()
    const count = 5000
    
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10
      
      colors[i] = Math.random()
      colors[i + 1] = Math.random()
      colors[i + 2] = Math.random()
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.8
    })
    
    particlesRef.current = new THREE.Points(particlesGeometry, particlesMaterial)
    sceneRef.current.add(particlesRef.current)

    // Posición inicial de la cámara
    cameraRef.current.position.z = 5

    // Animación
    const animate = () => {
      requestAnimationFrame(animate)
      
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.001
        particlesRef.current.rotation.y += 0.001
      }
      
      rendererRef.current?.render(sceneRef.current!, cameraRef.current!)
    }
    
    animate()

    // Scroll Animation
    gsap.to(particlesRef.current?.rotation, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      y: Math.PI * 2,
      ease: 'none',
    })

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(rendererRef.current!.domElement)
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="h-[50vh] relative"
      style={{
        background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0), rgba(17, 24, 39, 1))'
      }}
    />
  )
} 