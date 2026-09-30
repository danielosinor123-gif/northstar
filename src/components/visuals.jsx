export function StarMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 1c.9 6.4 4.7 10.4 11 11-6.3.6-10.1 4.6-11 11-.9-6.4-4.7-10.4-11-11 6.3-.6 10.1-4.6 11-11z"
        fill="currentColor"
      />
    </svg>
  )
}

export function StarVisual() {
  return (
    <svg viewBox="0 0 800 800" className="star-visual" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="sv-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(143,123,255,0.45)" />
          <stop offset="45%" stopColor="rgba(143,123,255,0.14)" />
          <stop offset="100%" stopColor="rgba(143,123,255,0)" />
        </radialGradient>
        <radialGradient id="sv-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#cfc4ff" />
          <stop offset="100%" stopColor="rgba(143,123,255,0)" />
        </radialGradient>
        <linearGradient id="sv-ring" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(184,168,255,0)" />
          <stop offset="50%" stopColor="rgba(184,168,255,0.55)" />
          <stop offset="100%" stopColor="rgba(184,168,255,0)" />
        </linearGradient>
      </defs>
      <circle cx="400" cy="400" r="360" fill="url(#sv-glow)" />
      <g className="spin" style={{ animationDuration: '90s' }}>
        <ellipse
          cx="400"
          cy="400"
          rx="330"
          ry="128"
          fill="none"
          stroke="url(#sv-ring)"
          strokeWidth="1.2"
          transform="rotate(-24 400 400)"
        />
        <ellipse
          cx="400"
          cy="400"
          rx="300"
          ry="196"
          fill="none"
          stroke="url(#sv-ring)"
          strokeWidth="1"
          opacity="0.6"
          transform="rotate(38 400 400)"
        />
      </g>
      <path
        d="M400 200v-90M400 600v90M180 400h-90M620 400h90"
        stroke="url(#sv-ring)"
        strokeWidth="1"
        opacity="0.7"
      />
      <g fill="#b8a8ff">
        <circle className="twinkle" cx="665" cy="290" r="3.5" />
        <circle className="twinkle" style={{ animationDelay: '1.2s' }} cx="150" cy="520" r="3" />
        <circle className="twinkle" style={{ animationDelay: '2.1s' }} cx="520" cy="588" r="3.5" />
        <circle className="twinkle" style={{ animationDelay: '3s' }} cx="252" cy="192" r="2.5" />
      </g>
      <circle cx="400" cy="400" r="110" fill="url(#sv-core)" />
      <path
        d="M400 268c11 78 57 125 134 132-77 11-123 57-134 132-11-77-57-125-134-132 77-11 123-57 134-132z"
        fill="#f5f2ea"
        opacity="0.95"
      />
      <path
        d="M400 340c6 38 27 57 60 60-33 6-54 27-60 60-6-33-27-54-60-60 33-6 54-27 60-60z"
        fill="#b8a8ff"
        opacity="0.85"
        transform="rotate(45 400 400)"
      />
    </svg>
  )
}

export function ApproachVisual() {
  return (
    <svg viewBox="0 0 360 360" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="av-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(143,123,255,0.4)" />
          <stop offset="100%" stopColor="rgba(143,123,255,0)" />
        </radialGradient>
      </defs>
      <circle cx="180" cy="180" r="170" fill="url(#av-glow)" />
      <g fill="none" stroke="rgba(184,168,255,0.35)" strokeWidth="1">
        <circle cx="180" cy="180" r="130" strokeDasharray="2 8" />
        <circle cx="180" cy="180" r="92" opacity="0.7" />
        <circle cx="180" cy="180" r="54" opacity="0.5" />
      </g>
      <g fill="#b8a8ff">
        <circle className="twinkle" cx="298" cy="128" r="3.5" />
        <circle className="twinkle" style={{ animationDelay: '1.4s' }} cx="96" cy="248" r="3" />
        <circle className="twinkle" style={{ animationDelay: '2.6s' }} cx="180" cy="50" r="2.5" />
      </g>
      <path
        d="M180 128c3.5 30 22 47 51 52-30 3.5-47.5 22-51 52-3.5-30-22-48.5-51-52 29-5 47.5-22 51-52z"
        fill="#f5f2ea"
        opacity="0.95"
      />
    </svg>
  )
}

