import { OrbitArt, SolaceArt, MeridianArt } from './visuals.jsx'

const PROJECTS = [
  {
    id: 'orbit',
    category: 'Product · Platform',
    name: 'Orbit',
    description:
      'An intelligent operations platform that turns scattered team signals into one calm, decisive view.',
    art: <OrbitArt />,
  },
  {
    id: 'solace',
    category: 'Finance · Wellness',
    name: 'Solace',
    description:
      'A calm financial wellness experience designed to make money feel legible, gentle, and under control.',
    art: <SolaceArt />,
  },
  {
    id: 'meridian',
    category: 'Climate · Data',
    name: 'Meridian',
    description:
      'A climate intelligence dashboard translating planetary-scale data into decisions teams can act on today.',
    art: <MeridianArt />,
  },
]

export default function FeaturedWork() {
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Selected work</p>
          <h2>Work that ships — and stays.</h2>
          <p className="section-intro">
            Three recent engagements across operations, finance, and climate. Each began as a
            tangled brief and ended as a product people rely on every day.
          </p>
        </div>
        <div className="projects">
          {PROJECTS.map((project, i) => (
            <article className="project" key={project.id} data-reveal>
              <a
                className="project-media"
                href="#work"
                aria-label={`View project: ${project.name}`}
                style={{ '--reveal-delay': i % 2 ? '120ms' : '0ms' }}
              >
                {project.art}
                <span className="project-cta">
                  View project <span aria-hidden="true">→</span>
                </span>
              </a>
              <div className="project-info">
                <p className="label">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a className="text-link" href="#work">
                  View project <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
