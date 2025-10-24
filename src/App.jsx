import { useEffect, useState } from 'react'
import './App.css'

const ICON = '/fustun-logo.svg'
const REPO = 'https://github.com/praneeth4040/Fustun-AiStudyingBuddie'

function StarIcon(){
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 3.5l2.89 5.86 6.47.94-4.68 4.56 1.1 6.44L12 18.77 6.22 21.3l1.1-6.44L2.64 10.3l6.47-.94L12 3.5z" fill="#6b4f3b"/>
    </svg>
  )
}
function ForkIcon(){
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M7 3a3 3 0 102.83 4H10v2.18a4 4 0 01-2.34 3.64l-.72.36A5 5 0 004 20h2a3 3 0 013-3h1a5 5 0 005-5V7h.17A3 3 0 1016 4a3 3 0 001.83 3H17v3a3 3 0 01-3 3h-1a5 5 0 01-5 5H7a3 3 0 11-2.83-4H4v-1a3 3 0 011.76-2.73l.72-.32A6 6 0 009 9.18V7h.17A3 3 0 107 3z" fill="#6b4f3b"/>
    </svg>
  )
}

function Nav() {
  const [stats, setStats] = useState({ stars: null, forks: null })
  useEffect(() => {
    fetch('https://api.github.com/repos/praneeth4040/Fustun-AiStudyingBuddie')
      .then(r => r.ok ? r.json() : Promise.reject(r))
      .then(data => setStats({ stars: data.stargazers_count ?? 0, forks: data.forks_count ?? 0 }))
      .catch(() => setStats(s => ({ ...s, stars: s.stars ?? 0, forks: s.forks ?? 0 })))
  }, [])
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Fustun home">
          <img src={ICON} alt="Fustun icon" />
          <span>Fustun</span>
        </a>
        <nav className="nav-links">
          <a className="counter" href={`${REPO}/stargazers`} target="_blank" rel="noreferrer" title="GitHub Stars">
            <StarIcon /> <span>{stats.stars ?? '—'}</span>
          </a>
          <a className="counter" href={`${REPO}/forks`} target="_blank" rel="noreferrer" title="GitHub Forks">
            <ForkIcon /> <span>{stats.forks ?? '—'}</span>
          </a>
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a className="btn" href={REPO} target="_blank" rel="noreferrer">View on GitHub</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-inner">
        <div className="reveal">
          <div className="badge"><span className="sr-only">Badge:</span>New • AI Assistant</div>
          <h1>Study faster with an AI side‑panel for the web</h1>
          <p>Fustun is a lightweight assistant powered by Gemini. Summarize any page, highlight to get instant summaries, autofill searches, and open tabs — anywhere on the web.</p>
          <div className="cta-row">
            <a className="btn primary" href={REPO} target="_blank" rel="noreferrer">Add to Chrome</a>
            <a className="btn ghost" href="#features">See features</a>
          </div>
          <div className="hero-card" style={{marginTop: 16}}>
            <span className="kicker">Tip</span>
            <div className="muted">Select any text on a page to pop a floating “F” button — click it to get a concise summary in the side panel.</div>
          </div>
        </div>
        <div className="mock reveal">
          <div className="panel elevate" aria-label="Fustun side panel preview">
            <div className="panel-head">
              <span className="panel-title">Fustun • Side Panel</span>
              <img src={ICON} alt="Fustun" width={20} height={20} />
            </div>
            <div className="panel-body">
              <div className="bubble user">Summarize this page in 5 concise bullets.</div>
              <div className="bubble ai">• Main topic explained in simple terms.<br/>• Key sections extracted and condensed.<br/>• Actionable highlights you can copy.<br/>• Links and examples emphasized.<br/>• Short, clean, and skimmable.</div>
              <div className="bubble user">Insert "latest AI news" and search.</div>
              <div className="bubble ai">Inserted into the visible input and triggered search.</div>
            </div>
            <div className="panel-input">
              <input type="text" placeholder="Ask Fustun…" aria-label="Ask Fustun" />
              <button className="btn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const icons = {
    doc: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <path d="M7 3h6l4 4v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="#6b4f3b" strokeWidth="1.6"/>
        <path d="M13 3v4h4" stroke="#6b4f3b" strokeWidth="1.6"/>
        <path d="M8.5 12H15" stroke="#6b4f3b" strokeWidth="1.6"/>
        <path d="M8.5 16H15" stroke="#6b4f3b" strokeWidth="1.6"/>
      </svg>
    ),
    magic: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <path d="M4 20l7-7" stroke="#6b4f3b" strokeWidth="1.6"/>
        <path d="M14 10l6-6" stroke="#6b4f3b" strokeWidth="1.6"/>
        <path d="M15 4l1-3 1 3 3 1-3 1-1 3-1-3-3-1 3-1z" fill="#6b4f3b"/>
      </svg>
    ),
    bolt: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#6b4f3b"/>
      </svg>
    ),
    tabs: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="#6b4f3b" strokeWidth="1.6"/>
        <path d="M8 6v2a2 2 0 002 2h9" stroke="#6b4f3b" strokeWidth="1.6"/>
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="#6b4f3b" strokeWidth="1.6"/>
        <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" stroke="#6b4f3b" strokeWidth="1.6"/>
      </svg>
    ),
    gem: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <path d="M12 3l7 6-7 12L5 9l7-6z" stroke="#6b4f3b" strokeWidth="1.6"/>
        <path d="M5 9h14" stroke="#6b4f3b" strokeWidth="1.6"/>
      </svg>
    ),
  }
  const items = [
    { title: 'Summarize any page', desc: 'Get concise bullets for long articles or docs — chunked smartly when needed.', icon: icons.doc },
    { title: 'Highlight → instant summary', desc: 'Select text to show a floating “F” tooltip; click to summarize in the panel.', icon: icons.magic },
    { title: 'Autofill and search', desc: 'Type into inputs (or a selector), dispatch events, and trigger submit or Enter.', icon: icons.bolt },
    { title: 'Open tabs by command', desc: 'Tell Fustun to open links or search results in a new tab.', icon: icons.tabs },
    { title: 'Works everywhere', desc: 'Runs on all sites with a side panel UI for quick access.', icon: icons.globe },
    { title: 'Powered by Gemini', desc: 'Built around Gemini for helpful, clean responses you can copy.', icon: icons.gem },
  ]
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="badge">Features</div>
        <h2 style={{margin: '10px 0 6px'}}>What Fustun can do</h2>
        <p className="muted" style={{marginTop: 0, maxWidth: 680}}>Designed to be fast, focused, and useful for studying or quick research — with a clean look and biscuit accents.</p>
        <div className="features-grid" style={{marginTop: 28}}>
          {items.map((it, idx) => (
            <div key={it.title} className="feature-card reveal" style={{transitionDelay: `${idx * 90}ms`}}>
              <div className="feature-badge" aria-hidden>{it.icon}</div>
              <h3 className="feature-title">{it.title}</h3>
              <p className="feature-desc">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function How() {
  const steps = [
    { title: 'Install and pin', body: 'Install Fustun, then pin it. Click the icon to open the side panel.' },
    { title: 'Summarize or ask', body: 'Ask for a page summary or highlight text and use the floating “F”.' },
    { title: 'Automate actions', body: 'Tell Fustun to open tabs, insert text, or trigger a search.' },
  ]
  return (
    <section id="how" className="section how">
      <div className="container">
        <div className="badge">How it works</div>
        <h2 style={{margin: '10px 0 6px'}}>Three simple steps</h2>
        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 12}}>
          {steps.map((s, i) => (
            <div key={s.title} className="card step reveal" style={{transitionDelay: `${i * 100}ms`}}>
              <span className="num">{i+1}</span>
              <h3 style={{margin:0}}>{s.title}</h3>
              <p className="muted" style={{margin:0}}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="section" aria-label="Call to action">
      <div className="container">
        <div className="card elevate" style={{padding: 24, display: 'grid', gap: 8, textAlign: 'center'}}>
          <h2 style={{margin: 0}}>Ready to try Fustun?</h2>
          <p className="muted" style={{margin: 0}}>Open-source and fast to set up. Add it, pin it, and start studying smarter.</p>
          <div style={{display:'flex', gap:12, justifyContent:'center', marginTop: 6, flexWrap:'wrap'}}>
            <a className="btn primary" href={REPO} target="_blank" rel="noreferrer">Add to Chrome</a>
            <a className="btn" href={REPO} target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container row">
        <div className="row" style={{gap:12, alignItems:'center'}}>
          <img src={ICON} alt="Fustun" width={20} height={20} />
          <span>Fustun</span>
          <span className="muted">© {new Date().getFullYear()}</span>
        </div>
        <div className="row" style={{display:'flex', gap:12}}>
          <a className="muted" href={REPO} target="_blank" rel="noreferrer">GitHub</a>
          <a className="muted" href="#features">Features</a>
          <a className="muted" href="#how">How it works</a>
        </div>
      </div>
    </footer>
  )
}

function Preloader({ done }) {
  return (
    <div className={`preloader ${done ? 'out' : ''}`} aria-hidden={!done} aria-label="Loading Fustun">
      <div className="wrap">
        <div className="loader-ring" />
        <img src={ICON} width={28} height={28} alt="Fustun" />
        <div className="label">Fustun</div>
      </div>
    </div>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    els.forEach((el) => io.observe(el))
    const onLoad = () => setReady(true)
    const t = setTimeout(() => setReady(true), 900)
    window.addEventListener('load', onLoad)
    return () => { io.disconnect(); window.removeEventListener('load', onLoad); clearTimeout(t) }
  }, [])
  return (
    <main>
      <Preloader done={ready} />
      <Nav />
      <Hero />
      <Features />
      <How />
      <CTA />
      <Footer />
    </main>
  )
}
