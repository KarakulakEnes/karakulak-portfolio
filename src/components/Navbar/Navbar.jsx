import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const navItems = [
  { id: 'hero', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'education', key: 'nav.education' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact', path: '/contact' },
]

const sectionIds = navItems.filter((item) => !item.path).map((item) => item.id)

export default function Navbar() {
  const { language, changeLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(sectionIds)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (item) => {
    setMenuOpen(false)
    if (item.path) {
      navigate(item.path)
      return
    }
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: item.id } })
    } else {
      scrollToSection(item.id)
    }
  }

  const isItemActive = (item) => {
    if (item.path) return location.pathname === item.path
    if (location.pathname !== '/') return false
    return activeSection === item.id
  }

  return (
    <nav className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__container container">
        <button className="navbar__logo" onClick={() => handleNavClick(navItems[0])}>
          <span className="navbar__logo-bracket">{'<'}</span>
          <span className="navbar__logo-text">NEK</span>
          <span className="navbar__logo-bracket">{'/>'}</span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`navbar__link ${isItemActive(item) ? 'navbar__link--active' : ''}`}
                onClick={() => handleNavClick(item)}
              >
                <span className="navbar__link-text">{t(item.key)}</span>
                <span className="navbar__link-glow" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__controls">
          <div className="navbar__lang">
            <span
              className={`navbar__lang-indicator navbar__lang-indicator--${language}`}
              style={{ transform: language === 'tr' ? 'translateX(0)' : 'translateX(100%)' }}
              aria-hidden="true"
            />
            <button
              className={`navbar__lang-btn ${language === 'tr' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => changeLanguage('tr')}
            >
              <span className="navbar__lang-label">TR</span>
            </button>
            <button
              className={`navbar__lang-btn ${language === 'en' ? 'navbar__lang-btn--active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              <span className="navbar__lang-label">EN</span>
            </button>
          </div>

          <ThemeToggle />

          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
