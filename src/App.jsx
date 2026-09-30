import { useEffect } from 'react'
import Loader from './components/Loader.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FeaturedWork from './components/FeaturedWork.jsx'
import Capabilities from './components/Capabilities.jsx'
import Process from './components/Process.jsx'
import Approach from './components/Approach.jsx'
import SocialProof from './components/SocialProof.jsx'
import Journal from './components/Journal.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

export default function App() {
  useReveal()
  return (
    <>
      <Loader />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <FeaturedWork />
        <Capabilities />
        <Process />
        <Approach />
        <SocialProof />
        <Journal />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
