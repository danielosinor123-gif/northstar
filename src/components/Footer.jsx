import { StarMark } from './visuals.jsx'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Approach', href: '#approach' },
  { label: 'Journal', href: '#journal' },
]

const SOCIAL = [
  { label: 'X (Twitter)', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'Instagram', href: '#' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="wordmark" href="#top" aria-label="Northstar — back to top">
              <StarMark />
              <span>NORTHSTAR</span>
            </a>
            <p>
              An independent digital studio designing products, identities, and experiences for
              teams building what comes next.
            </p>
          </div>
          <nav className="footer-col" aria-label="Footer">
            <h4>Studio</h4>
            <ul>
              {NAV.map((link) => (
                <li key={link.href}>
                  <a className="footer-link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a className="footer-link" href="mailto:hello@northstar.studio">
                  hello@northstar.studio
                </a>
              </li>
              {SOCIAL.map((social) => (
                <li key={social.label}>
                  <a className="footer-link" href={social.href}>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Elsewhere</h4>
            <ul>
              <li>Lagos — WAT (UTC+1)</li>
              <li>London — GMT (UTC+0)</li>
              <li>Everywhere — Remote</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Northstar Studio. All rights reserved.</span>
          <span className="footer-legal">
            <a className="footer-link" href="#top">
              Privacy
            </a>
            <a className="footer-link" href="#top">
              Accessibility
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
