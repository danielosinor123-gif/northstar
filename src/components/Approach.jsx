import { ApproachVisual } from './visuals.jsx'

const PRINCIPLES = [
  {
    title: 'Clarity over decoration',
    description: 'Every element earns its place. If it doesn’t help someone understand or act, it goes.',
  },
  {
    title: 'Motion with purpose',
    description: 'Animation explains hierarchy, confirms actions, and guides attention — never for its own sake.',
  },
  {
    title: 'Systems that scale',
    description: 'Tokens, components, and rules designed so the product can grow without losing its soul.',
  },
]

export default function Approach() {
  return (
    <section className="section" id="approach">
      <div className="container">
        <div className="approach-grid">
          <div className="approach-copy" data-reveal>
            <p className="eyebrow">Approach</p>
            <h2 className="approach-statement">&ldquo;Good technology disappears into the experience.&rdquo;</h2>
            <p>
              The best products don&rsquo;t announce themselves. They get out of the way, respond
              when needed, and leave people feeling capable. That standard shapes every decision we
              make — from the first sketch to the last deploy.
            </p>
          </div>
          <div className="approach-visual" aria-hidden="true" data-reveal style={{ '--reveal-delay': '150ms' }}>
            <ApproachVisual />
          </div>
        </div>
        <ul className="principles">
          {PRINCIPLES.map((principle, i) => (
            <li
              className="principle"
              key={principle.title}
              data-reveal
              style={{ '--reveal-delay': `${i * 100}ms` }}
            >
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
