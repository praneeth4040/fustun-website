import { useEffect, useRef, useState } from 'react'

export default function Preview(){
  const vRef = useRef(null)
  const [ready, setReady] = useState(false)
  // Lazy load the video when the section is near viewport
  useEffect(() => {
    const el = document.getElementById('preview')
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        setReady(true)
      }
    }, { rootMargin: '200px 0px', threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  // Autoplay safeguard once the source is set
  useEffect(() => {
    const v = vRef.current
    if (!v || !ready) return
    v.muted = true
    const tryPlay = () => {
      const p = v.play?.()
      if (p && typeof p.catch === 'function') p.catch(() => setTimeout(tryPlay, 250))
    }
    tryPlay()
  }, [ready])
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
              src={ready ? '/demo.mp4' : undefined}
              poster="/preview-poster.svg"
              autoPlay
              muted
              loop
              playsInline
              preload={ready ? 'auto' : 'none'}
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
