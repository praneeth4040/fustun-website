import { useEffect, useState } from 'react'
import { ICON, REPO } from '../config'
import Icon8 from './Icon8'

export default function Nav(){
  const [stats, setStats] = useState({ stars: null, forks: null })
  const [open, setOpen] = useState(false)
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
        <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="#6b4f3b" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <a className="counter" href={`${REPO}/stargazers`} target="_blank" rel="noreferrer" title="GitHub Stars">
            <Icon8 name="star--v1" size={16} alt="Stars" /> <span>{stats.stars ?? '—'}</span>
          </a>
          <a className="counter" href={`${REPO}/forks`} target="_blank" rel="noreferrer" title="GitHub Forks">
            <Icon8 names={["code-fork","branch","git-fork","merge"]} size={16} alt="Forks" /> <span>{stats.forks ?? '—'}</span>
          </a>
          <a href="#features">Features</a>
          <a href="#preview">Preview</a>
          <a href="#how">How it works</a>
          <a className="btn" href={REPO} target="_blank" rel="noreferrer">View on GitHub</a>
        </nav>
      </div>
    </header>
  )
}
