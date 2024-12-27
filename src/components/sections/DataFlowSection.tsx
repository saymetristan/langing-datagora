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

    const nodesCount = window.innerWidth < 768 ? 50 : 100
    const nodesGeometry = new THREE.SphereGeometry(0.05, 16, 16)
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
          vec3 color1 = vec3(0.31, 0.27, 0.9);  // Azul eléctrico
          vec3 color2 = vec3(0.93, 0.27, 0.9);  // Morado neón
          vec3 color3 = vec3(0.27, 0.9, 0.31);  // Verde cibernético
          
          float t = mod(time * 0.5, 3.0);
          vec3 finalColor;
          
          if(t < 1.0) {
            finalColor = mix(color1, color2, t);
          } else if(t < 2.0) {
            finalColor = mix(color2, color3, t - 1.0);
          } else {
            finalColor = mix(color3, color1, t - 2.0);
          }
          
          float glow = (1.0 - length(vUv - 0.5) * 2.0);
          gl_FragColor = vec4(finalColor, opacity * glow);
        }
      `,
      transparent: true
    })

    const nodes: THREE.Mesh[] = []
    for (let i = 0; i < nodesCount; i++) {
      const node = new THREE.Mesh(nodesGeometry, nodesMaterial)
      node.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      nodes.push(node)
      scene.add(node)
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

      nodes.forEach((node, i) => {
        node.position.y += Math.sin(timeRef.current + i) * 0.002
        node.position.x += Math.cos(timeRef.current + i * 0.5) * 0.002
      })
      nodesMaterial.uniforms.time.value = timeRef.current

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
      className="h-screen relative bg-gray-900"
      style={{ backgroundColor: '#111827' }}
    />
  )
} 