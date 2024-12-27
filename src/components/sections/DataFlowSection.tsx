'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DataFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return
    
    const container = containerRef.current
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x000000, 0.15)
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Líneas con gradiente
    const lineMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        opacity: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform float opacity;
        varying vec2 vUv;
        void main() {
          vec3 color1 = vec3(0.31, 0.27, 0.9);  // Indigo
          vec3 color2 = vec3(0.93, 0.27, 0.9);  // Magenta
          vec3 finalColor = mix(color1, color2, sin(vUv.x * 3.14 + time) * 0.5 + 0.5);
          gl_FragColor = vec4(finalColor, opacity * 0.5);
        }
      `,
      transparent: true
    })

    // Crear líneas más orgánicas
    const linesCount = window.innerWidth < 768 ? 30 : 50
    const lines: THREE.Line[] = []
    for (let i = 0; i < linesCount; i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10),
        new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10),
        new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10)
      ])
      const points = curve.getPoints(50)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(geometry, lineMaterial)
      lines.push(line)
      scene.add(line)
    }

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      timeRef.current += 0.005
      lineMaterial.uniforms.time.value = timeRef.current

      lines.forEach((line, i) => {
        line.rotation.x = Math.sin(timeRef.current + i) * 0.1
        line.rotation.y = Math.cos(timeRef.current + i) * 0.1
      })

      renderer.render(scene, camera)
    }

    animate()

    // Animación al scroll con fade
    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const opacity = Math.sin(progress * Math.PI)
          lineMaterial.uniforms.opacity.value = opacity
        }
      }
    })

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
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
      className="h-screen relative bg-black"
    />
  )
} 