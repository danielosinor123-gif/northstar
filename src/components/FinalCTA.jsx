export default function FinalCTA() {
  return (
    <section className="section final-cta" id="contact">
      <div className="final-field" aria-hidden="true" />
      <div className="container final-inner">
        <p className="eyebrow eyebrow--center" data-reveal>
          Start a conversation
        </p>
        <h2 data-reveal style={{ '--reveal-delay': '90ms' }}>
          Have a difficult idea?
        </h2>
        <p className="final-lede" data-reveal style={{ '--reveal-delay': '180ms' }}>
          Bring us the messy version. We&rsquo;ll help you find the signal.
        </p>
        <div data-reveal style={{ '--reveal-delay': '270ms' }}>
          <a className="btn btn-primary btn-large" href="mailto:hello@northstar.studio">
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  )
}
