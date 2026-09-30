const CAPABILITIES = [
  {
    n: '01',
    title: 'Product strategy',
    description: 'Research, positioning, and roadmaps that turn ambition into shippable decisions.',
  },
  {
    n: '02',
    title: 'Brand systems',
    description: 'Identities built as living systems — type, color, voice, and rules that scale.',
  },
  {
    n: '03',
    title: 'Interface design',
    description: 'Calm hierarchy, honest feedback, and detail you can feel in every screen.',
  },
  {
    n: '04',
    title: 'Creative development',
    description: 'Production-grade frontends engineered for speed, access, and maintainability.',
  },
  {
    n: '05',
    title: 'Motion design',
    description: 'Transitions, prototypes, and micro-interactions that explain, never decorate.',
  },
  {
    n: '06',
    title: 'AI experiences',
    description: 'Interfaces for machine intelligence: trustworthy, legible, genuinely useful.',
  },
]

export default function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Capabilities</p>
          <h2>Everything a product needs. Nothing it doesn&rsquo;t.</h2>
        </div>
        <ul className="cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <li className="cap" key={cap.n} data-reveal style={{ '--reveal-delay': `${(i % 3) * 90}ms` }}>
              <span className="cap-num">{cap.n}</span>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
