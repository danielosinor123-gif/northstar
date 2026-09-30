import { useEffect, useRef } from 'react'
import { StarVisual } from './visuals.jsx'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    if (reduced || !finePointer) return

    let raf = 0
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', x.toFixed(3))
        el.style.setProperty('--my', y.toFixed(3))
      })
    }
    el.addEventListener('pointermove', onMove)
    return () => {
      el.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-field" aria-hidden="true" />
      <div className="hero-visual" aria-hidden="true">
        <StarVisual />
      </div>
      <div className="container hero-inner">
        <p className="eyebrow" data-reveal>
          A creative technology company
        </p>
        <h1 data-reveal style={{ '--reveal-delay': '90ms' }}>
          Make the complex feel <em>inevitable.</em>
        </h1>
        <p className="hero-lede" data-reveal style={{ '--reveal-delay': '180ms' }}>
          Northstar designs digital products, identities, and experiences for teams building what
          comes next.
        </p>
        <div className="hero-actions" data-reveal style={{ '--reveal-delay': '270ms' }}>
          <a className="btn btn-primary" href="#work">
            Explore our work
          </a>
          <a className="btn btn-ghost" href="#contact">
            Start a conversation
          </a>
        </div>
      </div>
      <div className="hero-footnote" data-reveal style={{ '--reveal-delay': '360ms' }}>
        <div className="container hero-footnote-row">
          <span className="label">Independent digital studio</span>
          <span className="label">Lagos · London · Everywhere</span>
        </div>
      </div>
    </section>
  )
}
