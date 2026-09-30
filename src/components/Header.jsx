import { useEffect, useState } from 'react'
import { StarMark } from './visuals.jsx'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Approach', href: '#approach' },
  { label: 'Journal', href: '#journal' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="site-header" data-scrolled={scrolled ? '' : undefined}>
      <div className="container header-inner">
        <a className="wordmark" href="#top" aria-label="Northstar — back to top">
          <StarMark />
          <span>NORTHSTAR</span>
        </a>
        <nav className={`nav${open ? ' open' : ''}`} id="primary-nav" aria-label="Primary">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a className="nav-link" href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary header-cta" href="#contact" onClick={() => setOpen(false)}>
            Start a conversation
          </a>
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
