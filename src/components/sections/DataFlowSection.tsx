'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DataFlowSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<number>(0)
  const opacityRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return
    
    const container = containerRef.current // Guardamos referencia
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Líneas con colores actualizados
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x4f46e5, // Indigo eléctrico
      transparent: true,
      opacity: 0
    })

    // Nodos con gradiente
    const nodesMaterial = new THREE.ShaderMaterial({
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
          vec3 finalColor = mix(color1, color2, sin(time * 0.5) * 0.5 + 0.5);
          gl_FragColor = vec4(finalColor, opacity);
        }
      `,
      transparent: true
    })

    // Crear líneas de datos
    const linesCount = 50
    const lines: THREE.Line[] = []
    for (let i = 0; i < linesCount; i++) {
      const points = []
      const segmentCount = Math.floor(Math.random() * 5) + 3
      for (let j = 0; j < segmentCount; j++) {
        points.push(new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ))
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const line = new THREE.Line(geometry, lineMaterial)
      lines.push(line)
      scene.add(line)
    }

    // Crear nodos de datos
    const nodesGeometry = new THREE.SphereGeometry(0.05, 16, 16)
    const nodes: THREE.Mesh[] = []
    const nodesCount = 100
    
    for (let i = 0; i < nodesCount; i++) {
      const node = new THREE.Mesh(nodesGeometry, nodesMaterial)
      node.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      )
      nodes.push(node)
      scene.add(node)
    }

    camera.position.z = 5

    // Animaciones de entrada/salida con ScrollTrigger
    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const opacity = Math.sin(progress * Math.PI)
          opacityRef.current = opacity
          lineMaterial.opacity = opacity
          nodesMaterial.uniforms.opacity.value = opacity
        }
      }
    })

    const animate = () => {
      requestAnimationFrame(animate)
      timeRef.current += 0.005
      nodesMaterial.uniforms.time.value = timeRef.current

      // Animar líneas
      lines.forEach((line, i) => {
        line.rotation.x = Math.sin(timeRef.current + i) * 0.2
        line.rotation.y = Math.cos(timeRef.current + i) * 0.2
      })

      // Animar nodos
      nodes.forEach((node, i) => {
        node.position.y += Math.sin(timeRef.current + i) * 0.01
        node.position.x += Math.cos(timeRef.current + i * 0.5) * 0.01
        
        // Resetear posición si se va muy lejos
        if (Math.abs(node.position.y) > 4) node.position.y = -4 * Math.sign(node.position.y)
        if (Math.abs(node.position.x) > 4) node.position.x = -4 * Math.sign(node.position.x)
      })

      renderer.render(scene, camera)
    }

    animate()

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
      className="h-screen relative bg-gradient-to-b from-black via-gray-900/50 to-black"
    />
  )
} 