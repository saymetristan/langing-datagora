'use client'

import { useRef, useEffect } from 'react'
import { Space_Grotesk } from 'next/font/google'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['700']
})

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!canvasRef.current) return
    gsap.registerPlugin(ScrollTrigger)

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x000000, 0.15)
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    camera.position.z = 5

    // Crear sistema de partículas avanzado
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

      color.setHSL(Math.random() * 0.1 + 0.6, 1, 0.5)
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
      
      scales[i] = Math.random()
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

    // Material con shader personalizado
    const particlesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        opacity: { value: 1 }
      },
      vertexShader: `
        attribute float scale;
        varying vec3 vColor;
        uniform float time;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        uniform float opacity;
        
        void main() {
          float strength = distance(gl_PointCoord, vec2(0.5));
          strength = 1.0 - strength;
          strength = pow(strength, 3.0);
          
          vec3 finalColor = mix(vec3(0.0), vColor, strength);
          gl_FragColor = vec4(finalColor, strength * opacity);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Animaciones
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.005
      
      particlesMaterial.uniforms.time.value = time
      
      const targetX = mouseRef.current.x * 0.5
      const targetY = mouseRef.current.y * 0.3
      
      particles.rotation.x += (targetY - particles.rotation.x) * 0.02
      particles.rotation.y += (targetX - particles.rotation.y) * 0.02
      
      renderer.render(scene, camera)
    }
    
    animate()

    // Efectos de scroll
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          particlesMaterial.uniforms.opacity.value = Math.sin(progress * Math.PI)
        }
      }
    })

    // Mouse y resize handlers
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center py-20 px-4"
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
        <h2 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text`}>
          El Futuro se Construye Hoy
        </h2>
        
        <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          Toma la delantera y conviértete en el referente de tu industria con soluciones IA de Datagora.
        </p>
        
        <button 
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm"
          onClick={() => window.open('https://calendly.com/datagora', '_blank')}
        >
          Charlemos
        </button>
      </div>
    </section>
  )
} 