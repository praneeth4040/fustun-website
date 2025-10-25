import { useEffect, useRef } from 'react'

export default function Preview(){
  const vRef = useRef(null)
  useEffect(() => {
    const v = vRef.current
    if (!v) return
    v.muted = true
    const play = v.play?.()
    if (play && typeof play.catch === 'function') {
      play.catch(() => setTimeout(() => v.play?.().catch(() => {}), 250))
    }
  }, [])
  return (
    <section id="preview" className="preview section reveal">
      <div className="container">
        <div className="badge">Preview</div>
        <h2 style={{margin: '10px 0 6px'}}>Quick video preview</h2>
        <p className="muted" style={{marginTop: 0, maxWidth: 680}}>A short demo of Fustun helping you summarize, capture highlights, and move faster on the web.</p>
        <div className="video-card" style={{marginTop: 18}}>
          <div className="video-wrap">
            <video
              ref={vRef}
              src="/demo.mp4"
              poster="/preview-poster.svg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
              disablePictureInPicture
              tabIndex={-1}
              aria-hidden="true"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className="video-caption">
            <span className="dot" aria-hidden="true" />
            Autoplay preview (muted, looping, no controls). Replace with your demo at public/demo.mp4 and optional poster at public/preview-poster.svg.
          </div>
        </div>
      </div>
    </section>
  )
}
