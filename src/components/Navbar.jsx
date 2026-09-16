import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__logo">
          {profile.nameEn}
          <sup>®</sup>
        </a>

        <nav className="nav__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--small btn--primary">
          联系合作
        </a>
      </div>
    </header>
  )
}
