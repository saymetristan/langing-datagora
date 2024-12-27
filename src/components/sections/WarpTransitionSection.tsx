'use client'

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WarpTransitionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      uniform float time;
      uniform float progress;
      varying vec2 vUv;
      
      void main() {
        vec2 p = vUv * 2.0 - 1.0;
        float len = length(p);
        vec2 ripple = vUv + p/len * 0.03 * cos(len * 12.0 - time * 4.0);
        float delta = len * 0.1;
        vec3 col = mix(
          vec3(0.1, 0.0, 0.3),
          vec3(0.3, 0.0, 0.5),
          smoothstep(0.2, 0.8, len + sin(time * 0.5) * 0.1)
        );
        float alpha = smoothstep(0.5, 0.4, len);
        gl_FragColor = vec4(col, alpha);
      }
    `

    materialRef.current = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        progress: { value: 0 }
      },
      transparent: true,
      depthWrite: false
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, materialRef.current)
    scene.add(mesh)

    const animate = () => {
      if (materialRef.current) {
        timeRef.current += 0.01
        materialRef.current.uniforms.time.value = timeRef.current
      }
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Scroll Animation
    gsap.to(materialRef.current?.uniforms.progress, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      value: 1,
      ease: 'none',
    })

    const handleResize = () => {
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
      className="h-[50vh] relative bg-gradient-to-b from-gray-900 to-black"
    />
  )
} 