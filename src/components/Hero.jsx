import { REPO } from '../config'
import Icon8 from './Icon8'
import Typewriter from './Typewriter'

export default function Hero(){
  return (
    <section className="hero container" id="top">
      <div className="hero-new">
        <div className="reveal">
          <div className="eyebrow"><span className="sr-only">Badge:</span>New • Open‑source</div>
          <h1>Turn long pages into quick notes</h1>
          <p className="lead">Fustun helps you skim less and learn more. Highlight text to get a clean summary, open tabs by command, and breeze through research.</p>
          <div>
            <Typewriter phrases={[
              'Summarize any page in seconds',
              'Highlight → instant summary',
              'Open tabs and trigger searches',
              'Copy clean notes as you read'
            ]} />
          </div>
          <div className="checks">
            <span className="check"><Icon8 names={["ok","checkmark","checkmark--v1","checked--v1"]} alt="check" /> Open‑source</span>
            <span className="check"><Icon8 names={["lock","lock--v1","privacy"]} alt="privacy" /> Privacy‑first</span>
            <span className="check"><Icon8 names={["donate","money-bag","money"]} alt="free" /> Free</span>
          </div>
          <div className="cta-row">
            <a className="btn primary" href={REPO} target="_blank" rel="noreferrer">Add to Chrome</a>
          </div>
        </div>
        <div className="showcase reveal" aria-hidden>
          <div className="browser">
            <div className="browser-head">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="page">
              <div className="line wide"></div>
              <div className="line"></div>
              <div className="line dim"></div>
              <div className="highlight">
                A paragraph you’re skimming… select a few sentences to get a crisp summary you can copy.
              </div>
              <div className="line"></div>
              <div className="line dim"></div>
            </div>
          </div>
          <div className="fab">F</div>
          <div className="summary-card">
            <div className="k">Summary</div>
            <div className="item"><span className="bullet"></span><span>Key ideas distilled into 3–5 bullets.</span></div>
            <div className="item"><span className="bullet"></span><span>Copy or expand when you need more detail.</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
