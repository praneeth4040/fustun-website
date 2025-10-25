import { ICON, REPO } from '../config'

export default function Footer(){
  return (
    <footer className="footer" role="contentinfo">
      <div className="container cols">
        <div className="brand-block">
          <div className="brand-line">
            <img src={ICON} alt="Fustun" width={20} height={20} />
            <strong>Fustun</strong>
          </div>
          <p className="muted" style={{margin:'8px 0 10px'}}>Fustun is an <a className="adjunct-link" href="https://adjunct.in" target="_blank" rel="noreferrer">Adjunct</a> product.</p>
          <p className="muted" style={{margin:0}}>© {new Date().getFullYear()} • Open‑source on <a href={REPO} target="_blank" rel="noreferrer">GitHub</a></p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href="#features">Features</a>
          <a href="#preview">Preview</a>
          <a href="#how">How it works</a>
          <a href={REPO} target="_blank" rel="noreferrer">GitHub</a>
        </nav>

        <div className="footer-meta">
          <span className="kicker">Built for learners</span>
          <p className="muted" style={{margin:'8px 0 0'}}>AI study tool • research helper • free student tools</p>
        </div>
      </div>
    </footer>
  )
}
