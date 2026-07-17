import { useEffect, useState } from 'react'
import logoFull from '../assets/logo-full.png'
import './Preloader.css'

const MIN_DISPLAY_MS = 2400

export default function Preloader({ onFinish }) {
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHiding(true), MIN_DISPLAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const handleTransitionEnd = () => {
    if (hiding) onFinish?.()
  }

  return (
    <div
      className={`preloader ${hiding ? 'is-hidden' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      aria-hidden={hiding}
    >
      <img src={logoFull} alt="Amr Almasri — Interior Design & Engineering" className="preloader-logo" />
      <div className="preloader-bar">
        <span className="preloader-bar-fill" />
      </div>
    </div>
  )
}