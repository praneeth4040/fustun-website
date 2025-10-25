import { useState } from 'react'
import { ICON8_COLOR } from '../config'

/**
 * Icon8: Loads an Icons8 ios-glyphs PNG by name with fallbacks.
 * Props: { name?: string, names?: string[], size?: number, alt?: string }
 */
export default function Icon8({ name, names, size = 18, alt = '' }) {
  const list = names ?? [name]
  const [i, setI] = useState(0)
  const [failed, setFailed] = useState(false)
  const makeSrc = (n) => `https://img.icons8.com/ios-glyphs/${size}/${ICON8_COLOR}/${n}.png`
  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 24 24'>
      <circle cx='12' cy='12' r='8' fill='%23${ICON8_COLOR}' fill-opacity='0.28'/>
    </svg>
  `)}`
  const src = failed ? placeholder : makeSrc(list[i])
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => {
        setI((prev) => {
          if (prev < list.length - 1) return prev + 1
          setFailed(true)
          return prev
        })
      }}
    />
  )
}
