import { useEffect, useState } from 'react'
import { StarMark } from './visuals.jsx'

export default function Loader() {
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t1 = setTimeout(() => setDone(true), reduced ? 120 : 1100)
    const t2 = setTimeout(() => setGone(true), reduced ? 260 : 1700)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (gone) return null

  return (
    <div className={`loader${done ? ' loader--done' : ''}`} aria-hidden="true">
      <div className="loader-inner">
        <span className="loader-mark">
          <StarMark />
        </span>
        <span className="loader-word">NORTHSTAR</span>
        <span className="loader-line">
          <span />
        </span>
      </div>
    </div>
  )
}
