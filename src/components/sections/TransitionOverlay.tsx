'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function TransitionOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.fromTo(overlayRef.current,
      { backgroundColor: '#111827' }, // from gray-900
      {
        backgroundColor: '#030712', // to gray-950
        scrollTrigger: {
          trigger: overlayRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      }
    )
  }, [])

  return (
    <div 
      ref={overlayRef} 
      className="fixed inset-0 -z-20 transition-colors duration-300"
    />
  )
} 