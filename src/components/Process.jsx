import { useEffect, useState } from 'react'
import { ProcessVisual } from './visuals.jsx'

const STEPS = [
  {
    n: '01',
    title: 'Discover',
    description:
      'We immerse ourselves in your problem space — interviews, audits, and quiet observation — until the real question surfaces.',
  },
  {
    n: '02',
    title: 'Define',
    description:
      'We shape strategy: positioning, product principles, and the sharpest possible definition of what we are building and why.',
  },
  {
    n: '03',
    title: 'Design',
    description:
      'Identity, interface, and interaction come together as one system — prototyped early, refined relentlessly.',
  },
  {
    n: '04',
    title: 'Build',
    description:
      'We engineer with the same care we design with: performant, accessible, and ready to scale from day one.',
  },
  {
    n: '05',
    title: 'Launch',
    description:
      'We ship, measure, and keep polishing — because a product is never finished, only evolving.',
  },
]

export default function Process() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const steps = document.querySelectorAll('.process-step')
    if (!steps.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index))
        })
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 },
    )
    steps.forEach((step) => io.observe(step))
    return () => io.disconnect()
  }, [])

  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">How we work</p>
          <h2>From difficult idea to shipped product.</h2>
        </div>
        <div className="process-grid">
          <div className="process-visual" data-reveal>
            <ProcessVisual active={active} />
          </div>
          <ol className="process-steps">
            {STEPS.map((step, i) => (
              <li
                key={step.n}
                className={`process-step${i === active ? ' is-active' : ''}`}
                data-index={i}
                data-reveal
              >
                <span className="step-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