export function OrbitArt() {
  return (
    <svg viewBox="0 0 640 440" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="oa-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b0e1a" />
          <stop offset="100%" stopColor="#070910" />
        </linearGradient>
        <radialGradient id="oa-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#b8a8ff" />
          <stop offset="100%" stopColor="rgba(143,123,255,0)" />
        </radialGradient>
      </defs>
      <rect width="640" height="440" fill="url(#oa-bg)" />
      <g fill="none" stroke="rgba(184,168,255,0.28)">
        <ellipse cx="320" cy="220" rx="250" ry="96" transform="rotate(-16 320 220)" />
        <ellipse
          cx="320"
          cy="220"
          rx="228"
          ry="150"
          transform="rotate(30 320 220)"
          strokeDasharray="3 7"
          opacity="0.7"
        />
        <ellipse cx="320" cy="220" rx="180" ry="180" opacity="0.35" />
      </g>
      <circle cx="320" cy="220" r="70" fill="url(#oa-core)" opacity="0.8" />
      <circle cx="320" cy="220" r="22" fill="#f5f2ea" />
      <g fill="rgba(143,123,255,0.22)">
        <circle cx="540" cy="150" r="13" />
        <circle cx="150" cy="300" r="11" />
        <circle cx="420" cy="360" r="10" />
        <circle cx="235" cy="105" r="9" />
      </g>
      <g fill="#8f7bff">
        <circle cx="540" cy="150" r="5" />
        <circle cx="150" cy="300" r="4" />
        <circle cx="420" cy="360" r="3.5" />
        <circle cx="235" cy="105" r="3" />
      </g>
    </svg>
  )
}

