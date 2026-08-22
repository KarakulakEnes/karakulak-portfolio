import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { personalInfo } from '../../data/skills'
import { scrollToSection } from '../../hooks/useScrollSpy'
import ParticleBackground from '../common/ParticleBackground'
import './Hero.css'

const titles = {
  tr: ['Yazılım Geliştirici', 'Full-Stack Developer', 'Problem Çözücü'],
  en: ['Software Developer', 'Full-Stack Developer', 'Problem Solver'],
}

export default function Hero() {
  const { t, language } = useLanguage()
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitles = titles[language]
    const current = currentTitles[titleIndex]
    let timeout

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1))
      }, 80)
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1))
      }, 40)
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false)
      setTitleIndex((prev) => (prev + 1) % currentTitles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, titleIndex, language])

  return (
    <section id="hero" className="hero">
      <ParticleBackground />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="hero__container container">
        <div className="hero__content">
          <p className="hero__greeting animate-fade-in-up">
            <span className="hero__greeting-icon" aria-hidden="true" />
            {t('hero.greeting')}
          </p>

          <h1 className="hero__name animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.name')}
          </h1>

          <div className="hero__typed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="hero__typed-prefix">&gt; </span>
            <span className="hero__typed-text mono">{displayText}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {t('hero.subtitle')}
          </p>

          <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              {t('hero.cta')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <Link to="/contact" className="btn btn-outline">
              {t('hero.contact')}
            </Link>
          </div>

          <div className="hero__social animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero__visual animate-float">
          <div className="hero__code-window glass-card">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename mono">portfolio.jsx</span>
            </div>
            <pre className="hero__code-body mono">
              <code>
                <span className="code-keyword">const</span> developer = {'{'}{'\n'}
                {'  '}name: <span className="code-string">"Nurettin Enes"</span>,{'\n'}
                {'  '}role: <span className="code-string">"Computer Engineer"</span>,{'\n'}
                {'  '}skills: [<span className="code-string">"React"</span>, <span className="code-string">"Java"</span>, <span className="code-string">"Spring"</span>],{'\n'}
                {'  '}passion: <span className="code-string">"Building great software"</span>,{'\n'}
                {'  '}<span className="code-func">build</span>: () =&gt; <span className="code-string">"Let's create!"</span>{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
      </div>
    </section>
  )
}
