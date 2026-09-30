const PARTNERS = ['Halcyon', 'Vantage & Co', 'Bluewave', 'Forma', 'Atlas Labs', 'Nimbus']

export default function SocialProof() {
  return (
    <section className="section proof">
      <div className="container">
        <p className="label" data-reveal>
          Trusted by teams at
        </p>
        <ul className="proof-logos" data-reveal style={{ '--reveal-delay': '100ms' }}>
          {PARTNERS.map((partner) => (
            <li className="proof-logo" key={partner}>
              {partner}
            </li>
          ))}
        </ul>
        <p className="proof-note" data-reveal>
          Partner names shown are illustrative placeholders.
        </p>
        <figure className="proof-quote" data-reveal>
          <blockquote>
            &ldquo;Placeholder quote — a short line from a real client will live here, focused on
            the experience of working with Northstar.&rdquo;
          </blockquote>
          <figcaption>
            <cite>Client Name</cite> — Role, Company
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
