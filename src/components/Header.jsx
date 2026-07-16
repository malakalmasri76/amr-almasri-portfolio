import { useState } from 'react'
import './Header.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className="wrap navbar">
        <a href="#top" className="logo">
          <span className="logo-mark"><span>AM</span></span> Amr Almasri
        </a>

        <div className={`navlinks ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="navtoggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
