import { REPO } from '../config'

export default function CTA(){
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
