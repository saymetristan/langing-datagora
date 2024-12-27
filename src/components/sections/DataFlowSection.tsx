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

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Crear líneas de datos
    const linesCount = 50
    const lines: THREE.Line[] = []
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x88ccff,
      transparent: true,
      opacity: 0.6
    })

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
    const nodesMaterial = new THREE.MeshBasicMaterial({
      color: 0xff88ff,
      transparent: true,
      opacity: 0.8
    })

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

    const animate = () => {
      requestAnimationFrame(animate)
      timeRef.current += 0.005

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

    // Animación al scroll
    gsap.to(camera.position, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      z: 3,
      y: 1,
      ease: 'none',
    })

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="h-screen relative bg-gradient-to-b from-black via-gray-900 to-black"
    />
  )
} 