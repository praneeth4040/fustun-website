import { useEffect, useState } from 'react'

/**
 * Typewriter: cycles through phrases with typing/deleting animation.
 */
export default function Typewriter({ phrases, typing=28, deleting=18, pause=900 }){
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')
  useEffect(() => {
    let t
    const current = phrases[idx % phrases.length]
    if (phase === 'typing') {
      if (text.length < current.length) t = setTimeout(() => setText(current.slice(0, text.length + 1)), typing)
      else setPhase('pause')
    } else if (phase === 'pause') {
      t = setTimeout(() => setPhase('deleting'), pause)
    } else if (phase === 'deleting') {
      if (text.length > 0) t = setTimeout(() => setText(current.slice(0, text.length - 1)), deleting)
      else { setPhase('typing'); setIdx((i) => (i + 1) % phrases.length) }
    }
    return () => clearTimeout(t)
  }, [text, phase, idx, phrases, typing, deleting, pause])
  useEffect(() => { setText(''); setPhase('typing') }, [phrases])
  return (
    <span className="typed" aria-live="polite">{text}<span className="caret"/></span>
  )
}
