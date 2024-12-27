'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function PortalTransitionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Crear el portal
    const geometry = new THREE.TorusGeometry(2, 0.5, 32, 100)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        progress: { value: 0 },
        tDiffuse: { value: null },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float time;
        uniform float progress;
        
        void main() {
          vUv = uv;
          vPosition = position;
          
          vec3 p = position;
          p.z += sin(p.x * 10.0 + time) * 0.1;
          p.z += sin(p.y * 10.0 + time) * 0.1;
          
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform float time;
        uniform float progress;
        
        void main() {
          vec3 color1 = vec3(0.1, 0.3, 0.9);  // Azul eléctrico
          vec3 color2 = vec3(0.8, 0.1, 0.8);  // Morado neón
          
          float noise = sin(vPosition.x * 10.0 + time) * sin(vPosition.y * 10.0 + time);
          vec3 finalColor = mix(color1, color2, noise * 0.5 + 0.5);
          
          float alpha = smoothstep(0.4, 0.5, 1.0 - length(vPosition.xy));
          alpha *= 0.8;
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    })

    const portal = new THREE.Mesh(geometry, material)
    scene.add(portal)
    
    // Añadir partículas alrededor del portal
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000
    const positions = new Float32Array(particlesCount * 3)
    
    for(let i = 0; i < particlesCount * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2
      const radius = 2 + Math.random() * 2
      positions[i] = Math.cos(angle) * radius
      positions[i + 1] = Math.sin(angle) * radius
      positions[i + 2] = (Math.random() - 0.5) * 2
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x88ccff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      timeRef.current += 0.01
      
      material.uniforms.time.value = timeRef.current
      portal.rotation.z += 0.001
      particles.rotation.z -= 0.002
      
      renderer.render(scene, camera)
    }

    animate()

    // Animación al scroll
    gsap.to(portal.rotation, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      x: Math.PI,
      ease: 'none',
    })

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (container && renderer) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="h-[70vh] relative bg-gradient-to-b from-transparent via-gray-900/50 to-black/90"
      style={{
        background: `
          linear-gradient(
            to bottom,
            rgba(17, 24, 39, 0) 0%,
            rgba(17, 24, 39, 0.2) 20%,
            rgba(17, 24, 39, 0.8) 50%,
            rgba(0, 0, 0, 0.95) 100%
          )
        `
      }}
    />
  )
} 