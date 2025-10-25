import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Preview from './components/Preview'
import Features from './components/Features'
import How from './components/How'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

// App: wires up reveal-on-scroll and preloader, composes page sections
export default function App(){
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    els.forEach((el) => io.observe(el))
    const onLoad = () => setReady(true)
    const t = setTimeout(() => setReady(true), 900)
    window.addEventListener('load', onLoad)
    return () => { io.disconnect(); window.removeEventListener('load', onLoad); clearTimeout(t) }
  }, [])
  return (
    <main>
      <Preloader done={ready} />
      <Nav />
      <Hero />
      <Preview />
      <Features />
      <How />
      <CTA />
      <Footer />
    </main>
  )
}
