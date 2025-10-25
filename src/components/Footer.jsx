import { ICON, REPO } from '../config'

export default function Footer(){
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
          <a className="muted" href="#preview">Preview</a>
          <a className="muted" href="#how">How it works</a>
        </div>
      </div>
    </footer>
  )
}
