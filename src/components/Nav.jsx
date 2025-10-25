import { useEffect, useState } from 'react'
import { ICON, REPO } from '../config'
import Icon8 from './Icon8'

export default function Nav(){
  const [stats, setStats] = useState({ stars: null, forks: null })
  useEffect(() => {
    fetch('https://api.github.com/repos/praneeth4040/Fustun-AiStudyingBuddie')
      .then(r => r.ok ? r.json() : Promise.reject(r))
      .then(data => setStats({ stars: data.stargazers_count ?? 0, forks: data.forks_count ?? 0 }))
      .catch(() => setStats(s => ({ ...s, stars: s.stars ?? 0, forks: s.forks ?? 0 })))
  }, [])

  return (
    <header className="nav" role="banner">
      <div className="container nav-inner">
        <a href="#top" className="brand" aria-label="Fustun home">
          <img src={ICON} alt="Fustun icon" />
          <span>Fustun</span>
        </a>

        <nav className="nav-links" aria-label="Main">
          <a className="gh-pill" href={REPO} target="_blank" rel="noreferrer" title="GitHub">
            <Icon8 name="star--v1" size={16} alt="Stars" />
            <span>{stats.stars ?? '—'}</span>
            <span className="sep">•</span>
            <Icon8 names={["code-fork","branch","git-fork","merge"]} size={16} alt="Forks" />
            <span>{stats.forks ?? '—'}</span>
          </a>
          <a className="btn" href={REPO} target="_blank" rel="noreferrer">Get on GitHub</a>
        </nav>
      </div>
    </header>
  )
}