export function SolaceArt() {
  return (
    <svg viewBox="0 0 640 440" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="sa-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0f1c" />
          <stop offset="100%" stopColor="#070a12" />
        </linearGradient>
        <linearGradient id="sa-wave" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(245,242,234,0)" />
          <stop offset="50%" stopColor="rgba(245,242,234,0.5)" />
          <stop offset="100%" stopColor="rgba(245,242,234,0)" />
        </linearGradient>
        <radialGradient id="sa-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(245,242,234,0.6)" />
          <stop offset="100%" stopColor="rgba(245,242,234,0)" />
        </radialGradient>
      </defs>
      <rect width="640" height="440" fill="url(#sa-bg)" />
      <g fill="#f5f2ea">
        <circle className="twinkle" cx="110" cy="80" r="2" opacity="0.6" />
        <circle className="twinkle" style={{ animationDelay: '1.5s' }} cx="220" cy="140" r="1.6" opacity="0.5" />
        <circle className="twinkle" style={{ animationDelay: '2.4s' }} cx="580" cy="70" r="2" opacity="0.55" />
        <circle className="twinkle" style={{ animationDelay: '3.2s' }} cx="360" cy="60" r="1.6" opacity="0.45" />
      </g>
      <circle cx="480" cy="120" r="64" fill="url(#sa-moon)" opacity="0.8" />
      <circle cx="480" cy="120" r="20" fill="#f5f2ea" opacity="0.9" />
      <path
        d="M0 300c110-26 210 22 320 0s210-44 320-18"
        stroke="rgba(143,123,255,0.35)"
        strokeWidth="10"
        fill="none"
        opacity="0.22"
      />
      <path
        d="M0 300c110-26 210 22 320 0s210-44 320-18"
        stroke="url(#sa-wave)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M0 330c110-20 220 18 320 4s200-34 320-10"
        stroke="rgba(184,168,255,0.35)"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M0 366c120-16 200 14 320 6s220-26 320-8"
        stroke="rgba(245,242,234,0.16)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}

export function MeridianArt() {
  return (
    <svg viewBox="0 0 640 440" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="ma-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#070b12" />
          <stop offset="100%" stopColor="#0b101c" />
        </linearGradient>
        <linearGradient id="ma-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="rgba(143,123,255,0)" />
          <stop offset="100%" stopColor="#8f7bff" />
        </linearGradient>
      </defs>
      <rect width="640" height="440" fill="url(#ma-bg)" />
      <g stroke="rgba(245,242,234,0.06)">
        <path d="M0 110h640M0 190h640M0 270h640M0 350h640" />
      </g>
      <g fill="none" strokeWidth="1">
        <path d="M20 250c70-70 130-40 190-90s130-30 200-70" stroke="rgba(184,168,255,0.3)" />
        <path d="M40 300c80-60 140-30 200-70s140-24 210-60" stroke="rgba(184,168,255,0.18)" />
        <path d="M10 200c70-80 140-50 200-100s140-36 220-80" stroke="rgba(245,242,234,0.12)" />
      </g>
      <g fill="rgba(245,242,234,0.14)">
        <rect x="70" y="330" width="24" height="70" />
        <rect x="130" y="300" width="24" height="100" />
        <rect x="190" y="316" width="24" height="84" />
        <rect x="250" y="282" width="24" height="118" />
        <rect x="310" y="304" width="24" height="96" />
        <rect x="370" y="264" width="24" height="136" />
        <rect x="550" y="296" width="24" height="104" />
      </g>
      <rect x="430" y="220" width="24" height="180" fill="url(#ma-bar)" />
      <circle cx="442" cy="214" r="12" fill="rgba(143,123,255,0.25)" />
      <circle cx="442" cy="214" r="4" fill="#b8a8ff" />
    </svg>
  )
}

const PROCESS_TITLES = ['Discover', 'Define', 'Design', 'Build', 'Launch']

function DiscoverArt() {
  return (
    <svg viewBox="0 0 480 340" aria-hidden="true" focusable="false">
      <rect width="480" height="340" fill="#0d1019" />
      <g fill="rgba(245,242,234,0.32)">
        <circle cx="140" cy="96" r="3" />
        <circle cx="300" cy="70" r="2.4" />
        <circle cx="380" cy="120" r="3" />
        <circle cx="110" cy="220" r="2.4" />
        <circle cx="200" cy="280" r="3" />
        <circle cx="350" cy="250" r="2.4" />
        <circle cx="420" cy="200" r="3" />
      </g>
      <circle cx="240" cy="160" r="58" fill="none" stroke="#b8a8ff" strokeWidth="1.5" />
      <path d="M282 202l34 30" stroke="#b8a8ff" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="228" cy="150" r="4" fill="#8f7bff" />
      <circle cx="256" cy="172" r="2.6" fill="rgba(143,123,255,0.6)" />
    </svg>
  )
}

function DefineArt() {
  return (
    <svg viewBox="0 0 480 340" aria-hidden="true" focusable="false">
      <rect width="480" height="340" fill="#0d1019" />
      <g stroke="rgba(245,242,234,0.28)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M70 110h200M70 140h160M70 170h180M70 200h140M70 230h170" />
      </g>
      <path d="M290 170h58" stroke="#8f7bff" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M340 162l14 8-14 8" stroke="#8f7bff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="380" y="120" width="60" height="100" rx="6" fill="none" stroke="#b8a8ff" strokeWidth="1.5" />
      <path d="M392 150h36M392 170h28" stroke="rgba(245,242,234,0.4)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function DesignArt() {
  return (
    <svg viewBox="0 0 480 340" aria-hidden="true" focusable="false">
      <rect width="480" height="340" fill="#0d1019" />
      <rect x="90" y="70" width="300" height="200" rx="10" fill="none" stroke="rgba(245,242,234,0.3)" strokeWidth="1.5" />
      <path d="M90 100h300" stroke="rgba(245,242,234,0.3)" strokeWidth="1.5" />
      <g fill="rgba(245,242,234,0.4)">
        <circle cx="106" cy="85" r="3" />
        <circle cx="118" cy="85" r="3" />
        <circle cx="130" cy="85" r="3" />
      </g>
      <circle cx="140" cy="160" r="22" fill="none" stroke="#b8a8ff" strokeWidth="1.5" />
      <path d="M180 145h160M180 165h130M180 185h150" stroke="rgba(245,242,234,0.35)" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="180" y="212" width="80" height="26" rx="13" fill="#8f7bff" opacity="0.85" />
    </svg>
  )
}

function BuildArt() {
  return (
    <svg viewBox="0 0 480 340" aria-hidden="true" focusable="false">
      <rect width="480" height="340" fill="#0d1019" />
      <path d="M170 118l-40 40 40 40" stroke="#b8a8ff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M310 118l40 40-40 40" stroke="#b8a8ff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M262 106l-44 104" stroke="#8f7bff" strokeWidth="1.5" strokeLinecap="round" />
      <g stroke="rgba(245,242,234,0.25)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M90 240h110M90 260h150" />
      </g>
      <rect x="150" y="288" width="180" height="4" rx="2" fill="rgba(245,242,234,0.12)" />
      <rect x="150" y="288" width="126" height="4" rx="2" fill="#8f7bff" />
    </svg>
  )
}

function LaunchArt() {
  return (
    <svg viewBox="0 0 480 340" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="la-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(143,123,255,0.5)" />
          <stop offset="100%" stopColor="rgba(143,123,255,0)" />
        </radialGradient>
      </defs>
      <rect width="480" height="340" fill="#0d1019" />
      <path
        d="M70 272C160 252 220 200 280 150s90-58 122-66"
        stroke="rgba(245,242,234,0.3)"
        strokeWidth="1.5"
        fill="none"
      />
      <g stroke="rgba(245,242,234,0.2)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M70 272h40M150 260h30M230 210h30M310 150h30" />
      </g>
      <circle cx="402" cy="84" r="60" fill="url(#la-glow)" />
      <path
        d="M402 32c4 32 20 48 50 52-30 4-46 20-50 52-4-32-20-48-50-52 30-4 46-20 50-52z"
        fill="#f5f2ea"
      />
    </svg>
  )
}

const PROCESS_ART = [<DiscoverArt key="d" />, <DefineArt key="df" />, <DesignArt key="ds" />, <BuildArt key="b" />, <LaunchArt key="l" />]

export function ProcessVisual({ active }) {
  return (
    <>
      <div className="process-stage" aria-hidden="true">
        {PROCESS_ART.map((Art, i) => (
          <div key={i} className={`process-layer${i === active ? ' is-active' : ''}`}>
            {Art}
          </div>
        ))}
      </div>
      <div className="process-meta">
        <span className="label">
          Phase {String(active + 1).padStart(2, '0')} — {PROCESS_TITLES[active]}
        </span>
        <span className="label">
          {String(active + 1).padStart(2, '0')} / 05
        </span>
      </div>
      <div className="process-progress">
        <span style={{ width: `${((active + 1) / PROCESS_ART.length) * 100}%` }} />
      </div>
    </>
  )
}
