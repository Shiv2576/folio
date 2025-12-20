// components/ui/floating-words-background.tsx
'use client'

import React, { useEffect, useRef } from 'react'

const CONFIG = {
  WORDS: [
    'kubernetes',
    'rediscluster',
    'reconcilers',
    'kubectl',
    'goroutines',
    'channels',
    'bufferd',
    'unbuffered',
    'mutex',
    'fanin',
    'kafka',
    'postgres',
    'webSockets',
    'pipelines',
    'atomic',
    'waitGroup',
    'leakybucket',
    'timeouts',
    'bulkheads',
    'idempotency',
    'contextcancellation',
    'DNS',
    'CDN',
    'docker',
    'HTTP',
    'gRPC',
    'pools',
    'solidity',
    'typescript',
    'react',
    'SOLID',
    'indexing',
    'sharding',
    'memcached',
    'latency',
    'throughput',
    'webhooks',
    'graphQL',
    'git',
  ],
  MAX_WORDS: 20,
  MIN_WORDS: 20,
  LIFESPAN: 5000,
  FADE_IN_DURATION: 2000,
  VISIBLE_DURATION: 1000,
  FADE_OUT_DURATION: 2000,
  GENERATION_RATE: 200,
}

const FloatingWords: React.FC<{ className?: string }> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const activeWordsRef = useRef<any[]>([])
  const frameIdRef = useRef<number | null>(null)
  const isMountedRef = useRef(true)

  // Fixed virtual space
  const VIRTUAL_HEIGHT = 10000
  const getViewportWidth = () =>
    typeof window !== 'undefined' ? window.innerWidth : 1920

  // Minimal utility functions
  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v))
  const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
  const randItem = (arr: string[]) =>
    arr[Math.floor(Math.random() * arr.length)]
  const rand = (min: number, max: number) => Math.random() * (max - min) + min

  const createWord = () => {
    if (
      !isMountedRef.current ||
      !containerRef.current ||
      activeWordsRef.current.length >= CONFIG.MAX_WORDS
    )
      return

    const el = document.createElement('div')
    el.className = 'floating-word'
    el.textContent = randItem(CONFIG.WORDS)
    el.style.position = 'absolute'
    el.style.opacity = '0'
    el.style.transform = 'translate3d(0,0,0)'

    // Position in virtual space
    const width = getViewportWidth()
    const EXTRA = 0.3
    const x = rand(-width * EXTRA, width * (1 + EXTRA))
    const y = rand(0, VIRTUAL_HEIGHT)
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`

    containerRef.current.appendChild(el)

    const now = performance.now()
    activeWordsRef.current.push({
      el,
      x,
      y,
      speedX: rand(0.3, 0.5) * (Math.random() > 0.5 ? 1 : -1),
      speedY: rand(0.3, 0.5) * (Math.random() > 0.5 ? 1 : -1),
      createdAt: now,
      fadeInEnd: now + CONFIG.FADE_IN_DURATION,
      fadeOutStart: now + CONFIG.FADE_IN_DURATION + CONFIG.VISIBLE_DURATION,
      expiresAt: now + CONFIG.LIFESPAN,
      opacity: 0,
      driftTime: 0,
      driftSpeed: rand(0.5, 2),
      driftAmount: rand(-0.1, 0.1),
    })
  }

  const removeWord = (index: number) => {
    const word = activeWordsRef.current[index]
    word.el.remove()
    activeWordsRef.current.splice(index, 1)
  }

  const animationLoop = () => {
    if (!isMountedRef.current) return

    const now = performance.now()
    const width = getViewportWidth()
    const EXTRA = 0.1
    const wrapLeft = -width * EXTRA
    const wrapRight = width * (1 + EXTRA)

    for (let i = activeWordsRef.current.length - 1; i >= 0; i--) {
      const w = activeWordsRef.current[i]

      // Update opacity
      let targetOpacity = 0
      if (now < w.fadeInEnd) {
        targetOpacity = ease(
          clamp((now - w.createdAt) / CONFIG.FADE_IN_DURATION, 0, 1),
        )
      } else if (now < w.fadeOutStart) {
        targetOpacity = 1
      } else if (now < w.expiresAt) {
        targetOpacity =
          1 -
          ease(clamp((now - w.fadeOutStart) / CONFIG.FADE_OUT_DURATION, 0, 1))
      } else {
        removeWord(i)
        continue
      }

      w.opacity = targetOpacity
      w.el.style.opacity = String(targetOpacity)

      // Update position (only if visible)
      if (targetOpacity > 0) {
        w.driftTime += 1 / 60
        w.x += w.speedX + Math.sin(w.driftTime * w.driftSpeed) * w.driftAmount
        w.y +=
          w.speedY + Math.cos(w.driftTime * w.driftSpeed * 0.7) * w.driftAmount

        // Horizontal wrapping
        if (w.x > wrapRight) w.x = wrapLeft
        if (w.x < wrapLeft) w.x = wrapRight

        // Vertical wrapping (infinite space)
        if (w.y > VIRTUAL_HEIGHT) w.y = 0
        if (w.y < 0) w.y = VIRTUAL_HEIGHT

        w.el.style.transform = `translate3d(${w.x}px, ${w.y}px, 0)`

        // GPU hint for visible words
        if (
          targetOpacity > 0.01 &&
          w.el.style.willChange !== 'transform, opacity'
        ) {
          w.el.style.willChange = 'transform, opacity'
        } else if (targetOpacity <= 0.01) {
          w.el.style.willChange = 'auto'
        }
      }
    }

    if (isMountedRef.current) {
      frameIdRef.current = requestAnimationFrame(animationLoop)
    }
  }

  useEffect(() => {
    isMountedRef.current = true

    // Inject styles once
    if (!document.getElementById('floating-words-styles')) {
      const style = document.createElement('style')
      style.id = 'floating-words-styles'
      style.textContent = `
        .floating-word {
          color: #000;
          font: 300 10px "Courier New", monospace;
          white-space: nowrap;
          letter-spacing: 1px;
          pointer-events: none;
          user-select: none;
          contain: layout style paint;
        }
        .dark .floating-word { color: #fff !important; }
        html { overflow-x: hidden; }
      `
      document.head.appendChild(style)
    }

    // Create initial words
    const container = containerRef.current
    if (!container) return

    for (let i = 0; i < CONFIG.MIN_WORDS; i++) createWord()

    // Start animation
    frameIdRef.current = requestAnimationFrame(animationLoop)

    // Word generation
    const genInterval = setInterval(() => {
      if (activeWordsRef.current.length < CONFIG.MIN_WORDS) createWord()
    }, CONFIG.GENERATION_RATE)

    // Resize handler
    const handleResize = () => {
      // Width automatically updates via getViewportWidth()
    }
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      isMountedRef.current = false
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current)
      clearInterval(genInterval)
      window.removeEventListener('resize', handleResize)

      // Cleanup
      activeWordsRef.current.forEach((w) => w.el?.remove())
      activeWordsRef.current = []
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none fixed inset-0 ${className}`}
    />
  )
}

export default FloatingWords
